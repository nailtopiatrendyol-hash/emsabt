import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { label: "Teknik Servis Hizmetleri", href: "/hizmetlerimiz#teknik-servis" },
  { label: "Satış Hizmetleri", href: "/hizmetlerimiz#satis" },
  { label: "Yerinde Servis", href: "/hizmetlerimiz#yerinde-servis" },
  { label: "Danışmanlık Hizmetleri", href: "/hizmetlerimiz#danismanlik" },
  { label: "Doküman Yönetimi", href: "/hizmetlerimiz#dokuman-yonetimi" },
  { label: "Servis Formu Sorgulama", href: "/servis-sorgulama" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] bg-[var(--color-surface)]">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-mist)]">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-hairline-2)] text-[var(--color-mist)] hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-hairline-2)] text-[var(--color-mist)] hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-hairline-2)] text-[var(--color-mist)] hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">Kurumsal</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-mist)] hover:text-[var(--color-red)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">Hizmetlerimiz</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-mist)] hover:text-[var(--color-red)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">İletişim</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-mist)]">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-[var(--color-red)]" />
              <a href={siteConfig.phoneHref} className="hover:text-[var(--color-red)]">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-[var(--color-red)]" />
              <a href={siteConfig.emailHref} className="hover:text-[var(--color-red)]">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-red)]" />
              <span>İstanbul, Türkiye — Türkiye geneli servis ağı</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--color-hairline)]">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--color-mist-2)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.
          </p>
          <p>Lexmark, tescilli ticari markadır ve ilgili sahibine aittir.</p>
        </Container>
      </div>
    </footer>
  );
}
