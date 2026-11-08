import type { FaqItem } from "./faq-data";
import { LOWEST_PRICE, formatPrice } from "./plans";

/**
 * Copy for the /anleitungen hub. Kept out of the page so the page only handles layout.
 *
 * SEO focus: "IPTV einrichten" (informational / setup intent) plus Einrichtung, Installation,
 * Konfiguration, Einstellungen, Grundlagen and Fehlerhilfe.
 * - The homepage owns "IPTV kaufen", /angebote owns "IPTV Angebote / Preise": no purchase keywords in headings here.
 * - Device pages (/geraete/*) and guide articles (/anleitungen/*) own the long-tail topics. This hub explains each
 *   topic only as far as needed and links down with descriptive anchors instead of duplicating them.
 * - New blog articles: add them to `topicClusters` (and, if they replace a section's deep dive, to that section's links).
 */

export const ANLEITUNGEN_UPDATED = "2026-11-02";

export const ANLEITUNGEN_SEO = {
  title: "IPTV einrichten: Anleitungen & Konfiguration",
  description:
    "IPTV einrichten leicht gemacht: Grundlagen, M3U, Xtream Codes & EPG erklärt – mit Anleitungen für Fire TV, Smart TV, MAG & Enigma2 und Hilfe bei Problemen.",
  h1: "IPTV einrichten – Grundlagen, Anleitungen und Konfiguration",
};

export const tocItems = [
  { id: "grundlagen", label: "IPTV-Grundlagen" },
  { id: "voraussetzungen", label: "Voraussetzungen & Internet" },
  { id: "apps", label: "Apps und Geräte" },
  { id: "zugangsarten", label: "M3U, Xtream Codes & Portal" },
  { id: "ablauf", label: "Einrichtung Schritt für Schritt" },
  { id: "einstellungen", label: "Wichtige Einstellungen" },
  { id: "epg", label: "EPG einrichten" },
  { id: "geraete", label: "Anleitungen nach Gerät" },
  { id: "fehler", label: "Fehler und Lösungen" },
  { id: "bildqualitaet", label: "Ruckeln & Bildqualität" },
  { id: "sicherheit", label: "Sicherheit & Datenschutz" },
  { id: "faq", label: "Häufige Fragen" },
];

export const heroPoints = ["Kostenlos und auf Deutsch", "Für alle gängigen Geräte", "Persönliche Hilfe bei Fragen"];

export type QuickStartIcon = "device" | "app" | "key" | "wifi";

export const quickStart: { icon: QuickStartIcon; title: string; text: string }[] = [
  {
    icon: "device",
    title: "Ein passendes Gerät",
    text: "Smart TV, Fire TV Stick, Android-TV-Box, MAG-Box oder Enigma2-Receiver – mit aktueller Software und Internetzugang.",
  },
  {
    icon: "app",
    title: "Die richtige App",
    text: "Die offizielle App Ihres Dienstes oder ein IPTV-Player, der die Zugangsart Ihres Anbieters unterstützt.",
  },
  {
    icon: "key",
    title: "Ihre Zugangsdaten",
    text: "M3U-Adresse, Xtream-Codes-Daten oder Portal-URL. Diese Angaben erhalten Sie von Ihrem IPTV-Anbieter.",
  },
  {
    icon: "wifi",
    title: "Eine stabile Verbindung",
    text: "Rund 10 Mbit/s pro Full-HD-Stream, am besten per LAN-Kabel. Gleichmäßigkeit zählt mehr als Spitzenwerte.",
  },
];

/* ---------------------------------------------------------------- Grundlagen */

export const basicsParagraphs = [
  "IPTV (Internet Protocol Television) überträgt Fernsehen als Datenstrom über das Internet statt über Satellit, Kabel oder Antenne. Für die Einrichtung ist vor allem ein Gedanke hilfreich: Bei IPTV übernimmt die App die Rolle des Empfängers. Wo früher Tuner und Sendersuchlauf standen, stehen heute eine Server-Adresse und Ihre persönlichen Zugangsdaten. Ausführlicher erklärt das unser Grundlagenartikel [Wie funktioniert IPTV?](/blog/was-ist-iptv)",
  "Daraus folgt auch, warum IPTV so flexibel ist. Derselbe Zugang funktioniert – je nach Tarif – auf dem Fernseher im Wohnzimmer, auf dem Stick im Schlafzimmer und auf dem Tablet. Und es erklärt, wo Probleme entstehen können: Zwischen Sender und Bildschirm liegen mehrere Stationen. Wer sie kennt, findet Fehler deutlich schneller.",
];

export const signalFlow = [
  {
    title: "Aufbereitung",
    text: "Der Anbieter komprimiert das TV-Signal, meist mit H.264 oder H.265 (HEVC), und teilt es in kleine Datenpakete.",
  },
  {
    title: "Server & Verteilung",
    text: "Streaming-Server – oft über ein Content Delivery Network (CDN) verteilt – stellen die Pakete zum Abruf bereit.",
  },
  {
    title: "Internet & Heimnetz",
    text: "Über Ihren Anschluss, den Router und schließlich LAN oder WLAN gelangen die Daten bis zu Ihrem Gerät.",
  },
  {
    title: "App & Wiedergabe",
    text: "Die App puffert einige Sekunden, decodiert das Bild und lädt parallel Senderliste und Programmzeitschrift.",
  },
];

export const iptvTypes = [
  {
    title: "IPTV über den Internetanbieter",
    label: "Managed IPTV",
    text: "Das TV-Angebot Ihres Internetanbieters läuft über dessen eigenes, verwaltetes Netz. Das Fernsehsignal wird dort in der Regel bevorzugt übertragen, die Einrichtung geschieht meist automatisch über einen mitgelieferten Receiver oder eine App.",
  },
  {
    title: "IPTV über das offene Internet",
    label: "OTT-Streaming",
    text: "Der Dienst ist unabhängig von Ihrem Internetanschluss und wird über Apps auf beliebigen Geräten genutzt. Sehr flexibel – die Qualität hängt dafür stärker von Ihrem Heimnetz und den Servern des Anbieters ab. Um diese Variante geht es in den meisten Anleitungen auf dieser Seite.",
  },
];

export const glossary = [
  { term: "Stream", text: "Der fortlaufende Datenstrom eines Senders oder Films, der während der Wiedergabe geladen wird." },
  { term: "Puffer (Buffer)", text: "Ein kleiner Vorrat an bereits geladenen Sekunden, der kurze Schwankungen der Verbindung überbrückt." },
  { term: "Codec", text: "Das Verfahren, mit dem Bild und Ton komprimiert werden – etwa H.264, H.265 (HEVC), AAC oder AC3." },
  { term: "EPG / XMLTV", text: "Die elektronische Programmzeitschrift. XMLTV ist das übliche Dateiformat dafür." },
  { term: "VOD & Catch-up", text: "Filme und Serien auf Abruf bzw. verpasste Sendungen, die sich nachträglich abspielen lassen." },
  { term: "MAC-Adresse", text: "Die feste Hardware-Kennung eines Geräts. MAG-Boxen melden sich damit am Portal an." },
  { term: "Bouquet", text: "Eine Senderliste auf Enigma2-Receivern, in die sich auch IPTV-Sender einbinden lassen." },
  { term: "Port", text: "Die Zahl hinter dem Doppelpunkt einer Server-Adresse, zum Beispiel :8080. Sie gehört zur Adresse dazu." },
];

/* ---------------------------------------------------------- Voraussetzungen */

export const requirements = [
  {
    title: "Kompatibles Gerät mit aktueller Software",
    text: "Installieren Sie vor der Einrichtung alle System-Updates. Ältere Firmware ist eine häufige Ursache für Abstürze und fehlende Codecs.",
  },
  {
    title: "Korrekte Datum- und Uhrzeiteinstellung",
    text: "Stellen Sie Datum und Uhrzeit auf „automatisch“. Eine falsche Systemzeit verschiebt den EPG und kann verschlüsselte Verbindungen scheitern lassen.",
  },
  {
    title: "Genügend freier Speicher",
    text: "Gerade Streaming-Sticks haben wenig Platz. Als Richtwert sollten 1 bis 2 GB frei sein, damit App, Senderliste und EPG-Daten Platz finden.",
  },
  {
    title: "Vollständige Zugangsdaten",
    text: "Halten Sie alle Angaben Ihres Anbieters bereit – inklusive Port, Benutzername und Passwort – am besten zum Kopieren auf dem Smartphone.",
  },
  {
    title: "Eine bequeme Eingabemöglichkeit",
    text: "Lange Adressen tippen sich mit der Fernbedienung mühsam. Hilfreich sind Fernbedienungs-Apps fürs Smartphone, eine USB-Tastatur oder die Web-Eingabe mancher Player.",
  },
  {
    title: "Stabile Internetverbindung",
    text: "Ein Anschluss mit ausreichend Reserve und möglichst eine Kabelverbindung zum Wiedergabegerät. Details dazu im nächsten Abschnitt.",
  },
];

export const networkTips = [
  {
    title: "Kabel schlägt Funk",
    text: "Ein LAN-Kabel liefert gleichmäßige Werte ohne Funkstörungen. Wo kein Kabel möglich ist, sind Powerline-Adapter oder ein Mesh-System die stabilere Alternative zum einfachen Repeater.",
  },
  {
    title: "Gleichmäßigkeit vor Spitzenwert",
    text: "Für Live-TV sind Schwankungen (Jitter) und verlorene Datenpakete oft schädlicher als eine geringe Bandbreite. Ein Speedtest am Gerät zu verschiedenen Uhrzeiten zeigt, wie stabil Ihre Leitung wirklich ist.",
  },
  {
    title: "5 GHz statt 2,4 GHz",
    text: "Das 5-GHz-Band ist schneller und weniger überlaufen. Es reicht dafür nicht ganz so weit – stehen Router und Fernseher in verschiedenen Etagen, hilft ein Mesh-Zugangspunkt in der Nähe.",
  },
  {
    title: "Gegenprobe mit dem Smartphone-Hotspot",
    text: "Läuft ein Sender über den Hotspot Ihres Handys flüssig, im Heimnetz aber nicht, liegt die Ursache im Router oder WLAN – nicht beim Anbieter.",
  },
];

/* ---------------------------------------------------------------- Apps */

export const appOverview = {
  headers: ["App / Lösung", "Typische Geräte", "Zugangsarten", "Gut zu wissen"],
  rows: [
    ["Offizielle App Ihres Dienstes", "Je nach Anbieter", "Kundenkonto", "Am einfachsten: anmelden, fertig. Senderliste und EPG sind bereits integriert."],
    ["TiviMate", "Android TV, Google TV, Fire TV", "M3U, Xtream Codes", "Übersichtlicher TV-Guide wie bei einem Receiver. Einige Funktionen nur in der Premium-Version."],
    ["IPTV Smarters Pro", "Android, Fire TV, iOS", "Xtream Codes, M3U", "Weit verbreitet, auch auf Smartphones und Tablets nutzbar."],
    ["Kodi mit PVR IPTV Simple Client", "Android, Fire TV, Windows, macOS, Linux", "M3U + XMLTV", "Sehr flexibel und kostenlos, die Einrichtung ist etwas aufwendiger."],
    ["VLC media player", "Nahezu alle Plattformen", "M3U", "Ideal, um eine Playlist schnell zu testen. Keine komfortable Programmzeitschrift."],
    ["Player-Apps für Smart TVs", "Samsung (Tizen), LG (webOS)", "Meist M3U, teils Xtream Codes", "Kleinere Auswahl. Manche Apps werden über eine Website mit der Playlist befüllt."],
    ["Integriertes Portal", "MAG-Boxen", "Portal-URL + MAC-Adresse", "Kein App-Download nötig, Bedienung wie ein klassischer Receiver."],
    ["Enigma2-Plugins und Bouquets", "VU+, Dreambox, Zgemma, GigaBlue", "Je nach Plugin Xtream Codes oder M3U", "Sender laufen je nach Lösung in einer eigenen Plugin-Oberfläche oder als Bouquet in der gewohnten Senderliste."],
  ],
  caption:
    "Die Apps sind Beispiele für verbreitete Player, keine vollständige Liste. Verfügbarkeit und Funktionsumfang können sich ändern. Einige Player sind auf dem Fire TV nicht im Amazon Appstore erhältlich und werden dann von der Website des Entwicklers installiert.",
};

/** Moved here from the former /geraete overview page. */
export const deviceComparison = [
  ["Fire TV Stick", "Günstig, einfache Bedienung", "Begrenzter Speicher"],
  ["Smart TV", "Kein Zusatzgerät nötig", "Kleinere App-Auswahl, Updates enden früher"],
  ["Android-TV-Box", "Größte App-Auswahl", "Billig-Boxen oft unsicher"],
  ["MAG-Box", "Reiner IPTV-Empfänger, stabil", "Kaum andere Apps"],
  ["Enigma2-Receiver", "IPTV neben Sat und Kabel", "Einrichtung anspruchsvoller"],
];

/* ---------------------------------------------------------- Zugangsarten */

export const accessTypes = [
  {
    id: "m3u",
    name: "M3U-Playlist",
    tagline: "Eine Adresse für alles",
    fields: [{ label: "M3U-URL", example: "http://anbieter.example:8080/get.php?username=…&password=…&type=m3u_plus" }],
    text: "Die Adresse zeigt auf eine Textliste mit allen Sendern, ihren Stream-Links, Logos und Gruppen. Fast jeder Player versteht dieses Format.",
    pro: "Universell – funktioniert in nahezu jeder App und auf Enigma2.",
    con: "Die Programmzeitschrift braucht meist eine eigene XMLTV-Adresse. Große Listen laden spürbar langsamer.",
  },
  {
    id: "xtream",
    name: "Xtream Codes",
    tagline: "Drei Felder, mehr Komfort",
    fields: [
      { label: "Server", example: "http://anbieter.example:8080" },
      { label: "Benutzername", example: "ihr-benutzername" },
      { label: "Passwort", example: "••••••••" },
    ],
    text: "Die App fragt über eine Schnittstelle (API) Senderliste, EPG, Mediathek und Catch-up einzeln ab – statt eine riesige Datei zu laden.",
    pro: "Schneller, übersichtlicher und mit automatischem EPG. Für Android-Apps meist die beste Wahl.",
    con: "Im Server-Feld gehören nur Protokoll, Adresse und Port – nicht der komplette Playlist-Link.",
  },
  {
    id: "portal",
    name: "Portal-URL (Stalker)",
    tagline: "Gebunden an die Box",
    fields: [
      { label: "Portal-URL", example: "http://portal.example:8080/c/" },
      { label: "MAC-Adresse", example: "00:1A:79:xx:xx:xx" },
    ],
    text: "Die Box meldet sich mit ihrer MAC-Adresse beim Portal an. Der Anbieter muss genau diese Adresse vorher freischalten.",
    pro: "Bedienung wie ein klassischer Receiver, Senderliste und EPG kommen direkt aus dem Portal.",
    con: "Funktioniert nur mit der freigeschalteten MAC-Adresse – ein Gerätewechsel muss beim Anbieter gemeldet werden.",
  },
];

/* ---------------------------------------------------------- Einrichtung */

export const setupSteps = [
  {
    title: "Gerät vorbereiten",
    text: "Installieren Sie System-Updates, stellen Sie Datum und Uhrzeit auf automatisch und verbinden Sie das Gerät möglichst per LAN-Kabel. Starten Sie es danach einmal neu.",
  },
  {
    title: "App auswählen und installieren",
    text: "Nutzt Ihr Anbieter eine eigene App, nehmen Sie diese. Für M3U oder Xtream Codes wählen Sie einen Player, der Ihr Gerät und Ihre Zugangsart unterstützt – möglichst aus dem offiziellen Store.",
  },
  {
    title: "Zugangsart in der App wählen",
    text: "Beim ersten Start fragt der Player, wie Sie sich verbinden möchten. Je nach App heißt das „Xtream Codes API“, „M3U-URL“ oder „Playlist hinzufügen“. Bei MAG-Boxen tragen Sie das Portal in den Systemeinstellungen ein.",
  },
  {
    title: "Verbindungsdaten eingeben",
    text: "Kopieren Sie die Angaben möglichst, statt sie abzutippen. Achten Sie auf http:// bzw. https://, den Port und die Groß- und Kleinschreibung. Manche Player erlauben die Eingabe bequem über das Smartphone oder einen Browser.",
  },
  {
    title: "Senderliste und EPG laden",
    text: "Der erste Abruf kann einige Minuten dauern. Hinterlegen Sie bei Bedarf die EPG-Adresse und legen Sie ein Aktualisierungsintervall fest, zum Beispiel alle 12 oder 24 Stunden.",
  },
  {
    title: "Testen und feinjustieren",
    text: "Probieren Sie mehrere Sender – idealerweise auch abends. Legen Sie Favoriten an, blenden Sie unnötige Gruppen aus und richten Sie bei Bedarf eine Jugendschutz-PIN ein.",
  },
];

export const inputMistakes = [
  "Leerzeichen am Anfang oder Ende, die beim Kopieren mitgerutscht sind",
  "Verwechselte Zeichen wie l, I und 1 oder O und 0",
  "http:// statt https:// – oder umgekehrt",
  "Fehlender Port, zum Beispiel :8080 am Ende der Server-Adresse",
  "Der komplette M3U-Link im Server-Feld einer Xtream-Codes-Eingabe",
  "Falsche Groß- und Kleinschreibung bei Benutzername oder Passwort",
];

export const playerSettings = [
  {
    title: "Decoder: Hardware oder Software",
    text: "Der Hardware-Decoder entlastet den Prozessor und ist meist die beste Wahl. Bei Bildfehlern, grünem Bild oder Tonaussetzern testen Sie den Software-Decoder.",
  },
  {
    title: "Puffergröße",
    text: "Ein größerer Puffer gleicht Schwankungen der Leitung aus, verlängert aber die Umschaltzeit. Bei häufigem Nachladen lohnt eine Stufe mehr.",
  },
  {
    title: "Stream-Format",
    text: "Viele Apps bieten MPEG-TS und HLS an. TS startet oft schneller, HLS kommt mit schwankenden Verbindungen meist besser zurecht. Testen Sie beide.",
  },
  {
    title: "Bildwiederholrate anpassen",
    text: "Funktionen wie „Bildrate anpassen“ oder AFR stellen die Ausgabe auf die Bildrate des Senders um – in Europa meist 50 Hz. Das beseitigt Mikroruckler bei Kameraschwenks.",
  },
  {
    title: "Audio und Passthrough",
    text: "Fehlt auf einzelnen Sendern der Ton, wird oft das Tonformat (AC3/E-AC3) nicht unterstützt. Schalten Sie Passthrough um oder wählen Sie eine andere Tonspur.",
  },
  {
    title: "Ordnung und Jugendschutz",
    text: "Favoriten, ausgeblendete Gruppen und eine sortierte Senderliste machen den Alltag bequemer. Eine PIN sperrt Inhalte, die Kinder nicht sehen sollen.",
  },
];

/* ---------------------------------------------------------------- EPG */

export const epgParagraphs = [
  "Der EPG (Electronic Program Guide) zeigt, was gerade läuft und was als Nächstes kommt. Bei offiziellen Apps und bei Xtream-Codes-Zugängen wird er in der Regel automatisch geladen. Bei einer M3U-Playlist hinterlegen Sie dagegen meist eine eigene XMLTV-Adresse.",
  "Die App ordnet die Programmdaten über eine Kennung, die sogenannte tvg-id, den Sendern Ihrer Liste zu. Passen die Kennungen in Playlist und EPG-Datei nicht zusammen, bleibt die Programmzeitschrift für diesen Sender leer – obwohl das Bild einwandfrei läuft.",
];

export const epgProblems = [
  { problem: "EPG ist komplett leer", fix: "EPG-Adresse prüfen, Daten manuell aktualisieren und den App-Cache leeren." },
  { problem: "Programm um eine Stunde verschoben", fix: "Zeitzone und EPG-Versatz (Offset) anpassen – typisch nach der Zeitumstellung." },
  { problem: "Nur einige Sender haben Daten", fix: "Die Senderkennungen passen nicht. In vielen Apps können Sie den EPG manuell zuordnen." },
  { problem: "Daten sind veraltet", fix: "Aktualisierungsintervall verkürzen und prüfen, ob Datum und Uhrzeit des Geräts stimmen." },
];

/* ---------------------------------------------------------------- Geräte */

/** Extra keywords per device page, shown as tags on the cards. */
export const deviceTags: Record<string, string[]> = {
  "fire-tv-stick": ["Fire TV Stick 4K", "Fire TV Stick 4K Max"],
  "smart-tv": ["Samsung Tizen", "LG webOS"],
  "android-tv-box": ["Google TV", "Android-TV-Fernseher"],
  "mag-box": ["Portal", "MAC-Adresse"],
  "enigma2-receiver": ["VU+", "Dreambox", "Zgemma", "GigaBlue"],
};

/** Order of the device cards: most common devices first. */
export const deviceOrder = ["fire-tv-stick", "smart-tv", "android-tv-box", "mag-box", "enigma2-receiver"];

/* ---------------------------------------------------------------- Fehler */

export const configErrors = {
  headers: ["Symptom", "Häufige Ursache", "Lösung"],
  rows: [
    ["„Anmeldung fehlgeschlagen“ oder „ungültige Zugangsdaten“", "Tippfehler, falsche Groß- und Kleinschreibung oder ein abgelaufener Zugang", "Daten neu kopieren und einfügen, Status des Zugangs beim Anbieter prüfen"],
    ["„Server nicht erreichbar“ oder Zeitüberschreitung", "Falscher Port, falsches Protokoll oder eine vorübergehende Serverstörung", "Adresse Zeichen für Zeichen prüfen, Gegenprobe im Smartphone-Hotspot, später erneut versuchen"],
    ["Playlist lädt, aber die Senderliste bleibt leer", "Gruppen in der App ausgeblendet oder Liste nur unvollständig geladen", "Gruppenfilter prüfen, App-Cache leeren und die Playlist neu laden"],
    ["Schwarzes Bild, Sender startet nicht", "Codec wird nicht unterstützt, ungeeignete Decoder-Einstellung oder Sender gestört", "Decoder wechseln, anderen Player testen, Gegenprobe mit einem anderen Sender"],
    ["Bild läuft, aber kein Ton", "Tonformat wie AC3 oder E-AC3 wird vom Gerät nicht verarbeitet", "Audio-Passthrough umschalten oder eine andere Tonspur wählen"],
    ["„Zu viele Verbindungen“", "Mehr gleichzeitige Streams, als der Tarif erlaubt", "Wiedergabe auf anderen Geräten beenden, App vollständig schließen und neu öffnen"],
    ["Verbindungsfehler trotz korrekter Daten", "Falsche Systemzeit, dadurch scheitern verschlüsselte Verbindungen", "Datum und Uhrzeit auf automatisch stellen und das Gerät neu starten"],
    ["MAG-Box: „Authentifizierung fehlgeschlagen“", "MAC-Adresse beim Anbieter nicht oder falsch hinterlegt", "MAC-Adresse vom Aufkleber abgleichen und vom Anbieter bestätigen lassen"],
  ],
  caption: "Die genaue Formulierung der Meldungen unterscheidet sich je nach App und Gerät.",
};

/* ----------------------------------------------------- Ruckeln & Bildqualität */

export const diagnosisSteps = [
  {
    title: "Problem eingrenzen",
    text: "Ruckeln alle Sender oder nur einzelne? Nur abends oder ständig? Auch auf einem zweiten Gerät? Einzelne Sender deuten auf den Anbieter, alle Sender eher auf Ihr Netz.",
  },
  {
    title: "Heimnetz prüfen",
    text: "Speedtest direkt am Gerät, testweise LAN-Kabel, große Downloads pausieren, Router und Gerät neu starten.",
  },
  {
    title: "Gerät und App prüfen",
    text: "App und System aktualisieren, Cache leeren, Decoder und Stream-Format wechseln, Puffer erhöhen.",
  },
  {
    title: "Anbieter informieren",
    text: "Bleibt das Problem, melden Sie betroffene Sender, Uhrzeit, Gerät und App. Je genauer, desto schneller die Hilfe.",
  },
];

export const qualityTips = [
  "Wählen Sie, falls angeboten, die HD- oder FHD-Variante eines Senders statt der SD-Fassung.",
  "Stellen Sie die Ausgabeauflösung des Sticks oder der Box passend zum Fernseher ein, zum Beispiel 4K an einem 4K-TV.",
  "Aktivieren Sie die automatische Anpassung der Bildwiederholrate, um Mikroruckler zu vermeiden.",
  "Schalten Sie am Fernseher starke Bewegungsglättung und den Bildmodus „Dynamisch“ aus. Die Modi „Film“ oder „Kino“ wirken natürlicher.",
  "Für 4K mit HDR braucht es ein ausreichend schnelles HDMI-Kabel und einen passenden HDMI-Eingang am Fernseher.",
];

/* ---------------------------------------------------------- Sicherheit */

export const securityPoints = [
  {
    title: "Apps aus offiziellen Quellen",
    text: "Installieren Sie Player möglichst aus Google Play, dem Amazon Appstore oder dem Store Ihres Fernsehers. Wenn Sie eine App manuell installieren müssen, nur von der Website des Entwicklers – und deaktivieren Sie „Unbekannte Quellen“ danach wieder.",
  },
  {
    title: "Zugangsdaten schützen",
    text: "M3U-Adressen enthalten oft Benutzername und Passwort im Klartext. Teilen Sie sie nicht in Foren oder auf Screenshots und geben Sie sie nur in Apps ein, denen Sie vertrauen.",
  },
  {
    title: "Vorsicht bei No-Name-Boxen",
    text: "Sehr günstige Android-Boxen unbekannter Hersteller erhalten selten Sicherheitsupdates. Sicherheitsbehörden wie das BSI haben bereits vor Geräten gewarnt, die ab Werk mit Schadsoftware ausgeliefert wurden.",
  },
  {
    title: "Updates nicht aufschieben",
    text: "System- und App-Updates schließen Sicherheitslücken und beheben oft auch Wiedergabeprobleme. Aktivieren Sie automatische Updates, wo es möglich ist.",
  },
  {
    title: "VPN mit Augenmaß",
    text: "Für IPTV ist kein VPN nötig. Wer eines nutzt, sollte einen vertrauenswürdigen Dienst wählen – und wissen, dass ein VPN die Verbindung auch verlangsamen kann.",
  },
  {
    title: "Fernwartung nur mit Zustimmung",
    text: "Gewähren Sie Fernzugriff auf Ihre Geräte nur, wenn Sie wissen, wer zugreift und warum. Seriöse Helfer erklären vorab, was sie tun.",
  },
];

/* -------------------------------------------------------- Themen-Hub */

export type TopicLink = { href: string; label: string };

/**
 * The hub map for current guides and future blog articles.
 * Add each new article to exactly one cluster so every topic keeps a single home.
 */
export const topicClusters: { title: string; text: string; links: TopicLink[] }[] = [
  {
    title: "Einrichtung & Konfiguration",
    text: "Der grundsätzliche Ablauf und die Einstellungen, die für ein stabiles Bild sorgen.",
    links: [
      { href: "#ablauf", label: "IPTV einrichten in sechs Schritten" },
      { href: "#einstellungen", label: "IPTV-Einstellungen richtig konfigurieren" },
      { href: "/anleitungen/internetgeschwindigkeit-iptv", label: "Welche Internetgeschwindigkeit braucht IPTV?" },
      { href: "/blog/iptv-mehrere-geraete-gleichzeitig", label: "IPTV auf mehreren Geräten gleichzeitig nutzen" },
    ],
  },
  {
    title: "M3U & Xtream Codes",
    text: "Zugangsarten verstehen und Verbindungsdaten richtig eintragen.",
    links: [
      { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist, Xtream Codes und Portal erklärt" },
      { href: "#zugangsarten", label: "Zugangsarten im Überblick" },
    ],
  },
  {
    title: "IPTV-Apps",
    text: "Welche Player es gibt und welcher zu Ihrem Gerät passt.",
    links: [
      { href: "#apps", label: "IPTV-Apps im Vergleich" },
      { href: "/geraete/android-tv-box", label: "TiviMate und Kodi auf Android TV nutzen" },
      { href: "/geraete/fire-tv-stick", label: "IPTV-Player auf dem Fire TV Stick" },
      { href: "/blog/iptv-catch-up-timeshift-aufnahme", label: "Catch-up, Timeshift und Aufnahme erklärt" },
    ],
  },
  {
    title: "Geräte-Anleitungen",
    text: "Schritt-für-Schritt-Anleitungen für die gängigen IPTV-Geräte.",
    links: [
      { href: "/geraete/fire-tv-stick", label: "IPTV auf dem Fire TV Stick einrichten" },
      { href: "/geraete/smart-tv", label: "IPTV auf dem Smart TV einrichten" },
      { href: "/geraete/android-tv-box", label: "IPTV auf Android TV und Google TV einrichten" },
      { href: "/geraete/mag-box", label: "IPTV auf der MAG-Box einrichten" },
      { href: "/geraete/enigma2-receiver", label: "IPTV auf Enigma2, VU+ und Dreambox einrichten" },
    ],
  },
  {
    title: "EPG & Verbindung",
    text: "Programmzeitschrift einbinden und die Verbindung stabil halten.",
    links: [
      { href: "/anleitungen/epg-einrichten", label: "EPG für IPTV einrichten" },
      { href: "#voraussetzungen", label: "Internet und Heimnetz vorbereiten" },
    ],
  },
  {
    title: "Fehlerhilfe & Sicherheit",
    text: "Probleme lösen und IPTV sicher nutzen.",
    links: [
      { href: "/anleitungen/iptv-ruckelt-loesungen", label: "IPTV ruckelt oder friert ein: Lösungen" },
      { href: "#fehler", label: "Häufige Konfigurationsfehler" },
      { href: "/blog/iptv-schwarzes-bild-kein-ton", label: "Schwarzes Bild oder kein Ton? Codec-Probleme lösen" },
      { href: "/anleitungen/iptv-anbieter-erkennen", label: "Seriöse IPTV-Anbieter erkennen" },
      { href: "/iptv-legal", label: "IPTV legal in Deutschland" },
    ],
  },
];

/* ---------------------------------------------------------------- FAQ */

export const anleitungenFaq: FaqItem[] = [
  {
    question: "Wie lange dauert es, IPTV einzurichten?",
    answer:
      "Mit der offiziellen App eines Dienstes sind Sie oft in 10 bis 15 Minuten fertig. Mit einem IPTV-Player, eigener EPG-Quelle und sortierter Senderliste sollten Sie etwa 30 Minuten einplanen. Auf Enigma2-Receivern kann es beim ersten Mal länger dauern.",
  },
  {
    question: "Was ist der Unterschied zwischen M3U und Xtream Codes?",
    answer:
      "Eine M3U-Playlist ist eine einzige Adresse, hinter der eine Textliste mit allen Sendern steckt. Bei Xtream Codes geben Sie Server, Benutzername und Passwort ein, und die App lädt Senderliste, EPG und Mediathek gezielt über eine Schnittstelle. Xtream Codes ist meist bequemer, M3U funktioniert in mehr Apps.",
  },
  {
    question: "Kann ich denselben Zugang auf mehreren Geräten nutzen?",
    answer:
      "Das legt Ihr Tarif beim Anbieter fest. Oft dürfen Sie die Daten auf mehreren Geräten hinterlegen, aber nur eine bestimmte Zahl an Streams gleichzeitig abspielen. Portal-Zugänge für MAG-Boxen sind dagegen an die MAC-Adresse eines einzelnen Geräts gebunden.",
  },
  {
    question: "Warum zeigt meine App keine Programmzeitschrift an?",
    answer:
      "Meist fehlt bei einer M3U-Playlist die XMLTV-Adresse, oder die Senderkennungen in Playlist und EPG passen nicht zusammen. Prüfen Sie außerdem Datum, Uhrzeit und Zeitzone Ihres Geräts und aktualisieren Sie den EPG manuell.",
  },
  {
    question: "Kann ich IPTV ohne Smart TV nutzen?",
    answer:
      "Ja. Jeder Fernseher mit HDMI-Anschluss lässt sich mit einem Streaming-Stick wie dem Fire TV Stick, einer Android-TV-Box, einer MAG-Box oder einem Enigma2-Receiver nachrüsten.",
  },
  {
    question: "Warum läuft IPTV im WLAN schlechter als per Kabel?",
    answer:
      "Im WLAN teilen sich alle Geräte die Funkverbindung, und Wände, Entfernung und Nachbarnetze bremsen das Signal. Das führt zu Schwankungen, die bei Live-TV als Ruckler sichtbar werden. Ein LAN-Kabel oder Powerline-Adapter liefert gleichmäßigere Werte.",
  },
  {
    question: "Was tun, wenn IPTV plötzlich gar nicht mehr funktioniert?",
    answer:
      "Prüfen Sie zuerst, ob andere Internetdienste laufen. Starten Sie dann Router und Gerät neu, aktualisieren Sie die App und testen Sie einen zweiten Sender oder ein zweites Gerät. Funktioniert weiterhin nichts, fragen Sie bei Ihrem Anbieter nach dem Status Ihres Zugangs und möglichen Störungen.",
  },
  {
    question: "Brauche ich für IPTV ein VPN?",
    answer:
      "Nein. Ein VPN ist für die Einrichtung und Nutzung nicht erforderlich. Es kann die Verbindung sogar verlangsamen. Wenn Sie eines verwenden möchten, wählen Sie einen vertrauenswürdigen Dienst.",
  },
  {
    question: "Helfen Sie mir auch persönlich bei der Einrichtung?",
    answer: `Ja. Unsere Angebote umfassen persönliche Einrichtungshilfe und Support per WhatsApp, Telegram und E-Mail für 1, 2 oder 3 Geräte – ab ${formatPrice(
      LOWEST_PRICE
    )} Gesamtpreis. Alle Pakete und Laufzeiten finden Sie auf unserer Angebotsseite.`,
  },
];
