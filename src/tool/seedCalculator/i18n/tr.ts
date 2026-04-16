import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'tohum-hesaplayici';
const title = 'Tohum Mesafesi ve Mibzer Kalibrasyon Hesaplayıcı';
const description =
  'Çiftçiler için hassas bir araç. Hedef popülasyon ve sıra genişliğine göre tohumlar arasındaki ideal mesafeyi hesaplayın ve farklı çalışma hızlarında mibzer üzerindeki yükü analiz edin.';

const faqData = [
  {
    question: 'Tohum mesafesi nasıl hesaplanır?',
    answer:
      'Toplam ekim hattı boyunu bulmak için bir hektar (10.000 m²) sıra genişliğine bölünür. Ardından, her doğrusal metreye kaç tohum yerleştirileceğini belirlemek için hedef popülasyon bu metre değerine bölünür.',
  },
  {
    question: 'Hektar başına hedef popülasyon nedir?',
    answer:
      '10.000 metrekare başına ideal bitki sayısıdır. Mahsul türüne, toprak verimliliğine ve su varlığına bağlıdır. Örneğin, sulu mısır genellikle hektar başına 85.000 ila 95.000 tohum gerektirir.',
  },
  {
    question: 'Çimlenme yüzdesi hesaplamayı nasıl etkiler?',
    answer:
      'Ekilen tüm tohumlar çıkış yapmayacaktır. Bir tohum partisinin çimlenme oranı %95 ise, istenen nihai bitki popülasyonuna ulaşmak için ekim hızını %5 artırmanız gerekir.',
  },
  {
    question: 'Mibzer kalibrasyonu neden bu kadar önemlidir?',
    answer:
      'Çok yoğun bir ekim hızı bitkiler arası rekabete ve daha küçük tanelere neden olur. Çok seyrek bir oran ise alan ve verim potansiyelini boşa harcar. Hassasiyet, karlılığın anahtarıdır.',
  },
];

const howToData = [
  {
    name: 'Hedef popülasyonu girin',
    text: 'Varyeteniz için teknik tavsiyeye göre hektar başına kaç tohum veya bitki istediğinizi belirleyin.',
  },
  {
    name: 'Sıra genişliğini ayarlayın',
    text: 'Mibzerinizin diskleri veya ayakları arasındaki mesafeyi ölçün (genellikle 50, 70 veya 75 cm).',
  },
  {
    name: 'Çimlenme oranını ayarlayın',
    text: 'Tarladaki doğal kayıpları telafi etmek için beklenen çıkış yüzdesini girin.',
  },
  {
    name: 'Mekanik ayarı alın',
    text: 'Makinenizdeki dişlileri veya monitörü ayarlamak için metre başına tohum veya tohumlar arası cm değerini kullanın.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bilimsel Referanslar',
  bibliography: [
    {
      name: 'KWS İspanya',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'İspanya Tarım Bakanlığı (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara İspanya',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Hassas Ekim Teknik Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir mibzer şanzımanını ayarlamak, karık doğrusal metresi başına tam olarak kaç tohum düşmesi gerektiğini bilmeyi gerektirir. Makine kılavuzları genellikle yaklaşık tablolar verir, ancak <strong>tahrik tekerleği kayması</strong> veya tohum boyutu gibi faktörler gerçeği değiştirebilir. Bu araç size mükemmel teorik değeri verir: <strong>tohumlar arasındaki hedef mesafe</strong>.',
    },
    {
      type: 'tip',
      title: 'Matematiksel Formül',
      html: '<p>Agronomistler ve meraklılar için, hesaplamanın temeli buradadır:</p><pre>Mesafe (cm) = 10.000.000 / (Popülasyon × Sıra Genişliği)</pre><ul><li><strong>10.000.000:</strong> Ha değerinden cm² değerine dönüştürme katsayısı.</li><li><strong>Popülasyon:</strong> Hektar başına tohum sayısı.</li><li><strong>Sıra Genişliği:</strong> cm cinsinden sıralar arası mesafe.</li></ul>',
    },
    {
      type: 'title',
      text: 'Neden Bu Hesaplayıcıyı Kullanmalısınız?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tarlada ölçüm yapıyorsanız ve tohumlarınız hedef mesafeden daha yakın veya daha uzaksa, makineniz <strong>yanlış kalibre edilmiştir</strong>. Bu araç ayrıca tohum diskinin farklı çalışma hızlarındaki dozaj frekansını (Hz) analiz ederek sizi teklemeli atım kaybı riski konusunda uyarır.',
    },
    {
      type: 'title',
      text: 'Kaliteli Ekimin Anahtarları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Teklemeli Atım (Singulation):</strong> Çiftleme ve atlamalardan kaçının. %99 teklemeli atım bitkiler arası rekabeti dengede tutar.',
        '<strong>Düzenli Mesafe:</strong> Varyasyon katsayısı 0,3\'ten az olmalıdır. 5 cm\'den büyük sapmalar verim potansiyelini düşürür.',
        '<strong>Derinlik:</strong> Düzenli bir çıkış için kritiktir. Baskı tekerleği yükünü toprak nemine göre ayarlayın.',
      ],
    },
    {
      type: 'title',
      text: 'Tarla Doğrulama Yöntemleri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000 Hektar Yöntemi:</strong> Bir karık boyunca 1/1000 hektarı temsil eden belirli bir mesafeyi ölçün. Tohumları sayın ve 1.000 ile çarpın. 70 cm sıralar için mesafe 14,28 m; 52,5 cm sıralar için 19,05 m\'dir.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tahrik Tekerleği Yöntemi:</strong> Makineyi kaldırın, tahrik tekerleğini işaretleyin ve 1/100 hektara eşdeğer miktar kadar döndürün. Tohumları bir kovada toplayın ve kalibrasyonu doğrulamak için tartın veya sayın.',
    },
    {
      type: 'title',
      text: 'Ürüne Göre Referans Tablo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mısır:</strong> 60.000 - 95.000 tohum/Ha. Modern hibritlerde yoğunluğa yüksek yanıt.',
        '<strong>Soya Fasulyesi:</strong> 250.000 - 450.000 tohum/Ha. Düşük yoğunluklarda büyük telafi kapasitesi.',
        '<strong>Ayçiçeği:</strong> 40.000 - 55.000 tohum/Ha. Yoğunluğa çok duyarlı; fazlası tabla çapını küçültür.',
        '<strong>Kanola:</strong> 300.000 - 600.000 tohum/Ha. Çok küçük tohum; mükemmel toprak teması gerektirir.',
      ],
    },
  ],
  ui: {
    headCrop: 'Ürününüzü Seçin',
    headParams: 'Parametreler',
    headAnalysis: 'Gerçek Zamanlı Analiz',
    labelPopulation: 'Popülasyon',
    unitSeedsHa: 'Tohum/Ha',
    labelRowWidth: 'Sıra Genişliği',
    unitCm: 'Santimetre',
    labelWorkSpeed: 'Çalışma Hızı',
    unitKmh: 'km/sa',
    labelCalibration: 'Plaka Kalibrasyonu',
    labelSpacingDesc: 'Sıradaki her tohum arasındaki tam mesafe.',
    labelMachineStress: 'Makine Yükü',
    labelSeedsM: 'Tohum / Metre',
    labelPlantsM2: 'Bitki / m²',
    labelSpeedMs: 'Metre / Saniye',
    labelHaBag: 'Ha / Torba (80bin)',
    statusStandby: 'BEKLEMEDE',
    statusVolumetric: 'VOLUMETRİK AKIŞ',
    statusOptimal: 'OPTİMAL DOZAJ',
    statusHighSpeed: 'YÜKSEK HIZ',
    statusPlateLimiter: 'PLAKA SINIRI',
    cropCorn: 'Dane Mısır',
    cropSilage: 'Silajlık Mısır',
    cropSunflower: 'Ayçiçeği',
    cropSorghum: 'Sorgum',
    cropSoy: 'Soya Fasulyesi',
    cropBeet: 'Şeker Pancarı',
    cropRapeseed: 'Kanola',
    noteCorn: 'Yüksek hassasiyet gerekir',
    noteSilage: 'Orta-yüksek yoğunluk',
    noteSunflower: 'Hıza duyarlı',
    noteSorghum: 'Sürekli akış veya disk',
    noteSoy: 'Yüksek popülasyon',
    noteBeet: 'Kritik sığ ekim',
    noteRapeseed: 'Çok küçük tohum',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bilimsel Referanslar',
  },
};
