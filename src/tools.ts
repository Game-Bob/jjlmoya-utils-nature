export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { CRICKET_THERMOMETER_TOOL } from './tool/cricketThermometer/index';
import { SEED_CALCULATOR_TOOL } from './tool/seedCalculator/index';
import { RAIN_HARVESTER_TOOL } from './tool/rainHarvester/index';
import { DIGITAL_CARBON_TOOL } from './tool/digitalCarbon/index';

export const ALL_TOOLS: ToolDefinition[] = [
  CRICKET_THERMOMETER_TOOL,
  SEED_CALCULATOR_TOOL,
  RAIN_HARVESTER_TOOL,
  DIGITAL_CARBON_TOOL
];

