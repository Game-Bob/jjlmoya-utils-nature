import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'tr',
  title: 'Tohum katlama ve ekim tarihleri takvimi',
  description: 'Ekim gününden geriye ya da tohumların hazır olduğu günden ileriye doğru hesaplayarak tarihli bir hazırlık planı oluşturun.',
  faq: [
    { question: 'Bu takvim neyi hesaplar?', answer: 'Islatmayı, ılık ve soğuk nemli işlemleri ve ekimi, hedef tarihten geriye ya da başlangıç gününden ileriye doğru kesin günlere yerleştirir.' },
    { question: 'Neden iki tarih modu var?', answer: 'Ekim günü sabitse ekim tarihi modunu, hazırlık bugün başlıyorsa ve ilerideki ekim gününü arıyorsanız tohumlar hazır modunu kullanın.' },
    { question: 'Süreyi ve sıcaklığı değiştirebilir miyim?', answer: 'Evet. Bir başlangıç profili seçin ve aşamaları tohum paketi, uzman bir kaynak ve yerel koşullara göre düzenleyin.' },
    { question: 'Plan çimlenmeyi garanti eder mi?', answer: 'Hayır. Plan tarihleri düzenler; yaş, canlılık, nem, dormansi, küf ve ekim koşulları da sonucu etkiler.' },
  ],
  howTo: [
    { name: 'Tohum profili seçin', text: 'Mümkün olan en yakın türü seçerek uygun başlangıç aşamalarını yükleyin.' },
    { name: 'Tarih modunu seçin', text: 'Ekim gününden geriye veya tohumların hazır olduğu günden ileriye hesaplayın.' },
    { name: 'Aşamaları kontrol edin', text: 'Islatma, ılık ve soğuk günleri ve soğuk sıcaklık aralığını düzenleyin.' },
    { name: 'Tarih sırasını uygulayın', text: 'Başlangıç gününde başlayın, her aşamayı izleyin ve belirtilen günde ekin.' },
  ],
  seoTitle: 'Hazırlık dönemini planlayın',
  seoIntro: 'Tohum dormansisi aynı zamanda bir zamanlama sorunudur. Nemli bir soğuk dönem isteyen türlerde hazırlık geç başlarsa uygun ekim aralığı kaçırılabilir. Gereksiz uzun bir işlem zaman kaybettirir ve küf ya da erken çimlenme riskini artırabilir. Bu takvim hedef tarihi uygulanabilir adımlara dönüştürür.',
  seoModes: 'Geriye hesaplamak için hedef ekim tarihini seçin veya hazırlığın başladığı günden ileriye hesaplamak için tohumlar hazır modunu kullanın. Her aşamanın kendi tarihleri vardır; ıslatma sonraki işleme bağlanır ve son işlem ekimden bir gün önce biter. Sonucu kap etiketi ya da hatırlatıcı olarak kullanabilirsiniz.',
  seoPhaseTitle: 'Aşamaları nasıl okuyabilirsiniz?',
  seoPhaseItems: ['<strong>Islatma:</strong> tohumları belirtilen gün kadar nemlendirin ve özel bir neden olmadan süreyi uzatmayın.', '<strong>Ilık:</strong> profil gerektiriyorsa nemli tohumları ılık aralıkta tutun.', '<strong>Soğuk:</strong> tohumları nemli ve soğuk saklayın; küf veya erken kökleri düzenli kontrol edin.', '<strong>Ekim:</strong> hazırlanmış tohumları hedef tarihte uygun bir yetiştirme ortamına aktarın.'],
  seoEvidenceTitle: 'Profilleri başlangıç noktası olarak kullanın',
  seoEvidence: 'Profiller evrensel reçeteler değildir. Çeşit, köken, tohum yaşı ve paketteki bilgiler dormansiyi değiştirebilir. Güvenilir bir üretici farklı bir süre veriyorsa profili düzenleyin ve kullandığınız kaynağı not edin; çelişkili önerileri rastgele ortalamayın.',
  seoTipTitle: 'Takvim çimlenme testi değildir',
  seoTip: 'Tohum partisinin, nemli ortamın, sıcaklığın ve tarihlerin kaydını tutun. Soğuk aşamada kök çıkarsa dikkatle ekin. Tohumlar dorman kalırsa işlemi otomatik olarak uzatmayın; önce türün önerisini kontrol edin.',
  seoChecksTitle: 'Başlamadan önce kontrol edin',
  seoChecks: ['Ekim tarihinin ışık, don ve konumla uyumlu olduğundan emin olun.', 'Kabı tür, başlangıç, bitiş ve sıcaklık aralığıyla etiketleyin.', 'Nemli fakat hava alan bir ortam kullanın ve düzenli kontrol edin.', 'İşlemi takip edebilmek için planı tohum paketiyle saklayın.'],
  seoLimitsTitle: 'Sonucun söyleyemeyeceği şeyler',
  seoLimits: 'Araç fotoğraftan dormansi belirlemez, canlılığı test etmez ve türe özel talimatların yerini tutmaz. Yerel hava durumunu öngörmez ve çimlenme garantisi vermez. Sonucu düzenlenmiş bir tarih hesabı olarak görün ve biyolojik bilgiyi uygun bir kaynakla doğrulayın.',
  ui: {
    labelProfile: 'Tohum profili', labelMode: 'Plan modu', labelModeSowing: 'Şu tarihte ekmek istiyorum', labelModeReady: 'Tohumlar bugün hazır', labelSowingDate: 'Hedef ekim tarihi', labelReadyDate: 'Hazırlık tarihi', labelSoakDays: 'Islatma günleri', labelWarmDays: 'Ilık günler', labelColdDays: 'Soğuk günler', labelColdRange: 'Soğuk sıcaklık aralığı', labelUnits: 'Sıcaklık birimleri', labelMetric: 'Metrik °C', labelImperial: 'İmperyal °F', labelFrom: 'Minimum sıcaklık', labelTo: 'Maksimum sıcaklık', labelGenerate: 'Takvimi güncelle', labelReset: 'Profili sıfırla', labelAddCalendar: 'Takvimime ekle', labelShare: 'Bağlantıyı kopyala', labelCopied: 'Bağlantı kopyalandı', labelPrint: 'Kompakt etiketi yazdır', labelTechnique: 'Teknik', labelTodayStatus: 'Bugünün durumu', labelDayOf: 'gün /', labelGantt: 'Hazırlık zaman çizelgesi', labelTimeline: 'Hazırlık zaman çizelgesi', labelNextAction: 'Geçerli aşama', labelCalendarStarts: 'takvim başlangıcı', labelSowingDay: 'ekim günü', labelDuration: 'Hazırlık', labelDays: 'gün', labelTemperature: 'Sıcaklık', labelReady: 'Bugün ek', labelUpcoming: 'Yaklaşan', labelActive: 'Devam ediyor', labelComplete: 'Plan tamamlandı', labelEditHint: 'Önerileri paket veya uzman kaynak bilgisine göre düzenleyin. Son ayar bu cihazda saklanır.', labelWarm: 'Ilık katlama', labelCold: 'Soğuk katlama', labelSoak: 'Tohumları ıslat', labelSow: 'Tohumları ek', noteApple: 'Kısa ıslatmadan sonra nemli soğuk dönem', noteLavender: 'İlkbahar ekiminden önce kısa soğuk dönem', noteMilkweed: 'Soğuk aşamanın izlediği ılık aşama', noteRose: 'Islatmadan sonra uzun soğuk dönem', profileApple: 'Elma · Malus domestica', profileLavender: 'Lavanta · Lavandula angustifolia', profileMilkweed: 'Süt otu · Asclepias syriaca', profileRose: 'Gül · Rosa spp.', profileStrawberry: 'Çilek · Fragaria × ananassa', profilePeach: 'Şeftali · Prunus persica', profileCherry: 'Tatlı kiraz · Prunus avium', profilePear: 'Armut · Pyrus communis', profilePoppy: 'Haşhaş · Papaver spp.', profileSunflower: 'Ayçiçeği · Helianthus annuus', profileTomato: 'Domates · Solanum lycopersicum', profileBasil: 'Fesleğen · Ocimum basilicum', instructionSoak: 'Bir sonraki aşamadan önce tohumları nemli tutun.', instructionWarm: 'Nemli tohumları sıcak bir yerde saklayın.', instructionCold: 'Tohumları nemli ve soğuk tutun, düzenli kontrol edin.', instructionSow: 'Hazırlanmış yetiştirme ortamına ekin.', emptyState: 'Hazırlık zaman çizelgesi oluşturmak için tarihleri ayarlayın.', warningDate: 'Geçerli bir ekim tarihi seçin.', warningTemperature: 'Takvimi güncellemeden önce süre ve sıcaklık değerlerini kontrol edin.',
  },
});
