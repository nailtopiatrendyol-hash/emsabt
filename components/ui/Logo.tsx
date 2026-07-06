import Image from "next/image";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span className={`relative inline-block h-11 w-[68px] shrink-0 ${className ?? ""}`}>
      <Image
        src={dark ? "/brand/emsa-logo-white.png" : "/brand/emsa-logo-color.png"}
        alt="Emsa BT"
        fill
        priority
        sizes="68px"
        className="object-contain object-left"
      />
    </span>
  );
}
