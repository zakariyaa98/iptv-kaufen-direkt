import type { StaticImageData } from "next/image";
import fireTvImage from "@/public/images/home page/Geräten/iptv kaufen Amazon firetv stick.webp";
import androidMobileImage from "@/public/images/home page/Geräten/iptv kaufen andoird smartphone.webp";
import googleTvImage from "@/public/images/home page/Geräten/iptv kaufen google tv.webp";
import magImage from "@/public/images/home page/Geräten/iptv kaufen MAG.webp";
import smartTvImage from "@/public/images/home page/Geräten/iptv kaufen SMART TV LG.webp";
import enigma2Image from "@/public/images/home page/Geräten/iptv kaufen vu+.webp";
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

export const whyUsBenefits = [
  {
    title: "Persönliche Einrichtungshilfe",
    text: "Wir führen Sie Schritt für Schritt per Chat, Sprachnachricht oder Videoanruf durch die Einrichtung. Eine Fernwartung erfolgt nur mit Ihrer ausdrücklichen Zustimmung.",
  },
  {
    title: "Transparente Gesamtpreise",
    text: "Sie sehen vorab, was ein Paket für die gesamte Laufzeit kostet. Ohne Lockpreise, ohne durchgestrichene Fantasiepreise.",
  },
  {
    title: "Erreichbar auf Ihren Kanälen",
    text: "Schreiben Sie uns per WhatsApp, Telegram oder E-Mail. Wir bemühen uns, Anfragen noch am selben Tag zu beantworten.",
  },
  {
    title: "Klare Haltung zur Legalität",
    text: "Wir verkaufen weder Senderpakete noch Zugangsdaten. Wir helfen ausschließlich bei legalen Lösungen und sagen offen, wenn ein Angebot problematisch ist.",
  },
  {
    title: "Anleitungen auf Deutsch",
    text: "Für Fire TV, Smart TV, Android TV, MAG-Boxen und Enigma2-Receiver gibt es ausführliche Anleitungen – kostenlos und verständlich erklärt.",
  },
  {
    title: "Für mehrere Geräte",
    text: "Wohnzimmer, Schlafzimmer, Kinderzimmer: Unsere Pakete decken die Einrichtung auf einem, zwei oder drei Geräten ab.",
  },
];

export const pricingExplainer = [
  "Die Anzahl der Geräte richtet sich danach, auf wie vielen Fernsehern, Sticks oder Receivern wir Sie bei der Einrichtung unterstützen. Die Laufzeit bestimmt, wie lange Sie bei Fragen und Problemen unseren Support nutzen können.",
  "Wichtig: Unsere Pakete enthalten keine TV-Sender, Abonnements oder Zugangsdaten. Den eigentlichen TV-Dienst schließen Sie direkt bei einem lizenzierten Anbieter ab – wir sorgen dafür, dass er auf Ihren Geräten zuverlässig läuft.",
];

export const iptvFeatures: { title: string; text: string; href?: string; linkLabel?: string }[] = [
  {
    title: "Live-TV und Senderliste",
    text: "Das laufende Programm wie beim klassischen Fernsehen. Eine gut sortierte Senderliste mit Favoriten macht das Umschalten schnell und bequem.",
  },
  {
    title: "Elektronische Programmzeitschrift (EPG)",
    text: "Der EPG zeigt, was gerade läuft und was als Nächstes kommt. Bei Player-Apps muss er oft separat eingebunden werden.",
    href: "/anleitungen/epg-einrichten",
    linkLabel: "EPG einrichten",
  },
  {
    title: "Zeitversetztes Fernsehen und Replay",
    text: "Viele Dienste erlauben, eine Sendung zu pausieren, neu zu starten oder verpasste Sendungen nachträglich abzurufen – sofern die Senderrechte das zulassen.",
  },
  {
    title: "Aufnahmen in der Cloud",
    text: "Statt einer Festplatte nutzen einige Anbieter einen Online-Rekorder. Umfang und Speicherdauer unterscheiden sich je nach Tarif deutlich.",
  },
  {
    title: "Nutzung auf mehreren Geräten",
    text: "Fernseher, Tablet und Smartphone mit einem Konto: Wie viele Streams gleichzeitig laufen dürfen, regelt der Vertrag mit dem Anbieter.",
  },
  {
    title: "HD- und 4K-Bildqualität",
    text: "Ob ein Sender in HD oder 4K verfügbar ist, hängt vom Dienst, vom Tarif und von Ihrer Internetverbindung ab.",
  },
  {
    title: "Jugendschutz und PIN",
    text: "Eine PIN-Sperre schützt bestimmte Inhalte oder Einkäufe. Gerade in Familien lohnt es sich, diese Funktion von Anfang an einzurichten.",
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

export const providerCriteria = [
  {
    title: "Vollständiges Impressum",
    text: "Ein seriöser Anbieter nennt Firmennamen, ladungsfähige Anschrift und Kontaktdaten. Fehlt das Impressum oder ist es lückenhaft, sollten Sie misstrauisch werden.",
  },
  {
    title: "Rechte an den Inhalten",
    text: "Wer Fernsehsender weiterverbreitet, braucht die Rechte der Sender und Rechteinhaber. Lizenzierte Dienste nennen ihre Senderpartner offen.",
  },
  {
    title: "Klare Preise",
    text: "Sie sollten vor dem Kauf genau erkennen, was Sie insgesamt zahlen – inklusive Laufzeit und eventueller Zusatzkosten.",
  },
  {
    title: "Erreichbarer Kundensupport",
    text: "Ein funktionierender Support ist Pflicht. Achten Sie darauf, über welche Wege und zu welchen Zeiten der Anbieter erreichbar ist.",
  },
  {
    title: "Offene Angaben zur Gerätekompatibilität",
    text: "Seriöse Dienste listen auf, auf welchen Geräten ihre App läuft. Viele bieten außerdem einen kostenlosen Testzeitraum an.",
  },
  {
    title: "Datenschutz",
    text: "Eine verständliche Datenschutzerklärung nach DSGVO und Zahlungswege mit Käuferschutz sind ein gutes Zeichen.",
  },
  {
    title: "Transparente Vertragsbedingungen",
    text: "Laufzeit, Verlängerung, Kündigung und Widerrufsrecht sollten in den AGB klar geregelt und leicht auffindbar sein.",
  },
];

export const providerWarningSigns = [
  "Tausende Sender inklusive Pay-TV zu einem Bruchteil der üblichen Preise",
  "Kein oder ein unvollständiges Impressum",
  "Zahlung nur per Kryptowährung oder Gutscheinkarte",
  "Keine AGB und keine Datenschutzerklärung",
];

export const speedTable = {
  headers: ["Bildqualität", "Pro Stream (Richtwert)", "Empfohlener Anschluss"],
  rows: [
    ["SD", "3–5 Mbit/s", "ab 16 Mbit/s"],
    ["HD (720p/1080p)", "8–10 Mbit/s", "ab 50 Mbit/s"],
    ["4K / UHD", "20–25 Mbit/s", "ab 100 Mbit/s"],
  ],
  caption:
    "Richtwerte. Der tatsächliche Bedarf hängt vom Anbieter und von der Komprimierung ab. Der empfohlene Anschluss enthält Reserve für weitere Geräte im Haushalt.",
};

export const speedParagraphs = [
  "Wie viel Bandbreite IPTV benötigt, hängt vor allem von der Bildqualität und davon ab, wie viele Geräte gleichzeitig streamen. Eine pauschale Garantie gibt es nicht, denn jeder Anbieter komprimiert seine Streams anders.",
  "Ein Rechenbeispiel: Läuft im Wohnzimmer ein 4K-Stream und im Kinderzimmer ein HD-Stream, während nebenbei Smartphones online sind, sollten Sie mit rund 45 Mbit/s rechnen – etwa 25 Mbit/s für 4K, 10 Mbit/s für HD und 10 Mbit/s Reserve.",
];

export const speedTips = [
  "Verbinden Sie das Wiedergabegerät per LAN-Kabel oder Powerline-Adapter.",
  "Nutzen Sie im WLAN das 5-GHz-Band oder ein Mesh-System.",
  "Messen Sie Ihre tatsächliche Geschwindigkeit mit der Breitbandmessung der Bundesnetzagentur.",
  "Halten Sie die Firmware von Router und Wiedergabegerät aktuell.",
];

export const legalityParagraphs = [
  "Die Technik selbst ist in Deutschland völlig legal. Große Unternehmen wie die Deutsche Telekom übertragen ihr Fernsehangebot seit Jahren per IPTV, und auch ARD und ZDF bieten Livestreams über das Internet an.",
  "Ob ein konkretes Angebot legal ist, hängt allein davon ab, ob der Anbieter die Rechte an den gezeigten Sendern und Inhalten besitzt. Angebote, die Pay-TV, Fußball-Bundesliga oder aktuelle Kinofilme ohne diese Rechte verbreiten, verletzen das Urheberrecht.",
  "Das Risiko tragen nicht nur die Betreiber. Der Europäische Gerichtshof hat 2017 im sogenannten Filmspeler-Urteil (Rechtssache C‑527/15) entschieden, dass bereits das Streamen offensichtlich rechtswidriger Inhalte eine unerlaubte Vervielfältigung darstellen kann. Nutzen Sie deshalb ausschließlich Dienste, die Inhalte erkennbar mit Erlaubnis der Rechteinhaber anbieten.",
];

export const legalityNote =
  "Diese Informationen dienen der Orientierung und ersetzen keine Rechtsberatung.";

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
