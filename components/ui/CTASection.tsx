import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { siteConfig } from "@/lib/site-config";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-night)] py-20">
      <NetworkBackground />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Cihazınız mı arızalandı? Yerinde servis mi gerekiyor?
        </h2>
        <p className="max-w-xl text-[15px] leading-relaxed text-white/70">
          Servis taleplerinin yaklaşık %70&apos;i uzaktan çözülüyor. Kalanı için Türkiye&apos;nin
          81 iline ve Kıbrıs&apos;a yerinde teknik destek sağlıyoruz.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/iletisim" variant="solid">
            Arıza Bildir / Servis Talep Et
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4 text-[var(--color-red-bright)]" />
            {siteConfig.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
