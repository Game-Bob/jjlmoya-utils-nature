import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'cricket-termometer';
const title = 'Cırcır Böceği Termometresi – Dolbear Yasası Sıcaklık Hesaplayıcı';
const description =
  'Termometreniz mi yok? Cırcır böceklerini dinleyin. Dolbear Yasası hesaplayıcımızla ötüşleri sayarak tam sıcaklığı hesaplayın.';

const faqData = [
  {
    question: 'Dolbear Yasası nedir?',
    answer:
      '1897\'de Amos Dolbear tarafından formüle edilen bu yasa, cırcır böceklerinin ötüş hızı ile ortam hava sıcaklığı arasında doğrusal bir korelasyon olduğunu keşfeden bilimsel bir gözlemdir.',
  },
  {
    question: 'Cırcır böcekleri neden sıcakta daha hızlı öter?',
    answer:
      'Cırcır böcekleri soğukkanlı hayvanlardır (ektotermler). Metabolik süreçlerinin ve kas kasılmalarının hızı dış sıcaklığa bağlıdır; hava ne kadar sıcaksa, hızla ses çıkarmak için o kadar fazla enerjiye sahip olurlar.',
  },
  {
    question: 'Bu ölçüm doğru mu?',
    answer:
      'Kar ağacı cırcır böceği (Oecanthus fultoni) gibi türler için şaşırtıcı derecede doğrudur ve doğru sayıldığında yaklaşık 0,5°C\'lik bir hata payına sahiptir. Ancak nem veya rüzgar gibi faktörler sonucu değiştirebilir.',
  },
  {
    question: 'Hesaplama için hangi cırcır böceğini kullanmalıyım?',
    answer:
      'Orijinal formül kar ağacı cırcır böceğine dayanmaktadır. Yaygın tarla cırcır böceği için ilişki benzerdir ancak hız biraz daha yavaş olma eğilimindedir.',
  },
];

const howToData = [
  {
    name: 'Yalnız bir cırcır böceği bulun',
    text: 'Ritimlerin karışmasını önlemek için geceleri tek bir cırcır böceğinin ötüşünü net bir şekilde duyabileceğiniz sessiz bir yer bulun.',
  },
  {
    name: '15 saniye boyunca ötüşleri sayın',
    text: 'Bir kronometre kullanın ve böceğin tam 15 saniyede kaç kez ses çıkardığını sayın.',
  },
  {
    name: 'Değeri girin',
    text: 'Hesaplayıcının BPM\'i otomatik olarak hesaplaması için ötüşlerle ritmik olarak birkaç saniye boyunca TAP butonuna dokunun.',
  },
  {
    name: 'Sıcaklığı doğrulayın',
    text: 'Sistem, size Celsius cinsinden ortam ısısı tahmini vermek için T(°C) = 10 + (N - 40) / 7 formülünü uygulayacaktır.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bilimsel Referanslar',
  bibliography: [
    {
      name: 'The American Naturalist - The Cricket as a Thermometer',
      url: 'https://www.jstor.org/stable/2453256',
    },
    {
      name: 'Wikipedia - Dolbear\'s Law',
      url: 'https://en.wikipedia.org/wiki/Dolbear%27s_law',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tam Kılavuz: Sıcaklığı Hesaplamak İçin Dolbear Yasası Nasıl Kullanılır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sadece doğayı dinleyerek tam sıcaklığı öğrenebileceğinizi biliyor muydunuz? 1897\'de fizikçi Amos Dolbear, cırcır böceği ötüş hızı ile ortam ısısı arasında kesin bir matematiksel ilişki keşfetti. Bu araç, telefonunuzu doğal bir termometreye dönüştürmek için bu keşfi dijitalleştiriyor.',
    },
    {
      type: 'tip',
      title: 'Cırcır böcekleri neden şarkı söyler?',
      html: '<p>Cırcır böceğinin "şarkısı" veya <strong>stridülasyonu</strong> aslında bir çiftleşme çağrısıdır. Erkekler bu sesi çıkarmak için kanatlarını (bacaklarını değil) birbirine sürterler. Büyüleyici bir şekilde, soğukkanlı hayvanlar (ektotermler) oldukları için, bu sürtünme hızı doğrudan havanın termal enerjisine bağlıdır.</p>',
    },
    {
      type: 'title',
      text: 'Bilim: Ektotermi ve Metabolizma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vücut ısısını sabit tutan memelilerin aksine böcekler dış ısıya bağımlıdır. Biyokimyasal reaksiyonları <strong>Arrhenius Denklemini</strong> takip eder: ısı ne kadar artarsa reaksiyon o kadar hızlanır.',
    },
    {
      type: 'paragraph',
      html: 'Bu, cırcır böceğinin kaslarının kasılması ve kanatlarını sürtmesi için enzimatik reaksiyonlara ihtiyaç duyduğu anlamına gelir. Hava soğuksa bu reaksiyonlar yavaştır ve ötüş ağırlaşır. Hava sıcaksa metabolizma hızlanır ve şarkı çılgın bir titremeye dönüşür.',
    },
    {
      type: 'title',
      text: 'Dolbear Formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Farklı türler için varyasyonlar olsa da, en ünlü formül kar ağacı cırcır böceği (<em>Oecanthus fultoni</em>) içindir. Sıcaklığı Celsius cinsinden elde etmek için:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nBurada N = dakikadaki ötüş sayısıdır.',
      ariaLabel: 'Cırcır böceği ötüşlerinden sıcaklığı hesaplamak için Dolbear yasası',
    },
    {
      type: 'paragraph',
      html: 'Aracımız bunu otomatik olarak yapar: dokunuşlarınız arasındaki süreyi ölçer, dakikadaki ötüş sayısını (BPM) hesaplar ve formülü anında uygular.',
    },
    {
      type: 'title',
      text: 'Büyüleyici Gerçekler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Aşk Termometreleri:</strong> Bazı teoriler, dişilerin mevcut sıcaklık için "doğru" frekansta şarkı söyleyen erkekleri tercih ettiğini, çünkü bunun erkeğin sağlıklı olduğunu ve güçlü bir metabolizmaya sahip olduğunu gösterdiğini öne sürer.',
        '<strong>Soğuk Sınırı:</strong> 10°C\'nin (50°F) altında, çoğu cırcır böceği şarkı söylemeyi bırakır çünkü metabolizmaları kas çabasını sürdüremeyecek kadar yavaştır.',
        '<strong>Senkronizasyon:</strong> Sıcak gecelerde binlerce cırcır böceği ötüşlerini senkronize ederek etkileyici bir "dalga" ses efekti yaratabilir.',
      ],
    },
    {
      type: 'tip',
      title: 'Doğruluk Notu',
      html: '<p>Doğruluk cırcır böceği türüne bağlıdır. Bu araç yaygın tarla cırcır böceği ve ağaç cırcır böceği için kalibre edilmiştir. Nem veya rüzgar gibi faktörler sonucu ±0,5°C değiştirebilir.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Bekleniyor...',
    labelTapping: 'Dokunmaya devam edin...',
    tapInstruction: 'Her ötüş duyduğunuzda',
    btnReset: 'Sıfırla',
    btnSoundOn: 'Ses: Açık',
    btnSoundOff: 'Ses: Kapalı',
    unitChirpsMin: 'ötüş/dak',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bilimsel Referanslar',
  },
};
