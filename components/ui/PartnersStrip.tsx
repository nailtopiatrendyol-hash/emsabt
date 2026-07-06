import Image from "next/image";
import { partners } from "@/lib/content";

export function PartnersStrip({
  eyebrow = "İş Ortaklarımız",
  title = "Yetkili iş birliği yaptığımız markalar",
  className,
}: {
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-red)]">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-hairline)] sm:grid-cols-5">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex aspect-[3/2] items-center justify-center bg-white p-6 grayscale transition-all duration-200 hover:grayscale-0"
          >
            <div className="relative h-full w-full">
              <Image
                src={`${partner.path}/${partner.file}`}
                alt={partner.name}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
