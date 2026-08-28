import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "kalkulator-volume-tempat-kompos-rasio-cokelat-hijau";
const title = "Kalkulator Volume Tempat Kompos dan Rasio Cokelat Hijau";
const description = "Hitung volume bagian dalam wadah kompos persegi atau silinder dan periksa keseimbangan sampah cokelat, hijau, kelembapan, serta sirkulasi udara.";

const faq = [
  {
    question: "Bagaimana cara menghitung volume wadah kompos?",
    answer: "Ukur bagian dalam wadah. Untuk wadah persegi, kalikan lebar, kedalaman, dan tinggi. Untuk silinder, gunakan rumus pi dikali kuadrat jari-jari dikali tinggi dan konversikan sentimeter kubik ke liter.",
  },
  {
    question: "Berapa rasio bahan cokelat dan hijau yang ideal?",
    answer: "Panduan praktis adalah dua hingga tiga bagian bahan cokelat kaya karbon untuk satu bagian bahan hijau kaya nitrogen berdasarkan volume. Sesuaikan dengan mengamati kelembapan, bau, dan sirkulasi udara.",
  },
  {
    question: "Berapa banyak bahan kompos yang dapat dimasukkan?",
    answer: "Bandingkan volume bahan dengan kapasitas wadah bagian dalam. Sisakan ruang untuk sirkulasi udara dan pembalikan kompos tanpa memadatkan isi wadah secara berlebihan.",
  },
  {
    question: "Apa arti kelembapan seperti spons yang diperas?",
    answer: "Bahan harus terasa lembap saat disentuh tanpa meneteskan air saat diperas. Kompos yang terlalu kering akan memperlambat penguraian, sedangkan tumpukan yang terlalu basah membutuhkan struktur kering dan pembalikan.",
  },
];

const howTo = [
  {
    name: "Pilih bentuk wadah kompos",
    text: "Pilih bentuk persegi atau silinder lalu masukkan dimensi bagian dalam dalam sentimeter atau inci dengan akurat.",
  },
  {
    name: "Masukkan volume bahan terpisah",
    text: "Perkirakan volume terpisah untuk bahan cokelat kaya karbon dan bahan hijau kaya nitrogen.",
  },
  {
    name: "Atur kondisi kelembapan tempat kompos",
    text: "Pilih kering, spons diperas, atau basah untuk mendapatkan saran perawatan yang tepat sesuai tumpukan kompos Anda.",
  },
  {
    name: "Evaluasi hasil kompos dan tindakan lanjutan",
    text: "Gunakan data kapasitas, tingkat pengisian, dan rasio untuk menyesuaikan penambahan bahan atau pembalikan kompos.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "id",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrik",
    unitImperial: "Imperial",
    shapeTitle: "Bentuk Wadah",
    shapeRectangular: "Persegi Panjang",
    shapeCylindrical: "Silinder",
    widthLabel: "Lebar Dalam",
    depthLabel: "Kedalaman Dalam",
    diameterLabel: "Diameter Dalam",
    heightLabel: "Tinggi Dalam",
    brownLabel: "Bahan Cokelat",
    greenLabel: "Bahan Hijau",
    moistureTitle: "Tingkat Kelembapan",
    moistureDry: "Kering",
    moistureSponge: "Spons Diperas",
    moistureWet: "Basah",
    moistureAdviceDry: "Kering: basahi secara bertahap dan balikkan tumpukan.",
    moistureAdviceSponge: "Ideal: pertahankan kelembapan seperti spons diperas.",
    moistureAdviceWet: "Basah: tambahkan bahan cokelat kering dan balikkan.",
    recipeTitle: "Resep Campuran",
    recipeKitchen: "Sampah Dapur",
    recipeGarden: "Sampah Kebun",
    recipeLeafy: "Campuran Dedaunan",
    sceneTitle: "Potongan Melintang Tumpukan Kompos",
    resultCapacity: "Kapasitas Dalam Wadah",
    resultMaterials: "Bahan Dimasukkan",
    resultRatio: "Rasio Cokelat ke Hijau",
    resultFill: "Kapasitas Terpakai",
    brownTarget: "Target Bahan Cokelat",
    waterAction: "Air & Kelembapan",
    airAction: "Udara & Struktur",
    statusBalanced: "Keseimbangan Awal Bagus",
    statusTooGreen: "Tambahkan bahan cokelat",
    statusTooBrown: "Tambahkan bahan hijau",
    statusNoGreens: "Masukkan bahan hijau",
    statusOverfilled: "Wadah melebihi kapasitas",
    statusDry: "Tumpukan terlalu kering",
    statusWet: "Tumpukan terlalu basah",
    statusGoodMoisture: "Kelembapan dalam rentang ideal",
    statusNote: "Balikkan tumpukan kompos untuk menambah rongga udara.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Perhitungan Volume Geometri",
    formulaText: "Kalkulator menghitung kapasitas bagian dalam dari dimensi yang dimasukkan. Wadah persegi menggunakan rumus lebar × kedalaman × tinggi, sedangkan silinder menggunakan π × jari-jari² × tinggi. Volume bahan diselaraskan ke unit yang sama sebelum pengisian ditampilkan.",
    practicalTitle: "Rasio Sebagai Acuan Awal",
    practicalText: "Target rasio menyarankan dua hingga tiga bagian volume bahan cokelat untuk setiap bagian bahan hijau. Jaga kelembapan dan sirkulasi udara dengan membalikkan tumpukan secara rutin saat memadat.",
    localNote: "Semua perhitungan diproses secara lokal di peramban Anda. Alat ini merupakan panduan perencanaan kompos rumah tangga.",
    resetLabel: "Atur Ulang",
  },
  seo: [
    {
      type: "title",
      text: "Hitung Kapasitas Nyata Wadah Kompos Anda",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Kalkulator volume wadah kompos sangat berguna ketika menghitung berdasarkan ukuran bagian dalam wadah secara nyata, bukan sekadar label kapasitas pabrik. Masukkan lebar, kedalaman, dan tinggi wadah persegi atau diameter dan tinggi wadah silinder untuk mendapatkan volume bersih dalam liter atau galon serta membandingkannya dengan volume bahan.",
    },
    { type: "title", text: "Rumus Geometri Volume Wadah", level: 3 },
    {
      type: "paragraph",
      html: "Untuk wadah persegi panjang gunakan rumus <code>lebar × kedalaman × tinggi</code>. Jika pengukuran dalam sentimeter, bagikan hasil sentimeter kubik dengan 1.000 untuk mendapatkan ukuran liter. Untuk wadah silinder gunakan rumus <code>π × jari-jari² × tinggi</code>, di mana jari-jari adalah setengah dari diameter dalam. Ukur hanya ruang bersih di dalam wadah tanpa menghitung ketebalan dinding atau penutup.",
    },
    {
      type: "list",
      items: [
        "<strong>Wadah Persegi:</strong> lebar × kedalaman × tinggi.",
        "<strong>Wadah Silinder:</strong> π × jari-jari² × tinggi.",
        "<strong>Konversi Satuan:</strong> 1.000 sentimeter kubik sama dengan 1 liter.",
        "<strong>Tingkat Pengisian:</strong> volume cokelat ditambah hijau dibandingkan dengan kapasitas bagian dalam wadah.",
      ],
    },
    { type: "title", text: "Keseimbangan Bahan Cokelat dan Hijau", level: 3 },
    {
      type: "paragraph",
      html: "Gunakan dua hingga tiga bagian bahan cokelat kaya karbon (seperti daun kering, kardus dicacah, atau ranting kecil) untuk setiap satu bagian bahan hijau kaya nitrogen (seperti sisa makanan dapur dan pemotongan rumput segar). Kalkulator ini memberikan target bahan cokelat yang disarankan, tetapi kelembapan dan sirkulasi udara tumpukan yang menentukan hasil akhirnya.",
    },
    { type: "title", text: "Manajemen Kelembapan dan Pembalikan Kompos", level: 3 },
    {
      type: "paragraph",
      html: "Pertahankan tingkat kelembapan ideal yang terasa seperti spons yang diperas. Tumpukan kompos yang terlalu kering akan memperlambat aktivitas mikroorganisme, sedangkan tumpukan yang terlalu basah dapat memicu bau tidak sedap akibat kekurangan oksigen. Membalik tumpukan secara berkala akan membuka kembali kantong udara.",
    },
    {
      type: "tip",
      title: "Catatan Praktis Penggunaan",
      html: "Hasil perhitungan volume ini berfungsi sebagai acuan praktis untuk pembuatan kompos rumah tangga dan tidak menggantikan analisis kimia laboratorium C:N. Hindari memasukkan limbah daging atau kayu beracun.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
