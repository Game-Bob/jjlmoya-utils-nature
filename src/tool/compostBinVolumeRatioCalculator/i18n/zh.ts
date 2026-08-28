import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "compost-bin-volume-and-browns-greens-ratio-calculator";
const title = "堆肥桶容积与棕绿物料比例计算器";
const description =
  "计算矩形或圆柱形堆肥桶的内部容积，并检查棕色物料（碳源）、绿色物料（氮源）、湿度和通气性的合理平衡。";

const faq = [
  {
    question: "如何计算堆肥桶的容积？",
    answer:
      "测量桶的内部尺寸。对于矩形桶，将内宽、内深和内高相乘并将立方厘米转换为升；对于圆柱形桶，使用圆周率乘以半径的平方再乘以内高，同样换算为升或加仑。",
  },
  {
    question: "堆肥中棕色物料与绿色物料的合适比例是多少？",
    answer:
      "实用建议是按体积计算，每1份富含氮的绿色物料搭配2至3份富含碳的棕色物料。根据实际湿度、气味和通气情况进行适当动态调整。",
  },
  {
    question: "堆肥桶中可以放入多少堆肥材料？",
    answer:
      "将物料的总体积与堆肥桶的内部有效容积进行比较。顶部请务必保留一定空间以利于空气流通和后续翻堆操作，切勿过度压实物料。",
  },
  {
    question: "拧干的湿海绵状态是指什么？",
    answer:
      "物料触感湿润，但用手用力握紧时不会滴水。堆肥过干会减缓微生物分解速度，过湿则会导致缺氧产生难闻异味，需要补充干棕色物料并翻堆。",
  },
];

const howTo = [
  {
    name: "选择堆肥桶形状",
    text: "选择矩形或圆柱形，并以厘米或英寸为单位准确输入内部测量尺寸。",
  },
  {
    name: "输入物料体积数据",
    text: "分别估算富含碳的棕色物料与富含氮的绿色物料的实际体积。",
  },
  {
    name: "设置堆肥湿度状态",
    text: "选择干燥、拧干的海绵或过湿，以获取适合您堆肥桶的针对性维护建议。",
  },
  {
    name: "查看评估结果与行动指南",
    text: "利用总容量、填充率和物料比例，决定是否补充棕色物料、补水或进行翻堆。",
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
  inLanguage: "zh",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "公制",
    unitImperial: "英制",
    shapeTitle: "堆肥桶形状",
    shapeRectangular: "矩形",
    shapeCylindrical: "圆柱形",
    widthLabel: "内宽",
    depthLabel: "内深",
    diameterLabel: "内径",
    heightLabel: "内高",
    brownLabel: "棕色物料",
    greenLabel: "绿色物料",
    moistureTitle: "湿度感官",
    moistureDry: "干燥",
    moistureSponge: "拧干的海绵",
    moistureWet: "过湿",
    moistureAdviceDry: "偏干：请适当补水并适当翻堆。",
    moistureAdviceSponge: "良好：请保持拧干海绵般的湿度。",
    moistureAdviceWet: "偏湿：请添加干燥棕色物料并翻堆通气。",
    recipeTitle: "推荐物料组合",
    recipeKitchen: "厨余垃圾",
    recipeGarden: "园艺修剪物",
    recipeLeafy: "落叶混合物",
    sceneTitle: "堆肥剖面示意图",
    resultCapacity: "堆肥桶内部容积",
    resultMaterials: "已投入物料总体积",
    resultRatio: "棕绿物料体积比",
    resultFill: "已用容量比例",
    brownTarget: "目标棕色物料量",
    waterAction: "水分管理",
    airAction: "空气与结构",
    statusBalanced: "初始配比良好",
    statusTooGreen: "建议添加更多棕色物料",
    statusTooBrown: "建议添加更多绿色物料",
    statusNoGreens: "请投入绿色物料",
    statusOverfilled: "物料已超出堆肥桶容积",
    statusDry: "堆肥偏干",
    statusWet: "堆肥过湿",
    statusGoodMoisture: "湿度处于理想范围",
    statusNote: "请定期翻堆以增加内部孔隙与氧气。",
    volumeUnitLiters: "升",
    volumeUnitGallons: "加仑",
    dimensionUnitCm: "厘米",
    dimensionUnitIn: "英寸",
    formulaTitle: "几何容积计算公式",
    formulaText: "计算器根据内部尺寸确定实际有效容积。矩形桶使用 内宽 × 内深 × 内高；圆柱形桶使用 π × 半径² × 内高。物料体积统一换算后显示填充率。",
    practicalTitle: "比例是实用起点",
    practicalText: "目标是以绿色物料体积为基准，搭配2至3倍体积的棕色物料。保持如拧干海绵般的湿度并定期翻堆。",
    localNote: "所有计算均在浏览器本地完成。家庭堆肥管理实用规划工具。",
    resetLabel: "重置",
  },
  seo: [
    {
      type: "title",
      text: "计算堆肥桶的真实有效容积",
      level: 2,
    },
    {
      type: "paragraph",
      html: "堆肥桶容积计算器在基于桶内部的实际测量尺寸计算时最为精准，而不是仅仅依赖产品包装上的标称容积。请输入矩形堆肥桶的内宽、内深和内高，或者圆柱形堆肥桶的内径与内高，即可快速准确地计算出升或加仑单位的净有效容积，并将其与拟投入的堆肥物料总体积进行对比分析。",
    },
    { type: "title", text: "几何容积数学计算公式", level: 3 },
    {
      type: "paragraph",
      html: "对于矩形堆肥桶，请使用几何公式 <code>内宽 × 内深 × 内高</code>。如果您使用厘米作为测量单位，将计算出的立方厘米结果除以 1,000 即可转换为升。对于圆柱形堆肥桶，请使用 <code>π × 半径² × 内高</code>，其中半径为内径的一半。测量时请仅测量桶内净空部分，不要算入桶壁厚度、底座或桶盖的高度。",
    },
    {
      type: "list",
      items: [
        "<strong>矩形堆肥桶:</strong> 内宽 × 内深 × 内高",
        "<strong>圆柱形堆肥桶:</strong> π × 半径² × 内高",
        "<strong>单位换算关系:</strong> 1,000 立方厘米精准等于 1 升",
        "<strong>容量填充率:</strong> 棕色与绿色物料总体积占桶净容积的百分比",
      ],
    },
    { type: "title", text: "棕色物料与绿色物料的合理配比", level: 3 },
    {
      type: "paragraph",
      html: "实践中推荐的经典混合比例为：按体积计算，每 1 份富含氮素的绿色物料（如厨余垃圾、新鲜草屑），搭配 2 至 3 份富含碳素的棕色物料（如干落叶、粉碎纸板、细树枝）。计算器会明确给出推荐的棕色物料目标范围，而适当的湿度与良好通气则是促进堆肥微生物高效发酵分解的关键因素。",
    },
    { type: "title", text: "堆肥湿度控制与定期翻堆通气", level: 3 },
    {
      type: "paragraph",
      html: "请始终保持堆肥物料具有像充分拧干的海绵一样的湿润手感。堆肥过干会显著降低微生物的代谢分解活性，而堆肥过湿则会导致内部缺少氧气并可能产生难闻的厌氧发酵异味。通过定期翻堆搅拌，可以重新打通氧气通道并恢复良好的堆體结构。",
    },
    {
      type: "tip",
      title: "园艺爱好者实用建议",
      html: "本计算工具得出的容积与比例结果作为家庭和花园堆肥管理的实操指南，并不能替代实验室专业的碳氮比（C:N）化学定量分析。",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
