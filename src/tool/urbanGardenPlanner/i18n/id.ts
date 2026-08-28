import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'perencana-volume-media-tanam-dan-air-hujan';
const title = 'Perencana Media Tanam dan Air Hujan untuk Kebun Kota';
const description = 'Hitung volume media tanam untuk bedeng dan perkirakan air hujan yang dapat ditampung untuk kebun kota kecil.';

const faqData = [
  { question: 'Berapa banyak tanah yang dibutuhkan untuk bedeng?', answer: 'Masukkan luas tanam dan kedalaman media. Perencana mengalikan keduanya lalu mengubah hasilnya menjadi liter agar pembelian tanah atau kompos lebih mudah.' },
  { question: 'Bagaimana menghitung air hujan untuk kebun?', answer: 'Masukkan luas tangkapan dan curah hujan. Perencana menggunakan faktor limpasan 85 persen dan faktor pengumpulan 90 persen sebagai perkiraan perencanaan yang hati-hati.' },
  { question: 'Apakah alat ini cocok untuk balkon?', answer: 'Ya. Gunakan luas pot atau bedeng sebagai area tanam, lalu masukkan kedalaman media dan luas atap atau kanopi yang mengalirkan air ke wadah.' },
  { question: 'Apakah air hujan aman untuk tanaman pangan?', answer: 'Tidak selalu. Periksa permukaan penangkap dan wadah, sediakan penyaringan serta drainase yang sesuai, dan ikuti panduan setempat.' },
];

const howToData = [
  { name: 'Ukur area tanam', text: 'Masukkan luas bedeng, balkon, atau wadah yang akan diisi media tanam.' },
  { name: 'Tentukan kedalaman media', text: 'Masukkan kedalaman yang direncanakan dalam sentimeter, termasuk kemungkinan pemadatan.' },
  { name: 'Masukkan area tangkapan', text: 'Masukkan luas atap, kanopi, atau permukaan lain yang mengalirkan air ke wadah.' },
  { name: 'Uji satu kejadian hujan', text: 'Masukkan curah hujan dalam milimeter dan bandingkan air yang tertampung dengan luas kebun.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id' };

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'Kebun kecil, diukur dalam lapisan yang hidup', headInputs: 'Atur bentuk kebun', headScene: 'Baca lanskapnya', labelGardenArea: 'Luas tanam', labelDepth: 'Kedalaman media', labelCollectionArea: 'Luas tangkapan', labelRainfall: 'Kejadian hujan', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Luas bedeng, balkon, atau wadah.', helpDepth: 'Lapisan media yang ingin diisi.', helpCollectionArea: 'Permukaan yang mengirim air ke wadah.', helpRainfall: 'Coba hujan baru-baru ini atau hujan rencana setempat.', presetsTitle: 'Mulai dari bentuk', presetBalcony: 'Bedeng balkon', presetRaisedBed: 'Bedeng tinggi', presetCommunity: 'Kebun komunitas', labelSoilNeeded: 'Media yang dibutuhkan', labelWaterCaptured: 'Air tertampung', labelGardenDepth: 'Di seluruh kebun ini', labelWateringArea: 'Pada 10 mm air', sceneCatchment: 'Tangkapan', sceneGardenBed: 'Area tanam', sceneSoil: 'Lapisan tanah', sceneWater: 'Air tertampung', statusBalanced: 'Kombinasi yang berguna untuk direncanakan', statusLightCapture: 'Kejadian hujan ringan', statusDeepBed: 'Profil tanah yang dalam', statusNoRain: 'Menunggu kejadian hujan', statusNote: 'Gunakan gambaran ini untuk menentukan bahan dan membandingkan skenario. Ini bukan resep penyiraman.', assumptionTitle: 'Asumsi perencanaan', assumptionText: 'Perkiraan mempertahankan 85 persen hujan sebagai limpasan dan 90 persen setelah kehilangan pengumpulan. Satu liter di atas satu meter persegi sama dengan satu milimeter air.', limitationTitle: 'Jaga kebun tetap aman', limitationText: 'Sediakan drainase, hindari permukaan tangkapan yang tercemar, dan periksa aturan setempat sebelum memakai air tertampung pada tanaman pangan.',
  },
  seo: [
    { type: 'title', text: 'Hitung Media Tanam dan Air Hujan untuk Kebun Kota', level: 2 },
    { type: 'paragraph', html: 'Bedeng tinggi, balkon, dan kebun komunitas memiliki dua pertanyaan praktis: berapa liter media tanam yang diperlukan dan berapa banyak hujan yang bisa ditampung oleh permukaan di dekatnya? Perencana ini menampilkan kedua perkiraan secara berdampingan.' },
    { type: 'title', text: 'Rumus volume media tanam', level: 3 },
    { type: 'paragraph', html: 'Gunakan <code>luas dalam m² × kedalaman dalam cm × 10 = liter media</code>. Bedeng seluas 12 m² dengan kedalaman 30 cm membutuhkan 3.600 liter sebelum memperhitungkan pemadatan, drainase, atau rancangan tanam.' },
    { type: 'list', items: ['<strong>Luas tanam:</strong> dasar bedeng, balkon, atau wadah.', '<strong>Kedalaman media:</strong> tinggi lapisan yang akan diisi.', '<strong>Luas tangkapan:</strong> atap, kanopi, atau permukaan pemasok air.', '<strong>Hujan:</strong> curah hujan yang ingin diuji dalam milimeter.'] },
    { type: 'title', text: 'Perkiraan penampungan air hujan', level: 3 },
    { type: 'paragraph', html: 'Perhitungan dimulai dari <code>luas tangkapan × curah hujan</code>, lalu mengurangi kehilangan dengan faktor limpasan 85 persen dan faktor pengumpulan 90 persen. Hasilnya membantu membandingkan skenario, bukan menjamin volume yang tersedia.' },
    { type: 'title', text: 'Bandingkan skenario secara offline', level: 3 },
    { type: 'paragraph', html: 'Coba preset balkon, bedeng, dan kebun komunitas lalu ganti dengan ukuran sebenarnya. Tidak ada alamat, peta, prakiraan cuaca, atau data pribadi yang dikirim keluar dari browser.' },
    { type: 'tip', title: 'Batas penting', html: 'Drainase, kualitas air, penguapan, pilihan tanaman, dan aturan setempat tetap membutuhkan keputusan manusia. Atap atau wadah yang tercemar tidak otomatis aman untuk tanaman pangan.' },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
