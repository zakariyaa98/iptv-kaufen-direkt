import type { BlogCategorySlug } from "./types";

export type BlogCategoryIcon = "apps" | "setup" | "devices" | "fix" | "basics" | "news";

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  /** Short line for cards on /blog. */
  description: string;
  /** Intro paragraph on the category page. */
  intro: string;
  /** Topics the category covers – shown as tags. */
  topics: string[];
  icon: BlogCategoryIcon;
  /** Existing pages that belong to this topic, shown on the category page. Only real routes. */
  guides: { href: string; label: string }[];
};

/** The six blog categories in display order. */
export const blogCategories: BlogCategory[] = [
  {
    slug: "iptv-apps",
    name: "IPTV Apps",
    description: "Player-Apps verstehen: Funktionen, Einstellungen und was eine gute IPTV-App ausmacht.",
    intro:
      "Hier geht es um die Software, mit der Sie IPTV abspielen: offizielle Apps von TV-Diensten und IPTV-Player für M3U-Playlists und Xtream Codes. Wir erklären Funktionen wie EPG, Catch-up oder Aufnahmen und zeigen, welche Einstellungen im Alltag wirklich etwas bringen.",
    topics: ["IPTV-Player", "Catch-up & Timeshift", "EPG in Apps", "Player-Einstellungen", "Offizielle Store-Apps"],
    icon: "apps",
    guides: [
      { href: "/anleitungen#apps", label: "IPTV-Apps im Vergleich" },
      { href: "/anleitungen/epg-einrichten", label: "EPG für IPTV einrichten" },
    ],
  },
  {
    slug: "iptv-einrichtung",
    name: "IPTV Einrichtung & Installation",
    description: "Schritt für Schritt einrichten: Zugangsdaten, mehrere Geräte und eine saubere Konfiguration.",
    intro:
      "Artikel rund um die Einrichtung: von der Installation einer App aus dem offiziellen Store über das Eintragen von M3U- oder Xtream-Codes-Daten bis zur Nutzung auf mehreren Geräten im Haushalt.",
    topics: ["M3U-Playlist", "Xtream Codes", "EPG einrichten", "Mehrere Geräte", "Konfiguration"],
    icon: "setup",
    guides: [
      { href: "/anleitungen", label: "IPTV einrichten: alle Anleitungen" },
      { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist, Xtream Codes und Portal erklärt" },
    ],
  },
  {
    slug: "iptv-geraete",
    name: "IPTV Geräte",
    description: "Smart TV, Fire TV Stick, Android TV, MAG-Box und Enigma2 – Stärken, Grenzen und Kaufkriterien.",
    intro:
      "Welches Gerät passt zu Ihnen, und worauf kommt es bei Hardware wirklich an? In dieser Kategorie finden Sie Beiträge zu Smart TVs von Samsung und LG, Android TV und Google TV, dem Amazon Fire TV Stick, Android-TV-Boxen, MAG-Boxen und Enigma2-Receivern wie VU+, Dreambox, Zgemma und GigaBlue.",
    topics: [
      "Samsung & LG Smart TV",
      "Android TV & Google TV",
      "Fire TV Stick",
      "Android-TV-Box",
      "MAG-Box",
      "Enigma2: VU+, Dreambox, Zgemma, GigaBlue",
    ],
    icon: "devices",
    guides: [
      { href: "/geraete/smart-tv", label: "IPTV auf dem Smart TV einrichten" },
      { href: "/geraete/fire-tv-stick", label: "IPTV auf dem Fire TV Stick einrichten" },
      { href: "/geraete/android-tv-box", label: "IPTV auf Android TV und Google TV" },
      { href: "/geraete/mag-box", label: "IPTV auf der MAG-Box einrichten" },
      { href: "/geraete/enigma2-receiver", label: "IPTV auf Enigma2-Receivern einrichten" },
    ],
  },
  {
    slug: "iptv-fehlerbehebung",
    name: "IPTV Fehlerbehebung",
    description: "Schwarzes Bild, kein Ton, Puffern oder Anmeldefehler – Ursachen finden und gezielt beheben.",
    intro:
      "Wenn etwas nicht läuft, hilft systematisches Eingrenzen mehr als wahlloses Ausprobieren. Hier erklären wir typische Fehlerbilder, ihre häufigsten Ursachen und die Schritte, mit denen Sie Gerät, Heimnetz, App und Anbieter als Ursache unterscheiden.",
    topics: ["Schwarzes Bild", "Kein Ton", "Buffering", "Verbindungsfehler", "Anmeldefehler"],
    icon: "fix",
    guides: [
      { href: "/anleitungen/iptv-ruckelt-loesungen", label: "IPTV ruckelt oder friert ein: Lösungen" },
      { href: "/anleitungen#fehler", label: "Häufige Konfigurationsfehler" },
    ],
  },
  {
    slug: "iptv-grundlagen",
    name: "IPTV Grundlagen & Informationen",
    description: "Technik verständlich erklärt: Streaming, Formate, Kompatibilität und rechtliche Einordnung.",
    intro:
      "Grundlagenwissen ohne Fachchinesisch: wie IPTV technisch funktioniert, welche Formate und Standards eine Rolle spielen und woran Sie legale Angebote erkennen.",
    topics: ["Wie IPTV funktioniert", "Formate & Codecs", "Internetgeschwindigkeit", "Kompatibilität", "Rechtliches"],
    icon: "basics",
    guides: [
      { href: "/iptv-legal", label: "IPTV legal in Deutschland" },
      { href: "/anleitungen/internetgeschwindigkeit-iptv", label: "Welche Internetgeschwindigkeit braucht IPTV?" },
      { href: "/anleitungen/iptv-anbieter-erkennen", label: "Seriöse IPTV-Anbieter erkennen" },
    ],
  },
  {
    slug: "news-updates",
    name: "News & Updates",
    description: "Neuigkeiten zu Geräten, Betriebssystemen und Apps, die für IPTV-Nutzer relevant sind.",
    intro:
      "Kurze, sachliche Meldungen zu Änderungen, die Ihre IPTV-Nutzung betreffen können – etwa neue Gerätegenerationen, Betriebssystem-Updates oder geänderte App-Verfügbarkeit.",
    topics: ["Neue Geräte", "System-Updates", "App-Verfügbarkeit"],
    icon: "news",
    guides: [{ href: "/anleitungen", label: "Alle Anleitungen im Überblick" }],
  },
];

export function getCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export function categoryPath(slug: BlogCategorySlug): string {
  return `/blog/kategorie/${slug}`;
}
