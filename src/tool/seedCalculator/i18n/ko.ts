import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'seed-calculator';
const title = '주간 거리 및 파종기 보정 계산기';
const description =
  '농업인을 위한 정밀 도구입니다. 목표 재식 밀도와 이랑 너비를 바탕으로 이상적인 종자 사이의 거리를 계산하고, 다양한 작업 속도에서 파종기에 가해지는 부하를 분석하세요.';

const faqData = [
  {
    question: '주간 거리(종자 사이의 거리)는 어떻게 계산되나요?',
    answer:
      '1헥타르(10,000 m²)를 이랑 너비로 나누어 총 파종 선형 미터를 구합니다. 그런 다음 목표 재식 밀도를 해당 미터로 나누어 선형 미터당 몇 개의 종자를 배치할지 결정합니다.',
  },
  {
    question: '헥타르당 목표 재식 밀도는 얼마인가요?',
    answer:
      '10,000제곱미터당 이상적인 식물 수입니다. 작물 유형, 토양 비옥도 및 수분 가용성에 따라 다릅니다. 예를 들어, 관개 옥수수는 일반적으로 헥타르당 85,000~95,000개의 종자가 필요합니다.',
  },
  {
    question: '발아율이 계산에 어떤 영향을 미치나요?',
    answer:
      '뿌린 종자가 모두 싹을 틔우는 것은 아닙니다. 종자의 발아율이 95%라면, 원하는 최종 식물체 수를 확보하기 위해 파종량을 5% 늘려야 합니다.',
  },
  {
    question: '파종기 보정(Calibration)이 왜 그렇게 중요한가요?',
    answer:
      '파종 밀도가 너무 높으면 식물 간의 경쟁이 발생하고 알곡이 작아집니다. 밀도가 너무 낮으면 공간과 수확 잠재력을 낭비하게 됩니다. 정밀함이 수익성의 핵심입니다.',
  },
];

const howToData = [
  {
    name: '목표 재식 밀도 입력',
    text: '품종별 기술 권장 사항에 따라 헥타르당 원하는 종자 또는 식물체 수를 정의합니다.',
  },
  {
    name: '이랑 너비 설정',
    text: '파종기의 디스크나 오프너 사이의 거리를 측정합니다 (일반적으로 50, 70 또는 75cm).',
  },
  {
    name: '발아율 조정',
    text: '포장에서의 자연적인 손실을 보상하기 위해 예상 출현율을 입력합니다.',
  },
  {
    name: '기계 설정값 획득',
    text: '미터당 종자 수 또는 종자 사이의 cm 값을 사용하여 기계의 스프로킷이나 모니터를 조정합니다.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '과학적 참고 문헌',
  bibliography: [
    {
      name: 'KWS 스페인',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: '스페인 농림수산부 (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara 스페인',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '정밀 파종 기술 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '파종기 변속기를 조정하려면 이랑의 선형 미터당 몇 개의 종자가 떨어져야 하는지 정확히 알아야 합니다. 기계 매뉴얼에는 일반적으로 개략적인 표가 나와 있지만, <strong>구동 바퀴의 슬립</strong>이나 종자 크기와 같은 요소가 실제 환경을 변화시킬 수 있습니다. 이 도구는 완벽한 이론적 가치인 <strong>목표 주간 거리</strong>를 제공합니다.',
    },
    {
      type: 'tip',
      title: '수학적 공식',
      html: '<p>농학자나 관심 있는 분들을 위해 계산의 기초를 설명합니다:</p><pre>주간 거리 (cm) = 10,000,000 / (재식 밀도 × 이랑 너비)</pre><ul><li><strong>10,000,000:</strong> 헥타르를 제곱센티미터로 변환하는 계수.</li><li><strong>재식 밀도:</strong> 헥타르당 종자 수.</li><li><strong>이랑 너비:</strong> 이랑 사이의 거리 (cm).</li></ul>',
    },
    {
      type: 'title',
      text: '왜 이 계산기를 사용해야 하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '들판에서 직접 측정했을 때 주간 거리가 목표보다 가깝거나 멀다면 기계가 <strong>제대로 보정되지 않은 것</strong>입니다. 이 도구는 또한 다양한 작업 속도에서 종자 디스크의 배출 빈도(Hz)를 분석하여 결주나 중복 파종의 위험을 경고합니다.',
    },
    {
      type: 'title',
      text: '고품질 파종의 핵심',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>단립 정밀 파종(Singulation):</strong> 중복이나 결주를 피하세요. 99%의 단립 배출율은 식물 간의 균형 잡힌 경쟁을 유지하게 합니다.',
        '<strong>균일한 간격:</strong> 변동 계수는 0.3 미만이어야 합니다. 5cm 이상의 편차는 수확 잠재량을 감소시킵니다.',
        '<strong>깊이:</strong> 균일한 출현에 중요합니다. 토양 수분 상태에 따라 진압륜(press wheel)의 압력을 조정하세요.',
      ],
    },
    {
      type: 'title',
      text: '현장 확인 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000 헥타르법:</strong> 1/1000 헥타르를 나타내는 이랑의 특정 거리를 측정합니다. 종자 수를 세고 1,000을 곱합니다. 이랑 너비가 70cm일 경우 거리는 14.28m이며, 52.5cm일 경우 19.05m입니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>구동륜법:</strong> 기계를 들어 올리고 구동 바퀴에 표시를 한 뒤 1/100 헥타르에 해당하는 만큼 회전시킵니다. 종자를 양동이에 모아 무게를 재거나 개수를 세어 보정값을 확인합니다.',
    },
    {
      type: 'title',
      text: '작물별 참조표',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>옥수수:</strong> 헥타르당 60,000~95,000개. 현대 하이브리드 품종은 밀도 반응이 높습니다.',
        '<strong>대두:</strong> 헥타르당 250,000~450,000개. 낮은 밀도에서도 높은 보상 능력을 가집니다.',
        '<strong>해바라기:</strong> 헥타르당 40,000~55,000개. 밀도에 매우 민감하며, 과밀 시 화반의 지름이 작아집니다.',
        '<strong>유채:</strong> 헥타르당 300,000~600,000개. 종자가 매우 작아 토양과의 밀착이 중요합니다.',
      ],
    },
  ],
  ui: {
    headCrop: '작물 선택',
    headParams: '매개변수',
    headAnalysis: '실시간 분석',
    labelPopulation: '재식 밀도',
    unitSeedsHa: '종자/Ha',
    labelRowWidth: '이랑 너비',
    unitCm: '센티미터',
    labelWorkSpeed: '작업 속도',
    unitKmh: 'km/h',
    labelCalibration: '플레이트 보정',
    labelSpacingDesc: '이랑 내 각 종자 간의 정확한 거리.',
    labelMachineStress: '기계 부하',
    labelSeedsM: '종자 / 미터',
    labelPlantsM2: '식물 / m²',
    labelSpeedMs: '미터 / 초',
    labelHaBag: 'Ha / 포대 (8만립 기준)',
    statusStandby: '대기 중',
    statusVolumetric: '체적 유량',
    statusOptimal: '최적 유량',
    statusHighSpeed: '고속 작업',
    statusPlateLimiter: '플레이트 한계',
    cropCorn: '알곡 옥수수',
    cropSilage: '사일리지 옥수수',
    cropSunflower: '해바라기',
    cropSorghum: '수수',
    cropSoy: '대두',
    cropBeet: '사탕무',
    cropRapeseed: '유채',
    noteCorn: '높은 정밀도 요구됨',
    noteSilage: '중상 밀도',
    noteSunflower: '속도에 민감함',
    noteSorghum: '연속 흐름 또는 디스크',
    noteSoy: '높은 밀도',
    noteBeet: '얕은 파종이 중요함',
    noteRapeseed: '매우 작은 종자',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '과학적 참고 문헌',
  },
};
