import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'krekels-thermometer';
const title = 'Krekels thermometer – Dolbears wet temperatuurcalculator';
const description =
  'Geen thermometer? Luister naar de krekels. Bereken de exacte temperatuur door het aantal tsjirpen te tellen met onze Dolbears wet calculator.';

const faqData = [
  {
    question: 'Wat is de wet van Dolbear?',
    answer:
      'Geformuleerd in 1897 door Amos Dolbear, is dit een wetenschappelijke observatie die een lineaire correlatie ontdekte tussen de tsjirpsnelheid van krekels en de omgevingstemperatuur.',
  },
  {
    question: 'Waarom tsjirpen krekels sneller in de hitte?',
    answer:
      'Krekels zijn koudbloedige dieren (ectothermen). De snelheid van hun metabole processen en spiercontracties hangt af van de buitentemperatuur; hoe warmer het is, hoe meer energie ze hebben om snel geluiden uit te zenden.',
  },
  {
    question: 'Is deze meting nauwkeurig?',
    answer:
      'Het is verrassend nauwkeurig voor soorten zoals de sneeuwboomkrekel (Oecanthus fultoni), met een foutmarge van ongeveer 0,5°C mits correct geteld. Factoren zoals vochtigheid of wind kunnen het resultaat echter beïnvloeden.',
  },
  {
    question: 'Welke krekel moet ik gebruiken voor de berekening?',
    answer:
      'De oorspronkelijke formule is gebaseerd op de sneeuwboomkrekel. Voor de gewone veldkrekel is de relatie vergelijkbaar, maar de snelheid is meestal iets lager.',
  },
];

const howToData = [
  {
    name: 'Zoek een eenzame krekel',
    text: 'Zoek \'s nachts een rustige plek waar je het getsjirp van een enkele krekel duidelijk kunt horen om verwarrende ritmes te voorkomen.',
  },
  {
    name: 'Tel het getsjirp gedurende 15 seconden',
    text: 'Gebruik een stopwatch en tel hoeveel stridulaties het insect in precies 15 seconden maakt.',
  },
  {
    name: 'Voer de waarde in',
    text: 'Tik enkele seconden op de TIK-knop in het ritme van het getsjirp, zodat de calculator automatisch de BPM berekent.',
  },
  {
    name: 'Controleer de temperatuur',
    text: 'Het systeem past de formule T(°C) = 10 + (N - 40) / 7 toe om u een schatting te geven van de omgevingstemperatuur in graden Celsius.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Wetenschappelijke Bronnen',
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
      text: 'Complete Gids: Hoe de wet van Dolbear te gebruiken om de temperatuur te berekenen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wist u dat u de juiste temperatuur kunt bepalen door alleen maar naar de natuur te luisteren? In 1897 ontdekte natuurkundige Amos Dolbear een precieze wiskundige relatie tussen het getsjirp van krekels en de omgevingswarmte. Deze tool digitaliseert die ontdekking om uw telefoon in een natuurlijke thermometer te veranderen.',
    },
    {
      type: 'tip',
      title: 'Waarom "zingen" krekels?',
      html: '<p>De "zang" van de krekel, of <strong>stridulatie</strong>, is eigenlijk een parensroep. Mannetjes wrijven hun vleugels (niet hun poten) tegen elkaar om dit geluid te maken. Omdat het koudbloedige dieren (ectothermen) zijn, hangt de snelheid van dit wrijven direct af van de thermische energie van de lucht.</p>',
    },
    {
      type: 'title',
      text: 'De Wetenschap: Ectothermie en Metabolisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot zoogdieren, die een constante lichaamstemperatuur behouden, zijn insecten afhankelijk van externe warmte. Hun biochemische reacties volgen de <strong>vergelijking van Arrhenius</strong>: hoe meer warmte, hoe sneller de reactie.',
    },
    {
      type: 'paragraph',
      html: 'Dit betekent dat de spieren van de krekel enzymatische reacties nodig hebben om samen te trekken en de vleugels te over elkaar te wrijven. Als het koud is, zijn deze reacties traag en klinkt het getsjirp loom. Als het warm is, versnelt het metabolisme en wordt de zang een hectische triller.',
    },
    {
      type: 'title',
      text: 'De formule van Dolbear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hoewel er variaties bestaan voor verschillende soorten, is de bekendste formule die voor de sneeuwboomkrekel (<em>Oecanthus fultoni</em>). Om de temperatuur in graden Celsius te verkrijgen:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nWaar N = aantal tsjirpen per minuut.',
      ariaLabel: 'Wet van Dolbear voor het berekenen van de temperatuur op basis van krekelgetjilp',
    },
    {
      type: 'paragraph',
      html: 'Onze tool doet dit automatisch: hij meet de tijd tussen uw tikken, berekent het aantal tsjirpen per minuut (BPM) en past de formule onmiddellijk toe.',
    },
    {
      type: 'title',
      text: 'Fascinerende Feiten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Thermometers van de Liefde:</strong> Sommige theorieën suggereren dat vrouwtjes de voorkeur geven aan mannetjes die op de "juiste" frequentie zingen voor de huidige temperatuur, omdat dit aangeeft dat het mannetje gezond is en een sterk metabolisme heeft.',
        '<strong>Koudegrens:</strong> Onder de 10°C (50°F) stoppen de meeste krekels met zingen omdat hun metabolisme te traag is om de spierinspanning vol te houden.',
        '<strong>Synchronisatie:</strong> Op warme nachten kunnen duizenden krekels hun getsjirp synchroniseren, wat een indrukwekkend "golf"-geluidseffect creëert.',
      ],
    },
    {
      type: 'tip',
      title: 'Opmerking over Nauwkeurigheid',
      html: '<p>De nauwkeurigheid hangt af van de krekelsoort. Deze tool is gekalibreerd voor de gewone veldkrekel en de sneeuwboomkrekel. Factoren zoals vochtigheid of wind kunnen het resultaat met ±0,5°C beïnvloeden.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Wachten...',
    labelTapping: 'Blijf tikken...',
    tapInstruction: 'Elke keer dat je getsjirp hoort',
    btnReset: 'Reset',
    btnSoundOn: 'Geluid: Aan',
    btnSoundOff: 'Geluid: Uit',
    unitChirpsMin: 'tsjirpen/min',
    faqTitle: 'Veelgestelde Vragen',
    bibliographyTitle: 'Wetenschappelijke Bronnen',
  },
};
