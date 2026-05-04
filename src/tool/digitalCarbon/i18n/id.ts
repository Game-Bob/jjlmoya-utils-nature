import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'kalkulator-jejak-karbon-digital';
const title = 'Kalkulator Jejak Karbon Digital';
const description = 'Analisis dampak lingkungan dari halaman web mana pun. Perkirakan konsumsi energi dan emisi CO₂ per kunjungan.';

const faqData = [
  {
    question: 'Apa itu jejak karbon situs web?',
    answer: 'Ini adalah jumlah gas rumah kaca, terutama CO₂, yang dilepaskan ke atmosfer sebagai hasil dari energi yang dikonsumsi oleh server, jaringan transmisi, dan perangkat pengguna untuk memuat dan merender halaman web.',
  },
  {
    question: 'Bagaimana dampak situs web diukur?',
    answer: 'Biasanya diukur dalam gram setara CO₂ (gCO₂e) per kunjungan. Situs web yang efisien memancarkan kurang dari 0,2g CO₂, sementara halaman yang tidak dioptimalkan dapat melebihi 2 atau 3g per pemuatan.',
  },
  {
    question: 'Mengapa internet mencemari lingkungan?',
    answer: 'Karena semua infrastruktur yang diperlukan (pusat data, kabel bawah laut, router WiFi, ponsel cerdas) dijalankan dengan listrik yang, di sebagian besar dunia, masih berasal dari pembakaran batu bara atau gas.',
  },
  {
    question: 'Bagaimana saya bisa mengurangi CO₂ situs web saya?',
    answer: 'Cara paling efektif adalah dengan mengurangi berat halaman: optimalkan gambar (WebP), minifikasi file CSS dan JS, gunakan lazy loading, dan pilih penyedia hosting yang menggunakan energi terbarukan.',
  },
];

const howToData = [
  {
    name: 'Masukkan URL',
    text: 'Ketik alamat web halaman yang ingin Anda analisis ke dalam kolom input.',
  },
  {
    name: 'Mulai analisis',
    text: 'Klik tombol analisis untuk membiarkan alat kami memperkirakan berat sumber daya halaman.',
  },
  {
    name: 'Tinjau peringkat Anda',
    text: 'Dapatkan nilai A+ hingga F berdasarkan efisiensi energi dari situs web yang dianalisis.',
  },
  {
    name: 'Terapkan perbaikan',
    text: 'Gunakan daftar tips yang dipersonalisasi untuk mengurangi berat situs dan dampak lingkungan Anda.',
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
  inLanguage: 'id',
};

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Penganalisis URL',
    headResults: 'Hasil Dampak',
    headTips: 'Tips Optimalisasi',
    labelUrl: 'URL Halaman',
    btnAnalyze: 'Analisis Situs Web',
    btnAnalyzing: 'Menganalisis...',
    placeholderUrl: 'https://contoh.com',
    errorInvalidUrl: 'Silakan masukkan URL yang valid.',
    errorFetchFailed: 'Tidak dapat menganalisis situs web. Coba URL lain.',
    
    resultTitle: 'Jejak Karbon Digital',
    resultSubtitle: 'Perkiraan efisiensi halaman',
    co2PerVisit: 'CO₂ per kunjungan',
    energyPerVisit: 'Energi yang dikonsumsi',
    co2Annual: 'CO₂ Tahunan (100rb kunjungan)',
    impactTitle: 'Dampak Tahunan Nyata',
    impactTrees: 'Pohon yang dibutuhkan',
    impactKm: 'Jarak mengemudi km (perkiraan)',
    treesLabel: 'Pohon',
    kmLabel: 'Kilometer',
    
    ratingExcellent: 'Sangat Baik. Halaman ini mengonsumsi sangat sedikit energi dibandingkan dengan rata-rata global.',
    ratingVeryGood: 'Efisiensi sangat baik. Halaman dioptimalkan dengan baik dan memiliki dampak minimal.',
    ratingGood: 'Efisiensi yang dapat diterima. Ada ruang untuk perbaikan tetapi di bawah rata-rata.',
    ratingAverage: 'Rata-rata. Halaman mengonsumsi apa yang diharapkan pada web saat ini.',
    ratingPoor: 'Di atas rata-rata. Pertimbangkan untuk mengoptimalkan gambar, skrip, dan font.',
    ratingVeryPoor: 'Dampak tinggi. Berat halaman signifikan dan harus dikurangi.',
    ratingCritical: 'Dampak sangat tinggi. Ada peluang besar untuk mengurangi ukuran halaman.',
    
    tipImages: 'Ubah gambar menjadi WebP atau AVIF untuk mengurangi beratnya hingga 70%.',
    tipCompression: 'Aktifkan Brotli atau GZIP di server untuk mengompresi sumber daya.',
    tipLazyLoading: 'Gunakan lazy loading pada gambar dan video di luar viewport.',
    tipHosting: 'Pilih hosting dengan energi terbarukan (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Hapus skrip analitik yang tidak perlu dan widget pihak ketiga.',
    tipFonts: 'Muat hanya tebal tipografi yang benar-benar Anda gunakan.',
    tipCache: 'Konfigurasikan header cache HTTP untuk menghindari pengunduhan ulang.',
  },
  faq: faqData,
  howTo: howToData,
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Jejak Karbon Digital: Berapa Banyak CO₂ yang Dihasilkan Situs Web Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Temukan dampak lingkungan nyata dari halaman web mana pun. Analisis beratnya, perkirakan gram CO₂ per kunjungan, dan pelajari cara mengurangi polusi digital dari proyek-proyek Anda.',
    },
    {
      type: 'title',
      text: 'Apa itu jejak karbon digital sebuah situs web?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setiap kali Anda membuka halaman web, perangkat Anda, router rumah, kabel bawah laut, dan server di sisi lain dunia mengonsumsi listrik. Listrik tersebut sebagian besar masih dihasilkan dengan membakar bahan bakar fosil. Hasilnya: jumlah nyata <strong>CO₂ yang dilepaskan ke atmosfer untuk setiap kunjungan</strong>.',
    },
    {
      type: 'paragraph',
      html: '<strong>Jejak karbon digital</strong> sebuah situs web diukur dalam gram setara CO₂ (gCO₂e) per kunjungan. Situs web rata-rata menghasilkan sekitar 0,5g CO₂ per pemuatan. Meskipun tampak tidak signifikan, situs dengan 100.000 kunjungan bulanan dapat memancarkan lebih dari 600kg CO₂ per tahun, setara dengan mengendarai mobil bensin lebih dari 3.000 km.',
    },
    {
      type: 'title',
      text: 'Bagaimana CO₂ situs web dihitung?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Model perhitungan yang digunakan didasarkan pada standar <strong>Sustainable Web Design Model</strong>, yang membagi konsumsi energi menjadi empat segmen utama:',
    },
    {
      type: 'card',
      title: 'Transfer Data',
      html: 'Berat total halaman menentukan berapa gigabyte yang ditransfer. Standarnya mempertimbangkan <code>0,81 kWh/GB</code> untuk infrastruktur jaringan.',
    },
    {
      type: 'card',
      title: 'Perangkat Pengguna',
      html: 'Komputer atau ponsel yang menerima halaman mengonsumsi energi. Diperkirakan <code>0,52 kWh/GB</code> data yang diproses.',
    },
    {
      type: 'card',
      title: 'Intensitas Karbon',
      html: 'Nilai referensi global sebesar <code>442 gCO₂/kWh</code> digunakan untuk mengubah konsumsi energi menjadi emisi karbon nyata.',
    },
    {
      type: 'card',
      title: 'Faktor Caching',
      html: 'Model ini menerapkan faktor <code>0,75</code> dengan asumsi bahwa 25% pengguna sudah memiliki sumber daya yang di-cache.',
    },
    {
      type: 'title',
      text: 'Apa arti peringkat efisiensi?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ dan A:</strong> Kurang dari 0,2g CO₂. Situs yang sangat ringan dan dioptimalkan.',
        '<strong>B:</strong> Antara 0,2 dan 0,5g. Di bawah rata-rata global.',
        '<strong>C:</strong> Antara 0,5 dan 1g. Rata-rata untuk web saat ini.',
        '<strong>D dan E:</strong> Antara 1 dan 4g. Halaman berat dengan dampak yang relevan.',
        '<strong>F:</strong> Lebih dari 4g per kunjungan. Dampak sangat tinggi.',
      ],
    },
    {
      type: 'title',
      text: 'Cara mengurangi jejak karbon situs web Anda',
      level: 2,
    },
    {
      type: 'card',
      title: 'Optimalisasi Gambar',
      html: 'Gunakan format seperti <strong>WebP atau AVIF</strong> untuk mengurangi ukuran hingga 80% tanpa kehilangan kualitas yang terlihat.',
    },
    {
      type: 'card',
      title: 'Kompresi Server',
      html: 'Mengaktifkan <strong>Brotli atau GZIP</strong> mengurangi ukuran file teks hingga 70%.',
    },
    {
      type: 'card',
      title: 'Hosting Berkelanjutan',
      html: 'Memilih penyedia dengan <strong>energi terbarukan bersertifikat</strong> dapat mengurangi dampak hingga hampir 100%.',
    },
    {
      type: 'card',
      title: 'Cache dan CDN',
      html: 'Konfigurasikan <strong>header cache yang panjang</strong> untuk menghindari pengunduhan ulang yang tidak perlu.',
    },
    {
      type: 'title',
      text: 'Dampak nyata internet terhadap iklim',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet mewakili antara <strong>2% dan 4% emisi CO₂ global</strong>, angka yang sebanding dengan industri penerbangan. Setiap kilobyte yang Anda hilangkan tidak hanya membuat situs web Anda lebih cepat: ia mengurangi polusi digital secara terukur.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
