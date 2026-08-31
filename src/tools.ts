export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { CRICKET_THERMOMETER_TOOL } from './tool/cricketThermometer/index';
import { SEED_CALCULATOR_TOOL } from './tool/seedCalculator/index';
import { RAIN_HARVESTER_TOOL } from './tool/rainHarvester/index';
import { DIGITAL_CARBON_TOOL } from './tool/digitalCarbon/index';
import { URBAN_GARDEN_PLANNER_TOOL } from './tool/urbanGardenPlanner/index';
import { COMPOST_BIN_VOLUME_RATIO_CALCULATOR_TOOL } from './tool/compostBinVolumeRatioCalculator/index';
import { WILDLIFE_CAMERA_TRAP_EFFORT_PLANNER_TOOL } from './tool/wildlifeCameraTrapEffortPlanner/index';
import { SEED_STRATIFICATION_CALENDAR_TOOL } from './tool/seedStratificationCalendar/index';

export const ALL_TOOLS: ToolDefinition[] = [
  CRICKET_THERMOMETER_TOOL,
  SEED_CALCULATOR_TOOL,
  RAIN_HARVESTER_TOOL,
  DIGITAL_CARBON_TOOL,
  URBAN_GARDEN_PLANNER_TOOL,
  COMPOST_BIN_VOLUME_RATIO_CALCULATOR_TOOL,
  WILDLIFE_CAMERA_TRAP_EFFORT_PLANNER_TOOL,
  SEED_STRATIFICATION_CALENDAR_TOOL
];
