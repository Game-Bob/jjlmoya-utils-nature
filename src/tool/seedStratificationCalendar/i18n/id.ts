import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'id',
  title: 'Kalender stratifikasi benih dan jadwal tanam',
  description: 'Buat rencana persiapan bertanggal dengan menghitung mundur dari hari tanam atau maju dari hari ketika benih siap.',
  faq: [
    { question: 'Apa yang dihitung kalender ini?', answer: 'Kalender menempatkan perendaman, fase lembap hangat dan dingin, serta penanaman pada tanggal yang tepat dari tanggal target atau tanggal mulai.' },
    { question: 'Mengapa ada dua mode tanggal?', answer: 'Gunakan mode tanggal tanam jika harinya sudah ditetapkan, atau mode benih siap jika persiapan dimulai hari ini dan Anda ingin mengetahui tanggal tanam berikutnya.' },
    { question: 'Bisakah durasi dan suhu diubah?', answer: 'Bisa. Pilih profil sebagai titik awal lalu sesuaikan fase dengan kemasan benih, sumber khusus, dan kondisi setempat.' },
    { question: 'Apakah rencana menjamin perkecambahan?', answer: 'Tidak. Rencana hanya mengatur tanggal. Usia, viabilitas, kelembapan, dormansi, jamur, dan kondisi tanam juga memengaruhi hasil.' },
  ],
  howTo: [
    { name: 'Pilih profil benih', text: 'Pilih spesies yang paling sesuai agar fase awal yang masuk akal dimuat.' },
    { name: 'Pilih mode tanggal', text: 'Hitung mundur dari hari tanam atau maju dari hari benih siap.' },
    { name: 'Periksa fase perlakuan', text: 'Sesuaikan hari rendam, hangat, dingin, dan rentang suhu dingin.' },
    { name: 'Ikuti urutan tanggal', text: 'Mulai pada tanggal awal, jalankan setiap fase, lalu tanam pada tanggal yang ditunjukkan.' },
  ],
  seoTitle: 'Rencanakan masa persiapan',
  seoIntro: 'Dormansi benih juga merupakan masalah waktu. Spesies yang memerlukan masa dingin dan lembap dapat melewatkan waktu tanam jika persiapan terlambat. Perlakuan yang terlalu lama membuang waktu dan dapat meningkatkan risiko jamur atau perkecambahan dini. Kalender ini mengubah tanggal target menjadi rangkaian langkah yang jelas.',
  seoModes: 'Pilih tanggal tanam target untuk menghitung mundur, atau gunakan mode benih siap untuk menghitung maju sejak persiapan dimulai. Setiap fase memiliki tanggal sendiri; perendaman tersambung ke perlakuan berikutnya dan perlakuan terakhir selesai sehari sebelum tanam. Hasilnya dapat dipakai untuk label wadah atau pengingat.',
  seoPhaseTitle: 'Cara membaca setiap fase',
  seoPhaseItems: ['<strong>Rendam:</strong> hidrasi benih selama jumlah hari yang ditentukan dan jangan memperpanjangnya tanpa alasan khusus.', '<strong>Hangat:</strong> simpan benih lembap dalam rentang hangat ketika profil memerlukannya.', '<strong>Dingin:</strong> simpan benih tetap lembap dan dingin, lalu periksa jamur atau akar awal secara rutin.', '<strong>Tanam:</strong> pindahkan benih yang telah disiapkan ke media yang sesuai pada tanggal target.'],
  seoEvidenceTitle: 'Gunakan profil sebagai titik awal',
  seoEvidence: 'Profil bukan aturan universal. Varietas, asal benih, umur benih, dan petunjuk pada kemasan dapat mengubah dormansi. Jika pemasok tepercaya memberi durasi berbeda, edit profil dan catat sumber yang dipakai daripada merata-ratakan petunjuk yang bertentangan.',
  seoTipTitle: 'Kalender bukan uji perkecambahan',
  seoTip: 'Catat lot benih, media lembap, suhu, dan tanggal. Jika akar muncul saat fase dingin, segera tanam dengan hati-hati. Jika benih tetap dorman, jangan langsung memperpanjang perlakuan; periksa panduan spesiesnya.',
  seoChecksTitle: 'Pemeriksaan sebelum mulai',
  seoChecks: ['Pastikan tanggal tanam sesuai dengan cahaya, embun beku, dan lokasi.', 'Beri label wadah dengan spesies, awal, akhir, dan rentang suhu.', 'Gunakan media lembap tetapi berudara dan periksa secara teratur.', 'Simpan rencana bersama kemasan agar perlakuan dapat dilacak.'],
  seoLimitsTitle: 'Hal yang tidak dapat dijelaskan hasilnya',
  seoLimits: 'Alat ini tidak menentukan dormansi dari foto, tidak menguji viabilitas, dan tidak menggantikan petunjuk khusus spesies. Alat ini juga tidak memprediksi cuaca setempat atau menjamin semua benih tumbuh. Anggap hasilnya sebagai perhitungan tanggal dan verifikasi biologinya melalui sumber yang sesuai.',
  ui: {
    labelProfile: 'Profil benih', labelMode: 'Mode rencana', labelModeSowing: 'Saya ingin menanam pada', labelModeReady: 'Benih siap hari ini', labelSowingDate: 'Tanggal tanam target', labelReadyDate: 'Tanggal persiapan', labelSoakDays: 'Hari perendaman', labelWarmDays: 'Hari hangat', labelColdDays: 'Hari dingin', labelColdRange: 'Rentang suhu dingin', labelUnits: 'Satuan suhu', labelMetric: 'Metrik °C', labelImperial: 'Imperial °F', labelFrom: 'Suhu minimum', labelTo: 'Suhu maksimum', labelGenerate: 'Perbarui kalender', labelReset: 'Atur ulang profil', labelAddCalendar: 'Tambahkan ke kalender', labelShare: 'Salin tautan', labelCopied: 'Tautan disalin', labelPrint: 'Cetak label ringkas', labelTechnique: 'Teknik', labelTodayStatus: 'Status hari ini', labelDayOf: 'hari dari', labelGantt: 'Linimasa persiapan', labelTimeline: 'Linimasa persiapan', labelNextAction: 'Fase saat ini', labelCalendarStarts: 'kalender dimulai', labelSowingDay: 'hari tanam', labelDuration: 'Persiapan', labelDays: 'hari', labelTemperature: 'Suhu', labelReady: 'Tanam hari ini', labelUpcoming: 'Berikutnya', labelActive: 'Sedang berlangsung', labelComplete: 'Rencana selesai', labelEditHint: 'Sesuaikan saran dengan kemasan atau sumber khusus. Pengaturan terakhir disimpan di perangkat ini.', labelWarm: 'Stratifikasi hangat', labelCold: 'Stratifikasi dingin', labelSoak: 'Rendam benih', labelSow: 'Tanam benih', noteApple: 'Masa dingin lembap setelah rendam singkat', noteLavender: 'Masa dingin singkat sebelum tanam musim semi', noteMilkweed: 'Fase hangat diikuti fase dingin', noteRose: 'Masa dingin panjang setelah perendaman', profileApple: 'Apel · Malus domestica', profileLavender: 'Lavender · Lavandula angustifolia', profileMilkweed: 'Milkweed · Asclepias syriaca', profileRose: 'Mawar · Rosa spp.', profileStrawberry: 'Stroberi · Fragaria × ananassa', profilePeach: 'Persik · Prunus persica', profileCherry: 'Ceri manis · Prunus avium', profilePear: 'Pir · Pyrus communis', profilePoppy: 'Poppy · Papaver spp.', profileSunflower: 'Bunga matahari · Helianthus annuus', profileTomato: 'Tomat · Solanum lycopersicum', profileBasil: 'Kemangi · Ocimum basilicum', instructionSoak: 'Jaga benih tetap terhidrasi sebelum fase berikutnya.', instructionWarm: 'Simpan benih lembap di tempat hangat.', instructionCold: 'Jaga benih tetap lembap dan dingin, lalu periksa secara rutin.', instructionSow: 'Tanam pada media yang telah disiapkan.', emptyState: 'Atur tanggal untuk membuat linimasa persiapan.', warningDate: 'Pilih tanggal tanam yang valid.', warningTemperature: 'Periksa durasi dan suhu sebelum memperbarui kalender.',
  },
});
