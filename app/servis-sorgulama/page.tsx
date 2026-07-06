import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servis Formu Sorgulama",
  description:
    "Referans numaranız veya cihaz seri numaranız ile servis talebinizin durumunu sorgulayın.",
};

export default function ServisSorgulamaPage() {
  return (
    <>
      <PageHero
        eyebrow="Destek Merkezi"
        title="Servis Talebinizin Durumunu Sorgulayın"
        description="Servis talebi oluştururken size iletilen referans numarası veya cihazınızın seri numarası ile talebinizin anlık durumunu görüntüleyebilirsiniz."
      />
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center gap-3 rounded-t-[var(--radius-card)] border border-b-0 border-[var(--color-hairline)] bg-[var(--color-surface)] px-6 py-4">
            <Search className="h-4.5 w-4.5 text-[var(--color-red)]" />
            <span className="text-sm font-semibold text-[var(--color-ink)]">Cihaz Sorgula</span>
          </div>
          <div className="overflow-hidden rounded-b-[var(--radius-card)] border border-[var(--color-hairline)] bg-white">
            <iframe
              src="https://esnweb.com/servicesearch.html?q=9ic0RwQx702BSGpWpsLc8Q=="
              width="100%"
              height="520"
              frameBorder={0}
              title="Emsa BT Servis Formu Sorgulama"
            />
          </div>
          <p className="mt-5 text-center text-sm text-[var(--color-mist)]">
            Sorgulamada sorun mu yaşıyorsunuz? {siteConfig.phone} numaralı telefondan ya da{" "}
            <a href={siteConfig.emailHref} className="font-semibold text-[var(--color-red)]">
              {siteConfig.email}
            </a>{" "}
            adresinden bize ulaşın.
          </p>
        </div>
      </Container>
    </>
  );
}
