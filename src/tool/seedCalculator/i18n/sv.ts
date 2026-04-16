import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'fro-kalkylator';
const title = 'Kalkylator för fröavstånd och kalibrering av såmaskin';
const description =
  'Precisionsverktyg för lantbrukare. Beräkna det idealiska avståndet mellan frön baserat på målpopulation och radavstånd, och analysera belastningen på såmaskinen vid olika arbetshastigheter.';

const faqData = [
  {
    question: 'Hur beräknas fröavståndet?',
    answer:
      'En hektar (10 000 m²) delas med radavståndet för att få det totala antalet linjära meter sådd. Målpopulationen delas sedan med dessa meter för att bestämma hur många frön som ska placeras per linjär meter.',
  },
  {
    question: 'Vad är målpopulationen per hektar?',
    answer:
      'Det är det ideala antalet plantor per 10 000 kvadratmeter. Det beror på gröda, markens bördighet och vattentillgång. Exempelvis kräver bevattnad majs vanligtvis 85 000 till 95 000 frön per hektar.',
  },
  {
    question: 'Hur påverkar grobarheten beräkningen?',
    answer:
      'Inte alla frön som sås kommer att gro. Om ett fröparti har 95 % grobarhet måste du öka såmängden med 5 % för att uppnå den önskade slutliga plantpopulationen.',
  },
  {
    question: 'Varför är kalibrering av såmaskinen så viktig?',
    answer:
      'En för hög såmängd orsakar konkurrens mellan plantor och mindre kärnor. En för låg mängd slösar bort utrymme och avkastningspotential. Precision är nyckeln till lönsamhet.',
  },
];

const howToData = [
  {
    name: 'Ange målpopulation',
    text: 'Definiera hur många frön eller plantor du vill ha per hektar enligt de tekniska rekommendationerna för din sort.',
  },
  {
    name: 'Ställ in radavstånd',
    text: 'Mät avståndet mellan såbillarna på din såmaskin (vanligtvis 50, 70 eller 75 cm).',
  },
  {
    name: 'Justera grobarhet',
    text: 'Ange förväntad uppkomstprocent för att kompensera för naturliga förluster i fält.',
  },
  {
    name: 'Få mekanisk inställning',
    text: 'Använd värdet för frön per meter eller cm mellan frön för att justera kugghjulen eller monitorn på din maskin.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Vetenskapliga referenser',
  bibliography: [
    {
      name: 'KWS Spanien',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Spanska jordbruksministeriet (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Spanien',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Teknisk guide till precisionssådd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att justera en såmaskins växellåda kräver att man vet exakt hur många frön som måste falla per linjär meter fåra. Maskinmanualer ger vanligtvis ungefärliga tabeller, men faktorer som <strong>drivhjulsslirning</strong> eller fröstorlek kan förändra verkligheten. Detta verktyg ger dig det perfekta teoretiska värdet: <strong>målavståndet mellan frön</strong>.',
    },
    {
      type: 'tip',
      title: 'Den matematiska formeln',
      html: '<p>För agronomer och nyfikna, här är grunden för beräkningen:</p><pre>Avstånd (cm) = 10 000 000 / (Population × Radavstånd)</pre><ul><li><strong>10 000 000:</strong> Omvandlingsfaktor från Ha till cm².</li><li><strong>Population:</strong> Frön per hektar.</li><li><strong>Radavstånd:</strong> Avstånd mellan rader i cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Varför använda denna kalkylator?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du mäter i fält och dina frön ligger närmare varandra eller längre ifrån varandra än målavståndet är din maskin <strong>dåligt kalibrerad</strong>. Detta verktyg analyserar också doseringsfrekvensen (Hz) för såskivan vid olika arbetshastigheter och varnar dig för risken för sämre precision.',
    },
    {
      type: 'title',
      text: 'Nyckel till kvalitetssådd',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulering:</strong> Undvik dubbletter och mistor. 99 % singulering håller konkurrensen mellan plantor balanserad.',
        '<strong>Likformigt avstånd:</strong> Variationskoefficienten bör vara mindre än 0,3. Avvikelser större än 5 cm minskar avkastningspotentialen.',
        '<strong>Djup:</strong> Kritiskt för jämn uppkomst. Justera tryckhjulets belastning efter markfuktighet.',
      ],
    },
    {
      type: 'title',
      text: 'Verifieringsmetoder i fält',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000 hektar-metoden:</strong> Mät upp en specifik distans längs en fåra som representerar 1/1000 hektar. Räkna fröna och multiplicera med 1 000. För 70 cm radavstånd är sträckan 14,28 m; för 52,5 cm är den 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drivhjulsmetoden:</strong> Lyft maskinen, markera drivhjulet och vrid det motsvarande 1/100 hektar. Samla upp fröna i en hink och väg eller räkna dem för att verifiera kalibreringen.',
    },
    {
      type: 'title',
      text: 'Referenstabell per gröda',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Majs:</strong> 60 000 till 95 000 frön/Ha. Hög respons på densitet hos moderna hybrider.',
        '<strong>Sojabönor:</strong> 250 000 till 450 000 frön/Ha. Stor kompensationsförmåga vid låga populationer.',
        '<strong>Solrosor:</strong> 40 000 till 55 000 frön/Ha. Mycket känslig för densitet; överskott minskar korgdiametern.',
        '<strong>Raps:</strong> 300 000 till 600 000 frön/Ha. Mycket litet frö; kräver utmärkt markkontakt.',
      ],
    },
  ],
  ui: {
    headCrop: 'Välj din gröda',
    headParams: 'Parametrar',
    headAnalysis: 'Realtidsanalys',
    labelPopulation: 'Population',
    unitSeedsHa: 'Frön/Ha',
    labelRowWidth: 'Radavstånd',
    unitCm: 'Centimeter',
    labelWorkSpeed: 'Arbetshastighet',
    unitKmh: 'km/h',
    labelCalibration: 'Skivkalibrering',
    labelSpacingDesc: 'Exakt avstånd mellan varje frö i raden.',
    labelMachineStress: 'Maskinbelastning',
    labelSeedsM: 'Frön / meter',
    labelPlantsM2: 'Plantor / m²',
    labelSpeedMs: 'Meter / sek',
    labelHaBag: 'Ha / säck (80k)',
    statusStandby: 'STANDBY',
    statusVolumetric: 'VOLUMETRISKT FLÖDE',
    statusOptimal: 'OPTIMAL DOSERING',
    statusHighSpeed: 'HÖG HASTIGHET',
    statusPlateLimiter: 'SKIVGRÄNS',
    cropCorn: 'Majs för kärna',
    cropSilage: 'Majs för ensilage',
    cropSunflower: 'Solros',
    cropSorghum: 'Durra',
    cropSoy: 'Sojaböna',
    cropBeet: 'Sockerbeta',
    cropRapeseed: 'Raps',
    noteCorn: 'Hög precision krävs',
    noteSilage: 'Medelhög population',
    noteSunflower: 'Hastighetskänslig',
    noteSorghum: 'Kontinuerligt flöde eller skiva',
    noteSoy: 'Hög population',
    noteBeet: 'Kritiskt grund sådd',
    noteRapeseed: 'Mycket litet frö',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Vetenskapliga referenser',
  },
};
