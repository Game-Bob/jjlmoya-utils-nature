import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "compostvat-volume-bruin-groen-verhouding-rekenmachine";
const title = "Compostvat Volume en Bruin Groen Verhouding Rekenmachine";
const description =
  "Bereken het interne volume van een rechthoekig of cilindrisch compostvat en controleer de verhouding tussen bruine materialen, groene materialen, vocht en lucht.";

const faq = [
  {
    question: "Hoe bereken je het volume van een compostvat?",
    answer:
      "Meet de binnenkant van het vat. Voor een rechthoekig vat vermenigvuldig je breedte, diepte en hoogte en reken je kubieke centimeters om naar liters. Voor een cilinder gebruik je pi maal straal in het kwadraat maal hoogte.",
  },
  {
    question: "Wat is de juiste verhouding tussen bruin en groen materiaal?",
    answer:
      "Een praktische richtlijn is twee tot drie delen koolstofrijk bruin materiaal per deel stikstofrijk groen materiaal op basis van volume. Pas de verhouding aan door vocht, geur en ventilatie te observeren.",
  },
  {
    question: "Hoeveel compostmateriaal past er in het vat?",
    answer:
      "Vergelijk het totale volume van je materiaal met de interne capaciteit van het compostvat en laat altijd voldoende ruimte voor luchtcirculatie en omzetten.",
  },
  {
    question: "Wat betekent de vochtigheid van een uitgewrongen spons?",
    answer:
      "Het materiaal moet vochtig aanvoelen zonder dat er water uit druipt als je erin knijpt. Een te droge hoop vertraagt de afbraak, terwijl een kletsnatte hoop droog bruin materiaal en omzetten nodig heeft.",
  },
];

const howTo = [
  {
    name: "Kies de vorm van het compostvat",
    text: "Selecteer rechthoekig of cilindrisch en voer de nauwkeurige binnenmaten in centimeter of inch in.",
  },
  {
    name: "Voer afzonderlijke materiaalvolumes in",
    text: "Schat het afzonderlijke volume in van bruin koolstofrijk materiaal en groen stikstofrijk materiaal.",
  },
  {
    name: "Stel de vochtgraad van de hoop in",
    text: "Kies droog, uitgewrongen spons of nat voor passend onderhoudsadvies afgestemd op jouw compostvat.",
  },
  {
    name: "Bekijk het resultaat en onderneem actie",
    text: "Gebruik capaciteit, vulgraad en verhouding om te bepalen of je bruin materiaal moet toevoegen of het vat moet omzetten.",
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
  inLanguage: "nl",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrisch",
    unitImperial: "Imperiaal",
    shapeTitle: "Vorm van het vat",
    shapeRectangular: "Rechthoekig",
    shapeCylindrical: "Cilindrisch",
    widthLabel: "Binnenbreedte",
    depthLabel: "Binnendiepte",
    diameterLabel: "Binnendiameter",
    heightLabel: "Binnenhoogte",
    brownLabel: "Bruine materialen",
    greenLabel: "Groene materialen",
    moistureTitle: "Vochtgehalte",
    moistureDry: "Droog",
    moistureSponge: "Uitgewrongen spons",
    moistureWet: "Nat",
    moistureAdviceDry: "Droog: geleidelijk bevochtigen en omzetten.",
    moistureAdviceSponge: "Optimaal: behoud het gevoel van een uitgewrongen spons.",
    moistureAdviceWet: "Nat: voeg droog bruin materiaal toe en zet om.",
    recipeTitle: "Aanbevolen mengsel",
    recipeKitchen: "Keukenafval",
    recipeGarden: "Tuinafval",
    recipeLeafy: "Bladermengsel",
    sceneTitle: "Doorsnede van de composthoop",
    resultCapacity: "Interne capaciteit van het vat",
    resultMaterials: "Ingevoerd materiaal",
    resultRatio: "Verhouding bruin tot groen",
    resultFill: "Benutte capaciteit",
    brownTarget: "Doelhoeveelheid bruin",
    waterAction: "Vochtgehalte",
    airAction: "Lucht en structuur",
    statusBalanced: "Goede beginverhouding",
    statusTooGreen: "Voeg meer bruine materialen toe",
    statusTooBrown: "Voeg meer groene materialen toe",
    statusNoGreens: "Voeg groene materialen toe",
    statusOverfilled: "Het vat is te vol",
    statusDry: "De hoop is te droog",
    statusWet: "De hoop is te nat",
    statusGoodMoisture: "Vochtgehalte is optimaal",
    statusNote: "Zet de hoop om voor voldoende zuurstof.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Geometrische volumeberekening",
    formulaText: "De rekenmachine bepaalt de werkelijke inhoud op basis van de binnenmaten. Rechthoekige vaten gebruiken breedte × diepte × hoogte. Cilindrische vaten gebruiken π × straal² × hoogte. Alle volumes worden omgererekend naar dezelfde eenheid voordat de vulgraad wordt getoond.",
    practicalTitle: "Verhouding als uitgangspunt",
    practicalText: "Streef naar twee tot drie delen bruin materiaal per deel groen materiaal. Vocht en ventilatie zijn essentieel voor het composteerproces: streef naar het gevoel van een uitgewrongen spons en zet de hoop regelmatig om.",
    localNote: "Alle berekeningen worden lokaal in uw browser verwerkt. Dit is een handige planningshulp voor huishoudelijke compostering.",
    resetLabel: "Herstellen",
  },
  seo: [
    {
      type: "title",
      text: "Bereken het Werkelijke Volume van uw Compostvat",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Een compostvat volumerekenmachine is het meest waardevol wanneer deze uitgaat van de daadwerkelijke binnenmaten in plaats van de commerciële inhoud op de verpakking. Voer de breedte, diepte en hoogte van een rechthoekig vat in of de diameter en hoogte van een cilinder om de netto capaciteit in liters of gallons nauwkeurig te berekenen en te vergelijken met het materiaal.",
    },
    { type: "title", text: "Wiskundige Formules voor Volumeberekening", level: 3 },
    {
      type: "paragraph",
      html: "Voor rechthoekige vaten geldt de geometrische formule <code>breedte × diepte × hoogte</code>. Bij metingen in centimeters deelt u de uitkomst in kubieke centimeters door 1.000 om liters te verkrijgen. Voor cilinders gebruikt u <code>π × straal² × hoogte</code>, waarbij de straal de helft van de binnendiameter is. Meet uitsluitend de vrije binnenruimte zonder wanddikte of deksel.",
    },
    {
      type: "list",
      items: [
        "<strong>Rechthoekig vat:</strong> breedte × diepte × hoogte.",
        "<strong>Cilindrisch vat:</strong> π × straal² × hoogte.",
        "<strong>Eenheden omrekenen:</strong> 1.000 kubieke centimeter is exact gelijk aan 1 liter.",
        "<strong>Vullingsgraad:</strong> totaal volume bruin en groen afval vergeleken met netto inhoud.",
      ],
    },
    { type: "title", text: "Balans tussen Bruine en Groene Materialen", level: 3 },
    {
      type: "paragraph",
      html: "Een beproefde mengverhouding is twee tot drie delen koolstofrijk bruin afval (zoals droge bladeren, versnipperd karton en kleine takjes) per deel stikstofrijk groen afval (zoals groenteresten en vers gemaaid gras) op basis van volume. De rekenmachine geeft het streefbereik voor bruin materiaal aan.",
    },
    { type: "title", text: "Vocht- en Luchtbeheer in de Composthoop", level: 3 },
    {
      type: "paragraph",
      html: "Zorg voor een vochtigheid vergelijkbaar met een goed uitgewrongen spons. Een te droge hoop vertraagt de biologische activiteit van micro-organismen aanzienlijk, terwijl een kletsnatte hoop zuurstof tekortkomt en nare geuren kan veroorzaken. Regelmatig omzetten brengt verse zuurstof in de hoop.",
    },
    {
      type: "tip",
      title: "Praktisch Advies voor Gebruikers",
      html: "Deze volumeberekening dient als uitgangspunt voor huishoudelijke compostering in de tuin en vervangt geen chemische C:N-laboratoriumanalyse.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
