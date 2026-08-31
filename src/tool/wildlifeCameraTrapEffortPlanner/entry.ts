import type { NatureToolEntry, ToolLocaleContent } from '../../types';
import type { WildlifeCameraTrapEffortPlannerUI } from './ui';

export type WildlifeCameraTrapEffortPlannerLocaleContent = ToolLocaleContent<WildlifeCameraTrapEffortPlannerUI>;

export const wildlifeCameraTrapEffortPlanner: NatureToolEntry<WildlifeCameraTrapEffortPlannerUI> = {
  id: 'wildlife-camera-trap-effort-planner',
  icons: {
    bg: 'mdi:forest-outline',
    fg: 'mdi:camera-outline',
  },
  i18n: {
    en: async () => (await import('./i18n/en')).content,
    de: async () => (await import('./i18n/de')).content,
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
