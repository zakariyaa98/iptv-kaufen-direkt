import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "IPTV legal oder illegal in Deutschland – Unterschiede und Preise";

/** Social preview for /iptv-legal. Same look as the sitewide image, with page-specific text. */
export default function IptvLegalOpenGraphImage() {
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
            "radial-gradient(circle at 15% 15%, rgba(52,211,153,0.26), transparent 45%), radial-gradient(circle at 90% 85%, rgba(251,191,36,0.2), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#a78bfa", letterSpacing: 3 }}>
          RECHTLICHE ORIENTIERUNG
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 72, fontWeight: 800, color: "#f8fafc", lineHeight: 1.1 }}>
          IPTV legal oder illegal?
        </div>
        <div style={{ display: "flex", marginTop: 28, gap: 20 }}>
          <div style={{ display: "flex", padding: "12px 28px", borderRadius: 999, border: "2px solid #34d399", fontSize: 32, color: "#f8fafc" }}>
            Mit Senderechten
          </div>
          <div style={{ display: "flex", padding: "12px 28px", borderRadius: 999, border: "2px solid #fbbf24", fontSize: 32, color: "#f8fafc" }}>
            Ohne Senderechte
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "#94a3b8" }}>
          Unterschiede, Warnsignale und Preise — {SITE.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
