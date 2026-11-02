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
    slug: "mag-box",
    name: "MAG-Box (Infomir)",
    shortName: "MAG Box",
    icon: "mag",
    title: "IPTV auf der MAG-Box einrichten",
    seoTitle: "MAG Box IPTV einrichten – Portal, MAC-Adresse & Fehlerhilfe",
    metaDescription:
      "So richten Sie IPTV auf einer MAG-Box von Infomir ein: Portal-Adresse eintragen, MAC-Adresse finden, Firmware aktualisieren und typische Fehler beheben.",
    excerpt:
      "MAG-Boxen arbeiten mit einem Portal statt mit Apps. So tragen Sie das Portal ein und lösen häufige Fehler.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 5,
    intro: [
      "MAG-Boxen des Herstellers Infomir sind reine IPTV-Empfänger. Statt einzelner Apps verbinden sie sich mit einem sogenannten Portal, das Ihr IPTV-Anbieter bereitstellt.",
      "Die Box wird dabei über ihre MAC-Adresse erkannt. Diese Adresse müssen Sie Ihrem Anbieter mitteilen, bevor das Portal funktioniert.",
    ],
    summary: [
      "Für eine MAG-Box brauchen Sie eine Portal-Adresse Ihres Anbieters.",
      "Die MAC-Adresse steht auf dem Aufkleber an der Unterseite der Box.",
      "Das Portal tragen Sie unter Einstellungen › Systemeinstellungen › Server › Portale ein.",
    ],
    sections: [
      {
        heading: "Vorbereitung",
        list: [
          "Schließen Sie die Box per HDMI an den Fernseher und nach Möglichkeit per LAN-Kabel an den Router an.",
          "Notieren Sie die MAC-Adresse vom Aufkleber der Box. Sie beginnt meist mit 00:1A:79.",
          "Teilen Sie die MAC-Adresse Ihrem Anbieter mit und lassen Sie sich die Portal-Adresse geben.",
        ],
      },
      {
        heading: "Portal eintragen",
        steps: [
          "Schalten Sie die Box ein und öffnen Sie die Einstellungen (Zahnrad-Symbol oder Taste SET).",
          "Wählen Sie Systemeinstellungen › Server › Portale.",
          "Tragen Sie bei „Portal 1 Name“ eine beliebige Bezeichnung ein.",
          "Tragen Sie bei „Portal 1 URL“ die Adresse Ihres Anbieters exakt ein, einschließlich http:// und abschließendem Schrägstrich, falls angegeben.",
          "Speichern Sie mit OK und starten Sie die Box über das Menü neu.",
        ],
      },
      {
        heading: "Typische Fehlermeldungen",
        table: {
          headers: ["Meldung", "Mögliche Ursache", "Lösung"],
          rows: [
            ["Authentifizierung fehlgeschlagen", "MAC-Adresse beim Anbieter nicht freigeschaltet", "MAC-Adresse prüfen und beim Anbieter bestätigen lassen"],
            ["Portal nicht erreichbar", "Tippfehler in der URL oder Server gestört", "URL Zeichen für Zeichen prüfen, später erneut versuchen"],
            ["Endlos-Ladebildschirm", "Veraltete Firmware oder Netzwerkproblem", "Box neu starten, Firmware aktualisieren, LAN statt WLAN"],
            ["Kein Bild bei einzelnen Sendern", "Sender beim Anbieter gestört", "Anderen Sender testen und Anbieter informieren"],
          ],
          caption: "Die genaue Formulierung der Meldungen kann je nach Firmware-Version abweichen.",
        },
      },
      {
        heading: "Firmware aktuell halten",
        body: [
          "Infomir veröffentlicht für viele Modelle Firmware-Updates. Sie finden die Funktion meist unter Einstellungen › Software-Update. Ein Update behebt häufig Probleme mit Ladezeiten und Portalen.",
        ],
        note: "Unterbrechen Sie während eines Firmware-Updates niemals die Stromzufuhr. Das kann die Box dauerhaft beschädigen.",
      },
    ],
    faq: [
      {
        question: "Kann ich auf einer MAG-Box Apps wie Netflix installieren?",
        answer:
          "Nur sehr eingeschränkt. MAG-Boxen sind auf IPTV-Portale ausgelegt. Wenn Sie viele Streaming-Apps nutzen möchten, ist ein Android-TV-Gerät oder ein Fire TV Stick besser geeignet.",
      },
      {
        question: "Kann ich mehrere Portale speichern?",
        answer:
          "Ja. Die meisten MAG-Modelle erlauben mehrere Portaleinträge. Beim Start wählen Sie dann, welches Portal geladen wird.",
      },
    ],
    related: [
      { href: "/anleitungen/iptv-ruckelt-loesungen", label: "IPTV ruckelt – Ursachen und Lösungen" },
      { href: "/anleitungen/iptv-anbieter-erkennen", label: "Seriöse IPTV-Anbieter erkennen" },
      { href: "/geraete/enigma2-receiver", label: "IPTV auf Enigma2-Receivern" },
    ],
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
