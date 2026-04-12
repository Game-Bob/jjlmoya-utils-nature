export { natureCategory } from './category';
export { default as natureCategorySEO } from './category/seo.astro';

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

export { ALL_TOOLS } from './tools';

export { CricketThermometerComponent, CricketThermometerSEO, CricketThermometerBibliography } from './tool/cricketThermometer';
export { CRICKET_THERMOMETER_TOOL } from './tool/cricketThermometer/index';

export { SeedCalculatorComponent, SeedCalculatorSEO, SeedCalculatorBibliography } from './tool/seedCalculator';
export { SEED_CALCULATOR_TOOL } from './tool/seedCalculator/index';

export { RainHarvesterComponent, RainHarvesterSEO, RainHarvesterBibliography } from './tool/rainHarvester';
export { RAIN_HARVESTER_TOOL } from './tool/rainHarvester/index';

export { DigitalCarbonComponent, DigitalCarbonSEO, DigitalCarbonBibliography } from './tool/digitalCarbon';
export { DIGITAL_CARBON_TOOL } from './tool/digitalCarbon/index';
