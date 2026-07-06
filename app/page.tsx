import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CatalogTeaser } from "@/components/home/CatalogTeaser";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CertificationsStrip } from "@/components/ui/CertificationsStrip";
import { PartnersStrip } from "@/components/ui/PartnersStrip";
import { CTASection } from "@/components/ui/CTASection";
import { StatBar } from "@/components/ui/StatBar";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="-mt-10 relative z-10">
        <StatBar />
      </Container>
      <ServicesOverview />
      <CatalogTeaser />
      <ClientsSection />
      <section className="border-t border-[var(--color-hairline)] py-14">
        <Container>
          <PartnersStrip />
        </Container>
      </section>
      <section className="border-t border-[var(--color-hairline)] py-14">
        <Container>
          <CertificationsStrip />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
