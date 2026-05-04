import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'cricket-thermometer';
const title = 'Cricket Thermometer – Dolbear\'s Law Temperature Calculator';
const description =
  'No thermometer? Listen to the crickets. Calculate the exact temperature by counting chirps with our Dolbear\'s Law calculator.';

const faqData = [
  {
    question: 'What is Dolbear\'s Law?',
    answer:
      'Formulated in 1897 by Amos Dolbear, it is a scientific observation that discovered a linear correlation between the chirping rate of crickets and the ambient air temperature.',
  },
  {
    question: 'Why do crickets chirp faster in the heat?',
    answer:
      'Crickets are cold-blooded animals (ectotherms). The speed of their metabolic processes and muscle contractions depends on external temperature; the warmer it is, the more energy they have to emit sounds rapidly.',
  },
  {
    question: 'Is this measurement accurate?',
    answer:
      'It is surprisingly accurate for species like the snow tree cricket (Oecanthus fultoni), with a margin of error of about 0.5°C if counted correctly. However, factors such as humidity or wind can alter the result.',
  },
  {
    question: 'Which cricket should I use for the calculation?',
    answer:
      'The original formula is based on the snow tree cricket. For the common field cricket, the relationship is similar but the rate tends to be slightly slower.',
  },
];

const howToData = [
  {
    name: 'Find a solitary cricket',
    text: 'Find a quiet place at night where you can clearly hear the chirping of a single cricket to avoid confusing the rhythms.',
  },
  {
    name: 'Count chirps for 15 seconds',
    text: 'Use a stopwatch and count how many stridulations the insect emits in exactly 15 seconds.',
  },
  {
    name: 'Enter the value',
    text: 'Tap the TAP button in rhythm with the chirps for a few seconds so the calculator automatically computes the BPM.',
  },
  {
    name: 'Verify the temperature',
    text: 'The system will apply the formula T(°C) = 10 + (N - 40) / 7 to give you an estimate of the ambient heat in degrees Celsius.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Complete Guide: How to Use Dolbear\'s Law to Calculate Temperature',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Did you know you can tell the exact temperature just by listening to nature? In 1897, physicist Amos Dolbear discovered a precise mathematical relationship between the rate of cricket chirps and the ambient heat. This tool digitalizes that discovery to turn your phone into a natural thermometer.',
    },
    {
      type: 'tip',
      title: 'Why do crickets sing?',
      html: '<p>The cricket\'s "song", or <strong>stridulation</strong>, is actually a mating call. Males rub their wings (not their legs) together to create this sound. Fascinatingly, since they are cold-blooded animals (ectotherms), the speed of this rubbing depends directly on the thermal energy of the air.</p>',
    },
    {
      type: 'title',
      text: 'The Science: Ectothermy and Metabolism',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unlike mammals, which maintain a constant body temperature, insects depend on external heat. Their biochemical reactions follow the <strong>Arrhenius Equation</strong>: the more heat, the faster the reaction.',
    },
    {
      type: 'paragraph',
      html: 'This means that for the cricket\'s muscles to contract and rub its wings, they need enzymatic reactions. If it\'s cold, these reactions are slow and the chirp is sluggish. If it\'s warm, metabolism speeds up and the song becomes a frantic trill.',
    },
    {
      type: 'title',
      text: 'Dolbear\'s Formula',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Although variations exist for different species, the most famous formula is for the snow tree cricket (<em>Oecanthus fultoni</em>). To obtain the temperature in degrees Celsius:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nWhere N = number of chirps per minute.',
      ariaLabel: 'Dolbear\'s formula for calculating temperature from cricket chirps',
    },
    {
      type: 'paragraph',
      html: 'Our tool does this automatically: it measures the time between your taps, calculates chirps per minute (BPM) and applies the formula instantly.',
    },
    {
      type: 'title',
      text: 'Fascinating Facts',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Thermometers of Love:</strong> Some theories suggest that females prefer males who sing at the "correct" frequency for the current temperature, as it indicates the male is healthy and has a strong metabolism.',
        '<strong>Cold Limit:</strong> Below 10°C (50°F), most crickets stop singing because their metabolism is too slow to sustain the muscular effort.',
        '<strong>Synchronization:</strong> On warm nights, thousands of crickets can synchronize their chirps, creating an impressive "wave" sound effect.',
      ],
    },
    {
      type: 'tip',
      title: 'Accuracy Note',
      html: '<p>Accuracy depends on the cricket species. This tool is calibrated for the common field cricket and tree cricket. Factors such as humidity or wind can alter the result by ±0.5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Waiting...',
    labelTapping: 'Keep tapping...',
    tapInstruction: 'Every time you hear a chirp',
    btnReset: 'Reset',
    btnSoundOn: 'Sound: On',
    btnSoundOff: 'Sound: Off',
    unitChirpsMin: 'chirps/min',
  },
};
