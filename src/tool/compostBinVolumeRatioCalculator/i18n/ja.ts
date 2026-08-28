import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "compost-bin-volume-and-browns-greens-ratio-calculator";
const title = "コンポスト容器容量とブラウン・グリーン比率計算ツール";
const description =
  "直方体または円筒形のコンポスト容器の内部容量を計算し、炭素素材（ブラウン）、窒素素材（グリーン）、水分量、通気性の適切なバランスを確認できます。";

const faq = [
  {
    question: "コンポスト容器の容量はどのように計算しますか？",
    answer:
      "容器の内寸を測定します。直方体の場合は幅×奥行き×高さ、円筒形の場合は円周率×半径の2乗×高さを計算してリットルに換算します。",
  },
  {
    question: "ブラウン素材とグリーン素材の適切な比率は？",
    answer:
      "体積比で炭素豊富なブラウン素材2〜3に対して窒素豊富なグリーン素材1が実用的な目安です。水分や臭いの状態に合わせて調整してください。",
  },
  {
    question: "コンポスト容器にはどのくらいの量を投入できますか？",
    answer:
      "投入する資材の合計体積と容器の内部容量を比較します。切り返しや空気の通り道を確保するため、上部に余裕を残してください。",
  },
  {
    question: "固く絞ったスポンジの湿度とはどういう意味ですか？",
    answer:
      "手で握っても水が滴り落ちず、湿り気を感じる状態です。乾燥しすぎると分解が遅くなり、湿りすぎると酸素不足になります。",
  },
];

const howTo = [
  {
    name: "コンポスト容器の形状を選択",
    text: "直方体または円筒形を選択し、センチメートルまたはインチで内寸を入力します。",
  },
  {
    name: "資材の投入量を入力",
    text: "炭素豊富なブラウン素材と窒素豊富なグリーン素材の体積をそれぞれ見積もって入力します。",
  },
  {
    name: "湿度の状態を設定",
    text: "乾燥、固く絞ったスポンジ、過湿から現在の状態を選択し、管理アドバイスを確認します。",
  },
  {
    name: "結果を確認",
    text: "容量、充填率、比率、警告サインを確認して、ブラウン素材の追加や切り返しを行ってください。",
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
  inLanguage: "ja",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "メートル法",
    unitImperial: "ヤード・ポンド法",
    shapeTitle: "容器の形状",
    shapeRectangular: "直方体",
    shapeCylindrical: "円筒形",
    widthLabel: "内側の幅",
    depthLabel: "内側の奥行き",
    diameterLabel: "内径",
    heightLabel: "内側の高さ",
    brownLabel: "ブラウン資材",
    greenLabel: "グリーン資材",
    moistureTitle: "水分状態",
    moistureDry: "乾燥",
    moistureSponge: "固く絞ったスポンジ",
    moistureWet: "過湿",
    moistureAdviceDry: "乾燥：少しずつ加水し、切り返しを行ってください。",
    moistureAdviceSponge: "良好：固く絞ったスポンジの湿度を維持してください。",
    moistureAdviceWet: "過湿：乾燥したブラウン資材を追加して混ぜてください。",
    recipeTitle: "おすすめの配合例",
    recipeKitchen: "生ごみメイン",
    recipeGarden: "庭の手入れごみ",
    recipeLeafy: "落ち葉メイン",
    sceneTitle: "堆肥層の断面イメージ",
    resultCapacity: "コンポスト容器の内部容量",
    resultMaterials: "投入資材の合計",
    resultRatio: "ブラウン対グリーン比率",
    resultFill: "使用容量率",
    brownTarget: "目標ブラウン量",
    waterAction: "水分調整",
    airAction: "空気と構造",
    statusBalanced: "良好なバランスです",
    statusTooGreen: "ブラウン資材を追加してください",
    statusTooBrown: "グリーン資材を追加してください",
    statusNoGreens: "グリーン資材を投入してください",
    statusOverfilled: "容器の容量を超過しています",
    statusDry: "乾燥しています",
    statusWet: "水分が多すぎます",
    statusGoodMoisture: "湿度は最適範囲内です",
    statusNote: "切り返しを行って空気の通り道を確保してください。",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "容量計算の数式",
    formulaText: "内寸から有効容量を計算します。直方体は 幅×奥行き×高さ、円筒形は π×半径²×高さ を使用します。資材の体積を統一して充填率を表示します。",
    practicalTitle: "配合比率は目安です",
    practicalText: "グリーン資材の体積に対してブラウン資材を2〜3倍にするのが基本です。水分と空気の保持も重視し、定期的な切り返しを行ってください。",
    localNote: "すべての計算はブラウザ内でローカルに処理されます。",
    resetLabel: "リセット",
  },
  seo: [
    {
      type: "title",
      text: "コンポスト容器の正確な容量を計算",
      level: 2,
    },
    {
      type: "paragraph",
      html: "コンポスト容器の容量計算ツールは、製品表記ではなく実際の「内寸」から内部有効容量を導き出します。直方体容器の幅・奥行き・高さ、または円筒形容器の直径・高さを入力して、リットルまたはガロン単位で正確な容積を確認できます。",
    },
    { type: "title", text: "幾何学容量の計算式", level: 3 },
    {
      type: "paragraph",
      html: "直方体容器の場合は <code>幅 × 奥行き × 高さ</code> を計算し、立方センチメートルを1,000で割ることでリットルを求めます。円筒形容器の場合は <code>π × 半径² × 高さ</code> を使用します。",
    },
    {
      type: "list",
      items: [
        "<strong>直方体:</strong> 幅 × 奥行き × 高さ",
        "<strong>円筒形:</strong> π × 半径² × 高さ",
        "<strong>単位換算:</strong> 1,000 cm3 ＝ 1 リットル",
        "<strong>充填率:</strong> 投入資材の合計体積を内部容量と比較",
      ],
    },
    { type: "title", text: "ブラウン素材とグリーン素材のバランス", level: 3 },
    {
      type: "paragraph",
      html: "落ち葉やダンボールなどのブラウン素材（炭素源）2〜3に対して、生ごみや雑草などのグリーン素材（窒素源）1の割合が理想的です。",
    },
    { type: "title", text: "水分管理と切り返しの重要性", level: 3 },
    {
      type: "paragraph",
      html: "固く絞ったスポンジのような湿り気を保つことが重要です。水分過多の場合は乾燥したブラウン素材を混ぜて切り返しを行ってください。",
    },
    {
      type: "tip",
      title: "実践のアドバイス",
      html: "この計算ツールの結果は体積ベースの目安です。家庭用コンポストの管理にお役立てください。",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
