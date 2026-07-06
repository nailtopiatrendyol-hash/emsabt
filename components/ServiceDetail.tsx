import { Check } from "lucide-react";
import type { Service } from "@/lib/content";
import { serviceIconMap } from "@/components/ui/icon-map";

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIconMap[service.icon];
  const reversed = index % 2 === 1;
  return (
    <div
      id={service.slug}
      className="grid scroll-mt-24 items-center gap-10 border-t border-[var(--color-hairline)] py-14 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-red)] text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--color-ink)]">
          {service.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-mist)]">
          {service.longDescription}
        </p>
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <ul className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7">
          {service.bulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-red)]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
