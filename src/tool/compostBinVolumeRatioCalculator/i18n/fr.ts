import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "calculateur-volume-composteur-ratio-bruns-verts";
const title = "Calculateur de Volume de Composteur et Ratio Bruns Verts";
const description =
  "Calculez le volume interne d un composteur rectangulaire ou cylindrique et vérifiez l équilibre pratique entre bruns, verts, humidité et aération.";

const faq = [
  {
    question: "Comment calculer le volume d un composteur ?",
    answer:
      "Mesurez l intérieur du bac. Pour un composteur rectangulaire, multipliez la largeur par la profondeur et la hauteur. Pour un cylindre, utilisez pi multiplié par le rayon au carré multiplié par la hauteur.",
  },
  {
    question: "Quel est le bon ratio entre bruns et verts dans le compost ?",
    answer:
      "Un repère pratique consiste à ajouter deux à trois volumes de matières brunes riches en carbone pour un volume de matières vertes riches en azote. Ajustez selon l humidité et l aération.",
  },
  {
    question: "Quelle quantité de compost puis-je mettre dans le bac ?",
    answer:
      "Comparez le volume de vos matières avec la capacité interne du composteur et conservez un espace pour la circulation d air et le brassage.",
  },
  {
    question: "Que signifie l humidité d une éponge essorée ?",
    answer:
      "Les matières doivent être humides au toucher sans libérer d eau lorsqu on les presse. Un tas trop sec ralentit la décomposition, tandis qu un tas détrempé manque d oxygène.",
  },
];

const howTo = [
  {
    name: "Choisir la forme du composteur",
    text: "Sélectionnez la forme rectangulaire ou cylindrique et entrez les dimensions intérieures en centimètres ou en pouces.",
  },
  {
    name: "Ajouter les volumes de matières",
    text: "Évaluez le volume séparé des matières brunes carbonées et des matières vertes azotées.",
  },
  {
    name: "Ajuster l humidité ressentie",
    text: "Choisissez entre sec, éponge essorée ou mouillé pour obtenir des conseils d entretien adaptés.",
  },
  {
    name: "Analyser le résultat",
    text: "Utilisez la capacité, le niveau de remplissage et le ratio pour ajuster l apport de bruns ou le brassage.",
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
  inLanguage: "fr",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Métrique",
    unitImperial: "Impérial",
    shapeTitle: "Forme du composteur",
    shapeRectangular: "Rectangulaire",
    shapeCylindrical: "Cylindrique",
    widthLabel: "Largeur intérieure",
    depthLabel: "Profondeur intérieure",
    diameterLabel: "Diamètre intérieur",
    heightLabel: "Hauteur intérieure",
    brownLabel: "Bruns",
    greenLabel: "Verts",
    moistureTitle: "Niveau d humidité",
    moistureDry: "Sec",
    moistureSponge: "Éponge essorée",
    moistureWet: "Mouillé",
    moistureAdviceDry: "Sec: humidifiez progressivement et brassez.",
    moistureAdviceSponge: "Optimal: conservez la texture d une éponge essorée.",
    moistureAdviceWet: "Mouillé: ajoutez des bruns secs et aérer.",
    recipeTitle: "Mélange recommandé",
    recipeKitchen: "Déchets de cuisine",
    recipeGarden: "Déchets de jardin",
    recipeLeafy: "Mélange de feuilles",
    sceneTitle: "Vue en coupe du tas de compost",
    resultCapacity: "Capacité interne du composteur",
    resultMaterials: "Matières ajoutées",
    resultRatio: "Ratio bruns sur verts",
    resultFill: "Capacité utilisée",
    brownTarget: "Objectif matières brunes",
    waterAction: "Humidité",
    airAction: "Air et structure",
    statusBalanced: "Bon équilibre initial",
    statusTooGreen: "Ajoutez plus de bruns",
    statusTooBrown: "Ajoutez plus de verts",
    statusNoGreens: "Ajoutez des matières vertes",
    statusOverfilled: "Le bac est débordé",
    statusDry: "Le tas est trop sec",
    statusWet: "Le tas est trop mouillé",
    statusGoodMoisture: "Humidité optimale",
    statusNote: "Brassez le compost pour récréer des poches d air.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Calcul de volume géométrique",
    formulaText:
      "Le calculateur établit la capacité utile à partir des côtés intérieurs. Pour un bac rectangulaire: largeur × profondeur × hauteur. Pour un bac cylindrique: π × rayon² × hauteur. Tous les volumes sont convertis pour afficher le niveau de remplissage.",
    practicalTitle: "Le ratio comme repère pratique",
    practicalText:
      "L objectif vise deux à trois fois le volume de bruns par rapport aux verts. L humidité et l aération restent essentielles: visez une texture d éponge essorée et brassez régulièrement.",
    localNote:
      "Tous les calculs s effectuent en local dans votre navigateur. Outil d aide à la gestion du compostage domestique.",
    resetLabel: "Réinitialiser",
  },
  seo: [
    {
      type: "title",
      text: "Calculez la Capacité Réelle d un Composteur",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Un calculateur de volume de composteur vous aide à mesurer la contenance utile exacte à partir de ses dimensions intérieures. Indiquez la largeur, la profondeur et la hauteur d un composteur rectangulaire ou le diamètre et la hauteur d un modèle cylindrique pour obtenir le volume net en litres ou en gallons.",
    },
    { type: "title", text: "Formules Géométriques de Volume", level: 3 },
    {
      type: "paragraph",
      html: "Pour un bac rectangulaire, utilisez <code>largeur × profondeur × hauteur</code>. Divisez par 1 000 les centimètres cubes pour obtenir des litres. Pour un cylindre, appliquez <code>π × rayon² × hauteur</code>, où le rayon correspond à la moitié du diamètre intérieur.",
    },
    {
      type: "list",
      items: [
        "<strong>Rectangulaire:</strong> largeur × profondeur × hauteur.",
        "<strong>Cylindrique:</strong> π × rayon² × hauteur.",
        "<strong>Litrage:</strong> 1 000 cm3 correspondent à 1 litre.",
        "<strong>Taux d occupation:</strong> volume bruns et verts comparé à la capacité nette.",
      ],
    },
    { type: "title", text: "Équilibre entre Bruns et Verts", level: 3 },
    {
      type: "paragraph",
      html: "Incorporez deux à trois volumes de matières brunes (feuilles mortes, carton broyé) pour un volume de matières vertes azotées (épluchures, tontes fraîches). Le calculateur indique l objectif recommandé en bruns.",
    },
    { type: "title", text: "Gestion de l Humidité et du Brassage", level: 3 },
    {
      type: "paragraph",
      html: "Maintenez la consistance d une éponge essorée. Un compost trop sec ralentit le processus de décomposition, tandis qu un compost saturé risque de s asphyxier et de dégager de mauvaises odeurs. Le brassage régulier restaure l aération.",
    },
    {
      type: "tip",
      title: "Recommandation d usage",
      html: "Ce calcul de volume sert de guide pratique pour le jardinier et ne remplace pas une analyse chimique C:N de laboratoire.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
