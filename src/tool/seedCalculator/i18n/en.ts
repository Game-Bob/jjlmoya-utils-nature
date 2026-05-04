import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'seed-calculator';
const title = 'Seed Spacing and Planter Calibration Calculator';
const description =
  'Precision tool for farmers. Calculate the ideal spacing between seeds based on target population and row width, and analyse planter stress at different working speeds.';

const faqData = [
  {
    question: 'How is seed spacing calculated?',
    answer:
      'One hectare (10,000 m²) is divided by the row width to get the total linear metres of sowing. The target population is then divided by those metres to determine how many seeds to place per linear metre.',
  },
  {
    question: 'What is the target population per hectare?',
    answer:
      'It is the ideal number of plants per 10,000 square metres. It depends on crop type, soil fertility and water availability. For example, irrigated maize typically requires 85,000 to 95,000 seeds per hectare.',
  },
  {
    question: 'How does germination percentage affect the calculation?',
    answer:
      'Not all seeds that are sown will emerge. If a seed batch has 95% germination, you must increase the seeding rate by 5% to achieve the desired final plant population.',
  },
  {
    question: 'Why is planter calibration so important?',
    answer:
      'A seeding rate that is too dense causes competition between plants and smaller grains. A rate that is too sparse wastes space and yield potential. Precision is the key to profitability.',
  },
];

const howToData = [
  {
    name: 'Enter target population',
    text: 'Define how many seeds or plants you want per hectare according to the technical recommendation for your variety.',
  },
  {
    name: 'Set row width',
    text: 'Measure the distance between the discs or boots of your planter (typically 50, 70 or 75 cm).',
  },
  {
    name: 'Adjust germination rate',
    text: 'Enter the expected emergence percentage to compensate for natural losses in the field.',
  },
  {
    name: 'Obtain mechanical adjustment',
    text: 'Use the seeds per metre or cm between seeds value to adjust the sprockets or monitor on your machine.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
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
      text: 'Technical Guide to Precision Sowing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Adjusting a planter transmission requires knowing exactly how many seeds must fall per linear metre of furrow. Machine manuals usually give approximate tables, but factors such as <strong>drive wheel slippage</strong> or seed size can alter reality. This tool gives you the perfect theoretical value: the <strong>target spacing between seeds</strong>.',
    },
    {
      type: 'tip',
      title: 'The Mathematical Formula',
      html: '<p>For agronomists and the curious, here is the basis of the calculation:</p><pre>Spacing (cm) = 10,000,000 / (Population × Row Width)</pre><ul><li><strong>10,000,000:</strong> Conversion factor from Ha to cm².</li><li><strong>Population:</strong> Seeds per hectare.</li><li><strong>Row Width:</strong> Distance between rows in cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Why Use This Calculator?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you measure in the field and your seeds are closer together or further apart than the target spacing, your machine is <strong>poorly calibrated</strong>. This tool also analyses the dosing frequency (Hz) of the seed disc at different working speeds, alerting you to the risk of singulation loss.',
    },
    {
      type: 'title',
      text: 'Keys to Quality Sowing',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulation:</strong> Avoid doubles and skips. 99% singulation keeps competition between plants balanced.',
        '<strong>Uniform Spacing:</strong> The coefficient of variation should be less than 0.3. Deviations greater than 5 cm reduce yield potential.',
        '<strong>Depth:</strong> Critical for uniform emergence. Adjust press wheel load according to soil moisture.',
      ],
    },
    {
      type: 'title',
      text: 'Field Verification Methods',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000 Hectare Method:</strong> Measure a specific distance along a furrow representing 1/1000 of a hectare. Count the seeds and multiply by 1,000. For 70 cm rows the distance is 14.28 m; for 52.5 cm rows it is 19.05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drive Wheel Method:</strong> Lift the machine, mark the drive wheel and turn it the equivalent of 1/100 of a hectare. Collect the seeds in a bucket and weigh or count them to verify calibration.',
    },
    {
      type: 'title',
      text: 'Reference Table by Crop',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maize:</strong> 60,000 to 95,000 seeds/Ha. High response to density in modern hybrids.',
        '<strong>Soybean:</strong> 250,000 to 450,000 seeds/Ha. Great compensation capacity at low densities.',
        '<strong>Sunflower:</strong> 40,000 to 55,000 seeds/Ha. Very sensitive to density; excess reduces head diameter.',
        '<strong>Rapeseed:</strong> 300,000 to 600,000 seeds/Ha. Very small seed; requires excellent soil contact.',
      ],
    },
  ],
  ui: {
    headCrop: 'Select your Crop',
    headParams: 'Parameters',
    headAnalysis: 'Real Time Analysis',
    labelPopulation: 'Population',
    unitSeedsHa: 'Seeds/Ha',
    labelRowWidth: 'Row Width',
    unitCm: 'Centimetres',
    labelWorkSpeed: 'Working Speed',
    unitKmh: 'km/h',
    labelCalibration: 'Plate Calibration',
    labelSpacingDesc: 'Exact distance between each seed in the row.',
    labelMachineStress: 'Machine Stress',
    labelSeedsM: 'Seeds / Metre',
    labelPlantsM2: 'Plants / m²',
    labelSpeedMs: 'Metres / Sec',
    labelHaBag: 'Ha / Bag (80k)',
    statusStandby: 'STANDBY',
    statusVolumetric: 'VOLUMETRIC FLOW',
    statusOptimal: 'OPTIMAL DOSING',
    statusHighSpeed: 'HIGH SPEED',
    statusPlateLimiter: 'PLATE LIMIT',
    cropCorn: 'Grain Maize',
    cropSilage: 'Silage Maize',
    cropSunflower: 'Sunflower',
    cropSorghum: 'Sorghum',
    cropSoy: 'Soybean',
    cropBeet: 'Sugar Beet',
    cropRapeseed: 'Rapeseed',
    noteCorn: 'High precision required',
    noteSilage: 'Medium high density',
    noteSunflower: 'Speed sensitive',
    noteSorghum: 'Continuous flow or disc',
    noteSoy: 'High population',
    noteBeet: 'Critical shallow sowing',
    noteRapeseed: 'Very small seed',
  },
};
