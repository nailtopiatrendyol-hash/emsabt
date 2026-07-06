"use client";

import Link from "next/link";
import { MessageCircle, Phone, Search, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const actions = [
  {
    key: "sorgula",
    label: "Servis Sorgula",
    href: "/servis-sorgulama",
    icon: Search,
    className: "bg-white text-[var(--color-ink)] hover:text-[var(--color-red)]",
  },
  {
    key: "ariza",
    label: "Arıza Bildir",
    href: "/iletisim",
    icon: Wrench,
    className: "bg-white text-[var(--color-ink)] hover:text-[var(--color-red)]",
  },
  {
    key: "ara",
    label: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone,
    className: "bg-white text-[var(--color-ink)] hover:text-[var(--color-red)]",
  },
];

export function QuickActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {actions.map(({ key, label, href, icon: Icon, className }) => (
        <Link
          key={key}
          href={href}
          className="group flex items-center gap-3"
          aria-label={label}
        >
          <span className="translate-x-2 whitespace-nowrap rounded-full bg-[var(--color-ink-panel)] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </span>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-lg shadow-black/15 ring-1 ring-black/5 transition-transform hover:scale-105 ${className}`}
          >
            <Icon className="h-4.5 w-4.5" />
          </span>
        </Link>
      ))}

      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yazın"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" fill="white" />
      </a>
    </div>
  );
}
