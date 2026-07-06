import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientLogoGrid } from "@/components/ui/ClientLogoGrid";
import { Button } from "@/components/ui/Button";

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Referanslarımız"
          title="Bankacılıktan belediyeye, perakendeden lojistiğe"
          description="Türkiye'nin önde gelen kurumsal firmaları baskı altyapılarını bize emanet ediyor."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <ClientLogoGrid limit={12} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/referanslar" variant="ghost" icon>
            Tüm referanslarımızı görün
          </Button>
        </div>
      </Container>
    </section>
  );
}
