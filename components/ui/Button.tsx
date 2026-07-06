import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outline-dark" | "ghost";
  className?: string;
  external?: boolean;
  icon?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid: "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-ink)]",
  outline:
    "border border-[var(--color-hairline-2)] text-[var(--color-ink)] hover:border-[var(--color-red)] hover:text-[var(--color-red)]",
  "outline-dark":
    "border border-white/20 text-white hover:border-[var(--color-red-bright)] hover:text-[var(--color-red-bright)]",
  ghost: "text-[var(--color-ink)] hover:text-[var(--color-red)]",
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  external,
  icon,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className ?? ""}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon && <ArrowUpRight className="h-4 w-4" />}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {icon && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
}
