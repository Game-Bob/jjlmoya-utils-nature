import type { ToolDefinition } from '../../types';
import { wildlifeCameraTrapEffortPlanner } from './entry';

export * from './entry';

export const WILDLIFE_CAMERA_TRAP_EFFORT_PLANNER_TOOL: ToolDefinition = {
  entry: wildlifeCameraTrapEffortPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
