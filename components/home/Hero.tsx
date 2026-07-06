import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { PrinterLineup } from "@/components/home/PrinterLineup";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-night)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 0%, var(--color-night-2) 0%, var(--color-night) 60%)",
        }}
      />
      <NetworkBackground />

      <Container className="relative pt-16 pb-4 text-center lg:pt-24">
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-red-bright)] backdrop-blur"
          style={{ animationDelay: "0ms" }}
        >
          {siteConfig.tagline}
        </span>
        <h1
          className="animate-fade-up mx-auto mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          style={{ animationDelay: "120ms" }}
        >
          İşletmenizin{" "}
          <span className="text-[var(--color-red-bright)]">baskı potansiyelini</span>{" "}
          doruklara çıkarın
        </h1>
        <p
          className="animate-fade-up mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/65"
          style={{ animationDelay: "240ms" }}
        >
          {siteConfig.description} Bankacılıktan perakendeye, belediyelerden lojistiğe kadar
          pek çok kurumsal firmanın güvendiği çözüm ortağıyız.
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "360ms" }}
        >
          <Button href="/iletisim" variant="solid">
            Servis Talep Et
          </Button>
          <Button href="/hizmetlerimiz" variant="outline-dark">
            Hizmetlerimizi İnceleyin
          </Button>
        </div>
        <div
          className="animate-fade-up mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/50"
          style={{ animationDelay: "420ms" }}
        >
          <ShieldCheck className="h-4 w-4 text-[var(--color-red-bright)]" />
          Lexmark Yetkili · Tek Yetkili Yedek Parça Distribütörü · 2006&apos;dan bu yana
        </div>
      </Container>

      <div className="relative mt-10 pb-16 lg:mt-14 lg:pb-20">
        <Container>
          <PrinterLineup />
        </Container>
      </div>
    </section>
  );
}
