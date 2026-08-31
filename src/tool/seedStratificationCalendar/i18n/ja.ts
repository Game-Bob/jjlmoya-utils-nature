import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'ja',
  title: '種子の低温処理と播種日カレンダー',
  description: '播種日から逆算するか、種子を準備する日から順算して、日付付きの準備計画を作成します。',
  faq: [
    { question: 'このカレンダーは何を計算しますか？', answer: '浸水、温暖な湿潤処理、低温の湿潤処理、播種を、目標日から逆算または開始日から順算して具体的な日付に配置します。' },
    { question: 'なぜ日付モードが2つあるのですか？', answer: '播種日が決まっている場合は播種日モードを、今日から準備を始めて播種予定日を知りたい場合は種子準備済みモードを使います。' },
    { question: '日数や温度を変更できますか？', answer: '変更できます。種子プロフィールを出発点にして、袋の表示、専門資料、地域の条件に合わせて各工程を調整してください。' },
    { question: '計画どおりなら必ず発芽しますか？', answer: 'いいえ。計画は日程を整理するものです。種子の年齢、活力、水分、休眠、カビ、播種条件も結果に影響します。' },
  ],
  howTo: [
    { name: '種子プロフィールを選ぶ', text: '近い種類を選ぶと、妥当な初期工程が読み込まれます。' },
    { name: '日付モードを選ぶ', text: '播種日から逆算するか、種子を準備する日から順算します。' },
    { name: '工程を確認する', text: '浸水、温暖、低温の日数と低温の範囲を調整します。' },
    { name: '日付順に実行する', text: '開始日に始め、各工程を順に行い、表示された日に播種します。' },
  ],
  seoTitle: '準備期間を計画する',
  seoIntro: '種子の休眠は、時間の管理でもあります。湿った低温期間が必要な種類では、準備が遅いと適切な播種時期を逃すことがあります。必要以上に長い処理は時間を使い、カビや早期発芽のリスクを高めます。このカレンダーは目標日を実行しやすい工程に変換します。',
  seoModes: '目標の播種日を選ぶと逆算でき、種子を準備する日を選ぶとその日から順算できます。各工程には日付があり、浸水は次の処理につながり、最後の処理は播種の前日に終わります。容器のラベルや通知にも利用できます。',
  seoPhaseTitle: '各工程の読み方',
  seoPhaseItems: ['<strong>浸水:</strong> 指定された日数だけ種子を湿らせ、明確な理由なく延長しません。', '<strong>温暖:</strong> プロフィールが求める場合は、湿った種子を温暖な範囲で保ちます。', '<strong>低温:</strong> 湿った状態で冷やし、カビや早い根がないか定期的に確認します。', '<strong>播種:</strong> 目標日に準備した種子を適切な培地へ移します。'],
  seoEvidenceTitle: 'プロフィールは出発点として使う',
  seoEvidence: 'プロフィールはすべての条件に当てはまる処方ではありません。品種、産地、種子の年齢、袋の説明によって休眠条件は変わります。信頼できる供給元が別の日数を示す場合は、相反する情報を平均せず、プロフィールを編集して使用した資料を記録してください。',
  seoTipTitle: 'カレンダーは発芽試験ではない',
  seoTip: '種子のロット、湿潤材料、温度、日付を記録します。低温処理中に根が出たら、根を傷めないよう注意して播種します。休眠が続く場合も、自動的に処理を延長せず、まず種類ごとの情報を確認します。',
  seoChecksTitle: '開始前の確認',
  seoChecks: ['播種日が光、霜、場所の条件に合うか確認します。', '種類、開始日、終了日、温度範囲を容器に記します。', '湿っていても空気が通る培地を使い、定期的に確認します。', '処理を追跡できるよう、計画を種子袋と一緒に保管します。'],
  seoLimitsTitle: '結果から分からないこと',
  seoLimits: 'このツールは写真から休眠を判定せず、活力を検査せず、種類ごとの説明に代わるものでもありません。地域の天候を予測したり、発芽を保証したりすることもありません。結果は日付の計算として扱い、生物学的な条件は適切な資料で確認してください。',
  ui: {
    labelProfile: '種子プロフィール', labelMode: '計画モード', labelModeSowing: '播種したい日', labelModeReady: '種子は今日準備できている', labelSowingDate: '目標播種日', labelReadyDate: '準備開始日', labelSoakDays: '浸水日数', labelWarmDays: '温暖日数', labelColdDays: '低温日数', labelColdRange: '低温範囲', labelUnits: '温度単位', labelMetric: 'メートル法 °C', labelImperial: 'ヤード・ポンド法 °F', labelFrom: '最低温度', labelTo: '最高温度', labelGenerate: 'カレンダーを更新', labelReset: 'プロフィールをリセット', labelAddCalendar: 'カレンダーに追加', labelShare: 'リンクをコピー', labelCopied: 'リンクをコピーしました', labelPrint: 'コンパクトなラベルを印刷', labelTechnique: '方法', labelTodayStatus: '今日の状態', labelDayOf: '日目 /', labelGantt: '準備タイムライン', labelTimeline: '準備タイムライン', labelNextAction: '現在の工程', labelCalendarStarts: 'カレンダー開始', labelSowingDay: '播種日', labelDuration: '準備', labelDays: '日', labelTemperature: '温度', labelReady: '今日播種', labelUpcoming: 'これから', labelActive: '進行中', labelComplete: '計画完了', labelEditHint: '種子袋や専門資料に合わせて提案を調整できます。最後の設定はこの端末に保存されます。', labelWarm: '温暖成層', labelCold: '低温成層', labelSoak: '種子を浸水', labelSow: '種子を播種', noteApple: '短い浸水後の湿った低温期間', noteLavender: '春の播種前に行う短い低温期間', noteMilkweed: '温暖工程の後に低温工程', noteRose: '浸水後の長い低温期間', profileApple: 'リンゴ · Malus domestica', profileLavender: 'ラベンダー · Lavandula angustifolia', profileMilkweed: 'トウワタ · Asclepias syriaca', profileRose: 'バラ · Rosa spp.', profileStrawberry: 'イチゴ · Fragaria × ananassa', profilePeach: 'モモ · Prunus persica', profileCherry: 'サクランボ · Prunus avium', profilePear: 'ナシ · Pyrus communis', profilePoppy: 'ケシ · Papaver spp.', profileSunflower: 'ヒマワリ · Helianthus annuus', profileTomato: 'トマト · Solanum lycopersicum', profileBasil: 'バジル · Ocimum basilicum', instructionSoak: '次の工程まで種子を水分のある状態に保ちます。', instructionWarm: '湿った種子を温かい場所で保ちます。', instructionCold: '種子を湿った低温で保ち、定期的に確認します。', instructionSow: '準備した培地に播種します。', emptyState: '日付を設定して準備タイムラインを作成します。', warningDate: '有効な播種日を選択してください。', warningTemperature: 'カレンダーを更新する前に日数と温度を確認してください。',
  },
});
