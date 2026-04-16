import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digital-carbon-footprint-calculator';
const title = '디지털 탄소 발자국 계산기';
const description = '웹 페이지의 환경적 영향을 분석합니다. 방문당 에너지 소비량과 CO₂ 배출량을 추정합니다.';

const faqData = [
  {
    question: '웹사이트의 탄소 발자국이란 무엇인가요?',
    answer: '웹 페이지를 로드하고 렌더링하기 위해 서버, 전송 네트워크 및 사용자 장치에서 소비되는 에너지의 결과로 대기 중에 배출되는 이산화탄소(CO₂) 등 온실가스의 양을 말합니다.',
  },
  {
    question: '웹사이트의 영향은 어떻게 측정되나요?',
    answer: '일반적으로 방문당 CO₂ 환산 그램(gCO₂e)으로 측정됩니다. 효율적인 웹사이트는 0.2g 미만의 CO₂를 배출하는 반면, 최적화되지 않은 페이지는 로드당 2g 또는 3g을 초과할 수 있습니다.',
  },
  {
    question: '인터넷이 왜 환경을 오염시키나요?',
    answer: '데이터 센터, 해저 케이블, WiFi 공유기, 스마트폰 등 필요한 모든 인프라가 전기로 작동하며, 전 세계의 많은 지역에서 이 전기는 여전히 석탄이나 가스를 태워 생성되기 때문입니다.',
  },
  {
    question: '웹사이트의 CO₂ 배출을 줄이려면 어떻게 해야 하나요?',
    answer: '가장 효과적인 방법은 페이지 무게를 줄이는 것입니다. 이미지 최적화(WebP), CSS 및 JS 파일 압축, 지연 로딩(lazy loading) 사용, 재생 가능 에너지를 사용하는 호스팅 업체 선택 등이 주요 방법입니다.',
  },
];

const howToData = [
  {
    name: 'URL 입력하기',
    text: '분석하려는 웹 페이지의 주소를 입력창에 입력합니다.',
  },
  {
    name: '분석 시작하기',
    text: '분석 버튼을 클릭하면 도구가 페이지 리소스의 무게를 추정합니다.',
  },
  {
    name: '등급 확인하기',
    text: '분석된 웹사이트의 에너지 효율에 따라 A+에서 F까지의 등급을 받게 됩니다.',
  },
  {
    name: '개선 사항 적용하기',
    text: '맞춤형 팁 목록을 활용하여 사이트 무게와 환경적 영향을 줄여 보세요.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL 분석기',
    headResults: '영향 분석 결과',
    headTips: '최적화 팁',
    labelUrl: '페이지 URL',
    btnAnalyze: '웹사이트 분석하기',
    btnAnalyzing: '분석 중...',
    placeholderUrl: 'https://example.kr',
    errorInvalidUrl: '유효한 URL을 입력해 주세요.',
    errorFetchFailed: '웹사이트를 분석할 수 없습니다. 다른 URL로 시도해 보세요.',
    
    resultTitle: '디지털 탄소 발자국',
    resultSubtitle: '추정 페이지 효율성',
    co2PerVisit: '방문당 CO₂',
    energyPerVisit: '소비한 에너지',
    co2Annual: '연간 CO₂ (10만 회 방문 기준)',
    impactTitle: '실제 연간 영향',
    impactTrees: '필요한 나무 수',
    impactKm: '자동차 주행 거리 환산(약 km)',
    treesLabel: '그루',
    kmLabel: '킬로미터',
    
    ratingExcellent: '훌륭합니다. 이 페이지는 글로벌 평균에 비해 매우 적은 에너지를 소비합니다.',
    ratingVeryGood: '효율성이 매우 좋습니다. 페이지가 잘 최적화되어 있으며 영향이 미미합니다.',
    ratingGood: '수용 가능한 효율성입니다. 개선의 여지가 있지만 평균보다는 낫습니다.',
    ratingAverage: '평균적입니다. 현재 웹 환경에서 예상되는 수준의 에너지를 소비합니다.',
    ratingPoor: '평균 이상입니다. 이미지, 스크립트 및 폰트 최적화를 고려해 보세요.',
    ratingVeryPoor: '영향이 큽니다. 페이지 무게가 상당하며 줄이는 것이 좋습니다.',
    ratingCritical: '영향이 매우 큽니다. 페이지 크기를 줄일 수 있는 기회가 많습니다.',
    
    tipImages: '이미지를 WebP 또는 AVIF로 변환하여 용량을 최대 70%까지 줄이세요.',
    tipCompression: '서버에서 Brotli 또는 GZIP을 활성화하여 리소스를 압축하세요.',
    tipLazyLoading: '뷰포트 밖의 이미지와 영상에 지연 로딩을 사용하세요.',
    tipHosting: '재생 가능 에너지를 사용하는 호스팅(Cloudflare, Netlify, Vercel 등)을 선택하세요.',
    tipThirdParty: '불필요한 분석 스크립트와 타사 위젯을 제거하세요.',
    tipFonts: '실제로 사용하는 폰트 굵기만 로드하세요.',
    tipCache: 'HTTP 캐시 헤더를 구성하여 재다운로드를 방지하세요.',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '웹 지속 가능성 참고 문헌',
  seo: [
    {
      type: 'title',
      text: '디지털 탄소 발자국 계산기: 내 웹사이트가 생성하는 CO₂ 양 확인하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 웹 페이지의 실제 환경적 영향을 확인해 보세요. 용량을 분석하고 방문당 CO₂ 배출량을 추정하며, 프로젝트의 디지털 오염을 줄이는 방법을 배울 수 있습니다.',
    },
    {
      type: 'title',
      text: '웹사이트의 디지털 탄소 발자국이란?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '웹 페이지를 열 때마다 여러분의 장치, 공유기, 해저 케이블, 그리고 지구 반대편의 서버는 전기를 소비합니다. 그 전기는 여전히 산당량 화석 연료를 태워 생성됩니다. 그 결과, <strong>방문할 때마다 실제로 일정량의 CO₂가 대기 중으로 배출</strong>됩니다.',
    },
    {
      type: 'paragraph',
      html: '웹사이트의 <strong>디지털 탄소 발자국</strong>은 방문당 CO₂ 환산 그램(gCO₂e)으로 측정됩니다. 평균적인 웹사이트는 로드당 약 0.5g의 CO₂를 생성합니다. 미미해 보일 수 있지만, 월간 방문자가 10만 명인 사이트는 연간 600kg 이상의 CO₂를 배출할 수 있으며, 이는 가솔린 차로 3,000km 이상을 주행하는 것과 같습니다.',
    },
    {
      type: 'title',
      text: '웹사이트의 CO₂ 배출량은 어떻게 계산되나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '사용된 계산 모델은 에너지 소비를 네 가지 주요 부문으로 나누는 <strong>Sustainable Web Design Model</strong> 표준을 기반으로 합니다.',
    },
    {
      type: 'card',
      title: '데이터 전송',
      html: '페이지의 총 용량이 전송되는 데이터 양을 결정합니다. 표준 모델은 네트워크 인프라에 대해 <code>0.81 kWh/GB</code>를 적용합니다.',
    },
    {
      type: 'card',
      title: '사용자 장치',
      html: '페이지를 수신하는 컴퓨터나 모바일도 에너지를 소비합니다. 처리된 데이터당 <code>0.52 kWh/GB</code>로 추정됩니다.',
    },
    {
      type: 'card',
      title: '탄소 집약도',
      html: '에너지 소비를 실제 탄소 배출량으로 변환하기 위해 글로벌 기준값인 <code>442 gCO₂/kWh</code>를 사용합니다.',
    },
    {
      type: 'card',
      title: '캐싱 요소',
      html: '사용자의 25%가 이미 리소스를 캐시하고 있다고 가정하여 <code>0.75</code>의 계수를 적용합니다.',
    },
    {
      type: 'title',
      text: '효율성 등급의 의미',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ 및 A:</strong> 0.2g 미만의 CO₂. 매우 가볍고 최적화된 사이트입니다.',
        '<strong>B:</strong> 0.2g~0.5g 사이. 글로벌 평균보다 낮습니다.',
        '<strong>C:</strong> 0.5g~1g 사이. 현재 웹 환경의 평균 수준입니다.',
        '<strong>D 및 E:</strong> 1g~4g 사이. 영향이 큰 무거운 페이지입니다.',
        '<strong>F:</strong> 방문당 4g 이상. 환경적 영향이 매우 큽니다.',
      ],
    },
    {
      type: 'title',
      text: '웹사이트 탄소 발자국을 줄이는 방법',
      level: 2,
    },
    {
      type: 'card',
      title: '이미지 최적화',
      html: '<strong>WebP 또는 AVIF</strong> 형식을 사용하여 눈에 보이는 품질 손실 없이 용량을 최대 80%까지 줄이세요.',
    },
    {
      type: 'card',
      title: '서버 압축',
      html: '<strong>Brotli 또는 GZIP</strong>을 활성화하면 텍스트 파일 용량을 최대 70%까지 줄일 수 있습니다.',
    },
    {
      type: 'card',
      title: '지속 가능한 호스팅',
      html: '<strong>인증된 재생 가능 에너지</strong>를 사용하는 업체를 선택하면 영향을 거의 100% 줄일 수 있습니다.',
    },
    {
      type: 'card',
      title: '캐시 및 CDN',
      html: '불필요한 재다운로드를 방지하기 위해 <strong>캐시 헤더 기간을 길게</strong> 설정하세요.',
    },
    {
      type: 'title',
      text: '인터넷이 기후에 미치는 실제 영향',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '인터넷은 <strong>전 세계 CO₂ 배출량의 2%~4%</strong>를 차지하며, 이는 항공 산업과 맞먹는 수치입니다. 단 몇 킬로바이트라도 줄이는 것은 단순히 웹사이트를 빠르게 만드는 것이 아니라, 디지털 오염을 실질적으로 줄이는 일입니다.',
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
