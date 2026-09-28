// Speurtocht data — echte route door Haarlem.
// hint: nog niet ingevuld, dat doe jij later per stop.
// type "photo": gebruiker maakt een foto, wordt gecheckt met een gratis AI-model (MobileNet).
// type "gps": wordt straks een panorama-zoekspelletje met jouw eigen 360°-foto's
//             (zoals getest in panorama-test.html) — nog niet gekoppeld.
const STOPS_NL = [
  {
    title: "Standbeeld Laurens Janszoon Coster",
    audio: "audio/01-standbeeld-laurens-janszoon-coster.mp3",
    answerPhoto: "photos/01-standbeeld-laurens-janszoon-coster.jpg",
    hint: "Al eeuwen houdt een bronzen man op de Grote Markt de letter omhoog die de wereld leerde lezen.",
    extraHint: "",
    answer: "Het groen uitgeslagen bronzen standbeeld van Laurens Janszoon Coster op zijn sokkel, met zijn hand omhoog en de toren van de Grote Kerk op de achtergrond.",
    type: "photo",
    description: "a green weathered bronze statue of a man in long robes standing on a stone pedestal, one arm raised holding a small object, with a tall gothic church tower in the background"
  },
  {
    title: "De St. Bavokerk",
    audio: "audio/02-achterzijde-van-de-kerk.mp3",
    hint: "Voorbij de kerk wordt de stad steeds stiller, tot je uitkomt bij de plek waar recht wordt gesproken.",
    extraHint: "Zoek de stenen poort met een leeuwenkop erboven.",
    question: "Hoe heet de rechtbank van Haarlem?",
    answer: "De Appelaar",
    answers: ["De Appelaar", "Appelaar"],
    type: "quiz"
  },
  {
    title: "Taverne De Waag",
    audio: "audio/03-taverne-de-waag.mp3",
    hint: "Aan de gevel van de oude waag wachten rode luiken tot jij ze komt tellen.",
    extraHint: "Tel goed: het zijn er meer dan zeventien, maar minder dan zesentwintig — kijk zowel boven als beneden, aan de hele voorgevel.",
    question: "Hoeveel rode luiken zijn er?",
    answer: "20",
    type: "quiz"
  },
  {
    title: "Teylers Museum",
    audio: "audio/04-teylers-museum.mp3",
    answerPhoto: "photos/04-teylers-museum.jpg",
    hint: "Hoog boven de gevel waakt een verweerd gezelschap, groen als de tijd.",
    extraHint: "Een gevleugelde gestalte heft er twee lauwerkransen omhoog, terwijl haar metgezellen zwijgend toekijken.",
    answer: "De groep bronzen (groen uitgeslagen) beelden bovenop het dak van Teylers Museum.",
    type: "photo",
    description: "a group of weathered green bronze statues standing together on the roof of a building"
  },
  {
    title: "Teylers Hofje",
    audio: "audio/05-teylers-hofje.mp3",
    hint: "Stenen zuilen dragen een geheim, in het Latijn gebeiteld.",
    extraHint: "Het jaartal ligt na 1781, maar vóór 1794.",
    question: "In welk jaar is het Teylers Hofje opgericht?",
    answer: "1785",
    type: "quiz"
  },
  {
    title: "Molen De Adriaan",
    audio: "audio/06-molen-de-adriaan.mp3",
    answerPhoto: "photos/06-molen-de-adriaan.jpg",
    hint: "Aan het water draait al eeuwen een reus met wapperende armen.",
    extraHint: "Het is een echte molen met houten wieken, vlak naast het water waar bootjes liggen.",
    answer: "Molen De Adriaan, de houten poldermolen aan het Spaarne.",
    type: "photo",
    description: "a Dutch windmill with sails standing next to water and boats"
  },
  {
    title: "De Koepel",
    audio: "audio/07-de-koepel.mp3",
    hint: "Ga naar binnen, waar een ronde reus ooit honderden zielen bewaakte achter genummerde deuren.",
    extraHint: "Kijk goed omhoog — de nummers lopen op naarmate je hoger in de koepel kijkt, tot je bij de bovenste verdieping het hoogste nummer vindt.",
    question: "Wat is het hoogst genummerde gevangeniscel binnen De Koepel?",
    answer: "204",
    type: "quiz"
  },
  {
    title: "Amsterdamse Poort",
    audio: "audio/08-amsterdamse-poort.mp3",
    answerPhoto: "photos/08-amsterdamse-poort.jpg",
    hint: "Hoog in de bakstenen muur van de poort verbergen zich drie stille wapens, ingemetseld door de eeuwen heen.",
    extraHint: "Zoek de rij van drie ruitvormige tekens boven de doorgang, met een gevlochten knoop in het midden.",
    answer: "De drie ruitvormige, ingemetselde wapentekens in de muur van de Amsterdamse Poort, met een gevlochten knoop in het midden.",
    type: "photo",
    description: "a close-up of three diamond-shaped stone emblems set into a brick wall, the middle one decorated with a woven knot pattern, flanked by two emblems with diagonal brick striping"
  },
  {
    title: "Gravestenenbrug",
    audio: "audio/09-gravestenenbrug.mp3",
    hint: "Over het water welft een brug die je moet beklimmen, trede voor trede.",
    extraHint: "Het is een strikvraag — kijk nog eens goed voor je begint te tellen.",
    question: "Hoeveel traptreden heeft de Gravestenenbrug?",
    answer: "0",
    type: "quiz"
  },
  {
    title: "Waalse Kerk",
    audio: "audio/10-waalse-kerk.mp3",
    answerPhoto: "photos/10-waalse-kerk.jpg",
    hint: "Niet iedereen bij de kerk staat op de preekstoel. Ergens dichtbij zit een bronzen vrouw stil te lezen, met haar rug tegen de bakstenen muur.",
    extraHint: "Ze zit op een stapel bladzijden, met haar hand tegen haar hoofd. Zoek het kleine bronzen beeldje op haar sokkel en fotografeer het van dichtbij.",
    answer: "Het bronzen beeldje 'Kort Jakje', een zittende vrouw op een stapel bladzijden, bij de Waalse Kerk.",
    type: "photo",
    description: "a small bronze statue of a woman sitting on a stack of book pages, leaning against a brick wall"
  },
  {
    title: "Huis Barnaart",
    audio: "audio/11-huis-barnaart.mp3",
    hint: "Een statig huis aan de gracht kijkt je aan met tal van ogen op de voorgevel.",
    extraHint: "Tel alle ramen die je aan de voorkant van het huis ziet, van links naar rechts.",
    question: "Hoeveel ramen zitten er aan de voorkant van Huis Barnaart?",
    answer: "26",
    type: "quiz"
  },
  {
    title: "Monument Kenau Simonsdochter",
    audio: "audio/12-monument-kenau-simonsdochter.mp3",
    answerPhoto: "photos/12-monument-kenau-simonsdochter.jpg",
    hint: "Twee brons geworden helden bewaken hier nog altijd de stad die zij ooit verdedigden.",
    extraHint: "",
    answer: "Het bronzen standbeeld van Kenau Simonsdochter Hasselaer en Wigbolt Ripperda, samen op één sokkel.",
    type: "photo",
    description: "a bronze statue of a man and a woman standing together, the man wearing a wide-brimmed hat and holding a long pike, in a town square"
  },
  {
    title: "Vrouw in het Verzet monument",
    audio: "audio/13-vrouw-in-het-verzet-monument.mp3",
    hint: "Een jonge verzetsstrijdster kreeg hier een plek in brons, midden in het groen.",
    extraHint: "Onder haar voeten, in steen gehouwen, schuilt haar echte naam.",
    question: "Wat was de naam van de vrouw die in het verzet was en hier een standbeeld heeft gekregen?",
    answer: "Hannie Schaft",
    type: "quiz"
  },
  {
    title: "Hofje van Oorschot",
    audio: "audio/14-hofje-van-oorschot.mp3",
    hint: "Achter een eenvoudige poort schuilt een hofje waar vrouwen ooit een veilig thuis vonden.",
    extraHint: "Het jaartal staat gebeiteld boven de poort — ergens in de jaren zestig of zeventig van de achttiende eeuw.",
    question: "In welk jaar is de Begijnhof opgericht?",
    answer: "1769",
    type: "quiz"
  },
  {
    title: "Ten Boom Museum",
    audio: "audio/15-ten-boom-museum.mp3",
    hint: "Op de zijmuur van dit huis valt iets te ontdekken, als je goed om je heen kijkt.",
    extraHint: "Het is een kaart van haar wereldreizen — daarop vind je het jaartal.",
    question: "In welk jaar reisde Ten Boom voor het eerst af naar Australië?",
    answer: "1953",
    type: "quiz"
  },
  {
    title: "Prinsenhof",
    audio: "audio/16-prinsenhof.mp3",
    hint: "In een rustige tuin vol groen staat een bekend gezicht dat je al eerder tegenkwam.",
    extraHint: "Dezelfde man die op de Grote Markt de letter omhooghoudt, staat hier ook — zijn naam staat gebeiteld onder zijn voeten.",
    question: "Wie is de man die in de Hortus tuin staat?",
    answer: "Laurens Janszoon Coster",
    answers: ["Laurens Janszoon Coster", "Laurens Jz Coster"],
    type: "quiz"
  },
  {
    title: "Lutherse Hofje",
    audio: "audio/17-lutherse-hofje.mp3",
    hint: "Elke zondag klinkt hier nog een kerkklok, precies op tijd voor de dienst.",
    extraHint: "Je hoeft niet naar binnen — bij het hek hangt een bord dat het geheim verklapt.",
    question: "Hoe laat begint de dienst op zondag?",
    answer: "10:30",
    answers: ["10:30", "half elf"],
    type: "quiz"
  },
  {
    title: "Jopen",
    audio: "audio/18-jopen.mp3",
    hint: "Een kerk zonder dienst, maar met een heel andere vorm van verlossing binnen haar muren.",
    extraHint: "Wat hier ooit heilig was, is nu vervangen door hop en gerst.",
    question: "Wat wordt er hedendaags voornamelijk verkocht in de Jopenkerk?",
    answer: "bier",
    type: "quiz"
  },
  {
    title: "Nieuwe Kerk",
    audio: "audio/19-nieuwe-kerk.mp3",
    hint: "Aan een rustig pleintje, niet ver van het centrum, staat een kerk die ondanks haar naam allang niet meer nieuw is.",
    extraHint: "Loop naar de oostkant van het gebouw — daar staat het jaartal in Romeinse cijfers gebeiteld.",
    question: "In welk jaar is de Nieuwe Kerk opgebouwd?",
    answer: "1649",
    type: "quiz"
  },
  {
    title: "Frans Hals Museum",
    audio: "audio/20-frans-hals-museum.mp3",
    answerPhoto: "photos/20-frans-hals-museum.png",
    hint: "Niet de deur, maar de top van de gevel verbergt twee stenen wachters.",
    extraHint: "Tussen hen in staat een wapenschild met een jaartal dat begint met 19.",
    answer: "De geveltop met het jaartal 1912, twee beelden op de hoeken en een klein beeld boven in de top.",
    type: "photo",
    description: "a decorative stone gable at the top of a building with statues and a coat of arms"
  },
  {
    title: "Stadhuis Haarlem",
    audio: "audio/21-stadhuis-haarlem.mp3",
    answerPhoto: "photos/21-stadhuis-haarlem.jpg",
    hint: "Boven de ingang spreekt een gevel al eeuwen in een oude, vergeten taal.",
    extraHint: "Gouden letters op een donkere ondergrond — een Latijnse tekst boven de deur.",
    answer: "De gevelsteen boven de ingang, met het opschrift 'S.P.Q.H.' en het jaartal 1630.",
    type: "photo",
    description: "a stone gable above the entrance with a Latin inscription reading SPQH and HANC SACRAM THEMIDIS DOMUM SENATUS SEDEM NE TEMERATO CIVIS UNQUAM, carved in gold letters on a dark background, with 'ANNO 1630' inscribed below it"
  }
];

// Echte coördinaten uit jouw Google Maps-route (Grote Markt als startpunt, dan de stops).
const START_COORD = [52.381395, 4.6359467];
const ROUTE_COORDS = [
  [52.3814641, 4.6366262], // Standbeeld Laurens Janszoon Coster
  [52.3811669, 4.6385832], // De St. Bavokerk — stopt bij het begin van de steeg naar de rechtbank, bij Brasserie Van Beinum
  [52.380213, 4.6397552],  // Taverne De Waag
  [52.3803511, 4.6403448], // Teylers Museum
  [52.3820564, 4.6432713], // Teylers Hofje
  [52.3838047, 4.6426257], // Molen De Adriaan
  [52.3835597, 4.6455402], // De Koepel
  [52.3805162, 4.6465988], // Amsterdamse Poort
  [52.3802938, 4.6411002], // Gravestenenbrug
  [52.3824868, 4.6391539], // Waalse Kerk
  [52.3846693, 4.6374257], // Huis Barnaart
  [52.3873225, 4.6369366], // Monument Kenau Simonsdochter
  [52.387054, 4.633841],   // Vrouw in het Verzet monument
  [52.3832175, 4.6349943], // Hofje van Oorschot
  [52.382251, 4.6353127],  // Ten Boom Museum
  [52.3814994, 4.6334517], // Prinsenhof
  [52.3840052, 4.6314806], // Lutherse Hofje
  [52.3812145, 4.6297315], // Jopen
  [52.37728, 4.6297456],   // Nieuwe Kerk
  [52.3765849, 4.633667],  // Frans Hals Museum
  [52.3808764, 4.6367228], // Stadsklooster Haarlem — geen eigen stop, puur voor de looproute
  [52.3813779, 4.6350106]  // Stadhuis Haarlem
];

// Koppelt elke ROUTE_COORDS-positie aan de bijbehorende STOPS-index, of null als dat
// punt geen eigen opdracht heeft (de looproute loopt er wel gewoon langs, bv. het
// Stadsklooster). Hierdoor hoeven ROUTE_COORDS en STOPS niet meer 1-op-1 gelijk te lopen.
const ROUTE_STOP_INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, null, 20];

// Omgekeerde opzoektabel: voor een STOPS-index, op welke ROUTE_COORDS-positie staat 'ie.
const STOP_TO_ROUTE_INDEX = ROUTE_STOP_INDEX.reduce((acc, stopIdx, routeIdx) => {
  if (stopIdx !== null) acc[stopIdx] = routeIdx;
  return acc;
}, []);

// Stop 1 (standbeeld Coster) staat op de Grote Markt zelf. De kaart die je als eerste
// ziet (nog vóór je een hint hebt gebruikt) toont een ruime cirkel van 50m rond het
// midden van het plein. Zodra je de extra hint gebruikt, toont die een kleinere,
// nauwkeurigere cirkel — de exacte locatie zelf blijft voorbehouden aan het
// antwoord-onthulscherm.
STOPS_NL[0].searchCenter = START_COORD;
STOPS_NL[0].searchRadius = 50;
STOPS_NL[0].hintSearchCenter = [52.38144193203604, 4.6364082052682996];
STOPS_NL[0].hintSearchRadius = 30;

// Stop 4 (Teylers Museum): de foto-opdracht zelf (de juiste beeldengroep op het dak
// vinden) is al lastig genoeg — geen extra zoekcirkel ervoor, de kaart wijst gewoon
// direct naar de stop, net als bij een vraag- of gps-stop.
STOPS_NL[3].skipCircle = true;
// Op het antwoordscherm is de kaart hier overbodig — alleen de foto is nodig.
STOPS_NL[3].skipRevealMap = true;

// Stop 6 (Molen De Adriaan): geen kaartje bij de extra hint nodig (de hoofdkaart
// wijst al de weg) — wel een kleine tip onder de eerste hint.
STOPS_NL[5].skipHintMap = true;
STOPS_NL[5].tip = "Tip: maak de foto van een afstand.";

// Stop 8 (Amsterdamse Poort): geen zoekcirkel, de kaart wijst direct naar de stop —
// en op de antwoordpagina is alleen de foto nodig, geen kaart.
STOPS_NL[7].skipCircle = true;
STOPS_NL[7].skipRevealMap = true;

// Stop 10 (Waalse Kerk): het te fotograferen beeldje is klein en lastig te vinden —
// een kleinere cirkel, precies gecentreerd op het beeldje zelf, maakt de zoektocht behapbaar.
STOPS_NL[9].searchCenter = [52.38247, 4.638948];
STOPS_NL[9].searchRadius = 30;
// Bij de extra hint mag de cirkel nog kleiner, zelfde (precieze) middelpunt.
STOPS_NL[9].hintSearchCenter = [52.38247, 4.638948];
STOPS_NL[9].hintSearchRadius = 18;
// Ook op het antwoordscherm wijst de kaart precies naar het beeldje, niet naar de
// algemene locatie van de kerk.
STOPS_NL[9].preciseCoord = [52.38247, 4.638948];

// Stop 12 (Monument Kenau Simonsdochter): bij de extra hint een kleinere cirkel
// dan de standaard 70m.
STOPS_NL[11].hintSearchRadius = 30;

// Stop 20 (Frans Hals Museum): de foto-opdracht (de geveltop vinden) is al lastig
// genoeg — geen extra zoekcirkel, de kaart wijst direct naar de stop.
STOPS_NL[19].skipCircle = true;
// Op het antwoordscherm is de kaart hier overbodig — alleen de foto is nodig.
STOPS_NL[19].skipRevealMap = true;

// Stop 21 (Stadhuis Haarlem): geen zoekcirkel, de kaart wijst direct naar de stop.
STOPS_NL[20].skipCircle = true;

// Gedeelde uitlegpagina over Romeinse cijfers (met een willekeurig ander voorbeeldjaar,
// nooit het echte antwoord) — herbruikbaar bij elke stop waar het jaartal zo genoteerd staat.
const ROMAN_NUMERALS_INFO_OVERLAY = {
  label: "Hoe werken Romeinse cijfers?",
  title: "Romeinse cijfers",
  html: `
    <p>Romeinse cijfers gebruiken letters in plaats van 0 t/m 9:</p>
    <table>
      <tr><th>Letter</th><th>Waarde</th></tr>
      <tr><td>I</td><td>1</td></tr>
      <tr><td>V</td><td>5</td></tr>
      <tr><td>X</td><td>10</td></tr>
      <tr><td>L</td><td>50</td></tr>
      <tr><td>C</td><td>100</td></tr>
      <tr><td>D</td><td>500</td></tr>
      <tr><td>M</td><td>1000</td></tr>
    </table>
    <p>Staat een kleinere letter vóór een grotere, dan trek je af in plaats van op te tellen. Zo is <strong>IV</strong> niet 6, maar 5&nbsp;−&nbsp;1&nbsp;=&nbsp;4. En <strong>IX</strong> is 10&nbsp;−&nbsp;1&nbsp;=&nbsp;9.</p>
    <p><strong>Voorbeeld</strong> (een willekeurig ander jaartal, niet het antwoord): 1994 wordt <strong>MCMXCIV</strong>.</p>
    <p>M = 1000, CM = 900 (1000&nbsp;−&nbsp;100), XC = 90 (100&nbsp;−&nbsp;10), IV = 4 (5&nbsp;−&nbsp;1). Samen: 1000 + 900 + 90 + 4 = 1994.</p>
  `
};

// Stop 5 (Teylers Hofje): het jaartal staat er in Romeinse cijfers.
STOPS_NL[4].infoOverlay = ROMAN_NUMERALS_INFO_OVERLAY;
// Stop 19 (Nieuwe Kerk): ook hier staat het jaartal in Romeinse cijfers.
STOPS_NL[18].infoOverlay = ROMAN_NUMERALS_INFO_OVERLAY;

// ---- Engelse variant ----
// EN_OVERRIDES bevat alleen de vertaalde velden per stop (positioneel gelijk aan
// STOPS_NL) — audio/answerPhoto/type/description/skipCircle/preciseCoord e.d.
// worden via de spread hieronder automatisch overgenomen uit STOPS_NL, zodat
// die nooit dubbel onderhouden hoeven te worden.
const ROMAN_NUMERALS_INFO_OVERLAY_EN = {
  label: "How do Roman numerals work?",
  title: "Roman numerals",
  html: `
    <p>Roman numerals use letters instead of 0 through 9:</p>
    <table>
      <tr><th>Letter</th><th>Value</th></tr>
      <tr><td>I</td><td>1</td></tr>
      <tr><td>V</td><td>5</td></tr>
      <tr><td>X</td><td>10</td></tr>
      <tr><td>L</td><td>50</td></tr>
      <tr><td>C</td><td>100</td></tr>
      <tr><td>D</td><td>500</td></tr>
      <tr><td>M</td><td>1000</td></tr>
    </table>
    <p>When a smaller letter comes before a larger one, you subtract instead of add. So <strong>IV</strong> isn't 6, but 5&nbsp;−&nbsp;1&nbsp;=&nbsp;4. And <strong>IX</strong> is 10&nbsp;−&nbsp;1&nbsp;=&nbsp;9.</p>
    <p><strong>Example</strong> (a different, random year — not the answer): 1994 becomes <strong>MCMXCIV</strong>.</p>
    <p>M = 1000, CM = 900 (1000&nbsp;−&nbsp;100), XC = 90 (100&nbsp;−&nbsp;10), IV = 4 (5&nbsp;−&nbsp;1). Together: 1000 + 900 + 90 + 4 = 1994.</p>
  `
};

const EN_OVERRIDES = [
  {
    audio: "audio/en/01-standbeeld-laurens-janszoon-coster.mp3",
    title: "Standbeeld Laurens Janszoon Coster",
    hint: "For centuries, a bronze man on the Grote Markt has held up the letter that taught the world to read.",
    extraHint: "",
    answer: "The weathered green bronze statue of Laurens Janszoon Coster on his pedestal, hand raised, with the tower of the Grote Kerk in the background.",
    type: "photo"
  },
  {
    audio: "audio/en/02-achterzijde-van-de-kerk.mp3",
    title: "De St. Bavokerk",
    hint: "Past the church, the city grows quieter, until you reach the place where justice is spoken.",
    extraHint: "Look for the stone gate with a lion's head above it.",
    question: "What is Haarlem's courthouse called?",
    answer: "De Appelaar",
    answers: ["De Appelaar", "Appelaar"],
    type: "quiz"
  },
  {
    audio: "audio/en/03-taverne-de-waag.mp3",
    title: "Taverne De Waag",
    hint: "On the facade of the old weigh house, red shutters are waiting for you to count them.",
    extraHint: "Count carefully: there are more than seventeen but fewer than twenty-six — look both upstairs and downstairs, across the whole facade.",
    question: "How many red shutters are there?",
    answer: "20",
    type: "quiz"
  },
  {
    audio: "audio/en/04-teylers-museum.mp3",
    title: "Teylers Museum",
    hint: "High above the facade, a weathered company keeps watch, green with age.",
    extraHint: "A winged figure raises two laurel wreaths, while her companions look on in silence.",
    answer: "The group of weathered green bronze statues on top of the roof of Teylers Museum.",
    type: "photo"
  },
  {
    audio: "audio/en/05-teylers-hofje.mp3",
    title: "Teylers Hofje",
    hint: "Stone columns carry a secret, carved in Latin.",
    extraHint: "The year is after 1781, but before 1794.",
    question: "In what year was the Teylers Hofje founded?",
    answer: "1785",
    infoOverlay: ROMAN_NUMERALS_INFO_OVERLAY_EN,
    type: "quiz"
  },
  {
    audio: "audio/en/06-molen-de-adriaan.mp3",
    title: "Molen De Adriaan",
    hint: "By the water, a giant with waving arms has been turning for centuries.",
    extraHint: "It's a real windmill with wooden sails, right next to the water where boats are moored.",
    answer: "Molen De Adriaan, the wooden polder windmill on the Spaarne river.",
    tip: "Tip: take the photo from a distance.",
    type: "photo"
  },
  {
    audio: "audio/en/07-de-koepel.mp3",
    title: "De Koepel",
    hint: "Go inside, where a round giant once guarded hundreds of souls behind numbered doors.",
    extraHint: "Look up carefully — the numbers increase the higher you look in the dome, until you find the highest number on the top floor.",
    question: "What is the highest-numbered prison cell inside De Koepel?",
    answer: "204",
    type: "quiz"
  },
  {
    audio: "audio/en/08-amsterdamse-poort.mp3",
    title: "Amsterdamse Poort",
    hint: "High in the brick wall of the gate, three silent emblems hide, built into the stone through the centuries.",
    extraHint: "Look for the row of three diamond-shaped emblems above the passage, with a woven knot in the middle.",
    answer: "The three diamond-shaped emblems built into the wall of the Amsterdamse Poort, with a woven knot in the middle.",
    type: "photo"
  },
  {
    audio: "audio/en/09-gravestenenbrug.mp3",
    title: "Gravestenenbrug",
    hint: "Over the water arches a bridge you must climb, step by step.",
    extraHint: "It's a trick question — take a good look before you start counting.",
    question: "How many steps does the Gravestenenbrug have?",
    answer: "0",
    type: "quiz"
  },
  {
    audio: "audio/en/10-waalse-kerk.mp3",
    title: "Waalse Kerk",
    hint: "Not everyone at the church stands in the pulpit. Somewhere nearby, a bronze woman sits quietly reading, her back against the brick wall.",
    extraHint: "She sits on a stack of pages, one hand against her head. Find the small bronze statue on its pedestal and photograph it up close.",
    answer: "The small bronze statue 'Kort Jakje,' a seated woman on a stack of pages, near the Waalse Kerk.",
    type: "photo"
  },
  {
    audio: "audio/en/11-huis-barnaart.mp3",
    title: "Huis Barnaart",
    hint: "A stately house on the canal looks back at you with a great many eyes on its facade.",
    extraHint: "Count all the windows you see on the front of the house, from left to right.",
    question: "How many windows are on the front of Huis Barnaart?",
    answer: "26",
    type: "quiz"
  },
  {
    audio: "audio/en/12-monument-kenau-simonsdochter.mp3",
    title: "Monument Kenau Simonsdochter",
    hint: "Two heroes turned to bronze still guard the city they once defended.",
    extraHint: "",
    answer: "The bronze statue of Kenau Simonsdochter Hasselaer and Wigbolt Ripperda, standing together on one pedestal.",
    type: "photo"
  },
  {
    audio: "audio/en/13-vrouw-in-het-verzet-monument.mp3",
    title: "Vrouw in het Verzet monument",
    hint: "A young resistance fighter was given a place here in bronze, surrounded by greenery.",
    extraHint: "Beneath her feet, carved in stone, her real name is hidden.",
    question: "What was the name of the resistance fighter honored with a statue here?",
    answer: "Hannie Schaft",
    type: "quiz"
  },
  {
    audio: "audio/en/14-hofje-van-oorschot.mp3",
    title: "Hofje van Oorschot",
    hint: "Behind a simple gate lies a hofje where women once found a safe home.",
    extraHint: "The year is carved above the gate — somewhere in the 1760s or 1770s.",
    question: "In what year was the Begijnhof founded?",
    answer: "1769",
    type: "quiz"
  },
  {
    audio: "audio/en/15-ten-boom-museum.mp3",
    title: "Ten Boom Museum",
    hint: "On the side wall of this house there's something to discover, if you look closely.",
    extraHint: "It's a map of her travels around the world — you'll find the year on it.",
    question: "In what year did Ten Boom first travel to Australia?",
    answer: "1953",
    type: "quiz"
  },
  {
    audio: "audio/en/16-prinsenhof.mp3",
    title: "Prinsenhof",
    hint: "In a quiet, green garden stands a familiar face you've already met before.",
    extraHint: "The same man who holds up the letter on the Grote Markt stands here too — his name is carved beneath his feet.",
    question: "Who is the man standing in the Hortus garden?",
    answer: "Laurens Janszoon Coster",
    answers: ["Laurens Janszoon Coster", "Laurens Jz Coster"],
    type: "quiz"
  },
  {
    audio: "audio/en/17-lutherse-hofje.mp3",
    title: "Lutherse Hofje",
    hint: "Every Sunday, a church bell still rings here, right on time for the service.",
    extraHint: "You don't need to go inside — a sign by the gate gives away the secret.",
    question: "What time does the Sunday service start?",
    answer: "10:30",
    answers: ["10:30", "half past ten"],
    type: "quiz"
  },
  {
    audio: "audio/en/18-jopen.mp3",
    title: "Jopen",
    hint: "A church without services, but with a very different kind of salvation within its walls.",
    extraHint: "What was once sacred here has now been replaced by hops and barley.",
    question: "What is mainly sold in the Jopenkerk today?",
    answer: "beer",
    answers: ["beer", "bier"],
    type: "quiz"
  },
  {
    audio: "audio/en/19-nieuwe-kerk.mp3",
    title: "Nieuwe Kerk",
    hint: "On a quiet little square, not far from the center, stands a church that — despite its name — hasn't been new for a very long time.",
    extraHint: "Walk to the east side of the building — the year is carved there in Roman numerals.",
    question: "In what year was the Nieuwe Kerk built?",
    answer: "1649",
    infoOverlay: ROMAN_NUMERALS_INFO_OVERLAY_EN,
    type: "quiz"
  },
  {
    audio: "audio/en/20-frans-hals-museum.mp3",
    title: "Frans Hals Museum",
    hint: "Not the door, but the top of the facade hides two stone guardians.",
    extraHint: "Between them stands a coat of arms with a year that begins with 19.",
    answer: "The gable top with the year 1912, two statues on the corners, and a small statue at the very top.",
    type: "photo"
  },
  {
    audio: "audio/en/21-stadhuis-haarlem.mp3",
    title: "Stadhuis Haarlem",
    hint: "Above the entrance, a facade has been speaking for centuries in an old, forgotten language.",
    extraHint: "Golden letters on a dark background — a Latin inscription above the door.",
    answer: "The gable stone above the entrance, inscribed 'S.P.Q.H.' with the year 1630.",
    type: "photo"
  }
];

const STOPS_EN = STOPS_NL.map((stop, i) => ({ ...stop, ...EN_OVERRIDES[i] }));

// Eén schakelpunt voor de taal — alle ~20 plekken verderop die STOPS[...]
// gebruiken blijven ongewijzigd werken, ongeacht welke taal actief is.
let STOPS = getLang() === "en" ? STOPS_EN : STOPS_NL;

const STORAGE_KEY = "haarlemTourProgress";

// Puntensysteem
const STARTING_POINTS = 100;
const HINT_COST = 10;
const ANSWER_REVEAL_COST = 20;
const COMPLETE_REWARD = 20;
const FAST_TOUR_SECONDS = 90 * 60; // grens voor de "Snelle wandelaar"-badge

// Kleine wrapper om Umami-events te versturen — faalt stil als het script
// geblokkeerd is (adblocker) of nog niet geladen is.
function trackEvent(name, data) {
  try {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(name, data);
    }
  } catch (err) {
    // Analytics mag nooit de tour zelf breken.
  }
}

let state = {
  currentStep: -1, // -1 = intro, 0..STOPS.length-1 = stap, STOPS.length = klaar
  phase: "challenge", // "challenge" = opdracht, "info" = tussenscherm na het oplossen
  photos: {},
  completed: {}, // { [stopIndex]: true } zodra de minigame van die stop is opgelost
  hintsUsed: {}, // { [stopIndex]: true } zodra de extra hint is opgevraagd — blijft zichtbaar
  answersRevealed: {}, // { [stopIndex]: true } zodra het antwoord is onthuld — blijft zichtbaar
  points: STARTING_POINTS
};

let pendingPhotoDataUrl = null; // foto die nog niet gevalideerd/geaccepteerd is

// CLIP (via transformers.js) — gratis, draait volledig in de browser, geen API-key.
// In tegenstelling tot het oude MobileNet-model (vaste categorieën) kan CLIP een foto
// vergelijken met een eigen, vrij te kiezen tekstbeschrijving per stop.
let classifierLoadingPromise = null;

function getClassifier() {
  if (!classifierLoadingPromise) {
    classifierLoadingPromise = import("https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2").then(
      ({ pipeline, env }) => {
        env.allowLocalModels = false;
        return pipeline("zero-shot-image-classification", "Xenova/clip-vit-base-patch32");
      }
    );
  }
  return classifierLoadingPromise;
}
// Alvast op de achtergrond laden zodat de eerste foto niet lang hoeft te wachten.
getClassifier().catch(() => {});

// Service worker: cachet de app + alle audio/foto's zodat de tour ook werkt
// met slecht bereik onderweg. Faalt stil op browsers zonder ondersteuning.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(() => {});
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved.currentStep === "number") {
      state = saved;
      if (!state.phase) state.phase = "challenge"; // oudere opgeslagen staat had geen phase
      if (!state.completed) state.completed = {};
      if (!state.hintsUsed) state.hintsUsed = {};
      if (!state.answersRevealed) state.answersRevealed = {};
      if (typeof state.points !== "number") state.points = STARTING_POINTS;
    }
  } catch (e) {
    // geen geldige opgeslagen staat, begin gewoon opnieuw
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const screenIntro = document.getElementById("screen-intro");
const screenInstructions = document.getElementById("screen-instructions");
const screenInstructionsHints = document.getElementById("screen-instructions-hints");
const screenInstructionsPhoto = document.getElementById("screen-instructions-photo");
const screenStep = document.getElementById("screen-step");
const screenReveal = document.getElementById("screen-reveal");
const screenInfo = document.getElementById("screen-info");
const screenMap = document.getElementById("screen-map");
const screenFinish = document.getElementById("screen-finish");
const screenReview = document.getElementById("screen-review");

const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const pointsLabel = document.getElementById("pointsLabel");
const tourTopbar = document.getElementById("tourTopbar");

const stepKicker = document.getElementById("stepKicker");
const stepTitle = document.getElementById("stepTitle");
const stepHint = document.getElementById("stepHint");
const stepTip = document.getElementById("stepTip");
const extraHintBox = document.getElementById("extraHintBox");
const extraHintText = document.getElementById("extraHintText");
const hintMapEl = document.getElementById("hintMapWrap");
const btnRevealAnswer = document.getElementById("btnRevealAnswer");
const answerBox = document.getElementById("answerBox");
const answerText = document.getElementById("answerText");

const revealKicker = document.getElementById("revealKicker");
const revealTitle = document.getElementById("revealTitle");
const revealMapContainer = document.getElementById("revealMapContainer");
const revealPhoto = document.getElementById("revealPhoto");
const revealAnswerText = document.getElementById("revealAnswerText");
const btnRevealBack = document.getElementById("btnRevealBack");

const mapOverlay = document.getElementById("mapOverlay");
const mapOverlayInner = document.getElementById("mapOverlayInner");
const mapOverlayClose = document.getElementById("mapOverlayClose");

const infoOverlay = document.getElementById("infoOverlay");
const infoOverlayClose = document.getElementById("infoOverlayClose");
const infoOverlayTitle = document.getElementById("infoOverlayTitle");
const infoOverlayBody = document.getElementById("infoOverlayBody");
const btnInfoOverlay = document.getElementById("btnInfoOverlay");

const btnHelpOverlay = document.getElementById("btnHelpOverlay");
const helpOverlay = document.getElementById("helpOverlay");
const helpOverlayInner = document.getElementById("helpOverlayInner");
const helpOverlayClose = document.getElementById("helpOverlayClose");

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const photoUploadText = document.getElementById("photoUploadText");
const photoLabel = document.getElementById("photoLabel");
const photoStatus = document.getElementById("photoStatus");
const btnOverride = document.getElementById("btnOverride");
const btnNext = document.getElementById("btnNext");
const btnBack = document.getElementById("btnBack");
const btnHint = document.getElementById("btnHint");
const btnStart = document.getElementById("btnStart");
const btnInstructionsStart = document.getElementById("btnInstructionsStart");
const finishGallery = document.getElementById("finishGallery");
const finishStats = document.getElementById("finishStats");
const finishBadges = document.getElementById("finishBadges");
const btnShareScore = document.getElementById("btnShareScore");
const linkShareWhatsapp = document.getElementById("linkShareWhatsapp");
const shareStatus = document.getElementById("shareStatus");
const leaderboardSubmit = document.getElementById("leaderboardSubmit");
const leaderboardName = document.getElementById("leaderboardName");
const btnSubmitScore = document.getElementById("btnSubmitScore");
const leaderboardSubmitStatus = document.getElementById("leaderboardSubmitStatus");
const leaderboardList = document.getElementById("leaderboardList");

const photoZone = document.querySelector(".photo-zone");
const gpsZone = document.getElementById("gpsZone");
const btnTestComplete = document.getElementById("btnTestComplete");

const quizZone = document.getElementById("quizZone");
const quizQuestion = document.getElementById("quizQuestion");
const quizInput = document.getElementById("quizInput");
const btnCheckAnswer = document.getElementById("btnCheckAnswer");
const quizStatus = document.getElementById("quizStatus");

const infoKicker = document.getElementById("infoKicker");
const infoTitle = document.getElementById("infoTitle");
const btnContinue = document.getElementById("btnContinue");
const btnAudio = document.getElementById("btnAudio");

const mapKicker = document.getElementById("mapKicker");
const btnMapContinue = document.getElementById("btnMapContinue");
const btnMapBack = document.getElementById("btnMapBack");
const btnInfoBack = document.getElementById("btnInfoBack");
const btnFinishBack = document.getElementById("btnFinishBack");
const btnFinishForward = document.getElementById("btnFinishForward");
const btnReviewBack = document.getElementById("btnReviewBack");
const feedbackText = document.getElementById("feedbackText");
const btnSubmitFeedback = document.getElementById("btnSubmitFeedback");
const feedbackStatus = document.getElementById("feedbackStatus");

const floatingNav = document.getElementById("floatingNav");
const btnFloatingBack = document.getElementById("btnFloatingBack");
const btnFloatingForward = document.getElementById("btnFloatingForward");

const audioBar = document.getElementById("audioBar");
const audioBarPlayer = document.getElementById("audioBarPlayer");
const audioBarClose = document.getElementById("audioBarClose");

let leafletMap = null;
let routeLineUnlocked = null;
let routeLineCurrentLeg = null;
let routeMarkers = [];
let searchCircle = null;
let hintMap = null;
let hintMapCircle = null;
let revealMap = null;
let revealMapMarker = null;
let legsPromise = null;
let audioBarStopIndex = null; // welke stop de audiobalk nu toont — bij wisselen van stop stopt en verbergt de balk zichzelf

// Onthoudt waar een kaartje oorspronkelijk vandaan kwam, zodat we het bij het
// sluiten van het overlay weer exact op zijn oude plek kunnen terugzetten.
let mapOverlayOriginalParent = null;
let mapOverlayOriginalNextSibling = null;
let mapOverlayActiveLeafletMap = null;
const SEARCH_RADIUS_METERS = 70;

// Live "jouw locatie"-stip op de kaarten, via de gratis Geolocation API van de
// browser (geen server, geen API-key). geoWatchId wordt maar één keer gestart;
// lastKnownLatLng zorgt dat een kaartje die pas later ontstaat (bv. de extra-hint-
// kaart) de stip meteen krijgt, zonder te wachten op de volgende locatie-update.
let geoWatchId = null;
let lastKnownLatLng = null;
const userLocationMarkers = { main: null, hint: null, reveal: null };

function haversineMeters(a, b) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Deterministische "willekeurige" waarde tussen 0 en 1, gebaseerd op een seed —
// zelfde stop geeft altijd dezelfde verschuiving, maar elke stop een andere.
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Verplaatst een coördinaat een bepaalde afstand (meters) in een bepaalde richting (graden).
function offsetCoord(center, distanceMeters, bearingDegrees) {
  const R = 6371000;
  const bearing = (bearingDegrees * Math.PI) / 180;
  const lat1 = (center[0] * Math.PI) / 180;
  const lng1 = (center[1] * Math.PI) / 180;
  const angDist = distanceMeters / R;
  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(angDist) + Math.cos(lat1) * Math.sin(angDist) * Math.cos(bearing)
  );
  const lng2 =
    lng1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(angDist) * Math.cos(lat1),
      Math.cos(angDist) - Math.sin(lat1) * Math.sin(lat2)
    );
  return [(lat2 * 180) / Math.PI, (lng2 * 180) / Math.PI];
}

// Het middelpunt van de zoekcirkel wijkt bewust af van de echte locatie (maar
// blijft er ruim binnen), zodat de stop niet simpelweg in het midden staat.
function getSearchCircleCenter(realCoord, stopIndex, radius) {
  const bearing = seededRandom(stopIndex * 12.9898) * 360;
  const minDistance = radius * 0.3;
  const maxDistance = radius * 0.6;
  const distance = minDistance + seededRandom(stopIndex * 78.233 + 4.11) * (maxDistance - minDistance);
  return offsetCoord(realCoord, distance, bearing);
}

// Knipt een route-etappe af zodra hij de zoekcirkel binnenkomt, zodat de lijn
// precies bij de rand stopt (via interpolatie tussen de twee omliggende
// routepunten) in plaats van bij het dichtstbijzijnde bestaande punt.
function truncateAtRadius(legCoords, center, radius) {
  for (let i = 0; i < legCoords.length; i++) {
    const d = haversineMeters(legCoords[i], center);
    if (d <= radius) {
      if (i === 0) return [legCoords[0]];
      const prev = legCoords[i - 1];
      const dPrev = haversineMeters(prev, center);
      const t = dPrev === d ? 0 : (dPrev - radius) / (dPrev - d);
      const boundaryPoint = [
        prev[0] + (legCoords[i][0] - prev[0]) * t,
        prev[1] + (legCoords[i][1] - prev[1]) * t
      ];
      return [...legCoords.slice(0, i), boundaryPoint];
    }
  }
  return legCoords;
}

// Onthoudt eerder opgehaalde looproutes lokaal in de browser, zodat we niet bij
// elke paginabezoek alle etappes opnieuw hoeven op te vragen bij de gratis dienst.
const LEGS_CACHE_KEY = "haarlemTourRouteLegsCache";

function loadCachedLegs(expectedCount) {
  try {
    const cached = JSON.parse(localStorage.getItem(LEGS_CACHE_KEY));
    if (Array.isArray(cached) && cached.length === expectedCount) return cached;
  } catch (e) {
    // geen geldige cache, gewoon opnieuw ophalen
  }
  return null;
}

// Haalt per etappe (start->stop1, stop1->stop2, ...) een echte wandelroute op
// die de straten volgt, via de gratis OSRM-wandelroutedienst (geen API-key nodig).
// Bij een netwerkfout (of als de gratis dienst tijdelijk overbelast/onbereikbaar is)
// valt een etappe terug op een rechte lijn. Etappes worden na elkaar opgehaald
// (niet allemaal tegelijk) om de gratis dienst niet te overbelasten, en het resultaat
// wordt lokaal gecached zodat een volgend bezoek niet opnieuw alles hoeft op te vragen.
async function fetchRouteLegs() {
  if (legsPromise) return legsPromise;

  const allCoords = [START_COORD, ...ROUTE_COORDS];
  const legCount = allCoords.length - 1;

  const cached = loadCachedLegs(legCount);
  if (cached) {
    legsPromise = Promise.resolve(cached);
    return legsPromise;
  }

  legsPromise = (async () => {
    const legs = [];
    for (let i = 0; i < legCount; i++) {
      const [lat1, lng1] = allCoords[i];
      const [lat2, lng2] = allCoords[i + 1];
      const straightCoords = [allCoords[i], allCoords[i + 1]];

      // De eerste etappe steekt de open Grote Markt over — daar kun je overal rechtdoor
      // lopen, dus een rechte lijn klopt beter dan de looproute-suggestie langs de randen.
      if (i === 0) {
        legs.push(straightCoords);
        continue;
      }

      const url = `https://routing.openstreetmap.de/routed-foot/route/v1/foot/${lng1},${lat1};${lng2},${lat2}?overview=full&geometries=geojson`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        legs.push(data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]));
      } catch (e) {
        legs.push(straightCoords);
      }
    }
    try {
      localStorage.setItem(LEGS_CACHE_KEY, JSON.stringify(legs));
    } catch (e) {
      // opslag vol of niet beschikbaar — geen probleem, gewoon niet cachen
    }
    return legs;
  })();

  return legsPromise;
}

// "Jouw locatie"-stip: een blauw bolletje met een pulserende ring, zoals je van
// Google Maps kent. Puur visueel, telt niet mee voor het verifiëren van stops.
function createUserLocationIcon() {
  return L.divIcon({
    className: "",
    html: '<div class="user-location-pulse"></div><div class="user-location-dot"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
}

function updateUserLocationMarker(map, key, latlng) {
  if (!map || !latlng) return;
  if (!userLocationMarkers[key]) {
    userLocationMarkers[key] = L.marker(latlng, {
      icon: createUserLocationIcon(),
      zIndexOffset: 1000,
      interactive: false
    }).addTo(map);
  } else {
    userLocationMarkers[key].setLatLng(latlng);
  }
}

// Eén enkele, doorlopende locatiewaarneming voor de hele tour (niet per kaartje) —
// werkt alleen op HTTPS of localhost, zoals bij elke website met Geolocation.
function startLocationTracking() {
  if (!navigator.geolocation || geoWatchId !== null) return;
  geoWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      lastKnownLatLng = [pos.coords.latitude, pos.coords.longitude];
      updateUserLocationMarker(leafletMap, "main", lastKnownLatLng);
      updateUserLocationMarker(hintMap, "hint", lastKnownLatLng);
      updateUserLocationMarker(revealMap, "reveal", lastKnownLatLng);
    },
    (err) => {
      // Geen toestemming, geen GPS-signaal, etc. — de kaarten werken dan gewoon door,
      // alleen zonder de locatiestip.
      console.warn("Locatie niet beschikbaar:", err.message);
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );
}

function initMapIfNeeded() {
  if (leafletMap) return;
  leafletMap = L.map("mapContainer", { zoomControl: true, attributionControl: true }).setView(START_COORD, 17);
  // Standaard OpenStreetMap-tegels — gratis, geen API-key nodig.
  // (CartoDB vereist inmiddels een API-key voor hun gratis basemaps, vandaar deze wissel.)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: t("osmAttribution")
  }).addTo(leafletMap);

  routeLineUnlocked = L.polyline([], { color: "#d1a349", weight: 5 }).addTo(leafletMap);
  // Het laatste stukje — van je vorige stop naar de stop die je nu moet vinden —
  // krijgt een eigen kleur, zodat meteen duidelijk is welk stuk je nu moet lopen.
  routeLineCurrentLeg = L.polyline([], { color: "#a0522d", weight: 6 }).addTo(leafletMap);
  updateUserLocationMarker(leafletMap, "main", lastKnownLatLng);
}

// Dezelfde zoekcirkel-berekening als updateMapProgress hieronder, maar dan voor een
// willekeurige (huidige) stop in plaats van de eerstvolgende — zodat de mini-kaartjes
// bij de extra hint en het antwoordscherm altijd exact dezelfde cirkel tonen.
function getStopSearchCircle(stopIndex) {
  const stop = STOPS[stopIndex];
  const routeIndex = STOP_TO_ROUTE_INDEX[stopIndex];
  const allCoordsIndex = routeIndex + 1; // +1 want allCoords begint met START_COORD ervoor
  const realCoord = ROUTE_COORDS[routeIndex];
  // Sommige stops hebben een eigen, kleinere cirkel specifiek voor de extra hint
  // (bv. stop 1) — die is dan nauwkeuriger dan de brede cirkel op het hoofdkaartscherm.
  const radius = stop.hintSearchRadius || stop.searchRadius || SEARCH_RADIUS_METERS;
  const center =
    stop.hintSearchCenter || stop.searchCenter || getSearchCircleCenter(realCoord, allCoordsIndex, radius);
  return { center, radius, realCoord };
}

// Klein kaartje bij de extra hint — toont dezelfde zoekcirkel als het hoofdkaartscherm
// (dus nog steeds een gebied om te zoeken, geen exacte locatie).
function showHintMap(center, radius) {
  hintMapEl.classList.remove("hidden");
  if (!hintMap) {
    hintMap = L.map("hintMap", {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false
    }).setView(center, 17); // eerst een geldige view zetten, anders faalt fitBounds() hieronder
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: t("osmAttribution")
    }).addTo(hintMap);
    hintMapCircle = L.circle(center, {
      radius,
      color: "#d1a349",
      weight: 3,
      fillColor: "#d1a349",
      fillOpacity: 0.25
    }).addTo(hintMap);
    updateUserLocationMarker(hintMap, "hint", lastKnownLatLng);
  } else {
    hintMapCircle.setLatLng(center);
    hintMapCircle.setRadius(radius);
  }
  hintMap.fitBounds(hintMapCircle.getBounds(), { padding: [10, 10] });
  // Het kaartje stond tot nu toe verborgen (display:none), dus Leaflet kende de
  // afmetingen nog niet — na zichtbaar worden moet de tilegrootte herberekend worden.
  setTimeout(() => {
    if (!hintMap) return;
    hintMap.invalidateSize();
    hintMap.fitBounds(hintMapCircle.getBounds(), { padding: [10, 10] });
  }, 50);
}

// Ingezoomd kaartje op het antwoord-onthulscherm, dat wél precies naar de echte
// locatie wijst (dit scherm is bewust duurder/verderop dan de extra hint).
function showRevealMap(coord) {
  if (!revealMap) {
    revealMap = L.map("revealMap", {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false
    }).setView(coord, 19);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: t("osmAttribution")
    }).addTo(revealMap);
    revealMapMarker = L.marker(coord).addTo(revealMap);
    updateUserLocationMarker(revealMap, "reveal", lastKnownLatLng);
  } else {
    revealMap.setView(coord, 19);
    revealMapMarker.setLatLng(coord);
  }
  setTimeout(() => revealMap && revealMap.invalidateSize(), 50);
}

// Vergroot-knop op elk kaartje: verplaatst het bestaande kaart-element (mét de
// werkende Leaflet-instantie erachter, die blijft gewoon intact) tijdelijk naar
// een groot overlay-scherm, en zet 'm bij het sluiten weer exact op zijn oude plek.
function getLeafletMapForContainer(containerId) {
  if (containerId === "mapContainer") return leafletMap;
  if (containerId === "hintMap") return hintMap;
  if (containerId === "revealMap") return revealMap;
  return null;
}

function openMapOverlay(containerId) {
  const containerEl = document.getElementById(containerId);
  if (!containerEl) return;
  mapOverlayOriginalParent = containerEl.parentNode;
  mapOverlayOriginalNextSibling = containerEl.nextSibling;
  mapOverlayActiveLeafletMap = getLeafletMapForContainer(containerId);
  mapOverlayInner.appendChild(containerEl);
  mapOverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  setTimeout(() => mapOverlayActiveLeafletMap && mapOverlayActiveLeafletMap.invalidateSize(), 50);
}

function closeMapOverlay() {
  if (!mapOverlayOriginalParent) return;
  const containerEl = mapOverlayInner.firstElementChild;
  if (mapOverlayOriginalNextSibling) {
    mapOverlayOriginalParent.insertBefore(containerEl, mapOverlayOriginalNextSibling);
  } else {
    mapOverlayOriginalParent.appendChild(containerEl);
  }
  mapOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  const map = mapOverlayActiveLeafletMap;
  mapOverlayOriginalParent = null;
  mapOverlayOriginalNextSibling = null;
  mapOverlayActiveLeafletMap = null;
  setTimeout(() => map && map.invalidateSize(), 50);
}

document.querySelectorAll(".map-expand-btn").forEach((btn) => {
  btn.addEventListener("click", () => openMapOverlay(btn.dataset.expandTarget));
});

mapOverlayClose.addEventListener("click", closeMapOverlay);

// Klikken op de gedimde achtergrond (buiten de kaart zelf) sluit het overlay ook.
mapOverlay.addEventListener("click", (e) => {
  if (e.target === mapOverlay) closeMapOverlay();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !mapOverlay.classList.contains("hidden")) closeMapOverlay();
  if (e.key === "Escape" && !infoOverlay.classList.contains("hidden")) closeInfoOverlay();
  if (e.key === "Escape" && !helpOverlay.classList.contains("hidden")) closeHelpOverlay();
});

// Generiek uitleg-overlay bij de extra hint (bv. "hoe werken Romeinse cijfers") —
// alleen zichtbaar als de huidige stop dat heeft ingesteld via stop.infoOverlay.
function openInfoOverlay(title, html) {
  infoOverlayTitle.textContent = title;
  infoOverlayBody.innerHTML = html;
  infoOverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeInfoOverlay() {
  infoOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

btnInfoOverlay.addEventListener("click", () => {
  const stop = STOPS[state.currentStep];
  if (stop.infoOverlay) openInfoOverlay(stop.infoOverlay.title, stop.infoOverlay.html);
});

infoOverlayClose.addEventListener("click", closeInfoOverlay);

infoOverlay.addEventListener("click", (e) => {
  if (e.target === infoOverlay) closeInfoOverlay();
});

function updateMapProgress(legs) {
  const allCoords = [START_COORD, ...ROUTE_COORDS];
  // "hasNextTarget" en "targetStop" gaan over STOPS (echte opdrachten), niet over
  // allCoords — daardoor tellen routepunten zonder eigen stop (bv. het Stadsklooster)
  // niet mee als "volgende bestemming".
  const hasNextTarget = state.currentStep + 1 < STOPS.length;
  const targetIndex = hasNextTarget
    ? STOP_TO_ROUTE_INDEX[state.currentStep + 1] + 1 // +1 want allCoords begint met START_COORD ervoor
    : allCoords.length - 1; // geen stops meer over -> toon de hele resterende route, incl. routepunten zonder stop
  const targetStop = hasNextTarget ? STOPS[state.currentStep + 1] : null;
  const targetIsPhotoSearch = hasNextTarget && targetStop.type === "photo" && !targetStop.skipCircle;
  // Sommige stops hebben een eigen straal/middelpunt (bv. stop 1 op de Grote Markt).
  const circleRadius = targetIsPhotoSearch ? targetStop.searchRadius || SEARCH_RADIUS_METERS : null;
  const circleCenter = targetIsPhotoSearch
    ? targetStop.searchCenter || getSearchCircleCenter(allCoords[targetIndex], targetIndex, circleRadius)
    : null;

  // Het laatste stukje (van je vorige stop naar de nieuwste/huidige stop) gaat apart
  // in routeLineCurrentLeg i.p.v. bij de rest — maar alleen als er ook echt een
  // huidige stop is; anders (tour voltooid) blijft alles gewoon samen zoals voorheen.
  let combined = [];
  let currentLegCoords = [];
  for (let i = 0; i < targetIndex && i < legs.length; i++) {
    const isLastLegToTarget = i === targetIndex - 1;
    const leg =
      isLastLegToTarget && targetIsPhotoSearch
        ? truncateAtRadius(legs[i], circleCenter, circleRadius)
        : legs[i];
    if (isLastLegToTarget && hasNextTarget) {
      currentLegCoords = leg;
    } else {
      combined = combined.concat(leg);
    }
  }
  routeLineUnlocked.setLatLngs(combined);
  routeLineCurrentLeg.setLatLngs(currentLegCoords);

  // Alleen opgeloste stops + de eerstvolgende (nog niet opgeloste) bestemming zijn zichtbaar.
  routeMarkers.forEach((m) => leafletMap.removeLayer(m));
  routeMarkers = [];
  if (searchCircle) {
    leafletMap.removeLayer(searchCircle);
    searchCircle = null;
  }

  for (let i = 0; i <= targetIndex && i < allCoords.length; i++) {
    const isTarget = hasNextTarget && i === targetIndex;

    if (isTarget && targetIsPhotoSearch) {
      // Geen pin op de exacte plek — alleen een cirkel waarbinnen gezocht moet worden.
      // Het middelpunt van de cirkel wijkt bewust af van de echte locatie.
      searchCircle = L.circle(circleCenter, {
        radius: circleRadius,
        color: "#d1a349",
        weight: 3,
        fillColor: "#d1a349",
        fillOpacity: 0.25
      }).addTo(leafletMap);
      continue;
    }

    if (i === 0) {
      const icon = L.divIcon({
        className: "",
        html: `<div class="stop-marker unlocked">S</div>`,
        iconSize: [30, 30]
      });
      routeMarkers.push(L.marker(allCoords[i], { icon }).addTo(leafletMap));
      continue;
    }

    const stopIdx = ROUTE_STOP_INDEX[i - 1];
    if (stopIdx === null) continue; // routepunt zonder eigen stop (bv. Stadsklooster) — geen marker

    const cls = isTarget ? "current" : "unlocked";
    const icon = L.divIcon({
      className: "",
      html: `<div class="stop-marker ${cls}">${stopIdx + 1}</div>`,
      iconSize: [30, 30]
    });
    routeMarkers.push(L.marker(allCoords[i], { icon }).addTo(leafletMap));
  }

  // De kaart zoomt bewust in op de nieuwste (eerstvolgende) stop, i.p.v. op de
  // hele tot dusver afgelegde route — anders zoomt hij naarmate je verder komt
  // steeds verder uit en wordt hij juist minder bruikbaar om de weg te vinden.
  // Is je eigen locatie bekend, dan tonen we die er ook meteen bij (allebei in
  // beeld), zodat je in één oogopslag ziet hoe ver je nog moet lopen.
  if (hasNextTarget && lastKnownLatLng) {
    const targetBoundsPoints = searchCircle
      ? [searchCircle.getBounds().getNorthEast(), searchCircle.getBounds().getSouthWest()]
      : [allCoords[targetIndex]];
    leafletMap.fitBounds(L.latLngBounds([lastKnownLatLng, ...targetBoundsPoints]), { padding: [40, 40] });
  } else if (searchCircle) {
    leafletMap.fitBounds(searchCircle.getBounds(), { padding: [40, 40] });
  } else if (hasNextTarget) {
    leafletMap.setView(allCoords[targetIndex], 17);
  } else if (combined.length > 0) {
    // Geen volgende stop meer (tour voltooid) — dan juist wel de hele
    // resterende route in beeld, er is toch geen "nieuwste stop" meer.
    leafletMap.fitBounds(L.latLngBounds(combined), { padding: [30, 30] });
  } else {
    leafletMap.setView(allCoords[0], 17);
  }
}

async function renderMap() {
  const nextStopNumber = state.currentStep + 2; // 1-based nummer van de volgende, nog op te lossen stop
  mapKicker.textContent =
    nextStopNumber <= STOPS.length
      ? t("mapKickerNext", { n: nextStopNumber, total: STOPS.length })
      : t("mapKickerDone");
  initMapIfNeeded();
  // Meteen de cirkel/markers tekenen (die hangen niet af van de looproute-data),
  // zodat je nooit een lege kaart ziet terwijl de wandelroutes nog opgehaald worden.
  updateMapProgress([]);
  setTimeout(() => leafletMap && leafletMap.invalidateSize(), 50);
  const legs = await fetchRouteLegs();
  updateMapProgress(legs);
}

function updateProgressBar() {
  const total = STOPS.length;
  const done = Math.min(Math.max(state.currentStep, 0), total);
  progressFill.style.width = `${(done / total) * 100}%`;
  progressLabel.textContent = t("stepLabel", { done, total });
  pointsLabel.textContent = t("pointsLabelText", { points: state.points });
  // Het puntenvakje zweeft los (position: fixed) en wisselt in breedte mee
  // met het aantal cijfers — de topbar houdt daarom precies zoveel ruimte
  // vrij als dat vakje op dit moment breed is, i.p.v. een vaste schatting
  // die bij weinig cijfers onnodig knijpt en bij veel cijfers overlapt.
  tourTopbar.style.paddingRight = `${pointsLabel.getBoundingClientRect().width + 24}px`;
}

// Markeert een stop als opgelost en kent (eenmalig) de punten toe.
function markCompleted(index) {
  if (state.completed[index]) return;
  state.completed[index] = true;
  state.points += COMPLETE_REWARD;
  saveState();
}

function render() {
  updateProgressBar();

  // De audiobalk hoort bij één specifieke stop (opdracht + kaart + info-scherm).
  // Zodra je naar een andere stop navigeert (vorige/volgende), stopt en verbergt hij zichzelf.
  if (audioBarStopIndex !== null && audioBarStopIndex !== state.currentStep) {
    stopAudioBar();
  }

  screenIntro.classList.add("hidden");
  screenInstructions.classList.add("hidden");
  screenInstructionsHints.classList.add("hidden");
  screenInstructionsPhoto.classList.add("hidden");
  screenStep.classList.add("hidden");
  screenReveal.classList.add("hidden");
  screenInfo.classList.add("hidden");
  screenMap.classList.add("hidden");
  screenFinish.classList.add("hidden");
  screenReview.classList.add("hidden");

  // Alle uitleg-animaties stoppen bij elke navigatie — de juiste tak hieronder
  // start de bijbehorende animatie meteen weer opnieuw, fris vanaf het begin.
  stopQuizDemo();
  stopHintsDemo();
  stopPhotoDemo();

  if (state.currentStep < 0 && state.phase === "instructions") {
    screenInstructions.classList.remove("hidden");
    startQuizDemo();
  } else if (state.currentStep < 0 && state.phase === "instructionsHints") {
    screenInstructionsHints.classList.remove("hidden");
    startHintsDemo();
  } else if (state.currentStep < 0 && state.phase === "instructions2") {
    screenInstructionsPhoto.classList.remove("hidden");
    startPhotoDemo();
  } else if (state.currentStep < 0 && state.phase !== "map") {
    screenIntro.classList.remove("hidden");
  } else if (state.currentStep >= STOPS.length && state.phase === "review") {
    screenReview.classList.remove("hidden");
  } else if (state.currentStep >= STOPS.length) {
    screenFinish.classList.remove("hidden");
    renderFinish();
  } else if (state.phase === "map") {
    screenMap.classList.remove("hidden");
    renderMap();
  } else if (state.phase === "info") {
    screenInfo.classList.remove("hidden");
    renderInfo();
  } else if (state.phase === "reveal") {
    screenReveal.classList.remove("hidden");
    renderReveal();
  } else {
    screenStep.classList.remove("hidden");
    renderStep();
  }

  // De "?"-knop (opnieuw uitleg bekijken) is alleen zinvol tijdens een echte
  // stop — niet op het intro-/uitlegscherm zelf, en niet op het eindscherm.
  const showHelpButton = state.currentStep >= 0 && state.currentStep < STOPS.length;
  btnHelpOverlay.classList.toggle("hidden", !showHelpButton);

  updateFloatingNav();
}

// De zwevende ronde pijlknoppen onderaan het scherm spiegelen simpelweg de
// vorige/volgende-knop die op het huidige scherm actief is — zo blijft alle
// bestaande navigatielogica (en de voorwaarden om verder te mogen) hetzelfde.
function getActiveBackButton() {
  // currentStep -1 + phase "map" is de allereerste kaart (vóór stop 1) — die telt
  // niet als introscherm en heeft dus wél een "vorige"-knop (terug naar intro).
  if (state.currentStep < 0 && state.phase !== "map") return null; // introscherm
  // Fooi/review-scherm: terug naar het scorebord.
  if (state.currentStep >= STOPS.length && state.phase === "review") return btnReviewBack;
  // Eindscherm: gewoon terug kunnen, i.p.v. verplicht de hele tour te herstarten.
  if (state.currentStep >= STOPS.length) return btnFinishBack;
  if (state.phase === "info") return btnInfoBack;
  if (state.phase === "map") return btnMapBack;
  if (state.phase === "reveal") return btnRevealBack;
  return btnBack;
}

function getActiveForwardButton() {
  if (state.currentStep < 0 && state.phase !== "map") return null;
  // Fooi/review-scherm is het allerlaatste scherm — geen "verder" meer.
  if (state.currentStep >= STOPS.length && state.phase === "review") return null;
  if (state.currentStep >= STOPS.length) return btnFinishForward;
  // Het antwoord onthullen rondt de stop al af, dus vanaf hier kan je ook gewoon
  // doorklikken naar het info-scherm (audio) — net als vanaf de opdracht zelf.
  if (state.phase === "reveal") return btnNext;
  if (state.phase === "info") return btnContinue;
  if (state.phase === "map") return btnMapContinue;
  return btnNext;
}

function updateFloatingNav() {
  const back = getActiveBackButton();
  const forward = getActiveForwardButton();

  if (!back && !forward) {
    floatingNav.classList.add("hidden");
    document.body.classList.remove("has-floating-nav");
    return;
  }
  floatingNav.classList.remove("hidden");
  document.body.classList.add("has-floating-nav");

  btnFloatingBack.disabled = !back;
  btnFloatingForward.disabled = !forward || forward.disabled;
}

btnFloatingBack.addEventListener("click", () => {
  const back = getActiveBackButton();
  if (back) back.click();
});

btnFloatingForward.addEventListener("click", () => {
  const forward = getActiveForwardButton();
  if (forward && !forward.disabled) forward.click();
});

function renderInfo() {
  const stop = STOPS[state.currentStep];
  infoKicker.textContent = t("stopKicker", { n: state.currentStep + 1, total: STOPS.length });
  infoTitle.textContent = stop.title;
}

function setPhotoStatus(kind, text) {
  photoStatus.textContent = text || "";
  photoStatus.className = "photo-status" + (kind ? ` ${kind}` : "");
  if (!text) photoStatus.classList.add("hidden");
}

function setQuizStatus(kind, text) {
  quizStatus.textContent = text || "";
  quizStatus.className = "photo-status" + (kind ? ` ${kind}` : "");
  if (!text) quizStatus.classList.add("hidden");
}

function renderStep() {
  const stop = STOPS[state.currentStep];
  stepKicker.textContent = t("stopKicker", { n: state.currentStep + 1, total: STOPS.length });
  stepTitle.textContent = stop.title;
  stepHint.textContent = stop.hint;
  stepTip.textContent = stop.tip || "";
  stepTip.classList.toggle("hidden", !stop.tip);

  // Hint/antwoord-status blijft bewaard per stop, ook na weg- en terugnavigeren
  // of een paginaherlaad — dus we resetten dit niet meer bij elk bezoek.
  const hintUsed = !!state.hintsUsed[state.currentStep];
  const answerRevealed = !!state.answersRevealed[state.currentStep];

  extraHintText.textContent = stop.extraHint;
  extraHintText.classList.toggle("hidden", !stop.extraHint);
  extraHintBox.classList.toggle("hidden", !hintUsed);
  btnHint.classList.toggle("hidden", hintUsed);

  // Een stop met een eigen referentiefoto onthult op een aparte pagina (kaart + foto)
  // — ongeacht het type. Zonder foto blijft het antwoord gewoon inline staan.
  if (stop.answerPhoto) {
    // De knop blijft staan zodra de hint gebruikt is, en verandert na onthullen
    // alleen van label, zodat je die pagina gratis kan terugbekijken.
    answerBox.classList.add("hidden");
    btnRevealAnswer.classList.toggle("hidden", !hintUsed);
    btnRevealAnswer.textContent = answerRevealed ? t("btnRevealAnswerView") : t("btnRevealAnswerCost", { cost: ANSWER_REVEAL_COST });
  } else {
    // Geen aparte pagina nodig — de knop verdwijnt na onthullen, want het
    // antwoord staat er dan al gewoon.
    answerText.textContent = stop.answer;
    answerBox.classList.toggle("hidden", !answerRevealed);
    btnRevealAnswer.classList.toggle("hidden", !hintUsed || answerRevealed);
    btnRevealAnswer.textContent = t("btnRevealAnswerCost", { cost: ANSWER_REVEAL_COST });
  }

  if (hintUsed && stop.type === "photo" && !stop.skipCircle && !stop.skipHintMap) {
    const { center, radius } = getStopSearchCircle(state.currentStep);
    showHintMap(center, radius);
  } else {
    hintMapEl.classList.add("hidden");
  }

  // Deze knop staat los van de (extra) hint — puur uitleg, geen hint die geld kost.
  if (stop.infoOverlay) {
    btnInfoOverlay.textContent = stop.infoOverlay.label;
    btnInfoOverlay.classList.remove("hidden");
  } else {
    btnInfoOverlay.classList.add("hidden");
  }

  btnBack.disabled = false; // terug kan altijd, ook terug naar het introscherm

  if (stop.type === "gps") {
    photoZone.classList.add("hidden");
    quizZone.classList.add("hidden");
    gpsZone.classList.remove("hidden");
    // "Ga verder" blijft geblokkeerd tot de minigame hier is gebouwd én opgelost.
    btnNext.disabled = !state.completed[state.currentStep];
    return;
  }

  if (stop.type === "quiz") {
    photoZone.classList.add("hidden");
    gpsZone.classList.add("hidden");
    quizZone.classList.remove("hidden");
    quizQuestion.textContent = stop.question;

    const solved = !!state.completed[state.currentStep];
    quizInput.value = solved ? stop.answer : "";
    quizInput.disabled = solved;
    btnCheckAnswer.classList.toggle("hidden", solved);
    setQuizStatus(solved ? "matched" : null, solved ? t("quizCorrect") : "");
    btnNext.disabled = !solved;

    if (answerRevealed) quizZone.classList.add("hidden"); // antwoord al onthuld via de hint-knop
    return;
  }

  gpsZone.classList.add("hidden");
  quizZone.classList.add("hidden");
  photoZone.classList.remove("hidden");

  pendingPhotoDataUrl = null;
  btnOverride.classList.add("hidden");
  photoInput.value = "";

  const photo = state.photos[state.currentStep];
  if (photo) {
    photoPreview.src = photo;
    photoPreview.classList.remove("hidden");
    photoUploadText.textContent = t("photoUploadTextDone");
    photoLabel.classList.add("done");
    setPhotoStatus("matched", t("photoMatchedPrevious"));
    btnNext.disabled = false;
  } else {
    photoPreview.classList.add("hidden");
    photoPreview.src = "";
    photoUploadText.textContent = t("photoUploadTextDefault");
    photoLabel.classList.remove("done");
    setPhotoStatus(null, "");
    btnNext.disabled = true;
  }

  if (answerRevealed) {
    // Het antwoord is al onthuld — geen foto meer nodig voor deze stop.
    photoZone.classList.add("hidden");
    btnNext.disabled = false;
  }
}

// Tussenpagina na "Onthul antwoord": een kaartje met de exacte locatie (voor
// foto-stops) en, indien aanwezig, een referentiefoto van wat je moet vinden.
function renderReveal() {
  const stop = STOPS[state.currentStep];
  revealKicker.textContent = t("stopKicker", { n: state.currentStep + 1, total: STOPS.length });
  revealTitle.textContent = stop.title;

  // De tekst is alleen nog een terugvaloptie voor stops zonder eigen referentiefoto —
  // met een foto erbij is de tekst overbodig.
  if (stop.answerPhoto) {
    revealAnswerText.classList.add("hidden");
  } else {
    revealAnswerText.textContent = stop.answer || "";
    revealAnswerText.classList.remove("hidden");
  }

  // Meestal hoort de kaart erbij (dit scherm is alleen bereikbaar via een stop mét
  // referentiefoto, zie btnRevealAnswer hieronder) — sommige stops slaan 'm bewust
  // over, bv. omdat de foto-opdracht zelf al genoeg is.
  if (stop.skipRevealMap) {
    revealMapContainer.classList.add("hidden");
  } else {
    revealMapContainer.classList.remove("hidden");
    // Sommige stops hebben een preciezer punt dan de route-coördinaat zelf (bv. een
    // standbeeldje vlak bij, maar niet exact op, het adres van de stop).
    showRevealMap(stop.preciseCoord || ROUTE_COORDS[STOP_TO_ROUTE_INDEX[state.currentStep]]);
  }

  if (stop.answerPhoto) {
    revealPhoto.src = stop.answerPhoto;
    revealPhoto.classList.remove("hidden");
  } else {
    revealPhoto.classList.add("hidden");
    revealPhoto.src = "";
  }

  // Onthullen rondt de stop altijd al af — "Ga verder" moet dus bruikbaar zijn,
  // ook al stond hij nog uitgeschakeld van vóór het onthullen (bv. geen foto gemaakt).
  btnNext.disabled = false;
}

function renderFinishGallery() {
  finishGallery.innerHTML = "";
  Object.values(state.photos).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    finishGallery.appendChild(img);
  });
}

const SUPABASE_URL = "https://skqaphyejhnzwegywfpf.supabase.co";
const SUPABASE_KEY = "sb_publishable_r8YaFrA5153Jk-rYu4DnlQ_bvoFFqwD";

let finishStatsData = null;

function renderFinish() {
  renderFinishStats();
  renderFinishGallery();
  loadLeaderboard();
}

function renderFinishStats() {
  const totalSeconds = state.startTime ? Math.max(0, Math.round((Date.now() - state.startTime) / 1000)) : 0;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeLabel = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
  const hintsUsedCount = Object.values(state.hintsUsed || {}).filter(Boolean).length;
  const answersRevealedCount = Object.values(state.answersRevealed || {}).filter(Boolean).length;

  finishStatsData = { totalSeconds, hintsUsedCount, points: state.points };

  finishStats.innerHTML = `
    <div class="finish-stat"><div class="finish-stat-value">${timeLabel}</div><div class="finish-stat-label">${t("finishStatTime")}</div></div>
    <div class="finish-stat"><div class="finish-stat-value">${state.points}</div><div class="finish-stat-label">${t("finishStatPoints")}</div></div>
    <div class="finish-stat"><div class="finish-stat-value">${hintsUsedCount}</div><div class="finish-stat-label">${t("finishStatHints")}</div></div>
    <div class="finish-stat"><div class="finish-stat-value">${answersRevealedCount}</div><div class="finish-stat-label">${t("finishStatRevealed")}</div></div>
  `;

  renderFinishBadges({ totalSeconds, hintsUsedCount, answersRevealedCount });
  setupShare();

  // Toon het invulformulier alleen als er nog niet verstuurd is voor deze voltooiing.
  leaderboardSubmit.classList.toggle("hidden", !!state.scoreSubmitted);
}

function renderFinishBadges({ totalSeconds, hintsUsedCount, answersRevealedCount }) {
  const badges = [
    { emoji: "🌟", label: t("badgeCompleted"), earned: true }
  ];
  if (hintsUsedCount === 0 && answersRevealedCount === 0) {
    badges.push({ emoji: "🏆", label: t("badgePerfect"), earned: true });
  }
  if (totalSeconds > 0 && totalSeconds < FAST_TOUR_SECONDS) {
    badges.push({ emoji: "⚡", label: t("badgeFast"), earned: true });
  }
  finishBadges.innerHTML = badges
    .map((b) => `<span class="badge-chip"><span class="badge-chip-emoji">${b.emoji}</span>${escapeHtml(b.label)}</span>`)
    .join("");
}

function buildShareText() {
  const points = finishStatsData ? finishStatsData.points : state.points;
  const totalSeconds = finishStatsData ? finishStatsData.totalSeconds : 0;
  const minutes = Math.max(1, Math.round(totalSeconds / 60));
  return t("shareText", { points, minutes });
}

function buildShareUrl() {
  return `${location.origin}${location.pathname.replace(/tour\.html.*$/, "index.html")}`;
}

function setupShare() {
  const text = buildShareText();
  const url = buildShareUrl();
  linkShareWhatsapp.href = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
  shareStatus.classList.add("hidden");
}

async function shareScore() {
  const text = buildShareText();
  const url = buildShareUrl();
  if (navigator.share) {
    try {
      await navigator.share({ title: "Haarlem Clues", text, url });
    } catch (err) {
      // Gebruiker annuleerde het deelvenster — geen actie nodig.
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(`${text} ${url}`);
    shareStatus.textContent = t("shareCopied");
  } catch (err) {
    shareStatus.textContent = `${text} ${url}`;
  }
  shareStatus.classList.remove("hidden");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

async function submitScore(name) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      name: name.slice(0, 30),
      points: finishStatsData.points,
      duration_seconds: finishStatsData.totalSeconds,
      hints_used: finishStatsData.hintsUsedCount
    })
  });
  if (!res.ok) throw new Error("Versturen mislukt");
}

async function loadLeaderboard() {
  leaderboardList.innerHTML = `<p class="leaderboard-loading">${t("leaderboardLoading")}</p>`;
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/leaderboard?select=name,points,duration_seconds,completed_at&order=points.desc,duration_seconds.asc&limit=10`,
      { headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` } }
    );
    if (!res.ok) throw new Error("Laden mislukt");
    const rows = await res.json();
    renderLeaderboardRows(rows);
  } catch (e) {
    leaderboardList.innerHTML = `<p class="leaderboard-loading">${t("leaderboardLoadError")}</p>`;
  }
}

function renderLeaderboardRows(rows) {
  if (!rows.length) {
    leaderboardList.innerHTML = `<p class="leaderboard-loading">${t("leaderboardEmpty")}</p>`;
    return;
  }
  leaderboardList.innerHTML = rows.map((row, i) => {
    const minutes = Math.floor(row.duration_seconds / 60);
    const seconds = row.duration_seconds % 60;
    const timeLabel = `${minutes}m ${seconds}s`;
    return `
      <div class="leaderboard-row">
        <span class="leaderboard-rank">${i + 1}</span>
        <span class="leaderboard-name">${escapeHtml(row.name)}</span>
        <span class="leaderboard-points">${row.points} pt</span>
        <span class="leaderboard-time">${timeLabel}</span>
      </div>
    `;
  }).join("");
}

btnShareScore.addEventListener("click", shareScore);

btnSubmitScore.addEventListener("click", async () => {
  const name = leaderboardName.value.trim();
  if (!name) {
    leaderboardSubmitStatus.textContent = t("leaderboardNameRequired");
    leaderboardSubmitStatus.className = "photo-status mismatch";
    leaderboardSubmitStatus.classList.remove("hidden");
    return;
  }
  btnSubmitScore.disabled = true;
  leaderboardSubmitStatus.textContent = t("sending");
  leaderboardSubmitStatus.className = "photo-status analyzing";
  leaderboardSubmitStatus.classList.remove("hidden");
  try {
    await submitScore(name);
    leaderboardSubmitStatus.textContent = t("addedToLeaderboard");
    leaderboardSubmitStatus.className = "photo-status matched";
    state.scoreSubmitted = true;
    saveState();
    leaderboardSubmit.classList.add("hidden");
    await loadLeaderboard();
  } catch (e) {
    leaderboardSubmitStatus.textContent = t("sendFailed");
    leaderboardSubmitStatus.className = "photo-status mismatch";
    btnSubmitScore.disabled = false;
  }
});

// Feedback is bewust niet openbaar leesbaar (geen select-policy op de tabel) —
// alleen wijzelf kunnen dit terugzien via het Supabase-dashboard.
async function submitFeedback(message) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({ message: message.slice(0, 1000) })
  });
  if (!res.ok) throw new Error("Versturen mislukt");
}

btnSubmitFeedback.addEventListener("click", async () => {
  const message = feedbackText.value.trim();
  if (!message) {
    feedbackStatus.textContent = t("feedbackEmpty");
    feedbackStatus.className = "photo-status mismatch";
    feedbackStatus.classList.remove("hidden");
    return;
  }
  btnSubmitFeedback.disabled = true;
  feedbackStatus.textContent = t("sending");
  feedbackStatus.className = "photo-status analyzing";
  feedbackStatus.classList.remove("hidden");
  try {
    await submitFeedback(message);
    feedbackStatus.textContent = t("feedbackThanks");
    feedbackStatus.className = "photo-status matched";
    feedbackText.value = "";
    feedbackText.classList.add("hidden");
    btnSubmitFeedback.classList.add("hidden");
  } catch (e) {
    feedbackStatus.textContent = t("sendFailed");
    feedbackStatus.className = "photo-status mismatch";
    btnSubmitFeedback.disabled = false;
  }
});

function acceptPhoto(dataUrl) {
  state.photos[state.currentStep] = dataUrl;
  markCompleted(state.currentStep);
  saveState();
  photoLabel.classList.add("done");
  photoUploadText.textContent = t("photoUploadTextDone");
  btnNext.disabled = false;
  btnOverride.classList.add("hidden");
  pendingPhotoDataUrl = null;
  updateProgressBar(); // toont het nieuwe puntenaantal meteen
  updateFloatingNav();
}

// Vaste "tegen"-omschrijvingen waarmee de eigen beschrijving van de stop wordt
// vergeleken. CLIP kent geen vaste categorieën, dus we laten het model kiezen
// tussen "dit is de juiste plek", "dit is een andere bezienswaardigheid" of
// "dit is een compleet onduidelijke/willekeurige foto".
const CLIP_FOIL_LABELS = [
  "a completely different old Dutch building or landmark, not this one",
  "a random unrelated photo, like food, a pet, or a selfie"
];
const CLIP_MIN_CONFIDENCE = 0.4;

async function analyzePhoto(dataUrl) {
  const stop = STOPS[state.currentStep];

  setPhotoStatus("analyzing", t("photoAnalyzing"));
  btnOverride.classList.add("hidden");

  try {
    const classifier = await getClassifier();
    const labels = [stop.description, ...CLIP_FOIL_LABELS];
    const results = await classifier(dataUrl, labels);
    const top = results[0];
    const matched = top.label === stop.description && top.score >= CLIP_MIN_CONFIDENCE;

    if (matched) {
      setPhotoStatus("matched", t("photoRecognized"));
      acceptPhoto(dataUrl);
    } else {
      setPhotoStatus("mismatch", t("photoMismatch"));
      pendingPhotoDataUrl = dataUrl;
      btnOverride.classList.remove("hidden");
    }
  } catch (err) {
    // model kon niet laden (bv. geen internet) — foto gewoon accepteren
    setPhotoStatus("matched", t("photoCapturedNoAI"));
    acceptPhoto(dataUrl);
  }
}

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    photoPreview.src = dataUrl;
    photoPreview.classList.remove("hidden");
    analyzePhoto(dataUrl);
  };
  reader.readAsDataURL(file);
});

btnOverride.addEventListener("click", () => {
  if (pendingPhotoDataUrl) {
    setPhotoStatus("matched", t("photoCapturedOverride"));
    acceptPhoto(pendingPhotoDataUrl);
  }
});

// ---- Uitleg-animaties (vraag- en foto-opdracht) ----
// Allebei een kleine, zichzelf herhalende "voordoe"-animatie met een neppe
// cursor die typt/tikt op een mockup-kaartje. Puur decoratief (geen echte
// invoervelden), en met opzet een voorbeeld dat niet in de echte tour voorkomt.
// Elke lus checkt zijn eigen generatie-nummer na iedere wachtstap, zodat hij
// meteen stopt zodra stopQuizDemo()/stopPhotoDemo() dat nummer ophoogt.

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function moveMiniCursor(cursorEl, targetEl, containerEl) {
  const containerRect = containerEl.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();
  cursorEl.style.left = `${targetRect.left + targetRect.width / 2 - containerRect.left}px`;
  cursorEl.style.top = `${targetRect.top + targetRect.height / 2 - containerRect.top}px`;
  cursorEl.classList.add("visible");
}

function tapMiniCursor(cursorEl) {
  cursorEl.classList.remove("tap");
  void cursorEl.offsetWidth; // forceer reflow zodat de tap-animatie opnieuw start
  cursorEl.classList.add("tap");
}

let quizDemoGen = 0;

async function runQuizDemo(gen) {
  const container = document.querySelector("#screen-instructions .mini-mockup");
  const cursor = document.getElementById("demoQuizCursor");
  const inputBox = document.getElementById("demoQuizInput");
  const inputText = document.getElementById("demoQuizInputText");
  const caret = inputBox.querySelector(".mini-caret");
  const btn = document.getElementById("demoQuizBtn");
  const status = document.getElementById("demoQuizStatus");
  const answer = "1651";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  while (gen === quizDemoGen) {
    inputText.textContent = "";
    inputBox.classList.remove("focused");
    caret.classList.remove("blinking");
    btn.classList.remove("pressed");
    status.classList.add("hidden");
    status.classList.remove("matched");
    cursor.classList.remove("visible", "tap");

    if (reduceMotion) {
      // Rustige, statische eindstand tonen i.p.v. bewegende animatie.
      inputText.textContent = answer;
      status.textContent = t("demoQuizCorrect");
      status.classList.remove("hidden");
      status.classList.add("matched");
      await sleep(4000);
      continue;
    }

    await sleep(900);
    if (gen !== quizDemoGen) return;
    moveMiniCursor(cursor, inputBox, container);
    tapMiniCursor(cursor);
    inputBox.classList.add("focused");
    caret.classList.add("blinking");

    await sleep(400);
    if (gen !== quizDemoGen) return;
    for (const ch of answer) {
      inputText.textContent += ch;
      await sleep(150);
      if (gen !== quizDemoGen) return;
    }

    await sleep(500);
    if (gen !== quizDemoGen) return;
    moveMiniCursor(cursor, btn, container);
    tapMiniCursor(cursor);
    btn.classList.add("pressed");
    caret.classList.remove("blinking");

    await sleep(350);
    if (gen !== quizDemoGen) return;
    btn.classList.remove("pressed");
    status.textContent = t("demoQuizCorrect");
    status.classList.remove("hidden");
    status.classList.add("matched");
    cursor.classList.remove("visible");

    await sleep(2400);
    if (gen !== quizDemoGen) return;
  }
}

function startQuizDemo() {
  quizDemoGen += 1;
  runQuizDemo(quizDemoGen);
}

function stopQuizDemo() {
  quizDemoGen += 1;
}

let hintsDemoGen = 0;

async function runHintsDemo(gen) {
  const container = document.querySelector("#screen-instructions-hints .mini-mockup");
  const cursor = document.getElementById("demoHintsCursor");
  const hintBtn = document.getElementById("demoHintBtn");
  const extraHint = document.getElementById("demoExtraHint");
  const revealRow = document.getElementById("demoRevealRow");
  const revealBtn = document.getElementById("demoRevealBtn");
  const status = document.getElementById("demoHintsStatus");
  const badge = document.getElementById("demoPointsBadge");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Toont kort een "-X punten"-badge boven de zojuist getikte knop.
  function showBadge(targetEl, text) {
    const containerRect = container.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    badge.style.left = `${targetRect.left + targetRect.width / 2 - containerRect.left}px`;
    badge.style.top = `${targetRect.top - containerRect.top}px`;
    badge.textContent = text;
    badge.classList.remove("show");
    void badge.offsetWidth;
    badge.classList.add("show");
  }

  while (gen === hintsDemoGen) {
    // Alles terug naar het begin: nog geen hint gebruikt, nog geen antwoord onthuld.
    hintBtn.classList.remove("hidden", "pressed");
    extraHint.classList.add("hidden");
    revealRow.classList.add("hidden");
    revealBtn.classList.remove("pressed");
    status.classList.add("hidden");
    status.classList.remove("matched");
    badge.classList.remove("show");
    cursor.classList.remove("visible", "tap");

    if (reduceMotion) {
      hintBtn.classList.add("hidden");
      extraHint.classList.remove("hidden");
      status.textContent = t("demoHintAnswer");
      status.classList.remove("hidden");
      status.classList.add("matched");
      await sleep(4000);
      continue;
    }

    await sleep(1300);
    if (gen !== hintsDemoGen) return;
    moveMiniCursor(cursor, hintBtn, container);
    tapMiniCursor(cursor);
    hintBtn.classList.add("pressed");

    await sleep(450);
    if (gen !== hintsDemoGen) return;
    // Net als in het echt: de hint-knop maakt plaats voor de extra hint en de
    // "onthul antwoord"-knop verschijnt pas nu (die kan je niet overslaan).
    showBadge(hintBtn, t("badgeCostHint"));
    hintBtn.classList.add("hidden");
    extraHint.classList.remove("hidden");
    revealRow.classList.remove("hidden");
    cursor.classList.remove("visible");

    await sleep(2200);
    if (gen !== hintsDemoGen) return;
    moveMiniCursor(cursor, revealBtn, container);
    tapMiniCursor(cursor);
    revealBtn.classList.add("pressed");

    await sleep(450);
    if (gen !== hintsDemoGen) return;
    showBadge(revealBtn, t("badgeCostReveal"));
    cursor.classList.remove("visible");

    // De badge eerst zelf laten wegvagen en die animatie afwachten, vóórdat
    // de knoprij inklapt — anders "zweeft" de badge nog even buiten de dan
    // kleinere kaart (haar positie was op de nu-verdwenen knop berekend).
    await sleep(700);
    if (gen !== hintsDemoGen) return;
    badge.classList.remove("show");

    await sleep(400);
    if (gen !== hintsDemoGen) return;
    revealRow.classList.add("hidden");
    status.textContent = t("demoHintAnswer");
    status.classList.remove("hidden");
    status.classList.add("matched");

    await sleep(2100);
    if (gen !== hintsDemoGen) return;
  }
}

function startHintsDemo() {
  hintsDemoGen += 1;
  runHintsDemo(hintsDemoGen);
}

function stopHintsDemo() {
  hintsDemoGen += 1;
}

let photoDemoGen = 0;

async function runPhotoDemo(gen) {
  const viewfinder = document.getElementById("demoViewfinder");
  const scene = document.getElementById("demoScene");
  const reticle = document.getElementById("demoReticle");
  const flash = document.getElementById("demoFlash");
  const result = document.getElementById("demoPhotoResult");
  const status = document.getElementById("demoPhotoStatus");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Twee "zoek"-standen, sterk ingezoomd op onherkenbare bladeren, en de
  // uiteindelijke stand die uitzoomt en de toren tussen de takken onthult.
  const searchA = { position: "12% 18%", size: "420% auto" };
  const searchB = { position: "85% 10%", size: "420% auto" };
  const reveal = { position: "50% 22%", size: "160% auto" };

  function setScene(s) {
    scene.style.backgroundPosition = s.position;
    scene.style.backgroundSize = s.size;
  }

  while (gen === photoDemoGen) {
    // Alles terug naar het begin: camera actief, nog niet uitgezoomd op de toren.
    viewfinder.classList.remove("zoomed-out");
    result.classList.remove("visible");
    reticle.classList.remove("locked");
    flash.classList.remove("flash");
    status.classList.add("hidden");
    status.classList.remove("analyzing", "matched");
    scene.style.transition = "none";
    setScene(searchA);
    void scene.offsetWidth; // reflow, zodat de reset niet meegeanimeerd wordt
    scene.style.transition = "";

    if (reduceMotion) {
      setScene(reveal);
      viewfinder.classList.add("zoomed-out");
      result.classList.add("visible");
      status.textContent = t("demoPhotoApproved");
      status.classList.remove("hidden");
      status.classList.add("matched");
      await sleep(4000);
      continue;
    }

    await sleep(700);
    if (gen !== photoDemoGen) return;
    setScene(searchB);

    await sleep(1100);
    if (gen !== photoDemoGen) return;
    setScene(reveal);

    await sleep(1300);
    if (gen !== photoDemoGen) return;
    reticle.classList.add("locked");

    await sleep(500);
    if (gen !== photoDemoGen) return;
    flash.classList.remove("flash");
    void flash.offsetWidth;
    flash.classList.add("flash");

    await sleep(300);
    if (gen !== photoDemoGen) return;
    viewfinder.classList.add("zoomed-out");
    result.classList.add("visible");

    await sleep(500);
    if (gen !== photoDemoGen) return;
    status.textContent = t("demoPhotoAnalyzing");
    status.classList.remove("hidden");
    status.classList.add("analyzing");

    await sleep(1300);
    if (gen !== photoDemoGen) return;
    status.textContent = t("demoPhotoApproved");
    status.classList.remove("analyzing");
    status.classList.add("matched");

    await sleep(2400);
    if (gen !== photoDemoGen) return;
  }
}

function startPhotoDemo() {
  photoDemoGen += 1;
  runPhotoDemo(photoDemoGen);
}

function stopPhotoDemo() {
  photoDemoGen += 1;
}

// Eerst de kaart (route + eventueel zoekcirkel) naar stop 1, pas daarna de opdracht zelf
// Eerst de drie uitlegschermen (vraag, hints, foto-opdracht), pas daarna echt de tour in.
btnStart.addEventListener("click", () => {
  state.phase = "instructions";
  saveState();
  render();
});

// true zolang de drie uitlegschermen in het "?"-overlay zitten (i.p.v. in hun
// normale plek, aangestuurd door state.phase) — zie openHelpOverlay hieronder.
let helpOverlayOpen = false;
let helpOverlayRestoreInfo = null;

const INSTRUCTIONS_PHASES = ["instructions", "instructionsHints", "instructions2"];

// Wisselt lokaal tussen de drie uitlegschermen, zonder state.phase aan te
// raken — gebruikt binnen het "?"-overlay, waar je voortgang in de echte tour
// niet mag veranderen. Een phase die niet een van de drie is (bv. "challenge",
// wanneer je op het eerste scherm voorbij het begin zou swipen) doet niets.
function showInstructionsPhase(phase) {
  if (!INSTRUCTIONS_PHASES.includes(phase)) return;
  stopQuizDemo();
  stopHintsDemo();
  stopPhotoDemo();
  screenInstructions.classList.toggle("hidden", phase !== "instructions");
  screenInstructionsHints.classList.toggle("hidden", phase !== "instructionsHints");
  screenInstructionsPhoto.classList.toggle("hidden", phase !== "instructions2");
  if (phase === "instructions") startQuizDemo();
  else if (phase === "instructionsHints") startHintsDemo();
  else if (phase === "instructions2") startPhotoDemo();
}

function goToInstructionsPhase(targetPhase) {
  if (helpOverlayOpen) {
    showInstructionsPhase(targetPhase);
    return;
  }
  state.phase = targetPhase;
  saveState();
  render();
}

// De "?"-knop: dezelfde drie uitlegschermen nog eens bekijken, op elk moment
// tijdens de tour — ze verhuizen tijdelijk naar dit overlay (net als het
// kaart-overlay dat al met een kaartje doet) en gaan bij het sluiten weer
// precies terug naar hun oorspronkelijke plek.
function openHelpOverlay() {
  helpOverlayOpen = true;
  const sections = [screenInstructions, screenInstructionsHints, screenInstructionsPhoto];
  helpOverlayRestoreInfo = sections.map((el) => ({ el, parent: el.parentNode, nextSibling: el.nextSibling }));
  sections.forEach((el) => helpOverlayInner.appendChild(el));
  showInstructionsPhase("instructions");
  helpOverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeHelpOverlay() {
  if (!helpOverlayRestoreInfo) return;
  stopQuizDemo();
  stopHintsDemo();
  stopPhotoDemo();
  screenInstructions.classList.add("hidden");
  screenInstructionsHints.classList.add("hidden");
  screenInstructionsPhoto.classList.add("hidden");
  helpOverlayRestoreInfo.forEach(({ el, parent, nextSibling }) => {
    if (nextSibling) parent.insertBefore(el, nextSibling);
    else parent.appendChild(el);
  });
  helpOverlayRestoreInfo = null;
  helpOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  helpOverlayOpen = false;
}

btnHelpOverlay.addEventListener("click", openHelpOverlay);
helpOverlayClose.addEventListener("click", closeHelpOverlay);

helpOverlay.addEventListener("click", (e) => {
  if (e.target === helpOverlay) closeHelpOverlay();
});

// De drie uitlegschermen navigeer je met een swipe of door op een bolletje te
// tikken — geen "vorige/volgende"-knoppen meer. "prevPhase"/"nextPhase" is
// null aan een uiteinde (bv. geen swipe voorbij het laatste scherm; daar
// staat de expliciete "Start de tour!"-knop).
function setupInstructionsSwipe(sectionEl, prevPhase, nextPhase) {
  let startX = null;
  let startY = null;

  sectionEl.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    startY = e.clientY;
  });

  sectionEl.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = null;
    // Alleen reageren op een overwegend horizontale, voldoende lange swipe.
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0 && nextPhase) {
      goToInstructionsPhase(nextPhase);
    } else if (dx > 0 && prevPhase) {
      goToInstructionsPhase(prevPhase);
    }
  });

  sectionEl.addEventListener("pointercancel", () => {
    startX = null;
  });
}

setupInstructionsSwipe(screenInstructions, "challenge", "instructionsHints");
setupInstructionsSwipe(screenInstructionsHints, "instructions", "instructions2");
setupInstructionsSwipe(screenInstructionsPhoto, "instructionsHints", null);

// Bolletjes zijn ook los aanklikbaar, als snelkoppeling naar dat scherm.
const instructionsDotPhases = ["instructions", "instructionsHints", "instructions2"];
document.querySelectorAll(".instructions-dot").forEach((dot) => {
  const index = Number(dot.dataset.dot) - 1;
  dot.addEventListener("click", () => goToInstructionsPhase(instructionsDotPhases[index]));
});

btnInstructionsStart.addEventListener("click", () => {
  state.currentStep = -1;
  state.phase = "map";
  state.startTime = Date.now();
  saveState();
  render();
  startLocationTracking();
  trackEvent("tour_started");
});

// Opdracht opgelost -> eerst het info-tussenscherm, nog niet naar de volgende stop
btnNext.addEventListener("click", () => {
  state.phase = "info";
  saveState();
  render();
});

// Extra hint kost punten, en kan zo vaak gevraagd worden als je wilt (elke keer opnieuw kosten).
btnHint.addEventListener("click", () => {
  state.points -= HINT_COST;
  state.hintsUsed[state.currentStep] = true; // blijft onthouden voor deze stop
  saveState();
  updateProgressBar();
  extraHintText.textContent = STOPS[state.currentStep].extraHint;
  extraHintText.classList.toggle("hidden", !STOPS[state.currentStep].extraHint);
  extraHintBox.classList.remove("hidden");
  btnHint.classList.add("hidden"); // maakt plaats voor de antwoordknop, op dezelfde plek
  btnRevealAnswer.classList.remove("hidden");
  btnRevealAnswer.textContent = t("btnRevealAnswerCost", { cost: ANSWER_REVEAL_COST });

  if (
    STOPS[state.currentStep].type === "photo" &&
    !STOPS[state.currentStep].skipCircle &&
    !STOPS[state.currentStep].skipHintMap
  ) {
    const { center, radius } = getStopSearchCircle(state.currentStep);
    showHintMap(center, radius);
  }
  // De infoOverlay-knop (bv. Romeinse cijfers) staat al bij de eerste hint en
  // hoeft hier dus niet meer apart getoond te worden.
});

// Antwoord onthullen kost eenmalig extra punten. Heeft de stop een referentiefoto,
// dan stuurt dit naar een eigen tussenpagina (kaart + foto) — anders staat het
// antwoord gewoon inline onder de extra hint. Een tweede keer bekijken is gratis.
btnRevealAnswer.addEventListener("click", () => {
  const stop = STOPS[state.currentStep];
  if (!state.answersRevealed[state.currentStep]) {
    state.points -= ANSWER_REVEAL_COST;
    // Alleen ontgrendelen, geen +20 voltooiingsbonus — anders heft die de -20 kosten op.
    state.completed[state.currentStep] = true;
    state.answersRevealed[state.currentStep] = true; // blijft onthouden voor deze stop
  }
  if (stop.answerPhoto) {
    state.phase = "reveal";
  }
  saveState();
  render();
});

btnRevealBack.addEventListener("click", () => {
  state.phase = "challenge";
  saveState();
  render();
});

// TIJDELIJKE TESTKNOP: markeert een gps-stop als voltooid zodat je de tour kunt
// doorlopen voordat de echte panorama-minigame gebouwd is. Verwijderen zodra die klaar is.
btnTestComplete.addEventListener("click", () => {
  markCompleted(state.currentStep);
  updateProgressBar();
  renderStep();
  updateFloatingNav();
});

btnCheckAnswer.addEventListener("click", () => {
  const stop = STOPS[state.currentStep];
  const given = quizInput.value.trim().toLowerCase();
  // Sommige vragen hebben meerdere geldige schrijfwijzen (bv. een afkorting en de volledige naam).
  // stop.answers (meervoud) is dan een lijstje; anders valt terug op het enkele stop.answer.
  const acceptable = (stop.answers || [stop.answer]).map((a) => String(a).trim().toLowerCase());

  if (given && acceptable.includes(given)) {
    markCompleted(state.currentStep);
    updateProgressBar();
    setQuizStatus("matched", t("quizCorrect"));
    quizInput.disabled = true;
    btnCheckAnswer.classList.add("hidden");
    btnNext.disabled = false;
    updateFloatingNav();
  } else {
    setQuizStatus("mismatch", t("quizIncorrect"));
  }
});

// Ook op Enter in het invoerveld het antwoord controleren.
quizInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnCheckAnswer.click();
});

// Vanaf het info-scherm ga je eerst naar de kaart, die de route verder ontgrendelt
btnContinue.addEventListener("click", () => {
  state.phase = "map";
  saveState();
  render();
});

function stopAudioBar() {
  audioBarPlayer.pause();
  audioBarPlayer.removeAttribute("src");
  audioBarPlayer.load();
  audioBar.classList.add("hidden");
  audioBarStopIndex = null;
  updateFloatingNav();
}

btnAudio.addEventListener("click", () => {
  const stop = STOPS[state.currentStep];
  if (!stop.audio) return;

  audioBar.classList.remove("hidden");
  audioBarStopIndex = state.currentStep;
  updateFloatingNav();

  // Alleen opnieuw laden als het nog niet dezelfde track is — anders gewoon hervatten.
  if (!audioBarPlayer.src.endsWith(stop.audio)) {
    audioBarPlayer.src = stop.audio;
  }
  audioBarPlayer.play();
});

audioBarClose.addEventListener("click", stopAudioBar);

// Vanaf de kaart ga je pas echt door naar de volgende stop
btnMapContinue.addEventListener("click", () => {
  state.currentStep += 1;
  state.phase = "challenge";
  saveState();
  render();
  if (state.currentStep >= STOPS.length) {
    trackEvent("tour_completed", { points: state.points });
  }
});

btnMapBack.addEventListener("click", () => {
  if (state.currentStep === -1) {
    state.phase = "challenge"; // terug van de allereerste kaart naar het introscherm
  } else {
    state.phase = "info"; // terug van de kaart naar het info-scherm van dezelfde stop
  }
  saveState();
  render();
});

btnInfoBack.addEventListener("click", () => {
  state.phase = "challenge"; // terug van het info-scherm naar de opdracht van dezelfde stop
  saveState();
  render();
});

// Vanaf het eindscherm (scorebord) terug naar de "route voltooid"-kaart van de
// laatste stop — dat is het scherm dat er in de gewone doorloop direct aan voorafgaat.
btnFinishBack.addEventListener("click", () => {
  state.currentStep = STOPS.length - 1;
  state.phase = "map";
  saveState();
  render();
});

// Vanaf het eindscherm verder naar het fooi/review-scherm.
btnFinishForward.addEventListener("click", () => {
  state.phase = "review";
  saveState();
  render();
});

// Vanaf het fooi/review-scherm terug naar het scorebord.
btnReviewBack.addEventListener("click", () => {
  state.phase = "finish";
  saveState();
  render();
});

btnBack.addEventListener("click", () => {
  state.currentStep -= 1;
  state.phase = "map"; // terug naar de kaart van de vorige stop (of de allereerste kaart)
  saveState();
  render();
});

loadState();
render();
// Bij een paginaherlaad halverwege de tour (dus na het introscherm) meteen weer
// de locatiestip activeren, in plaats van te wachten op een nieuwe "Start"-klik.
if (state.currentStep >= 0) startLocationTracking();
