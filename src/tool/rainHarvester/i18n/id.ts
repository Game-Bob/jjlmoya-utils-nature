import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'kalkulator-air-hujan';
const title = 'Kalkulator Pemanenan Air Hujan';
const description = 'Hitung berapa banyak air hujan yang dapat Anda kumpulkan dari atap Anda dan tentukan ukuran tangki penyimpanan Anda.';

const faqData = [
  {
    question: 'Berapa banyak air yang sebenarnya bisa saya kumpulkan dari atap saya?',
    answer: 'Aturan umumnya adalah untuk setiap meter persegi atap dan setiap milimeter hujan, Anda dapat mengumpulkan sekitar 1 liter air. Namun, ada kehilangan dari penguapan dan filtrasi yang disesuaikan dengan "koefisien limpasan".',
  },
  {
    question: 'Apa itu koefisien limpasan?',
    answer: 'Ini adalah persentase yang menunjukkan seberapa banyak air yang hilang tergantung pada bahan atap. Atap logam atau genteng sangat efisien (0,85-0,95), sedangkan atap kerikil atau tanah jauh kurang efisien (0,1-0,3).',
  },
  {
    question: 'Bagaimana cara menentukan ukuran tangki penyimpanan?',
    answer: 'Anda harus menghitung volume hujan maksimum yang diharapkan dalam sebulan dan mencocokkannya dengan perkiraan konsumsi bulanan Anda. Tangki yang terlalu kecil akan meluap saat badai, dan tangki yang terlalu besar akan membuang biaya yang tidak perlu.',
  },
  {
    question: 'Apakah aman meminum air hujan yang dikumpulkan?',
    answer: 'Tidak secara langsung. Air membawa debu, kotoran burung, dan partikel di udara. Untuk konsumsi manusia, air harus melewati filter sedimen, karbon aktif, dan disinfeksi menggunakan lampu UV atau klorin.',
  },
];

const howToData = [
  {
    name: 'Ukur permukaan horizontal',
    text: 'Ukur panjang dan lebar alas atap Anda (bukan permukaan yang miring, melainkan area yang memproyeksikan bayangan di tanah).',
  },
  {
    name: 'Periksa curah hujan lokal',
    text: 'Cari layanan meteorologi nasional untuk rata-rata curah hujan tahunan atau bulanan di daerah Anda dalam milimeter (mm).',
  },
  {
    name: 'Terapkan efisiensi bahan',
    text: 'Pilih bahan atap Anda di kalkulator kami untuk memotong air yang akan hilang melalui penyerapan atau panas.',
  },
  {
    name: 'Hitung volume yang dibutuhkan',
    text: 'Gunakan hasil liter tahunan untuk memilih tangki yang dapat menampung setidaknya 20-30% dari total panen untuk periode kering.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Pengaturan Atap',
    headResults: 'Potensi Panen',
    labelArea: 'Luas Atap',
    labelRainfall: 'Curah Hujan Tahunan',
    labelMaterial: 'Bahan Atap',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Liter',
    helpRainfall: 'Tidak tahu? Cari "rata-rata curah hujan tahunan [kota Anda]" di Google.',
    efficiencyTitle: 'Faktor Efisiensi',
    efficiencyNote: 'Kehilangan 10% diterapkan untuk filter dan penguapan.',
    resultTitle: 'Potensi Panen Tahunan',
    equivalenciesTitle: 'Setara Praktis',
    labelFlushes: 'Siraman Toilet',
    labelShowers: 'Mandi (10 menit)',
    labelGarden: 'Menyiram Taman',
    gardenArea: '(50m²)',
    materialMetal: 'Logam / Genteng Mengkilap',
    materialClay: 'Genteng Tanah Liat',
    materialConcrete: 'Beton / Aspal',
    materialGravel: 'Kerikil / Atap Hijau',
  },
  seo: [
    {
      type: 'title',
      text: 'Pemanenan Air Hujan: Otonomi dan Keberlanjutan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar pemilik rumah tidak menyadari potensi atap mereka sendiri. Atap standar dapat menampung ribuan liter air gratis setiap tahun. Alat ini mengukur potensi tersebut, memungkinkan Anda menghitung dengan tepat berapa banyak air yang dapat Anda "panen" dan menentukan ukuran tangki yang ideal untuk penyimpanan.',
    },
    {
      type: 'title',
      text: 'Logika Perhitungan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rumus dasar untuk pengumpulan air hujan sederhana namun kuat:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volume = Luas × Curah Hujan × Koefisien Limpasan × Efisiensi Filter</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Luas:</strong> Alas atap Anda (panjang × lebar proyeksi).',
        '<strong>Curah Hujan:</strong> Hujan yang turun dalam milimeter.',
        '<strong>Koefisien:</strong> Seberapa banyak air yang hilang di atap Anda (misalnya, penyerapan).',
        '<strong>Efisiensi:</strong> Kehilangan pada filter sebelum tangki (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Memanen Air Hujan?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Penghematan:</strong> Mengurangi tagihan air Anda secara signifikan.',
        '<strong>Berkebun:</strong> Tanaman menyukai air tanpa kaporit atau kapur.',
        '<strong>Ketahanan:</strong> Menjaga cadangan darurat jika terjadi pemutusan aliran air.',
      ],
    },
    {
      type: 'title',
      text: 'Penentuan Ukuran Tangki',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kesalahan paling umum adalah membeli tangki hanya berdasarkan anggaran. Jika terlalu kecil, Anda akan membuang ribuan liter karena meluap. Jika terlalu besar, Anda akan menghabiskan uang secara tidak perlu. Aturan umumnya adalah memiliki kapasitas untuk menyimpan <strong>3 bulan</strong> rata-rata curah hujan di daerah Anda, yang memungkinkan Anda menjembatani musim kemarau.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
