import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'syrstermometer';
const title = 'Syrstermometer – Dolbears lag temperaturkalkylator';
const description =
  'Ingen termometer? Lyssna på syrsorna. Beräkna exakt temperatur genom att räkna spelningar med vår kalkylator för Dolbears lag.';

const faqData = [
  {
    question: 'Vad är Dolbears lag?',
    answer:
      'Formulerad 1897 av Amos Dolbear, är det en vetenskaplig observation som upptäckte en linjär korrelation mellan syrsors spelfrekvens och den omgivande lufttemperaturen.',
  },
  {
    question: 'Varför spelar syrsor snabbare i värme?',
    answer:
      'Syrsor är växelvarma djur (ektotermer). Hastigheten på deras metaboliska processer och muskelkontraktioner beror på yttertemperaturen; ju varmare det är, desto mer energi har de att avge ljud snabbt.',
  },
  {
    question: 'Är denna mätning korrekt?',
    answer:
      'Den är förvånansvärt exakt för arter som snöträdssyrsan (Oecanthus fultoni), med en felmarginal på cirka 0,5°C om det räknas rätt. Faktorer som luftfuktighet eller vind kan dock påverka resultatet.',
  },
  {
    question: 'Vilken syrsa ska jag använda för beräkningen?',
    answer:
      'Den ursprungliga formeln är baserad på snöträdssyrsan. För den vanliga fältsyrsan är förhållandet liknande men takten tenderar att vara något långsammare.',
  },
];

const howToData = [
  {
    name: 'Hitta en ensam syrsa',
    text: 'Hitta en lugn plats på natten där du tydligt kan höra spelandet från en enskild syrsa för att undvika att blanda ihop rytmerna.',
  },
  {
    name: 'Räkna spelningar i 15 sekunder',
    text: 'Använd ett tidtagarur och räkna hur många stridulationer insekten avger på exakt 15 sekunder.',
  },
  {
    name: 'Ange värdet',
    text: 'Tryck på TAP-knappen i takt med spelandet i några sekunder så att kalkylatorn automatiskt beräknar BPM.',
  },
  {
    name: 'Verifiera temperaturen',
    text: 'Systemet kommer att tillämpa formeln T(°C) = 10 + (N - 40) / 7 för att ge dig en uppskattning av omgivningens värme i grader Celsius.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Vetenskapliga referenser',
  bibliography: [
    {
      name: 'The American Naturalist - The Cricket as a Thermometer',
      url: 'https://www.jstor.org/stable/2453256',
    },
    {
      name: 'Wikipedia - Dolbear\'s Law',
      url: 'https://en.wikipedia.org/wiki/Dolbear%27s_law',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Komplett guide: Hur man använder Dolbears lag för att beräkna temperatur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Visste du att du kan avgöra den exakta temperaturen bara genom att lyssna på naturen? 1897 upptäckte fysikern Amos Dolbear ett exakt matematiskt förhållande mellan takten i syrsors spelande och omgivningens värme. Detta verktyg digitaliserar den upptäckten för att förvandla din telefon till en naturlig termometer.',
    },
    {
      type: 'tip',
      title: 'Varför "sjunger" syrsor?',
      html: '<p>Syrsans "sång", eller <strong>stridulation</strong>, är egentligen ett parningsrop. Hanar gnider sina vingar (inte sina ben) mot varandra för att skapa detta ljud. Fascinerande nog, eftersom de är växelvarma djur (ektotermer), beror hastigheten på detta gnidande direkt på luftens termiska energi.</p>',
    },
    {
      type: 'title',
      text: 'Vetenskapen: Ektotermi och metabolism',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från däggdjur, som upprätthåller en konstant kroppstemperatur, är insekter beroende av extern värme. Deras biokemiska reaktioner följer <strong>Arrhenius ekvation</strong>: ju mer värme, desto snabbare reaktion.',
    },
    {
      type: 'paragraph',
      html: 'Detta innebär att för att syrsans muskler ska dra ihop sig och gnida vingarna behövs enzymatiska reaktioner. Om det är kallt går dessa reaktioner långsamt och spelandet är slött. Om det är varmt påskyndas ämnesomsättningen och sången blir en frenetisk drill.',
    },
    {
      type: 'title',
      text: 'Dolbears formel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Även om det finns variationer för olika arter, är den mest kända formeln för snöträdssyrsan (<em>Oecanthus fultoni</em>). För att få temperaturen i grader Celsius:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nDär N = antal spelningar per minut.',
      ariaLabel: 'Dolbears lag för att beräkna temperatur från syrsors spelande',
    },
    {
      type: 'paragraph',
      html: 'Vårt verktyg gör detta automatiskt: det mäter tiden mellan dina tryck, beräknar spelningar per minut (BPM) och tillämpar formeln omedelbart.',
    },
    {
      type: 'title',
      text: 'Fascinerande fakta',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kärlekstermometrar:</strong> Vissa teorier tyder på att honor föredrar hanar som sjunger vid "rätt" frekvens för den aktuella temperaturen, eftersom det indikerar att hanen är frisk och har en stark metabolism.',
        '<strong>Köldgräns:</strong> Under 10°C (50°F) slutar de flesta syrsor att sjunga eftersom deras ämnesomsättning är för långsam för att upprätthålla muskelansträngningen.',
        '<strong>Synkronisering:</strong> Under varma nätter kan tusentals syrsor synkronisera sitt spelande, vilket skapar en imponerande "våg"-ljudeffekt.',
      ],
    },
    {
      type: 'tip',
      title: 'Not om noggrannhet',
      html: '<p>Noggrannheten beror på syrsans art. Detta verktyg är kalibrerat för den vanliga fältsyrsan och trädssyrsan. Faktorer som luftfuktighet eller vind kan påverka resultatet med ±0,5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Väntar...',
    labelTapping: 'Fortsätt trycka...',
    tapInstruction: 'Varje gång du hör en spelning',
    btnReset: 'Nollställ',
    btnSoundOn: 'Ljud: På',
    btnSoundOff: 'Ljud: Av',
    unitChirpsMin: 'spel/min',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Vetenskapliga referenser',
  },
};
