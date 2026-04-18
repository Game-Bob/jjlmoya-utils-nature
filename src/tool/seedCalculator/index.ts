import { seedCalculator } from './entry';
export * from './entry';
export const SEED_CALCULATOR_TOOL: ToolDefinition = {
  entry: seedCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
