import type { SeedStratificationCalendarUI } from './ui';

export function profileLabels(ui: SeedStratificationCalendarUI): Record<string, string> {
  return {
    apple: ui.profileApple,
    lavender: ui.profileLavender,
    milkweed: ui.profileMilkweed,
    rose: ui.profileRose,
    strawberry: ui.profileStrawberry,
    peach: ui.profilePeach,
    cherry: ui.profileCherry,
    pear: ui.profilePear,
    poppy: ui.profilePoppy,
    sunflower: ui.profileSunflower,
    tomato: ui.profileTomato,
    basil: ui.profileBasil,
  };
}
