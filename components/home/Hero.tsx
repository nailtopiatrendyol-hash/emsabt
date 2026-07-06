import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { PrinterShowcase } from "@/components/home/PrinterShowcase";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-night)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 15% 0%, var(--color-night-2) 0%, var(--color-night) 55%)",
        }}
      />
      <NetworkBackground />

      <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[1fr_1.25fr] lg:py-28">
        <div>
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-red-bright)] backdrop-blur"
            style={{ animationDelay: "0ms" }}
          >
            {siteConfig.tagline}
          </span>
          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Kurumsal baskı altyapınızın satışından bakımına,{" "}
            <span className="text-[var(--color-red-bright)]">uçtan uca çözüm ortağınız.</span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-[17px] leading-relaxed text-white/65"
            style={{ animationDelay: "240ms" }}
          >
            {siteConfig.description} Bankacılıktan perakendeye, belediyelerden lojistiğe kadar
            pek çok kurumsal firmanın güvendiği çözüm ortağıyız.
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <Button href="/iletisim" variant="solid">
              Servis Talep Et
            </Button>
            <Button href="/hizmetlerimiz" variant="outline-dark">
              Hizmetlerimizi İnceleyin
            </Button>
          </div>
        </div>

        <div className="animate-showcase-frame-in relative" style={{ animationDelay: "200ms" }}>
          <PrinterShowcase />
          <div className="absolute -top-6 -right-6 hidden max-w-[240px] rounded-2xl border border-white/10 bg-[var(--color-night)]/90 p-5 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)] backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-[var(--color-red-bright)]">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide">Lexmark Yetkili</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-white">
              Tek Yetkili Yedek Parça Distribütörü
            </p>
            <p className="mt-1 text-xs text-white/50">2006&apos;dan bu yana</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
