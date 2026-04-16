import type { NatureToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import RainHarvesterComponent from './component.astro';
import RainHarvesterSEO from './seo.astro';
import RainHarvesterBibliography from './bibliography.astro';
import type { RainHarvesterUI } from './ui';

export type RainHarvesterLocaleContent = ToolLocaleContent<RainHarvesterUI>;

export const rainHarvester: NatureToolEntry<RainHarvesterUI> = {
  id: 'rain-harvester',
  icons: {
    bg: 'mdi:weather-pouring',
    fg: 'mdi:water',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content,
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
    fr: async () => (await import('./i18n/fr')).content,
    id: async () => (await import('./i18n/id')).content,
    it: async () => (await import('./i18n/it')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    pt: async () => (await import('./i18n/pt')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};

export { RainHarvesterComponent, RainHarvesterSEO, RainHarvesterBibliography };

export const RAIN_HARVESTER_TOOL: ToolDefinition = {
  entry: rainHarvester,
  Component: RainHarvesterComponent,
  SEOComponent: RainHarvesterSEO,
  BibliographyComponent: RainHarvesterBibliography,
};
