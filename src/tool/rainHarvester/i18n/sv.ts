import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'regnvatten-kalkylator';
const title = 'Kalkylator för regnvatteninsamling';
const description = 'Beräkna hur mycket regnvatten du kan samla in från ditt tak och dimensionera din lagringstank.';

const faqData = [
  {
    question: 'Hur mycket vatten kan jag faktiskt samla in från mitt tak?',
    answer: 'Den allmänna regeln är att för varje kvadratmeter tak och varje millimeter regn kan du samla in cirka 1 liter vatten. Det finns dock förluster från avdunstning och filtrering som justeras med en "avrinningskoefficient".',
  },
  {
    question: 'Vad är en avrinningskoefficient?',
    answer: 'Det är en procentsats som anger hur mycket vatten som går förlorat beroende på takmaterialet. Ett plåt- eller tegeltak är mycket effektivt (0,85-0,95), medan ett grus- eller jordtak är mycket mindre effektivt (0,1-0,3).',
  },
  {
    question: 'Hur dimensionerar jag lagringstanken?',
    answer: 'Du bör beräkna den maximala förväntade regnvolymen under en månad och jämföra den med din uppskattade månatliga förbrukning. En tank som är för liten kommer att svämma över vid skyfall, och en som är för stor blir onödigt dyr.',
  },
  {
    question: 'Är det säkert att dricka insamlat regnvatten?',
    answer: 'Inte direkt. Vatten för med sig damm, fågelspillning och luftburna partiklar. För mänsklig konsumtion måste det passera genom sedimentfilter, aktivt kol och desinfektion med UV-ljus eller klor.',
  },
];

const howToData = [
  {
    name: 'Mät den horisontella ytan',
    text: 'Mät längden och bredden på din takbas (inte den sluttande ytan, utan ytan som projicerar skuggor på marken).',
  },
  {
    name: 'Kontrollera lokal nederbörd',
    text: 'Sök hos den nationella meteorologiska tjänsten efter den genomsnittliga årliga eller månatliga nederbörden i ditt område i millimeter (mm).',
  },
  {
    name: 'Tillämpa materialeffektivitet',
    text: 'Välj ditt takmaterial i vår kalkylator för att dra av det vatten som går förlorat genom absorption eller värme.',
  },
  {
    name: 'Beräkna den erforderliga volymen',
    text: 'Använd det årliga litresultatet för att välja en tank som kan lagra minst 20-30 % av den totala skörden för torra perioder.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Takinställningar',
    headResults: 'Skördepotential',
    labelArea: 'Takarea',
    labelRainfall: 'Årlig nederbörd',
    labelMaterial: 'Takmaterial',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Liter',
    helpRainfall: 'Vet du inte? Sök på "genomsnittlig årlig nederbörd [din stad]" på Google.',
    efficiencyTitle: 'Effektivitetsfaktor',
    efficiencyNote: 'En förlust på 10 % tillämpas för filter och avdunstning.',
    resultTitle: 'Årlig skördepotential',
    equivalenciesTitle: 'Praktiska motsvarigheter',
    labelFlushes: 'Toalettspolningar',
    labelShowers: 'Duschar (10 min)',
    labelGarden: 'Bevattning av trädgård',
    gardenArea: '(50m²)',
    materialMetal: 'Plåt / Glaserat tegel',
    materialClay: 'Vingtegel / Lera',
    materialConcrete: 'Betong / Asfalt',
    materialGravel: 'Grus / Grönt tak',
  },
  seo: [
    {
      type: 'title',
      text: 'Regnvatteninsamling: Autonomi och hållbarhet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta husägare är omedvetna om potentialen i sina egna tak. Ett standardtak kan fånga in tusentals liter gratis vatten varje år. Detta verktyg kvantifierar den potentialen, så att du kan beräkna exakt hur mycket vatten du kan "skörda" och bestämma den ideala tankstorleken för lagring.',
    },
    {
      type: 'title',
      text: 'Beräkningslogik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Basformeln för regnvatteninsamling är enkel men kraftfull:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volym = Area × Nederbörd × Avrinningskoefficient × Filtereffektivitet</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Area:</strong> Din takyta (projicerad längd × bredd).',
        '<strong>Nederbörd:</strong> Fallande regn i millimeter.',
        '<strong>Koefficient:</strong> Hur mycket vatten ditt tak förlorar (t.ex. absorption).',
        '<strong>Effektivitet:</strong> Förluster i filter före tanken (~10 %).',
      ],
    },
    {
      type: 'title',
      text: 'Varför samla regnvatten?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Besparingar:</strong> Minska din vattenräkning avsevärt.',
        '<strong>Trädgårdsarbete:</strong> Växter älskar vatten utan klor eller kalk.',
        '<strong>Motståndskraft:</strong> Behåll en reserv för nödsituationer vid avbrott.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensionering av tank',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det vanligaste misstaget är att köpa en tank enbart baserat på budget. Om den är för liten kommer du att slösa bort tusentals liter på grund av överfyllnad. Om den är för stor kommer du att spendera pengar i onödan. En allmän regel är att ha kapacitet att lagra <strong>3 månader</strong> av genomsnittlig nederbörd i ditt område, vilket gör att du kan överbrygga torrperioder.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
