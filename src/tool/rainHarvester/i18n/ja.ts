import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'rainwater-calculator';
const title = '雨水貯留量計算機';
const description = '屋根からどれくらいの雨水を集められるかを計算し、適切な貯水タンクのサイズを判定します。';

const faqData = [
  {
    question: '屋根から実際にどれくらいの水を集められますか？',
    answer: '一般的なルールとして、屋根1平方メートルあたり、降水量1ミリにつき約1リットルの水を集めることができます。ただし、蒸発や濾過による損失があり、「流出係数」で調整されます。',
  },
  {
    question: '流出係数とは何ですか？',
    answer: '屋根の材質によってどれだけの水が失われるかを示す割合です。金属や瓦の屋根は非常に効率的（0.85～0.95）ですが、砂利や土の屋根は効率が大幅に低下します（0.1～0.3）。',
  },
  {
    question: '貯水タンクのサイズはどう決めればよいですか？',
    answer: '1ヶ月に予想される最大降水量を計算し、推定される月間消費量と照らし合わせて検討する必要があります。小さすぎると大雨の際に溢れてしまい、大きすぎると不必要にコストがかかります。',
  },
  {
    question: '集めた雨水は飲んでも安全ですか？',
    answer: 'そのままでは安全ではありません。雨水には埃、鳥の糞、空気中の微粒子が含まれています。飲用にする場合は、沈殿フィルター、活性炭、およびUVライトや塩素による消毒を通す必要があります。',
  },
];

const howToData = [
  {
    name: '水平投影面積を測定する',
    text: '屋根の土台の長さと幅を測定します（斜面の面積ではなく、地面に落ちる影の面積です）。',
  },
  {
    name: '地域の降水量を確認する',
    text: '気象庁などのデータで、お住まいの地域の年間または月間の平均降水量（ミリメートル単位）を確認します。',
  },
  {
    name: '材質の効率を適用する',
    text: '計算機で屋根の材質を選択し、吸収や熱で失われる水の分を差し引きます。',
  },
  {
    name: '必要な容量を計算する',
    text: '年間収穫量の結果を参考に、乾季のために総収穫量の少なくとも20～30%を貯蔵できるタンクを選びます。',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: '屋根の設定',
    headResults: '収穫ポテンシャル',
    labelArea: '屋根面積',
    labelRainfall: '年間降水量',
    labelMaterial: '屋根の材質',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'リットル',
    helpRainfall: '分からない場合は、Googleで「（お住まいの都市名） 年間平均降水量」を検索してください。',
    efficiencyTitle: '効率係数',
    efficiencyNote: 'フィルターや蒸発による損失として10%を差し引いています。',
    resultTitle: '年間に集められる水の量',
    equivalenciesTitle: '活用例（目安）',
    labelFlushes: 'トイレの洗浄回数',
    labelShowers: 'シャワー（10分間）',
    labelGarden: '庭への散水',
    gardenArea: '(50m²)',
    materialMetal: '金属 / 釉薬瓦',
    materialClay: '素焼き瓦 / 粘土',
    materialConcrete: 'コンクリート / アスファルト',
    materialGravel: '砂利 / 屋上緑化',
  },
  seo: [
    {
      type: 'title',
      text: '雨水利用：自立とサステナビリティ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの住宅所有者は、自分の屋根が持つポテンシャルに気づいていません。標準的な屋根は、毎年何千リットルもの無料の水をキャッチすることができます。このツールはそのポテンシャルを数値化し、どれくらいの水を「収穫」できるかを正確に計算することで、理想的な貯水タンクのサイズを決定する助けとなります。',
    },
    {
      type: 'title',
      text: '計算のロジック',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '雨水収集の基本式はシンプルですが強力です：',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">容量 = 面積 × 降水量 × 流出係数 × フィルター効率</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>面積：</strong> 屋根の設置面積（投影された長さ × 幅）。',
        '<strong>降水量：</strong> ミリメートル単位の降雨量。',
        '<strong>係数：</strong> 屋根でどれだけの水が失われるか（吸収など）。',
        '<strong>効率：</strong> タンク前のフィルターでの損失（約10%）。',
      ],
    },
    {
      type: 'title',
      text: 'なぜ雨水を集めるのか？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>節約：</strong> 水道料金を大幅に削減できます。',
        '<strong>ガーデニング：</strong> 植物は塩素や石灰を含まない水を好みます。',
        '<strong>レジリエンス：</strong> 断水時の非常用備蓄として活用できます。',
      ],
    },
    {
      type: 'title',
      text: 'タンクのサイズ選定',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '最も多い間違いは、予算だけでタンクを購入することです。小さすぎると大雨の際に溢れて無駄になり、大きすぎると不必要なコストがかかります。一般的なルールは、乾季を乗り切るために地域の平均降水量の<strong>3ヶ月分</strong>を貯蔵できる容量を持つことです。',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
