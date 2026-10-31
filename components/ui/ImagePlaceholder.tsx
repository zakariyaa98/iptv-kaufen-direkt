type ImagePlaceholderProps = {
  /** Intended ALT text for the final image. Kept here so the swap to next/image is one step. */
  alt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-video". */
  aspect?: string;
  className?: string;
};

/**
 * Decorative stand-in for a photo that the owner will supply later.
 * Replace with <Image src="/images/…" alt={alt} … /> from next/image once the file exists in /public.
 */
export function ImagePlaceholder({ alt, aspect = "aspect-video", className }: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden
      data-image-slot={alt}
      className={`relative w-full overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-surface via-background-elevated to-background ${aspect} ${className ?? ""}`}
    >
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_20%,rgba(34,211,238,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_90%,rgba(167,139,250,0.16),transparent_70%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-background/60 text-accent shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
            <path d="M8 5.5v13l10-6.5-10-6.5z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
