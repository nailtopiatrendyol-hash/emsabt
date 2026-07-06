import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceDetail } from "@/components/ServiceDetail";
import { PartnersStrip } from "@/components/ui/PartnersStrip";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Teknik servis, satış, yerinde servis, danışmanlık, doküman yönetimi ve garanti hizmetlerimiz hakkında detaylı bilgi alın.",
};

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Kurumsal baskı altyapınız için uçtan uca hizmet"
        description="Satıştan teknik servise, yerinde müdahaleden danışmanlık ve doküman yönetimine kadar; Lexmark ve Ricoh yetkili servis ağımızla ihtiyacınız olan her hizmeti tek noktadan sağlıyoruz."
      />
      <Container>
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceDetail key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="border-t border-[var(--color-hairline)] py-14">
          <PartnersStrip />
        </div>
      </Container>
      <CTASection />
    </>
  );
}
