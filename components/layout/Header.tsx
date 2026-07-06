"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-hairline)] bg-white/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3.5">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  active
                    ? "text-[var(--color-red)]"
                    : "text-[var(--color-mist)] hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
          >
            <Phone className="h-4 w-4 text-[var(--color-red)]" />
            {siteConfig.phone}
          </a>
          <Button href="/iletisim" variant="solid">
            Servis Talep Et
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-hairline-2)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-hairline)] bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                  pathname === link.href
                    ? "bg-[var(--color-surface)] text-[var(--color-red)]"
                    : "text-[var(--color-mist)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-[var(--color-hairline)] pt-4">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Phone className="h-4 w-4 text-[var(--color-red)]" />
              {siteConfig.phone}
            </a>
            <Button href="/iletisim" variant="solid" className="w-full">
              Servis Talep Et
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
