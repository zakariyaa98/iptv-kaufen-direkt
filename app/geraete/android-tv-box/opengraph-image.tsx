import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "IPTV auf Android TV Box einrichten – Player, M3U und Xtream Codes";

/** Social preview for /geraete/android-tv-box. Same look as the sitewide image, with page-specific text. */
export default function AndroidTvOpenGraphImage() {
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
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 90% 85%, rgba(59,130,246,0.28), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#a78bfa", letterSpacing: 3 }}>
          GERÄTE-ANLEITUNG
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 72, fontWeight: 800, color: "#f8fafc", lineHeight: 1.1 }}>
          IPTV auf Android TV Box einrichten
        </div>
        <div style={{ display: "flex", marginTop: 28, gap: 20 }}>
          <div style={{ display: "flex", padding: "12px 28px", borderRadius: 999, border: "2px solid #22d3ee", fontSize: 32, color: "#f8fafc" }}>
            Android TV · Google TV
          </div>
          <div style={{ display: "flex", padding: "12px 28px", borderRadius: 999, border: "2px solid #3b82f6", fontSize: 32, color: "#f8fafc" }}>
            Play Store · 4K · LAN
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "#94a3b8" }}>
          M3U · Xtream Codes · EPG · Fehlerhilfe — {SITE.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
