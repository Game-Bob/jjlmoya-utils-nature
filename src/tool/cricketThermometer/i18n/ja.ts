import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'cricket-thermometer';
const title = 'コオロギ温度計 – ドルベアの法則による温度計算機';
const description =
  '温度計がない？そんな時はコオロギの声を聞きましょう。ドルベアの法則に基づき、鳴き声を数えるだけで正確な温度を算出します。';

const faqData = [
  {
    question: 'ドルベアの法則とは何ですか？',
    answer:
      '1897年にエイモス・ドルベアによって定式化された、コオロギの鳴き声の頻度と周囲の気温との間に線形相関があることを発見した科学的観察結果です。',
  },
  {
    question: 'なぜ暑いとコオロギは速く鳴くのですか？',
    answer:
      'コオロギは変温動物（外温動物）です。代謝プロセスや筋肉の収縮速度は外部温度に依存するため、気温が高いほど、素早く音を出すためのエネルギーが活発になります。',
  },
  {
    question: 'この測定は正確ですか？',
    answer:
      'キンヒバリ（スノー・ツリー・クリケット）などの種では驚くほど正確で、正しく数えれば誤差は約0.5℃以内です。ただし、湿度や風などの要因により結果が変動する場合があります。',
  },
  {
    question: '計算にはどのコオロギを使えばよいですか？',
    answer:
      '元の公式はキンヒバリに基づいています。一般的なエンマコオロギでも同様の相関が見られますが、鳴く速さはわずかに遅くなる傾向があります。',
  },
];

const howToData = [
  {
    name: '一匹のコオロギを見つける',
    text: 'リズムが混ざらないよう、一匹のコオロギの鳴き声がはっきりと聞こえる静かな場所を夜に見つけます。',
  },
  {
    name: '15秒間の鳴き声を数える',
    text: 'ストップウォッチを使い、15秒間にコオロギが何回鳴いた（発音した）かを数えます。',
  },
  {
    name: '値を入力する',
    text: 'コオロギの鳴き声に合わせて「TAP」ボタンを数秒間タップすると、計算機が自動的にBPMを算出します。',
  },
  {
    name: '温度を確認する',
    text: 'システムが「T(℃) = 10 + (N - 40) / 7」の公式を適用し、推定温度を摂氏で表示します。',
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
      text: '完全ガイド：ドルベアの法則を使って温度を計算する方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '自然の音を聞くだけで正確な温度が分かることをご存知ですか？1897年、物理学者のエイモス・ドルベアは、コオロギが鳴く頻度と周囲の温度との間に正確な数学的関係があることを発見しました。このツールはその発見をデジタル化し、あなたのスマートフォンを「天然の温度計」に変身させます。',
    },
    {
      type: 'tip',
      title: 'なぜコオロギは鳴くの？',
      html: '<p>コオロギの「歌」、つまり<strong>発音</strong>は、実は求愛行動です。オスは羽（足ではありません）をこすり合わせてこの音を作ります。興味深いことに、彼らは変温動物（外温動物）であるため、このこすり合わせる速度は空気の熱エネルギーに直接依存しているのです。</p>',
    },
    {
      type: 'title',
      text: '科学の裏側：外温性と代謝',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '体温を一定に保つ哺乳類とは異なり、昆虫は外部の熱に依存しています。彼らの生化学反応は<strong>アレニウスの式</strong>に従います。つまり、熱が加わるほど反応が速くなるのです。',
    },
    {
      type: 'paragraph',
      html: 'これは、コオロギの筋肉が収縮して羽をこするためには酵素反応が必要であることを意味します。寒いとこれらの反応は遅くなり、鳴き声は鈍くなります。暖かいと代謝が加速し、歌は激しいトリルのようになります。',
    },
    {
      type: 'title',
      text: 'ドルベアの公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '種によって多少の変動はありますが、最も有名な公式はキンヒバリ（<em>Oecanthus fultoni</em>）のものです。摂氏で温度を算出するには：',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nN = 1分間あたりの鳴き声の数',
      ariaLabel: 'コオロギの鳴き声から温度を算出するドルベアの法則',
    },
    {
      type: 'paragraph',
      html: '当ツールはこれを自動で行います。あなたがタップする間隔を測定し、1分間あたりの鳴き声の数（BPM）を計算して、瞬時に公式を適用します。',
    },
    {
      type: 'title',
      text: '驚きの事実',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>恋の温度計：</strong> メスは、現在の温度に対して「正しい」周波数で歌うオスを好むという説があります。これは、そのオスが健康的で強い代謝を持っていることを示しているからです。',
        '<strong>寒さの限界：</strong> 10℃（50°F）を下回ると、ほとんどのコオロギは筋肉を動かすための代謝が追いつかなくなるため、鳴くのをやめてしまいます。',
        '<strong>シンクロニシティ：</strong> 暖かい夜には、何千匹ものコオロギが同時に鳴き声を同期させ、印象的な「波」のような音響効果を生み出すことがあります。',
      ],
    },
    {
      type: 'tip',
      title: '精度に関する注意',
      html: '<p>精度はコオロギの種類によって異なります。このツールは一般的なエンマコオロギやキンヒバリ向けに調整されています。湿度や風などの要因により、±0.5℃程度の誤差が生じる場合があります。</p>',
    },
  ],
  ui: {
    labelWaiting: '待機中...',
    labelTapping: 'タップを続けてください...',
    tapInstruction: '鳴き声が聞こえるたびにタップ',
    btnReset: 'リセット',
    btnSoundOn: 'サウンド：ON',
    btnSoundOff: 'サウンド：OFF',
    unitChirpsMin: '回/分',
  },
};
