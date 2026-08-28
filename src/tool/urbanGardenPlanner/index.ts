import type { ToolDefinition } from '../../types';
import { urbanGardenPlanner } from './entry';

export * from './entry';

export const URBAN_GARDEN_PLANNER_TOOL: ToolDefinition = {
  entry: urbanGardenPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
