import type { StaticImageData } from "next/image";
import fireTvImage from "@/public/images/home page/Geräten/iptv kaufen Amazon firetv stick.webp";
import androidMobileImage from "@/public/images/home page/Geräten/iptv kaufen andoird smartphone.webp";
import googleTvImage from "@/public/images/home page/Geräten/iptv kaufen google tv.webp";
import magImage from "@/public/images/home page/Geräten/iptv kaufen MAG.webp";
import smartTvImage from "@/public/images/home page/Geräten/iptv kaufen SMART TV LG.webp";
import enigma2Image from "@/public/images/home page/Geräten/iptv kaufen vu+.webp";
import whySetupImage from "@/public/images/home page/Warum IPTV Kaufen Direkt/1. Persönliche Einrichtungshilfe.webp";
import whyPricesImage from "@/public/images/home page/Warum IPTV Kaufen Direkt/2. Transparente Gesamtpreise.webp";
import whyChannelsImage from "@/public/images/home page/Warum IPTV Kaufen Direkt/3. Erreichbar auf Ihren Kanälen.webp";
import whyLegalImage from "@/public/images/home page/Warum IPTV Kaufen Direkt/4. Klare Haltung zur Legalität.webp";
import whyGuidesImage from "@/public/images/home page/Warum IPTV Kaufen Direkt/5. Anleitungen auf Deutsch.webp";
import whyDevicesImage from "@/public/images/home page/Warum IPTV Kaufen Direkt/6. Für mehrere Geräte.webp";
import featureLiveImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/1.webp";
import featureEpgImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/2.webp";
import featureReplayImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/3.webp";
import featureCloudImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/4.webp";
import featureMultiImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/5.webp";
import featureQualityImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/6.webp";
import featurePinImage from "@/public/images/home page/Welche Funktionen bietet ein moderner IPTV-Dienst/7.webp";
import providerImprintImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 3.webp";
import providerRightsImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 2.webp";
import providerPricesImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 1.webp";
import providerSupportImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 5.webp";
import providerDevicesImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 7.webp";
import providerPrivacyImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 6.webp";
import providerTermsImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 4.webp";
import type { DeviceIcon } from "./devices";
import type { FaqItem } from "./faq-data";
import { LOWEST_PRICE, formatPrice } from "./plans";

/**
 * Homepage copy. Kept out of app/page.tsx so the page only handles layout.
 * Scope rule: we sell setup help, support and guides – never channels, subscriptions or access data.
 */

export const HOME_SEO = {
  title: "IPTV kaufen in Deutschland | Angebote & Preise – IPTV Kaufen Direkt",
  description:
    "IPTV kaufen in Deutschland: transparente Preise für Einrichtungshilfe und Support, kompatible Geräte, Anleitungen und Kriterien für seriöse IPTV-Anbieter.",
};

export const heroTrustPoints = [
  `Gesamtpreise ab ${formatPrice(LOWEST_PRICE)}`,
  "Support per WhatsApp, Telegram & E-Mail",
  "Nur legale Lösungen – keine Senderpakete",
];

export const introParagraphs = [
  "IPTV steht für Internet Protocol Television. Gemeint ist Fernsehen, das nicht über Satellit, Kabel oder Antenne zu Ihnen kommt, sondern als Datenstrom über Ihren Internetanschluss. Für Sie als Zuschauer fühlt sich das an wie gewohntes Fernsehen: Sie wählen einen Sender, sehen das laufende Programm und können – je nach Dienst – Sendungen neu starten oder später abrufen.",
  "Viele Menschen in Deutschland nutzen IPTV längst, ohne es so zu nennen. Die Fernsehpakete von Internetanbietern, TV-Streaming-Dienste mit eigener App und die Livestreams in den Mediatheken der Sender beruhen auf derselben Grundtechnik. Eine Satellitenschüssel oder Kabeldose brauchen Sie dafür nicht. Entscheidend sind ein stabiler Internetanschluss und ein Gerät, auf dem die passende App läuft.",
  "Wer IPTV kaufen möchte, steht trotzdem vor vielen Fragen: Welcher Dienst bietet die gewünschten Sender? Läuft die App auf dem eigenen Fernseher? Reicht die Leitung für HD oder 4K? Und ist das Angebot überhaupt legal? Auf dieser Seite finden Sie die Antworten – kompakt, ehrlich und ohne Fachchinesisch.",
];

export const introChecklist = [
  {
    title: "Welche Inhalte möchten Sie sehen?",
    text: "Senderauswahl, Sport, Serien oder Mediatheken: Den Umfang legt allein der jeweilige Anbieter fest. Vergleichen Sie direkt auf dessen Website, welches Paket zu Ihren Wünschen passt.",
  },
  {
    title: "Welche Geräte nutzen Sie?",
    text: "Nicht jede App gibt es für jedes Gerät. Prüfen Sie vorab, ob Ihr Smart TV, Ihr Fire TV Stick oder Ihr Receiver vom gewünschten Dienst unterstützt wird.",
  },
  {
    title: "Wie stabil ist Ihre Verbindung?",
    text: "Für ruckelfreies Bild zählt weniger die maximale Geschwindigkeit als eine gleichmäßige Verbindung – besonders im WLAN.",
  },
];

export const whyUsBenefits: { title: string; text: string; image: StaticImageData; imageAlt: string; imageBg: string }[] = [
  {
    title: "Persönliche Einrichtungshilfe",
    text: "Wir führen Sie Schritt für Schritt per Chat, Sprachnachricht oder Videoanruf durch die Einrichtung. Eine Fernwartung erfolgt nur mit Ihrer ausdrücklichen Zustimmung.",
    image: whySetupImage,
    imageAlt: "Headset mit Schraubenschlüssel als Symbol für persönliche IPTV-Einrichtungshilfe per Chat, Sprachnachricht oder Videoanruf",
    // Matches the image's own background so the frame has no visible seam.
    imageBg: "#fdfdfd",
  },
  {
    title: "Transparente Gesamtpreise",
    text: "Sie sehen vorab, was ein Paket für die gesamte Laufzeit kostet. Ohne Lockpreise, ohne durchgestrichene Fantasiepreise.",
    image: whyPricesImage,
    imageAlt: "Preisschild mit Häkchen und der Aufschrift „Transparente Gesamtpreise“ für faire IPTV-Paketpreise ohne Lockangebote",
    imageBg: "#ffffff",
  },
  {
    title: "Erreichbar auf Ihren Kanälen",
    text: "Schreiben Sie uns per WhatsApp, Telegram oder E-Mail. Wir bemühen uns, Anfragen noch am selben Tag zu beantworten.",
    image: whyChannelsImage,
    imageAlt: "WhatsApp- und Telegram-Symbol mit dem Hinweis „Erreichbar auf Ihren Kanälen“ für schnellen IPTV-Support",
    imageBg: "#f7f7f7",
  },
  {
    title: "Klare Haltung zur Legalität",
    text: "Wir verkaufen weder Senderpakete noch Zugangsdaten. Wir helfen ausschließlich bei legalen Lösungen und sagen offen, wenn ein Angebot problematisch ist.",
    image: whyLegalImage,
    imageAlt: "Schutzschild mit Waage und Häkchen als Symbol für legale IPTV-Lösungen in Deutschland",
    imageBg: "#fdfdfd",
  },
  {
    title: "Anleitungen auf Deutsch",
    text: "Für Fire TV, Smart TV, Android TV, MAG-Boxen und Enigma2-Receiver gibt es ausführliche Anleitungen – kostenlos und verständlich erklärt.",
    image: whyGuidesImage,
    imageAlt: "Aufgeschlagenes Handbuch mit Play-Symbol in Deutschlandfarben für IPTV-Anleitungen auf Deutsch",
    imageBg: "#fdfdfd",
  },
  {
    title: "Für mehrere Geräte",
    text: "Wohnzimmer, Schlafzimmer, Kinderzimmer: Unsere Pakete decken die Einrichtung auf einem, zwei oder drei Geräten ab.",
    image: whyDevicesImage,
    imageAlt: "Monitor, Tablet, Laptop und Smartphone als Symbol für die IPTV-Einrichtung auf mehreren Geräten",
    imageBg: "#fefefe",
  },
];

export const pricingExplainer = [
  "Die Anzahl der Geräte richtet sich danach, auf wie vielen Fernsehern, Sticks oder Receivern wir Sie bei der Einrichtung unterstützen. Die Laufzeit bestimmt, wie lange Sie bei Fragen und Problemen unseren Support nutzen können.",
  "Wichtig: Unsere Pakete enthalten keine TV-Sender, Abonnements oder Zugangsdaten. Den eigentlichen TV-Dienst schließen Sie direkt bei einem lizenzierten Anbieter ab – wir sorgen dafür, dass er auf Ihren Geräten zuverlässig läuft.",
];

export const iptvFeatures: {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  /** Matches the image's own background so the frame has no visible seam. */
  imageBg: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    title: "Live-TV und Senderliste",
    text: "Das laufende Programm wie beim klassischen Fernsehen. Eine gut sortierte Senderliste mit Favoriten macht das Umschalten schnell und bequem.",
    image: featureLiveImage,
    imageAlt: "IPTV-Symbol mit Live-Fernseher und Senderliste mit ARD, ZDF und RTL",
    imageBg: "#fefefe",
  },
  {
    title: "Elektronische Programmzeitschrift (EPG)",
    text: "Der EPG zeigt, was gerade läuft und was als Nächstes kommt. Bei Player-Apps muss er oft separat eingebunden werden.",
    image: featureEpgImage,
    imageAlt: "Kalender mit Programmliste als Symbol für die elektronische Programmzeitschrift (EPG) bei IPTV",
    imageBg: "#fefefe",
    href: "/anleitungen/epg-einrichten",
    linkLabel: "EPG einrichten",
  },
  {
    title: "Zeitversetztes Fernsehen und Replay",
    text: "Viele Dienste erlauben, eine Sendung zu pausieren, neu zu starten oder verpasste Sendungen nachträglich abzurufen – sofern die Senderrechte das zulassen.",
    image: featureReplayImage,
    imageAlt: "Uhr mit Zurückspulen- und Play-Taste als Symbol für zeitversetztes Fernsehen und Replay",
    imageBg: "#fefefe",
  },
  {
    title: "Aufnahmen in der Cloud",
    text: "Statt einer Festplatte nutzen einige Anbieter einen Online-Rekorder. Umfang und Speicherdauer unterscheiden sich je nach Tarif deutlich.",
    image: featureCloudImage,
    imageAlt: "Wolke mit rotem Aufnahmeknopf als Symbol für IPTV-Aufnahmen im Cloud-Rekorder",
    imageBg: "#f9f9f9",
  },
  {
    title: "Nutzung auf mehreren Geräten",
    text: "Fernseher, Tablet und Smartphone mit einem Konto: Wie viele Streams gleichzeitig laufen dürfen, regelt der Vertrag mit dem Anbieter.",
    image: featureMultiImage,
    imageAlt: "Fernseher, Tablet, Smartphone und Laptop verbunden als Symbol für IPTV auf mehreren Geräten",
    imageBg: "#fefefe",
  },
  {
    title: "HD- und 4K-Bildqualität",
    text: "Ob ein Sender in HD oder 4K verfügbar ist, hängt vom Dienst, vom Tarif und von Ihrer Internetverbindung ab.",
    image: featureQualityImage,
    imageAlt: "Bildschirm mit HD-Kennzeichnung und goldenem 4K-UHD-Symbol für IPTV in HD- und 4K-Bildqualität",
    imageBg: "#fefefe",
  },
  {
    title: "Jugendschutz und PIN",
    text: "Eine PIN-Sperre schützt bestimmte Inhalte oder Einkäufe. Gerade in Familien lohnt es sich, diese Funktion von Anfang an einzurichten.",
    image: featurePinImage,
    imageAlt: "Schutzschild mit Kind, Schloss und PIN-Feld als Symbol für Jugendschutz und PIN-Sperre bei IPTV",
    imageBg: "#fefefe",
  },
];

export type HomeDevice = {
  name: string;
  icon: DeviceIcon;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  /** Set once the device page exists; cards without href render as "Anleitung folgt". */
  href?: string;
};

export const homeDevices: HomeDevice[] = [
  {
    name: "Smart TV",
    icon: "tv",
    text: "Samsung (Tizen), LG (webOS) und weitere Smart TVs: Viele Dienste bieten eine App direkt im Store des Fernsehers – ganz ohne Zusatzgerät.",
    href: "/geraete/smart-tv",
    image: smartTvImage,
    imageAlt: "Großer Smart TV mit IPTV-Senderübersicht und Streaming-Apps an der Wand eines modernen Wohnzimmers",
  },
  {
    name: "Amazon Fire TV",
    icon: "stick",
    text: "Der Fire TV Stick ist günstig, wird einfach in den HDMI-Anschluss gesteckt und unterstützt viele offizielle Apps und IPTV-Player.",
    href: "/geraete/fire-tv-stick",
    image: fireTvImage,
    imageAlt: "Amazon Fire TV Stick 4K mit HDMI-Anschluss und Alexa-Sprachfernbedienung für IPTV",
  },
  {
    name: "Android TV & Google TV",
    icon: "box",
    text: "Boxen und Fernseher mit Android TV oder Google TV greifen auf den Google Play Store zu und bieten damit eine große App-Auswahl.",
    href: "/geraete/android-tv-box",
    image: googleTvImage,
    imageAlt: "Fernseher mit Google-TV-Oberfläche und IPTV-Player-Apps, darunter eine Android-TV-Box mit Fernbedienung",
  },
  {
    name: "Android-Smartphone & Tablet",
    icon: "phone",
    text: "Ideal für unterwegs oder als zweiter Bildschirm. Die meisten Dienste bieten Apps für Android-Smartphones und -Tablets an.",
    // TODO(owner): add href once /geraete/android exists.
    image: androidMobileImage,
    imageAlt: "Android-Smartphone und Tablet mit geöffneter IPTV-Player-App und Live-Senderliste",
  },
  {
    name: "Enigma2-Receiver",
    icon: "receiver",
    text: "VU+, Dreambox, Zgemma oder GigaBlue: Linux-Receiver mit Enigma2 binden IPTV per Bouquet oder Plugin ein – ideal für Technikbegeisterte.",
    href: "/geraete/enigma2-receiver",
    image: enigma2Image,
    imageAlt: "Enigma2-Receiver VU+ Uno 4K SE mit Display für IPTV per Bouquet oder Plugin",
  },
  {
    name: "MAG-Box",
    icon: "mag",
    text: "MAG-Boxen sind speziell für IPTV gebaut und werden über ein Portal mit dem Dienst verbunden. Die Bedienung ähnelt einem klassischen Receiver.",
    href: "/geraete/mag-box",
    image: magImage,
    imageAlt: "IPTV-Box MAG 524 mit leuchtendem Ring und passender Fernbedienung",
  },
];

export const installSteps = [
  {
    title: "Legalen Dienst auswählen",
    text: "Entscheiden Sie sich für einen lizenzierten Anbieter, dessen Sender und Funktionen zu Ihnen passen, und legen Sie dort ein Kundenkonto an.",
  },
  {
    title: "Gerät vorbereiten",
    text: "Installieren Sie verfügbare Updates, prüfen Sie den freien Speicher und verbinden Sie das Gerät möglichst per LAN-Kabel mit dem Router.",
  },
  {
    title: "App installieren",
    text: "Laden Sie die offizielle App des Dienstes aus dem Store Ihres Geräts. Für eine eigene M3U-Playlist benötigen Sie stattdessen eine IPTV-Player-App.",
  },
  {
    title: "Anmelden oder Playlist einbinden",
    text: "Melden Sie sich mit Ihren Kontodaten an oder hinterlegen Sie die M3U-Adresse bzw. die Xtream-Codes-Daten, falls Ihr Anbieter dieses Format nutzt.",
  },
  {
    title: "EPG, Favoriten und Bild einstellen",
    text: "Binden Sie die Programmzeitschrift ein, legen Sie Favoriten an und testen Sie mehrere Sender, bevor Sie alles als erledigt abhaken.",
  },
];

export const installGuideLinks = [
  { href: "/geraete/fire-tv-stick", label: "IPTV auf dem Fire TV Stick einrichten" },
  { href: "/geraete/smart-tv", label: "IPTV auf dem Smart TV einrichten" },
  { href: "/geraete/android-tv-box", label: "IPTV auf Android TV einrichten" },
  { href: "/geraete/enigma2-receiver", label: "IPTV auf Enigma2-Receivern einrichten" },
  { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist und Xtream Codes erklärt" },
  { href: "/anleitungen/iptv-ruckelt-loesungen", label: "IPTV ruckelt – Ursachen und Lösungen" },
];

export const providerCriteria: {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  /** Matches the image's own background so the frame has no visible seam. */
  imageBg: string;
}[] = [
  {
    title: "Vollständiges Impressum",
    text: "Ein seriöser Anbieter nennt Firmennamen, ladungsfähige Anschrift und Kontaktdaten. Fehlt das Impressum oder ist es lückenhaft, sollten Sie misstrauisch werden.",
    image: providerImprintImage,
    imageAlt: "Dokument mit der Aufschrift „Vollständiges Impressum“, Anschrift und Geschäftsführung als Merkmal eines seriösen IPTV-Anbieters",
    imageBg: "#fefefe",
  },
  {
    title: "Rechte an den Inhalten",
    text: "Wer Fernsehsender weiterverbreitet, braucht die Rechte der Sender und Rechteinhaber. Lizenzierte Dienste nennen ihre Senderpartner offen.",
    image: providerRightsImage,
    imageAlt: "Urkunde „Klare Lizenzrechte“ mit Siegel als Symbol für lizenzierte Senderrechte beim IPTV-Anbieter",
    imageBg: "#fefefe",
  },
  {
    title: "Klare Preise",
    text: "Sie sollten vor dem Kauf genau erkennen, was Sie insgesamt zahlen – inklusive Laufzeit und eventueller Zusatzkosten.",
    image: providerPricesImage,
    imageAlt: "Preisschild „Transparente Preise“ mit Euro-Zeichen und Häkchen für klare IPTV-Preise ohne versteckte Kosten",
    imageBg: "#fdfdfd",
  },
  {
    title: "Erreichbarer Kundensupport",
    text: "Ein funktionierender Support ist Pflicht. Achten Sie darauf, über welche Wege und zu welchen Zeiten der Anbieter erreichbar ist.",
    image: providerSupportImage,
    imageAlt: "Headset mit 24/7-Hinweis als Symbol für einen erreichbaren Kundenservice beim IPTV-Anbieter",
    imageBg: "#fefefe",
  },
  {
    title: "Offene Angaben zur Gerätekompatibilität",
    text: "Seriöse Dienste listen auf, auf welchen Geräten ihre App läuft. Viele bieten außerdem einen kostenlosen Testzeitraum an.",
    image: providerDevicesImage,
    imageAlt: "Fernseher, Tablet und Smartphone mit der Aufschrift „Kompatible Geräte“ für IPTV-Gerätekompatibilität",
    imageBg: "#fefefe",
  },
  {
    title: "Datenschutz",
    text: "Eine verständliche Datenschutzerklärung nach DSGVO und Zahlungswege mit Käuferschutz sind ein gutes Zeichen.",
    image: providerPrivacyImage,
    imageAlt: "Schutzschild mit Schloss und Häkchen als Symbol für Datenschutz und Sicherheit nach DSGVO",
    imageBg: "#fcfcfc",
  },
  {
    title: "Transparente Vertragsbedingungen",
    text: "Laufzeit, Verlängerung, Kündigung und Widerrufsrecht sollten in den AGB klar geregelt und leicht auffindbar sein.",
    image: providerTermsImage,
    imageAlt: "Handschlag über einem Dokument „Faire Vertragsbedingungen“ als Symbol für transparente IPTV-Verträge",
    imageBg: "#fcfcfc",
  },
];

export const providerWarningSigns = [
  "Tausende Sender inklusive Pay-TV zu einem Bruchteil der üblichen Preise",
  "Kein oder ein unvollständiges Impressum",
  "Zahlung nur per Kryptowährung oder Gutscheinkarte",
  "Keine AGB und keine Datenschutzerklärung",
];

export type SpeedTier = {
  label: string;
  resolution: string;
  perStream: string;
  /** Upper end of the per-stream range in Mbit/s, used to size the comparison bar. */
  maxMbit: number;
  connection: string;
  idealFor: string;
};

export const speedTiers: SpeedTier[] = [
  {
    label: "SD",
    resolution: "480p / 576p",
    perStream: "3–5 Mbit/s",
    maxMbit: 5,
    connection: "ab 16 Mbit/s",
    idealFor: "Smartphones, kleine Bildschirme und langsame Leitungen",
  },
  {
    label: "HD",
    resolution: "720p",
    perStream: "5–8 Mbit/s",
    maxMbit: 8,
    connection: "ab 25 Mbit/s",
    idealFor: "Tablets, Laptops und kleinere Fernseher",
  },
  {
    label: "Full HD",
    resolution: "1080p",
    perStream: "8–10 Mbit/s",
    maxMbit: 10,
    connection: "ab 50 Mbit/s",
    idealFor: "Der Standard für die meisten Fernseher",
  },
  {
    label: "4K / UHD",
    resolution: "2160p",
    perStream: "20–25 Mbit/s",
    maxMbit: 25,
    connection: "ab 100 Mbit/s",
    idealFor: "Große 4K-Fernseher, Filme und Sport in bester Qualität",
  },
];

export const speedTiersNote =
  "Richtwerte pro Stream. Der tatsächliche Bedarf hängt vom Anbieter und von der Komprimierung ab. Der empfohlene Anschluss enthält Reserve für weitere Geräte im Haushalt.";

export const speedQuickFacts = [
  {
    title: "Die Bildqualität bestimmt den Bedarf",
    text: "Für Full HD reichen pro Gerät rund 10 Mbit/s, für 4K sollten es etwa 25 Mbit/s sein.",
  },
  {
    title: "Mehrere Geräte addieren sich",
    text: "Laufen zwei Fernseher gleichzeitig, brauchen Sie die Bandbreite für beide Streams – plus etwas Reserve.",
  },
  {
    title: "Stabilität zählt genauso viel",
    text: "Ruckelt das Bild, liegt es oft nicht am Tarif, sondern an einer schwankenden Verbindung im Heimnetz.",
  },
];

export const speedStability = {
  title: "Stabilität ist genauso wichtig wie Geschwindigkeit",
  paragraphs: [
    "Die Mbit/s-Angabe Ihres Tarifs ist ein Höchstwert. Für ruckelfreies Fernsehen kommt es darauf an, dass die Daten gleichmäßig ankommen – ohne Einbrüche und Aussetzer.",
    "Ein 100-Mbit/s-Anschluss nützt wenig, wenn das WLAN im Wohnzimmer nur 15 Mbit/s schafft oder ständig schwankt. Dann hilft auch ein schnellerer Tarif nicht weiter.",
  ],
  tip: "Messen Sie die Geschwindigkeit direkt am Fernseher oder Stick – zum Beispiel mit der Breitbandmessung der Bundesnetzagentur – und halten Sie die Firmware von Router und Gerät aktuell.",
};

export type SpeedConnection = {
  icon: "lan" | "wifi" | "devices";
  title: string;
  badge: string;
  text: string;
};

export const speedConnections: SpeedConnection[] = [
  {
    icon: "lan",
    title: "LAN-Kabel (Ethernet)",
    badge: "Am stabilsten",
    text: "Ein Netzwerkkabel zwischen Router und Fernseher oder Receiver liefert gleichbleibende Werte ohne Funkstörungen. Wo kein Kabel möglich ist, helfen Powerline-Adapter über die Stromleitung.",
  },
  {
    icon: "wifi",
    title: "WLAN",
    badge: "Bequem, aber störanfälliger",
    text: "Wände, Entfernung und Nachbarnetze bremsen das Signal. Nutzen Sie das 5-GHz-Band, stellen Sie den Router möglichst frei auf oder erweitern Sie Ihr Netz mit einem Mesh-System.",
  },
  {
    icon: "devices",
    title: "Mehrere Geräte gleichzeitig",
    badge: "Bandbreite wird geteilt",
    text: "Alle Geräte im Haushalt teilen sich denselben Anschluss. Zählen Sie die Werte aller gleichzeitig laufenden Streams zusammen und planen Sie Reserve für Smartphones, Downloads und Videoanrufe ein.",
  },
];

export const speedExample = {
  title: "Rechenbeispiel für einen Familienhaushalt",
  segments: [
    { label: "4K-Stream im Wohnzimmer", mbit: 25 },
    { label: "Full-HD-Stream im Kinderzimmer", mbit: 10 },
    { label: "Reserve für Smartphones & Co.", mbit: 10 },
  ],
  conclusion: "Ein Anschluss mit 50 Mbit/s reicht hier knapp – mit 100 Mbit/s sind Sie auf der sicheren Seite.",
};

export const legalityParagraphs = [
  "Die Technik selbst ist in Deutschland völlig legal. Große Unternehmen wie die Deutsche Telekom übertragen ihr Fernsehangebot seit Jahren per IPTV, und auch ARD und ZDF bieten Livestreams über das Internet an.",
  "Ob ein konkretes Angebot legal ist, hängt allein davon ab, ob der Anbieter die Rechte an den gezeigten Sendern und Inhalten besitzt. Angebote, die Pay-TV, Fußball-Bundesliga oder aktuelle Kinofilme ohne diese Rechte verbreiten, verletzen das Urheberrecht.",
  "Das Risiko tragen nicht nur die Betreiber. Der Europäische Gerichtshof hat 2017 im sogenannten Filmspeler-Urteil (Rechtssache C‑527/15) entschieden, dass bereits das Streamen offensichtlich rechtswidriger Inhalte eine unerlaubte Vervielfältigung darstellen kann. Nutzen Sie deshalb ausschließlich Dienste, die Inhalte erkennbar mit Erlaubnis der Rechteinhaber anbieten.",
];

export const legalityNote =
  "Diese Informationen dienen der Orientierung und ersetzen keine Rechtsberatung.";

export const legalQuickFacts = [
  {
    tone: "ok",
    title: "Die Technik ist legal",
    text: "IPTV ist nur ein Übertragungsweg – genau wie Satellit oder Kabel.",
  },
  {
    tone: "info",
    title: "Entscheidend sind die Rechte",
    text: "Legal ist ein Angebot nur, wenn der Anbieter die Sender und Inhalte zeigen darf.",
  },
  {
    tone: "warn",
    title: "Auch Nutzer tragen ein Risiko",
    text: "Wer offensichtlich illegale Streams nutzt, kann selbst rechtliche Probleme bekommen.",
  },
] as const;

export const legalComparison = {
  legal: {
    title: "Legale IPTV-Dienste",
    subtitle: "Mit Erlaubnis der Sender und Rechteinhaber",
    points: [
      "Nennen ihre Sender und Partner offen",
      "Vollständiges Impressum, AGB und Datenschutzerklärung",
      "Marktübliche Preise mit klarer Laufzeit",
      "Zahlung mit Käuferschutz, z. B. Lastschrift, Karte oder PayPal",
      "Offizielle Apps aus den bekannten App-Stores",
    ],
    examples: "Beispiele: MagentaTV, waipu.tv, Zattoo sowie die Mediatheken von ARD und ZDF.",
  },
  illegal: {
    title: "Nicht autorisierte Angebote",
    subtitle: "Ohne Rechte an den gezeigten Inhalten",
    points: [
      "Tausende Sender inklusive Pay-TV für wenige Euro im Monat",
      "Kein, ein unvollständiges oder ein falsches Impressum",
      "Zahlung nur per Kryptowährung, Gutscheinkarte oder Überweisung an Privatpersonen",
      "Zugangsdaten per Messenger, Apps nur zum manuellen Installieren",
      "Häufige Ausfälle – oft ist der Dienst plötzlich ganz verschwunden",
    ],
    examples: "Je günstiger und umfangreicher ein Angebot wirkt, desto genauer sollten Sie hinschauen.",
  },
};

export const legalRisks = [
  {
    title: "Rechtliche Folgen",
    text: "Urheberrechtsverletzungen können zu Abmahnungen und Schadensersatzforderungen führen.",
  },
  {
    title: "Geld ohne Gegenleistung",
    text: "Ohne Käuferschutz ist Ihre Zahlung verloren, wenn der Dienst abgeschaltet wird.",
  },
  {
    title: "Unsichere Apps",
    text: "Apps aus unbekannten Quellen können Schadsoftware enthalten oder Daten abgreifen.",
  },
];

export const homeFaq: FaqItem[] = [
  {
    question: "Was ist IPTV?",
    answer:
      "IPTV (Internet Protocol Television) ist Fernsehen über das Internet. Statt per Satellit, Kabel oder Antenne kommen die Sender als Datenstrom über Ihren Internetanschluss und werden über eine App oder ein spezielles Gerät wiedergegeben.",
  },
  {
    question: "Wie funktioniert IPTV?",
    answer:
      "Der Anbieter wandelt das TV-Signal in einen Datenstrom um und überträgt ihn über das Internet. Ihre App oder Ihr Receiver empfängt diesen Strom, entschlüsselt ihn bei Bedarf und zeigt das Bild an. Senderliste und Programmzeitschrift werden ebenfalls online geladen.",
  },
  {
    question: "Was kostet ein IPTV-Abonnement?",
    answer: `Die Kosten für den eigentlichen TV-Dienst legt der jeweilige lizenzierte Anbieter fest und hängen von Senderumfang, Bildqualität und Laufzeit ab. Vergleichen Sie die aktuellen Preise direkt beim Anbieter. Unsere Pakete für Einrichtungshilfe und Support beginnen bei ${formatPrice(LOWEST_PRICE)} für 1 Monat und 1 Gerät – TV-Sender oder Zugangsdaten sind darin nicht enthalten.`,
  },
  {
    question: "Welche Geräte sind kompatibel?",
    answer:
      "IPTV läuft auf Smart TVs, Amazon Fire TV, Android-TV- und Google-TV-Geräten, Android-Smartphones und -Tablets, MAG-Boxen und Enigma2-Receivern. Welche Geräte genau unterstützt werden, hängt davon ab, für welche Plattformen der jeweilige Dienst eine App anbietet.",
  },
  {
    question: "Wie kann ich IPTV einrichten?",
    answer:
      "In der Regel installieren Sie die App des Dienstes aus dem Store Ihres Geräts und melden sich mit Ihrem Kundenkonto an. Bei Player-Apps binden Sie stattdessen eine M3U-Playlist oder Xtream-Codes-Daten ein. Für die gängigen Geräte finden Sie bei uns Schritt-für-Schritt-Anleitungen – oder Sie lassen sich von uns persönlich helfen.",
  },
  {
    question: "Welche Internetgeschwindigkeit benötige ich?",
    answer:
      "Als Richtwert etwa 3 bis 5 Mbit/s für SD, 8 bis 10 Mbit/s für HD und 20 bis 25 Mbit/s für 4K – jeweils pro Stream. Planen Sie Reserve für weitere Geräte ein. Noch wichtiger als die Höchstgeschwindigkeit ist eine stabile Verbindung.",
  },
  {
    question: "Ist IPTV in Deutschland legal?",
    answer:
      "Die Technik ist legal. Entscheidend ist, ob der Anbieter die Rechte an den Sendern und Inhalten besitzt. Angebote mit Tausenden Pay-TV-Sendern zu Kleinstpreisen sind in der Regel illegal, und auch Nutzer können sich dabei rechtlich angreifbar machen.",
  },
  {
    question: "Wie erkenne ich einen seriösen IPTV Anbieter?",
    answer:
      "An einem vollständigen Impressum, offen genannten Senderrechten, klaren Preisen, erreichbarem Support, einer DSGVO-konformen Datenschutzerklärung und transparenten AGB mit Angaben zu Laufzeit und Kündigung. Unrealistisch günstige Komplettpakete und Zahlung nur per Kryptowährung oder Gutscheinkarte sind deutliche Warnsignale.",
  },
];
