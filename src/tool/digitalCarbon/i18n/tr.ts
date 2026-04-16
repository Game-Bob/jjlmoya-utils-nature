import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'dijital-karbon-ayak-izi-hesaplayici';
const title = 'Dijital Karbon Ayak İzi Hesaplayıcı';
const description = 'Herhangi bir web sayfasının çevresel etkisini analiz edin. Ziyaret başına enerji tüketimini ve CO₂ emisyonlarını tahmin edin.';

const faqData = [
  {
    question: 'Bir web sitesinin karbon ayak izi nedir?',
    answer: 'Bir web sayfasının yüklenmesi ve işlenmesi için sunucular, iletim ağları ve kullanıcının cihazı tarafından tüketilen enerji sonucunda atmosfere salınan CO₂ başta olmak üzere sera gazı miktarıdır.',
  },
  {
    question: 'Bir web sitesinin etkisi nasıl ölçülür?',
    answer: 'Genellikle ziyaret başına gram cinsinden CO₂ eşdeğeri (gCO₂e) olarak ölçülür. Verimli bir web sitesi 0,2 gramdan daha az CO₂ salarken, optimize edilmemiş bir sayfa yükleme başına 2 veya 3 gramı aşabilir.',
  },
  {
    question: 'İnternet neden kirliliğe neden olur?',
    answer: 'Çünkü gerekli tüm altyapı (veri merkezleri, deniz altı kabloları, WiFi yönlendiriciler, akıllı telefonlar), dünyanın büyük bir kısmında hala kömür veya gaz yakılarak elde edilen elektrikle çalışır.',
  },
  {
    question: 'Web sitemin CO₂ salınımını nasıl azaltabilirim?',
    answer: 'En etkili yol sayfa boyutunu azaltmaktır: görüntüleri optimize edin (WebP), CSS ve JS dosyalarını küçültün, geç yükleme (lazy loading) kullanın ve yenilenebilir enerji kullanan bir barındırma sağlayıcısı seçin.',
  },
];

const howToData = [
  {
    name: 'URL\'yi girin',
    text: 'Analiz etmek istediğiniz sayfanın web adresini giriş alanına yazın.',
  },
  {
    name: 'Analizi başlatın',
    text: 'Aracımızın sayfa kaynaklarının boyutunu tahmin etmesi için analiz et düğmesine tıklayın.',
  },
  {
    name: 'Puanınızı inceleyin',
    text: 'Analiz edilen web sitesinin enerji verimliliğine bağlı olarak A+\'dan F\'ye kadar bir derece alın.',
  },
  {
    name: 'İyileştirmeleri uygulayın',
    text: 'Site boyutunuzu ve çevresel etkinizi azaltmak için kişiselleştirilmiş ipuçları listesini kullanın.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL Analiz Aracı',
    headResults: 'Etki Sonucu',
    headTips: 'Optimizasyon İpuçları',
    labelUrl: 'Sayfa URL\'si',
    btnAnalyze: 'Web Sitesini Analiz Et',
    btnAnalyzing: 'Analiz ediliyor...',
    placeholderUrl: 'https://ornek.com',
    errorInvalidUrl: 'Lütfen geçerli bir URL girin.',
    errorFetchFailed: 'Web sitesi analiz edilemedi. Başka bir URL deneyin.',
    
    resultTitle: 'Dijital Karbon Ayak İzi',
    resultSubtitle: 'Tahmini sayfa verimliliği',
    co2PerVisit: 'Ziyaret başına CO₂',
    energyPerVisit: 'Tüketilen enerji',
    co2Annual: 'Yıllık CO₂ (100 bin ziyaret)',
    impactTitle: 'Gerçek Yıllık Etki',
    impactTrees: 'Gereken ağaç sayısı',
    impactKm: 'Araçla kat edilen yol km (yaklaşık)',
    treesLabel: 'Ağaç',
    kmLabel: 'Kilometre',
    
    ratingExcellent: 'Mükemmel. Bu sayfa, küresel ortalamaya kıyasla çok az enerji tüketiyor.',
    ratingVeryGood: 'Çok iyi verimlilik. Sayfa iyi optimize edilmiş ve minimum etkiye sahip.',
    ratingGood: 'Kabul edilebilir verimlilik. Geliştirme alanı var ancak ortalamanın altında.',
    ratingAverage: 'Ortalama. Sayfa, günümüz web dünyasında beklenen miktarda tüketim yapıyor.',
    ratingPoor: 'Ortalamanın üzerinde. Görüntüleri, betikleri ve yazı tiplerini optimize etmeyi düşünün.',
    ratingVeryPoor: 'Yüksek etki. Sayfa boyutu önemli düzeyde ve azaltılmalı.',
    ratingCritical: 'Çok yüksek etki. Sayfa boyutunu azaltmak için büyük bir fırsat var.',
    
    tipImages: 'Görüntüleri WebP veya AVIF formatına dönüştürerek boyutlarını %70\'e kadar azaltın.',
    tipCompression: 'Kaynakları sıkıştırmak için sunucuda Brotli veya GZIP\'i etkinleştirin.',
    tipLazyLoading: 'Görünüm alanı dışındaki resim ve videolar için geç yükleme kullanın.',
    tipHosting: 'Yenilenebilir enerji kullanan barındırma hizmetlerini seçin (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Gereksiz analiz betiklerini ve üçüncü taraf bileşenleri kaldırın.',
    tipFonts: 'Sadece gerçekten kullandığınız yazı tipi ağırlıklarını yükleyin.',
    tipCache: 'Yeniden indirmeleri önlemek için HTTP önbellek başlıklarını yapılandırın.',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Web Sürdürülebilirliği Referansları',
  seo: [
    {
      type: 'title',
      text: 'Dijital Karbon Ayak İzi Hesaplayıcı: Web Siteniz Ne Kadar CO₂ Üretiyor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Herhangi bir web sayfasının gerçek çevresel etkisini keşfedin. Boyutunu analiz edin, ziyaret başına CO₂ miktarını tahmin edin ve projelerinizin dijital kirliliğini nasıl azaltacağınızı öğrenin.',
    },
    {
      type: 'title',
      text: 'Bir web sitesinin dijital karbon ayak izi nedir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir web sayfasını her açtığınızda cihazınız, ev yönlendiriciniz, deniz altı kabloları ve dünyanın diğer ucundaki sunucular elektrik tüketir. Bu elektrik hala büyük ölçüde fosil yakıtların yakılmasıyla üretilmektedir. Sonuç: <strong>her ziyaret için atmosfere salınan gerçek miktarda CO₂</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Bir web sitesinin <strong>dijital karbon ayak izi</strong>, ziyaret başına gram cinsinden CO₂ eşdeğeri (gCO₂e) olarak ölçülür. Ortalama bir web sitesi yükleme başına yaklaşık 0,5 gram CO₂ üretir. Önemsiz görünse de, ayda 100.000 ziyareti olan bir site yılda 600 kg\'dan fazla CO₂ salabilir; bu da benzinli bir araçla 3.000 km\'den fazla yol yapmaya eşdeğerdir.',
    },
    {
      type: 'title',
      text: 'Bir web sitesinin CO₂ salınımı nasıl hesaplanır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kullanılan hesaplama modeli, enerji tüketimini dört ana segmente ayıran <strong>Sürdürülebilir Web Tasarımı Modeli</strong> standartlarına dayanmaktadır:',
    },
    {
      type: 'card',
      title: 'Veri Transferi',
      html: 'Sayfanın toplam boyutu kaç gigabayt transfer edildiğini belirler. Standart, ağ altyapısı için <code>0,81 kWh/GB</code> değerini dikkate alır.',
    },
    {
      type: 'card',
      title: 'Kullanıcı Cihazı',
      html: 'Sayfayı alan bilgisayar veya mobil cihaz enerji tüketir. İşlenen verilerin <code>0,52 kWh/GB</code> olduğu tahmin edilmektedir.',
    },
    {
      type: 'card',
      title: 'Karbon Yoğunluğu',
      html: 'Enerji tüketimini gerçek karbon emisyonlarına dönüştürmek için <code>442 gCO₂/kWh</code> olan küresel referans değeri kullanılır.',
    },
    {
      type: 'card',
      title: 'Önbelleğe Alma Faktörü',
      html: 'Model, kullanıcıların %25\'inin kaynakları zaten önbelleğinde tuttuğunu varsayarak <code>0,75</code> faktörünü uygular.',
    },
    {
      type: 'title',
      text: 'Verimlilik derecesi ne anlama gelir?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ ve A:</strong> 0,2 gramdan az CO₂. Çok hafif ve optimize edilmiş siteler.',
        '<strong>B:</strong> 0,2 ile 0,5 gram arası. Küresel ortalamanın altında.',
        '<strong>C:</strong> 0,5 ile 1 gram arası. Mevcut web için ortalama değer.',
        '<strong>D ve E:</strong> 1 ile 4 gram arası. İlgili etkiye sahip ağır sayfalar.',
        '<strong>F:</strong> Ziyaret başına 4 gramdan fazla. Çok yüksek etki.',
      ],
    },
    {
      type: 'title',
      text: 'Web sitenizin karbon ayak izi nasıl azaltılır?',
      level: 2,
    },
    {
      type: 'card',
      title: 'Görüntü Optimizasyonu',
      html: 'Fark edilir bir kalite kaybı olmadan boyutu %80\'e kadar azaltmak için <strong>WebP veya AVIF</strong> gibi formatlar kullanın.',
    },
    {
      type: 'card',
      title: 'Sunucu Sıkıştırma',
      html: '<strong>Brotli veya GZIP</strong>\'i etkinleştirmek metin dosyalarının boyutunu %70\'e kadar azaltır.',
    },
    {
      type: 'card',
      title: 'Sürdürülebilir Barındırma',
      html: '<strong>Sertifikalı yenilenebilir enerji</strong> kullanan bir sağlayıcı seçmek etkiyi neredeyse %100 oranında azaltabilir.',
    },
    {
      type: 'card',
      title: 'Önbellek ve CDN',
      html: 'Gereksiz yeniden indirmeleri önlemek için <strong>uzun süreli önbellek başlıkları</strong> yapılandırın.',
    },
    {
      type: 'title',
      text: 'İnternetin iklim üzerindeki gerçek etkisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İnternet, havacılık endüstrisiyle karşılaştırılabilecek bir rakam olan <strong>küresel CO₂ emisyonlarının %2 ile %4\'ünü</strong> temsil etmektedir. Elediğiniz her kilobayt sadece web sitenizi hızlandırmakla kalmaz: dijital kirliliği ölçülebilir şekilde azaltır.',
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
