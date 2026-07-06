export type Service = {
  slug: string;
  icon:
    | "wrench"
    | "shopping"
    | "map-pin"
    | "users"
    | "folder"
    | "scan"
    | "database"
    | "archive"
    | "shield-check";
  title: string;
  shortDescription: string;
  longDescription: string;
  bulletPoints: string[];
};

export const services: Service[] = [
  {
    slug: "teknik-servis",
    icon: "wrench",
    title: "Teknik Servis Hizmetleri",
    shortDescription:
      "Arızalanan cihazlarınız modern ekipman ve anti-statik ortamda tespit, onarım ve test aşamalarından geçirilerek çalışır vaziyette teslim edilir.",
    longDescription:
      "Arızalanan yazıcı ve çok fonksiyonlu cihazlarınızı en kısa sürede teslim alıyor; anti-statik ortamda modern cihazlarla arıza tespiti, onarım, test ve kontrol aşamalarını uyguluyoruz. Servis taleplerinin yaklaşık %70'i uzaktan (remote) müdahaleyle çözülebiliyor; İstanbul, Ankara, İzmir ve Antalya'daki servis merkezlerimiz ve Türkiye genelindeki temsilciliklerimizle 81 il ve Kıbrıs'a hizmet veriyoruz. Arıza bildirimlerinde Lexmark, Xerox, Epson, Canon, HP, Kyocera, Ricoh, Brother ve Samsung dahil çok markalı destek sağlıyoruz.",
    bulletPoints: [
      "SLA anlaşmaları",
      "Saha destek hizmetleri",
      "Sistem kurulum ve entegrasyon",
      "Orijinal yedek parça desteği",
      "Periyodik koruyucu bakım",
      "Uzaktan (remote) teknik destek",
      "Çok markalı arıza bildirimi: Lexmark, Xerox, Epson, Canon, HP, Kyocera, Ricoh, Brother, Samsung",
    ],
  },
  {
    slug: "satis",
    icon: "shopping",
    title: "Satış Hizmetleri",
    shortDescription:
      "Lexmark ve Ricoh'un yetkili bayisi olarak en yeni yazıcı ve çok fonksiyonlu cihaz modellerini uygun fiyatlarla, kurulum ve lojistik destekle sunuyoruz.",
    longDescription:
      "Kurumsal baskı çözümleri için satış hizmetlerimizde Lexmark ve Ricoh'un yetkili bayisi ve servis sağlayıcısı olarak en yeni ürünleri uygun fiyatlarla, satış sonrası lojistik ve kurulum desteğiyle birlikte sunuyoruz. Bizden ya da başka bir yerden satın alınmış Lexmark ve Ricoh yazıcıların onarım hizmetlerini de yürütüyoruz: arızalı cihazlar müşteri lokasyonundan toplanır, onarım ve bakımı yapılır, çalışır vaziyette teslim edilir. Garanti süresi boyunca bu hizmetler ücretsizdir.",
    bulletPoints: [
      "Lexmark ve Ricoh yazıcı / çok fonksiyonlu cihaz satışı",
      "Satın alma sonrası lojistik ve kurulum desteği",
      "Cihaz toplama, onarım ve bakım hizmetleri",
      "Garanti süresince ücretsiz onarım ve bakım",
    ],
  },
  {
    slug: "yerinde-servis",
    icon: "map-pin",
    title: "Yerinde Servis Hizmetleri",
    shortDescription:
      "Arızalı cihazlarınız müşteri lokasyonunda ele alınır, iş sürekliliğiniz kesintiye uğramaz.",
    longDescription:
      "Yerinde servis hizmetimizle arızalı ürünleriniz doğrudan bulunduğunuz lokasyonda müdahale görür, böylece iş akışınız kesintiye uğramaz. Türkiye'nin 81 ili ve Kıbrıs genelinde kurumsal servis desteği sağlıyor; İstanbul, Ankara, İzmir ve Antalya'daki servis merkezlerimiz ile bölgesel temsilciliklerimiz üzerinden hızlı müdahale sunuyoruz.",
    bulletPoints: [
      "Müşteri lokasyonunda arıza tespiti ve onarım",
      "Xerox, Lexmark, Ricoh, Lenovo, IBM Business ve diğer markalar için destek",
      "81 il ve Kıbrıs genelinde kurumsal servis desteği",
      "İş kesintisini önleyen hızlı müdahale",
    ],
  },
  {
    slug: "danismanlik",
    icon: "users",
    title: "Danışmanlık Hizmetleri",
    shortDescription:
      "Büyük ve orta ölçekli firmalara yazıcı/baskı altyapısının planlanması, yapılandırılması ve yönetiminde uzman danışmanlık desteği sunuyoruz.",
    longDescription:
      "Danışmanlık hizmetimiz, büyük ve orta ölçekli firmalara yazıcı ve baskı çözümlerinin planlanması, yapılandırılması ve yönetilmesinde Lexmark ve Ricoh teknolojilerini kullanarak destek sağlar. Farklı alanlarda uzmanlaşmış danışmanlarımızın birikiminden faydalanarak, müşterilerimizin iş süreçlerini hızlandırmasına ve yeni teknolojiler uygulayarak verimliliğini artırmasına yardımcı oluyoruz.",
    bulletPoints: [
      "Baskı altyapısı planlama ve yapılandırma danışmanlığı",
      "Dijital ortama aktarım danışmanlığı",
      "Doküman yönetimi danışmanlığı",
      "ERP yazdırma entegrasyon danışmanlığı",
    ],
  },
  {
    slug: "dokuman-yonetimi",
    icon: "folder",
    title: "Doküman Yönetimi",
    shortDescription:
      "Çok fonksiyonlu yazıcılar üzerinden, ek yazılım kurulumu gerekmeden dokümanlarınızı elektronik ortamda güvenle yönetin.",
    longDescription:
      "Kurumsal firmaların elektronik doküman yönetimi ihtiyacını karşılamak için çözümler sunuyoruz. Çok fonksiyonlu yazıcılar aracılığıyla, herhangi bir yazılım kurulumuna gerek kalmaksızın dokümanlarınız elektronik ortamda önceden belirlenmiş klasörlere taranabiliyor. Lexmark'ın NIAP (Common Criteria) sertifikalı çok fonksiyonlu yazıcıları sabit disk şifreleme, kullanıcı kimlik doğrulama ve şifrelenmiş belge iletimi gibi güvenlik katmanlarıyla müşteri dokümanlarının korunmasını sağlar.",
    bulletPoints: [
      "Dijital Ortama Aktarım — merkezi tarama ile arşivin elektronik ortama taşınması",
      "ERP Yazdırma — SAP/PeopleSoft gibi sistemlerde kod değişikliği gerektirmeyen baskı",
      "Kayıt Yönetimi — yasal kayıtların elektronik ortamda güvenli saklanması",
      "Paylaşım Noktası ve Yetkilendirme — kullanıcı bazlı tarama/erişim izinleri, LDAP/Active Directory entegrasyonu",
      "Doküman Güvenliği — kamu müşterileri için güvenli yazdırma/tarama",
      "NIAP Belgeli güvenlik — sabit disk şifreleme, kimlik doğrulama, faks iletişim kontrolü",
    ],
  },
  {
    slug: "garanti",
    icon: "shield-check",
    title: "Garanti Hizmetleri",
    shortDescription:
      "Lexmark ve Ricoh'un tüm ürün tipleri için garanti kapsamında ücretsiz onarım, bakım ve teslim hizmeti sunuyoruz.",
    longDescription:
      "Lexmark ve Ricoh için yetkili servis sağlayıcısı olarak, tüm Lexmark ve Ricoh ürün tipleri için ücretsiz garanti desteği sunuyoruz. 2003'ten bu yana faaliyet gösteren sertifikalı teknik personelimizle 08:00-19:30 saatleri arasında kesintisiz hizmet veriyoruz. Cihazınızı bizden ya da başka bir yerden satın almış olmanız fark etmeksizin; cihazın alınması, onarımı, bakımı ve teslimi garanti süresi boyunca ücretsizdir.",
    bulletPoints: [
      "Tüm Lexmark ve Ricoh ürün tipleri için ücretsiz garanti desteği",
      "08:00-19:30 arası kesintisiz servis",
      "Sertifikalı teknik personel",
      "Cihaz alma, onarım, bakım ve teslim — garanti süresince ücretsiz",
      "Nereden satın alınmış olursa olsun destek",
    ],
  },
];

export type CatalogCategory = {
  slug: string;
  title: string;
  description: string;
  items: string[];
  image?: string;
  icon?: "archive" | "wrench" | "shopping" | "shield-check";
  logo?: string;
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "yedek-parca",
    title: "Lexmark Orijinal Yedek Parça",
    description:
      "Türkiye'nin Lexmark Yetkili Yedek Parça Distribütörü olarak, kurumsal operasyonlarınızda yazıcı sorunlarını önlemek için gereken tüm orijinal Lexmark yedek parçalarını temin ediyor, Türkiye geneline gönderiyoruz. Orijinal olmayan (uyumlu) parçalar cihaza zarar verebilir ve çalışma ömrünü kısaltabilir.",
    items: [
      "Orijinal Lexmark yedek parçaları",
      "Orijinal Lexmark sarf malzemeleri (toner, kartuş vb.)",
      "Garanti kapsamındaki ünitelere ücretsiz onarım",
      "Türkiye geneli hızlı gönderim",
    ],
    icon: "archive",
  },
  {
    slug: "bakim-kitleri",
    title: "Lexmark Bakım Kitleri",
    description:
      "Orijinal Lexmark Bakım Kitleri ile yazıcılarınızın ömrünü uzatır, çalışma sürekliliğinizi en üst düzeyde tutarsınız. Bakım kitlerimizi Türkiye genelinde gönderiyor, yazıcı sorunlarını önlemeye ve verimliliği artırmaya yönelik destek sunuyoruz.",
    items: [
      "Orijinal Lexmark bakım kitleri",
      "Periyodik koruyucu bakım hizmeti",
      "Türkiye geneli gönderim",
      "7/24 teknik destek eşliğinde kurulum",
    ],
    icon: "wrench",
  },
  {
    slug: "yazici-satis",
    title: "Lexmark & Ricoh Yazıcı / Çok Fonksiyonlu Cihaz Satışı",
    description:
      "Lexmark ve Ricoh'un yetkili bayisi olarak en yeni yazıcı ve çok fonksiyonlu cihaz modellerini uygun fiyatlarla, kurulum ve lojistik destek dahil sunuyoruz.",
    items: [
      "Lexmark yazıcı ve çok fonksiyonlu cihazlar",
      "Ricoh yazıcı ve çok fonksiyonlu cihazlar",
      "Kurulum ve lojistik destek",
      "Satış sonrası garanti hizmetleri",
    ],
    logo: "/images/xerox-lexmark-logo-yeni.png",
  },
  {
    slug: "teknik-servis-onarim",
    title: "Teknik Servis ve Onarım",
    description:
      "İstanbul (Genel Merkez), Ankara, İzmir ve Antalya'daki servis merkezlerimiz ve Türkiye genelindeki temsilciliklerimiz aracılığıyla; Lexmark, Xerox, Ricoh, Lenovo, IBM Business gibi markalar için onarım ve bakım hizmeti sağlıyoruz.",
    items: [
      "Arıza tespiti, onarım, test ve kontrol",
      "Sertifikalı teknik personel",
      "7/24 Lexmark yazıcı teknik desteği",
      "Anti-statik ortamda cihaz onarımı",
    ],
    icon: "shield-check",
  },
];

export const stats = [
  { value: "2003", label: "Kuruluş yılı — yaklaşık 23 yıllık sektör tecrübesi" },
  { value: "%70", label: "Servis talebi uzaktan (remote) müdahaleyle çözülüyor" },
  { value: "81 il", label: "+ Kıbrıs — Türkiye genelinde kurumsal servis desteği" },
  { value: "4", label: "Servis merkezi: İstanbul, Ankara, İzmir, Antalya" },
];

export const certifications = [
  "Lexmark Yetkili Teknik Servis Merkezi (2006'dan bu yana)",
  "Lexmark Türkiye Yetkili Yedek Parça Distribütörü (2024)",
  "Ricoh Yetkili Teknik Servis Bayisi (2014'ten bu yana)",
  "TSE Hizmet Yeterlilik Belgesi (TSE-HYB)",
  "ISO 9001:2015 Kalite Yönetim Sistemi Belgesi",
  "ISO 14001:2015 Çevre Yönetim Sistemi Belgesi",
  "NIAP (Common Criteria) sertifikalı güvenlik teknolojisi desteği",
];

export type TimelineItem = { year: string; text: string };

export const timeline: TimelineItem[] = [
  { year: "2003", text: "EMSA Bilgisayar, baskı çözümleri satış ve teknik servis firması olarak kuruldu." },
  { year: "2006", text: "Lexmark ile ortaklık kurularak yetkili teknik servis merkezi unvanı kazanıldı." },
  { year: "2007", text: "İstanbul'un Avrupa yakasında kurumsal müşterilere hizmet verilmeye başlandı." },
  { year: "2008", text: "Lexmark nokta vuruşlu (dot-matrix) ürünler için kart onarım merkezi olundu." },
  { year: "2009", text: "KABİM ile SEIKO yazıcı servis ortaklığı kuruldu." },
  { year: "2011", text: "Ümraniye'de Anadolu yakası şubesi açıldı." },
  { year: "2014", text: "Ricoh ile teknik servis anlaşması imzalanarak hizmet yelpazesi genişletildi." },
  { year: "2023", text: "Ankara şubesi TSE sertifikasyonunu aldı." },
  { year: "2024", text: "Lexmark Türkiye Yetkili Yedek Parça Distribütörü unvanı kazanıldı." },
];

export const coreValues = [
  "Kalite yönetimi ve sürekli iyileştirme kültürü",
  "Sürdürülebilirlik ve yasal gerekliliklere tam uyum",
  "Hizmette \"sıfır hata\" yaklaşımı",
  "Müşteri odaklılık",
  "\"Önce insan, sonra iş\" ilkesiyle iş sağlığı ve güvenliği",
  "Kaynak ve enerji verimliliğine dayalı çevresel sorumluluk",
];

export type ClientLogo = { name: string; file: string };

export const clientLogos: ClientLogo[] = [
  { name: "İş Bankası", file: "is-bankasi.jpg" },
  { name: "Halkbank", file: "halkbankasi.jpg" },
  { name: "Anadolubank", file: "anadolubank-logo.jpg" },
  { name: "PTT", file: "ptt.jpg" },
  { name: "TCDD", file: "tcdd.jpg" },
  { name: "BİM", file: "bim-logo.jpg" },
  { name: "CarrefourSA", file: "carrefoursa.jpg" },
  { name: "Mango", file: "mango.jpg" },
  { name: "TÜVTÜRK", file: "tuvturk.jpg" },
  { name: "Ekol Lojistik", file: "ekol-lojistik.jpg" },
  { name: "CEVA Lojistik", file: "ceva-logistik.jpg" },
  { name: "Bosch", file: "bosch.jpg" },
  { name: "ZF Sachs", file: "zf-sachs-logo.jpg" },
  { name: "Sanofi Aventis", file: "sanofi-aventis-logo.jpg" },
  { name: "Adeka İlaç", file: "adeka-ilac-logo.jpg" },
  { name: "Novotel", file: "novotel-logo.jpg" },
  { name: "İbis Hotel", file: "ibis-hotel-logo.jpg" },
  { name: "Pamukkale Turizm", file: "pamukkale-turizm-logo.jpg" },
  { name: "Polo Garage", file: "polo-garage.jpg" },
  { name: "Kağıthane Belediyesi", file: "kagithane-belediyesi-logo.jpg" },
  { name: "Güngören Belediyesi", file: "gungoren-belediyesi-logo.jpg" },
  { name: "Sarıyer Belediyesi", file: "sariyer-belediyesi-logo.jpg" },
  { name: "TSE", file: "tse-logosu.png" },
];

export type Partner = { name: string; file: string; path: string };

export const partners: Partner[] = [
  { name: "Lexmark", file: "xerox-lexmark-logo-yeni.png", path: "/images" },
  { name: "Ricoh", file: "ricoh.jpg", path: "/logos" },
  { name: "Lenovo", file: "lenovo.jpg", path: "/logos" },
  { name: "IBM Business Partner", file: "ibm-bussiness.jpg", path: "/logos" },
  { name: "Koç Sistem", file: "koc-sistem-logo.jpg", path: "/logos" },
];

export const otherClients = [
  "Akbank",
  "Tekstilbank",
  "Novartis İlaç",
  "Tamaris Hotel",
  "Clariant Boya",
  "İstanbul Barosu",
  "Real",
  "Seri Bilgi İşlem (IBM iştiraki)",
];

export type Branch = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

export const branches: Branch[] = [
  {
    name: "Genel Merkez — İstanbul",
    address: "Aşağı Dudullu Mah. Bulut Sok. No:80 (Ağaoğlu Plaza), Ümraniye / İstanbul",
    lat: 41.006,
    lng: 29.146,
  },
  {
    name: "Ankara Şube",
    address: "Bademlik Mah. Bademlik Yolu Cad. No:4/B, Keçiören / Ankara",
    lat: 40.005,
    lng: 32.87,
  },
  {
    name: "İzmir Şube",
    address: "Kuruçeşme Mah. 205/14 Sok. No:17, Buca / İzmir",
    lat: 38.357,
    lng: 27.174,
  },
  {
    name: "Antalya Servis Merkezi",
    address: "Antalya genelinde kurumsal servis desteği",
    lat: 36.897,
    lng: 30.713,
  },
];

export type PrinterModel = {
  model: string;
  image: string;
  type: "Mono Çok Fonksiyonlu" | "Mono Yazıcı" | "Renkli Yazıcı" | "Renkli Çok Fonksiyonlu";
  tier: "Küçük Ofis" | "Orta Ölçekli İşletme" | "Yüksek Hacimli Departman";
};

export const printerModels: PrinterModel[] = [
  { model: "Lexmark MX331adn", image: "/products/mx331adn.jpg", type: "Mono Çok Fonksiyonlu", tier: "Küçük Ofis" },
  { model: "Lexmark MS431dw", image: "/products/ms431dw.jpg", type: "Mono Yazıcı", tier: "Küçük Ofis" },
  { model: "Lexmark CS431dw", image: "/products/cs431dw.jpg", type: "Renkli Yazıcı", tier: "Küçük Ofis" },
  { model: "Lexmark CX431adw", image: "/products/cx431adw.jpg", type: "Renkli Çok Fonksiyonlu", tier: "Küçük Ofis" },
  { model: "Lexmark MS531dw", image: "/products/ms531dw.jpg", type: "Mono Yazıcı", tier: "Orta Ölçekli İşletme" },
  { model: "Lexmark CS632dwe", image: "/products/cs632dwe.jpg", type: "Renkli Yazıcı", tier: "Orta Ölçekli İşletme" },
  { model: "Lexmark CX635adwe", image: "/products/cx635adwe.jpg", type: "Renkli Çok Fonksiyonlu", tier: "Orta Ölçekli İşletme" },
  { model: "Lexmark CS730de", image: "/products/cs730de.jpg", type: "Renkli Yazıcı", tier: "Yüksek Hacimli Departman" },
];

/* Hero'daki ürün dizilimi için soldan sağa küçükten büyüğe, ortada
   en yüksek hacimli modelle "silüet" oluşturacak sıralama. */
export const heroLineup: PrinterModel[] = [
  printerModels[0], // MX331adn - Küçük Ofis
  printerModels[1], // MS431dw - Küçük Ofis
  printerModels[4], // MS531dw - Orta Ölçekli
  printerModels[5], // CS632dwe - Orta Ölçekli
  printerModels[7], // CS730de - Yüksek Hacimli (merkez, en uzun)
  printerModels[6], // CX635adwe - Orta Ölçekli
  printerModels[3], // CX431adw - Küçük Ofis
  printerModels[2], // CS431dw - Küçük Ofis
];

export const supportedBrands = [
  "Lexmark",
  "Xerox",
  "Ricoh",
  "Epson",
  "Canon",
  "HP",
  "Kyocera",
  "Brother",
  "Samsung",
];
