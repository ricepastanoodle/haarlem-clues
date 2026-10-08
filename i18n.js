// Kleine, framework-loze i18n-laag, gedeeld door index.html en tour.html.
// Taalkeuze wordt onthouden in localStorage; wisselen herlaadt de pagina zodat
// alles (incl. STOPS_NL/STOPS_EN in tour.js) consistent opnieuw opgebouwd wordt.
const LANG_STORAGE_KEY = "haarlemTourLang";

function getLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "nl") return saved;
  } catch (err) {}
  return "nl";
}

function setLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (err) {}
  location.reload();
}

const STRINGS = {
  nl: {
    // Navigatie / algemeen (index.html)
    navHoeHetWerkt: "Hoe het werkt",
    navHoogtepunten: "Hoogtepunten",
    navPuntenScorebord: "Punten & scorebord",
    navStartTour: "Start de tour",

    // Hero (index.html)
    heroLabel: "Een digitale speurtocht door",
    heroTitle: "Haarlem, zoals je het nog nooit hebt gezien",
    heroTagline: "De gratis speurtocht langs de verborgen verhalen van Haarlem",
    heroSub: "21 stops door de binnenstad, of de korte route van 9 stops in ± 1 uur, met een audioverhaal bij elke plek. Volg poëtische hints, los onderweg vragen en foto-opdrachten op, en verzamel punten tot je de hele route hebt afgelegd.",
    heroStartEnd: "Start: standbeeld Laurens Coster, Grote Markt · Einde: Stadhuis Haarlem, Grote Markt",
    heroBegin: "Begin je tour",
    heroMetaStops: "stops",
    heroMetaAudio: "Audiotour",
    heroMetaTempo: "Eigen tempo",
    heroMetaGratis: "Gratis",

    // Hoe het werkt (index.html)
    eyebrowHoeHetWerkt: "Hoe het werkt",
    hhwTitle: "Een speurtocht, geen rondleiding",
    hhwSub: "Geen gids, geen groep, geen vaste route-tijden. Jij bepaalt het tempo, de stad doet de rest.",
    step1Title: "Volg de hints",
    step1Text: "Elke stop begint met een kleine, poëtische hint: geen adres, wel een raadsel.",
    step2Title: "Los de opdracht op",
    step2Text: "Beantwoord een vraag of maak een foto ter plekke: een gratis, ingebouwde AI checkt 'm direct.",
    step3Title: "Verdien punten",
    step3Text: "Elke opgeloste stop levert punten op. Kom je er niet uit, dan kosten een extra hint of het antwoord wat punten.",
    step4Title: "Audiotour",
    step4Text: "Bij elke stop hoor je een kort audioverhaal over de plek, gewoon in je browser, geen extra app nodig.",
    step5Title: "Deel je score",
    step5Text: "Aan het eind zie je hoe jij het deed op het scorebord, samen met andere deelnemers.",

    // Hoogtepunten (index.html)
    eyebrowHoogtepunten: "Hoogtepunten",
    stopsTitle: "21 stops door de binnenstad",
    stopsSub: "Van een eeuwenoud standbeeld tot een molen die ooit afbrandde: een greep uit de route.",
    card1Text: "Een bronzen Haarlemmer die, volgens de legende, de boekdrukkunst uitvond, nog vóór Gutenberg.",
    card2Title: "De Sint-Bavokerk",
    card2Text: "De Grote Kerk torent al eeuwen boven de Grote Markt uit, met het beroemde Müller-orgel binnen.",
    card3Text: "Het oudste museum van Nederland: een tijdscapsule vol fossielen, elektriseermachines en oude tekeningen.",
    card4Text: "Een iconische molen aan het Spaarne, ooit tot de grond toe afgebrand en daarna helemaal herbouwd.",
    card5Text: "De laatste overgebleven stadspoort van Haarlem, ooit één van meer dan twintig.",
    card6Text: "Ooit een oudemannenhuis, nu de plek waar het werk van Haarlems beroemdste schilder hangt.",
    card7Text: "Al eeuwenlang het bestuurlijke hart van de stad, met een gevel vol geschiedenis.",
    stopGridNote: "En nog 14 andere stops, die ontdek je onderweg.",

    // Punten & scorebord (index.html)
    eyebrowPunten: "Punten & scorebord",
    pointsVisualLabel: "Voorbeeld",
    pvRow1: "Stop opgelost",
    pvRow2: "Extra hint gebruikt",
    pvRow3: "Antwoord onthuld",
    pointsTitle: "Hoe goed ken jij Haarlem écht?",
    pointsText1: "Elke opgeloste stop levert punten op. Kom je er zelf niet uit, dan kan je een extra hint opvragen of het antwoord laten zien; dat kost wel wat punten, dus bewaar ze voor als je ze nodig hebt.",
    pointsText2: "Aan het eind van de tour zie je je score, je tijd en hoeveel hints je gebruikte, en kan je 'm delen op een scorebord met andere deelnemers.",

    // CTA (index.html)
    ctaTitle: "Klaar om Haarlem te ontdekken?",
    ctaText: "Start de digitale speurtocht en wandel op jouw tempo langs de mooiste en meest verrassende plekken van de stad.",
    ctaButton: "Start de tour nu",

    // Over (index.html)
    eyebrowOver: "Over deze tour",
    aboutTitle: "Gemaakt om Haarlem te leren kennen als een local",
    aboutText: "Geen haastige groepen, geen vaste tijden: gewoon jij, je telefoon en de verhalen van een stad die al eeuwenlang mensen weet te verrassen. Alles werkt gewoon in je browser, geen app nodig.",

    // Footer (index.html)
    footerCopyright: "© 2026 Haarlem Walk · Digitale Wandeltour",

    // Installatiebanners (index.html)
    installTitle: "Installeer Haarlem Walk",
    installText: "Zet de tour op je beginscherm voor snelle toegang, ook zonder browser.",
    installButton: "Installeren",
    iosInstallBefore: "Tik onderin op",
    iosInstallAfter: "en dan op",
    iosInstallStep: "Zet op beginscherm",

    // Topbar / algemeen (tour.html)
    tourLogo: "Haarlem Walk",
    btnHelpAria: "Uitleg opnieuw bekijken",
    stepLabel: "Stap {done} / {total}",
    pointsLabelText: "{points} punten",

    // Routekeuzescherm
    routeChoiceKicker: "Voor je begint",
    routeChoiceTitle: "Hoeveel tijd heb je?",
    routeShortTitle: "Korte route",
    routeShortDesc: "9 stops, ± 2,5 km, ± 1 à 1,5 uur",
    routeFullTitle: "Volledige route",
    routeFullDesc: "21 stops, ± 7 km, ± 3 uur",
    routeStartEnd: "Start: Standbeeld Laurens Coster · Eind: Stadhuis Haarlem (beide op de Grote Markt)",
    btnChooseRoute: "Kies deze route",

    // Introscherm
    introKicker: "De tour begint",
    introTitle: "Klaar om Haarlem te ontdekken?",
    introText: "Vanaf de Grote Markt volg je hints naar bijzondere plekken door de stad. Los onderweg opdrachten op: een vraag, een foto, een korte zoektocht, en verzamel punten tot je de hele route hebt afgelegd. Kom je er niet uit? Een extra hint of het antwoord kan je altijd inwisselen voor wat punten.",
    introFeature1: "Volg de hints",
    introFeature2: "Los de opdracht op",
    introFeature3: "Verdien punten",
    btnStart: "Begin de speurtocht",

    // Uitlegscherm 1 (vraag)
    beforeYouBegin: "Voordat je begint",
    instr1Title: "Zo beantwoord je een vraag",
    instr1Text: "Bij sommige stops los je een korte vraag op. Dit voorbeeld komt niet in de echte tour voor, maar laat precies zien hoe het werkt:",
    demoKicker: "Voorbeeldopdracht",
    demoHintText: "Boven de voordeur van dit pand staat een jaartal in gouden cijfers.",
    demoCheckBtn: "Controleer",

    // Uitlegscherm 2 (hints)
    instr2Title: "Zo werken hints",
    instr2Text: "Kom je er zelf niet helemaal uit? Dan kan je een extra hint opvragen, of meteen het antwoord laten zien. Beide kosten wel wat van je punten:",
    demoHintBtn: "Extra hint (-10 punten)",
    demoExtraHintText: "Het jaartal staat vlak boven de deurlijst, in sierlijke cijfers gegraveerd.",
    demoRevealBtn: "Onthul antwoord (-20 punten)",
    badgeCostHint: "-10 punten",
    badgeCostReveal: "-20 punten",
    instr2Note: "Extra hints en het antwoord onthullen kosten dus punten. Bewaar ze voor als je er écht niet uitkomt.",

    // Uitlegscherm 3 (foto)
    instr3Title: "Zo maak je een foto-opdracht",
    instr3Text: "Bij andere stops maak je juist een foto op de plek zelf. Ook dit voorbeeld komt niet in de echte tour voor:",
    demoPhotoHint: "Een ijzeren kantwerk prikt de lucht in, een dame van staal die de hele wereld kent.",
    instr3Note: "Een ingebouwde AI checkt direct of je foto klopt. Er wordt niets opgeslagen of gedeeld, alles gebeurt in je eigen browser.",
    demoPhotoCreditPrefix: "Foto:",
    btnInstructionsStart: "Start de tour!",

    // Stap-scherm
    stopKicker: "Stop {n} van {total}",
    hintLabel: "Jouw hint",
    extraHintLabel: "Extra hint",
    answerLabel: "Antwoord",
    mapExpandAria: "Kaart vergroten",
    photoInstruction: "Ben je op de plek? Maak een foto om verder te gaan.",
    photoUploadTextDefault: "Maak een foto",
    photoUploadTextDone: "Foto goedgekeurd, nog een keer?",
    btnOverride: "Toch doorgaan met deze foto",
    gpsInstruction: "Deze minigame wordt hier binnenkort toegevoegd, zodra hier een panoramafoto van is gemaakt.",
    btnTestComplete: "(test) Markeer als voltooid",
    quizInputPlaceholder: "Jouw antwoord",
    btnCheckAnswer: "Controleer antwoord",
    btnBack: "Vorige stap",
    btnHint: "Extra hint (-10 punten)",
    btnRevealAnswerCost: "Onthul antwoord (-{cost} punten)",
    btnRevealAnswerView: "Bekijk antwoord",
    btnNext: "Ga verder",

    // Antwoord-onthulscherm
    revealKickerDefault: "Antwoord",
    revealPhotoAlt: "Referentiefoto van deze stop",
    btnRevealBack: "Terug naar de opdracht",

    // Info-scherm
    infoText: "Goed gedaan! Wil je meer weten over deze plek voordat je verdergaat?",
    btnContinue: "Doorgaan naar volgende stop",
    btnAudio: "Luister audio",
    btnInfoBack: "Vorige stap",

    // Kaartscherm
    mapKickerRoute: "Route",
    mapKickerNext: "Op weg naar stop {n} van {total}",
    mapKickerDone: "Route voltooid",
    mapTitle: "Jouw route tot nu toe",
    mapText: "Het gouden pad laat zien welk stuk je al hebt afgelegd. De rest van de route ontgrendelt naarmate je verder komt.",
    btnMapBack: "Vorige stap",
    btnMapContinue: "Verder naar de volgende stop",
    btnRecenterMap: "Toon mij en de volgende stop",

    // Eindscherm
    finishKicker: "Gefeliciteerd",
    finishTitle: "Je hebt de tour voltooid!",
    finishText: "Je hebt alle stops gevonden en Haarlem ontdekt zoals maar weinig bezoekers dat doen. Bedankt voor het meelopen.",
    finishTitleShort: "Je hebt de korte route voltooid!",
    finishTextShort: "Je hebt de korte route gelopen en alvast een stukje Haarlem ontdekt. Zin om de rest van de stad ook te zien?",
    btnContinueFullRoute: "Ga verder met de volledige route",
    continueFullRouteEndpointText: "Dat vervolg eindigt bij: {title}",
    leaderboardTabShort: "Kort",
    leaderboardTabFull: "Volledig",
    finishStatTime: "Tijd",
    finishStatPoints: "Punten",
    finishStatHints: "Hints gebruikt",
    finishStatRevealed: "Antwoorden onthuld",
    badgeCompleted: "Speurtocht voltooid",
    badgePerfect: "Perfecte score",
    badgeFast: "Snelle wandelaar",
    btnShareScore: "Deel je resultaat",
    linkShareWhatsapp: "Via WhatsApp",
    shareCopied: "Gekopieerd naar klembord!",
    shareText: "Ik heb de Haarlem Walk speurtocht voltooid met {points} punten in {minutes} minuten! 🏆",
    leaderboardNamePlaceholder: "Jouw naam",
    btnSubmitScore: "Zet op het scorebord",
    leaderboardTitle: "Scorebord",
    leaderboardLoading: "Scorebord laden...",
    leaderboardLoadError: "Scorebord kon niet geladen worden.",
    leaderboardEmpty: "Nog niemand op het scorebord, wees de eerste!",
    leaderboardNameRequired: "Vul eerst je naam in.",
    sending: "Versturen...",
    addedToLeaderboard: "Toegevoegd aan het scorebord!",
    sendFailed: "Versturen mislukt, probeer het nog eens.",
    btnFinishBack: "Terug naar laatste stop",
    btnFinishForward: "Verder",

    // Feedback/review-scherm
    reviewKicker: "Bedankt",
    reviewTitle: "Nog één laatste ding...",
    reviewText: "Vond je de tour de moeite waard? Je feedback en een review helpen ons enorm om deze tour te blijven verbeteren.",
    feedbackLabel: "Feedback",
    feedbackBlockText: "Heb je nog dingen gezien die verbeterd kunnen worden? Laat het ons weten.",
    feedbackPlaceholder: "Schrijf hier je feedback...",
    btnSubmitFeedback: "Versturen",
    feedbackEmpty: "Schrijf eerst iets voordat je verstuurt.",
    feedbackThanks: "Bedankt voor je feedback!",
    reviewLabel: "Review",
    linkReviewGoogle: "Review op Google",
    linkReviewTripadvisor: "Review op TripAdvisor",
    btnBackHome: "Terug naar home",
    btnReviewBack: "Terug naar het scorebord",
    btnRestartTour: "Tour opnieuw beginnen",
    confirmRestartTour: "Weet je zeker dat je opnieuw wilt beginnen? Je voortgang en punten gaan dan verloren.",

    // Aria-labels / overlays
    vorigeStapAria: "Vorige stap",
    volgendeStapAria: "Volgende stap",
    audioSluitenAria: "Audio sluiten",
    kaartSluitenAria: "Kaart sluiten",
    sluitenAria: "Sluiten",

    // Foto/quiz statusmeldingen (JS)
    photoAnalyzing: "Foto wordt geanalyseerd...",
    photoMatchedPrevious: "Deze foto is goedgekeurd voor deze stop.",
    photoRecognized: "Herkend! Dit lijkt op de juiste plek.",
    photoMismatch: "Deze foto lijkt niet op de bezienswaardigheid. Probeer een andere foto, of ga toch door.",
    photoCapturedNoAI: "Foto vastgelegd.",
    photoCapturedOverride: "Foto vastgelegd (handmatig doorgegaan).",
    quizCorrect: "Goed beantwoord!",
    quizIncorrect: "Dat is niet helemaal juist. Probeer het nog eens.",

    // Onboarding-demo statusteksten (JS)
    demoQuizCorrect: "Goed geraden! +20 punten",
    demoHintAnswer: "Antwoord: 1651",
    demoPhotoAnalyzing: "AI controleert je foto...",
    demoPhotoApproved: "Foto goedgekeurd! +20 punten",

    osmAttribution: "&copy; OpenStreetMap-bijdragers"
  },

  en: {
    navHoeHetWerkt: "How it works",
    navHoogtepunten: "Highlights",
    navPuntenScorebord: "Points & leaderboard",
    navStartTour: "Start the tour",

    heroLabel: "A digital scavenger hunt through",
    heroTitle: "Haarlem, like you've never seen it before",
    heroTagline: "The free puzzle walk through Haarlem's hidden stories",
    heroSub: "21 stops through the city center, or the short route of 9 stops in about 1 hour, with an audio story at every spot. Follow poetic hints, solve questions and photo challenges along the way, and collect points until you've completed the whole route.",
    heroStartEnd: "Start: statue of Laurens Coster, Grote Markt · Finish: Stadhuis Haarlem, Grote Markt",
    heroBegin: "Begin your tour",
    heroMetaStops: "stops",
    heroMetaAudio: "Audio tour",
    heroMetaTempo: "Your own pace",
    heroMetaGratis: "Free",

    eyebrowHoeHetWerkt: "How it works",
    hhwTitle: "A scavenger hunt, not a guided tour",
    hhwSub: "No guide, no group, no fixed schedule. You set the pace, the city does the rest.",
    step1Title: "Follow the hints",
    step1Text: "Every stop starts with a small, poetic hint: no address, just a riddle.",
    step2Title: "Solve the challenge",
    step2Text: "Answer a question or take a photo on the spot: a free, built-in AI checks it instantly.",
    step3Title: "Earn points",
    step3Text: "Every stop you solve earns points. Stuck? An extra hint or the answer costs a few points.",
    step4Title: "Audio tour",
    step4Text: "At every stop you'll hear a short audio story about the place, right in your browser, no extra app needed.",
    step5Title: "Share your score",
    step5Text: "At the end you'll see how you did on the leaderboard, alongside other participants.",

    eyebrowHoogtepunten: "Highlights",
    stopsTitle: "21 stops through the city center",
    stopsSub: "From a centuries-old statue to a windmill that once burned down: a taste of the route.",
    card1Text: "A bronze Haarlem local who, according to legend, invented printing, even before Gutenberg.",
    card2Title: "St. Bavo's Church",
    card2Text: "The Grote Kerk has towered over the Grote Markt for centuries, home to the famous Müller organ.",
    card3Text: "The oldest museum in the Netherlands: a time capsule full of fossils, electrostatic machines, and old drawings.",
    card4Text: "An iconic windmill on the Spaarne river, once burned to the ground and later fully rebuilt.",
    card5Text: "Haarlem's last remaining city gate, once one of more than twenty.",
    card6Text: "Once a home for elderly men, now the place where the work of Haarlem's most famous painter hangs.",
    card7Text: "For centuries the administrative heart of the city, with a facade full of history.",
    stopGridNote: "Plus 14 more stops, waiting to be discovered along the way.",

    eyebrowPunten: "Points & leaderboard",
    pointsVisualLabel: "Example",
    pvRow1: "Stop solved",
    pvRow2: "Extra hint used",
    pvRow3: "Answer revealed",
    pointsTitle: "How well do you really know Haarlem?",
    pointsText1: "Every stop you solve earns points. Can't figure it out yourself? You can request an extra hint or reveal the answer; that costs some points, so save them for when you really need them.",
    pointsText2: "At the end of the tour you'll see your score, your time, and how many hints you used, and you can share it on a leaderboard with other participants.",

    ctaTitle: "Ready to discover Haarlem?",
    ctaText: "Start the digital scavenger hunt and walk at your own pace past the city's most beautiful and most surprising spots.",
    ctaButton: "Start the tour now",

    eyebrowOver: "About this tour",
    aboutTitle: "Made to get to know Haarlem like a local",
    aboutText: "No rushed groups, no fixed schedules: just you, your phone, and the stories of a city that has been surprising people for centuries. Everything just works in your browser, no app needed.",

    footerCopyright: "© 2026 Haarlem Walk · Digital Walking Tour",

    installTitle: "Install Haarlem Walk",
    installText: "Add the tour to your home screen for quick access, even without a browser.",
    installButton: "Install",
    iosInstallBefore: "Tap",
    iosInstallAfter: "at the bottom, then tap",
    iosInstallStep: "Add to Home Screen",

    tourLogo: "Haarlem Walk",
    btnHelpAria: "View instructions again",
    stepLabel: "Step {done} / {total}",
    pointsLabelText: "{points} points",

    // Route choice screen
    routeChoiceKicker: "Before you begin",
    routeChoiceTitle: "How much time do you have?",
    routeShortTitle: "Short route",
    routeShortDesc: "9 stops, ± 2.5 km, ± 1 to 1.5 hours",
    routeFullTitle: "Full route",
    routeFullDesc: "21 stops, ± 7 km, ± 3 hours",
    routeStartEnd: "Start: Laurens Coster statue · Finish: Stadhuis Haarlem (both on the Grote Markt)",
    btnChooseRoute: "Choose this route",

    introKicker: "The tour begins",
    introTitle: "Ready to discover Haarlem?",
    introText: "Starting from the Grote Markt, you'll follow hints to special spots around the city. Solve challenges along the way: a question, a photo, a short search, and collect points until you've completed the whole route. Stuck? You can always trade an extra hint or the answer for a few points.",
    introFeature1: "Follow the hints",
    introFeature2: "Solve the challenge",
    introFeature3: "Earn points",
    btnStart: "Begin the scavenger hunt",

    beforeYouBegin: "Before you begin",
    instr1Title: "How to answer a question",
    instr1Text: "At some stops you'll solve a short question. This example isn't from the real tour, but shows exactly how it works:",
    demoKicker: "Example challenge",
    demoHintText: "Above the front door of this building is a year in gold numerals.",
    demoCheckBtn: "Check",

    instr2Title: "How hints work",
    instr2Text: "Can't quite figure it out? You can request an extra hint, or reveal the answer right away. Both cost some of your points:",
    demoHintBtn: "Extra hint (-10 points)",
    demoExtraHintText: "The year is engraved right above the doorframe, in ornate numerals.",
    demoRevealBtn: "Reveal answer (-20 points)",
    badgeCostHint: "-10 points",
    badgeCostReveal: "-20 points",
    instr2Note: "So extra hints and revealing the answer cost points. Save them for when you're really stuck.",

    instr3Title: "How to complete a photo challenge",
    instr3Text: "At other stops you'll take a photo right on location. This example isn't from the real tour either:",
    demoPhotoHint: "An iron lattice pierces the sky, a lady of steel known the world over.",
    instr3Note: "A built-in AI instantly checks if your photo is correct. Nothing is stored or shared, everything happens right in your browser.",
    demoPhotoCreditPrefix: "Photo:",
    btnInstructionsStart: "Start the tour!",

    stopKicker: "Stop {n} of {total}",
    hintLabel: "Your hint",
    extraHintLabel: "Extra hint",
    answerLabel: "Answer",
    mapExpandAria: "Enlarge map",
    photoInstruction: "Are you at the spot? Take a photo to continue.",
    photoUploadTextDefault: "Take a photo",
    photoUploadTextDone: "Photo approved, take another?",
    btnOverride: "Continue with this photo anyway",
    gpsInstruction: "This mini-game will be added here soon, once a panorama photo has been taken.",
    btnTestComplete: "(test) Mark as completed",
    quizInputPlaceholder: "Your answer",
    btnCheckAnswer: "Check answer",
    btnBack: "Previous step",
    btnHint: "Extra hint (-10 points)",
    btnRevealAnswerCost: "Reveal answer (-{cost} points)",
    btnRevealAnswerView: "View answer",
    btnNext: "Continue",

    revealKickerDefault: "Answer",
    revealPhotoAlt: "Reference photo for this stop",
    btnRevealBack: "Back to the challenge",

    infoText: "Well done! Want to know more about this place before you continue?",
    btnContinue: "Continue to next stop",
    btnAudio: "Listen to audio",
    btnInfoBack: "Previous step",

    mapKickerRoute: "Route",
    mapKickerNext: "On your way to stop {n} of {total}",
    mapKickerDone: "Route completed",
    mapTitle: "Your route so far",
    mapText: "The golden path shows how far you've come. The rest of the route unlocks as you progress.",
    btnMapBack: "Previous step",
    btnMapContinue: "Continue to the next stop",
    btnRecenterMap: "Show me and the next stop",

    finishKicker: "Congratulations",
    finishTitle: "You've completed the tour!",
    finishText: "You've found every stop and discovered Haarlem the way few visitors do. Thanks for joining.",
    finishTitleShort: "You've completed the short route!",
    finishTextShort: "You've walked the short route and discovered a piece of Haarlem. Fancy seeing the rest of the city too?",
    btnContinueFullRoute: "Continue with the full route",
    continueFullRouteEndpointText: "That continuation ends at: {title}",
    leaderboardTabShort: "Short",
    leaderboardTabFull: "Full",
    finishStatTime: "Time",
    finishStatPoints: "Points",
    finishStatHints: "Hints used",
    finishStatRevealed: "Answers revealed",
    badgeCompleted: "Scavenger hunt completed",
    badgePerfect: "Perfect score",
    badgeFast: "Fast walker",
    btnShareScore: "Share your result",
    linkShareWhatsapp: "Via WhatsApp",
    shareCopied: "Copied to clipboard!",
    shareText: "I completed the Haarlem Walk scavenger hunt with {points} points in {minutes} minutes! 🏆",
    leaderboardNamePlaceholder: "Your name",
    btnSubmitScore: "Add to leaderboard",
    leaderboardTitle: "Leaderboard",
    leaderboardLoading: "Loading leaderboard...",
    leaderboardLoadError: "Couldn't load the leaderboard.",
    leaderboardEmpty: "No one on the leaderboard yet, be the first!",
    leaderboardNameRequired: "Please enter your name first.",
    sending: "Sending...",
    addedToLeaderboard: "Added to the leaderboard!",
    sendFailed: "Sending failed, please try again.",
    btnFinishBack: "Back to last stop",
    btnFinishForward: "Continue",

    reviewKicker: "Thank you",
    reviewTitle: "One last thing...",
    reviewText: "Did you enjoy the tour? Your feedback and a review help us enormously to keep improving it.",
    feedbackLabel: "Feedback",
    feedbackBlockText: "Noticed anything that could be improved? Let us know.",
    feedbackPlaceholder: "Write your feedback here...",
    btnSubmitFeedback: "Send",
    feedbackEmpty: "Please write something before sending.",
    feedbackThanks: "Thanks for your feedback!",
    reviewLabel: "Review",
    linkReviewGoogle: "Review on Google",
    linkReviewTripadvisor: "Review on TripAdvisor",
    btnBackHome: "Back to home",
    btnReviewBack: "Back to the leaderboard",
    btnRestartTour: "Restart the tour",
    confirmRestartTour: "Are you sure you want to restart? Your progress and points will be lost.",

    vorigeStapAria: "Previous step",
    volgendeStapAria: "Next step",
    audioSluitenAria: "Close audio",
    kaartSluitenAria: "Close map",
    sluitenAria: "Close",

    photoAnalyzing: "Analyzing photo...",
    photoMatchedPrevious: "This photo has been approved for this stop.",
    photoRecognized: "Recognized! This looks like the right spot.",
    photoMismatch: "This photo doesn't look like the landmark. Try another photo, or continue anyway.",
    photoCapturedNoAI: "Photo captured.",
    photoCapturedOverride: "Photo captured (manually continued).",
    quizCorrect: "Correct!",
    quizIncorrect: "That's not quite right. Try again.",

    demoQuizCorrect: "Correct guess! +20 points",
    demoHintAnswer: "Answer: 1651",
    demoPhotoAnalyzing: "AI is checking your photo...",
    demoPhotoApproved: "Photo approved! +20 points",

    osmAttribution: "&copy; OpenStreetMap contributors"
  }
};

// Vertaalt een sleutel, met optionele {var}-vervanging (bv. t("stopKicker", { n: 3, total: 21 })).
function t(key, vars) {
  const lang = getLang();
  let str = (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.nl && STRINGS.nl[key]) || key;
  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), vars[k]);
    });
  }
  return str;
}

// Vult alle statische HTML-elementen met data-i18n(-placeholder/-aria-label)
// attributen — draait één keer bij het laden van de pagina.
function applyStaticTranslations() {
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
  });
}

// Bouwt/ververst de NL/EN-taalschakelaar. Werkt op elk element met deze id —
// zowel index.html als tour.html hebben er één in hun header/topbar.
function setupLangToggle() {
  const btn = document.getElementById("btnLangToggle");
  if (!btn) return;
  const current = getLang();
  btn.textContent = current === "en" ? "NL" : "EN";
  btn.setAttribute("aria-label", current === "en" ? "Overschakelen naar Nederlands" : "Switch to English");
  btn.addEventListener("click", () => setLang(current === "en" ? "nl" : "en"));
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticTranslations();
  setupLangToggle();
});
