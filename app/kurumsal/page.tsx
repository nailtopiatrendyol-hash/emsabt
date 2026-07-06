import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { PartnersStrip } from "@/components/ui/PartnersStrip";
import { CTASection } from "@/components/ui/CTASection";
import { branches, certifications, coreValues } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "2003'ten bu yana Lexmark Yetkili Teknik Servis Merkezi olan Emsa Bilgisayar'ın hikayesi, değerleri ve sertifikaları.",
};

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="2003'ten bu yana kurumsal baskı çözümlerinde güvenilir ortak"
        description={`${siteConfig.legalName}, baskı çözümleri satış ve teknik servis firması olarak yola çıktı; bugün Lexmark'ın Türkiye Yedek Parça Distribütörü ve yetkili teknik servis merkezi olarak Türkiye'nin 81 iline ve Kıbrıs'a hizmet veriyor.`}
      />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Tarihçemiz" title="Şirketimizin gelişim yolculuğu" />
            <div className="mt-10">
              <Timeline />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Değerlerimiz" title="Kurumsal değerlerimiz" />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <li
                  key={value}
                  className="rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-5 text-sm leading-relaxed text-[var(--color-ink)]"
                >
                  {value}
                </li>
              ))}
            </ul>

            <div className="mt-14">
              <SectionHeading eyebrow="Sertifikalar" title="Belgelerimiz ve yetkilendirmelerimiz" />
              <ul className="mt-8 flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-3 rounded-xl border border-[var(--color-hairline)] bg-white px-5 py-4 text-sm text-[var(--color-ink)]"
                  >
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-red)]" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--color-hairline)] pt-14">
          <PartnersStrip />
        </div>
      </Container>

      <section className="border-t border-[var(--color-hairline)] bg-[var(--color-surface)] py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Şubelerimiz"
            title="Türkiye genelinde 4 servis merkezi"
            description="İstanbul, Ankara, İzmir ve Antalya'daki servis merkezlerimiz ve Türkiye genelindeki temsilciliklerimizle 81 il ve Kıbrıs'a kurumsal servis desteği sağlıyoruz."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-6"
              >
                <h3 className="text-sm font-bold text-[var(--color-ink)]">{branch.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-mist)]">
                  {branch.address}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
