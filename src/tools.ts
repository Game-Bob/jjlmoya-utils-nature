import type { ToolDefinition } from './types';
import { CRICKET_THERMOMETER_TOOL } from './tool/cricketThermometer/index';
import { SEED_CALCULATOR_TOOL } from './tool/seedCalculator/index';

export const ALL_TOOLS: ToolDefinition[] = [CRICKET_THERMOMETER_TOOL, SEED_CALCULATOR_TOOL];
