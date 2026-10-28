type BrandLogoProps = {
  className?: string;
  /** Hide the wordmark and show only the icon. */
  iconOnly?: boolean;
};

/** Inline SVG brand mark: a screen with a play symbol and a signal arc. No image request needed. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brand-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="36" height="25" rx="6" fill="url(#brand-grad)" />
      <path d="M17 13.5v10l8.5-5z" fill="#03141a" />
      <path d="M14 35h12" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrandLogo({ className, iconOnly = false }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <BrandMark className="h-9 w-9 shrink-0" />
      {iconOnly ? null : (
        <span className="text-base font-extrabold leading-none tracking-tight text-foreground sm:text-lg">
          IPTV Kaufen <span className="text-accent">Direkt</span>
        </span>
      )}
    </span>
  );
}
