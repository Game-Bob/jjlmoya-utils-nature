import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'urban-garden-rainwater-and-soil-planner';
const title = '도시 텃밭 흙과 빗물 계획 도구';
const description = '높은 화단과 화분에 필요한 배양토 양과 작은 도시 텃밭의 빗물 수집량을 계산합니다.';
const faqData = [
  { question: '높은 화단에는 흙이 얼마나 필요한가요?', answer: '재배 면적과 흙의 깊이를 입력하세요. 두 값을 곱해 리터로 변환하므로 흙이나 퇴비의 주문량을 가늠할 수 있습니다.' },
  { question: '텃밭의 빗물 수집량은 어떻게 계산하나요?', answer: '집수 면적과 강수량을 입력합니다. 표면 유출 85퍼센트와 수집 효율 90퍼센트를 적용한 보수적인 계획용 추정치를 보여줍니다.' },
  { question: '발코니 화분에도 사용할 수 있나요?', answer: '네. 재배 면적에는 화분이나 화단의 면적을, 깊이에는 흙의 깊이를, 집수 면적에는 지붕이나 차양 면적을 입력하세요.' },
  { question: '모은 빗물은 먹는 작물에 안전한가요?', answer: '자동으로 안전하지는 않습니다. 집수면과 용기를 확인하고 적절한 여과와 배수를 마련한 뒤 지역 안내를 따르세요.' },
];
const howToData = [
  { name: '재배 공간 측정', text: '흙을 채울 화단, 발코니 또는 용기의 면적을 입력합니다.' },
  { name: '흙 깊이 선택', text: '침하될 부분을 고려해 계획한 깊이를 센티미터로 입력합니다.' },
  { name: '집수 면적 추가', text: '용기로 물을 보내는 지붕, 차양 또는 다른 면적을 입력합니다.' },
  { name: '강수량 시험', text: '강수량을 밀리미터로 입력하고 텃밭 크기와 모인 물을 비교합니다.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: '작은 텃밭을 살아 있는 층으로 측정합니다', headInputs: '텃밭 조건 설정', headScene: '풍경 읽기', labelGardenArea: '재배 면적', labelDepth: '배양토 깊이', labelCollectionArea: '집수 면적', labelRainfall: '강수량', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: '화단, 발코니 또는 용기의 바닥 면적입니다.', helpDepth: '채우려는 흙의 층 깊이입니다.', helpCollectionArea: '물을 용기로 보내는 면적입니다.', helpRainfall: '최근 소나기나 지역 계획 강우량을 시험해 보세요.', presetsTitle: '형태로 시작하기', presetBalcony: '발코니 화단', presetRaisedBed: '높은 화단', presetCommunity: '공동 텃밭', labelSoilNeeded: '필요한 배양토', labelWaterCaptured: '모이는 빗물', labelGardenDepth: '이 텃밭 전체에 펼치면', labelWateringArea: '물 10 mm 기준', sceneCatchment: '집수면', sceneGardenBed: '재배 공간', sceneSoil: '흙 층', sceneWater: '모인 물', statusBalanced: '계획에 유용한 조합', statusLightCapture: '강수량이 적은 경우', statusDeepBed: '깊은 흙 단면', statusNoRain: '강수량을 기다리는 중', statusNote: '재료의 양을 정하고 조건을 비교하기 위한 추정치입니다. 관수 처방은 아닙니다.', assumptionTitle: '계획 가정', assumptionText: '강수량의 85퍼센트를 유출로, 수집 손실 후 90퍼센트를 남는 물로 계산합니다. 1제곱미터에 1리터를 펼치면 1 mm입니다.', limitationTitle: '텃밭을 안전하게 사용하기', limitationText: '배수를 마련하고 오염된 집수면을 피하며 먹는 작물에 사용하기 전에 지역 규정을 확인하세요.' },
  seo: [
    { type: 'title', text: '도시 텃밭의 흙과 빗물 수집량 계산하기', level: 2 },
    { type: 'paragraph', html: '높은 화단, 발코니, 공동 텃밭에서는 필요한 배양토의 리터 수와 가까운 지붕에서 모을 수 있는 빗물의 양을 함께 알아야 합니다. 이 도구는 두 추정치를 한 화면에서 비교합니다.' },
    { type: 'title', text: '배양토 부피 공식', level: 3 },
    { type: 'paragraph', html: '공식은 <code>면적 m² × 깊이 cm × 10 = 배양토 L</code>입니다. 12 m² 공간에 30 cm 깊이로 채우면 침하와 배수층을 고려하기 전 3,600 L입니다.' },
    { type: 'list', items: ['<strong>재배 면적:</strong> 화단, 발코니 또는 용기의 바닥.', '<strong>배양토 깊이:</strong> 채우려는 층의 높이.', '<strong>집수 면적:</strong> 지붕, 차양 또는 물이 들어오는 면적.', '<strong>강수량:</strong> 시험할 비의 양을 밀리미터로 입력.'] },
    { type: 'title', text: '텃밭 빗물 수집량 추정', level: 3 },
    { type: 'paragraph', html: '물 계산은 <code>집수 면적 × 강수량</code>에서 시작해 유출 85퍼센트와 수집 후 90퍼센트를 적용합니다. 실제 사용 가능량을 보장하지 않고 조건을 비교하는 숫자입니다.' },
    { type: 'title', text: '오프라인에서 조건 비교', level: 3 },
    { type: 'paragraph', html: '발코니, 높은 화단, 공동 텃밭 프리셋을 시험한 다음 실제 측정값으로 바꾸세요. 주소, 지도, 일기예보, 개인 데이터는 브라우저 밖으로 나가지 않습니다.' },
    { type: 'tip', title: '중요한 제한', html: '배수, 수질, 증발, 작물 선택과 지역 규정에는 사람의 판단이 필요합니다. 오염된 지붕이나 용기는 먹는 작물에 바로 사용할 수 없습니다.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
