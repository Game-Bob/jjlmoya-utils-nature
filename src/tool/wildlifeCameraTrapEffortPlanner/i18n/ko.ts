import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'wildlife-camera-trap-effort-planner';
const title = '야생동물 무인카메라 조사 계획표';
const description = '무인카메라 조사 노력, 카메라 일수와 이미지 확인 부담을 계획하고 개체 수를 추정하지 않는 배치 구상을 만듭니다.';
const faqData = [
  { question: '카메라 일수란 무엇인가요?', answer: '카메라 일수는 작동한 카메라 대수에 작동 일수를 곱한 값입니다. 표본 조사 노력을 나타내며 지역의 동물 수를 나타내지는 않습니다.' },
  { question: '이 계획표가 야생동물 개체 수를 계산하나요?', answer: '아닙니다. 운영 노력과 명목상 계획 면적을 계산합니다. 개체 수, 밀도와 점유율에는 불완전한 검출을 반영한 검증된 조사 설계와 통계 모형이 필요합니다.' },
  { question: '카메라 간격은 무엇을 하나요?', answer: '카메라별 명목상 정사각형 셀을 만들고 면적과 카메라 수에서 얻은 균등 격자 간격과 비교합니다. 검출 반경은 아닙니다.' },
  { question: '확인 일정은 어떻게 사용하나요?', answer: '주간 확인 지점을 방문, 배터리, 저장 공간과 이미지 검토 계획에 사용합니다. 실제 현장 프로토콜의 방문 기록으로 바꾸어 사용하세요.' },
];
const howToData = [
  { name: '조사 면적 입력', text: '카메라 배치로 조사할 면적을 입력합니다. 미터법과 야드파운드법을 바꾸어도 실제 물리 값은 유지됩니다.' },
  { name: '배치 노력 그리기', text: '카메라 수, 배치 기간과 목표 간격을 입력합니다. 그림은 상대적인 계획 격자이며 좌표나 보장된 검출 범위가 아닙니다.' },
  { name: '이미지 부담 추정', text: '카메라 한 대 하루당 예상 이벤트를 입력합니다. 카메라 일수와 곱한 뒤 주간 확인 지점에 나눕니다.' },
  { name: '현장 기록 준비', text: '카메라와 세션에 고유 식별자를 부여하고 설치 정보를 기록하며 동물이 찍히지 않은 확인도 모두 남깁니다.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: '카메라당 면적',
    labelSurveyArea: '조사 면적', labelCameraCount: '카메라 지점', labelDeploymentDays: '배치 일수', labelSpacing: '목표 지점 간격', labelTriggerRate: '카메라 한 대 하루당 예상 이벤트', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: '대', unitDays: '일', unitEventsPerDay: '이벤트/일', helpSurveyArea: '배치로 조사할 면적입니다.', helpCameraCount: '이번 조사에서 작동할 카메라입니다.', helpDeploymentDays: '설치부터 회수까지의 일수입니다.', helpSpacing: '계획용 셀 크기이며 검출 반경이 아닙니다.', helpTriggerRate: '비슷한 조사나 시험 배치에서 보수적인 값을 사용하세요.', unitSystemLabel: '측정 단위', metricLabel: '미터법', imperialLabel: '야드파운드법', presetsTitle: '현장 시작점', presetBackyard: '숲 가장자리', presetWoodland: '혼합림', presetReserve: '대형 보호구역', mapLabel: '상대적 카메라 배치 그림', mapCaption: '번호가 있는 지점을 상대적인 계획 격자에 배치합니다. 서식지 피복 지도는 아닙니다.', stationLabel: '지점', cameraDaysLabel: '카메라 일수', expectedEventsLabel: '예상 이벤트', spacingLabel: '균등 격자 간격', reviewLoadLabel: '확인당 이벤트', reviewScheduleTitle: '확인 주기', reviewScheduleText: '주간 지점으로 카메라를 설치하기 전에 이미지 부담을 확인합니다. 실제 방문 계획에 맞게 조정하세요.', reviewDayLabel: '일', reviewEventsLabel: '예상 이벤트', statusBalanced: '간격이 균형적으로 보입니다', statusSparse: '지점 간격이 넓어 보입니다', statusDense: '지점 간격이 좁아 보입니다', statusReviewHeavy: '이미지 확인 부담에 주의하세요', statusNeedsInput: '조사 계획을 완성하세요', statusNote: '이 도구는 조사 노력 계획입니다. 동물 개체 수나 종의 검출을 보장하지 않습니다.', assumptionTitle: '모형의 가정', assumptionText: '각 지점을 목표 간격에 따른 정사각형 셀로 취급합니다. 예상 이벤트는 카메라와 날짜에 따라 발생률이 일정하다고 가정합니다.', limitationTitle: '현장 한계', limitationText: '기하학적 균일성보다 대상 종과 질문에 따라 지점을 선택하세요. 식별자, 날짜, 방향, 높이, 서식지와 빈 확인을 기록하세요.',
  },
  seo: [
    { type: 'title', text: '무인카메라 조사 노력을 계획하는 방법', level: 2 },
    { type: 'paragraph', html: '야생동물 무인카메라 조사는 설치 전에 두 가지를 확인해야 합니다. 배치가 얼마나 큰 조사 노력인지, 예상 이미지 흐름을 저장하고 검토하고 기록할 수 있는지입니다. 이 계획표는 카메라 일수, 예상 이벤트, 상대적 지점 그림과 확인 지점으로 이를 정리합니다.' },
    { type: 'title', text: '카메라 일수로 조사 노력을 표현하기', level: 3 },
    { type: 'paragraph', html: '카메라 일수는 <code>카메라 지점 × 배치 일수</code>입니다. 카메라 12대를 28일 작동하면 336 카메라 일수입니다. 캠페인 비교에는 유용하지만 개체 수 추정이 아니며 고장, 서식지 차이와 동물 행동을 보정하지 않습니다.' },
    { type: 'list', items: ['<strong>카메라 지점:</strong> 캠페인에서 작동하는 장비 수입니다.', '<strong>배치 일수:</strong> 설치부터 회수까지의 예정 기간입니다.', '<strong>발생률:</strong> 연속 촬영 사진 수가 아니라 카메라 한 대 하루당 이벤트를 사용합니다.', '<strong>확인 지점:</strong> 저장 공간, 배터리, 방문과 이미지 검토를 계획합니다.'] },
    { type: 'title', text: '현장 그림을 계획 보조 도구로 읽기', level: 3 },
    { type: 'paragraph', html: '그림은 면적, 카메라 수와 목표 간격으로 상대적인 배치를 보여 줍니다. 명목상 면적은 지점 수에 목표 간격의 제곱을 곱한 값입니다. 센서의 검출 면적이 아니며 지형, 식생, 길, 방향, 높이와 행동에 따라 검출 확률이 달라집니다.' },
    { type: 'title', text: '배치 전에 기록 방식을 준비하기', level: 3 },
    { type: 'paragraph', html: '대상 종과 조사 질문을 먼저 정하고 카메라와 세션에 안정적인 식별자를 부여하세요. 날짜, 위치, 높이, 방향, 서식지, 설정과 작동 상태를 설치와 확인 때 기록하세요. 아무것도 찍히지 않은 확인도 조사 과정의 기록입니다.' },
    { type: 'tip', title: '조사 노력을 개체 수로 바꾸지 마세요', html: '무인카메라는 불완전한 검출의 영향을 받습니다. 운영과 이미지 검토 예산에는 이 계획을 사용하고 점유율, 개체 수, 밀도와 변화 분석에는 검증된 생태학적 설계를 사용하세요.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
