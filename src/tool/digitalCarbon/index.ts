import type { NatureToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DigitalCarbonComponent from './component.astro';
import DigitalCarbonSEO from './seo.astro';
import DigitalCarbonBibliography from './bibliography.astro';
import type { DigitalCarbonUI } from './ui';

export type DigitalCarbonLocaleContent = ToolLocaleContent<DigitalCarbonUI>;

export const digitalCarbon: NatureToolEntry<DigitalCarbonUI> = {
  id: 'digital-carbon',
  icons: {
    bg: 'mdi:leaf',
    fg: 'mdi:monitor',
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

export { DigitalCarbonComponent, DigitalCarbonSEO, DigitalCarbonBibliography };

export const DIGITAL_CARBON_TOOL: ToolDefinition = {
  entry: digitalCarbon,
  Component: DigitalCarbonComponent,
  SEOComponent: DigitalCarbonSEO,
  BibliographyComponent: DigitalCarbonBibliography,
};
