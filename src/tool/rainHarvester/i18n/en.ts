import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'rainwater-calculator';
const title = 'Rainwater Harvesting Calculator';
const description = 'Calculate how much rainwater you can collect from your roof and size your storage tank.';

const faqData = [
  {
    question: 'How much water can I actually collect from my roof?',
    answer: 'The general rule is that for every square meter of roof and every millimeter of rain, you can collect approximately 1 liter of water. However, there are losses from evaporation and filtration adjusted with the "runoff coefficient".',
  },
  {
    question: 'What is the runoff coefficient?',
    answer: 'It is a percentage that indicates how much water is lost depending on the roof material. A metal or tile roof is very efficient (0.85-0.95), while a gravel or soil roof is much less efficient (0.1-0.3).',
  },
  {
    question: 'How do I size the storage tank?',
    answer: 'You should calculate the maximum expected rain volume in a month and cross-reference it with your estimated monthly consumption. A tank that is too small will overflow in storms, and one that is too large will be unnecessarily expensive.',
  },
  {
    question: 'Is it safe to drink collected rainwater?',
    answer: 'Not directly. Water carries dust, bird droppings, and airborne particles. For human consumption, it must pass through sediment filters, activated carbon, and disinfection using UV light or chlorine.',
  },
];

const howToData = [
  {
    name: 'Measure the horizontal surface',
    text: 'Measure the length and width of your roof base (not the sloped surface, but the area that projects shadows on the ground).',
  },
  {
    name: 'Check local rainfall',
    text: 'Search the national meteorological service for the average annual or monthly precipitation in your area in millimeters (mm).',
  },
  {
    name: 'Apply material efficiency',
    text: 'Select your roof material in our calculator to discount the water that will be lost through absorption or heat.',
  },
  {
    name: 'Calculate the required volume',
    text: 'Use the annual liters result to choose a tank that can store at least 20-30% of the total harvest for dry periods.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Roof Settings',
    headResults: 'Harvest Potential',
    labelArea: 'Roof Area',
    labelRainfall: 'Annual Rainfall',
    labelMaterial: 'Roof Material',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Liters',
    helpRainfall: 'Don\'t know? Search "average annual precipitation [your city]" on Google.',
    efficiencyTitle: 'Efficiency Factor',
    efficiencyNote: 'A 10% loss is applied for filters and evaporation.',
    resultTitle: 'Annual Harvest Potential',
    equivalenciesTitle: 'Practical Equivalents',
    labelFlushes: 'Toilet Flushes',
    labelShowers: 'Showers (10 min)',
    labelGarden: 'Garden Watering',
    gardenArea: '(50m²)',
    materialMetal: 'Metal / Glazed Tile',
    materialClay: 'Arabic Tile / Clay',
    materialConcrete: 'Concrete / Asphalt',
    materialGravel: 'Gravel / Green Roof',
  },
  seo: [
    {
      type: 'title',
      text: 'Rainwater Harvesting: Autonomy and Sustainability',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most homeowners are unaware of the potential of their own roofs. A standard roof can capture thousands of liters of free water each year. This tool quantifies that potential, allowing you to calculate exactly how much water you can "harvest" and determine the ideal tank size for storage.',
    },
    {
      type: 'title',
      text: 'Calculation Logic',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The base formula for rainwater collection is simple but powerful:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volume = Area × Rainfall × Runoff Coefficient × Filter Efficiency</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Area:</strong> Your roof footprint (projected length × width).',
        '<strong>Rainfall:</strong> Falling rain in millimeters.',
        '<strong>Coefficient:</strong> How much water your roof loses (e.g., absorption).',
        '<strong>Efficiency:</strong> Losses in pre-tank filters (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Why Collect Rainwater?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Savings:</strong> Significantly reduce your water bill.',
        '<strong>Gardening:</strong> Plants love water without chlorine or lime.',
        '<strong>Resilience:</strong> Maintain an emergency reserve in case of cuts.',
      ],
    },
    {
      type: 'title',
      text: 'Tank Sizing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The most common mistake is buying a tank based only on budget. If it is too small, you will waste thousands of liters due to overflow. If it is too large, you will spend money unnecessarily. A general rule is to have capacity to store <strong>3 months</strong> of average rainfall in your area, allowing you to bridge dry seasons.',
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Scientific References',
  bibliography: [
    {
      name: 'FAO - Rainwater Harvesting and Storage',
      url: 'https://www.fao.org/3/a1348s/a1348s.pdf',
    },
    {
      name: 'Texas A&M AgriLife Extension - Rainwater Harvesting',
      url: 'https://rainwaterharvesting.tamu.edu/',
    },
    {
      name: 'Brad Lancaster - Rainwater Harvesting for Drylands',
      url: 'https://www.harvestingrainwater.com/',
    },
    {
      name: 'European Environment Agency - Water Resources',
      url: 'https://www.eea.europa.eu/en/topics/in-depth/water',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
