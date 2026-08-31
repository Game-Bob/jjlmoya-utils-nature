import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'sv',
  title: 'Kalender för fröstratifiering och sådatum',
  description: 'Skapa en daterad förberedelseplan genom att räkna bakåt från sådagen eller framåt från dagen då fröna är klara.',
  faq: [
    { question: 'Vad beräknar kalendern?', answer: 'Den placerar blötläggning, varm och kall fuktbehandling samt sådd på exakta dagar, räknat från måldatumet eller startdagen.' },
    { question: 'Varför finns två datumlägen?', answer: 'Använd sådatumsläget när planteringsdagen är bestämd, eller läget frön klara när förberedelsen börjar i dag och du vill veta det framtida sådatumet.' },
    { question: 'Kan jag ändra tid och temperatur?', answer: 'Ja. Välj en profil som utgångspunkt och anpassa faserna efter fröpåsen, en specialiserad källa och lokala förhållanden.' },
    { question: 'Garanterar planen groning?', answer: 'Nej. Planen ordnar datumen, men ålder, grobarhet, fukt, frövila, mögel och såförhållanden påverkar också resultatet.' },
  ],
  howTo: [
    { name: 'Välj en fröprofil', text: 'Välj den närmaste arten så att rimliga startfaser laddas.' },
    { name: 'Välj datumläge', text: 'Räkna bakåt från sådagen eller framåt från dagen då fröna är klara.' },
    { name: 'Kontrollera faserna', text: 'Justera dagar för blötläggning, värme och kyla samt det kalla temperaturområdet.' },
    { name: 'Följ datumföljden', text: 'Börja på startdatumet, gå igenom alla faser och så på den angivna dagen.' },
  ],
  seoTitle: 'Planera förberedelseperioden',
  seoIntro: 'Frövila är också ett planeringsproblem. En art som behöver en fuktig kylperiod kan missa rätt såfönster om förberedelsen börjar för sent. En onödigt lång behandling tar tid och kan gynna mögel eller för tidig groning. Kalendern gör om ett måldatum till en tydlig följd av genomförbara steg.',
  seoModes: 'Välj ett måldatum för att räkna bakåt, eller använd läget frön klara för att räkna framåt från förberedelsens början. Varje fas har egna datum: blötläggningen går över i nästa behandling och den sista behandlingen slutar dagen före sådd. Resultatet kan användas på en etikett eller som påminnelse.',
  seoPhaseTitle: 'Så läser du faserna',
  seoPhaseItems: ['<strong>Blötläggning:</strong> återfukta fröna under angivet antal dagar och förläng inte utan ett tydligt skäl.', '<strong>Värme:</strong> håll fröna fuktiga inom det varma området när profilen kräver det.', '<strong>Kyla:</strong> förvara dem fuktiga och svalt och kontrollera regelbundet mögel eller tidiga rötter.', '<strong>Sådd:</strong> flytta de förberedda fröna till ett lämpligt substrat på måldatumet.'],
  seoEvidenceTitle: 'Använd profiler som startpunkt',
  seoEvidence: 'Profilerna är inte universella föreskrifter. Sort, ursprung, fröets ålder och instruktioner på påsen kan ändra frövila. Om en pålitlig leverantör anger en annan tid ska du redigera profilen och skriva upp källan i stället för att blanda motstridiga råd.',
  seoTipTitle: 'En kalender är inget groningstest',
  seoTip: 'Anteckna fröparti, fuktigt medium, temperatur och datum. Om rötter syns under kylfasen ska du så försiktigt. Om fröna förblir vilande ska behandlingen inte förlängas automatiskt; kontrollera först artens råd.',
  seoChecksTitle: 'Kontrollera före start',
  seoChecks: ['Kontrollera att sådatumet passar ljus, frost och plats.', 'Märk behållaren med art, start, slut och temperaturområde.', 'Använd ett fuktigt men luftigt medium och kontrollera det regelbundet.', 'Förvara planen med fröpåsen så att behandlingen går att följa upp.'],
  seoLimitsTitle: 'Vad resultatet inte kan säga',
  seoLimits: 'Verktyget avgör inte frövila från ett foto, testar inte grobarhet och ersätter inte artspecifika instruktioner. Det förutsäger inte lokalt väder och garanterar ingen groning. Se resultatet som en organiserad datumberäkning och kontrollera biologin mot en lämplig källa.',
  ui: {
    labelProfile: 'Fröprofil', labelMode: 'Planläge', labelModeSowing: 'Jag vill så den', labelModeReady: 'Fröna är klara i dag', labelSowingDate: 'Måldatum för sådd', labelReadyDate: 'Förberedelsedatum', labelSoakDays: 'Dagar blötläggning', labelWarmDays: 'Varma dagar', labelColdDays: 'Kalla dagar', labelColdRange: 'Kallt temperaturområde', labelUnits: 'Temperaturenheter', labelMetric: 'Metriskt °C', labelImperial: 'Imperialt °F', labelFrom: 'Lägsta temperatur', labelTo: 'Högsta temperatur', labelGenerate: 'Uppdatera kalender', labelReset: 'Återställ profil', labelAddCalendar: 'Lägg till i min kalender', labelShare: 'Kopiera länk', labelCopied: 'Länk kopierad', labelPrint: 'Skriv ut kompakt etikett', labelTechnique: 'Metod', labelTodayStatus: 'Dagens status', labelDayOf: 'dag av', labelGantt: 'Förberedelsetidslinje', labelTimeline: 'Förberedelsetidslinje', labelNextAction: 'Aktuell fas', labelCalendarStarts: 'kalendern börjar', labelSowingDay: 'sådag', labelDuration: 'Förberedelse', labelDays: 'dagar', labelTemperature: 'Temperatur', labelReady: 'Så i dag', labelUpcoming: 'Kommande', labelActive: 'Pågår', labelComplete: 'Planen är klar', labelEditHint: 'Justera förslagen efter fröpåsen eller en specialiserad källa. Den senaste inställningen sparas på den här enheten.', labelWarm: 'Varm stratifiering', labelCold: 'Kall stratifiering', labelSoak: 'Blötlägg frön', labelSow: 'Så frön', noteApple: 'Fuktig kylperiod efter kort blötläggning', noteLavender: 'Kort kylperiod före vårsådd', noteMilkweed: 'Varm fas följd av en kall fas', noteRose: 'Lång kylperiod efter blötläggning', profileApple: 'Äpple · Malus domestica', profileLavender: 'Lavendel · Lavandula angustifolia', profileMilkweed: 'Asclepias · Asclepias syriaca', profileRose: 'Ros · Rosa spp.', profileStrawberry: 'Jordgubbe · Fragaria × ananassa', profilePeach: 'Persika · Prunus persica', profileCherry: 'Sötkörsbär · Prunus avium', profilePear: 'Päron · Pyrus communis', profilePoppy: 'Vallmo · Papaver spp.', profileSunflower: 'Solros · Helianthus annuus', profileTomato: 'Tomat · Solanum lycopersicum', profileBasil: 'Basilika · Ocimum basilicum', instructionSoak: 'Håll fröna återfuktade före nästa fas.', instructionWarm: 'Förvara de fuktiga fröna varmt.', instructionCold: 'Håll fröna fuktiga och kalla och kontrollera dem regelbundet.', instructionSow: 'Så i det förberedda substratet.', emptyState: 'Ange datum för att skapa en förberedelsetidslinje.', warningDate: 'Välj ett giltigt sådatum.', warningTemperature: 'Kontrollera tid och temperatur innan kalendern uppdateras.',
  },
});
