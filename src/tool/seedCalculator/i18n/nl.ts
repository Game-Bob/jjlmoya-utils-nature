import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'zaaiafstand-zaaimachine-kalibratiecalculator';
const title = 'Zaaiafstand en zaaimachine kalibratiecalculator';
const description =
  'Precisietool voor landbouwers. Bereken de ideale afstand tussen zaden op basis van doelpopulatie en rijbreedte, en analyseer de belasting van de zaaimachine bij verschillende werksnelheden.';

const faqData = [
  {
    question: 'Hoe wordt de zaaiafstand berekend?',
    answer:
      'Eén hectare (10.000 m²) wordt gedeeld door de rijbreedte om het totaal aantal strekkende meters zaaien te krijgen. De doelpopulatie wordt vervolgens gedeeld door die meters om te bepalen hoeveel zaden er per strekkende meter moeten worden geplaatst.',
  },
  {
    question: 'Wat is de doelpopulatie per hectare?',
    answer:
      'Het is het ideale aantal planten per 10.000 vierkante meter. Dit hangt af van het gewastype, de bodemvruchtbaarheid en de beschikbaarheid van water. Zo vereist geïrrigeerde maïs doorgaans 85.000 tot 95.000 zaden per hectare.',
  },
  {
    question: 'Hoe beïnvloedt het kiempercentage de berekening?',
    answer:
      'Niet alle zaden die worden gezaaid, zullen opkomen. Als een partij zaad een kiemkracht van 95% heeft, moet u de zaaihoeveelheid met 5% verhogen om de gewenste uiteindelijke plantendichtheid te bereiken.',
  },
  {
    question: 'Waarom is de kalibratie van de zaaimachine zo belangrijk?',
    answer:
      'Een te hoge zaaidichtheid veroorzaakt concurrentie tussen planten en kleinere korrels. Een te lage dichtheid verspilt ruimte en opbrengstpotentieel. Precisie is de sleutel tot winstgevendheid.',
  },
];

const howToData = [
  {
    name: 'Doelpopulatie invoeren',
    text: 'Definieer hoeveel zaden of planten u per hectare wilt, volgens de technische aanbeveling voor uw ras.',
  },
  {
    name: 'Rijbreedte instellen',
    text: 'Meet de afstand tussen de schijven of kouters van uw zaaimachine (meestal 50, 70 of 75 cm).',
  },
  {
    name: 'Kiempercentage aanpassen',
    text: 'Voer het verwachte opkomstpercentage in om natuurlijke verliezen in het veld te compenseren.',
  },
  {
    name: 'Mechanische instelling verkrijgen',
    text: 'Gebruik de waarde zaden per meter of cm tussen de zaden om de kettingwielen of de monitor van uw machine in te stellen.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Wetenschappelijke bronnen',
  bibliography: [
    {
      name: 'KWS Spanje',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Spaans Ministerie van Landbouw (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Spanje',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Technische gids voor precisie-zaaien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het instellen van de transmissie van een zaaimachine vereist dat u precies weet hoeveel zaden er per strekkende meter zaaigeul moeten vallen. Machinehandleidingen geven meestal benaderende tabellen, maar factoren zoals <strong>wielslip</strong> of zaadgrootte kunnen de realiteit veranderen. Deze tool geeft u de perfecte theoretische waarde: de <strong>doelafstand tussen de zaden</strong>.',
    },
    {
      type: 'tip',
      title: 'De wiskundige formule',
      html: '<p>Voor agronomen en nieuwsgierigen is hier de basis van de berekening:</p><pre>Afstand (cm) = 10.000.000 / (Populatie × Rijbreedte)</pre><ul><li><strong>10.000.000:</strong> Omrekeningsfactor van Ha naar cm².</li><li><strong>Populatie:</strong> Zaden per hectare.</li><li><strong>Rijbreedte:</strong> Afstand tussen de rijen in cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Waarom deze calculator gebruiken?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als u in het veld meet en uw zaden liggen dichter bij elkaar of verder uit elkaar dan de doelafstand, dan is uw machine <strong>slecht gekalibreerd</strong>. Deze tool analyseert ook de doseerfrequentie (Hz) van de zaaischijf bij verschillende werksnelheden, en waarschuwt u voor het risico op singulatieverlies.',
    },
    {
      type: 'title',
      text: 'Sleutels voor kwaliteitszaaien',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulatie:</strong> Vermijd dubbelingen en missers. Een singulatie van 99% houdt de concurrentie tussen planten in evenwicht.',
        '<strong>Uniforme afstand:</strong> De variatiecoëfficiënt moet kleiner zijn dan 0,3. Afwijkingen groter dan 5 cm verminderen het opbrengstpotentieel.',
        '<strong>Diepte:</strong> Cruciaal voor een gelijkmatige opkomst. Pas de druk van de aandrukrollen aan op basis van de bodemvochtigheid.',
      ],
    },
    {
      type: 'title',
      text: 'Verificatiemethoden in het veld',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000 Hectare-methode:</strong> Meet een specifieke afstand langs een zaaigeul die 1/1000 hectare vertegenwoordigt. Tel de zaden en vermenigvuldig met 1.000. Voor rijen van 70 cm is de afstand 14,28 m; voor rijen van 52,5 cm is dit 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Aandrijfwiel-methode:</strong> Hef de machine op, markeer het aandrijfwiel en draai het equivalent van 1/100 hectare rond. Vang de zaden op in een emmer en weeg of tel ze om de kalibratie te controleren.',
    },
    {
      type: 'title',
      text: 'Referentietabel per gewas',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maïs:</strong> 60.000 tot 95.000 zaden/Ha. Hoge respons op dichtheid bij moderne hybriden.',
        '<strong>Soja:</strong> 250.000 tot 450.000 zaden/Ha. Groot compensatievermogen bij lage dichtheden.',
        '<strong>Zonnebloem:</strong> 40.000 tot 55.000 zaden/Ha. Zeer gevoelig voor dichtheid; overschot verkleint de korfdiameter.',
        '<strong>Koolzaad:</strong> 300.000 tot 600.000 zaden/Ha. Zeer klein zaad; vereist een uitstekend bodemcontact.',
      ],
    },
  ],
  ui: {
    headCrop: 'Selecteer uw gewas',
    headParams: 'Parameters',
    headAnalysis: 'Realtime Analyse',
    labelPopulation: 'Populatie',
    unitSeedsHa: 'Zaden/Ha',
    labelRowWidth: 'Rijbreedte',
    unitCm: 'Centimeter',
    labelWorkSpeed: 'Werksnelheid',
    unitKmh: 'km/u',
    labelCalibration: 'Schijfkalibratie',
    labelSpacingDesc: 'Exacte afstand tussen elk zaadje in de rij.',
    labelMachineStress: 'Machinebelasting',
    labelSeedsM: 'Zaden / Meter',
    labelPlantsM2: 'Planten / m²',
    labelSpeedMs: 'Meter / Sec',
    labelHaBag: 'Ha / Zak (80k)',
    statusStandby: 'STAND-BY',
    statusVolumetric: 'VOLUMETRISCHE STROOM',
    statusOptimal: 'OPTIMALE DOSERING',
    statusHighSpeed: 'HOGE SNELHEID',
    statusPlateLimiter: 'SCHIJFLIMIET',
    cropCorn: 'Korrelmaïs',
    cropSilage: 'Snijmaïs',
    cropSunflower: 'Zonnebloem',
    cropSorghum: 'Sorghum',
    cropSoy: 'Sojaboon',
    cropBeet: 'Suikerbiet',
    cropRapeseed: 'Koolzaad',
    noteCorn: 'Hoge precisie vereist',
    noteSilage: 'Gemiddeld hoge dichtheid',
    noteSunflower: 'Snelheidsgevoelig',
    noteSorghum: 'Continue stroom of schijf',
    noteSoy: 'Hoge populatie',
    noteBeet: 'Kritisch ondiep zaaien',
    noteRapeseed: 'Zeer klein zaad',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Wetenschappelijke bronnen',
  },
};
