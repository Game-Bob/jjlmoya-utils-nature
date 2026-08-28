import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "kompostbehallare-volym-brunt-gront-forhallande-raknare";
const title = "Kompostbehållare Volym och Brunt Grönt Förhållande Räknare";
const description =
  "Beräkna den invändiga volymen i en rektangulär eller cylindrisk kompostbehållare och kontrollera balansen mellan brunt, grönt, fukt och luft.";

const faq = [
  {
    question: "Hur beräknar man volymen på en kompostbehållare?",
    answer:
      "Mät behållarens insida. För en rektangulär behållare multipliceras bredd med djup och höjd och omvandlas från kubikcentimeter till liter. För en cylinder används pi gånger radien i kvadrat gånger höjden.",
  },
  {
    question: "Vad är rätt förhållande mellan brunt och grönt material?",
    answer:
      "En praktisk utgångspunkt är två till tre delar kolrikt brunt material per del kväverikt grönt material volymmässigt. Justera genom att observera fukt, lukt och luftflöde.",
  },
  {
    question: "Hur mycket kompostmaterial ryms i behållaren?",
    answer:
      "Jämför den totala volymen av ditt material med behållarens invändiga volym och lämna alltid tillräckligt utrymme för luftcirkulation och luftning.",
  },
  {
    question: "Vad innebär fuktigheten hos en urvriden svamp?",
    answer:
      "Materialet ska kännas fuktigt utan att släppa vatten när det kramas ur. En för torr kompost avstannar nedbrytningen, medan en genomblöt kompost kräver torrt brunt material och vändning.",
  },
];

const howTo = [
  {
    name: "Välj behållarens form",
    text: "Välj rektangulär eller cylindrisk form och ange innermåtten i centimeter eller tum med noggrannhet.",
  },
  {
    name: "Ange separata materialvolymer",
    text: "Uppskatta den separata volymen av brunt kolrikt och grönt kväverikt material.",
  },
  {
    name: "Ställ in fuktnivå i komposten",
    text: "Välj torr, urvriden svamp eller våt för anpassade skötselråd för din kompostbehållare.",
  },
  {
    name: "Utvärdera resultatet och vidta åtgärder",
    text: "Använd kapacitet, fyllnadsgrad och förhållande för att avgöra om du behöver tillsätta brunt material eller vända komposten.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "sv",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrisk",
    unitImperial: "Imperial",
    shapeTitle: "Behållarform",
    shapeRectangular: "Rektangulär",
    shapeCylindrical: "Cylindrisk",
    widthLabel: "Innerbredd",
    depthLabel: "Innerdjup",
    diameterLabel: "Innerdiameter",
    heightLabel: "Innerhöjd",
    brownLabel: "Brunt material",
    greenLabel: "Grönt material",
    moistureTitle: "Fuktnivå",
    moistureDry: "Torr",
    moistureSponge: "Urvriden svamp",
    moistureWet: "Våt",
    moistureAdviceDry: "Torr: fukta gradvis och vänd komposten.",
    moistureAdviceSponge: "Optimalt: behåll fukten som hos en urvriden svamp.",
    moistureAdviceWet: "Våt: tillsätt torrt brunt material och lufta.",
    recipeTitle: "Rekommenderad blandning",
    recipeKitchen: "Köksavfall",
    recipeGarden: "Trädgårdsavfall",
    recipeLeafy: "Lövblandning",
    sceneTitle: "Tvärsnitt av komposten",
    resultCapacity: "Invändig volym i behållaren",
    resultMaterials: "Inmatat material",
    resultRatio: "Förhållande brunt till grönt",
    resultFill: "Nyttjad kapacitet",
    brownTarget: "Målmängd brunt material",
    waterAction: "Fukt",
    airAction: "Luft och struktur",
    statusBalanced: "Bra startbalans",
    statusTooGreen: "Tillsätt mer brunt material",
    statusTooBrown: "Tillsätt mer grönt material",
    statusNoGreens: "Tillsätt grönt material",
    statusOverfilled: "Behållaren är överfull",
    statusDry: "Komposten är för torr",
    statusWet: "Komposten är för våt",
    statusGoodMoisture: "Fuktnivån är optimal",
    statusNote: "Vänd komposten regelbundet för syretillförsel.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Geometrisk volymberäkning",
    formulaText: "Räknaren fastställer den effektiva volymen utifrån innermåtten. Rektangulära behållare använder bredd × djup × höjd. Cylindriska behållare använder π × radie² × höjd. Alla volymer räknas om till samma enhet innan fyllnadsgraden visas.",
    practicalTitle: "Förhållandet som utgångspunkt",
    practicalText: "Sikta på två till tre delar brunt material per del grönt material. Fukt och luftning är avgörande för nedbrytningsprocessen: behåll fukten som en urvriden svamp och vänd komposten regelbundet.",
    localNote: "Alla beräkningar görs lokalt i din webbläsare. Praktisk planningshjälp för kompostering i hushållet.",
    resetLabel: "Återställ",
  },
  seo: [
    {
      type: "title",
      text: "Beräkna den Verkliga Volymen i din Kompostbehållare",
      level: 2,
    },
    {
      type: "paragraph",
      html: "En volymräknare för kompostbehållare är som mest värdefull när den utgår från de faktiska invändiga måtten i stället för den kommersiella angivna volymen på förpackningen. Ange bredd, djup och höjd för en rektangulär behållare eller diameter och höjd för en cylinder för att få den exakta nyttovolymen i liter eller gallon.",
    },
    { type: "title", text: "Geometriska Formler för Volymberäkning", level: 3 },
    {
      type: "paragraph",
      html: "För rektangulära behållare gäller den geometriska formeln <code>bredd × djup × höjd</code>. Dela kubikcentimeter med 1 000 för att få liter. För cylindrar gäller <code>π × radie² × höjd</code>, där radien är hälften av innerdiametern. Mät endast det fria innerutrymmet utan att räkna med väggtjocklek eller lock.",
    },
    {
      type: "list",
      items: [
        "<strong>Rektangulär behållare:</strong> bredd × djup × höjd.",
        "<strong>Cylindrisk behållare:</strong> π × radie² × höjd.",
        "<strong>Omvandling:</strong> 1 000 kubikcentimeter motsvarar exakt 1 liter.",
        "<strong>Fyllnadsgrad:</strong> total volym brunt och grönt jämfört med nyttovolym.",
      ],
    },
    { type: "title", text: "Balans mellan Brunt och Grönt Material", level: 3 },
    {
      type: "paragraph",
      html: "Blanda två till tre delar kolrikt brunt material (torra löv, strimlad kartong, små kvistar) med en del kväverikt grönt material (matavfall, färskt gräsklipp) räknat i volym. Räknaren anger det rekommenderade målområdet för brunt material.",
    },
    { type: "title", text: "Hantering av Fukt och Luftning i Komposten", level: 3 },
    {
      type: "paragraph",
      html: "Håll fuktigheten likt en väl urvriden svamp. Om komposten blir för blöt tappar den syre och kan lukta illa, så tillsätt torrt brunt material och vänd den regelbundet för att öppna luftfickor.",
    },
    {
      type: "tip",
      title: "Praktiskt Råd för Odlares",
      html: "Volymberäkningen fungerar som en praktisk guide för kompostering i trädgården och ersätter inte en kemische C:N-laboratorieanalys.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
