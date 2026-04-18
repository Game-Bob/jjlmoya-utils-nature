export * from './entry';
export const DIGITAL_CARBON_TOOL: ToolDefinition = {
  entry: digitalCarbon,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
