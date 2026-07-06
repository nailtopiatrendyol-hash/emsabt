import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { BranchesMapLoader } from "@/components/ui/BranchesMapLoader";
import { branches } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Arıza bildirimi, servis talebi veya satış teklifi için bize ulaşın. Telefon, WhatsApp, e-posta ve şube adreslerimiz.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Arıza mı var, servis mi gerekiyor? Hemen ulaşın"
        description="Servis talebinizi formdan iletin, WhatsApp üzerinden hazır mesajla doğrudan bize ulaşın ya da şubelerimizi arayın."
      />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-ink)]">
              Arıza Bildirim / Servis Talep Formu
            </h2>
            <p className="mt-2 text-sm text-[var(--color-mist)]">
              Formu doldurun, WhatsApp üzerinden hazır mesajla anında iletelim.
            </p>
            <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-7">
              <ContactForm />
            </div>

            <a
              href="/servis-sorgulama"
              className="mt-5 flex items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-6 py-4 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-red)]/40"
            >
              Daha önce talep oluşturdunuz mu? Servis durumunuzu sorgulayın
              <span className="text-[var(--color-red)]">→</span>
            </a>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-red)]">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs text-[var(--color-mist-2)]">Telefon</span>
                  <span className="block text-sm font-semibold text-[var(--color-ink)]">
                    {siteConfig.phone}
                  </span>
                </span>
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-red)]">
                  <MessageCircle className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs text-[var(--color-mist-2)]">WhatsApp</span>
                  <span className="block text-sm font-semibold text-[var(--color-ink)]">
                    {siteConfig.whatsapp}
                  </span>
                </span>
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-5 sm:col-span-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-red)]">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs text-[var(--color-mist-2)]">E-posta</span>
                  <span className="block text-sm font-semibold text-[var(--color-ink)]">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
            </div>

            <h2 className="mt-10 text-xl font-bold text-[var(--color-ink)]">Şubelerimiz</h2>
            <div className="mt-5 flex flex-col gap-4">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="flex items-start gap-3 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-5"
                >
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--color-red)]" />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-ink)]">{branch.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-mist)]">
                      {branch.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--color-hairline)] pt-14">
          <h2 className="text-xl font-bold text-[var(--color-ink)]">Şubelerimiz haritada</h2>
          <p className="mt-2 text-sm text-[var(--color-mist)]">
            Bir pine tıklayarak şube bilgisini ve yol tarifini görüntüleyin.
          </p>
          <div className="mt-6">
            <BranchesMapLoader />
          </div>
        </div>
      </Container>
    </>
  );
}
