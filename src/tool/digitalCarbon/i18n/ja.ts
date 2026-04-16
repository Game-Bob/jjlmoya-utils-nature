import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digital-carbon-footprint-calculator';
const title = 'デジタルカーボンフットプリント計算機';
const description = 'あらゆるウェブページの環境負荷を分析します。1回のアクセスあたりのエネルギー消費量とCO₂排出量を推定します。';

const faqData = [
  {
    question: 'ウェブサイトのカーボンフットプリントとは何ですか？',
    answer: 'ウェブページを読み込んで表示するために、サーバー、通信ネットワーク、およびユーザーのデバイスによって消費されるエネルギーの結果として、大気中に放出される温室効果ガス（主にCO₂）の量のことです。',
  },
  {
    question: 'ウェブサイトの負荷はどのように測定されますか？',
    answer: '通常、1回のアクセスあたりのCO₂換算グラム数（gCO₂e）で測定されます。効率的なウェブサイトはCO₂排出量が0.2g未満ですが、最適化されていないページでは1回の読み込みで2gや3gを超えることがあります。',
  },
  {
    question: 'なぜインターネットが環境を汚染するのですか？',
    answer: 'データセンター、海底ケーブル、WiFiルーター、スマートフォンなどの必要なインフラすべてが、世界の多くの地域で依然として石炭やガスの燃焼によって発電された電気で動いているためです。',
  },
  {
    question: 'ウェブサイトのCO₂を削減するにはどうすればよいですか？',
    answer: '最も効果的な方法はページの軽量化です。画像の最適化（WebP形式）、CSSやJSファイルの圧縮、遅延読み込み（lazy loading）の利用、再生可能エネルギーを使用しているホスティングプロバイダーの選択などが挙げられます。',
  },
];

const howToData = [
  {
    name: 'URLを入力する',
    text: '分析したいウェブページのURLを入力欄に入力します。',
  },
  {
    name: '分析を開始する',
    text: '分析ボタンをクリックして、ツールのリソース負荷推定を開始します。',
  },
  {
    name: '評価を確認する',
    text: '分析されたウェブサイトのエネルギー効率に基づき、A+からFまでの評価が表示されます。',
  },
  {
    name: '改善策を適用する',
    text: '個別のアドバイスリストを参考に、サイトの軽量化と環境負荷の低減を図ります。',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL分析',
    headResults: '負荷分析結果',
    headTips: '最適化のアドバイス',
    labelUrl: 'ページのURL',
    btnAnalyze: 'サイトを分析する',
    btnAnalyzing: '分析中...',
    placeholderUrl: 'https://example.jp',
    errorInvalidUrl: '有効なURLを入力してください。',
    errorFetchFailed: 'ウェブサイトを分析できませんでした。別のURLを試してください。',
    
    resultTitle: 'デジタルカーボンフットプリント',
    resultSubtitle: '推定ページ効率',
    co2PerVisit: '1アクセスあたりのCO₂',
    energyPerVisit: '消費エネルギー',
    co2Annual: '年間CO₂排出量（10万アクセス想定）',
    impactTitle: '実際の年間負荷',
    impactTrees: '必要な樹木の数',
    impactKm: '自動車走行距離換算（約 km）',
    treesLabel: '本',
    kmLabel: 'キロメートル',
    
    ratingExcellent: '素晴らしい評価です。このページは世界平均と比べてエネルギー消費が非常に低く抑えられています。',
    ratingVeryGood: '非常に高い効率です。ページはよく最適化されており、環境負荷は最小限です。',
    ratingGood: '許容範囲内の効率です。改善の余地はありますが、平均よりは優れています。',
    ratingAverage: '平均的です。現在のウェブ標準で想定される程度のエネルギーを消費しています。',
    ratingPoor: '平均を上回っています。画像、スクリプト、フォントの最適化を検討してください。',
    ratingVeryPoor: '高い負荷がかかっています。ページの軽量化が強く推奨されます。',
    ratingCritical: '非常に高い負荷です。ページサイズを大幅に削減できる可能性があります。',
    
    tipImages: '画像をWebPまたはAVIF形式に変換することで、画質を維持したままサイズを最大70%削減できます。',
    tipCompression: 'サーバーでBrotliまたはGZIPを有効にし、リソースを圧縮して配信してください。',
    tipLazyLoading: 'ビューポート外の画像や動画には遅延読み込み（lazy loading）を適用してください。',
    tipHosting: '再生可能エネルギーを使用しているホスティング先（Cloudflare、Netlify、Vercelなど）を選択してください。',
    tipThirdParty: '不要な分析スクリプトやサードパーティ製ウィジェットを削除してください。',
    tipFonts: '実際に使用するフォントウェイトのみを読み込むようにしてください。',
    tipCache: 'HTTPキャッシュヘッダーを適切に設定し、不要な再ダウンロードを防いでください。',
  },
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'ウェブ・サステナビリティに関する参考文献',
  seo: [
    {
      type: 'title',
      text: 'デジタルカーボンフットプリント計算機：あなたのサイトが発生させるCO₂排出量を把握する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ウェブページが環境に与える実際の影響を明らかにしましょう。ページの重さを分析し、1アクセスあたりのCO₂排出量を推定することで、デジタル汚染を減らす方法を学べます。',
    },
    {
      type: 'title',
      text: 'ウェブサイトのデジタルカーボンフットプリントとは？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ウェブページを開くたびに、あなたのデバイス、ルーター、海底ケーブル、そして地球の裏側にあるサーバーが電力を消費します。その電力の多くは、今なお化石燃料の燃焼によって作られています。その結果、<strong>1回のアクセスごとに一定量のCO₂が放出されている</strong>のです。',
    },
    {
      type: 'paragraph',
      html: 'ウェブサイトの<strong>デジタルカーボンフットプリント</strong>は、1アクセスあたりのCO₂換算グラム数（gCO₂e）で測定されます。平均的なウェブサイトは1回の読み込みで約0.5gのCO₂を発生させます。わずかな量に見えますが、月間10万アクセスのサイトなら年間で600kg以上のCO₂を排出することになり、これはガソリン車で3,000km以上走行するのと同等です。',
    },
    {
      type: 'title',
      text: 'ウェブサイトのCO₂排出量はどう計算されるのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当ツールは<strong>Sustainable Web Design Model</strong>の基準に基づいており、エネルギー消費を以下の4つの主要セグメントに分類して計算しています。',
    },
    {
      type: 'card',
      title: 'データ転送',
      html: 'ページの総重量によって転送されるデータ量が決まります。ネットワークインフラにおいて<code>0.81 kWh/GB</code>という基準値が設定されています。',
    },
    {
      type: 'card',
      title: 'ユーザーデバイス',
      html: 'ページを受信するPCやスマホもエネルギーを消費します。処理データ量あたり<code>0.52 kWh/GB</code>と推定されています。',
    },
    {
      type: 'card',
      title: '炭素集約度',
      html: 'エネルギー消費量を実際のCO₂排出量に変換するために、世界基準値である<code>442 gCO₂/kWh</code>を使用しています。',
    },
    {
      type: 'card',
      title: 'キャッシュ係数',
      html: 'ユーザーの25%がすでにリソースをキャッシュしていると想定し、<code>0.75</code>の係数を適用しています。',
    },
    {
      type: 'title',
      text: '効率評価の意味するところ',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ および A:</strong> CO₂排出量0.2g未満。非常に軽量で最適化されたサイトです。',
        '<strong>B:</strong> 0.2g～0.5gの間。世界平均を下回っています。',
        '<strong>C:</strong> 0.5g～1gの間。現在のウェブサイトの平均的な水準です。',
        '<strong>D および E:</strong> 1g～4gの間。負荷が大きく、環境への影響が目立ちます。',
        '<strong>F:</strong> 1アクセスあたり4g以上。非常に高い負荷がかかっています。',
      ],
    },
    {
      type: 'title',
      text: 'ウェブサイトのカーボンフットプリントを減らすには',
      level: 2,
    },
    {
      type: 'card',
      title: '画像の最適化',
      html: '<strong>WebPやAVIF</strong>などの形式を使用することで、見た目の質を落とさずにサイズを最大80%削減できます。',
    },
    {
      type: 'card',
      title: 'サーバー側の圧縮',
      html: '<strong>BrotliやGZIP</strong>を有効にすると、テキストベースのファイルのサイズを最大70%削減できます。',
    },
    {
      type: 'card',
      title: 'サステナブルなホスティング',
      html: '<strong>再生可能エネルギー証書</strong>を持つプロバイダーを選ぶことで、環境負荷をほぼゼロにまで抑えることができます。',
    },
    {
      type: 'card',
      title: 'キャッシュとCDNの活用',
      html: '<strong>長期間のキャッシュヘッダー</strong>を設定し、不要な再ダウンロードを避けるようにしましょう。',
    },
    {
      type: 'title',
      text: 'インターネットが気候に与える実際の影響',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'インターネットは<strong>世界全体のCO₂排出量の2%から4%</strong>を占めており、これは航空業界にも匹敵する数字です。不要な数キロバイトを削ることは、単にサイトを速くするだけでなく、デジタル汚染を着実に減らすことにつながります。',
    },
  ],
  bibliography: [
    { name: 'Sustainable Web Design Model', url: 'https://sustainablewebdesign.org/' },
    { name: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com/' },
    { name: 'The Green Web Foundation', url: 'https://www.thegreenwebfoundation.org/' },
    { name: 'W3C - Web Sustainability Guidelines', url: 'https://w3c.github.io/sustyweb/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
