import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-[var(--color-hairline-2)] pl-8">
      {timeline.map((item) => (
        <li key={item.year} className="relative">
          <span className="absolute -left-[2.35rem] flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[var(--color-red)] ring-4 ring-white" />
          <span className="font-display text-sm font-extrabold text-[var(--color-red)]">
            {item.year}
          </span>
          <p className="mt-1 text-[15px] leading-relaxed text-[var(--color-mist)]">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
