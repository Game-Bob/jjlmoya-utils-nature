import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'wildlife-camera-trap-effort-planner';
const title = '野生動物カメラトラップ調査計画';
const description = 'カメラトラップの調査 effort、稼働日数、画像確認の負荷を計画し、個体数を推定せずに設置配置を検討します。';
const faqData = [
  { question: 'カメラ日数とは何ですか？', answer: 'カメラ日数は、稼働したカメラ台数に稼働日数を掛けた値です。調査 effort を表しますが、地域の動物数を表すものではありません。' },
  { question: 'この計画は個体数を計算しますか？', answer: 'いいえ。運用上の effort と計画上の面積を示します。個体数、密度、占有率には、検出漏れを扱う検証済みの調査設計と統計モデルが必要です。' },
  { question: '設置間隔は何に使いますか？', answer: '各カメラの仮想的な正方形セルを作り、面積と台数から求めた均等配置の間隔と比較します。検出半径を表す値ではありません。' },
  { question: '確認スケジュールはどう使いますか？', answer: '週ごとの確認点を、訪問、電池、保存容量、画像確認の計画に使います。実際の調査プロトコルに合わせて現場の訪問記録へ置き換えてください。' },
];
const howToData = [
  { name: '調査面積を入力する', text: 'カメラ設置で調査する面積を入力します。メートル法とヤード・ポンド法を切り替えても物理的な値は保たれます。' },
  { name: '配置 effort を描く', text: 'カメラ台数、設置日数、目標間隔を入力します。図は相対的な計画グリッドであり、座標や検出範囲ではありません。' },
  { name: '画像量を見積もる', text: 'カメラ1台1日あたりの予想イベント数を入力します。カメラ日数に掛け、週ごとの確認点へ配分します。' },
  { name: '現場記録を準備する', text: 'カメラと設置セッションに固有の識別子を付け、設置情報を記録し、動物が写らない確認も含めて訪問を記録します。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'カメラ1台あたりの面積',
    labelSurveyArea: '調査面積', labelCameraCount: 'カメラ台数', labelDeploymentDays: '設置日数', labelSpacing: '目標設置間隔', labelTriggerRate: 'カメラ1台1日あたりの予想イベント', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: '台', unitDays: '日', unitEventsPerDay: 'イベント/日', helpSurveyArea: '設置で調査する面積です。', helpCameraCount: '今回の調査で稼働するカメラです。', helpDeploymentDays: '設置から回収までの日数です。', helpSpacing: '計画用のセル幅で、検出半径ではありません。', helpTriggerRate: '類似調査または試験設置から慎重な値を使います。', unitSystemLabel: '単位系', metricLabel: 'メートル法', imperialLabel: 'ヤード・ポンド法', presetsTitle: '現場の開始例', presetBackyard: '林縁', presetWoodland: '混交林', presetReserve: '大規模保護区', mapLabel: '相対的な設置計画図', mapCaption: '番号付きカメラを相対的な計画グリッドに配置しています。生息地の被覆図ではありません。', stationLabel: '地点', cameraDaysLabel: 'カメラ日数', expectedEventsLabel: '予想イベント', spacingLabel: '均等配置の間隔', reviewLoadLabel: '確認1回あたりのイベント', reviewScheduleTitle: '確認リズム', reviewScheduleText: '週ごとの確認点で画像量を事前に把握します。実際の訪問計画に合わせてください。', reviewDayLabel: '日', reviewEventsLabel: '予想イベント', statusBalanced: '間隔はおおむね均衡', statusSparse: '地点の間隔は広め', statusDense: '地点の間隔は狭め', statusReviewHeavy: '確認負荷に注意', statusNeedsInput: '調査計画を入力してください', statusNote: 'これは effort の計画です。動物の個体数や種の検出を保証するものではありません。', assumptionTitle: 'モデルの仮定', assumptionText: '各地点を目標間隔に基づく正方形セルとして扱います。予想イベントは、カメラと日によって発生率が一定だと仮定します。', limitationTitle: '現場での限界', limitationText: '地図上の均一さだけでなく、対象種と問いに合わせて地点を選びます。識別子、日付、向き、高さ、生息地、空振り確認を記録してください。',
  },
  seo: [
    { type: 'title', text: 'カメラトラップ調査の effort を計画する', level: 2 },
    { type: 'paragraph', html: '野生動物のカメラトラップ調査では、設置前に二つの負荷を確認します。どれだけの調査 effort になるか、そして画像を保存・確認・記録できるかです。この計画では、カメラ日数、予想イベント、地点図、確認点をまとめて考えられます。' },
    { type: 'title', text: 'カメラ日数で調査 effort を表す', level: 3 },
    { type: 'paragraph', html: 'カメラ日数は <code>カメラ台数 × 設置日数</code> です。12台を28日稼働すると336カメラ日数になります。調査間の比較には便利ですが、個体数推定ではなく、故障、生息地、動物の行動も補正しません。' },
    { type: 'list', items: ['<strong>カメラ台数:</strong> 調査中に稼働する機器を数えます。', '<strong>設置日数:</strong> 設置から回収までの予定日数です。', '<strong>発生率:</strong> 連写の写真数ではなく、カメラ1台1日あたりのイベントを使います。', '<strong>確認点:</strong> 保存容量、電池、訪問、画像確認を計画します。'] },
    { type: 'title', text: '設置図を計画用の補助として読む', level: 3 },
    { type: 'paragraph', html: '図は面積、台数、目標間隔から相対的な配置を描きます。仮想面積は地点数に目標間隔の二乗を掛けた値です。センサーの検出面積ではなく、地形、植生、道、向き、高さ、行動で検出確率は変わります。' },
    { type: 'title', text: '設置前に記録方法を決める', level: 3 },
    { type: 'paragraph', html: '対象種と研究の問いを決め、カメラとセッションに安定した識別子を付けます。日付、場所、高さ、向き、生息地、設定、稼働状態を記録します。何も写らない確認も調査過程の重要な記録です。' },
    { type: 'tip', title: 'effort を個体数に変換しない', html: 'カメラトラップには検出漏れがあります。運用と画像確認の予算にはこの計画を使い、占有率、密度、個体数、変化の分析には検証済みの生態学的設計を使ってください。' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
