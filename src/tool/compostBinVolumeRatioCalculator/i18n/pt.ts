import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "calculadora-volume-composteira-proporcao-castanhos-verdes";
const title = "Calculadora de Volume da Composteira e Proporcao de Castanhos e Verdes";
const description =
  "Calcule o volume interno de uma composteira retangular ou cilindrica e verifique o equilibrio pratico entre materiais castanhos, verdes, humidade e arejamento.";

const faq = [
  {
    question: "Como calcular o volume de uma composteira?",
    answer:
      "Mesa o interior do recipiente. Para uma composteira retangular, multiplique a largura pela profundidade e pela altura e converta centimetros cubicos em litros. Para uma cilindrica, use pi multiplicado pelo raio ao quadrado multiplicado pela altura.",
  },
  {
    question: "Qual e a proporcao correta entre materiais castanhos e verdes?",
    answer:
      "Um ponto de partida pratico e de duas a tres partes de materiais castanhos ricos em carbono em volume para cada parte de materiais verdes ricos em azoto. Ajuste observando a humidade, o odor e a ventilacao.",
  },
  {
    question: "Quanto material posso colocar na composteira?",
    answer:
      "Compare o volume dos seus materiais com a capacidade interna da composteira e deixe espaco suficiente para o arejamento e revolvimento da pilha.",
  },
  {
    question: "O que significa a humidade de uma esponja espremida?",
    answer:
      "Os materiais devem parecer humidos ao toque sem libertar agua quando pressionados. Uma pilha muito seca abranda a decomposicao, enquanto uma pilha encharcada necessita de materiais secos e arejamento.",
  },
];

const howTo = [
  {
    name: "Escolher a forma da composteira",
    text: "Selecione o formato retangular ou cilindrico e introduza as dimensoes internas em centimetros ou polegadas com precisao.",
  },
  {
    name: "Adicionar os volumes de material separados",
    text: "Estime separadamente o volume dos materiais castanhos ricos em carbono e dos materiais verdes ricos em azoto.",
  },
  {
    name: "Ajustar o nivel de humidade da pilha",
    text: "Escolha entre seco, esponja espremida ou molhado para obter conselhos de manutencao adequados a sua composteira.",
  },
  {
    name: "Avaliar o resultado e tomar medidas",
    text: "Utilize a capacidade, o nivel de enchimento e a proporcao para decidir se deve adicionar castanhos, agua ou revolver a pilha.",
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
  inLanguage: "pt",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Métrico",
    unitImperial: "Imperial",
    shapeTitle: "Formato da composteira",
    shapeRectangular: "Retangular",
    shapeCylindrical: "Cilíndrico",
    widthLabel: "Largura interna",
    depthLabel: "Profundidade interna",
    diameterLabel: "Diâmetro interno",
    heightLabel: "Altura interna",
    brownLabel: "Castanhos",
    greenLabel: "Verdes",
    moistureTitle: "Nível de humidade",
    moistureDry: "Seco",
    moistureSponge: "Esponja espremida",
    moistureWet: "Molhado",
    moistureAdviceDry: "Seco: humedeça gradualmente e revolva a pilha.",
    moistureAdviceSponge: "Ideal: mantenha a textura de uma esponja espremida.",
    moistureAdviceWet: "Molhado: adicione castanhos secos e areje.",
    recipeTitle: "Mistura recomendada",
    recipeKitchen: "Restos de cozinha",
    recipeGarden: "Restos de jardim",
    recipeLeafy: "Mistura de folhas",
    sceneTitle: "Corte transversal da pilha",
    resultCapacity: "Capacidade interna da composteira",
    resultMaterials: "Materiais inseridos",
    resultRatio: "Proporção castanhos para verdes",
    resultFill: "Capacidade utilizada",
    brownTarget: "Meta de materiais castanhos",
    waterAction: "Humidade",
    airAction: "Ar e estrutura",
    statusBalanced: "Bom equilíbrio inicial",
    statusTooGreen: "Adicione mais castanhos",
    statusTooBrown: "Adicione mais verdes",
    statusNoGreens: "Inserir materiais verdes",
    statusOverfilled: "A composteira está demasiado cheia",
    statusDry: "A pilha está demasiado seca",
    statusWet: "A pilha está demasiado molhada",
    statusGoodMoisture: "Humidade no intervalo ideal",
    statusNote: "Revolva a pilha para reabrir bolsas de ar.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Cálculo geométrico do volume",
    formulaText: "A calculadora determina a capacidade útil a partir das medidas internas. Recipientes retangulares aplicam largura × profundidade × altura. Cilindros utilizam π × raio² × altura. Todos os volumes sao convertidos para a mesma unidade antes da exibicao.",
    practicalTitle: "A proporção como guia prático",
    practicalText: "A meta sugere de duas a três vezes o volume de castanhos em relação aos verdes. Humidade e arejamento são fundamentais: procure a textura de uma esponja espremida e revolva periodicamente.",
    localNote: "Todos os cálculos são efetuados localmente no seu navegador. Ferramenta de apoio a compostagem domestica.",
    resetLabel: "Restabelecer",
  },
  seo: [
    {
      type: "title",
      text: "Calcule a Capacidade Real de uma Composteira Domestica",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Uma calculadora de volume para composteiras e especialmente util quando determina a capacidade liquida exata a partir das dimensoes internas reais do recipiente, em vez de depender apenas do volume comercial indicado no produto. Introduza a largura, profundidade e altura para composteiras retangulares ou o diametro e altura para modelos cilindricos para descobrir a capacidade liquida em litros ou galoes.",
    },
    { type: "title", text: "Formulas Geometricas de Calculo de Volume", level: 3 },
    {
      type: "paragraph",
      html: "Para recipientes retangulares utilize a formula <code>largura × profundidade × altura</code>. Divida o resultado em centimetros cubicos por 1.000 para converter para litros. Para cilindros aplique <code>π × raio² × altura</code>, onde o raio corresponde a metade do diametro interno util. Mesa apenas o espaco interno livre sem contar com paredes ou tampa.",
    },
    {
      type: "list",
      items: [
        "<strong>Recipiente retangular:</strong> largura × profundidade × altura.",
        "<strong>Recipiente cilindrico:</strong> π × raio² × altura.",
        "<strong>Conversao de unidades:</strong> 1.000 cm3 equivalem exatamente a 1 litro.",
        "<strong>Taxa de ocupacao:</strong> volume total de castanhos e verdes comparado com a capacidade liquida.",
      ],
    },
    { type: "title", text: "Equilibrio Recomendado entre Castanhos e Verdes", level: 3 },
    {
      type: "paragraph",
      html: "Misture duas a tres partes em volume de materiais castanhos ricos em carbono (como folhas secas, cartao triturado e pequenos ramos) para cada parte de materiais verdes ricos em azoto (como restos de comida e relva fresca). A calculadora fornece a meta ideal recomendada de castanhos.",
    },
    { type: "title", text: "Gestao Eficiente da Humidade e Revolvimento", level: 3 },
    {
      type: "paragraph",
      html: "Mantenha a humidade equivalente a textura de uma esponja bem espremida. Se estiver muito molhado, a pilha perde oxigenio e pode originar maus odores, por isso adicione castanhos secos e revolva com frequencia para reabrir bolsas de ar.",
    },
    {
      type: "tip",
      title: "Nota Pratica de Utilizacao",
      html: "Este calculo de volume serve como um guia orientador pratico para a compostagem domestica no jardim e nao substitui uma analise quimica de laboratorio C:N.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
