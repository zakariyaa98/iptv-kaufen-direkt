import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "IPTV Blog – Anleitungen, Apps, Geräte & Tipps";

/** Social preview for /blog. */
export default function BlogIndexOpenGraphImage() {
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
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 90% 85%, rgba(167,139,250,0.26), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#a78bfa", letterSpacing: 3 }}>IPTV BLOG</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 76, fontWeight: 800, color: "#f8fafc", lineHeight: 1.1 }}>
          Anleitungen, Apps, Geräte & Tipps
        </div>
        <div style={{ display: "flex", marginTop: 28, gap: 20 }}>
          {["Apps", "Geräte", "Fehlerbehebung"].map((tag) => (
            <div key={tag} style={{ display: "flex", padding: "12px 28px", borderRadius: 999, border: "2px solid #22d3ee", fontSize: 32, color: "#f8fafc" }}>
              {tag}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "#94a3b8" }}>{SITE.name} — auf Deutsch</div>
      </div>
    ),
    { ...size }
  );
}
