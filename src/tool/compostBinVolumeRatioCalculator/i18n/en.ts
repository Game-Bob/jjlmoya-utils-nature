import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "compost-bin-volume-and-browns-greens-ratio-calculator";
const title = "Compost Bin Volume and Browns Greens Ratio Calculator";
const description =
  "Calculate the internal volume of a rectangular or cylindrical compost bin and check the practical balance of browns, greens, moisture, and air.";

const faq = [
  {
    question: "How do I calculate compost bin volume?",
    answer:
      "Measure the inside of the bin. For a rectangular bin, multiply width by depth by height and convert cubic centimeters to liters. For a cylinder, use pi times the radius squared times height.",
  },
  {
    question: "What is the right ratio of browns to greens in compost?",
    answer:
      "A practical starting point is two to three parts carbon rich browns by volume for each part nitrogen rich greens. Adjust by observing moisture, smell, and airflow rather than treating the ratio as a laboratory measurement.",
  },
  {
    question: "How much compost can I put in the bin?",
    answer:
      "Compare the volume of your materials with the bin capacity. Leave room for air and turning, and do not pack the contents tightly just to reach the rim.",
  },
  {
    question: "What does wrung out sponge moisture mean?",
    answer:
      "The materials should feel damp without releasing water when squeezed. A dry pile slows down, while a saturated pile needs more dry structure and turning for airflow.",
  },
];

const howTo = [
  {
    name: "Choose the bin shape",
    text: "Select rectangular or cylindrical and enter the inside dimensions in centimeters or inches.",
  },
  {
    name: "Add your material volumes",
    text: "Estimate the separate volume of brown carbon rich materials and green nitrogen rich materials.",
  },
  {
    name: "Set the moisture feel",
    text: "Choose dry, wrung out sponge, or wet to make the maintenance advice match the pile you are preparing.",
  },
  {
    name: "Read the pile",
    text: "Use the capacity, fill level, ratio, and warnings to decide whether to add browns, add moisture, or turn the pile.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "en",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metric",
    unitImperial: "Imperial",
    shapeTitle: "Bin shape",
    shapeRectangular: "Rectangular",
    shapeCylindrical: "Cylindrical",
    widthLabel: "Inside width",
    depthLabel: "Inside depth",
    diameterLabel: "Inside diameter",
    heightLabel: "Inside height",
    brownLabel: "Browns",
    greenLabel: "Greens",
    moistureTitle: "Moisture feel",
    moistureDry: "Dry",
    moistureSponge: "Wringed sponge",
    moistureWet: "Wet",
    moistureAdviceDry: "Dry: moisten gradually and turn.",
    moistureAdviceSponge: "Good: keep the wrung out sponge feel.",
    moistureAdviceWet: "Wet: add dry browns and turn.",
    recipeTitle: "Add what you have",
    recipeKitchen: "Kitchen caddy",
    recipeGarden: "Garden batch",
    recipeLeafy: "Leafy pile",
    sceneTitle: "Your pile in section",
    resultCapacity: "Internal bin capacity",
    resultMaterials: "Materials entered",
    resultRatio: "Browns to greens",
    resultFill: "Capacity used",
    brownTarget: "Brown target",
    waterAction: "Moisture",
    airAction: "Air and structure",
    statusBalanced: "Good starting balance",
    statusTooGreen: "Add more browns",
    statusTooBrown: "Add more greens",
    statusNoGreens: "Add some greens",
    statusOverfilled: "Pile is over capacity",
    statusDry: "Pile feels dry",
    statusWet: "Pile feels too wet",
    statusGoodMoisture: "Moisture is in range",
    statusNote: "Turn the pile to reopen air pockets.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "The volume behind the drawing",
    formulaText:
      "The calculator finds internal capacity from your inside measurements. Rectangular bins use width × depth × height. Cylindrical bins use π × radius² × height. Material volumes are converted to the same unit before the fill level is shown.",
    practicalTitle: "A ratio is a starting point",
    practicalText:
      "The brown target uses two to three times the green volume. Moisture and air still matter: aim for a wrung out sponge feel, keep bulky structure in the mix, and turn the pile when it settles.",
    localNote:
      "All measurements stay in this browser. This is a planning aid, not a laboratory C:N analysis.",
    resetLabel: "Reset",
  },
  seo: [
    {
      type: "title",
      text: "Calculate the Real Capacity of a Compost Bin",
      level: 2,
    },
    {
      type: "paragraph",
      html: "A compost bin volume calculator is most useful when it works from the inside measurements, not the label on the product. Enter the width, depth, and height of a rectangular bin, or the diameter and height of a cylindrical one. The result shows the internal capacity in liters or gallons and compares it with the material volume you plan to add.",
    },
    { type: "title", text: "Compost Bin Volume Formulas", level: 3 },
    {
      type: "paragraph",
      html: "For a rectangular bin, use <code>width × depth × height</code>. If the measurements are in centimeters, divide the cubic centimeter result by 1,000 to get liters. For a cylindrical bin, use <code>π × radius² × height</code>, where radius is half the inside diameter. Measure the clear space inside the bin and do not count thick walls, legs, or a lid.",
    },
    {
      type: "list",
      items: [
        "<strong>Rectangular:</strong> width × depth × height.",
        "<strong>Cylindrical:</strong> π × radius² × height.",
        "<strong>Liters:</strong> 1,000 cubic centimeters.",
        "<strong>Fill level:</strong> brown volume plus green volume compared with internal capacity.",
      ],
    },
    { type: "title", text: "How Much Browns and Greens to Add", level: 3 },
    {
      type: "paragraph",
      html: "Use two to three parts browns for each part greens by volume as a practical starting point. Browns include dry leaves, shredded cardboard, and small woody material. Greens include food scraps, fresh grass, and other nitrogen rich material. The calculator reports the target brown range, but the pile itself supplies the final feedback through moisture, smell, heat, and airflow.",
    },
    { type: "title", text: "Read the Moisture and Air Warnings", level: 3 },
    {
      type: "paragraph",
      html: "A pile that feels dry may decompose slowly, while a saturated pile can lose air spaces and develop unpleasant odors. Aim for a wrung out sponge feel. If the pile is wet, add dry bulky browns and turn it. If it is dry, moisten it gradually while turning so the water spreads through the material.",
    },
    {
      type: "tip",
      title: "Use the result as a check, not a prescription",
      html: "The ratio is a volume guideline, not a measured carbon to nitrogen analysis. The calculator does not identify materials, measure temperature, assess contamination, or guarantee finished compost. Keep animal waste, treated wood, and other unsuitable materials out of a home pile according to local guidance.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
