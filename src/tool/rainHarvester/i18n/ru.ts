import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'kalkulyator-dozhdevoy-vody';
const title = 'Калькулятор сбора дождевой воды';
const description = 'Рассчитайте, сколько дождевой воды вы можете собрать со своей крыши, и подберите размер накопительного бака.';

const faqData = [
  {
    question: 'Сколько воды я на самом деле могу собрать со своей крыши?',
    answer: 'Общее правило гласит, что на каждый квадратный метр крыши и каждый миллиметр дождя можно собрать примерно 1 литр воды. Однако существуют потери на испарение и фильтрацию, корректируемые «коэффициентом стока».',
  },
  {
    question: 'Что такое коэффициент стока?',
    answer: 'Это процент, указывающий, сколько воды теряется в зависимости от материала крыши. Металлическая или черепичная крыша очень эффективна (0,85–0,95), в то время как гравийная или земляная крыша гораздо менее эффективна (0,1–0,3).',
  },
  {
    question: 'Как подобрать размер накопительного бака?',
    answer: 'Вам следует рассчитать максимальный ожидаемый объем дождя в месяц и сопоставить его с вашим расчетным ежемесячным потреблением. Слишком маленький бак будет переполняться во время ливней, а слишком большой будет неоправданно дорогим.',
  },
  {
    question: 'Безопасно ли пить собранную дождевую воду?',
    answer: 'Не напрямую. Вода переносит пыль, птичий помет и частицы из воздуха. Для употребления человеком она должна пройти через осадочные фильтры, активированный уголь и дезинфекцию с помощью УФ-излучения или хлора.',
  },
];

const howToData = [
  {
    name: 'Измерьте горизонтальную поверхность',
    text: 'Измерьте длину и ширину основания вашей крыши (не наклонную поверхность, а площадь, которая проецирует тень на землю).',
  },
  {
    name: 'Проверьте локальный уровень осадков',
    text: 'Найдите в национальной метеорологической службе среднегодовое или ежемесячное количество осадков в вашем районе в миллиметрах (мм).',
  },
  {
    name: 'Примените эффективность материала',
    text: 'Выберите материал вашей крыши в нашем калькуляторе, чтобы вычесть воду, которая будет потеряна из-за впитывания или нагрева.',
  },
  {
    name: 'Рассчитайте необходимый объем',
    text: 'Используйте результат годового сбора в литрах, чтобы выбрать бак, который может хранить не менее 20–30% от общего урожая для засушливых периодов.',
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
  inLanguage: 'ru',
};

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Настройки крыши',
    headResults: 'Потенциал сбора',
    labelArea: 'Площадь крыши',
    labelRainfall: 'Годовое количество осадков',
    labelMaterial: 'Материал крыши',
    unitM2: 'м²',
    unitMm: 'мм',
    unitLiters: 'Литры',
    helpRainfall: 'Не знаете? Поищите в Google «среднегодовое количество осадков в [вашем городе]».',
    efficiencyTitle: 'Коэффициент эффективности',
    efficiencyNote: 'Применяется потеря 10% на фильтры и испарение.',
    resultTitle: 'Годовой потенциал сбора',
    equivalenciesTitle: 'Практические эквиваленты',
    labelFlushes: 'Смывы унитаза',
    labelShowers: 'Принятия душа (10 мин)',
    labelGarden: 'Полив сада',
    gardenArea: '(50м²)',
    materialMetal: 'Металл / Глазурованная черепица',
    materialClay: 'Керамическая черепица / Глина',
    materialConcrete: 'Бетон / Асфальт',
    materialGravel: 'Гравий / Зеленая крыша',
  },
  seo: [
    {
      type: 'title',
      text: 'Сбор дождевой воды: Автономия и устойчивое развитие',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Большинство домовладельцев не подозревают о потенциале собственных крыш. Стандартная крыша может собирать тысячи литров бесплатной воды каждый год. Этот инструмент количественно определяет этот потенциал, позволяя вам точно рассчитать, сколько воды вы можете «собрать», и определить идеальный размер бака для хранения.',
    },
    {
      type: 'title',
      text: 'Логика расчета',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Базовая формула для сбора дождевой воды проста, но эффективна:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Объем = Площадь × Осадки × Коэффициент стока × Эффективность фильтра</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Площадь:</strong> Основание вашей крыши (проекция длина × ширина).',
        '<strong>Осадки:</strong> Выпадающий дождь в миллиметрах.',
        '<strong>Коэффициент:</strong> Сколько воды теряет ваша крыша (например, впитывание).',
        '<strong>Эффективность:</strong> Потери в фильтрах перед баком (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Зачем собирать дождевую воду?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Экономия:</strong> Значительно сократите свои счета за воду.',
        '<strong>Садоводство:</strong> Растения любят воду без хлора и извести.',
        '<strong>Устойчивость:</strong> Имейте аварийный запас на случай отключений.',
      ],
    },
    {
      type: 'title',
      text: 'Размер бака',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Самая распространенная ошибка — покупка бака, исходя только из бюджета. Если он слишком мал, вы будете терять тысячи литров из-за перелива. Если он слишком велик, вы потратите деньги зря. Общее правило — иметь емкость для хранения среднего количества осадков за <strong>3 месяца</strong> в вашем районе, что позволит вам пережить засушливые сезоны.',
    },
  ],
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Научные источники',
  bibliography: [
    {
      name: 'FAO - Rainwater Harvesting and Storage',
      url: 'https://www.fao.org/3/a1348s/a1348s.pdf',
    },
    {
      name: 'Texas A&M AgriLife Extension - Rainwater Harvesting',
      url: 'https://rainwaterharvesting.tamu.edu/',
    },
    {
      name: 'Brad Lancaster - Rainwater Harvesting for Drylands',
      url: 'https://www.harvestingrainwater.com/',
    },
    {
      name: 'European Environment Agency - Water Resources',
      url: 'https://www.eea.europa.eu/en/topics/in-depth/water',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
