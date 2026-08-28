import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "calculadora-volumen-compostador-proporcion-marrones-verdes";
const title = "Calculadora de Volumen de Compostador y Proporcion Marrones Verdes";
const description =
  "Calcula el volumen interno de un compostador rectangular o cilindrico y comprueba el equilibrio de marrones, verdes, humedad y aire.";

const faq = [
  {
    question: "¿Como se calcula el volumen de un compostador?",
    answer:
      "Mide el interior del recipiente. Para un compostador rectangular, multiplica ancho por profundidad por altura y convierte centimetros cubicos a litros. Para uno cilindrico, usa pi por el radio al cuadrado por la altura.",
  },
  {
    question: "¿Cual es la proporcion adecuada de marrones y verdes en el compost?",
    answer:
      "Un punto de partida practico son dos o tres partes de materiales marrones ricos en carbono en volumen por cada parte de verdes ricos en nitrogeno. Ajusta observando la humedad, el olor y la ventilacion.",
  },
  {
    question: "¿Cuanto compost puedo introducir en el contenedor?",
    answer:
      "Compara el volumen de tus materiales con la capacidad interna del compostador. Deja espacio libre para la circulacion de aire y el volteo de la pila.",
  },
  {
    question: "¿Que significa la humedad de una esponja escurrida?",
    answer:
      "Los materiales deben sentirse humedos al tacto sin soltar gotas de agua al apretarlos. Una pila seca frena la descomposicion, mientras que una empapada requiere estructura seca y volteo.",
  },
];

const howTo = [
  {
    name: "Seleccionar la forma del compostador",
    text: "Elige la forma rectangular o cilindrica e introduce las dimensiones internas en centimetros o pulgadas.",
  },
  {
    name: "Añadir los volumenes de material",
    text: "Estima el volumen por separado de los materiales marrones ricos en carbono y los materiales verdes ricos en nitrogeno.",
  },
  {
    name: "Ajustar la sensacion de humedad",
    text: "Elige entre seco, esponja escurrida o mojado para que las recomendaciones de mantenimiento coincidan con el estado de tu pila.",
  },
  {
    name: "Interpretar el balance",
    text: "Revisa la capacidad, el nivel de llenado, la proporcion y los avisos para decidir si añadir marrones, agua o voltear el compost.",
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
  inLanguage: "es",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrico",
    unitImperial: "Imperial",
    shapeTitle: "Forma del compostador",
    shapeRectangular: "Rectangular",
    shapeCylindrical: "Cilindrico",
    widthLabel: "Ancho interior",
    depthLabel: "Profundidad interior",
    diameterLabel: "Diametro interior",
    heightLabel: "Altura interior",
    brownLabel: "Marrones",
    greenLabel: "Verdes",
    moistureTitle: "Sensacion de humedad",
    moistureDry: "Seco",
    moistureSponge: "Esponja escurrida",
    moistureWet: "Mojado",
    moistureAdviceDry: "Seco: humedece gradualmente y voltea la pila.",
    moistureAdviceSponge: "Correcto: mantén el punto de esponja escurrida.",
    moistureAdviceWet: "Mojado: añade marrones secos y voltea.",
    recipeTitle: "Añade la mezcla recomendada",
    recipeKitchen: "Restos de cocina",
    recipeGarden: "Lote de jardin",
    recipeLeafy: "Mezcla de hojas",
    sceneTitle: "Corte transversal de la pila",
    resultCapacity: "Capacidad interna del compostador",
    resultMaterials: "Materiales introducidos",
    resultRatio: "Proporcion marrones a verdes",
    resultFill: "Capacidad utilizada",
    brownTarget: "Objetivo de marrones",
    waterAction: "Humedad",
    airAction: "Aire y estructura",
    statusBalanced: "Buen equilibrio inicial",
    statusTooGreen: "Añade mas marrones",
    statusTooBrown: "Añade mas verdes",
    statusNoGreens: "Añade algo de material verde",
    statusOverfilled: "La pila supera la capacidad del recipiente",
    statusDry: "La pila esta seca",
    statusWet: "La pila esta demasiado mojada",
    statusGoodMoisture: "La humedad esta en el rango optimo",
    statusNote: "Voltea la pila para abrir bolsas de aire.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Calculo geometrico del volumen",
    formulaText:
      "La calculadora determina la capacidad interna a partir de las medidas interiores. Los contenedores rectangulares aplican ancho × profundidad × altura. Los cilindricos utilizan π × radio² × altura. Todos los volumenes se unifican para calcular el llenado.",
    practicalTitle: "La proporcion como punto de partida",
    practicalText:
      "El objetivo sugiere de dos a tres veces el volumen de marrones respecto al de verdes. La humedad y la aireacion son cruciales: busca la textura de una esponja escurrida y voltea al compactarse.",
    localNote:
      "Todas las mediciones se procesan localmente en el navegador. Esta herramienta es una guia de planificacion urbana y domestica.",
    resetLabel: "Restablecer",
  },
  seo: [
    {
      type: "title",
      text: "Calcula la Capacidad Real de un Compostador Domestico",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Una calculadora de volumen para compostadores es mas util cuando trabaja con medidas interiores reales en lugar de la capacidad comercial anunciada. Introduce el ancho, profundidad y altura de un recipiente rectangular o el diametro y altura de uno cilindrico para obtener el volumen neto en litros o galones.",
    },
    { type: "title", text: "Formulas de Volumen Geometrico", level: 3 },
    {
      type: "paragraph",
      html: "En contenedores rectangulares se usa la formula <code>ancho × profundidad × altura</code>. Si mides en centimetros, divide el resultado entre 1.000 para convertir a litros. Para recipientes cilindricos, aplica <code>π × radio² × altura</code>, donde el radio es la mitad del diametro interno.",
    },
    {
      type: "list",
      items: [
        "<strong>Rectangular:</strong> ancho × profundidad × altura.",
        "<strong>Cilindrico:</strong> π × radio² × altura.",
        "<strong>Conversion:</strong> 1.000 centimetros cubicos equivalen a 1 litro.",
        "<strong>Llenado:</strong> suma del volumen de marrones y verdes frente a la capacidad interna.",
      ],
    },
    { type: "title", text: "Equilibrio entre Marrones y Verdes", level: 3 },
    {
      type: "paragraph",
      html: "Una buena proporcion inicial es aportar entre dos y tres partes de materia marron rica en carbono por cada parte de materia verde rica en nitrogeno. Los marrones incluyen hojas secas y carton triturado, mientras que los verdes aportan humedad y nitrogeno a traves de restos de cocina y podas frescas.",
    },
    { type: "title", text: "Control de Humedad y Ventilacion", level: 3 },
    {
      type: "paragraph",
      html: "La pila debe mantener la textura de una esponja humeda escurrida. Si esta demasiado seca, los microorganismos se inactivan; si esta empapada, se pierde oxigeno y pueden aparecer malos olores. Voltear la pila con frecuencia restaura la estructura interna.",
    },
    {
      type: "tip",
      title: "Usa el resultado como orientacion practica",
      html: "Esta estimacion por volumen no sustituye un analisis quimico C:N de laboratorio. Evita introducir carne, aceites o madera tratada en compostadores domesticos segun las recomendaciones locales.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
