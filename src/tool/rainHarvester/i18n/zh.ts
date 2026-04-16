import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'rainwater-calculator';
const title = '雨水收集计算器';
const description = '计算您可以从屋顶收集多少雨水，并确定储水箱的大小。';

const faqData = [
  {
    question: '我实际上能从屋顶收集多少水？',
    answer: '一般规则是，屋顶每平方米面积在每毫米降雨下大约可以收集 1 升水。但由于蒸发和过滤的影响，需要通过“径流系数”进行调整。',
  },
  {
    question: '什么是径流系数？',
    answer: '这是一个百分比，表示根据屋顶材料的不同会损失多少水。金属或瓦片屋顶效率很高 (0.85-0.95)，而碎石或泥土屋顶的效率则低得多 (0.1-0.3)。',
  },
  {
    question: '如何确定储水箱的大小？',
    answer: '您应该计算一个月内的最大预期降雨量，并将其与您的估计月用水量联系起来。如果水箱太小，遇到暴雨会溢出；如果太大，则会造成不必要的浪费。',
  },
  {
    question: '收集的雨水可以直接引用吗？',
    answer: '不能直接饮用。雨水会携带灰尘、鸟粪和空气中的颗粒物。由于人类饮用，必须通过沉积过滤器、活性炭过滤，并使用紫外线或氯进行消毒。',
  },
];

const howToData = [
  {
    name: '测量水平投影面积',
    text: '测量屋顶底部的长度和宽度（不是斜面面积，而是投影到地面的面积）。',
  },
  {
    name: '查询当地降雨量',
    text: '在国家气象服务机构查询您所在地区以毫米 (mm) 为单位的年平均或月平均降水量。',
  },
  {
    name: '应用材料效率',
    text: '在我们的计算器中选择您的屋顶材料，以扣除因吸收或热量而损失的水量。',
  },
  {
    name: '计算所需容量',
    text: '根据年产水量结果，选择一个能够至少储存总收集量 20-30% 的水箱，以应对干旱季节。',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: '屋顶设置',
    headResults: '收集潜力',
    labelArea: '屋顶面积',
    labelRainfall: '年降雨量',
    labelMaterial: '屋顶材料',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: '升',
    helpRainfall: '不知道？在 Google 上搜索“（您所在的城市）年平均降水量”。',
    efficiencyTitle: '效率系数',
    efficiencyNote: '考虑到过滤器和蒸发，已应用 10% 的损失率。',
    resultTitle: '年收集潜力',
    equivalenciesTitle: '实用等价值',
    labelFlushes: '冲厕次数',
    labelShowers: '淋浴次数 (10分钟计)',
    labelGarden: '浇灌花园',
    gardenArea: '(50m²)',
    materialMetal: '金属 / 琉璃瓦',
    materialClay: '陶瓦 / 粘土',
    materialConcrete: '混凝土 / 沥青',
    materialGravel: '碎石 / 绿色屋顶',
  },
  seo: [
    {
      type: 'title',
      text: '雨水收集：自主性与可持续性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数房主并未意识到自家屋顶的潜力。一个标准屋顶每年可以捕获数千升免费水。此工具将这种潜力具象化，让您能够精确计算可以“收获”多少水，并确定最理想的储水箱尺寸。',
    },
    {
      type: 'title',
      text: '计算逻辑',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '雨水收集的基础公式简单而有效：',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">容量 = 面积 × 降雨量 × 径流系数 × 过滤效率</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>面积：</strong> 您的屋顶投影面积（长 × 宽）。',
        '<strong>降雨量：</strong> 以毫米为单位的降雨量。',
        '<strong>系数：</strong> 屋顶损失的水量（例如吸收）。',
        '<strong>效率：</strong> 进入水箱前过滤环节的损失（约 10%）。',
      ],
    },
    {
      type: 'title',
      text: '为什么要收集雨水？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>节约开支：</strong> 显著降低您的水费账单。',
        '<strong>园艺：</strong> 植物更喜欢不含氯或石灰的水。',
        '<strong>应对能力：</strong> 在断水情况下保持应急储备。',
      ],
    },
    {
      type: 'title',
      text: '水箱选型',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '最常见的错误是仅根据预算购买水箱。如果太小，会因溢出浪费数千升水；如果太大，则会造成不必要的资金支出。一般规则是拥有能储存当地 <strong>3 个月</strong>平均降雨量的容量，以帮助您平稳度过旱季。',
    },
  ],
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '科学参考文献',
  bibliography: [
    {
      name: 'FAO - Rainwater Harvesting and Storage',
      url: 'https://www.fao.org/3/a1348s/a1348s.pdf',
    },
    {
      name: 'Texas A&M AgriLife Extension - Rainwater Harvesting',
      url: 'https://rainwaterharvesting.tamu.edu/',
    },
    {
      name: 'Brad Lancaster - Rainwater Harvesting for Drylands',
      url: 'https://www.harvestingrainwater.com/',
    },
    {
      name: 'European Environment Agency - Water Resources',
      url: 'https://www.eea.europa.eu/en/topics/in-depth/water',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
