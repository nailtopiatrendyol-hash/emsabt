export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/emsa-mark-new.svg" alt="" aria-hidden="true" className="h-9 w-auto shrink-0" />
      <span
        className="font-display text-xl font-extrabold tracking-tight leading-none"
        style={{ color: dark ? "white" : "var(--color-ink)" }}
      >
        EMSA<span style={{ color: "var(--color-red)" }}>BT</span>
      </span>
    </span>
  );
}
