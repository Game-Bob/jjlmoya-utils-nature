import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'seed-calculator';
const title = '株距与播种机标定计算器';
const description =
  '农民精密工具。根据目标密度和行距计算理想的种间距，并分析不同作业速度下的播种机压力。';

const faqData = [
  {
    question: '株距是如何计算的？',
    answer:
      '将一公顷（10,000 平方米）除以行距，得到总播种线长度。然后将目标密度除以该长度，以确定每延米需要播撒多少种子。',
  },
  {
    question: '每公顷的目标密度是多少？',
    answer:
      '即每万平方米的理想植株数量。它取决于作物品种、土壤肥力和水分供应。例如，灌溉玉米通常需要每公顷 85,000 到 95,000 粒种子。',
  },
  {
    question: '发芽率如何影响计算？',
    answer:
      '并不是所有播下的种子都能长成植株。如果某批种子的发芽率为 95%，则必须将播种量增加 5%，才能达到预期的最终植株数量。',
  },
  {
    question: '为什么播种机标定如此重要？',
    answer:
      '播种过密会导致植株竞争和籽粒变小；播种过稀则浪费空间和产量潜力。精准度是盈利率的关键。',
  },
];

const howToData = [
  {
    name: '输入目标密度',
    text: '根据品种技术建议，确定每公顷的目标种子数或植株数。',
  },
  {
    name: '设置行距',
    text: '测量播种机盘片或开沟器之间的距离（通常为 50, 70 或 75 厘米）。',
  },
  {
    name: '调整发芽率',
    text: '输入预期的出苗率，以补偿大田环境下的自然损耗。',
  },
  {
    name: '获取机械参数',
    text: '根据计算出的每米粒数或株距值，调整播种机的链轮或监控设备。',
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '科学参考文献',
  bibliography: [
    {
      name: 'KWS 西班牙',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: '西班牙农业部 (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara 西班牙',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '精密播种技术指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '调整播种机传动系统需要准确知道每延米种沟应落入多少种子。机器手册通常提供近似表，但<strong>驱动轮打滑</strong>或种子大小等因素可能会影响实际结果。此工具为您提供完美的理论值：<strong>目标种间距</strong>。',
    },
    {
      type: 'tip',
      title: '数学公式',
      html: '<p>致农学家和感兴趣的读者，以下是计算基础：</p><pre>株距 (cm) = 10,000,000 / (密度 × 行距)</pre><ul><li><strong>10,000,000:</strong> 公顷到平方厘米的转换系数。</li><li><strong>密度:</strong> 每公顷种子数。</li><li><strong>行距:</strong> 行间距离（单位：厘米）。</li></ul>',
    },
    {
      type: 'title',
      text: '为什么要使用此计算器？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '如果您在田间测量，发现种子间距比目标间距更近或更远，说明您的机器<strong>校准不当</strong>。此工具还会分析不同作业速度下排种盘的给料频率 (Hz)，并就会导致漏播风险的速度发出警告。',
    },
    {
      type: 'title',
      text: '优质播种的关键',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>单粒均匀度：</strong> 避免重播和漏播。99% 的均匀度能使植株间的竞争达到平衡。',
        '<strong>株距整齐：</strong> 变异系数应小于 0.3。大于 5 厘米的偏差会降低产量潜力。',
        '<strong>深度：</strong> 对出苗整齐至关重要。根据土壤水分调整压土轮压力。',
      ],
    },
    {
      type: 'title',
      text: '田间验证方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>千分之一公顷法：</strong> 测量种沟内代表千分之一公顷的特定距离。清点种子数并乘以 1,000。对于 70 厘米行距，距离为 14.28 米；对于 52.5 厘米行距，为 19.05 米。',
    },
    {
      type: 'paragraph',
      html: '<strong>驱动轮法：</strong> 提起机器，标记驱动轮并转动相当于百分之一公顷的圈数。用桶收集种子并称重或计数，以验证标定。',
    },
    {
      type: 'title',
      text: '作物参考表',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>玉米：</strong> 每公顷 60,000 至 95,000 粒。现代杂交品种对密度反应显著。',
        '<strong>大豆：</strong> 每公顷 250,000 至 450,000 粒。在低密度下具有很强的补偿能力。',
        '<strong>向日葵：</strong> 每公顷 40,000 至 55,000 粒。对密度非常敏感，过密会减小花盘直径。',
        '<strong>油菜：</strong> 每公顷 300,000 至 600,000 粒。种子极小，需要良好的种土接触。',
      ],
    },
  ],
  ui: {
    headCrop: '选择您的作物',
    headParams: '参数设置',
    headAnalysis: '实时分析',
    labelPopulation: '目标密度',
    unitSeedsHa: '粒/公顷',
    labelRowWidth: '行距',
    unitCm: '厘米',
    labelWorkSpeed: '作业速度',
    unitKmh: 'km/h',
    labelCalibration: '排种盘校准',
    labelSpacingDesc: '种沟内各粒种子间的准确距离。',
    labelMachineStress: '播种机压力',
    labelSeedsM: '种子 / 米',
    labelPlantsM2: '植株 / m²',
    labelSpeedMs: '米 / 秒',
    labelHaBag: '公顷 / 袋 (8万粒装)',
    statusStandby: '待机中',
    statusVolumetric: '体积流量模式',
    statusOptimal: '最佳播种状态',
    statusHighSpeed: '高速作业中',
    statusPlateLimiter: '排种盘上限',
    cropCorn: '籽粒玉米',
    cropSilage: '青贮玉米',
    cropSunflower: '向日葵',
    cropSorghum: '高粱',
    cropSoy: '大豆',
    cropBeet: '甜菜',
    cropRapeseed: '油菜',
    noteCorn: '需要高精准度',
    noteSilage: '中高密度作业',
    noteSunflower: '对速度敏感',
    noteSorghum: '连续流或转盘排种',
    noteSoy: '高密度植株',
    noteBeet: '关键浅播作业',
    noteRapeseed: '种子极其细小',
    faqTitle: '常见问题',
    bibliographyTitle: '科学参考文献',
  },
};
