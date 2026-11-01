import type { NextConfig } from "next";

// Domain canonicalization (www vs. apex) and HTTPS enforcement are handled at the
// Cloudflare/Vercel edge, not here — a redirect added at this level fights with
// those and produces a redirect loop (ERR_TOO_MANY_REDIRECTS).
// Path-only redirects (same host) are safe here.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The /geraete overview page was removed; its device guides are listed on /anleitungen.
      // Exact match only – the device pages under /geraete/* stay where they are.
      { source: "/geraete", destination: "/anleitungen", statusCode: 301 },
    ];
  },
};

export default nextConfig;
