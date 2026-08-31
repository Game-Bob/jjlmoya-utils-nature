import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'yaban-hayati-fotokapan-caba-planlayici';
const title = 'Yaban hayatı fotokapan çabası planlayıcısı';
const description = 'Fotokapan çalışmasının çabasını planlayın, kamera günlerini ve görüntü inceleme yükünü tahmin edin; nüfus tahmini yapmayın.';
const faqData = [
  { question: 'Kamera günleri nedir?', answer: 'Kamera günleri, çalışan kamera sayısının etkin gün sayısıyla çarpımıdır. Örnekleme çabasını gösterir, alandaki hayvan sayısını göstermez.' },
  { question: 'Planlayıcı yaban hayatı nüfusunu hesaplar mı?', answer: 'Hayır. İşletme çabasını ve nominal bir planlama alanını tahmin eder. Sayı, yoğunluk ve kullanım için eksik tespiti dikkate alan doğrulanmış tasarım ve model gerekir.' },
  { question: 'İstasyon aralığı ne işe yarar?', answer: 'Her kamera için nominal kare hücre oluşturur ve hedefi alan ile kamera sayısından çıkan eşit ızgara aralığıyla karşılaştırır. Bu bir tespit yarıçapı değildir.' },
  { question: 'İnceleme programı nasıl kullanılmalı?', answer: 'Haftalık noktaları ziyaret, pil, depolama ve görüntü incelemesini planlamak için kullanın. Bunları gerçek saha protokolünüzdeki ziyaretlerle değiştirin.' },
];
const howToData = [
  { name: 'Araştırma alanını tanımlayın', text: 'Kamera yerleşiminin örnekleyeceği alanı girin. Metrik veya emperyal seçim fiziksel değeri korur.' },
  { name: 'Çabayı yerleşime dönüştürün', text: 'Kamera sayısını, süreyi ve hedef aralığı girin. Çizim göreli bir plan ızgarasıdır; koordinat veya garanti edilen tespit bölgesi değildir.' },
  { name: 'Görüntü yükünü tahmin edin', text: 'Kamera başına günlük beklenen olayları girin. Planlayıcı bunları kamera günleriyle çarpar ve kontrollere dağıtır.' },
  { name: 'Saha kayıtlarını hazırlayın', text: 'Kamera ve oturumlara benzersiz kimlik verin, yerleşimi yazın ve hayvan görülmese de her kontrolü kaydedin.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Kamera başına alan',
    labelSurveyArea: 'Araştırma alanı', labelCameraCount: 'Kamera istasyonları', labelDeploymentDays: 'Yerleştirme günleri', labelSpacing: 'Hedef istasyon aralığı', labelTriggerRate: 'Kamera başına günlük beklenen olay', unitHectares: 'ha', unitAcres: 'akre', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'kamera', unitDays: 'gün', unitEventsPerDay: 'günlük olay', helpSurveyArea: 'Yerleşimin örnekleyeceği alan.', helpCameraCount: 'Bu çalışmadaki etkin kameralar.', helpDeploymentDays: 'Kurulumdan toplamaya kadar günler.', helpSpacing: 'Planlama hücresi; tespit yarıçapı değildir.', helpTriggerRate: 'Benzer bir çalışma veya denemeden temkinli oran kullanın.', unitSystemLabel: 'Ölçüm sistemi', metricLabel: 'Metrik', imperialLabel: 'Emperyal', presetsTitle: 'Saha başlangıçları', presetBackyard: 'Orman kenarı', presetWoodland: 'Karışık orman', presetReserve: 'Büyük koruma alanı', mapLabel: 'Göreli yerleşim çizimi', mapCaption: 'Numaralı istasyonlar göreli plan ızgarında gösterilir. Hücreler habitat kapsama haritası değildir.', stationLabel: 'istasyon', cameraDaysLabel: 'Kamera günleri', expectedEventsLabel: 'Beklenen olaylar', spacingLabel: 'Eşit ızgara aralığı', reviewLoadLabel: 'İnceleme başına olay', reviewScheduleTitle: 'İnceleme ritmi', reviewScheduleText: 'Haftalık noktalar yerleşimden önce görüntü yükünü görünür kılar. Kendi protokolünüzdeki ziyaretlerle değiştirin.', reviewDayLabel: 'Gün', reviewEventsLabel: 'beklenen olay', statusBalanced: 'Aralık dengeli görünüyor', statusSparse: 'İstasyonlar uzak görünüyor', statusDense: 'İstasyonlar yakın görünüyor', statusReviewHeavy: 'İnceleme yüküne dikkat edin', statusNeedsInput: 'Yerleşim planını tamamlayın', statusNote: 'Bu bir çaba planıdır. Alandaki hayvan sayısını söylemez ve tür tespitini garanti etmez.', assumptionTitle: 'Model varsayımları', assumptionText: 'Nominal alan her istasyonu hedef aralığa dayalı kare hücre sayar. Beklenen olaylar tüm kamera ve günlerde sabit oran varsayar.', limitationTitle: 'Saha sınırları', limitationText: 'Konumları yalnız geometriye göre değil, tür ve soruya göre seçin. Kimlikleri, tarihleri, yönü, yüksekliği, habitatı ve boş kontrolleri kaydedin.',
  },
  seo: [
    { type: 'title', text: 'Fotokapan çalışma çabasını planlayın', level: 2 },
    { type: 'paragraph', html: 'Bir fotokapan projesi yerleştirmeden önce iki soruya cevap vermelidir. Yerleşim ne kadar örnekleme çabası yaratıyor? Beklenen görüntü akışı saklanabilir, incelenebilir ve belgelenebilir mi? Bu planlayıcı bunları kamera günleri, olaylar, istasyon çizimi ve kontroller olarak düzenler.' },
    { type: 'title', text: 'Çabayı kamera günleriyle anlatın', level: 3 },
    { type: 'paragraph', html: 'Kamera günleri <code>kamera istasyonları × yerleştirme günleri</code> şeklinde hesaplanır. On iki kamera 28 gün çalışırsa 336 kamera günü oluşur. Bu kampanyaları karşılaştırır, ancak nüfus tahmini değildir ve arıza, habitat ya da davranışı düzeltmez.' },
    { type: 'list', items: ['<strong>İstasyonlar:</strong> kampanyada çalışan cihazlar.', '<strong>Günler:</strong> kurulumdan toplamaya kadar planlanan süre.', '<strong>Olay oranı:</strong> seri çekimdeki her fotoğraf değil, kamera başına günlük olay.', '<strong>Kontroller:</strong> depolama, pil, ziyaret ve incelemeyi planlayın.'] },
    { type: 'title', text: 'Çizimi saha yardımcısı olarak okuyun', level: 3 },
    { type: 'paragraph', html: 'Çizim alanı, kamera sayısını ve hedef aralığı göreli bir yerleşim için kullanır. Nominal alan istasyon sayısının aralığın karesiyle çarpımıdır. Sensör alanı değildir; arazi, bitki örtüsü, yükseklik, yön ve davranış tespit olasılığını değiştirir.' },
    { type: 'title', text: 'Kurulumdan önce kayıtları hazırlayın', level: 3 },
    { type: 'paragraph', html: 'Hedef türü ve araştırma sorusunu belirleyin. Her kamera ve oturuma kalıcı kimlik verin. Tarih, konum, yükseklik, yön, habitat, ayarlar ve çalışma durumunu kaydedin. Tespit olmayan kontrol de gerçek bir saha gözlemidir.' },
    { type: 'tip', title: 'Çabayı hayvan sayısına çevirmeyin', html: 'Fotokapanlarda eksik tespit vardır. Saha ve görüntü bütçesi için planlayıcıyı, kullanım, sayı, yoğunluk veya nüfus değişimi için doğrulanmış ekolojik tasarımı kullanın.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
