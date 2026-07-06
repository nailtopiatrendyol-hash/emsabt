export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.35C15.9 4.24 15 4.15 13.98 4.15c-2.6 0-4.38 1.58-4.38 4.48v2.17H7v3h2.6V21h3.9Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H4.02V20h2.92V8.5ZM5.48 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.4c0-3.02-1.6-4.43-3.75-4.43-1.73 0-2.5.95-2.93 1.62V8.5H10.4c.04.83 0 11.5 0 11.5h2.92v-6.42c0-.34.02-.69.13-.94.28-.69.9-1.4 1.96-1.4 1.38 0 1.93 1.05 1.93 2.6V20H20v-6.6Z" />
    </svg>
  );
}
