import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CatalogCard } from "@/components/ui/CatalogCard";
import { ModelsGrid } from "@/components/ui/ModelsGrid";
import { PartnersStrip } from "@/components/ui/PartnersStrip";
import { CTASection } from "@/components/ui/CTASection";
import { catalogCategories, supportedBrands } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ürün Kataloğu",
  description:
    "Orijinal Lexmark yedek parça, bakım kitleri, Lexmark & Ricoh yazıcı satışı ve teknik servis kategorilerimizi inceleyin.",
};

export default function KatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Ürün Kataloğu"
        title="Orijinal yedek parçadan yeni cihaza, tüm ürün kategorilerimiz"
        description="Lexmark'ın Türkiye Yetkili Yedek Parça Distribütörü olarak; orijinal yedek parça, bakım kiti, yazıcı satışı ve teknik onarım hizmetlerini tek çatı altında sunuyoruz."
      />
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-8">
          {catalogCategories.map((category) => (
            <CatalogCard key={category.slug} category={category} />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Örnek Modeller"
            title="Satışını yaptığımız Lexmark yazıcı ailesinden örnekler"
            description="Küçük ofis ihtiyacından yüksek hacimli departman baskısına kadar, işletmenize uygun modeli birlikte belirliyoruz. Güncel fiyat ve stok bilgisi için bizimle iletişime geçin."
          />
          <div className="mt-10">
            <ModelsGrid />
          </div>
        </div>

        <div className="mt-14 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8">
          <h3 className="text-lg font-bold text-[var(--color-ink)]">
            Arıza bildiriminde desteklediğimiz markalar
          </h3>
          <p className="mt-2 text-sm text-[var(--color-mist)]">
            Lexmark ve Ricoh satış/servis ortaklığımızın yanı sıra, teknik servis
            hizmetlerimizde aşağıdaki markalar için de arıza kabul ediyoruz.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {supportedBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-[var(--color-hairline-2)] bg-white px-4 py-1.5 text-sm font-medium text-[var(--color-ink)]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <PartnersStrip
            eyebrow="İş Ortaklarımız"
            title="Bu kataloğu mümkün kılan marka ortaklıklarımız"
          />
        </div>
      </Container>
      <CTASection />
    </>
  );
}
