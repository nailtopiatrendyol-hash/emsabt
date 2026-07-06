import Image from "next/image";
import { Check } from "lucide-react";
import type { CatalogCategory } from "@/lib/content";
import { catalogIconMap } from "@/components/ui/icon-map";

function Visual({ category }: { category: CatalogCategory }) {
  if (category.image) {
    return (
      <div className="relative min-h-[220px] bg-[var(--color-surface)]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }
  if (category.logo) {
    return (
      <div className="relative flex min-h-[220px] items-center justify-center bg-[var(--color-surface)] p-10">
        <div className="relative h-16 w-full max-w-xs">
          <Image
            src={category.logo}
            alt={category.title}
            fill
            sizes="320px"
            className="object-contain"
          />
        </div>
      </div>
    );
  }
  const Icon = category.icon ? catalogIconMap[category.icon] : catalogIconMap.archive;
  return (
    <div
      className="relative flex min-h-[220px] items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, var(--color-red-deep) 0%, var(--color-red) 55%, var(--color-red-bright) 100%)",
      }}
    >
      <Icon className="h-20 w-20 text-white/90" strokeWidth={1.25} />
    </div>
  );
}

export function CatalogCard({ category }: { category: CatalogCategory }) {
  return (
    <div
      id={category.slug}
      className="grid overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white lg:grid-cols-2"
    >
      <Visual category={category} />
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <h3 className="text-xl font-bold text-[var(--color-ink)]">{category.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-mist)]">
          {category.description}
        </p>
        <ul className="mt-5 flex flex-col gap-2.5">
          {category.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-red)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
