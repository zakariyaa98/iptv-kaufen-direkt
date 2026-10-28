/**
 * Single source of truth for brand, domain and contact data.
 * Every page, the sitemap, robots.txt, JSON-LD and the contact API read from here,
 * so a domain or contact change is a one-line edit.
 */
export const SITE = {
  name: "IPTV Kaufen Direkt",
  url: "https://iptv-kaufen-direkt.de",
  locale: "de_DE",
  language: "de-DE",
  tagline: "IPTV-Einrichtung, Beratung und Support auf Deutsch",
  description:
    "Persönliche Hilfe bei IPTV: Einrichtungshilfe für Ihre Geräte, verständliche Anleitungen und Support per WhatsApp, Telegram und E-Mail.",
  email: "contactipm3utv@gmail.com",
  whatsappNumber: "33753411326",
  whatsappDisplay: "+33 7 53 41 13 26",
  telegramHandle: "@Ipm3utv98",
  telegramUrl: "https://t.me/Ipm3utv98",
} as const;

/**
 * Impressum data (§ 5 DDG). Required for any commercial website in Germany.
 * TODO(owner): replace every placeholder before the site goes live.
 */
export const LEGAL = {
  ownerName: "[Vor- und Nachname / Firmenname]",
  street: "[Straße und Hausnummer]",
  postalCity: "[PLZ Ort]",
  country: "[Land]",
  phone: SITE.whatsappDisplay,
  email: SITE.email,
  vatId: "[USt-IdNr., falls vorhanden – sonst Zeile entfernen]",
  responsibleForContent: "[Vor- und Nachname, Anschrift wie oben]",
  lastUpdated: "2026-10-28",
} as const;

export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE.url : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
