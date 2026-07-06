import Image from "next/image";
import { clientLogos } from "@/lib/content";

export function ClientLogoGrid({ limit }: { limit?: number }) {
  const logos = limit ? clientLogos.slice(0, limit) : clientLogos;
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-hairline)] sm:grid-cols-3 lg:grid-cols-6">
      {logos.map((logo) => (
        <div
          key={logo.file}
          className="group flex aspect-[3/2] items-center justify-center bg-white p-6 grayscale transition-all duration-200 hover:grayscale-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={`/logos/${logo.file}`}
              alt={logo.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
