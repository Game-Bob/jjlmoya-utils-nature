import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SeedStratificationCalendarUI } from '../ui';

const slug = 'seed-stratification-calendar';
const title = 'Seed Stratification Calendar for Better Sowing Dates';
const description = 'Build a dated seed preparation plan by working backwards from sowing day or forwards from today, with warm stratification, cold stratification and soaking phases in one clear calendar.';

const faqData = [
  {
    question: 'What does this seed stratification calendar calculate?',
    answer: 'It works backwards from your intended sowing date or forwards from the day you have the seeds ready, then places soaking, warm moist stratification, cold moist stratification and sowing on exact dates.',
  },
  {
    question: 'Why does the calendar offer two date modes?',
    answer: 'Use the sowing-date mode when the planting day is fixed and you need a start date. Use the ready-date mode when preparation begins today and you need the exact future sowing day.',
  },
  {
    question: 'Can I change the suggested duration or temperature?',
    answer: 'Yes. Choose a species profile as a starting point, then edit the duration of each phase and the cold range to match the seed packet, a specialist collection record or your local growing advice.',
  },
  {
    question: 'Does a completed calendar guarantee germination?',
    answer: 'No. The result is a scheduling aid, not a germination guarantee. Seed age, moisture, viability, dormancy type, fungal control and sowing conditions can all change the outcome.',
  },
];

const howToData = [
  { name: 'Choose a seed profile', text: 'Start with the closest species profile so the calendar loads a realistic sequence and duration.' },
  { name: 'Choose a date mode', text: 'Work backwards from a target sowing day or forwards from the day the seeds are ready.' },
  { name: 'Check the treatment phases', text: 'Adjust soaking, warm and cold days, then set the cold storage range to the evidence you are following.' },
  { name: 'Follow the dated sequence', text: 'Begin on the calendar start date, move through each phase in order and sow on the target date.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<SeedStratificationCalendarUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Plan the preparation window', level: 2 },
    { type: 'paragraph', html: 'Seed dormancy is a timing problem as much as a growing problem. A seed that needs a moist cold period can miss the intended sowing window if preparation starts too late, while an unnecessarily long treatment can waste time and increase the chance of mould or premature germination. This calendar turns the target sowing date into a sequence you can act on.' },
    { type: 'paragraph', html: 'Choose a target sowing date to count backwards, or choose the ready-date mode to count forwards from the day preparation begins. Each phase occupies its own dates, so the end of soaking leads directly into warm or cold treatment and the final treatment ends the day before sowing. That makes the output useful for labelling a container, setting a reminder or preparing a fridge shelf.' },
    { type: 'title', text: 'How to read each phase', level: 2 },
    { type: 'list', items: ['<strong>Soak:</strong> hydrate the seed for the listed number of days using the instructions appropriate to the species.', '<strong>Warm:</strong> keep the moist seed in the displayed warm range when the species profile calls for a warm phase.', '<strong>Cold:</strong> keep the seed moist and chilled within the edited range, checking it regularly for mould or early roots.', '<strong>Sow:</strong> move the prepared seed into its growing medium on the target day and follow the species specific depth and moisture guidance.'] },
    { type: 'title', text: 'Use evidence for the species', level: 2 },
    { type: 'paragraph', html: 'The profiles are starting points, not universal prescriptions. Cultivar, seed provenance and the treatment already printed on the packet can change dormancy requirements. If a specialist seed supplier gives a different duration, use that information and edit the profile rather than averaging several conflicting recommendations.' },
    { type: 'tip', title: 'A calendar is not a germination test', html: '<p>Keep a small record of the seed lot, treatment dates, moisture medium and temperature. If seeds sprout during cold treatment, sow them immediately and handle the root carefully. If they remain dormant after the planned phase, do not extend the treatment automatically without checking species guidance.</p>' },
    { type: 'title', text: 'Practical checks before you begin', level: 2 },
    { type: 'list', items: ['Confirm the sowing date is realistic for your local light, soil and frost conditions.', 'Label the container with species, start date, end date and temperature range.', 'Use a moist but aerated medium and inspect it regularly rather than sealing it and forgetting it.', 'Keep the dated plan with the seed packet so a later result can be traced back to the treatment used.'] },
    { type: 'title', text: 'What the result cannot tell you', level: 2 },
    { type: 'paragraph', html: 'This tool does not identify dormancy from a photograph, test seed viability, predict local weather or replace instructions for toxic, protected or unusually difficult species. It also does not promise that every seed will germinate. Treat the timeline as an organised interpretation of the durations you provide, then verify the biology with a relevant horticultural source.' },
  ],
  ui: {
    labelProfile: 'Seed profile',
    labelMode: 'Plan mode',
    labelModeSowing: 'I want to sow on',
    labelModeReady: 'Seeds are ready today',
    labelSowingDate: 'Target sowing date',
    labelReadyDate: 'Ready date',
    labelSoakDays: 'Soak days',
    labelWarmDays: 'Warm days',
    labelColdDays: 'Cold days',
    labelColdRange: 'Cold temperature range',
    labelUnits: 'Temperature units',
    labelMetric: 'Metric °C',
    labelImperial: 'Imperial °F',
    labelFrom: 'Minimum temperature',
    labelTo: 'Maximum temperature',
    labelGenerate: 'Update calendar',
    labelReset: 'Reset profile',
    labelAddCalendar: 'Add to my calendar',
    labelShare: 'Copy share link',
    labelCopied: 'Link copied',
    labelPrint: 'Print compact label',
    labelTechnique: 'Technique',
    labelTodayStatus: "Today's status",
    labelDayOf: 'day of',
    labelGantt: 'Preparation timeline',
    labelTimeline: 'Preparation timeline',
    labelNextAction: 'Current phase',
    labelCalendarStarts: 'calendar starts',
    labelSowingDay: 'sowing day',
    labelDuration: 'Preparation',
    labelDays: 'days',
    labelTemperature: 'Temperature',
    labelReady: 'Sow today',
    labelUpcoming: 'Upcoming',
    labelActive: 'In progress',
    labelComplete: 'Plan complete',
    labelEditHint: 'Use the packet or collection guidance to refine the suggested phases. The calendar saves your last settings on this device.',
    labelWarm: 'Warm stratification',
    labelCold: 'Cold stratification',
    labelSoak: 'Soak seeds',
    labelSow: 'Sow seeds',
    noteApple: 'Moist cold period after a short soak',
    noteLavender: 'Short cold period before spring sowing',
    noteMilkweed: 'Warm phase followed by cold phase',
    noteRose: 'Long cold period after soaking',
    profileApple: 'Apple · Malus domestica',
    profileLavender: 'Lavender · Lavandula angustifolia',
    profileMilkweed: 'Common milkweed · Asclepias syriaca',
    profileRose: 'Rose · Rosa spp.',
    profileStrawberry: 'Strawberry · Fragaria × ananassa',
    profilePeach: 'Peach · Prunus persica',
    profileCherry: 'Sweet cherry · Prunus avium',
    profilePear: 'Pear · Pyrus communis',
    profilePoppy: 'Poppy · Papaver spp.',
    profileSunflower: 'Sunflower · Helianthus annuus',
    profileTomato: 'Tomato · Solanum lycopersicum',
    profileBasil: 'Basil · Ocimum basilicum',
    instructionSoak: 'Keep seeds hydrated before the next phase.',
    instructionWarm: 'Keep the moist seed in a warm place.',
    instructionCold: 'Keep the moist seed chilled and inspect it regularly.',
    instructionSow: 'Sow into the prepared growing medium.',
    emptyState: 'Set your dates to build a preparation timeline.',
    warningDate: 'Choose a valid sowing date.',
    warningTemperature: 'Check the duration and temperature values before updating the calendar.',
  },
};
