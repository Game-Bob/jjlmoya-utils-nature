import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'ko',
  title: '종자 층적 처리와 파종 날짜 달력',
  description: '파종일에서 거꾸로 계산하거나 종자가 준비된 날부터 앞으로 계산하여 날짜별 준비 계획을 만듭니다.',
  faq: [
    { question: '이 달력은 무엇을 계산하나요?', answer: '불림, 따뜻하고 습한 처리, 차갑고 습한 처리, 파종을 목표일 또는 준비 시작일에 맞춰 정확한 날짜에 배치합니다.' },
    { question: '왜 날짜 모드가 두 가지인가요?', answer: '파종일이 정해졌다면 파종일 모드를, 오늘 준비를 시작하고 앞으로의 파종일을 알고 싶다면 종자 준비 완료 모드를 사용합니다.' },
    { question: '기간과 온도를 바꿀 수 있나요?', answer: '가능합니다. 프로필을 시작점으로 삼고 종자 봉투, 전문 자료, 지역 조건에 맞게 각 단계를 조정하세요.' },
    { question: '계획대로 하면 발아가 보장되나요?', answer: '아니요. 계획은 날짜를 정리할 뿐이며 종자의 나이, 활력, 수분, 휴면, 곰팡이와 파종 조건도 결과에 영향을 줍니다.' },
  ],
  howTo: [
    { name: '종자 프로필 선택', text: '가장 가까운 종을 선택하면 적절한 초기 단계가 입력됩니다.' },
    { name: '날짜 모드 선택', text: '파종일에서 거꾸로 계산하거나 종자가 준비된 날부터 앞으로 계산합니다.' },
    { name: '처리 단계 확인', text: '불림, 온기, 저온 일수와 저온 범위를 조정합니다.' },
    { name: '날짜 순서 따르기', text: '시작일에 시작해 모든 단계를 거치고 표시된 날에 파종합니다.' },
  ],
  seoTitle: '준비 기간 계획하기',
  seoIntro: '종자 휴면은 시간 관리의 문제이기도 합니다. 습한 저온 기간이 필요한 종은 준비가 늦으면 적절한 파종 시기를 놓칠 수 있습니다. 불필요하게 긴 처리는 시간을 낭비하고 곰팡이나 조기 발아 위험을 높일 수 있습니다. 이 달력은 목표일을 실행 가능한 단계로 바꿉니다.',
  seoModes: '목표 파종일을 선택하면 거꾸로 계산하고, 종자 준비 완료 모드를 선택하면 준비 시작일에서 앞으로 계산합니다. 각 단계에는 고유한 날짜가 있으며, 불림은 다음 처리로 이어지고 마지막 처리는 파종 전날 끝납니다. 용기 라벨이나 알림에도 활용할 수 있습니다.',
  seoPhaseTitle: '단계 읽는 방법',
  seoPhaseItems: ['<strong>불림:</strong> 지정된 일수만큼 종자에 수분을 공급하고 특별한 이유 없이 연장하지 않습니다.', '<strong>온기:</strong> 프로필에 필요할 때 습한 종자를 따뜻한 범위에 둡니다.', '<strong>저온:</strong> 종자를 습하고 차갑게 보관하며 곰팡이나 이른 뿌리를 정기적으로 확인합니다.', '<strong>파종:</strong> 목표일에 준비된 종자를 적절한 배지로 옮깁니다.'],
  seoEvidenceTitle: '프로필은 시작점으로 사용하기',
  seoEvidence: '프로필은 모든 조건에 적용되는 처방이 아닙니다. 품종, 원산지, 종자 나이, 포장지의 안내에 따라 휴면 조건이 달라질 수 있습니다. 신뢰할 만한 공급자가 다른 기간을 제시하면 서로 다른 안내를 평균 내지 말고 프로필을 수정한 뒤 사용한 자료를 기록하세요.',
  seoTipTitle: '달력은 발아 시험이 아닙니다',
  seoTip: '종자 로트, 습한 매체, 온도와 날짜를 기록하세요. 저온 처리 중 뿌리가 보이면 조심스럽게 파종합니다. 휴면이 계속되더라도 자동으로 처리를 연장하지 말고 먼저 해당 종의 안내를 확인하세요.',
  seoChecksTitle: '시작 전 확인',
  seoChecks: ['파종일이 빛, 서리와 장소 조건에 맞는지 확인합니다.', '용기에 종, 시작, 종료, 온도 범위를 표시합니다.', '습하지만 공기가 통하는 매체를 사용하고 정기적으로 확인합니다.', '처리 과정을 추적할 수 있도록 계획을 종자 포장과 함께 보관합니다.'],
  seoLimitsTitle: '결과로 알 수 없는 것',
  seoLimits: '이 도구는 사진으로 휴면을 판정하지 않고 활력을 검사하지 않으며 종별 안내를 대신하지 않습니다. 지역 날씨를 예측하거나 발아를 보장하지도 않습니다. 결과를 날짜 계산으로 보고 생물학적 조건은 적절한 자료로 확인하세요.',
  ui: {
    labelProfile: '종자 프로필', labelMode: '계획 모드', labelModeSowing: '파종하고 싶은 날짜', labelModeReady: '종자는 오늘 준비됨', labelSowingDate: '목표 파종일', labelReadyDate: '준비 시작일', labelSoakDays: '불림 일수', labelWarmDays: '온기 일수', labelColdDays: '저온 일수', labelColdRange: '저온 범위', labelUnits: '온도 단위', labelMetric: '미터법 °C', labelImperial: '야드파운드법 °F', labelFrom: '최저 온도', labelTo: '최고 온도', labelGenerate: '달력 업데이트', labelReset: '프로필 초기화', labelAddCalendar: '내 달력에 추가', labelShare: '링크 복사', labelCopied: '링크가 복사됨', labelPrint: '소형 라벨 인쇄', labelTechnique: '방법', labelTodayStatus: '오늘의 상태', labelDayOf: '일차 /', labelGantt: '준비 타임라인', labelTimeline: '준비 타임라인', labelNextAction: '현재 단계', labelCalendarStarts: '달력 시작', labelSowingDay: '파종일', labelDuration: '준비', labelDays: '일', labelTemperature: '온도', labelReady: '오늘 파종', labelUpcoming: '예정', labelActive: '진행 중', labelComplete: '계획 완료', labelEditHint: '종자 포장이나 전문 자료에 맞게 제안을 조정하세요. 마지막 설정은 이 기기에 저장됩니다.', labelWarm: '온기 층적 처리', labelCold: '저온 층적 처리', labelSoak: '종자 불리기', labelSow: '종자 파종', noteApple: '짧은 불림 뒤 습한 저온 기간', noteLavender: '봄 파종 전 짧은 저온 기간', noteMilkweed: '온기 단계 뒤 저온 단계', noteRose: '불림 뒤 긴 저온 기간', profileApple: '사과 · Malus domestica', profileLavender: '라벤더 · Lavandula angustifolia', profileMilkweed: '밀크위드 · Asclepias syriaca', profileRose: '장미 · Rosa spp.', profileStrawberry: '딸기 · Fragaria × ananassa', profilePeach: '복숭아 · Prunus persica', profileCherry: '감미 체리 · Prunus avium', profilePear: '배 · Pyrus communis', profilePoppy: '양귀비 · Papaver spp.', profileSunflower: '해바라기 · Helianthus annuus', profileTomato: '토마토 · Solanum lycopersicum', profileBasil: '바질 · Ocimum basilicum', instructionSoak: '다음 단계 전까지 종자를 수분 상태로 유지합니다.', instructionWarm: '습한 종자를 따뜻한 곳에 보관합니다.', instructionCold: '종자를 습하고 차갑게 보관하며 정기적으로 확인합니다.', instructionSow: '준비된 배지에 파종합니다.', emptyState: '날짜를 설정해 준비 타임라인을 만드세요.', warningDate: '유효한 파종일을 선택하세요.', warningTemperature: '달력을 업데이트하기 전에 기간과 온도를 확인하세요.',
  },
});
