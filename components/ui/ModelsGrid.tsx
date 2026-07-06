import Image from "next/image";
import { printerModels } from "@/lib/content";

export function ModelsGrid() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {printerModels.map((item) => (
        <div
          key={item.model}
          className="flex flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-6 text-center"
        >
          <div className="relative h-28 w-28">
            <Image src={item.image} alt={item.model} fill sizes="112px" className="object-contain" />
          </div>
          <h3 className="mt-4 text-sm font-bold text-[var(--color-ink)]">{item.model}</h3>
          <span className="mt-1 text-xs text-[var(--color-mist)]">{item.type}</span>
          <span className="mt-2 inline-flex rounded-full bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-red)]">
            {item.tier}
          </span>
        </div>
      ))}
    </div>
  );
}
