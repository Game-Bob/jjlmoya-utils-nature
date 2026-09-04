import type { ToolDefinition } from '../../types';
import type { ToolDefinition } from "../../types";
import { compostBinVolumeRatioCalculator } from "./entry";

export * from "./entry";

export const COMPOST_BIN_VOLUME_RATIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: compostBinVolumeRatioCalculator,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
