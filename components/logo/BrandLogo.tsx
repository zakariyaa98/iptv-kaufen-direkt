import Image from "next/image";
import logoHeader from "@/public/images/LOGO/iptv-kaufen-direkt-logo.webp";
import logoTv from "@/public/images/LOGO/iptv-kaufen-direkt-logo-tv.webp";

type BrandLogoProps = {
  className?: string;
  /** Which logo version to show. */
  variant?: "header" | "footer";
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

/**
 * Raster brand logo. Two versions of the same design:
 * - "header": compact wordmark, loaded eagerly because it is above the fold on every page.
 * - "footer": version with the TV stand, lazy-loaded because it sits at the bottom of the page.
 * Height is set per breakpoint; width follows the image's own aspect ratio, so it never stretches.
 */
export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <Image
        src={logoTv}
        alt="IPTV Kaufen Direkt Logo"
        loading="lazy"
        sizes="(min-width: 640px) 184px, 160px"
        // self-start: inside a flex column the default stretch would override w-auto and distort the logo.
        className={`h-13 w-auto max-w-full self-start object-contain sm:h-15 ${className ?? ""}`}
      />
    );
  }

  return (
    <Image
      src={logoHeader}
      alt="IPTV Kaufen Direkt Logo"
      loading="eager"
      fetchPriority="high"
      sizes="(min-width: 1024px) 183px, (min-width: 640px) 166px, 150px"
      className={`h-9 w-auto object-contain sm:h-10 lg:h-11 ${className ?? ""}`}
    />
  );
}
