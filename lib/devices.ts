import type { Article } from "./content-types";

export type DeviceIcon = "stick" | "tv" | "box" | "mag" | "receiver" | "phone";

export type Device = Article & {
  name: string;
  shortName: string;
  icon: DeviceIcon;
};

const PUBLISHED = "2026-10-28";

export const devices: Device[] = [
  {
    // The Fire TV guide has its own page (app/geraete/fire-tv-stick/page.tsx, copy in lib/fire-tv-content.ts).
    // This entry only feeds the cards on /anleitungen and /angebote, the sitemap and the page metadata.
    slug: "fire-tv-stick",
    name: "Amazon Fire TV Stick",
    shortName: "Fire TV Stick",
    icon: "stick",
    title: "IPTV auf Fire TV Stick einrichten: vom Appstore bis zur Senderliste",
    seoTitle: "IPTV auf Fire TV Stick einrichten: Player & M3U",
    metaDescription:
      "IPTV auf Fire TV Stick einrichten: passendes Modell, IPTV-Player aus Appstore oder Downloader, M3U und Xtream Codes, WLAN oder LAN und Fehlerhilfe.",
    excerpt:
      "Modellwahl inklusive Vega OS, IPTV-Player aus Appstore oder Downloader, M3U und Xtream Codes sowie Hilfe gegen Puffern und volle Speicher.",
    publishedAt: PUBLISHED,
    updatedAt: "2026-11-02",
    readingTimeMinutes: 15,
    intro: [],
    sections: [],
    faq: [],
  },
  {
    // The Smart TV guide has its own page (app/geraete/smart-tv/page.tsx, copy in lib/smart-tv-content.ts).
    // This entry only feeds the cards on /anleitungen and /angebote, the sitemap and the page metadata.
    slug: "smart-tv",
    name: "Smart TV (Samsung & LG)",
    shortName: "Smart TV",
    icon: "tv",
    title: "IPTV auf Smart TV einrichten: Samsung und LG Schritt für Schritt",
    seoTitle: "IPTV auf Smart TV einrichten: Samsung & LG",
    metaDescription:
      "IPTV auf Smart TV einrichten: Anleitung für Samsung (Tizen) und LG (webOS) – mit App-Auswahl, M3U-Playlist, WLAN oder LAN und Hilfe bei typischen Fehlern.",
    excerpt:
      "Samsung (Tizen) und LG (webOS) Schritt für Schritt: App-Auswahl, M3U-Playlist, Netzwerk und Fehlerhilfe – und wann ein Stick besser ist.",
    publishedAt: PUBLISHED,
    updatedAt: "2026-11-02",
    readingTimeMinutes: 14,
    intro: [],
    sections: [],
    faq: [],
  },
  {
    // The Android TV guide has its own page (app/geraete/android-tv-box/page.tsx, copy in lib/android-tv-content.ts).
    // This entry only feeds the cards on /anleitungen and /angebote, the sitemap and the page metadata.
    slug: "android-tv-box",
    name: "Android-TV- und Google-TV-Boxen",
    shortName: "Android TV Box",
    icon: "box",
    title: "IPTV auf Android TV Box einrichten: Player, Zugang und stabiles Bild",
    seoTitle: "IPTV auf Android TV Box einrichten: Apps & M3U",
    metaDescription:
      "IPTV auf Android TV Box einrichten: zertifizierte Box wählen, IPTV-Player aus dem Play Store, M3U und Xtream Codes, 4K mit LAN und Hilfe bei Fehlern.",
    excerpt:
      "Android TV oder Google TV: Kaufkriterien, Play-Store-Player wie TiviMate und Kodi, M3U und Xtream Codes, 4K per LAN und Lösungen für typische Fehler.",
    publishedAt: PUBLISHED,
    updatedAt: "2026-11-02",
    readingTimeMinutes: 16,
    intro: [],
    sections: [],
    faq: [],
  },
  {
    // The MAG Box guide has its own page (app/geraete/mag-box/page.tsx, copy in lib/mag-content.ts).
    // This entry only feeds the cards on /anleitungen and /angebote, the sitemap and the page metadata.
    slug: "mag-box",
    name: "MAG-Box (Infomir)",
    shortName: "MAG Box",
    icon: "mag",
    title: "IPTV auf MAG Box einrichten: Portal, MAC-Adresse und Senderliste",
    seoTitle: "IPTV auf MAG Box einrichten: Portal & MAC-Adresse",
    metaDescription:
      "IPTV auf MAG Box einrichten: Portal-URL und MAC-Adresse erklärt, 7 Schritte für MAG 254, 322, 420 und 520, Netzwerk-Tipps und Hilfe bei Fehlern.",
    excerpt:
      "Portal-Prinzip, MAC-Adresse und Portal-URL verständlich erklärt: sieben Schritte, MAG-Modelle im Vergleich und Lösungen für typische Portal-Fehler.",
    publishedAt: PUBLISHED,
    updatedAt: "2026-11-02",
    readingTimeMinutes: 16,
    intro: [],
    sections: [],
    faq: [],
  },
  {
    // The Enigma2 guide has its own page (app/geraete/enigma2-receiver/page.tsx, copy in lib/enigma2-content.ts).
    // This entry only feeds the cards on /anleitungen and /angebote, the sitemap and the page metadata.
    slug: "enigma2-receiver",
    name: "Enigma2-Receiver (VU+, Dreambox, Zgemma, GigaBlue)",
    shortName: "Enigma2 Receiver",
    icon: "receiver",
    title: "IPTV auf Enigma2 Receiver einrichten: Bouquets, Plugins und Senderliste",
    seoTitle: "IPTV auf Enigma2 Receiver einrichten: Bouquet & M3U",
    metaDescription:
      "IPTV auf Enigma2 Receiver einrichten: VU+, Dreambox, Zgemma und GigaBlue, OpenATV, OpenPLi und VTi, M3U oder Xtream als Bouquet und Hilfe bei Fehlern.",
    excerpt:
      "VU+, Dreambox, Zgemma und GigaBlue: Images im Vergleich, vier Wege mit Plugin, M3U-Bouquet oder Xtream Codes, EPG und Lösungen für schwarze Sender.",
    publishedAt: PUBLISHED,
    updatedAt: "2026-11-02",
    readingTimeMinutes: 17,
    intro: [],
    sections: [],
    faq: [],
  },
];

export function getDevice(slug: string): Device | undefined {
  return devices.find((device) => device.slug === slug);
}
