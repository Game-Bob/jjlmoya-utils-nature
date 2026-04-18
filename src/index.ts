export { natureCategory } from './category';
export const natureCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  NatureToolEntry,
  NatureCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { CRICKET_THERMOMETER_TOOL, cricketThermometer } from './tool/cricketThermometer/index';

export { SEED_CALCULATOR_TOOL, seedCalculator } from './tool/seedCalculator/index';

export { RAIN_HARVESTER_TOOL, rainHarvester } from './tool/rainHarvester/index';

export { DIGITAL_CARBON_TOOL, digitalCarbon } from './tool/digitalCarbon/index';
