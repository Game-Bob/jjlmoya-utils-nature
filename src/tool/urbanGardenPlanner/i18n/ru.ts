import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'kalkulyator-grunta-i-dozhdevoy-vody-dlya-sada';
const title = 'Планировщик грунта и дождевой воды для городского сада';
const description = 'Рассчитайте объём грунта для высокой грядки и оцените сбор дождевой воды для небольшого городского сада.';
const faqData = [
  { question: 'Сколько грунта нужно для высокой грядки?', answer: 'Введите площадь посадки и глубину грунта. Планировщик перемножит значения и переведёт результат в литры, чтобы оценить объём земли или компоста.' },
  { question: 'Как рассчитать дождевую воду для сада?', answer: 'Введите площадь сбора и высоту осадков. Затем планировщик применит коэффициент стока 85 процентов и коэффициент сбора 90 процентов для осторожной оценки.' },
  { question: 'Можно ли использовать расчёт для балкона?', answer: 'Да. Укажите площадь ящика или грядки как площадь посадки, добавьте глубину грунта и площадь крыши или навеса, который питает ёмкость.' },
  { question: 'Безопасна ли собранная дождевая вода для съедобных растений?', answer: 'Не всегда. Проверьте поверхность сбора и ёмкость, обеспечьте подходящую фильтрацию и дренаж и соблюдайте местные рекомендации.' },
];
const howToData = [
  { name: 'Измерьте место посадки', text: 'Введите площадь грядки, балкона или контейнера, который получит грунт.' },
  { name: 'Выберите глубину грунта', text: 'Укажите планируемую глубину в сантиметрах с учётом оседания.' },
  { name: 'Добавьте площадь сбора', text: 'Введите крышу, навес или другую поверхность, отводящую воду в ёмкость.' },
  { name: 'Проверьте осадки', text: 'Введите количество осадков в миллиметрах и сравните воду с размером сада.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ru' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: 'Небольшой сад, измеренный живыми слоями', headInputs: 'Настройте свой сад', headScene: 'Прочитайте ландшафт', labelGardenArea: 'Площадь посадки', labelDepth: 'Глубина грунта', labelCollectionArea: 'Площадь сбора', labelRainfall: 'Осадки', unitSquareMeters: 'м²', unitCentimeters: 'см', unitMillimeters: 'мм', unitLiters: 'л', helpGardenArea: 'Площадь грядки, балкона или контейнера.', helpDepth: 'Слой грунта, который нужно заполнить.', helpCollectionArea: 'Поверхность, отводящая воду в ёмкость.', helpRainfall: 'Проверьте недавний дождь или местный расчётный ливень.', presetsTitle: 'Начните с формы', presetBalcony: 'Балконный ящик', presetRaisedBed: 'Высокая грядка', presetCommunity: 'Общественный сад', labelSoilNeeded: 'Необходимый грунт', labelWaterCaptured: 'Собранная вода', labelGardenDepth: 'На всей площади сада', labelWateringArea: 'При слое воды 10 мм', sceneCatchment: 'Сбор', sceneGardenBed: 'Место посадки', sceneSoil: 'Слой грунта', sceneWater: 'Собранная вода', statusBalanced: 'Полезное сочетание для планирования', statusLightCapture: 'Небольшой дождь', statusDeepBed: 'Глубокий профиль грунта', statusNoRain: 'Ожидание осадков', statusNote: 'Используйте этот снимок для расчёта материалов и сравнения сценариев. Это не норма полива.', assumptionTitle: 'Расчётные допущения', assumptionText: 'Оценка учитывает 85 процентов осадков как сток и 90 процентов после потерь при сборе. Один литр на квадратном метре равен одному миллиметру воды.', limitationTitle: 'Соблюдайте безопасность', limitationText: 'Предусмотрите дренаж, избегайте загрязнённых поверхностей сбора и проверьте местные правила перед использованием воды для съедобных растений.' },
  seo: [
    { type: 'title', text: 'Рассчитайте грунт и дождевую воду для городского сада', level: 2 },
    { type: 'paragraph', html: 'Высокая грядка, балкон или общественный сад требуют двух практических ответов: сколько литров грунта нужно и сколько дождя может собрать расположенная рядом поверхность? Планировщик показывает обе оценки вместе.' },
    { type: 'title', text: 'Формула объёма грунта', level: 3 },
    { type: 'paragraph', html: 'Формула: <code>площадь в м² × глубина в см × 10 = литры грунта</code>. Для грядки площадью 12 м² и глубиной 30 см потребуется 3 600 литров до учёта оседания, дренажа и плана посадок.' },
    { type: 'list', items: ['<strong>Площадь посадки:</strong> основание грядки, балкона или контейнера.', '<strong>Глубина:</strong> высота планируемого слоя грунта.', '<strong>Сбор:</strong> крыша, навес или другая поверхность подачи.', '<strong>Осадки:</strong> количество дождя для проверки в миллиметрах.'] },
    { type: 'title', text: 'Оцените сбор дождевой воды', level: 3 },
    { type: 'paragraph', html: 'Оценка начинается с <code>площадь сбора × осадки</code>, затем учитывает 85 процентов стока и 90 процентов после потерь сбора. Результат помогает сравнивать сценарии, но не гарантирует доступный объём воды.' },
    { type: 'title', text: 'Сравнивайте сценарии офлайн', level: 3 },
    { type: 'paragraph', html: 'Проверьте пресеты для балкона, грядки и общественного сада, затем замените их своими измерениями. Адрес, карта, прогноз погоды и личные данные не покидают браузер.' },
    { type: 'tip', title: 'Важные ограничения', html: 'Дренаж, качество воды, испарение, выбор растений и местные правила требуют человеческого решения. Загрязнённая крыша или ёмкость не подходят для съедобных культур автоматически.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
