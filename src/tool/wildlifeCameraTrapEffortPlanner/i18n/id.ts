import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'perencana-upaya-kamera-jebak-satwa';
const title = 'Perencana Upaya Kamera Jebak Satwa';
const description = 'Rencanakan upaya kamera jebak, perkirakan hari kamera dan beban pemeriksaan, lalu buat sketsa stasiun lapangan tanpa mengklaim ukuran populasi.';
const faqData = [
  { question: 'Apa itu hari kamera?', answer: 'Hari kamera adalah jumlah kamera dikalikan jumlah hari aktifnya. Nilai ini menggambarkan upaya sampling, bukan jumlah satwa di suatu area.' },
  { question: 'Apakah perencana menghitung ukuran populasi satwa?', answer: 'Tidak. Perencana memperkirakan upaya operasional dan jejak nominal untuk perencanaan. Kelimpahan, kepadatan, dan okupansi memerlukan rancangan studi tervalidasi yang memperhitungkan deteksi tidak sempurna.' },
  { question: 'Apa fungsi jarak antarstasiun?', answer: 'Jarak membuat sel persegi nominal untuk setiap kamera dan membandingkan jarak target dengan jarak kisi merata. Jarak ini bukan radius deteksi sensor.' },
  { question: 'Bagaimana jadwal pemeriksaan digunakan?', answer: 'Gunakan titik mingguan untuk merencanakan kunjungan dan beban gambar. Bandingkan dengan penyimpanan, baterai, dan kapasitas pemeriksaan, lalu catat setiap kunjungan nyata.' },
];
const howToData = [
  { name: 'Gambarkan area survei', text: 'Masukkan area yang akan disampling. Tombol Metric atau Imperial menjaga nilai fisik saat satuan diganti.' },
  { name: 'Rencanakan kisi lapangan', text: 'Masukkan jumlah kamera, durasi pemasangan, dan jarak target. Sketsa menunjukkan stasiun relatif, bukan koordinat atau zona deteksi yang dijamin.' },
  { name: 'Perkirakan beban gambar', text: 'Masukkan pemicu yang diharapkan per kamera per hari. Perencana mengalikannya dengan hari kamera dan membaginya ke titik pemeriksaan mingguan.' },
  { name: 'Siapkan catatan lapangan', text: 'Beri ID unik untuk kamera dan sesi, catat pemasangan, dan dokumentasikan setiap pemeriksaan termasuk saat tidak ada deteksi.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Luas per kamera',
    labelSurveyArea: 'Area survei', labelCameraCount: 'Stasiun kamera', labelDeploymentDays: 'Hari pemasangan', labelSpacing: 'Jarak target antarstasiun', labelTriggerRate: 'Pemicu yang diharapkan per kamera per hari', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'kamera', unitDays: 'hari', unitEventsPerDay: 'peristiwa per hari', helpSurveyArea: 'Area yang akan disampling.', helpCameraCount: 'Kamera aktif dalam kampanye ini.', helpDeploymentDays: 'Hari dari pemasangan sampai pengambilan.', helpSpacing: 'Bantuan perencanaan, bukan radius deteksi.', helpTriggerRate: 'Gunakan angka hati-hati dari kampanye sejenis atau uji coba.', unitSystemLabel: 'Sistem pengukuran', metricLabel: 'Metrik', imperialLabel: 'Imperial', presetsTitle: 'Titik awal lapangan', presetBackyard: 'Tepi kebun', presetWoodland: 'Hutan campuran', presetReserve: 'Cagar luas',
    mapLabel: 'Sketsa relatif penempatan lapangan', mapCaption: 'Stasiun kamera bernomor pada kisi perencanaan relatif. Sel membantu jarak, bukan peta cakupan habitat.', stationLabel: 'stasiun', cameraDaysLabel: 'Hari kamera', expectedEventsLabel: 'Peristiwa yang diharapkan', spacingLabel: 'Jarak kisi merata', reviewLoadLabel: 'Peristiwa tiap pemeriksaan', reviewScheduleTitle: 'Ritme pemeriksaan', reviewScheduleText: 'Titik mingguan membuat beban gambar terlihat sebelum kamera dipasang. Ganti dengan kunjungan sesuai protokol lapangan.', reviewDayLabel: 'Hari', reviewEventsLabel: 'peristiwa diperkirakan', statusBalanced: 'Jarak terlihat seimbang', statusSparse: 'Stasiun terlihat berjauhan', statusDense: 'Stasiun terlihat berdekatan', statusReviewHeavy: 'Beban pemeriksaan perlu perhatian', statusNeedsInput: 'Lengkapi rencana pemasangan', statusNote: 'Ini adalah rencana upaya. Hasil ini tidak memberi tahu jumlah satwa di area dan tidak menjamin deteksi spesies.', assumptionTitle: 'Asumsi model', assumptionText: 'Jejak nominal memperlakukan setiap stasiun sebagai sel persegi berdasarkan jarak target. Peristiwa yang diharapkan menganggap laju pemicu tetap pada semua kamera dan hari.', limitationTitle: 'Batasan lapangan', limitationText: 'Pilih lokasi berdasarkan spesies dan pertanyaan, bukan hanya geometri. Catat ID, tanggal, arah, tinggi, habitat, dan pemeriksaan kosong agar deteksi tidak sempurna dapat diperhitungkan.',
  },
  seo: [
    { type: 'title', text: 'Rencanakan upaya sampling kamera jebak', level: 2 },
    { type: 'paragraph', html: 'Proyek kamera jebak memiliki dua masalah perencanaan sebelum daftar spesies tersedia. Berapa besar upaya sampling yang diwakili penempatan? Apakah aliran gambar dapat diperiksa, disimpan, dan didokumentasikan? Perencana ini mengubah pertanyaan tersebut menjadi hari kamera, peristiwa, sketsa stasiun, dan titik pemeriksaan.' },
    { type: 'title', text: 'Gunakan hari kamera untuk menjelaskan upaya', level: 3 },
    { type: 'paragraph', html: 'Hari kamera dihitung sebagai <code>stasiun kamera × hari pemasangan</code>. Dua belas kamera aktif selama 28 hari menghasilkan 336 hari kamera. Nilai ini berguna untuk membandingkan kampanye, tetapi bukan perkiraan populasi dan tidak memperbaiki kegagalan kamera, perbedaan habitat, atau perilaku satwa.' },
    { type: 'list', items: ['<strong>Stasiun kamera:</strong> perangkat aktif dalam kampanye.', '<strong>Hari pemasangan:</strong> hari yang direncanakan antara pemasangan dan pengambilan.', '<strong>Laju pemicu:</strong> peristiwa per kamera per hari, bukan setiap foto dalam satu rangkaian.', '<strong>Titik pemeriksaan:</strong> gunakan beban yang diharapkan untuk merencanakan penyimpanan, baterai, kunjungan, dan pemeriksaan gambar.'] },
    { type: 'title', text: 'Baca sketsa lapangan sebagai bantuan perencanaan', level: 3 },
    { type: 'paragraph', html: 'Sketsa menggunakan area, jumlah kamera, dan jarak target untuk menampilkan susunan relatif. Jejak nominal adalah jumlah stasiun dikalikan kuadrat jarak target. Ini adalah bantuan geometri yang transparan, bukan area yang dapat dideteksi sensor. Medan, vegetasi, jalur, tinggi, arah, dan perilaku satwa mengubah peluang deteksi.' },
    { type: 'title', text: 'Siapkan catatan yang baik sebelum pemasangan', level: 3 },
    { type: 'paragraph', html: 'Tentukan spesies sasaran dan pertanyaan survei sebelum memasang kamera. Beri pengenal tetap untuk kamera dan sesi. Catat tanggal, lokasi, tinggi, arah, habitat, pengaturan, dan apakah perangkat bekerja saat pemasangan dan pemeriksaan. Pemeriksaan tanpa deteksi tetap merupakan catatan penting.' },
    { type: 'tip', title: 'Jangan mengubah upaya menjadi kelimpahan', html: 'Kamera jebak dipengaruhi deteksi yang tidak sempurna. Gunakan alat ini untuk menganggarkan kerja lapangan dan penanganan gambar, lalu gunakan rancangan ekologi tervalidasi untuk okupansi, kelimpahan, kepadatan, atau perubahan populasi.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
