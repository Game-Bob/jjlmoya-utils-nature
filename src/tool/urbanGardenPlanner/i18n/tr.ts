import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'sehir-bahcesi-toprak-ve-yagmur-suyu-planlayici';
const title = 'Şehir Bahçesi Toprak ve Yağmur Suyu Planlayıcısı';
const description = 'Yükseltilmiş yatak veya saksı bahçesi için toprak hacmini ve toplanabilecek yağmur suyunu hesaplayın.';

const faqData = [
  { question: 'Toprak hacmi nasıl hesaplanır?', answer: 'Alanı uzunluk ile genişliğin çarpımı, ardından bu sonucu yatak derinliği ile çarpımı olarak hesaplayın. Sonucu litreye çevirmek için 1000 ile çarpın.' },
  { question: 'Yağmur suyu ne kadar toplanabilir?', answer: 'Yaklaşık su hacmi, toplama alanı, yağış miktarı ve akış katsayısının çarpımıdır. Planlayıcı, yağış miktarı için seçtiğiniz birimi metrekare başına litre olarak kullanır.' },
  { question: 'Akış katsayısı ne anlama gelir?', answer: 'Akış katsayısı, yağışın ne kadarının depoya ulaşacağını tahmin eder. Yapraklar, yüzey koşulları ve sıçrama nedeniyle oluşan kayıpları hesaba katmak için 1 değerinden küçük bir katsayı seçin.' },
  { question: 'Bu hesaplamalar çevrimdışı çalışır mı?', answer: 'Evet. Değerler tarayıcınızda hesaplanır ve kaydedilen senaryolar cihazınızdaki yerel depolama alanında tutulur.' },
];

const howToData = [
  { name: 'Yatak veya saksı ölçülerini girin', text: 'Uzunluk, genişlik ve toprak derinliği değerlerini metre cinsinden yazın.' },
  { name: 'Yağmur suyu ayarlarını yapın', text: 'Toplama alanını metrekare, yağış miktarını milimetre ve akış katsayısını girin.' },
  { name: 'Sonuçları karşılaştırın', text: 'Gerekli toprak hacmini ve tahmini yağmur suyu miktarını birlikte inceleyin.' },
  { name: 'Senaryoyu kaydedin', text: 'Aynı sayfada farklı bahçe seçeneklerini karşılaştırmak için senaryonuza bir ad verip kaydedin.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Şehir bahçesi toprak ve yağmur suyu hesabı yapma',
  step: howToData.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  isAccessibleForFree: true,
};

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'Küçük bir bahçe, canlı katmanlarıyla ölçülür',
    headInputs: 'Bahçe koşullarını ayarla',
    headScene: 'Manzarayı oku',
    labelGardenArea: 'Yetiştirme alanı',
    labelDepth: 'Toprak derinliği',
    labelCollectionArea: 'Toplama alanı',
    labelRainfall: 'Yağış olayı',
    unitSquareMeters: 'm²',
    unitCentimeters: 'cm',
    unitMillimeters: 'mm',
    unitLiters: 'L',
    helpGardenArea: 'Yatak, balkon veya saksının kapladığı alan.',
    helpDepth: 'Doldurmak istediğiniz toprak katmanı.',
    helpCollectionArea: 'Suyu deponuza gönderen yüzey.',
    helpRainfall: 'Yakın zamanda yağan yağmuru veya yerel tasarım yağışını deneyin.',
    presetsTitle: 'Bir şekille başlayın',
    presetBalcony: 'Balkon yatağı',
    presetRaisedBed: 'Yükseltilmiş yatak',
    presetCommunity: 'Topluluk bahçesi',
    labelSoilNeeded: 'Gerekli toprak',
    labelWaterCaptured: 'Toplanan su',
    labelGardenDepth: 'Bu bahçe alanına yayılırsa',
    labelWateringArea: '10 mm suyla',
    sceneCatchment: 'Toplama alanı',
    sceneGardenBed: 'Yetiştirme alanı',
    sceneSoil: 'Toprak katmanı',
    sceneWater: 'Toplanan su',
    statusBalanced: 'Planlama için yararlı bir eşleşme',
    statusLightCapture: 'Hafif bir yağış olayı',
    statusDeepBed: 'Derin bir toprak profili',
    statusNoRain: 'Yağış olayı bekleniyor',
    statusNote: 'Malzeme miktarını belirlemek ve senaryoları karşılaştırmak için bu özeti kullanın. Bu bir sulama reçetesi değildir.',
    assumptionTitle: 'Planlama varsayımları',
    assumptionText: 'Tahmin, yağışın yüzde 85 ini akış ve toplama kayıplarından sonra yüzde 90 ını korur. Bir metrekareye yayılan bir litre su, bir milimetre suya eşittir.',
    limitationTitle: 'Bahçeyi güvenli tutun',
    limitationText: 'Drenaj sağlayın, kirlenmiş toplama yüzeylerinden kaçının ve toplanan suyu yenilebilir ürünlerde kullanmadan önce yerel kuralları kontrol edin.',
  },
  seo: [
    { type: 'title', text: 'Şehir bahçesi için toprak hacmi ve yağmur suyu hesaplayın', level: 2 },
    { type: 'paragraph', html: 'Yükseltilmiş bir yatak, balkon veya topluluk bahçesi iki pratik soru doğurur: yetiştirme alanını doldurmak için kaç litre toprak gerekir ve yakındaki bir çatı ya da tente ne kadar yağmur suyu toplayabilir? Bu planlayıcı iki tahmini küçük bahçeler, saksılar, balkonlar ve ortak bahçeler için yan yana sunar.' },
    { type: 'title', text: 'Yükseltilmiş yatak toprak hacmi formülü', level: 3 },
    { type: 'paragraph', html: 'Hesaplama yerel olarak <code>metrekare cinsinden alan x santimetre cinsinden derinlik x 10 = litre toprak</code> formülüyle yapılır. Örneğin 12 m² alana ve 30 cm derinliğe sahip bir yatak, oturma, drenaj katmanları veya dikim planı hesaba katılmadan önce 3.600 litre gerektirir.' },
    { type: 'list', items: ['Uzunluk, genişlik ve derinliği metre cinsinden girin.', 'Sonucu litre olarak kontrol edin.', 'Farklı yatak ölçülerini kayıtlı senaryolarla karşılaştırın.'] },
    { type: 'title', text: 'Yağmur suyu toplama tahmini', level: 3 },
    { type: 'paragraph', html: 'Su tahmini <code>toplama alanı x yağış miktarı</code> ile başlar, ardından akış için yüzde 85 ve toplama kayıplarından sonra yüzde 90 kullanılır. Bir metrekareye yayılan bir litre su bir milimetreye eşittir; bu da sonucu yetiştirme alanıyla kolayca karşılaştırmayı sağlar.' },
    { type: 'title', text: 'Bahçe seçeneklerini çevrimdışı karşılaştırın', level: 3 },
    { type: 'paragraph', html: 'Balkon yatağı, yükseltilmiş yatak ve topluluk bahçesi ön ayarlarını deneyin, sonra bunları kendi ölçülerinizle değiştirin. Araç adres, harita veya hava durumu bağlantısı istemez; senaryolar tarayıcıda kalır ve aynı sayfada karşılaştırılabilir.' },
    { type: 'tip', title: 'Önemli sınırlar', html: 'Drenaj, su kalitesi, buharlaşma, bitki seçimi ve yerel kurallar insan değerlendirmesi gerektirir. Kirlenmiş çatılar veya depolar, yenilebilir bitkiler için otomatik olarak uygun değildir. Yağış miktarı için bölgenizdeki güvenilir meteoroloji verilerini kullanın.' },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
