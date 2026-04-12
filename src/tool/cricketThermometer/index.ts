import type { NatureToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CricketThermometerComponent from './component.astro';
import CricketThermometerSEO from './seo.astro';
import CricketThermometerBibliography from './bibliography.astro';

import type { CricketThermometerUI } from './ui';

export type CricketThermometerLocaleContent = ToolLocaleContent<CricketThermometerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const cricketThermometer: NatureToolEntry<CricketThermometerUI> = {
  id: 'cricket-thermometer',
  icons: {
    bg: 'mdi:thermometer',
    fg: 'mdi:grass',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CricketThermometerComponent, CricketThermometerSEO, CricketThermometerBibliography };

export const CRICKET_THERMOMETER_TOOL: ToolDefinition = {
  entry: cricketThermometer,
  Component: CricketThermometerComponent,
  SEOComponent: CricketThermometerSEO,
  BibliographyComponent: CricketThermometerBibliography,
};
