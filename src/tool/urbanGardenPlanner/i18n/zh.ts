import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'urban-garden-rainwater-and-soil-planner';
const title = '城市花园土壤与雨水规划器';
const description = '计算高架种植床或盆栽花园所需的土壤体积，并估算可以收集的雨水量。';

const faqData = [
  { question: '如何计算土壤体积？', answer: '将长度乘以宽度得到种植床面积，再乘以土壤深度。结果乘以 1000 即可换算为升。' },
  { question: '可以收集多少雨水？', answer: '估算水量等于收集面积、降雨量和径流系数的乘积。规划器将降雨量按每平方米的升数进行计算。' },
  { question: '径流系数是什么意思？', answer: '径流系数用于估算有多少降雨真正流入储水容器。选择小于 1 的数值，可以反映叶片、表面条件和飞溅造成的损失。' },
  { question: '这些计算可以离线使用吗？', answer: '可以。所有数值都在浏览器中计算，保存的方案会存放在设备的本地存储中。' },
];

const howToData = [
  { name: '输入种植床或花盆尺寸', text: '输入长度、宽度和土壤深度，单位使用米。' },
  { name: '设置雨水参数', text: '输入收集面积、降雨量和径流系数。' },
  { name: '比较结果', text: '同时查看所需土壤体积和预计收集的雨水量。' },
  { name: '保存方案', text: '为方案命名并保存，以便在同一页面比较不同的城市花园配置。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '计算城市花园的土壤和雨水',
  step: howToData.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  isAccessibleForFree: true,
};

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: '用有生命的层次测量一座小花园',
    headInputs: '设置花园条件',
    headScene: '阅读这片景观',
    labelGardenArea: '种植面积',
    labelDepth: '土壤深度',
    labelCollectionArea: '收集面积',
    labelRainfall: '降雨事件',
    unitSquareMeters: 'm²',
    unitCentimeters: 'cm',
    unitMillimeters: 'mm',
    unitLiters: 'L',
    helpGardenArea: '种植床、阳台或花盆的占地面积。',
    helpDepth: '准备填入的土壤层厚度。',
    helpCollectionArea: '将水送入储水容器的表面面积。',
    helpRainfall: '可以尝试最近的一场降雨或当地设计降雨量。',
    presetsTitle: '从一种形状开始',
    presetBalcony: '阳台种植床',
    presetRaisedBed: '高架种植床',
    presetCommunity: '社区花园',
    labelSoilNeeded: '所需土壤',
    labelWaterCaptured: '收集到的水',
    labelGardenDepth: '铺满这片花园',
    labelWateringArea: '降雨 10 mm 时',
    sceneCatchment: '收集区',
    sceneGardenBed: '种植空间',
    sceneSoil: '土壤层',
    sceneWater: '收集到的水',
    statusBalanced: '适合规划的组合',
    statusLightCapture: '一次小雨事件',
    statusDeepBed: '较深的土壤剖面',
    statusNoRain: '等待输入降雨事件',
    statusNote: '用这个快照估算材料数量并比较方案。它不是灌溉处方。',
    assumptionTitle: '规划假设',
    assumptionText: '估算将降雨的 85% 作为径流，并在收集损失后保留 90%。一升水铺在一平方米上等于一毫米水深。',
    limitationTitle: '安全使用花园',
    limitationText: '请做好排水，避开受污染的收集表面，并在将收集的雨水用于食用作物前查看当地规定。',
  },
  seo: [
    { type: 'title', text: '计算城市花园的土壤体积和雨水收集量', level: 2 },
    { type: 'paragraph', html: '高架种植床、阳台或社区花园都会提出两个实际问题：填满种植空间需要多少升土壤，附近的屋顶、雨棚或阳台在一次降雨中可以收集多少水？这个规划器将两个估算放在一起，适用于小型花园、容器、阳台和社区种植地。' },
    { type: 'title', text: '高架种植床土壤体积公式', level: 3 },
    { type: 'paragraph', html: '计算在浏览器本地完成，公式为 <code>面积（平方米）x 深度（厘米）x 10 = 土壤升数</code>。例如，面积为 12 m²、深度为 30 cm 的种植床，在考虑沉降、排水层或种植设计前需要 3600 升。' },
    { type: 'list', items: ['输入以米为单位的长度、宽度和深度。', '查看以升为单位的结果。', '使用保存的方案比较不同种植床尺寸。'] },
    { type: 'title', text: '雨水收集估算', level: 3 },
    { type: 'paragraph', html: '水量估算从 <code>收集面积 x 降雨量</code> 开始，再使用 85% 的径流比例和收集损失后的 90%。一升水铺在一平方米上等于一毫米水深，因此结果可以直接与种植面积比较。' },
    { type: 'title', text: '离线比较花园方案', level: 3 },
    { type: 'paragraph', html: '先尝试阳台种植床、高架种植床和社区花园预设，再替换为实测尺寸。计算不需要地址、地图或天气连接，方案保存在浏览器中，可以在同一页面上比较。' },
    { type: 'tip', title: '重要限制', html: '排水、水质、蒸发、植物选择和当地规定仍然需要人工判断。受到污染的屋顶或储水容器并不自动适合食用作物。降雨量应尽量使用当地可靠的气象数据。' },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
