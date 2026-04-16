import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'cricket-thermometer';
const title = '귀뚜라미 온도계 – 돌베어 법칙 온도 계산기';
const description =
  '온도계가 없으신가요? 귀뚜라미 소리에 귀를 기울여 보세요. 돌베어 법칙 계산기를 사용하여 귀뚜라미 울음소리 횟수로 정확한 온도를 계산할 수 있습니다.';

const faqData = [
  {
    question: '돌베어 법칙(Dolbear\'s Law)이란 무엇인가요?',
    answer:
      '1897년 에이머스 돌베어(Amos Dolbear)가 정식화한 것으로, 귀뚜라미의 울음소리 빈도와 주변 기온 사이에 선형 상관관계가 있음을 발견한 과학적 관찰 결과입니다.',
  },
  {
    question: '왜 더울 때 귀뚜라미가 더 빨리 우나요?',
    answer:
      '귀뚜라미는 변온 동물(외온 동물)입니다. 대사 과정과 근육 수축 속도가 외부 온도에 의존하기 때문에, 날씨가 따뜻할수록 소리를 빠르게 내기 위한 에너지가 더 많아집니다.',
  },
  {
    question: '이 측정 방식은 정확한가요?',
    answer:
      '스노우 트리 귀뚜라미(Oecanthus fultoni)와 같은 종의 경우 놀라울 정도로 정확하며, 올바르게 계산했을 때 오차 범위는 약 0.5°C입니다. 다만 습도나 바람과 같은 요인이 결과에 영향을 줄 수 있습니다.',
  },
  {
    question: '계산을 위해 어떤 귀뚜라미를 활용해야 하나요?',
    answer:
      '원래 공식은 스노우 트리 귀뚜라미를 기준으로 합니다. 일반적인 현장 귀뚜라미의 경우 관계는 유사하지만 울음 속도가 약간 더 느린 경향이 있습니다.',
  },
];

const howToData = [
  {
    name: '한 마리의 귀뚜라미 찾기',
    text: '밤에 리듬이 섞이지 않도록 한 마리의 귀뚜라미 소리만 명확하게 들리는 조용한 장소를 찾습니다.',
  },
  {
    name: '15초 동안 울음소리 횟수 세기',
    text: '스톱워치를 사용하여 곤충이 정확히 15초 동안 몇 번 소리를 내는지 세어 봅니다.',
  },
  {
    name: '값 입력하기',
    text: '울음소리 리듬에 맞춰 몇 초 동안 TAP 버튼을 두드리면 계산기가 자동으로 BPM을 계산합니다.',
  },
  {
    name: '온도 확인하기',
    text: '시스템이 T(°C) = 10 + (N - 40) / 7 공식을 적용하여 섭씨 온도의 추정치를 제공합니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '과학적 참고 문헌',
  bibliography: [
    {
      name: 'The American Naturalist - The Cricket as a Thermometer',
      url: 'https://www.jstor.org/stable/2453256',
    },
    {
      name: 'Wikipedia - Dolbear\'s Law',
      url: 'https://en.wikipedia.org/wiki/Dolbear%27s_law',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '완벽 가이드: 돌베어 법칙을 사용하여 온도를 계산하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '자연의 소리를 듣는 것만으로도 정확한 온도를 알 수 있다는 사실을 알고 계셨나요? 1897년 물리학자 에이머스 돌베어는 귀뚜라미 울음소리 빈도와 주변 기온 사이에 정밀한 수학적 관계가 있음을 발견했습니다. 이 도구는 그 발견을 디지털화하여 여러분의 휴대폰을 천연 온도계로 바꾸어 줍니다.',
    },
    {
      type: 'tip',
      title: '귀뚜라미는 왜 노래하나요?',
      html: '<p>귀뚜라미의 "노래" 또는 <strong>마찰 발음</strong>은 사실 구애의 신호입니다. 수컷은 날개(다리가 아님)를 서로 비벼서 이 소리를 만듭니다. 흥미롭게도 귀뚜라미는 변온 동물(외온 동물)이기에, 이 비비는 속도는 공기의 열 에너지에 직접적으로 의존하게 됩니다.</p>',
    },
    {
      type: 'title',
      text: '과학: 외온성과 대사',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '체온을 일정하게 유지하는 포유류와 달리 곤충은 외부 열에 의존합니다. 이들의 생화학적 반응은 <strong>아레니우스 방정식(Arrhenius Equation)</strong>을 따릅니다. 즉, 열이 더 많을수록 반응이 더 빨라집니다.',
    },
    {
      type: 'paragraph',
      html: '이것은 귀뚜라미의 근육이 수축하고 날개를 비비기 위해 효소 반응이 필요함을 의미합니다. 날씨가 추우면 이러한 반응이 느려지고 울음소리가 둔해집니다. 날씨가 따뜻하면 대사가 빨라지고 노래는 광적인 떨림으로 변합니다.',
    },
    {
      type: 'title',
      text: '돌베어 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '종에 따라 차이가 있을 수 있지만, 가장 유명한 공식은 스노우 트리 귀뚜라미(<em>Oecanthus fultoni</em>)를 위한 공식입니다. 섭씨 온도를 구하는 방법은 다음과 같습니다.',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nN = 분당 울음소리 횟수',
      ariaLabel: '귀뚜라미 울음소리로 온도를 계산하는 돌베어 법칙',
    },
    {
      type: 'paragraph',
      html: '저희 도구는 이 과정을 자동으로 수행합니다. 사용자가 탭하는 간격을 측정하고 분당 울음소리 횟수(BPM)를 계산하여 즉시 공식을 적용합니다.',
    },
    {
      type: 'title',
      text: '흥미로운 사실들',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>사랑의 온도계:</strong> 일부 이론에 따르면 암컷은 현재 온도에 맞는 "정확한" 빈도로 노래하는 수컷을 선호합니다. 이는 수컷이 건강하고 신진대사가 활발하다는 것을 나타내기 때문입니다.',
        '<strong>추위 한계:</strong> 10°C(50°F) 미만에서는 대부분의 귀뚜라미가 노래를 멈춥니다. 대사 속도가 근육 활동을 유지하기에 너무 느려지기 때문입니다.',
        '<strong>동기화:</strong> 따뜻한 밤에는 수천 마리의 귀뚜라미가 울음소리를 동기화하여 인상적인 "파동" 음향 효과를 만들어낼 수 있습니다.',
      ],
    },
    {
      type: 'tip',
      title: '정확도 참고',
      html: '<p>정확도는 귀뚜라미 종에 따라 다릅니다. 이 도구는 일반적인 현장 귀뚜라미와 트리 귀뚜라미에 맞게 보정되었습니다. 습도나 바람과 같은 요인으로 인해 결과가 ±0.5°C 정도 차이 날 수 있습니다.</p>',
    },
  ],
  ui: {
    labelWaiting: '대기 중...',
    labelTapping: '계속 두드리세요...',
    tapInstruction: '울음소리가 들릴 때마다',
    btnReset: '초기화',
    btnSoundOn: '소리: 켜짐',
    btnSoundOff: '소리: 꺼짐',
    unitChirpsMin: '회/분',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '과학적 참고 문헌',
  },
};
