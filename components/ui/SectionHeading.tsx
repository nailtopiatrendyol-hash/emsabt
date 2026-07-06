export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  const eyebrowColor = dark ? "#ffffff" : "var(--color-red)";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className ?? ""}`}
    >
      {eyebrow && (
        <span
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]"
          style={{ color: eyebrowColor }}
        >
          <span className="h-px w-6" style={{ background: eyebrowColor }} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/75" : "text-[var(--color-mist)]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
