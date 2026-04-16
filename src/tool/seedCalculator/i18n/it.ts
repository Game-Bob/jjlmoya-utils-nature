import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'calcolatore-semina';
const title = 'Calcolatore per Spaziatura Semi e Calibrazione Seminatrice';
const description =
  'Strumento di precisione per agricoltori. Calcola la spaziatura ideale tra i semi in base alla popolazione target e alla larghezza della fila, e analizza lo stress della seminatrice a diverse velocità di lavoro.';

const faqData = [
  {
    question: 'Come viene calcolata la spaziatura dei semi?',
    answer:
      'Un ettaro (10.000 m²) viene diviso per la larghezza della fila per ottenere i metri lineari totali di semina. La popolazione target viene quindi divisa per quei metri per determinare quanti semi posizionare per metro lineare.',
  },
  {
    question: 'Qual è la popolazione target per ettaro?',
    answer:
      'È il numero ideale di piante per 10.000 metri quadrati. Dipende dal tipo di coltura, dalla fertilità del suolo e dalla disponibilità di acqua. Ad esempio, il mais irriguo richiede tipicamente da 85.000 a 95.000 semi per ettaro.',
  },
  {
    question: 'In che modo la percentuale di germinazione influenza il calcolo?',
    answer:
      'Non tutti i semi seminati germoglieranno. Se un lotto di semi ha una germinabilità del 95%, è necessario aumentare il tasso di semina del 5% per ottenere la popolazione finale piantina desiderata.',
  },
  {
    question: 'Perché la calibrazione della seminatrice è così importante?',
    answer:
      'Un tasso di semina troppo denso causa competizione tra le piante e granella più piccola. Un tasso troppo rado spreca spazio e potenziale di resa. La precisione è la chiave della redditività.',
  },
];

const howToData = [
  {
    name: 'Inserisci popolazione target',
    text: 'Definisci quanti semi o piante desideri per ettaro secondo la raccomandazione tecnica per la tua varietà.',
  },
  {
    name: 'Imposta larghezza fila',
    text: 'Misura la distanza tra i dischi o i falcioni della tua seminatrice (tipicamente 50, 70 o 75 cm).',
  },
  {
    name: 'Regola tasso germinazione',
    text: 'Inserisci la percentuale di emergenza prevista per compensare le perdite naturali in campo.',
  },
  {
    name: 'Ottieni regolazione meccanica',
    text: 'Usa il valore semi per metro o cm tra i semi per regolare gli ingranaggi o il monitor della tua macchina.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Scientifici',
  bibliography: [
    {
      name: 'KWS Spagna',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Ministero dell\'Agricoltura Spagnolo (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Spagna',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Tecnica alla Semina di Precisione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Regolare la trasmissione di una seminatrice richiede di sapere esattamente quanti semi devono cadere per metro lineare di solco. I manuali delle macchine di solito forniscono tabelle approssimative, ma fattori come lo <strong>slittamento della ruota motrice</strong> o la dimensione del seme possono alterare la realtà. Questo strumento fornisce il valore teorico perfetto: la <strong>spaziatura target tra i semi</strong>.',
    },
    {
      type: 'tip',
      title: 'La Formula Matematica',
      html: '<p>Per gli agronomi e i curiosi, ecco la base del calcolo:</p><pre>Spaziatura (cm) = 10.000.000 / (Popolazione × Larghezza Fila)</pre><ul><li><strong>10.000.000:</strong> Fattore di conversione da Ha a cm².</li><li><strong>Popolazione:</strong> Semi per ettaro.</li><li><strong>Larghezza Fila:</strong> Distanza tra le file in cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Perché usare questo calcolatore?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se misuri in campo e i tuoi semi sono più vicini o più distanti della spaziatura target, la tua macchina è <strong>mal calibrata</strong>. Questo strumento analizza anche la frequenza di dosaggio (Hz) del disco di semina a diverse velocità di lavoro, avvisandoti del rischio di perdita di singolarizzazione.',
    },
    {
      type: 'title',
      text: 'Chiavi per una Semina di Qualità',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singolarizzazione:</strong> Evitare doppi e mancanze. Una singolarizzazione al 99% mantiene equilibrata la competizione tra le piante.',
        '<strong>Spaziatura Uniforme:</strong> Il coefficiente di variazione deve essere inferiore a 0,3. Deviazioni superiori a 5 cm riducono il potenziale di resa.',
        '<strong>Profondità:</strong> Fondamentale per un\'emergenza uniforme. Regolare il carico della ruota di pressione in base all\'umidità del suolo.',
      ],
    },
    {
      type: 'title',
      text: 'Metodi di Verifica in Campo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Metodo 1/1000 di Ettaro:</strong> Misura una distanza specifica lungo un solco che rappresenta 1/1000 di ettaro. Conta i semi e moltiplica per 1.000. Per file da 70 cm la distanza è 14,28 m; per file da 52,5 cm è 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Metodo Ruota Motrice:</strong> Solleva la macchina, segna la ruota motrice e girala per l\'equivalente di 1/100 di ettaro. Raccogli i semi in un secchio e pesali o contali per verificare la calibrazione.',
    },
    {
      type: 'title',
      text: 'Tabella di Riferimento per Coltura',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mais:</strong> da 60.000 a 95.000 semi/Ha. Alta risposta alla densità negli ibridi moderni.',
        '<strong>Soia:</strong> da 250.000 a 450.000 semi/Ha. Grande capacità di compensazione alle basse densità.',
        '<strong>Girasole:</strong> da 40.000 a 55.000 semi/Ha. Molto sensibile alla densità; l\'eccesso riduce il diametro del capolino.',
        '<strong>Colza:</strong> da 300.000 a 600.000 semi/Ha. Seme molto piccolo; richiede un eccellente contatto con il suolo.',
      ],
    },
  ],
  ui: {
    headCrop: 'Seleziona Coltura',
    headParams: 'Parametri',
    headAnalysis: 'Analisi in Tempo Reale',
    labelPopulation: 'Popolazione',
    unitSeedsHa: 'Semi/Ha',
    labelRowWidth: 'Larghezza Fila',
    unitCm: 'Centimetri',
    labelWorkSpeed: 'Velocità di Lavoro',
    unitKmh: 'km/h',
    labelCalibration: 'Calibrazione Disco',
    labelSpacingDesc: 'Distanza esatta tra ogni seme nella fila.',
    labelMachineStress: 'Stress Macchina',
    labelSeedsM: 'Semi / Metro',
    labelPlantsM2: 'Piante / m²',
    labelSpeedMs: 'Metri / Sec',
    labelHaBag: 'Ha / Sacco (80k)',
    statusStandby: 'STANDBY',
    statusVolumetric: 'FLUSSO VOLUMETRICO',
    statusOptimal: 'DOSAGGIO OTTIMALE',
    statusHighSpeed: 'ALTA VELOCITÀ',
    statusPlateLimiter: 'LIMITE DISCO',
    cropCorn: 'Mais da granella',
    cropSilage: 'Mais da insilato',
    cropSunflower: 'Girasole',
    cropSorghum: 'Sorgo',
    cropSoy: 'Soia',
    cropBeet: 'Barbabietola da zucchero',
    cropRapeseed: 'Colza',
    noteCorn: 'Alta precisione richiesta',
    noteSilage: 'Densità medio-alta',
    noteSunflower: 'Sensibile alla velocità',
    noteSorghum: 'Flusso continuo o disco',
    noteSoy: 'Alta popolazione',
    noteBeet: 'Semina superficiale critica',
    noteRapeseed: 'Seme molto piccolo',
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti Scientifici',
  },
};
