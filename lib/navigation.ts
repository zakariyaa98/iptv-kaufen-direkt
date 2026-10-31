export type NavLink = { href: string; label: string };

export const mainNav: NavLink[] = [
  { href: "/iptv-pakete", label: "Pakete" },
  { href: "/angebote", label: "Angebote" },
  { href: "/geraete", label: "Geräte" },
  { href: "/anleitungen", label: "Anleitungen" },
  { href: "/iptv-legal", label: "IPTV legal" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export const legalNav: NavLink[] = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
  { href: "/widerruf", label: "Widerrufsbelehrung" },
];
