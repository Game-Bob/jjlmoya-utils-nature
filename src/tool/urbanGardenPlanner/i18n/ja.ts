import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'urban-garden-rainwater-and-soil-planner';
const title = '都市の庭の土と雨水プランナー';
const description = '花壇やプランターに必要な培養土の量と、都市の庭で集められる雨水を見積もります。';
const faqData = [
  { question: 'レイズドベッドにはどれくらい土が必要ですか？', answer: '栽培面積と土の深さを入力してください。面積と深さを掛けてリットルに換算するため、土や堆肥の量を見積もれます。' },
  { question: '庭の雨水利用量はどう計算しますか？', answer: '集水面積と雨量を入力します。表面流出率85パーセント、集水率90パーセントを適用した計画用の控えめな見積もりを表示します。' },
  { question: 'ベランダのプランターにも使えますか？', answer: '使えます。栽培面積にはプランターの面積を、深さには予定する土の深さを、集水面積には屋根やひさしの面積を入力してください。' },
  { question: '集めた雨水は食用植物に安全ですか？', answer: '自動的に安全とは限りません。集水面と容器を確認し、適切なろ過と排水を用意して、地域の案内に従ってください。' },
];
const howToData = [
  { name: '栽培スペースを測る', text: '土を入れる花壇、ベランダ、容器の面積を入力します。' },
  { name: '土の深さを決める', text: '沈下する分も考慮して、予定する深さをセンチメートルで入力します。' },
  { name: '集水面積を加える', text: '容器へ水を送る屋根、ひさし、その他の面積を入力します。' },
  { name: '雨の量を試す', text: '雨量をミリメートルで入力し、庭の大きさと集水量を比べます。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: '小さな庭を、生きた層として測る', headInputs: '庭の条件を設定', headScene: '景色を読み取る', labelGardenArea: '栽培面積', labelDepth: '土の深さ', labelCollectionArea: '集水面積', labelRainfall: '雨の量', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: '花壇、ベランダ、容器の面積です。', helpDepth: '入れたい土の層の深さです。', helpCollectionArea: '容器へ水を送る面積です。', helpRainfall: '最近の雨や地域の計画雨量を試します。', presetsTitle: '形から始める', presetBalcony: 'ベランダ菜園', presetRaisedBed: 'レイズドベッド', presetCommunity: '共同菜園', labelSoilNeeded: '必要な培養土', labelWaterCaptured: '集められる雨水', labelGardenDepth: '庭全体に広げた場合', labelWateringArea: '10 mmの水の場合', sceneCatchment: '集水面', sceneGardenBed: '栽培スペース', sceneSoil: '土の層', sceneWater: '集めた水', statusBalanced: '計画に使いやすい組み合わせ', statusLightCapture: '雨量が少ないケース', statusDeepBed: '深い土の構成', statusNoRain: '雨の入力を待っています', statusNote: '材料の量を考え、条件を比べるための見積もりです。水やりの処方ではありません。', assumptionTitle: '計画上の前提', assumptionText: '雨の85パーセントを流出分、集水後の90パーセントを損失後の水として計算します。1平方メートルに1リットルを広げると1 mmです。', limitationTitle: '安全に庭を使う', limitationText: '排水を確保し、汚染された集水面を避け、食用植物に使う前に地域のルールを確認してください。' },
  seo: [
    { type: 'title', text: '都市の庭に必要な土と雨水を計算する', level: 2 },
    { type: 'paragraph', html: 'レイズドベッド、ベランダ、共同菜園では、必要な培養土の量と近くの屋根から集められる雨水の量を知ることが大切です。このプランナーは2つの見積もりを同じ画面で比較します。' },
    { type: 'title', text: '培養土の量の計算式', level: 3 },
    { type: 'paragraph', html: '式は <code>面積 m² × 深さ cm × 10 = 培養土 L</code> です。12 m²の面積に深さ30 cmの土を入れる場合、沈下や排水層を除く前で3,600 Lになります。' },
    { type: 'list', items: ['<strong>栽培面積:</strong> 花壇、ベランダ、容器の底面積。', '<strong>土の深さ:</strong> 入れたい土の層の高さ。', '<strong>集水面積:</strong> 屋根やひさしなどの水の入口。', '<strong>雨の量:</strong> 試したい雨量をミリメートルで入力。'] },
    { type: 'title', text: '庭の雨水を見積もる', level: 3 },
    { type: 'paragraph', html: '水の見積もりは <code>集水面積 × 雨量</code> から始め、流出の85パーセントと集水後の90パーセントを使います。実際に使える量を保証するものではなく、条件を比較するための数字です。' },
    { type: 'title', text: 'オフラインで条件を比べる', level: 3 },
    { type: 'paragraph', html: 'ベランダ、レイズドベッド、共同菜園のプリセットを試し、次に実測値へ置き換えてください。住所、地図、天気予報、個人データはブラウザの外へ送られません。' },
    { type: 'tip', title: '大切な制限', html: '排水、水質、蒸発、植物の種類、地域のルールには人による判断が必要です。汚染された屋根や容器は食用植物にそのまま使えません。' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
