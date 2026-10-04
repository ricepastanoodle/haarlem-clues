// Service worker voor Haarlem Walk — maakt de tour bruikbaar met wisselend
// of geen bereik onderweg. Cachet de app zelf + alle audio/foto's die de tour
// nodig heeft; laat externe diensten (Supabase, Umami, het CLIP-model) met
// rust zodat die altijd hun eigen, actuele gedrag houden.
//
// Belangrijk bij een deploy: verhoog CACHE_VERSION als je iets in
// PRECACHE_URLS verandert (nieuw stopfoto, nieuw audiobestand) zodat oude
// caches worden opgeruimd en de nieuwe inhoud alsnog gedownload wordt.
const CACHE_VERSION = "v11";
const SHELL_CACHE = `haarlem-shell-${CACHE_VERSION}`;
const CONTENT_CACHE = `haarlem-content-${CACHE_VERSION}`;
const RUNTIME_CACHE = `haarlem-runtime-${CACHE_VERSION}`;
const ALL_CACHES = [SHELL_CACHE, CONTENT_CACHE, RUNTIME_CACHE];

// Statische inhoud die zelden/nooit verandert — in één keer gedownload zodra
// de service worker voor het eerst actief wordt (idealiter thuis op wifi,
// vóór het vertrek).
const PRECACHE_URLS = [
  "favicon.ico",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "manifest.json",
  "photos/demo-eiffeltoren.jpg",
  "photos/01-standbeeld-laurens-janszoon-coster.jpg",
  "photos/04-teylers-museum.jpg",
  "photos/06-molen-de-adriaan.jpg",
  "photos/08-amsterdamse-poort.jpg",
  "photos/10-waalse-kerk.jpg",
  "photos/12-monument-kenau-simonsdochter.jpg",
  "photos/20-frans-hals-museum.jpg",
  "photos/21-stadhuis-haarlem.jpg",
  "audio/01-standbeeld-laurens-janszoon-coster.mp3",
  "audio/02-achterzijde-van-de-kerk.mp3",
  "audio/03-taverne-de-waag.mp3",
  "audio/04-teylers-museum.mp3",
  "audio/05-teylers-hofje.mp3",
  "audio/06-molen-de-adriaan.mp3",
  "audio/07-de-koepel.mp3",
  "audio/08-amsterdamse-poort.mp3",
  "audio/09-gravestenenbrug.mp3",
  "audio/10-waalse-kerk.mp3",
  "audio/11-huis-barnaart.mp3",
  "audio/12-monument-kenau-simonsdochter.mp3",
  "audio/13-vrouw-in-het-verzet-monument.mp3",
  "audio/14-hofje-van-oorschot.mp3",
  "audio/15-ten-boom-museum.mp3",
  "audio/16-prinsenhof.mp3",
  "audio/17-lutherse-hofje.mp3",
  "audio/18-jopen.mp3",
  "audio/19-nieuwe-kerk.mp3",
  "audio/20-frans-hals-museum.mp3",
  "audio/21-stadhuis-haarlem.mp3",
  "audio/en/01-standbeeld-laurens-janszoon-coster.mp3",
  "audio/en/02-achterzijde-van-de-kerk.mp3",
  "audio/en/03-taverne-de-waag.mp3",
  "audio/en/04-teylers-museum.mp3",
  "audio/en/05-teylers-hofje.mp3",
  "audio/en/06-molen-de-adriaan.mp3",
  "audio/en/07-de-koepel.mp3",
  "audio/en/08-amsterdamse-poort.mp3",
  "audio/en/09-gravestenenbrug.mp3",
  "audio/en/10-waalse-kerk.mp3",
  "audio/en/11-huis-barnaart.mp3",
  "audio/en/12-monument-kenau-simonsdochter.mp3",
  "audio/en/13-vrouw-in-het-verzet-monument.mp3",
  "audio/en/14-hofje-van-oorschot.mp3",
  "audio/en/15-ten-boom-museum.mp3",
  "audio/en/16-prinsenhof.mp3",
  "audio/en/17-lutherse-hofje.mp3",
  "audio/en/18-jopen.mp3",
  "audio/en/19-nieuwe-kerk.mp3",
  "audio/en/20-frans-hals-museum.mp3",
  "audio/en/21-stadhuis-haarlem.mp3"
];

// Paden die WEL vaak veranderen (cache-busting query strings). Deze cachen we
// runtime i.p.v. vooraf, met een netwerk-eerst-strategie, zodat je altijd de
// nieuwste versie krijgt zolang er internet is — en de laatst opgehaalde
// versie zodra dat niet zo is. De query string doet niet mee in de cache-key,
// zodat oudere versies vanzelf overschreven worden.
function isAppShellPath(pathname) {
  return (
    pathname === "/" ||
    pathname.endsWith("/index.html") ||
    pathname.endsWith("/tour.html") ||
    pathname.endsWith("/style.css") ||
    pathname.endsWith("/tour.css") ||
    pathname.endsWith("/tour.js") ||
    pathname.endsWith("/i18n.js")
  );
}

function isContentPath(pathname) {
  return pathname.includes("/audio/") || pathname.includes("/photos/") ||
    /\/(favicon\.ico|apple-touch-icon\.png|icon-192\.png|icon-512\.png|manifest\.json)$/.test(pathname);
}

// Cache-key zonder query string, zodat "tour.js?v=95" en "tour.js?v=96"
// dezelfde entry delen (de nieuwste overschrijft de oudste automatisch).
function shellCacheKey(request) {
  const url = new URL(request.url);
  return new Request(url.origin + url.pathname);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CONTENT_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n.startsWith("haarlem-") && !ALL_CACHES.includes(n)).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const key = shellCacheKey(request);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      const cache = await caches.open(SHELL_CACHE);
      cache.put(key, fresh.clone());
    }
    return fresh;
  } catch (err) {
    const cached = await caches.match(key, { ignoreSearch: true });
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;
  const fresh = await fetch(request);
  if (fresh && fresh.ok) {
    const cache = await caches.open(CONTENT_CACHE);
    cache.put(request, fresh.clone());
  }
  return fresh;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok) cache.put(request, fresh.clone());
      return fresh;
    })
    .catch(() => null);
  return cached || (await networkPromise) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return; // POSTs (Supabase, Umami) altijd gewoon naar het netwerk

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isOsmTile = /(^|\.)tile\.openstreetmap\.org$/.test(url.hostname);
  const isLeaflet = url.hostname === "unpkg.com";
  const isFonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

  if (isSameOrigin) {
    if (isAppShellPath(url.pathname)) {
      event.respondWith(networkFirst(req));
    } else if (isContentPath(url.pathname)) {
      event.respondWith(cacheFirst(req));
    }
    // overige eigen paden (bv. sw.js zelf) met rust laten
    return;
  }

  // Alles wat hier niet expliciet gewenst is (Supabase, Umami, het CLIP-model
  // via jsdelivr/huggingface) laten we volledig met rust — die moeten altijd
  // vers zijn of regelen hun eigen caching.
  if (isOsmTile || isLeaflet || isFonts) {
    event.respondWith(staleWhileRevalidate(req));
  }
});
