import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/content";

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Satıştan teknik servise, danışmanlıktan doküman yönetimine"
          description="Lexmark ve Ricoh yetkili servis ağımızla, kurumsal baskı altyapınızın tüm yaşam döngüsünü tek noktadan yönetiyoruz."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
