import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} – ${SITE.tagline}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#0a0f1c",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 90% 85%, rgba(167,139,250,0.25), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width={120} height={120} viewBox="0 0 40 40">
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
          <div style={{ display: "flex", fontSize: 78, fontWeight: 800, color: "#f8fafc" }}>
            IPTV Kaufen&nbsp;<span style={{ color: "#22d3ee" }}>Direkt</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 36, color: "#cbd5e1" }}>{SITE.tagline}</div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 28, color: "#94a3b8" }}>
          Fire TV · Smart TV · Android TV · MAG · Enigma2
        </div>
      </div>
    ),
    { ...size }
  );
}
