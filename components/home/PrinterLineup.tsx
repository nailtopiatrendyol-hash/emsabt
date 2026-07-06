import Image from "next/image";
import { heroLineup } from "@/lib/content";

const TIER_SIZE: Record<string, { height: number; width: number }> = {
  "Küçük Ofis": { height: 100, width: 150 },
  "Orta Ölçekli İşletme": { height: 132, width: 190 },
  "Yüksek Hacimli Departman": { height: 168, width: 240 },
};

const SPARKS = [
  { left: "4%", size: 5, duration: 3.2, delay: 0 },
  { left: "12%", size: 3, duration: 4.1, delay: 0.8 },
  { left: "22%", size: 4, duration: 3.6, delay: 1.6 },
  { left: "34%", size: 3, duration: 4.4, delay: 0.3 },
  { left: "48%", size: 5, duration: 3.8, delay: 1.1 },
  { left: "58%", size: 3, duration: 3.3, delay: 2.1 },
  { left: "68%", size: 4, duration: 4.2, delay: 0.6 },
  { left: "78%", size: 3, duration: 3.7, delay: 1.9 },
  { left: "88%", size: 5, duration: 4, delay: 1.3 },
  { left: "95%", size: 3, duration: 3.5, delay: 0.9 },
];

export function PrinterLineup() {
  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 bottom-6 h-24 opacity-60"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%, var(--color-red) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {SPARKS.map((s, i) => (
        <span
          key={i}
          data-printer-anim
          className="animate-spark pointer-events-none absolute bottom-10 rounded-full"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            background: "var(--color-red-bright)",
            boxShadow: "0 0 8px 2px rgba(232,19,1,0.7)",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <div className="scrollbar-none relative overflow-x-auto">
        <div
          data-printer-anim
          className="animate-shimmer pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }}
        />
        <div className="relative flex items-end justify-center gap-4 px-2 pb-6 sm:gap-5">
          {heroLineup.map((printer, i) => {
            const { height, width } = TIER_SIZE[printer.tier];
            return (
              <div
                key={printer.model}
                data-printer-anim
                className="relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_18px_30px_-14px_rgba(0,0,0,0.55)]"
                style={{
                  height,
                  width,
                  opacity: 0,
                  animation: `printer-fly-in 0.85s cubic-bezier(0.2,0.8,0.25,1) ${
                    220 + i * 90
                  }ms both, printer-idle-float ${3.4 + (i % 3) * 0.4}s ease-in-out ${
                    1100 + i * 90
                  }ms infinite`,
                }}
              >
                <Image
                  src={printer.image}
                  alt={printer.model}
                  fill
                  sizes="240px"
                  className="object-contain p-4"
                  priority={i < 4}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:mx-0" />
    </div>
  );
}
