import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "kompost-kutusu-hacmi-kahverengi-yesil-oran-hesaplayici";
const title = "Kompost Kutusu Hacmi ve Kahverengi Yeşil Oran Hesaplayıcı";
const description =
  "Dikdörtgen veya silindirik bir kompost kutusunun iç hacmini hesaplayın ve kahverengi, yeşil malzemeler, nem ve havalandırma dengesini kontrol edin.";

const faq = [
  {
    question: "Kompost kutusu hacmi nasıl hesaplanır?",
    answer:
      "Kutunun iç ölçülerini alın. Dikdörtgen bir kutu için genişlik, derinlik ve yüksekliği çarpın ve santimetreküpü litreye çevirin. Silindir için pi sayısı ile yarıçapın karesini ve yüksekliği çarpın.",
  },
  {
    question: "Kompost için doğru kahverengi ve yeşil oranı nedir?",
    answer:
      "Hacim bazında azot zengini her bir ölçek yeşil malzemeye karşılık karbon zengini iki ila üç ölçek kahverengi malzeme pratik bir başlangıç noktasıdır. Nem, koku ve havalandırmayı gözlemleyerek ayarlayın.",
  },
  {
    question: "Kutuya ne kadar kompost malzemesi koyabilirim?",
    answer:
      "Malzemelerinizin toplam hacmini kutunun iç hacmiyle karşılaştırın. Hava dolaşımı ve karıştırma için üst kısımda her zaman yeterince boşluk bırakın.",
  },
  {
    question: "Sıkılmış sünger nem seviyesi ne anlama gelir?",
    answer:
      "Malzemeler dokunulduğunda nemli hissettirmeli ancak sıkıldığında su damlatmamalıdır. Çok kuru kompost ayrışmayı yavaşlatır, sırılsıklam bir yığın ise kuru kahverengi malzeme ve havalandırma gerektirir.",
  },
];

const howTo = [
  {
    name: "Kutu şeklini seçin",
    text: "Dikdörtgen veya silindirik şekli seçin ve iç boyutları santimetre veya inç cinsinden hassas şekilde girin.",
  },
  {
    name: "Malzeme hacimlerini ayrı ayrı girin",
    text: "Karbon zengini kahverengi ve azot zengini yeşil malzemelerin ayrı hacimlerini tahmin edip yazın.",
  },
  {
    name: "Yığının nem seviyesini ayarlayın",
    text: "Uygun bakım tavsiyeleri almak için kuru, sıkılmış sünger veya ıslak seçeneklerinden birini belirleyin.",
  },
  {
    name: "Sonucu değerlendirin ve harekete geçin",
    text: "Kapasite, doluluk oranı ve malzeme oranını inceleyerek kahverengi malzeme ekleme veya havalandırma kararı verin.",
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
  inLanguage: "tr",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrik",
    unitImperial: "İngiliz Ölçü",
    shapeTitle: "Kutu Şekli",
    shapeRectangular: "Dikdörtgen",
    shapeCylindrical: "Silindirik",
    widthLabel: "İç Genişlik",
    depthLabel: "İç Derinlik",
    diameterLabel: "İç Çap",
    heightLabel: "İç Yükseklik",
    brownLabel: "Kahverengi Malzemeler",
    greenLabel: "Yeşil Malzemeler",
    moistureTitle: "Nem Seviyesi",
    moistureDry: "Kuru",
    moistureSponge: "Sıkılmış Sünger",
    moistureWet: "Islak",
    moistureAdviceDry: "Kuru: kademeli olarak nemlendirin ve karıştırın.",
    moistureAdviceSponge: "İdeal: sıkılmış sünger nemini koruyun.",
    moistureAdviceWet: "Islak: kuru kahverengi malzeme ekleyin ve havalandırın.",
    recipeTitle: "Önerilen Karışım",
    recipeKitchen: "Mutfak Atıkları",
    recipeGarden: "Bahçe Atıkları",
    recipeLeafy: "Yaprak Karışımı",
    sceneTitle: "Kompost Yığını Kesiti",
    resultCapacity: "Kutunun İç Hacmi",
    resultMaterials: "Girilen Malzemeler",
    resultRatio: "Kahverengi / Yeşil Oranı",
    resultFill: "Kullanılan Kapasite",
    brownTarget: "Hedef Kahverengi Malzeme",
    waterAction: "Nem Dengesi",
    airAction: "Hava ve Yapı",
    statusBalanced: "İyi başlangıç dengesi",
    statusTooGreen: "Daha fazla kahverengi malzeme ekleyin",
    statusTooBrown: "Daha fazla yeşil malzeme ekleyin",
    statusNoGreens: "Yeşil malzeme ekleyin",
    statusOverfilled: "Kutu kapasitesi aşıldı",
    statusDry: "Yığın çok kuru",
    statusWet: "Yığın çok ıslak",
    statusGoodMoisture: "Nem ideal aralıkta",
    statusNote: "Hava cepleri açmak için yığını düzenli karıştırın.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Geometrik Hacim Hesabı",
    formulaText: "Hesaplayıcı iç ölçülerden faydalı hacmi belirler. Dikdörtgen kutular genişlik × derinlik × yükseklik, silindirik kutular π × yarıçap² × yükseklik formülünü kullanır. Tüm hacimler tek bir birime çevrilir.",
    practicalTitle: "Oran Bir Başlangıç Noktasıdır",
    practicalText: "Yeşil malzeme hacmine karşılık 2 ila 3 kat kahverengi malzeme hedeflenir. Nem ve havalandırma ayrışma süreci için kritiktir: sıkılmış sünger nemini koruyun.",
    localNote: "Tüm hesaplamalar tarayıcınızda yerel olarak yapılır. Evsel kompost için pratik planlama aracı.",
    resetLabel: "Sıfırla",
  },
  seo: [
    {
      type: "title",
      text: "Kompost Kutunuzun Gerçek Hacmini Hesaplayın",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Kompost kutusu hacim hesaplayıcı, paketteki ticari hacim yerine gerçek iç boyutları temel alarak net kapasiteyi belirlediğinde en yüksek faydayı sağlar. Dikdörtgen kutu için genişlik, derinlik ve yükseklik, silindir için çap ve yükseklik değerlerini girerek litre veya galon cinsinden kesin hacmi görün.",
    },
    { type: "title", text: "Geometrik Hacim Hesaplama Formülleri", level: 3 },
    {
      type: "paragraph",
      html: "Dikdörtgen kutular için <code>genişlik × derinlik × yükseklik</code> formülünü kullanın. Santimetreküp sonucunu 1.000'e bölerek litreye çevirin. Silindirler için <code>π × yarıçap² × yükseklik</code> formülünü uygulayın, yarıçap iç çapın yarısıdır. Sadece duvar kalınlığı veya kapak hariç iç boşluğu ölçün.",
    },
    {
      type: "list",
      items: [
        "<strong>Dikdörtgen Kutu:</strong> genişlik × derinlik × yükseklik.",
        "<strong>Silindirik Kutu:</strong> π × yarıçap² × yükseklik.",
        "<strong>Birim Dönüşümü:</strong> 1.000 cm3 tam olarak 1 litreye eşittir.",
        "<strong>Doluluk Oranı:</strong> kahverengi ve yeşil malzeme toplamının iç hacme oranı.",
      ],
    },
    { type: "title", text: "Kahverengi ve Yeşil Malzeme Dengesi", level: 3 },
    {
      type: "paragraph",
      html: "Karbon zengini kahverengi malzemeleri (kuru yapraklar, kıyılmış karton, küçük dallar) azot zengini yeşil malzemelerle (mutfak atıkları, taze çim) hacimce 2-3 kat oranında karıştırın. Hesaplayıcı kahverengi malzeme hedefini sunar.",
    },
    { type: "title", text: "Nem Kontrolü ve Yığın Havalandırması", level: 3 },
    {
      type: "paragraph",
      html: "Nem seviyesini iyi sıkılmış bir sünger kıvamında tutun. Aşırı ıslak yığınlar oksijen kaybeder ve kötü kokabilir, bu nedenle kuru kahverengi malzeme ekleyerek düzenli karıştırın.",
    },
    {
      type: "tip",
      title: "Pratik Kullanım İpucu",
      html: "Hacim hesaplaması evsel kompost yapımı için rehber niteliğindedir ve kimyasal C:N laboratuvar analizinin yerine geçmez.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
