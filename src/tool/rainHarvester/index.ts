import type { NatureToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import RainHarvesterComponent from './component.astro';
import RainHarvesterSEO from './seo.astro';
import RainHarvesterBibliography from './bibliography.astro';
import type { RainHarvesterUI } from './ui';

export type RainHarvesterLocaleContent = ToolLocaleContent<RainHarvesterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const rainHarvester: NatureToolEntry<RainHarvesterUI> = {
  id: 'rain-harvester',
  icons: {
    bg: 'mdi:weather-pouring',
    fg: 'mdi:water',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { RainHarvesterComponent, RainHarvesterSEO, RainHarvesterBibliography };

export const RAIN_HARVESTER_TOOL: ToolDefinition = {
  entry: rainHarvester,
  Component: RainHarvesterComponent,
  SEOComponent: RainHarvesterSEO,
  BibliographyComponent: RainHarvesterBibliography,
};
