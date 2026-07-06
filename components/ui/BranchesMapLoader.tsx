"use client";

import dynamic from "next/dynamic";

const BranchesMap = dynamic(
  () => import("@/components/ui/BranchesMap").then((mod) => mod.BranchesMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] w-full items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-surface)] text-sm text-[var(--color-mist)]">
        Harita yükleniyor...
      </div>
    ),
  }
);

export function BranchesMapLoader() {
  return <BranchesMap />;
}
