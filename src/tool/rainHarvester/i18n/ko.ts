import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'rainwater-calculator';
const title = '빗물 수집 계산기';
const description = '지붕에서 수집할 수 있는 빗물의 양을 계산하고 적절한 저장 탱크 용량을 산정해 보세요.';

const faqData = [
  {
    question: '지붕에서 실제로 얼마나 많은 물을 모을 수 있나요?',
    answer: '일반적인 규칙은 지붕 면적 1제곱미터당 강수량 1밀리미터당 약 1리터의 물을 모을 수 있다는 것입니다. 다만 증발이나 여과 과정에서 발생하는 손실을 "유출 계수"로 조정해야 합니다.',
  },
  {
    question: '유출 계수란 무엇인가요?',
    answer: '지붕 재질에 따라 물이 얼마나 손실되는지를 나타내는 백분율입니다. 금속이나 기와 지붕은 효율이 매우 높지만(0.85-0.95), 자갈이나 흙 지붕은 효율이 훨씬 낮습니다(0.1-0.3).',
  },
  {
    question: '저장 탱크의 크기는 어떻게 결정하나요?',
    answer: '한 달 동안 예상되는 최대 강수량을 계산하고 이를 예상 월간 소비량과 비교해야 합니다. 탱크가 너무 작으면 폭우 시 넘쳐흐르고, 너무 크면 불필요한 비용이 발생합니다.',
  },
  {
    question: '수집된 빗물을 마셔도 안전한가요?',
    answer: '직접 마시는 것은 안전하지 않습니다. 빗물에는 먼지, 새의 배설물, 공기 중의 입자가 포함되어 있습니다. 식용으로 사용하려면 침전 필터, 활성탄, UV 광선 또는 염소를 이용한 소독 과정을 거쳐야 합니다.',
  },
];

const howToData = [
  {
    name: '수평 면적 측정하기',
    text: '지붕 바닥의 가로와 세로 길이를 측정합니다(경사면의 넓이가 아니라 바닥에 투영되는 넓이 기준).',
  },
  {
    name: '지역 강수량 확인하기',
    text: '기상청 홈페이지 등을 통해 해당 지역의 연간 또는 월간 평균 강수량(mm)을 확인합니다.',
  },
  {
    name: '재질 효율 적용하기',
    text: '계산기에서 지붕 재질을 선택하여 흡수나 열로 인해 손실될 물의 양을 차감합니다.',
  },
  {
    name: '필요한 용량 계산하기',
    text: '연간 리터 결과를 바탕으로 가뭄 시기에 대비해 전체 수확량의 최소 20-30%를 저장할 수 있는 탱크를 선택합니다.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: '지붕 설정',
    headResults: '수집 잠재량',
    labelArea: '지붕 면적',
    labelRainfall: '연간 강수량',
    labelMaterial: '지붕 재질',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: '리터',
    helpRainfall: '잘 모르시나요? 구글에 "(해당 도시명) 연평균 강수량"을 검색해 보세요.',
    efficiencyTitle: '효율 계수',
    efficiencyNote: '필터 및 증발로 인한 10%의 손실이 적용됩니다.',
    resultTitle: '연간 수집 잠재량',
    equivalenciesTitle: '실질적 활용 예시',
    labelFlushes: '변기 물 내림 횟수',
    labelShowers: '샤워 횟수(10분 기준)',
    labelGarden: '정원 물 주기',
    gardenArea: '(50m²)',
    materialMetal: '금속 / 유약 기와',
    materialClay: '전통 기와 / 점토',
    materialConcrete: '콘크리트 / 아스팔트',
    materialGravel: '자갈 / 녹색 지붕',
  },
  seo: [
    {
      type: 'title',
      text: '빗물 수집: 자급자족과 지속 가능성',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 주택 소유자들이 자신의 지붕이 가진 잠재력을 알지 못합니다. 표준 지붕은 매년 수천 리터의 물을 무료로 모을 수 있습니다. 이 도구는 그 잠재력을 수치화하여 여러분이 정확히 얼마나 많은 물을 "수확"할 수 있는지 계산하고 저장에 필요한 이상적인 탱크 크기를 결정할 수 있게 해줍니다.',
    },
    {
      type: 'title',
      text: '계산 로직',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '빗물 수집을 위한 기본 공식은 간단하지만 강력합니다.',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">용량 = 면적 × 강수량 × 유출 계수 × 필터 효율</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>면적:</strong> 지붕 투영 면적(가로 × 세로).',
        '<strong>강수량:</strong> 밀리미터 단위의 강우량.',
        '<strong>계수:</strong> 지붕에서 흡수 등으로 손실되는 물의 양.',
        '<strong>효율:</strong> 탱크 도달 전 필터에서 발생하는 손실(약 10%).',
      ],
    },
    {
      type: 'title',
      text: '왜 빗물을 수집하나요?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>절약:</strong> 수도 요금을 크게 줄일 수 있습니다.',
        '<strong>원예:</strong> 식물은 염소나 석회가 없는 물을 좋아합니다.',
        '<strong>회복력:</strong> 단수 시 비상용 물을 확보할 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '탱크 용량 산정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '가장 흔한 실수는 예산에만 맞춰 탱크를 사는 것입니다. 너무 작으면 넘쳐서 물을 낭비하게 되고, 너무 크면 불필요한 비용을 쓰게 됩니다. 일반적인 규칙은 해당 지역 평균 강수량의 <strong>3개월분</strong>을 저장할 수 있는 용량을 확보하여 건기를 대비하는 것입니다.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
