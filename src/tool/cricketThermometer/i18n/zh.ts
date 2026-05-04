import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'cricket-thermometer';
const title = '蟋蟀温度计 – 杜倍耳定律温度计算器';
const description =
  '没有温度计？听听蟋蟀的声音。使用我们的杜倍耳定律计算器，通过计算鸣叫次数来得出准确温度。';

const faqData = [
  {
    question: '什么是杜倍耳定律 (Dolbear\'s Law)？',
    answer:
      '由阿莫斯·杜倍耳于 1897 年提出，这是一种科学观察结果，发现了蟋蟀鸣叫频率与环境气温之间的线性相关性。',
  },
  {
    question: '为什么蟋蟀在天热时鸣叫得更快？',
    answer:
      '蟋蟀是冷血动物（变温动物）。它们的代谢过程和肌肉收缩速度取决于外部温度；天气越暖，它们就有越多的能量来快速发出声音。',
  },
  {
    question: '这种测量准确吗？',
    answer:
      '对于雪树蟋 (Oecanthus fultoni) 等品种，如果计算正确，它的准确度惊人，误差幅度仅约为 0.5°C。但是，湿度或风等因素可能会改变结果。',
  },
  {
    question: '我应该用哪种蟋蟀来计算？',
    answer:
      '原始公式是基于雪树蟋的。对于普通田蟋，这种关系类似，但鸣叫频率往往会略慢一些。',
  },
];

const howToData = [
  {
    name: '寻找单只蟋蟀',
    text: '晚上找一个安静的地方，在那里你能清楚地听到一只蟋蟀的鸣叫，以避免混淆节奏。',
  },
  {
    name: '计算 15 秒内的鸣叫次数',
    text: '使用秒表，计算昆虫在整整 15 秒内发出了多少次摩擦声。',
  },
  {
    name: '输入数值',
    text: '跟随鸣叫节奏点击“TAP”按钮几秒钟，计算器会自动计算 BPM（每分钟鸣叫次数）。',
  },
  {
    name: '验证温度',
    text: '系统将应用公式 T(°C) = 10 + (N - 40) / 7，为您提供环境温度的摄氏度估值。',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '完整指南：如何利用杜倍耳定律计算温度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '你知道吗，只需聆听大自然的声音就能得知准确的温度？1897 年，物理学家阿莫斯·杜倍耳发现蟋蟀鸣叫频率与环境热量之间存在精确的数学关系。这款工具将这一发现数字化，让你的手机变成一个天然温度计。',
    },
    {
      type: 'tip',
      title: '蟋蟀为什么要“唱歌”？',
      html: '<p>蟋蟀的“歌声”，即<strong>摩擦发声</strong>，实际上是一种求偶信号。公蟋蟀通过摩擦双翅（而不是腿）来发出这种声音。令人着迷的是，由于它们是冷血动物（变温动物），这种摩擦的速度直接取决于空气的热能。</p>',
    },
    {
      type: 'title',
      text: '科学原理：变温性与代谢',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '与保持恒定体温的哺乳动物不同，昆虫依靠外部热量。它们的生化反应遵循<strong>阿伦尼乌斯公式</strong>：热量越多，反应越快。',
    },
    {
      type: 'paragraph',
      html: '这意味着蟋蟀的肌肉收缩和翅膀摩擦需要酶促反应。如果天气寒冷，这些反应就会变慢，鸣叫声也会变得迟缓。如果天气暖和，代谢就会加快，歌声也会变成疯狂的颤音。',
    },
    {
      type: 'title',
      text: '杜倍耳公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '尽管不同品种存在差异，但最著名的公式是针对雪树蟋 (<em>Oecanthus fultoni</em>) 的。要获得摄氏温度：',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\n其中 N = 每分钟鸣叫次数。',
      ariaLabel: '通过蟋蟀鸣叫计算温度的杜倍耳定律',
    },
    {
      type: 'paragraph',
      html: '我们的工具会自动执行此操作：它测量您点击之间的时间，计算每分钟鸣叫次数（BPM）并立即应用公式。',
    },
    {
      type: 'title',
      text: '有趣的事实',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>爱情温度计：</strong> 一些理论认为，母蟋蟀更喜欢在当前温度下以“正确”频率唱歌的公蟋蟀，因为这表明该公蟋蟀身体健康且代谢强健。',
        '<strong>寒冷极限：</strong> 低于 10°C (50°F) 时，大多数蟋蟀会停止唱歌，因为它们的代谢太慢，无法维持肌肉输出。',
        '<strong>同步鸣叫：</strong> 在温暖的夜晚，成千上万只蟋蟀可以同步鸣叫，产生令人印象深刻的“声波”效果。',
      ],
    },
    {
      type: 'tip',
      title: '准确度提示',
      html: '<p>准确度取决于蟋蟀的品种。此工具针对普通田蟋和树蟋进行了校准。湿度或风等因素可能会使结果产生 ±0.5°C 的偏差。</p>',
    },
  ],
  ui: {
    labelWaiting: '等待中...',
    labelTapping: '继续点击...',
    tapInstruction: '每当你听到一声鸣叫',
    btnReset: '重置',
    btnSoundOn: '声音：开启',
    btnSoundOff: '声音：关闭',
    unitChirpsMin: '次鸣叫/分',
  },
};
