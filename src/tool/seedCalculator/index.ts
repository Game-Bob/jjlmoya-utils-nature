import type { NatureToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SeedCalculatorComponent from './component.astro';
import SeedCalculatorSEO from './seo.astro';
import SeedCalculatorBibliography from './bibliography.astro';

import type { SeedCalculatorUI } from './ui';

export type SeedCalculatorLocaleContent = ToolLocaleContent<SeedCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const seedCalculator: NatureToolEntry<SeedCalculatorUI> = {
  id: 'seed-calculator',
  icons: {
    bg: 'mdi:tractor',
    fg: 'mdi:sprout',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SeedCalculatorComponent, SeedCalculatorSEO, SeedCalculatorBibliography };

export const SEED_CALCULATOR_TOOL: ToolDefinition = {
  entry: seedCalculator,
  Component: SeedCalculatorComponent,
  SEOComponent: SeedCalculatorSEO,
  BibliographyComponent: SeedCalculatorBibliography,
};
