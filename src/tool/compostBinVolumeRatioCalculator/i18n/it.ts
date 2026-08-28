import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "calcolatore-volume-compostiera-rapporto-marroni-verdi";
const title = "Calcolatore Volume Compostiera e Rapporto Marroni Verdi";
const description =
  "Calcola il volume interno di una compostiera rettangolare o cilindrica e verifica l equilibrio pratico tra materiali marroni, verdi, umidita e aria.";

const faq = [
  {
    question: "Come si calcola il volume di una compostiera?",
    answer:
      "Misura l interno del contenitore. Per una compostiera rettangolare, moltiplica larghezza per profondita per altezza e converti i centimetri cubi in litri. Per un cilindro, usa pi greco per il raggio al quadrato per l altezza.",
  },
  {
    question: "Qual e il giusto rapporto tra marroni e verdi nel compost?",
    answer:
      "Un buon punto di partenza pratico e da due a tre parti di materiali marroni ricchi di carbonio in volume per ogni parte di materiali verdi ricchi di azoto. Regola osservando umidita, odore e ventilazione.",
  },
  {
    question: "Quanto compost posso inserire nella compostiera?",
    answer:
      "Confronta il volume dei tuoi materiali con la capacita interna della compostiera e lascia spazio sufficiente per la circolazione dell aria e per rivoltare il cumulo.",
  },
  {
    question: "Cosa significa umidita da spugna strozzata?",
    answer:
      "I materiali devono risultare umidi al tatto senza rilasciare acqua quando strizzati. Un cumulo troppo secco rallenta la decomposizione, mentre uno troppo bagnato ha bisogno di marroni secchi e aerazione.",
  },
];

const howTo = [
  {
    name: "Scegli la forma della compostiera",
    text: "Seleziona la forma rettangolare o cilindrica e inserisci le dimensioni interne in centimetri o pollici con precisione.",
  },
  {
    name: "Aggiungi i volumi di materiale distinti",
    text: "Stima separatamente il volume dei materiali marroni ricchi di carbonio e dei materiali verdi ricchi di azoto.",
  },
  {
    name: "Imposta il livello di umidita del cumulo",
    text: "Scegli tra secco, spugna strizzata o bagnato per ricevere consigli pratici di manutenzione adatti alla compostiera.",
  },
  {
    name: "Valuta il risultato e l azione da intraprendere",
    text: "Utilizza capacita, livello di riempimento e rapporto per capire se aggiungere marroni, acqua o rivoltare il cumulo.",
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
  inLanguage: "it",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrico",
    unitImperial: "Imperiale",
    shapeTitle: "Forma della compostiera",
    shapeRectangular: "Rettangolare",
    shapeCylindrical: "Cilindrica",
    widthLabel: "Larghezza interna",
    depthLabel: "Profondità interna",
    diameterLabel: "Diametro interno",
    heightLabel: "Altezza interna",
    brownLabel: "Marroni",
    greenLabel: "Verdi",
    moistureTitle: "Livello di umidità",
    moistureDry: "Secco",
    moistureSponge: "Spugna strizzata",
    moistureWet: "Bagnato",
    moistureAdviceDry: "Secco: inumidisci gradualmente e rivolta il cumulo.",
    moistureAdviceSponge: "Ottimale: mantieni la consistenza di una spugna strizzata.",
    moistureAdviceWet: "Bagnato: aggiungi marroni secchi e aerare.",
    recipeTitle: "Miscela consigliata",
    recipeKitchen: "Scarti di cucina",
    recipeGarden: "Scarti da giardino",
    recipeLeafy: "Miscela di foglie",
    sceneTitle: "Sezione trasversale del cumulo",
    resultCapacity: "Capacità interna della compostiera",
    resultMaterials: "Materiali inseriti",
    resultRatio: "Rapporto marroni su verdi",
    resultFill: "Capacità utilizzata",
    brownTarget: "Obiettivo materiali marroni",
    waterAction: "Umidità",
    airAction: "Aria e struttura",
    statusBalanced: "Buon equilibrio iniziale",
    statusTooGreen: "Aggiungi più marroni",
    statusTooBrown: "Aggiungi più verdi",
    statusNoGreens: "Inserisci materiali verdi",
    statusOverfilled: "La compostiera è troppo piena",
    statusDry: "Il cumulo è troppo secco",
    statusWet: "Il cumulo è troppo bagnato",
    statusGoodMoisture: "Umidità nel intervallo ottimale",
    statusNote: "Rivolta il cumulo per riaprire le sacche d aria.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Calcolo geometrico del volume",
    formulaText:
      "Il calcolatore determina la capacita utile dalle dimensioni interne. I contenitori rettangolari usano larghezza × profondita × altezza, mentre quelli cilindrici usano π × raggio² × altezza. Tutti i volumi vengono convertiti prima di mostrare il livello di riempimento.",
    practicalTitle: "Il rapporto come guida pratica",
    practicalText:
      "L obiettivo consiglia da due a tre volte il volume di marroni rispetto ai verdi. Umidita e aerazione sono fondamentali: mantieni la consistenza di una spugna strizzata e rivolta periodicamente.",
    localNote:
      "Tutti i calcoli avvengono localmente nel browser. Questa risorsa e una guida pratica per il compostaggio domestico.",
    resetLabel: "Ripristina",
  },
  seo: [
    {
      type: "title",
      text: "Calcola la Capacità Reale di una Compostiera Domestica",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Un calcolatore di volume per compostiera e utile quando misura le dimensioni interne effettive del contenitore anziche basarsi solo sulla capacita dichiarata dal produttore. Inserisci la larghezza, la profondita e l altezza per una compostiera rettangolare o il diametro e l altezza per modelli cilindrici per scoprire il volume netto utile in litri o galloni.",
    },
    { type: "title", text: "Formule Geometriche del Volume", level: 3 },
    {
      type: "paragraph",
      html: "Per un contenitore rettangolare usa la formula <code>larghezza × profondita × altezza</code>. Dividi i centimetri cubi ottenuti per 1.000 per calcolare i litri netti. Per un cilindro usa <code>π × raggio² × altezza</code>, dove il raggio equivale alla meta del diametro interno utile. Misura solo lo spazio interno libero senza contare pareti e coperchio.",
    },
    {
      type: "list",
      items: [
        "<strong>Rettangolare:</strong> larghezza × profondita × altezza.",
        "<strong>Cilindrica:</strong> π × raggio² × altezza.",
        "<strong>Conversione:</strong> 1.000 centimetri cubi equivalgono a 1 litro.",
        "<strong>Riempimento:</strong> somma del volume dei marroni e dei verdi confrontato con la capacita netta.",
      ],
    },
    { type: "title", text: "Equilibrio tra Marroni e Verdi", level: 3 },
    {
      type: "paragraph",
      html: "Utilizza da due a tre parti in volume di materiali marroni ricchi di carbonio (come foglie secche, cartone sminuzzato o piccoli rametti) per ogni parte di materiali verdi azotati (come scarti alimentari e sfalci d erba freschi). Il calcolatore indica la fascia target dei marroni consigliata.",
    },
    { type: "title", text: "Controllo di Umidità e Aerazione", level: 3 },
    {
      type: "paragraph",
      html: "Mantieni l umidita ideale simile a quella di una spugna strizzata. Se il cumulo e troppo bagnato rischia di perdere ossigeno e generare cattivi odori, quindi aggiungi marroni secchi e rivolta con frequenza per ripristinare i vuoti d aria.",
    },
    {
      type: "tip",
      title: "Nota Pratica di Utilizzo",
      html: "Questo calcolo del volume e una guida orientativa per il compostaggio domestico e da giardino e non sostituisce un analisi chimica C:N di laboratorio.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
