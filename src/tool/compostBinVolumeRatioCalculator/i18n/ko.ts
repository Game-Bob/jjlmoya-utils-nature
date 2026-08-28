import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "compost-bin-volume-and-browns-greens-ratio-calculator";
const title = "퇴비 용기 용량 및 갈색 녹색 재료 비율 계산기";
const description =
  "직육면체 또는 원통형 퇴비 용기의 내부 용량을 계산하고 탄소 재료(갈색), 질소 재료(녹색), 습도, 공기 순환의 적절한 균형을 확인하세요.";

const faq = [
  {
    question: "퇴비 용기 용량은 어떻게 계산하나요?",
    answer:
      "용기 내부 치수를 측정합니다. 직육면체는 가로×세로×높이를 곱하고, 원통형은 원주율×반지름²×높이를 계산하여 리터로 환산합니다.",
  },
  {
    question: "갈색 재료와 녹색 재료의 적절한 비율은 얼마인가요?",
    answer:
      "부피 기준으로 탄소가 풍부한 갈색 재료 2~3에 대해 질소가 풍부한 녹색 재료 1의 비율이 실용적인 기준입니다.",
  },
  {
    question: "퇴비 용기에 얼마나 많은 재료를 넣을 수 있나요?",
    answer:
      "투입할 재료의 부피와 용기 내부 용량을 비교하세요. 공기 순환과 퇴비 뒤집기를 위해 상부에 여유 공간을 남겨두어야 합니다.",
  },
  {
    question: "꽉 짠 스펀지 정도의 습도는 무엇을 의미하나요?",
    answer:
      "손으로 쥐었을 때 물이 떨어지지 않으면서 촉촉함이 느껴지는 상태입니다. 너무 건조하면 분해가 늦어지고 너무 젖으면 산소가 부족해집니다.",
  },
];

const howTo = [
  {
    name: "용기 모양 선택",
    text: "직육면체 또는 원통형을 선택하고 센티미터 또는 인치 단위로 내부 치수를 입력합니다.",
  },
  {
    name: "재료 부피 입력",
    text: "탄소 함량이 높은 갈색 재료와 질소 함량이 높은 녹색 재료의 부피를 각각 예상하여 입력합니다.",
  },
  {
    name: "습도 상태 설정",
    text: "건조, 꽉 짠 스펀지, 과습 중에서 현재 상태를 선택하여 맞춤 관리 조언을 확인합니다.",
  },
  {
    name: "결과 확인",
    text: "용량, 채움 비율, 재료 비율을 확인하여 갈색 재료 추가나 퇴비 뒤집기를 결정합니다.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "ko",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "미터법",
    unitImperial: "야드·파운드법",
    shapeTitle: "용기 모양",
    shapeRectangular: "직육면체",
    shapeCylindrical: "원통형",
    widthLabel: "내부 가로",
    depthLabel: "내부 세로",
    diameterLabel: "내부 지름",
    heightLabel: "내부 높이",
    brownLabel: "갈색 재료",
    greenLabel: "녹색 재료",
    moistureTitle: "습도 상태",
    moistureDry: "건조함",
    moistureSponge: "꽉 짠 스펀지",
    moistureWet: "과습함",
    moistureAdviceDry: "건조함: 조금씩 물을 주고 퇴비를 뒤집어주세요.",
    moistureAdviceSponge: "양호함: 꽉 짠 스펀지 정도의 습도를 유지하세요.",
    moistureAdviceWet: "과습함: 건조한 갈색 재료를 섞고 뒤집어주세요.",
    recipeTitle: "추천 혼합 비율",
    recipeKitchen: "주방 음식물 쓰레기",
    recipeGarden: "정원 부산물",
    recipeLeafy: "낙엽 혼합물",
    sceneTitle: "퇴비층 단면도",
    resultCapacity: "퇴비 용기 내부 용량",
    resultMaterials: "투입된 재료 총 부피",
    resultRatio: "갈색 대 녹색 비율",
    resultFill: "용량 사용률",
    brownTarget: "목표 갈색 재료 양",
    waterAction: "수분 조절",
    airAction: "공기 및 구조",
    statusBalanced: "좋은 초기 균형입니다",
    statusTooGreen: "갈색 재료를 더 추가하세요",
    statusTooBrown: "녹색 재료를 더 추가하세요",
    statusNoGreens: "녹색 재료를 투입하세요",
    statusOverfilled: "용기 용량을 초과했습니다",
    statusDry: "퇴비가 건조합니다",
    statusWet: "퇴비가 너무 젖어 있습니다",
    statusGoodMoisture: "습도가 적정 범위에 있습니다",
    statusNote: "퇴비를 뒤집어 공기 구멍을 확보하세요.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "부피 계산 수식",
    formulaText: "내부 치수로 유효 용량을 계산합니다. 직육면체는 가로×세로×높이, 원통형은 π×반지름²×높이 공식을 사용합니다.",
    practicalTitle: "비율은 기준점입니다",
    practicalText: "녹색 재료 부피 대비 갈색 재료를 2~3배 넣는 것이 기본입니다. 습도와 공기 순환을 위해 주기적으로 뒤집어주세요.",
    localNote: "모든 계산은 브라우저 내에서 처리됩니다.",
    resetLabel: "초기화",
  },
  seo: [
    {
      type: "title",
      text: "퇴비 용기의 실제 유효 용량 계산",
      level: 2,
    },
    {
      type: "paragraph",
      html: "퇴비 용기 용량 계산기는 표기된 외형 치수가 아닌 실제 내부 측정값을 바탕으로 유효 용량을 계산합니다. 가로, 세로, 높이 또는 지름과 높이를 입력하여 정확한 리터 단위 부피를 확인하세요.",
    },
    { type: "title", text: "입체 부피 공식", level: 3 },
    {
      type: "paragraph",
      html: "직육면체 용기는 <code>가로 × 세로 × 높이</code>를 계산하고 1,000으로 나눠 리터로 환산합니다. 원통형 용기는 <code>π × 반지름² × 높이</code> 공식을 적용합니다.",
    },
    {
      type: "list",
      items: [
        "<strong>직육면체:</strong> 가로 × 세로 × 높이",
        "<strong>원통형:</strong> π × 반지름² × 높이",
        "<strong>단위 환산:</strong> 1,000 cm3 = 1 리터",
        "<strong>채움 비율:</strong> 갈색 및 녹색 재료 총 부피와 용기 내부 용량 비교",
      ],
    },
    { type: "title", text: "갈색 및 녹색 재료의 균형", level: 3 },
    {
      type: "paragraph",
      html: "낙엽, 상자 조각 등 탄소가 풍부한 갈색 재료 2~3 비율에 대해 주방 쓰레기 등 질소가 풍부한 녹색 재료 1 비율을 섞는 것이 정석입니다.",
    },
    { type: "title", text: "수분 관리와 뒤집기", level: 3 },
    {
      type: "paragraph",
      html: "꽉 짠 스펀지 정도의 촉촉함을 유지하세요. 너무 젖으면 악취가 발생할 수 있으므로 건조한 갈색 재료를 추가하고 뒤집어주어야 합니다.",
    },
    {
      type: "tip",
      title: "실전 조언",
      html: "본 계산기는 홈 가드닝 및 가정용 퇴비 만들기를 위한 실용적인 가이드입니다.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
