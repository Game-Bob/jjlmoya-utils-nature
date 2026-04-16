import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'kalkulator-benih';
const title = 'Kalkulator Jarak Tanam dan Kalibrasi Penanam';
const description =
  'Alat presisi untuk petani. Hitung jarak ideal antar benih berdasarkan target populasi dan lebar baris, serta analisis tekanan penanam pada kecepatan kerja yang berbeda.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung jarak antar benih?',
    answer:
      'Satu hektar (10.000 m²) dibagi dengan lebar baris untuk mendapatkan total meter lari penaburan. Target populasi kemudian dibagi dengan meter tersebut untuk menentukan berapa banyak benih yang ditempatkan per meter lari.',
  },
  {
    question: 'Berapa target populasi per hektar?',
    answer:
      'Ini adalah jumlah tanaman ideal per 10.000 meter persegi. Tergantung pada jenis tanaman, kesuburan tanah, dan ketersediaan air. Misalnya, jagung irigasi biasanya membutuhkan 85.000 hingga 95.000 benih per hektar.',
  },
  {
    question: 'Bagaimana persentase perkecambahan mempengaruhi perhitungan?',
    answer:
      'Tidak semua benih yang ditabur akan tumbuh. Jika satu lot benih memiliki daya kecambah 95%, Anda harus meningkatkan tingkat penaburan sebesar 5% untuk mencapai populasi tanaman akhir yang diinginkan.',
  },
  {
    question: 'Mengapa kalibrasi penanam sangat penting?',
    answer:
      'Tingkat penaburan yang terlalu rapat menyebabkan persaingan antar tanaman dan butiran yang lebih kecil. Tingkat yang terlalu renggang membuang ruang dan potensi hasil. Presisi adalah kunci profitabilitas.',
  },
];

const howToData = [
  {
    name: 'Masukkan target populasi',
    text: 'Tentukan berapa banyak benih atau tanaman yang Anda inginkan per hektar sesuai dengan rekomendasi teknis untuk varietas Anda.',
  },
  {
    name: 'Atur lebar baris',
    text: 'Ukur jarak antara piringan atau sepatu penanam Anda (biasanya 50, 70 atau 75 cm).',
  },
  {
    name: 'Sesuaikan tingkat perkecambahan',
    text: 'Masukkan persentase kemunculan yang diharapkan untuk mengompensasi kehilangan alami di lapangan.',
  },
  {
    name: 'Dapatkan penyesuaian mekanis',
    text: 'Gunakan nilai benih per meter atau cm antar benih untuk menyesuaikan sproket atau monitor pada mesin Anda.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi Ilmiah',
  bibliography: [
    {
      name: 'KWS Spanyol',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Kementerian Pertanian Spanyol (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Spanyol',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Teknis Penaburan Presisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menyesuaikan transmisi penanam memerlukan pengetahuan tepat tentang berapa banyak benih yang harus jatuh per meter lari alur. Manual mesin biasanya memberikan tabel perkiraan, tetapi faktor-faktor seperti <strong>selip roda penggerak</strong> atau ukuran benih dapat mengubah kenyataan. Alat ini memberi Anda nilai teoritis yang sempurna: <strong>jarak target antar benih</strong>.',
    },
    {
      type: 'tip',
      title: 'Rumus Matematika',
      html: '<p>Untuk pakar agronomi dan orang yang penasaran, berikut dasar perhitungannya:</p><pre>Jarak (cm) = 10.000.000 / (Populasi × Lebar Baris)</pre><ul><li><strong>10.000.000:</strong> Faktor konversi dari Ha ke cm².</li><li><strong>Populasi:</strong> Benih per hektar.</li><li><strong>Lebar Baris:</strong> Jarak antar baris dalam cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Mengapa Menggunakan Kalkulator Ini?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda mengukur di lapangan dan benih Anda lebih rapat atau lebih renggang daripada jarak target, mesin Anda <strong>kurang terkalibrasi</strong>. Alat ini juga menganalisis frekuensi dosis (Hz) piringan benih pada kecepatan kerja yang berbeda, memperingatkan Anda tentang risiko kegagalan penempatan benih tunggal.',
    },
    {
      type: 'title',
      text: 'Kunci Penaburan Berkualitas',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulasi:</strong> Hindari benih ganda atau terlewat. Singulasi 99% menjaga persaingan antar tanaman tetap seimbang.',
        '<strong>Jarak Seragam:</strong> Koefisien variasi harus kurang dari 0,3. Deviasi lebih dari 5 cm mengurangi potensi hasil.',
        '<strong>Kedalaman:</strong> Penting untuk kemunculan yang seragam. Sesuaikan beban roda penekan sesuai dengan kelembapan tanah.',
      ],
    },
    {
      type: 'title',
      text: 'Metode Verifikasi Lapangan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Metode 1/1000 Hektar:</strong> Ukur jarak tertentu di sepanjang alur yang mewakili 1/1000 hektar. Hitung benih dan kalikan dengan 1.000. Untuk baris 70 cm, jaraknya adalah 14,28 m; untuk baris 52,5 cm, jaraknya adalah 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Metode Roda Penggerak:</strong> Angkat mesin, tandai roda penggerak dan putar setara dengan 1/100 hektar. Kumpulkan benih dalam ember dan timbang atau hitung untuk memverifikasi kalibrasi.',
    },
    {
      type: 'title',
      text: 'Tabel Referensi Berdasarkan Tanaman',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Jagung:</strong> 60.000 hingga 95.000 benih/Ha. Respon tinggi terhadap kepadatan pada hibrida modern.',
        '<strong>Kedelai:</strong> 250.000 hingga 450.000 benih/Ha. Kapasitas kompensasi besar pada kepadatan rendah.',
        '<strong>Bunga Matahari:</strong> 40.000 hingga 55.000 benih/Ha. Sangat sensitif terhadap kepadatan; kelebihan mengurangi diameter tongkol.',
        '<strong>Rapeseed:</strong> 300.000 hingga 600.000 benih/Ha. Benih sangat kecil; membutuhkan kontak tanah yang sangat baik.',
      ],
    },
  ],
  ui: {
    headCrop: 'Pilih Tanaman Anda',
    headParams: 'Parameter',
    headAnalysis: 'Analisis Real Time',
    labelPopulation: 'Populasi',
    unitSeedsHa: 'Benih/Ha',
    labelRowWidth: 'Lebar Baris',
    unitCm: 'Sentimeter',
    labelWorkSpeed: 'Kecepatan Kerja',
    unitKmh: 'km/jam',
    labelCalibration: 'Kalibrasi Piringan',
    labelSpacingDesc: 'Jarak tepat antar tiap benih di baris.',
    labelMachineStress: 'Beban Mesin',
    labelSeedsM: 'Benih / Meter',
    labelPlantsM2: 'Tanaman / m²',
    labelSpeedMs: 'Meter / Detik',
    labelHaBag: 'Ha / Kantong (80rb)',
    statusStandby: 'SIAGA',
    statusVolumetric: 'ALIRAN VOLUMETRIK',
    statusOptimal: 'DOSIS OPTIMAL',
    statusHighSpeed: 'KECEPATAN TINGGI',
    statusPlateLimiter: 'BATAS PIRINGAN',
    cropCorn: 'Jagung Biji',
    cropSilage: 'Jagung Silase',
    cropSunflower: 'Bunga Matahari',
    cropSorghum: 'Sorgum',
    cropSoy: 'Kedelai',
    cropBeet: 'Bit Gula',
    cropRapeseed: 'Rapeseed',
    noteCorn: 'Dibutuhkan presisi tinggi',
    noteSilage: 'Kepadatan tinggi sedang',
    noteSunflower: 'Sensitif terhadap kecepatan',
    noteSorghum: 'Aliran kontinu atau piringan',
    noteSoy: 'Populasi tinggi',
    noteBeet: 'Penaburan dangkal kritis',
    noteRapeseed: 'Benih sangat kecil',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi Ilmiah',
  },
};
