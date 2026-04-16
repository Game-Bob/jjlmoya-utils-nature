import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'termometer-jangkrik';
const title = 'Termometer Jangkrik – Kalkulator Suhu Hukum Dolbear';
const description =
  'Tidak ada termometer? Dengarkan jangkrik. Hitung suhu tepat dengan menghitung kerikan menggunakan kalkulator Hukum Dolbear kami.';

const faqData = [
  {
    question: 'Apa itu Hukum Dolbear?',
    answer:
      'Dirumuskan pada tahun 1897 oleh Amos Dolbear, ini adalah observasi ilmiah yang menemukan korelasi linier antara laju kerikan jangkrik dan suhu udara sekitar.',
  },
  {
    question: 'Mengapa jangkrik mengerik lebih cepat saat panas?',
    answer:
      'Jangkrik adalah hewan berdarah dingin (ektoterm). Kecepatan proses metabolisme dan kontraksi otot mereka bergantung pada suhu eksternal; semakin hangat, semakin banyak energi yang mereka miliki untuk mengeluarkan suara dengan cepat.',
  },
  {
    question: 'Apakah pengukuran ini akurat?',
    answer:
      'Sangat akurat untuk spesies seperti jangkrik pohon salju (Oecanthus fultoni), dengan ambang batas kesalahan sekitar 0,5°C jika dihitung dengan benar. Namun, faktor seperti kelembapan atau angin dapat mengubah hasilnya.',
  },
  {
    question: 'Jangkrik mana yang harus saya gunakan untuk perhitungan?',
    answer:
      'Formula aslinya didasarkan pada jangkrik pohon salju. Untuk jangkrik lapangan biasa, hubungannya serupa tetapi lajunya cenderung sedikit lebih lambat.',
  },
];

const howToData = [
  {
    name: 'Temukan jangkrik yang menyendiri',
    text: 'Cari tempat yang tenang di malam hari di mana Anda dapat dengan jelas mendengar kerikan satu jangkrik untuk menghindari kebingungan ritme.',
  },
  {
    name: 'Hitung kerikan selama 15 detik',
    text: 'Gunakan stopwatch dan hitung berapa banyak stridulasi yang dikeluarkan serangga tersebut dalam tepat 15 detik.',
  },
  {
    name: 'Masukkan nilai',
    text: 'Ketuk tombol KETUK (TAP) sesuai irama kerikan selama beberapa detik sehingga kalkulator secara otomatis menghitung BPM.',
  },
  {
    name: 'Verifikasi suhu',
    text: 'Sistem akan menerapkan rumus T(°C) = 10 + (N - 40) / 7 untuk memberi Anda perkiraan panas sekitar dalam derajat Celsius.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi Ilmiah',
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
      text: 'Panduan Lengkap: Cara Menggunakan Hukum Dolbear untuk Menghitung Suhu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tahukah Anda bahwa Anda bisa mengetahui suhu tepat hanya dengan mendengarkan alam? Pada tahun 1897, fisikawan Amos Dolbear menemukan hubungan matematis yang tepat antara laju kerikan jangkrik dan panas sekitar. Alat ini mendigitalisasi penemuan tersebut untuk mengubah ponsel Anda menjadi termometer alami.',
    },
    {
      type: 'tip',
      title: 'Mengapa jangkrik bernyanyi?',
      html: '<p>"Nyanyian" jangkrik, atau <strong>stridulasi</strong>, sebenarnya adalah panggilan kawin. Jantan menggosokkan sayap mereka (bukan kaki mereka) bersama-sama untuk menciptakan suara ini. Menariknya, karena mereka adalah hewan berdarah dingin (ektoterm), kecepatan penggosokan ini bergantung langsung pada energi termal udara.</p>',
    },
    {
      type: 'title',
      text: 'Sains: Ektotermi dan Metabolisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Berbeda dengan mamalia yang menjaga suhu tubuh tetap konstan, serangga bergantung pada panas eksternal. Reaksi biokimia mereka mengikuti <strong>Persamaan Arrhenius</strong>: semakin banyak panas, semakin cepat reaksinya.',
    },
    {
      type: 'paragraph',
      html: 'Ini berarti agar otot jangkrik dapat berkontraksi dan menggosokkan sayapnya, mereka memerlukan reaksi enzimatik. Jika dingin, reaksi ini lambat dan kerikan menjadi lesu. Jika hangat, metabolisme meningkat dan nyanyian menjadi trill yang panik.',
    },
    {
      type: 'title',
      text: 'Rumus Dolbear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Meskipun terdapat variasi untuk spesies yang berbeda, rumus yang paling terkenal adalah untuk jangkrik pohon salju (<em>Oecanthus fultoni</em>). Untuk mendapatkan suhu dalam derajat Celsius:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nDi mana N = jumlah kerikan per menit.',
      ariaLabel: 'Rumus Dolbear untuk menghitung suhu dari kerikan jangkrik',
    },
    {
      type: 'paragraph',
      html: 'Alat kami melakukan ini secara otomatis: ia mengukur waktu di antara ketukan Anda, menghitung kerikan per menit (BPM) dan menerapkan rumus secara instan.',
    },
    {
      type: 'title',
      text: 'Fakta Menarik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Termometer Cinta:</strong> Beberapa teori menunjukkan bahwa betina lebih menyukai jantan yang bernyanyi pada frekuensi yang "benar" untuk suhu saat ini, karena itu menunjukkan jantan tersebut sehat dan memiliki metabolisme yang kuat.',
        '<strong>Batas Dingin:</strong> Di bawah 10°C (50°F), sebagian besar jangkrik berhenti bernyanyi karena metabolisme mereka terlalu lambat untuk mempertahankan upaya otot.',
        '<strong>Sinkronisasi:</strong> Pada malam yang hangat, ribuan jangkrik dapat menyinkronkan kerikan mereka, menciptakan efek suara "gelombang" yang mengesankan.',
      ],
    },
    {
      type: 'tip',
      title: 'Catatan Akurasi',
      html: '<p>Akurasi bergantung pada spesies jangkrik. Alat ini dikalibrasi untuk jangkrik lapangan biasa dan jangkrik pohon. Faktor seperti kelembapan atau angin dapat mengubah hasilnya sebesar ±0,5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Menunggu...',
    labelTapping: 'Terus mengetuk...',
    tapInstruction: 'Setiap kali Anda mendengar kerikan',
    btnReset: 'Reset',
    btnSoundOn: 'Suara: Aktif',
    btnSoundOff: 'Suara: Nonaktif',
    unitChirpsMin: 'kerikan/menit',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi Ilmiah',
  },
};
