"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { printerModels } from "@/lib/content";

const INTERVAL = 2800;
const LEN = printerModels.length;

export function PrinterShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % LEN);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const current = printerModels[index];
  const prev = printerModels[(index - 1 + LEN) % LEN];
  const next = printerModels[(index + 1) % LEN];

  return (
    <div className="relative aspect-[6/5] overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.65)] sm:aspect-[5/4]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 65% at 50% 42%, var(--color-surface) 0%, #ffffff 70%)",
        }}
      />
      <div className="network-bg-grid absolute inset-0 opacity-[0.35]" />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div key={`prev-${prev.model}`} className="animate-peek-in absolute left-[2%] sm:left-[6%]">
          <div className="relative h-20 w-20 scale-90 blur-[1.5px] sm:h-28 sm:w-28">
            <Image src={prev.image} alt="" fill sizes="112px" className="object-contain grayscale" />
          </div>
        </div>

        <div key={`next-${next.model}`} className="animate-peek-in absolute right-[2%] sm:right-[6%]">
          <div className="relative h-20 w-20 scale-90 blur-[1.5px] sm:h-28 sm:w-28">
            <Image src={next.image} alt="" fill sizes="112px" className="object-contain grayscale" />
          </div>
        </div>

        <div
          key={current.model}
          className="animate-showcase-in relative z-10 flex flex-col items-center gap-5 px-6"
        >
          <div className="hero-float relative h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            <Image
              src={current.image}
              alt={current.model}
              fill
              sizes="288px"
              className="object-contain drop-shadow-2xl"
              priority={index === 0}
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-extrabold text-[var(--color-ink)] sm:text-xl">
              {current.model}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-red)] sm:text-sm">
              {current.type} · {current.tier}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
        {printerModels.map((model, i) => (
          <span
            key={model.model}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-[var(--color-red)]" : "w-1.5 bg-[var(--color-hairline-2)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
