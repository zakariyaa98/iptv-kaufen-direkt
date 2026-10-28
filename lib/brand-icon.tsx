/**
 * Brand mark for generated images (favicon, apple-touch-icon, Open Graph).
 * Kept in sync with BrandMark in components/logo/BrandLogo.tsx.
 */
export function BrandIconArt({ size, background = false }: { size: number; background?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: background ? "#0a0f1c" : "transparent",
      }}
    >
      <svg width={background ? size * 0.72 : size} height={background ? size * 0.72 : size} viewBox="0 0 40 40">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect x="2" y="6" width="36" height="25" rx="6" fill="url(#g)" />
        <path d="M17 13.5v10l8.5-5z" fill="#03141a" />
        <path d="M14 35h12" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
