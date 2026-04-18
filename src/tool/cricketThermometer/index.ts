import { cricketThermometer } from './entry';
export * from './entry';
export const CRICKET_THERMOMETER_TOOL: ToolDefinition = {
  entry: cricketThermometer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
