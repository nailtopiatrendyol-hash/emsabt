import { stats } from "@/lib/content";

export function StatBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-hairline)] lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white px-6 py-8">
          <div className="font-display text-3xl font-extrabold text-[var(--color-red)]">
            {stat.value}
          </div>
          <p className="mt-2 text-sm leading-snug text-[var(--color-mist)]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
