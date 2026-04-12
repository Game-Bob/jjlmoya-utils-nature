import type { NatureToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DigitalCarbonComponent from './component.astro';
import DigitalCarbonSEO from './seo.astro';
import DigitalCarbonBibliography from './bibliography.astro';
import type { DigitalCarbonUI } from './ui';

export type DigitalCarbonLocaleContent = ToolLocaleContent<DigitalCarbonUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const digitalCarbon: NatureToolEntry<DigitalCarbonUI> = {
  id: 'digital-carbon',
  icons: {
    bg: 'mdi:leaf',
    fg: 'mdi:monitor',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { DigitalCarbonComponent, DigitalCarbonSEO, DigitalCarbonBibliography };

export const DIGITAL_CARBON_TOOL: ToolDefinition = {
  entry: digitalCarbon,
  Component: DigitalCarbonComponent,
  SEOComponent: DigitalCarbonSEO,
  BibliographyComponent: DigitalCarbonBibliography,
};
