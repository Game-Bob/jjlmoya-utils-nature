import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'wildlife-camera-trap-effort-planner';
const title = 'Wildlife Camera Trap Effort Planner';
const description = 'Plan camera trap effort, estimate camera days and review workload, and sketch a field deployment grid without making population claims.';

const faqData = [
  {
    question: 'What are camera days?',
    answer: 'Camera days are the number of cameras multiplied by the number of days they are active. They describe sampling effort, not the number of animals in an area.',
  },
  {
    question: 'Does the planner calculate wildlife population size?',
    answer: 'No. It estimates operational effort and a nominal planning footprint. Population size, abundance and occupancy require a validated study design and statistical model that accounts for imperfect detection.',
  },
  {
    question: 'What does the spacing input do?',
    answer: 'The spacing input creates a nominal square planning cell for each camera and lets the planner compare that target with an even-grid spacing implied by the area and camera count. It is not a detection radius.',
  },
  {
    question: 'How should I use the review schedule?',
    answer: 'Use the weekly checkpoints as a field planning rhythm. Compare the expected event load with your storage, battery and review capacity, then adjust the deployment plan and record every real visit.',
  },
];

const howToData = [
  {
    name: 'Describe the survey area',
    text: 'Enter the area that the camera deployment is intended to sample. Use the Metric or Imperial switch to keep the physical value consistent while you work.',
  },
  {
    name: 'Place the effort on paper',
    text: 'Enter the number of cameras, deployment duration and target spacing. The field sketch shows stations as a planning grid, not as coordinates or guaranteed detection zones.',
  },
  {
    name: 'Estimate the image workload',
    text: 'Enter the expected trigger rate per camera per day. The planner multiplies it by camera days and distributes the result over weekly review checkpoints.',
  },
  {
    name: 'Turn the plan into field records',
    text: 'Before deployment, assign unique camera and session identifiers, record placement details, and log each retrieval or review even when no wildlife is detected.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
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

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelSurveyArea: 'Survey area',
    labelCameraCount: 'Camera stations',
    labelDeploymentDays: 'Deployment days',
    labelSpacing: 'Target station spacing',
    labelTriggerRate: 'Expected triggers per camera per day',
    areaPerCameraLabel: 'Area per camera',
    unitHectares: 'ha',
    unitAcres: 'ac',
    unitMeters: 'm',
    unitFeet: 'ft',
    unitCameras: 'cameras',
    unitDays: 'days',
    unitEventsPerDay: 'events per day',
    helpSurveyArea: 'The area the deployment is intended to sample.',
    helpCameraCount: 'Active cameras in this campaign.',
    helpDeploymentDays: 'Days from installation to retrieval.',
    helpSpacing: 'A planning cell size, not a detection radius.',
    helpTriggerRate: 'Use a cautious rate from a similar campaign or a test deployment.',
    unitSystemLabel: 'Measurement system',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    presetsTitle: 'Field starting points',
    presetBackyard: 'Backyard edge',
    presetWoodland: 'Mixed woodland',
    presetReserve: 'Large reserve',
    mapLabel: 'Relative field deployment sketch',
    mapCaption: 'Numbered camera stations arranged on a relative planning grid. The cells are a spacing aid, not a habitat coverage map.',
    stationLabel: 'station',
    cameraDaysLabel: 'Camera days',
    expectedEventsLabel: 'Expected events',
    spacingLabel: 'Even grid spacing',
    reviewLoadLabel: 'Events per review',
    reviewScheduleTitle: 'Review rhythm',
    reviewScheduleText: 'Weekly checkpoints make the image workload visible before the cameras go out. Replace them with the actual visits your field protocol requires.',
    reviewDayLabel: 'Day',
    reviewEventsLabel: 'events expected',
    statusBalanced: 'Spacing reads as balanced',
    statusSparse: 'Stations read as widely spaced',
    statusDense: 'Stations read as closely spaced',
    statusReviewHeavy: 'Review load needs attention',
    statusNeedsInput: 'Add a complete deployment plan',
    statusNote: 'This is an effort plan. It cannot tell you how many animals live in the survey area or guarantee that a species will be detected.',
    assumptionTitle: 'What the model assumes',
    assumptionText: 'The nominal footprint treats each station as a square cell based on your target spacing. Expected events assume the trigger rate stays constant across cameras and days.',
    limitationTitle: 'Field limits',
    limitationText: 'Choose locations for the species and question, not only for geometric regularity. Record camera IDs, dates, orientation, height, habitat and blank checks so later analysis can account for imperfect detection.',
  },
  seo: [
    {
      type: 'title',
      text: 'Plan Camera Trap Sampling Effort',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A wildlife camera trap project has two planning problems before it has a species list. First, you need to know how much sampling effort the deployment represents. Second, you need to know whether the expected image stream can be checked, stored and documented by the people running the field work. This planner turns those questions into camera days, expected events, a relative station sketch and review checkpoints.',
    },
    {
      type: 'title',
      text: 'Use Camera Days to Describe Effort',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Camera days are calculated as <code>camera stations × deployment days</code>. Twelve cameras left active for 28 days create 336 camera days. That number is useful for comparing the planned effort of two campaigns, but it is not a population estimate and it does not correct for camera failure, habitat differences or animal behavior.',
    },
    {
      type: 'list',
      items: [
        '<strong>Camera stations:</strong> count the devices that will be active in the campaign.',
        '<strong>Deployment days:</strong> count the intended active days from installation to retrieval.',
        '<strong>Trigger rate:</strong> use events per camera per day, not total images if one event creates a burst.',
        '<strong>Review checkpoints:</strong> use the expected load to plan storage, batteries, visits and image review.',
      ],
    },
    {
      type: 'title',
      text: 'Treat the Field Sketch as a Planning Aid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The station sketch uses your area, camera count and target spacing to show a relative arrangement. Its nominal footprint is the number of stations multiplied by the square of the target spacing. That is a transparent geometry aid for discussing spacing and overlap; it is not the area a sensor can detect. Terrain, vegetation, trail choice, camera height, orientation and species behavior change detection probability.',
    },
    {
      type: 'title',
      text: 'Prepare Better Records Before Deployment',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Before placing a camera, define the target species or group and the question that the survey should answer. Give each camera and deployment session a stable identifier. At installation and review, record dates, location, height, orientation, habitat, settings and whether the device was working. A blank review is still a real observation of the survey process and should not disappear from the record.',
    },
    {
      type: 'tip',
      title: 'Do not turn effort into abundance',
      html: 'Camera traps are affected by imperfect detection. Use this planner to budget field effort and image handling, then use a validated ecological design and analysis when you need occupancy, abundance, density or population change.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
