import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/content";

export function CertificationsStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {certifications.map((cert) => (
        <span
          key={cert}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-hairline-2)] bg-white px-4 py-2 text-xs font-medium text-[var(--color-mist)]"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-red)]" />
          {cert}
        </span>
      ))}
    </div>
  );
}
