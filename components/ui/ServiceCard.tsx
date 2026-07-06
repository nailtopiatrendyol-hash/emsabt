import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";
import { serviceIconMap } from "@/components/ui/icon-map";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIconMap[service.icon];
  return (
    <Link
      href={`/hizmetlerimiz#${service.slug}`}
      className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-red)]/40 hover:shadow-[0_16px_40px_-24px_rgba(210,20,4,0.35)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-red)] group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[var(--color-ink)]">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-[var(--color-mist)]">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-red)]">
        Detaylı bilgi
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
