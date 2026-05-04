import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'seed-calculator';
const title = '株間・播種機キャリブレーション計算機';
const description =
  '農業従事者のための精密ツール。目標個体数と畝間（うねま）から理想的な株間を計算し、異なる作業速度における播種機への負荷を分析します。';

const faqData = [
  {
    question: '株間はどのように計算されますか？',
    answer:
      '1ヘクタール（10,000 m²）を畝間で割り、播種を行う総長（リニアメートル）を求めます。次に、目標個体数をその総長で割ることで、1メートルあたりに何粒の種を配置すべきかを決定します。',
  },
  {
    question: '1ヘクタールあたりの目標個体数は？',
    answer:
      '10,000平方メートルあたりの理想的な植物数です。作物の種類、土壌の肥沃度、水の状態によって異なります。例えば、灌漑（かんがい）トウモロコシでは通常、ヘクタールあたり85,000～95,000粒が必要です。',
  },
  {
    question: '発芽率は計算にどのように影響しますか？',
    answer:
      '蒔いた種すべてが芽を出すわけではありません。種のロットの発芽率が95%の場合、最終的に目的の個体数を確保するために、播種量を5%増やす必要があります。',
  },
  {
    question: 'なぜ播種機のキャリブレーションが重要なのですか？',
    answer:
      '播種密度が高すぎると植物間の競争が激しくなり、粒が小さくなります。密度が低すぎるとスペースと収穫ポテンシャルが無駄になります。収益性の鍵は「精密さ」にあります。',
  },
];

const howToData = [
  {
    name: '目標個体数を入力する',
    text: '品種の技術推奨に基づき、ヘクタールあたり何粒（または何株）にしたいかを定義します。',
  },
  {
    name: '畝間を設定する',
    text: '播種機のディスクやオープナーの間の距離を測定します（通常は50cm、70cm、75cmなど）。',
  },
  {
    name: '発芽率を調整する',
    text: '圃場での自然な損失を考慮し、予想される出芽率を入力します。',
  },
  {
    name: '機械の調整値を確認する',
    text: '1メートルあたりの粒数や株間の数値を使用して、機械のスプロケットやモニターを設定します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<SeedCalculatorUI> = {
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
      text: '精密播種への技術ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '播種機のトランスミッションを調整するには、畝の1メートルあたりに何粒の種を落とすべきかを正確に知る必要があります。機械のマニュアルには概算表が載っていますが、<strong>駆動輪のスリップ</strong>や種のサイズなどの要因が現実とは異なる場合があります。このツールは、完璧な理論値、すなわち<strong>目標となる株間距離</strong>を導き出します。',
    },
    {
      type: 'tip',
      title: '数学的公式',
      html: '<p>農学者や興味のある方のために、計算の基礎を記します：</p><pre>株間 (cm) = 10,000,000 / (個体数 × 畝間)</pre><ul><li><strong>10,000,000:</strong> ヘクタールから平方センチメートルへの換算係数。</li><li><strong>個体数:</strong> ヘクタールあたりの粒数。</li><li><strong>畝間:</strong> 畝と畝の間の距離（cm単位）。</li></ul>',
    },
    {
      type: 'title',
      text: 'なぜこの計算機を使うのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '圃場で実際に測定して、株間が目標値より狭かったり広かったりする場合、機械の<strong>キャリブレーションが不適切</strong>です。このツールは、異なる作業速度における種子ディスクの供給頻度（Hz）も分析し、欠株や二重播種のリスクを警告します。',
    },
    {
      type: 'title',
      text: '高品質な播種の鍵',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>シングル化：</strong> 二重播種（ダブル）や欠株（スキップ）を避けます。99%のシングル化が維持されれば、植物間の競争がバランスよく保たれます。',
        '<strong>均一な間隔：</strong> 変動係数は0.3未満であるべきです。5cm以上の偏差は収量ポテンシャルを低下させます。',
        '<strong>深さ：</strong> 出芽を揃えるために非常に重要です。土壌の湿り具合に応じて鎮圧輪（プレスホイール）の荷重を調整してください。',
      ],
    },
    {
      type: 'title',
      text: '圃場での確認方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000ヘクタール法：</strong> 1/1000ヘクタールに相当する畝の長さを測定します。種の数を数え、1,000を掛けます。例えば畝間70cmの場合、測定距離は14.28m、畝間52.5cmなら19.05mとなります。',
    },
    {
      type: 'paragraph',
      html: '<strong>駆動輪法：</strong> 機械を持ち上げ、駆動輪に印をつけてから1/100ヘクタール相当分回転させます。種をバケツに集め、重さを量るか粒数を数えてキャリブレーションを確認します。',
    },
    {
      type: 'title',
      text: '作物別リファレンス表',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>トウモロコシ：</strong> 60,000～95,000粒/Ha。最新のハイブリッド品種は密度反応が高いです。',
        '<strong>大豆：</strong> 250,000～450,000粒/Ha。低密度時でも高い補償能力を持ちます。',
        '<strong>ヒマワリ：</strong> 40,000～55,000粒/Ha。密度に非常に敏感で、過剰になると花盤の直径が小さくなります。',
        '<strong>ナタネ：</strong> 300,000～600,000粒/Ha。種が非常に小さいため、土壌との高い密着性が必要です。',
      ],
    },
  ],
  ui: {
    headCrop: '作物を選択',
    headParams: 'パラメータ',
    headAnalysis: 'リアルタイム分析',
    labelPopulation: '個体数',
    unitSeedsHa: '粒/Ha',
    labelRowWidth: '畝間',
    unitCm: 'センチメートル',
    labelWorkSpeed: '作業速度',
    unitKmh: 'km/h',
    labelCalibration: 'ディスク調整',
    labelSpacingDesc: '畝内における各種子間の正確な距離。',
    labelMachineStress: '機械負荷',
    labelSeedsM: '粒 / メートル',
    labelPlantsM2: '株 / m²',
    labelSpeedMs: 'メートル / 秒',
    labelHaBag: 'Ha / 袋 (8万粒)',
    statusStandby: '待機中',
    statusVolumetric: '体積流量',
    statusOptimal: '最適供給',
    statusHighSpeed: '高速作業',
    statusPlateLimiter: 'ディスク限界',
    cropCorn: '子実トウモロコシ',
    cropSilage: 'サイレージトウモロコシ',
    cropSunflower: 'ヒマワリ',
    cropSorghum: 'ソルガム',
    cropSoy: '大豆',
    cropBeet: 'テンサイ',
    cropRapeseed: 'ナタネ',
    noteCorn: '高い精密さが必要',
    noteSilage: '中～高密度',
    noteSunflower: '速度に敏感',
    noteSorghum: '連続供給またはディスク',
    noteSoy: '高個体数',
    noteBeet: '浅播きが重要',
    noteRapeseed: '非常に小さな種',
  },
};
