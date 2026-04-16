import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'yagmur-suyu-hesaplayici';
const title = 'Yağmur Suyu Hasadı Hesaplayıcı';
const description = 'Çatınızdan ne kadar yağmur suyu toplayabileceğinizi hesaplayın ve depolama tankınızı boyutlandırın.';

const faqData = [
  {
    question: 'Çatımdan gerçekte ne kadar su toplayabilirim?',
    answer: 'Genel kural, her metrekare çatı ve her milimetre yağmur için yaklaşık 1 litre su toplayabileceğinizdir. Ancak, "akış katsayısı" ile ayarlanan buharlaşma ve filtrasyon kaynaklı kayıplar vardır.',
  },
  {
    question: 'Akış katsayısı nedir?',
    answer: 'Çatı malzemesine bağlı olarak ne kadar suyun kaybolduğunu gösteren bir yüzdedir. Metal veya kiremit bir çatı çok verimlidir (0,85-0,95), çakıl veya toprak bir çatı ise çok daha az verimlidir (0,1-0,3).',
  },
  {
    question: 'Depolama tankını nasıl boyutlandırırım?',
    answer: 'Bir ayda beklenen maksimum yağmur hacmini hesaplamalı ve bunu tahmini aylık tüketiminizle karşılaştırmalısınız. Çok küçük bir tank fırtınalarda taşar, çok büyük olanı ise gereksiz yere pahalı olur.',
  },
  {
    question: 'Toplanan yağmur suyunu içmek güvenli midir?',
    answer: 'Doğrudan değil. Su, toz, kuş pisliği ve havadaki partikülleri taşır. İnsan tüketimi için tortu filtrelerinden, aktif karbondan geçmeli ve UV ışığı veya klor kullanılarak dezenfekte edilmelidir.',
  },
];

const howToData = [
  {
    name: 'Yatay yüzeyi ölçün',
    text: 'Çatı tabanınızın uzunluğunu ve genişliğini ölçün (eğimli yüzeyi değil, yere gölge düşüren alanı).',
  },
  {
    name: 'Yerel yağış miktarını kontrol edin',
    text: 'Bölgenizdeki yıllık veya aylık ortalama yağış miktarını milimetre (mm) cinsinden öğrenmek için ulusal meteoroloji servisini kontrol edin.',
  },
  {
    name: 'Malzeme verimliliğini uygulayın',
    text: 'Emme veya ısı yoluyla kaybolacak suyu düşmek için hesaplayıcımızda çatı malzemenizi seçin.',
  },
  {
    name: 'Gerekli hacmi hesaplayın',
    text: 'Kurak dönemler için toplam hasadın en az %20-30\'unu depolayabilecek bir tank seçmek için yıllık litre sonucunu kullanın.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Çatı Ayarları',
    headResults: 'Hasat Potansiyeli',
    labelArea: 'Çatı Alanı',
    labelRainfall: 'Yıllık Yağış',
    labelMaterial: 'Çatı Malzemesi',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Litre',
    helpRainfall: 'Bilmiyor musunuz? Google\'da "ortalama yıllık yağış [şehriniz]" diye aratın.',
    efficiencyTitle: 'Verimlilik Faktörü',
    efficiencyNote: 'Filtreler ve buharlaşma için %10\'luk bir kayıp uygulanır.',
    resultTitle: 'Yıllık Hasat Potansiyeli',
    equivalenciesTitle: 'Pratik Karşılıklar',
    labelFlushes: 'Sifon Çekme',
    labelShowers: 'Duş (10 dk)',
    labelGarden: 'Bahçe Sulama',
    gardenArea: '(50m²)',
    materialMetal: 'Metal / Sırlı Kiremit',
    materialClay: 'Alaturka Kiremit / Kil',
    materialConcrete: 'Beton / Asfalt',
    materialGravel: 'Çakıl / Yeşil Çatı',
  },
  seo: [
    {
      type: 'title',
      text: 'Yağmur Suyu Hasadı: Özerklik ve Sürdürülebilirlik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çoğu ev sahibi kendi çatılarının potansiyelinin farkında değildir. Standart bir çatı her yıl binlerce litre bedava su yakalayabilir. Bu araç, bu potansiyeli sayısallaştırarak ne kadar su "hasat" edebileceğinizi tam olarak hesaplamanıza ve depolama için ideal tank boyutunu belirlemenize olanak tanır.',
    },
    {
      type: 'title',
      text: 'Hesaplama Mantığı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yağmur suyu toplama için temel formül basit ama güçlüdür:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Hacim = Alan × Yağış × Akış Katsayısı × Filtre Verimliliği</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Alan:</strong> Çatı ayak iziniz (izdüşüm uzunluk × genişlik).',
        '<strong>Yağış:</strong> Milimetre cinsinden düşen yağmur.',
        '<strong>Katsayı:</strong> Çatınızın ne kadar su kaybettiği (örneğin emilim).',
        '<strong>Verimlilik:</strong> Tank öncesi filtrelerdeki kayıplar (~%10).',
      ],
    },
    {
      type: 'title',
      text: 'Neden Yağmur Suyu Toplamalıyız?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tasarruf:</strong> Su faturanızı önemli ölçüde azaltın.',
        '<strong>Bahçecilik:</strong> Bitkiler klor veya kireç içermeyen suyu sever.',
        '<strong>Dayanıklılık:</strong> Kesintiler durumunda acil durum rezervi bulundurun.',
      ],
    },
    {
      type: 'title',
      text: 'Tank Boyutlandırma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En yaygın hata, sadece bütçeye göre tank almaktır. Çok küçükse, taşma nedeniyle binlerce litreyi boşa harcarsınız. Çok büyükse, gereksiz yere para harcarsınız. Genel kural, bölgenizdeki ortalama yağışın <strong>3 aylık</strong> miktarını depolayacak kapasiteye sahip olmaktır; bu da kurak mevsimleri atlatmanızı sağlar.',
    },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Bilimsel Referanslar',
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
