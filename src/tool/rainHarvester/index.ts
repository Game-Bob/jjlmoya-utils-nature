import { rainHarvester } from './entry';
export * from './entry';
export const RAIN_HARVESTER_TOOL: ToolDefinition = {
  entry: rainHarvester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
