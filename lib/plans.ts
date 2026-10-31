import { buildWhatsAppLink } from "./whatsapp";

/**
 * Single source of truth for all prices on the site. The homepage, /iptv-pakete,
 * the comparison table, the FAQ and the Service JSON-LD all read from here.
 * Prices are total prices in EUR for the whole duration.
 */

export type DurationId = "1m" | "3m" | "6m" | "12m" | "24m";

export const DURATIONS: { id: DurationId; label: string }[] = [
  { id: "1m", label: "1 Monat" },
  { id: "3m", label: "3 Monate" },
  { id: "6m", label: "6 Monate" },
  { id: "12m", label: "1 Jahr" },
  { id: "24m", label: "2 Jahre" },
];

/** The duration highlighted in every device category. */
export const FEATURED_DURATION: DurationId = "12m";

export type DeviceCount = 1 | 2 | 3;

export type DeviceCategory = {
  devices: DeviceCount;
  label: string;
  prices: Record<DurationId, number>;
};

export const deviceCategories: DeviceCategory[] = [
  { devices: 1, label: "1 Gerät", prices: { "1m": 12, "3m": 20, "6m": 30, "12m": 45, "24m": 75 } },
  { devices: 2, label: "2 Geräte", prices: { "1m": 19, "3m": 35, "6m": 50, "12m": 70, "24m": 105 } },
  { devices: 3, label: "3 Geräte", prices: { "1m": 26, "3m": 45, "6m": 70, "12m": 100, "24m": 145 } },
];

/** Short descriptive tag per duration card. Neutral wording only – no popularity or discount claims. */
export const DURATION_TAGS: Record<DurationId, string> = {
  "1m": "Zum Ausprobieren",
  "3m": "Flexibel",
  "6m": "Halbes Jahr",
  "12m": "Empfohlen",
  "24m": "Längste Laufzeit",
};

/** What one package includes. Setup help, support and guides only – no TV channels or access data. */
export function planFeatures(category: DeviceCategory, duration: DurationId): string[] {
  // Non-breaking space/hyphen keep "1 Gerät", "1 Jahr" and "E-Mail" from splitting across lines.
  const keep = (text: string) => text.replace(/ /g, " ");
  return [
    `Einrichtungshilfe für ${keep(category.label)}`,
    `Support für ${keep(durationLabel(duration))} per WhatsApp, Telegram & E‑Mail`,
    "Schritt-für-Schritt-Anleitungen für Ihre Geräte",
  ];
}

/** Benefit badges shown above the plan cards; they apply to every package. */
export const planBenefits: { icon: "bolt" | "chat" | "book"; label: string }[] = [
  { icon: "bolt", label: "Schnelle Einrichtungshilfe" },
  { icon: "chat", label: "Persönlicher Support" },
  { icon: "book", label: "Anleitungen für gängige Geräte" },
];

export const PLAN_SCOPE_NOTE =
  "Die Pakete umfassen ausschließlich Einrichtungshilfe, Support und Anleitungen. TV-Sender, Abonnements oder Zugangsdaten sind nicht enthalten.";

/**
 * Price note required next to consumer prices (PAngV).
 * TODO(owner): if you are a small business under § 19 UStG, change this to
 * "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."
 */
export const PRICE_NOTE = "Gesamtpreis für die gesamte Laufzeit, inkl. gesetzlicher MwSt.";

export function formatPrice(price: number): string {
  return price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
  });
}

export function durationLabel(id: DurationId): string {
  return DURATIONS.find((duration) => duration.id === id)?.label ?? id;
}

export function planWhatsAppLink(category: DeviceCategory, duration: DurationId): string {
  return buildWhatsAppLink(
    `Hallo IPTV Kaufen Direkt Team,\nich interessiere mich für das Paket „${durationLabel(duration)} – ${category.label}“ (${formatPrice(category.prices[duration])}).`
  );
}

/** Lowest price on the site, used for "ab …" texts so they never drift from the price list. */
export const LOWEST_PRICE = Math.min(...deviceCategories.flatMap((category) => Object.values(category.prices)));
