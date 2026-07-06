import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-[var(--color-hairline)] bg-[var(--color-surface)] py-16 lg:py-20">
      <Container>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-red)]">
          <span className="h-px w-6 bg-[var(--color-red)]" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[var(--color-mist)]">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
