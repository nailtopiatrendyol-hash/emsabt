import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientLogoGrid } from "@/components/ui/ClientLogoGrid";
import { PartnersStrip } from "@/components/ui/PartnersStrip";
import { CTASection } from "@/components/ui/CTASection";
import { otherClients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Bankacılık, perakende, belediye, lojistik ve daha pek çok sektörden kurumsal firmanın güvendiği çözüm ortağı.",
};

export default function ReferanslarPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslarımız"
        title="Kurumsal Türkiye'nin güvendiği çözüm ortağı"
        description="2007'den bu yana bankacılıktan perakendeye, belediyelerden lojistiğe kadar pek çok sektörden kurumsal firmaya satış ve satış sonrası hizmette çözüm üretiyoruz."
      />
      <Container className="py-16 lg:py-20">
        <SectionHeading eyebrow="Müşterilerimiz" title="Bize güvenen kurumsal firmalar" />
        <div className="mt-10">
          <ClientLogoGrid />
        </div>

        <div className="mt-10 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8">
          <h3 className="text-sm font-bold text-[var(--color-ink)]">
            Hizmet verdiğimiz diğer kurumsal müşterilerimiz
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-mist)]">
            {otherClients.join(" · ")}
          </p>
        </div>

        <div className="mt-16 border-t border-[var(--color-hairline)] pt-14">
          <PartnersStrip
            eyebrow="İş Ortaklarımız"
            title="Müşterilerimize bu markaların yetkili gücüyle hizmet veriyoruz"
          />
        </div>
      </Container>
      <CTASection />
    </>
  );
}
