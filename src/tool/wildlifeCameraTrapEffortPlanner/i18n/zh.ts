import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'wildlife-camera-trap-effort-planner';
const title = '野生动物红外相机调查工作量规划器';
const description = '规划红外相机调查工作量，估算相机日和图像审核负担，并绘制不用于种群估计的布设方案。';
const faqData = [
  { question: '什么是相机日？', answer: '相机日是运行中的相机数量乘以运行天数。它表示抽样工作量，不表示区域内的动物数量。' },
  { question: '规划器会计算野生动物种群数量吗？', answer: '不会。它估算运行工作量和名义规划面积。数量、密度和占域率需要经过验证的调查设计与能够处理不完全探测的统计模型。' },
  { question: '相机间距有什么作用？', answer: '它为每台相机建立名义方形规划单元，并将目标间距与根据面积和相机数量得到的均匀网格间距进行比较。它不是探测半径。' },
  { question: '如何使用审核计划？', answer: '用每周检查点规划访问、电池、存储和图像审核。根据实际野外协议，将检查点替换为真实访问记录。' },
];
const howToData = [
  { name: '填写调查面积', text: '输入相机布设计划覆盖的面积。切换公制或英制时，物理数值保持一致。' },
  { name: '规划相机布设', text: '输入相机数量、布设时长和目标间距。示意图是相对规划网格，不是坐标或保证的探测范围。' },
  { name: '估算图像工作量', text: '输入每台相机每天的预期事件数。规划器将其乘以相机日，并分配到每周检查点。' },
  { name: '准备野外记录', text: '为相机和布设会话分配唯一编号，记录安装信息，并记录每次检查，包括没有发现动物的检查。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: '每台相机的面积',
    labelSurveyArea: '调查面积', labelCameraCount: '相机点位', labelDeploymentDays: '布设天数', labelSpacing: '目标点位间距', labelTriggerRate: '每台相机每天的预期事件', unitHectares: '公顷', unitAcres: '英亩', unitMeters: '米', unitFeet: '英尺', unitCameras: '台', unitDays: '天', unitEventsPerDay: '事件/天', helpSurveyArea: '计划进行相机调查的面积。', helpCameraCount: '本次调查中运行的相机数量。', helpDeploymentDays: '从安装到回收的天数。', helpSpacing: '规划单元大小，不是探测半径。', helpTriggerRate: '参考相似调查或试布设，使用谨慎的数值。', unitSystemLabel: '测量单位', metricLabel: '公制', imperialLabel: '英制', presetsTitle: '野外起始方案', presetBackyard: '林缘', presetWoodland: '混合林', presetReserve: '大型保护区', mapLabel: '相对布设示意图', mapCaption: '编号相机排列在相对规划网格中。单元用于辅助间距规划，不是生境覆盖地图。', stationLabel: '点位', cameraDaysLabel: '相机日', expectedEventsLabel: '预期事件', spacingLabel: '均匀网格间距', reviewLoadLabel: '每次检查的事件', reviewScheduleTitle: '检查节奏', reviewScheduleText: '每周检查点能在布设前展示图像工作量。请根据实际野外协议调整。', reviewDayLabel: '第', reviewEventsLabel: '预期事件', statusBalanced: '间距看起来较均衡', statusSparse: '点位间距看起来较大', statusDense: '点位间距看起来较小', statusReviewHeavy: '图像审核负担需要关注', statusNeedsInput: '请填写完整布设计划', statusNote: '这是工作量计划，不会告诉你区域内有多少动物，也不保证发现某个物种。', assumptionTitle: '模型假设', assumptionText: '名义面积把每个点位视为由目标间距形成的正方形单元。预期事件假设所有相机和日期的触发率保持不变。', limitationTitle: '野外限制', limitationText: '根据目标物种和研究问题选择点位，而不只是追求几何整齐。记录编号、日期、方向、高度、生境以及空检结果。',
  },
  seo: [
    { type: 'title', text: '规划红外相机调查工作量', level: 2 },
    { type: 'paragraph', html: '野生动物红外相机项目在布设前需要回答两个问题：这次布设代表多少抽样工作量？预期图像流能否被存储、审核和记录？本规划器将这些问题整理为相机日、预期事件、点位示意图和检查节点。' },
    { type: 'title', text: '用相机日描述调查工作量', level: 3 },
    { type: 'paragraph', html: '相机日等于 <code>相机点位 × 布设天数</code>。12台相机运行28天会产生336相机日。这个数字可以比较不同调查，但不是种群估计，也不会修正设备故障、生境差异或动物行为。' },
    { type: 'list', items: ['<strong>相机点位：</strong>调查期间运行的设备数量。', '<strong>布设天数：</strong>从安装到回收的计划时间。', '<strong>触发率：</strong>使用每台相机每天的事件数，而不是连拍中的每张照片。', '<strong>检查节点：</strong>据此规划存储、电池、访问和图像审核。'] },
    { type: 'title', text: '把示意图当作野外规划辅助', level: 3 },
    { type: 'paragraph', html: '示意图使用面积、相机数量和目标间距展示相对布设。名义面积等于点位数量乘以目标间距的平方。它不是传感器探测面积，地形、植被、道路、方向、高度和动物行为都会改变探测概率。' },
    { type: 'title', text: '布设前准备更完整的记录', level: 3 },
    { type: 'paragraph', html: '先确定目标物种和研究问题，为每台相机及每次布设设置稳定编号。在安装和检查时记录日期、位置、高度、方向、生境、参数和设备状态。没有拍到动物的检查也属于调查过程记录。' },
    { type: 'tip', title: '不要把工作量变成动物数量', html: '红外相机存在不完全探测。用规划器预算野外和图像工作，用经过验证的生态学设计分析占域率、数量、密度或种群变化。' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
