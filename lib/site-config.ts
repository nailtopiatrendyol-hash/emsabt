export const siteConfig = {
  name: "Emsa BT",
  legalName: "Emsa Bilgisayar",
  tagline: "Lexmark Yetkili Servis & Yedek Parça Distribütörü",
  description:
    "Türkiye'nin Lexmark yetkili teknik servisi ve tek yetkili yedek parça distribütörü. Yazıcı satışı, teknik servis, yerinde servis, doküman yönetimi ve dijital dönüşüm çözümleri.",
  domain: "emsabt.com.tr",
  phone: "444 22 06",
  phoneHref: "tel:4442206",
  whatsapp: "+90 531 655 62 62",
  whatsappHref: "https://wa.me/905316556262",
  email: "destek@emsabt.com.tr",
  emailHref: "mailto:destek@emsabt.com.tr",
  social: {
    facebook: "https://www.facebook.com/emsabilgisayar",
    instagram: "https://www.instagram.com/lexmarkemsabt/",
    linkedin: "https://www.linkedin.com/company/emsa-bilgisayar",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Ürün Kataloğu", href: "/katalog" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "İletişim", href: "/iletisim" },
];
