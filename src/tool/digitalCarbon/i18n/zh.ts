import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digital-carbon-footprint-calculator';
const title = '数字碳足迹计算器';
const description = '分析任何网页对环境的影响。估算每次访问的能耗和 CO₂ 排放量。';

const faqData = [
  {
    question: '什么是网站的碳足迹？',
    answer: '它是指由于服务器、传输网络和用户设备为加载和呈现网页而消耗能量，从而排放到大气中的温室气体（主要是 CO₂）的总量。',
  },
  {
    question: '如何衡量网站的影响？',
    answer: '通常以每次访问的二氧化碳当量克数 (gCO₂e) 来衡量。高效的网站每次访问排放的 CO₂ 少于 0.2 克，而未经优化的页面每次加载可能超过 2 克或 3 克。',
  },
  {
    question: '为什么互联网会造成污染？',
    answer: '因为所有必要的基础设施（数据中心、海底光缆、WiFi 路由器、智能手机）都依靠电力运行，而世界上大部分地区的电力仍然来自燃煤或燃气。',
  },
  {
    question: '如何减少我网站的 CO₂ 排放？',
    answer: '最有效的方法是减轻页面重量：优化图像 (WebP)、压缩 CSS 和 JS 文件、使用懒加载 (lazy loading)，并选择使用可再生能源的托管服务商。',
  },
];

const howToData = [
  {
    name: '输入 URL',
    text: '在输入框中键入您要分析的网页地址。',
  },
  {
    name: '开始分析',
    text: '点击分析按钮，让我们的工具估算页面资源的重量。',
  },
  {
    name: '查看您的评级',
    text: '根据所分析网站的能源效率获得 A+ 到 F 的评分。',
  },
  {
    name: '应用改进',
    text: '参考个性化提示列表来减轻您的网站重量并降低环境影响。',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL 分析器',
    headResults: '影响结果',
    headTips: '优化提示',
    labelUrl: '页面 URL',
    btnAnalyze: '分析网站',
    btnAnalyzing: '分析中...',
    placeholderUrl: 'https://example.cn',
    errorInvalidUrl: '请输入有效的 URL。',
    errorFetchFailed: '无法分析该网站。请尝试其他 URL。',
    
    resultTitle: '数字碳足迹',
    resultSubtitle: '估算的页面效率',
    co2PerVisit: '每次访问生成的 CO₂',
    energyPerVisit: '消耗的能量',
    co2Annual: '年度 CO₂ 排放量 (10万次访问)',
    impactTitle: '实际年度影响',
    impactTrees: '所需树木数量',
    impactKm: '汽车行驶里程换算 (约 km)',
    treesLabel: '棵树',
    kmLabel: '公里',
    
    ratingExcellent: '非常出色。与全球平均水平相比，该页面的能耗非常低。',
    ratingVeryGood: '效率极高。页面经过良好优化，环境影响极小。',
    ratingGood: '效率尚可。虽然还有改进空间，但已优于平均水平。',
    ratingAverage: '中等水平。该页面的能耗符合当前网页的平均预期。',
    ratingPoor: '高于平均水平。建议优化图像、脚本和字体。',
    ratingVeryPoor: '影响较大。页面重量显著，应当予以减轻。',
    ratingCritical: '影响非常大。减少页面大小的空间非常可观。',
    
    tipImages: '将图像转换为 WebP 或 AVIF 格式，可减轻高达 70% 的重量。',
    tipCompression: '在服务器上启用 Brotli 或 GZIP 以压缩资源。',
    tipLazyLoading: '对视口外的图像和视频使用懒加载。',
    tipHosting: '选择使用可再生能源的托管服务（如 Cloudflare, Netlify, Vercel）。',
    tipThirdParty: '删除不必要的分析脚本和第三方微件。',
    tipFonts: '仅加载您实际使用的字体粗细。',
    tipCache: '配置 HTTP 缓存标头以避免重复下载。',
  },
  faq: faqData,
  howTo: howToData,
  seo: [
    {
      type: 'title',
      text: '数字碳足迹计算器：您的网站产生了多少 CO₂',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '探索任何网页对环境的真实影响。分析其重量，估算每次访问生成的二氧化碳克数，并学习如何减少项目的数字污染。',
    },
    {
      type: 'title',
      text: '什么是网站的数字碳足迹？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '每当您打开一个网页，您的设备、家用路由器、海底光缆以及世界另一端的服务器都会消耗电力。而这些电力在很大程度上仍然是通过燃烧化石燃料产生的。结果是：<strong>每次访问都会向大气中排放真实数量的 CO₂</strong>。',
    },
    {
      type: 'paragraph',
      html: '网站的<strong>数字碳足迹</strong>以每次访问的二氧化碳当量克数 (gCO₂e) 来衡量。一个平均水平的网站每次加载产生约 0.5 克 CO₂。虽然看起来微不足道，但一个每月访问量达 10 万次的网站每年排放的 CO₂ 可超过 600 公斤，相当于驾驶一辆燃油车行驶 3,000 多公里。',
    },
    {
      type: 'title',
      text: '如何计算网站的 CO₂ 排放量？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '所使用的计算模型基于<strong>可持续网页设计模型 (Sustainable Web Design Model)</strong> 标准，该标准将能耗分为四个主要部分：',
    },
    {
      type: 'card',
      title: '数据传输',
      html: '页面的总重量决定了传输量。网络基础设施的标准值为 <code>0.81 kWh/GB</code>。',
    },
    {
      type: 'card',
      title: '用户设备',
      html: '接收页面的电脑或手机会消耗能量，处理每 GB 数据的能耗估算为 <code>0.52 kWh</code>。',
    },
    {
      type: 'card',
      title: '碳强度',
      html: '使用全球参考值 <code>442 gCO₂/kWh</code> 将能耗转换为真实的碳排放量。',
    },
    {
      type: 'card',
      title: '缓存因子',
      html: '该模型假定 25% 的用户已有缓存资源，因此应用了 <code>0.75</code> 的修正因子。',
    },
    {
      type: 'title',
      text: '效率评级意味着什么？',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ 和 A:</strong> 少于 0.2 克 CO₂。非常轻量且经过优化的网站。',
        '<strong>B:</strong> 介于 0.2 和 0.5 克之间。低于全球平均水平。',
        '<strong>C:</strong> 介于 0.5 和 1 克之间。当前网页的平均水平。',
        '<strong>D 和 E:</strong> 介于 1 和 4 克之间。较重的页面，有明显的影响。',
        '<strong>F:</strong> 每次访问超过 4 克。影响非常大。',
      ],
    },
    {
      type: 'title',
      text: '如何减少网站的碳足迹',
      level: 2,
    },
    {
      type: 'card',
      title: '图像优化',
      html: '使用 <strong>WebP 或 AVIF</strong> 格式，可在不明显损失质量的情况下将大小减少多达 80%。',
    },
    {
      type: 'card',
      title: '服务器压缩',
      html: '启用 <strong>Brotli 或 GZIP</strong> 可将文本文件的大小减少多达 70%。',
    },
    {
      type: 'card',
      title: '可持续托管',
      html: '选择拥有<strong>认证可再生能源</strong>的托管商可将影响降低近 100%。',
    },
    {
      type: 'card',
      title: '缓存和 CDN',
      html: '配置<strong>长效缓存标头</strong>以避免不必要的重复下载。',
    },
    {
      type: 'title',
      text: '互联网对气候的真实影响',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '互联网约占<strong>全球 CO₂ 排放量的 2% 到 4%</strong>，这一数字可与航空业相提并论。您消除的每一个字节不仅让网站变快，更在实实在在地减少数字污染。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
