import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'urban-garden-rainwater-and-soil-planner';
const title = 'Urban Garden Rainwater and Soil Planner';
const description = 'Calculate raised bed soil volume and estimate rainwater collection for a balcony, container garden, or urban growing space.';

const faqData = [
  {
    question: 'How much soil do I need for a raised bed?',
    answer: 'Enter the growing area and substrate depth. The planner multiplies them and converts the result to liters, so you can estimate how much soil or compost to order for a raised bed or planter.',
  },
  {
    question: 'How do I calculate rainwater collection for a garden?',
    answer: 'Enter the collection area and rainfall depth. The planner multiplies them, then applies an 85 percent runoff factor and a 90 percent collection factor to create a cautious planning estimate in liters.',
  },
  {
    question: 'Can I use this for a balcony planter?',
    answer: 'Yes. Use the floor or planter footprint as the growing area, the planned soil depth in centimeters, and the roof or awning surface that feeds your collection vessel.',
  },
  {
    question: 'Is captured rainwater safe for edible plants?',
    answer: 'Not automatically. Check the collection surface and vessel, provide appropriate filtration and drainage, and follow local guidance before using harvested water on edible crops.',
  },
];

const howToData = [
  {
    name: 'Measure the growing space',
    text: 'Enter the bed, balcony, or container area that will receive the substrate.',
  },
  {
    name: 'Choose a substrate depth',
    text: 'Enter the planned depth in centimeters, including the part that will settle over time.',
  },
  {
    name: 'Add the collection surface',
    text: 'Enter the roof, awning, or other surface that feeds the collection vessel.',
  },
  {
    name: 'Test a rainfall event',
    text: 'Enter a rainfall amount in millimeters to compare the water captured with the size of the garden.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'A small garden, measured in living layers',
    headInputs: 'Set your garden scene',
    headScene: 'Read the landscape',
    labelGardenArea: 'Growing area',
    labelDepth: 'Substrate depth',
    labelCollectionArea: 'Collection area',
    labelRainfall: 'Rainfall event',
    unitSquareMeters: 'm²',
    unitCentimeters: 'cm',
    unitMillimeters: 'mm',
    unitLiters: 'L',
    helpGardenArea: 'The bed, balcony, or planter footprint.',
    helpDepth: 'The soil layer you want to fill.',
    helpCollectionArea: 'The surface sending water to your tank.',
    helpRainfall: 'Try a recent shower or a local design storm.',
    presetsTitle: 'Start with a shape',
    presetBalcony: 'Balcony bed',
    presetRaisedBed: 'Raised bed',
    presetCommunity: 'Community plot',
    labelSoilNeeded: 'Substrate needed',
    labelWaterCaptured: 'Water captured',
    labelGardenDepth: 'Across this garden',
    labelWateringArea: 'At 10 mm of water',
    sceneCatchment: 'Catchment',
    sceneGardenBed: 'Growing space',
    sceneSoil: 'Soil layer',
    sceneWater: 'Captured water',
    statusBalanced: 'A useful planning match',
    statusLightCapture: 'A light capture event',
    statusDeepBed: 'A deep soil profile',
    statusNoRain: 'Waiting for a rain event',
    statusNote: 'Use this snapshot to size materials and compare scenarios. It is not an irrigation prescription.',
    assumptionTitle: 'Planning assumptions',
    assumptionText: 'The estimate keeps 85% of rainfall as runoff and 90% after collection losses. One liter spread over one square meter equals one millimeter of water.',
    limitationTitle: 'Keep the garden safe',
    limitationText: 'Provide drainage, avoid contaminated collection surfaces, and check local rules before using harvested water on edible crops.',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculate Garden Soil Volume and Rainwater Collection',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A raised bed soil calculator answers one practical question: how many liters of substrate will fill the growing space? A rainwater collection calculator answers another: how much water could a roof, awning, or balcony catch during a rainfall event? This planner puts both estimates side by side for small gardens, containers, balconies, and community plots.',
    },
    {
      type: 'title',
      text: 'Raised Bed Soil Volume Formula',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Soil volume is calculated locally with <code>area in square meters × depth in centimeters × 10 = liters of substrate</code>. For example, a 12 m² bed at 30 cm deep needs 3,600 liters before settling, drainage layers, or any planting design changes.',
    },
    {
      type: 'list',
      items: [
        '<strong>Growing area:</strong> the bed, balcony, or planter footprint.',
        '<strong>Substrate depth:</strong> the soil layer you plan to fill.',
        '<strong>Collection area:</strong> the roof, awning, or surface feeding the vessel.',
        '<strong>Rainfall event:</strong> the rainfall depth you want to model in millimeters.',
      ],
    },
    {
      type: 'title',
      text: 'Rainwater Collection Estimate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The water estimate starts with <code>collection area × rainfall</code>, then keeps 85 percent for runoff and 90 percent after collection losses. One liter spread over one square meter equals one millimeter of water, which makes the result easy to compare with the growing area.',
    },
    {
      type: 'title',
      text: 'Compare Garden Scenarios Offline',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Try a balcony shower, a raised bed, and a community plot with the quick presets, then replace them with your measurements. The planner does not use an address, map, forecast, or official climate dataset. It stays in the browser so you can test assumptions before buying substrate or a storage vessel.',
    },
    {
      type: 'tip',
      title: 'Important limits',
      html: 'Drainage, water quality, evaporation, plant choice, and local rules still need a human decision. Do not use a contaminated roof or storage vessel for edible crops without appropriate treatment and advice.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
