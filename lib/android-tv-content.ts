import type { FaqItem } from "./faq-data";

/**
 * Copy for /geraete/android-tv-box (app/geraete/android-tv-box/page.tsx). Layout lives in the page.
 *
 * SEO focus: "IPTV auf Android TV Box einrichten" plus Android TV, Google TV, IPTV Player, M3U, Xtream Codes,
 * LAN and 4K. Home owns "IPTV kaufen", /angebote prices, /anleitungen general setup, /geraete/smart-tv
 * Samsung/LG and /geraete/fire-tv-stick Amazon. This page stays on Android TV / Google TV devices.
 * - Facts checked Nov 2026 (see `sources`). Hardware numbers are labelled as guide values, not specs.
 * - Never present an app as compatible with every device; TiviMate and Kodi are examples with caveats.
 */

export const ANDROID_TV_UPDATED = "2026-11-02";

export const ANDROID_TV_IMAGES = {
  hero: {
    src: "/images/geraete/android-tv-box/iptv-android-tv-box-einrichten.svg",
    width: 1200,
    height: 900,
    alt: "Illustration ohne Herstellerlogos: Fernseher mit App-Oberfläche in Kachelreihen, davor eine flache Android-TV-Box auf dem Lowboard, per LAN-Kabel mit dem Router verbunden, dazu eine Fernbedienung und die Stichworte Play Store, M3U und Xtream sowie 4K und LAN",
  },
  platforms: {
    src: "/images/geraete/android-tv-box/android-tv-google-tv-vergleich.svg",
    width: 1200,
    height: 820,
    alt: "Vergleichsgrafik: Android TV mit App-Reihen und Play Store, Google TV als neuere Oberfläche mit demselben Play Store und nicht zertifizierte Android-Boxen ohne lizenzierten Play Store, darunter der Menüweg zur Prüfung der Play-Protect-Zertifizierung",
  },
  buying: {
    src: "/images/geraete/android-tv-box/android-tv-box-kaufkriterien.svg",
    width: 1200,
    height: 840,
    alt: "Kaufkriterien für eine Android TV Box als Richtwerte: Arbeitsspeicher mindestens 2 GB, besser 3 bis 4 GB; Speicher mindestens 8 GB, besser 16 GB; 4K mit HDMI 2.0, HDCP 2.2 und H.265; LAN-Anschluss und 5-GHz-WLAN; Play-Protect-Zertifizierung",
  },
  setup: {
    src: "/images/geraete/android-tv-box/iptv-android-tv-einrichtung-ablauf.svg",
    width: 1200,
    height: 700,
    alt: "Ablaufgrafik mit fünf Stationen zur IPTV-Einrichtung auf Android TV: Play Store öffnen, IPTV-Player installieren, Zugang M3U oder Xtream Codes wählen, EPG-Adresse hinterlegen, Sender prüfen und Favoriten anlegen",
  },
  access: {
    src: "/images/geraete/android-tv-box/m3u-oder-xtream-codes-android-tv.svg",
    width: 1200,
    height: 800,
    alt: "Vergleich M3U und Xtream Codes: links eine M3U-Adresse mit Beispielauszug aus der Playlist und separater EPG-Adresse, rechts die Anmeldung mit Server, Benutzername und Passwort, nach der der Player Kategorien, Sender und EPG lädt, unten eine Gegenüberstellung von Eingabe, EPG und Aktualisierung",
  },
  network: {
    src: "/images/geraete/android-tv-box/iptv-android-tv-lan-oder-wlan.svg",
    width: 1200,
    height: 760,
    alt: "Schematisches Diagramm der Datenrate über die Zeit: LAN bleibt gleichmäßig, 5-GHz-WLAN schwankt leicht, 2,4-GHz-WLAN fällt mehrfach unter die für einen 4K-Stream benötigte Datenrate und verursacht Puffern, darunter Tipps zu Kabel, Frequenzband und Router-Abstand",
  },
} as const;

export const tocItems = [
  { id: "grundlagen", label: "Was ist eine Android TV Box?" },
  { id: "plattformen", label: "Android TV, Google TV & Co." },
  { id: "kaufberatung", label: "Worauf beim Kauf achten?" },
  { id: "voraussetzungen", label: "Voraussetzungen" },
  { id: "zugangsarten", label: "M3U und Xtream Codes" },
  { id: "einrichtung", label: "Einrichtung Schritt für Schritt" },
  { id: "apps", label: "IPTV-Player im Überblick" },
  { id: "einstellungen", label: "Wichtige Player-Einstellungen" },
  { id: "performance", label: "4K, LAN und Performance" },
  { id: "fehler", label: "Fehlerbehebung" },
  { id: "sicherheit", label: "Sicherheit & Rechtliches" },
  { id: "faq", label: "Häufige Fragen" },
];

export const heroSpecs = [
  { label: "Plattform", value: "Android TV / Google TV" },
  { label: "App-Quelle", value: "Google Play Store" },
  { label: "Zugangsarten", value: "M3U, Xtream Codes" },
  { label: "Empfohlen", value: "LAN-Kabel" },
];

export const keyFacts = [
  { title: "Zertifizierte Box wählen", text: "Nur Play-Protect-zertifizierte Geräte haben einen lizenzierten Play Store und erhalten verlässlich Updates." },
  { title: "Player statt Senderpaket", text: "Ein IPTV-Player ist nur die Abspiel-Software. Die Inhalte kommen von Ihrem Anbieter – per M3U oder Xtream Codes." },
  { title: "Netzwerk vor Leistung", text: "Puffern liegt häufiger am WLAN als an der Box. Ein LAN-Kabel ist die zuverlässigste Verbesserung." },
  { title: "4K braucht die ganze Kette", text: "Box, HDMI-Kabel, Fernseher-Anschluss, Stream und Bandbreite müssen 4K unterstützen." },
];

/* ---------------------------------------------------------------- Grundlagen */

export const basicsIntro = [
  "Eine Android TV Box ist ein kleiner Zuspieler, den Sie per HDMI an den Fernseher anschließen. Sie bringt ein für die Fernbedienung optimiertes Betriebssystem mit, den Zugang zum Google Play Store und genug Leistung für Streaming-Apps. Damit wird auch ein älterer Fernseher ohne passende Apps IPTV-tauglich.",
  "Für IPTV ist die Plattform besonders interessant, weil im Play Store mehrere ausgereifte IPTV-Player angeboten werden – deutlich mehr als in den Stores vieler Smart TVs. Wenn Sie IPTV auf einer Android TV Box einrichten, wählen Sie also nicht nur ein Gerät, sondern auch die Player-App, die am besten zu Ihrem Zugang passt.",
];

export const platformTable = {
  headers: ["Merkmal", "Android TV", "Google TV", "Nicht zertifizierte Android-Box"],
  rows: [
    ["Oberfläche", "App-Reihen auf dem Startbildschirm", "Empfehlungen und Tabs, baut auf Android TV auf", "Meist Smartphone-Android mit eigenem Launcher"],
    ["Google Play Store", "Ja, bei zertifizierten Geräten", "Ja", "Nicht lizenziert oder nachträglich installiert"],
    ["IPTV-Player", "Große Auswahl im Play Store", "Gleiche Auswahl wie Android TV", "Oft über APK-Dateien unklarer Herkunft"],
    ["Sicherheitsupdates", "Vom Hersteller, je nach Modell", "Vom Hersteller, je nach Modell", "Häufig ungewiss oder gar nicht"],
  ],
  caption:
    "Google TV ist die neuere Oberfläche und nutzt technisch Android TV als Basis. Für IPTV-Player macht der Unterschied im Alltag kaum etwas aus – entscheidend ist die Zertifizierung.",
};

export const certSteps = [
  "Öffnen Sie den Google Play Store auf der Box.",
  "Wählen Sie oben rechts Ihr Profilsymbol und dann „Einstellungen“.",
  "Öffnen Sie „Info“ und prüfen Sie den Eintrag „Play Protect-Zertifizierung“. Bei zertifizierten Geräten steht dort „Gerät ist zertifiziert“. Die Menüführung kann je nach Play-Store-Version leicht abweichen.",
];

/* ---------------------------------------------------------------- Kaufberatung */

export const buyingCriteria = [
  { title: "Arbeitsspeicher (RAM)", text: "2 GB sind das Minimum. Mit 3 bis 4 GB bleiben große Senderlisten und die Programmzeitschrift spürbar flüssiger." },
  { title: "Interner Speicher", text: "8 GB reichen knapp. Mit 16 GB oder mehr bleibt Platz für Player, Senderlogos, EPG-Cache und Updates." },
  { title: "Prozessor und Decoder", text: "Wichtiger als die reine Taktrate ist ein Hardware-Decoder für H.265 (HEVC), bei neueren Geräten auch AV1." },
  { title: "4K und HDR", text: "Für 4K braucht die Box HDMI 2.0 oder neuer und HDCP 2.2 – ebenso der genutzte HDMI-Eingang des Fernsehers." },
  { title: "LAN und WLAN", text: "Ein Ethernet-Anschluss ist für IPTV Gold wert. Beim WLAN sollte mindestens 5 GHz unterstützt werden, Wi-Fi 6 ist ein Plus." },
  { title: "Zertifizierung und Updates", text: "Play Protect zertifiziert, aktuelle Android-TV-Version und ein Hersteller, der Updates liefert – das schützt vor Schadsoftware." },
];

export const buyingNote =
  "Die Werte sind Richtwerte aus der Praxis, keine Herstellervorgaben. Wie flüssig ein Player läuft, hängt auch von der App, der Größe Ihrer Playlist und der Netzwerkverbindung ab.";

/* ---------------------------------------------------------------- Voraussetzungen */

export const requirements = [
  "Eine Android-TV- oder Google-TV-Box mit aktueller Software und Google-Konto",
  "Freier HDMI-Eingang am Fernseher, für 4K einer mit HDMI 2.0 und HDCP 2.2",
  "Internetzugang, idealerweise per LAN-Kabel – rund 10 Mbit/s für Full HD und etwa 25 Mbit/s für 4K pro Stream",
  "Ihre Zugangsdaten: M3U-Adresse oder Xtream-Codes-Daten, optional eine EPG-Adresse (XMLTV)",
  "Ein IPTV-Player aus dem Google Play Store, der Ihre Zugangsart unterstützt",
];

/* ---------------------------------------------------------------- Zugangsarten */

export const accessIntro = [
  "Bevor Sie einen Player einrichten, klären Sie, in welcher Form Ihr Anbieter die Zugangsdaten liefert. Die beiden verbreitetsten Varianten sind die M3U-Playlist und Xtream Codes. Beide führen zum selben Ziel, unterscheiden sich aber bei der Eingabe und bei der Programmzeitschrift.",
  "Eine M3U-Playlist ist eine Textliste. Jeder Eintrag enthält Sendername, Gruppe, eine Kennung für die Programmzeitschrift (tvg-id) und die Stream-Adresse. Bei Xtream Codes meldet sich der Player dagegen mit Server, Benutzername und Passwort an und erhält Senderliste und EPG direkt vom Server.",
];

export const accessTips = [
  { title: "Wenn beides möglich ist", text: "Xtream Codes sind am Fernseher meist bequemer: kürzere Eingaben, EPG oft automatisch, Änderungen der Senderliste kommen ohne Neuladen an." },
  { title: "Wenn nur M3U vorliegt", text: "Hinterlegen Sie zusätzlich die EPG-Adresse und stellen Sie ein, wie oft die Liste aktualisiert wird – etwa bei jedem Start oder täglich." },
  { title: "Eingabe erleichtern", text: "Viele Boxen lassen sich mit der Google-TV-App auf dem Smartphone bedienen. Darüber tippen Sie lange Adressen per Handytastatur ein." },
];

/* ---------------------------------------------------------------- Einrichtung */

export const setupSteps = [
  "Schließen Sie die Box per HDMI an, verbinden Sie sie per LAN-Kabel mit dem Router und melden Sie sich mit Ihrem Google-Konto an.",
  "Installieren Sie unter Einstellungen › System die verfügbaren Updates (der genaue Menüpunkt hängt vom Hersteller ab).",
  "Öffnen Sie den Google Play Store, suchen Sie nach dem gewünschten IPTV-Player und installieren Sie ihn.",
  "Starten Sie den Player und wählen Sie „Playlist hinzufügen“ oder einen vergleichbaren Menüpunkt.",
  "Wählen Sie die Zugangsart: M3U-Adresse eintragen oder Xtream Codes mit Server, Benutzername und Passwort.",
  "Tragen Sie bei M3U die EPG-Adresse ein. Bei Xtream Codes lädt der Player die Programmdaten meist selbst.",
  "Warten Sie, bis Senderliste und EPG vollständig geladen sind. Testen Sie danach Sender aus mehreren Gruppen.",
  "Legen Sie Favoriten an und blenden Sie Gruppen aus, die Sie nicht nutzen.",
];

/* ---------------------------------------------------------------- Apps */

export const players = [
  {
    name: "TiviMate",
    tag: "Für Android TV entwickelt",
    text: "Ein verbreiteter IPTV-Player mit Programmzeitschrift im Rasterlayout, wie man sie von Receivern kennt. TiviMate ist laut Play Store für Android-TV-Geräte gedacht; auf Smartphones wird er nicht angeboten.",
    points: ["M3U und Xtream Codes", "EPG im Raster, Favoritenlisten", "Einige Funktionen nur mit kostenpflichtigem Premium-Abo"],
  },
  {
    name: "Kodi + PVR IPTV Simple Client",
    tag: "Kostenlos und quelloffen",
    text: "Kodi ist ein Mediacenter, das im Play Store erhältlich ist. Die IPTV-Funktion steckt im offiziellen Add-on „PVR IPTV Simple Client“, das M3U-Playlists und XMLTV-Programmdaten einbindet.",
    points: ["M3U und XMLTV", "Sehr anpassbar, keine Kosten", "Einrichtung etwas aufwendiger"],
  },
  {
    name: "VLC media player",
    tag: "Zum Testen",
    text: "VLC spielt M3U-Playlists direkt ab und eignet sich gut, um zu prüfen, ob eine Adresse überhaupt funktioniert. Eine komfortable Programmzeitschrift bietet VLC nicht.",
    points: ["M3U-Playlists", "Schnelle Gegenprobe", "Kein Raster-EPG"],
  },
];

export const playersNote =
  "Die genannten Apps sind Beispiele für verbreitete Player, keine Empfehlung für jedes Gerät. Ob eine App im Play Store Ihrer Box erscheint, hängt von Android-Version, Gerätetyp und Region ab. Funktionsumfang und Preise legt allein der Entwickler fest und kann sie ändern.";

export const kodiSteps = [
  "Installieren Sie Kodi aus dem Google Play Store und starten Sie es.",
  "Öffnen Sie Add-ons › Aus Repository installieren › PVR-Clients › PVR IPTV Simple Client und installieren Sie das Add-on.",
  "Öffnen Sie „Konfigurieren“ und tragen Sie unter „Allgemein“ die M3U-Playlist-URL ein.",
  "Hinterlegen Sie unter „EPG-Einstellungen“ die XMLTV-Adresse.",
  "Starten Sie Kodi neu. Die Sender finden Sie danach im Hauptmenü unter „TV“.",
];

/* ---------------------------------------------------------------- Einstellungen */

export const playerSettings = {
  headers: ["Einstellung", "Wofür sie gut ist", "Empfehlung"],
  rows: [
    ["Puffergröße", "Überbrückt kurze Schwankungen der Verbindung", "Bei Puffern schrittweise erhöhen; der Start dauert dann etwas länger"],
    ["Video-Decoder", "Hardware-Decoder entlastet die Box", "Standard: Hardware. Bei Bildfehlern testweise Software wählen"],
    ["Bildwiederholrate anpassen", "Gleicht die Ausgabe an 50-Hz-Sender an", "Aktivieren, wenn Bewegungen ruckeln – falls Box und Player es anbieten"],
    ["EPG-Aktualisierung", "Hält die Programmzeitschrift aktuell", "Täglich bzw. beim Start; bei großen Listen nicht zu häufig"],
    ["EPG-Zeitversatz", "Korrigiert verschobene Sendezeiten", "Nur anpassen, wenn das Programm konstant verschoben ist"],
    ["Gruppen und Favoriten", "Verkürzt Listen und Ladezeiten", "Ungenutzte Gruppen ausblenden, Favoriten anlegen"],
  ],
  caption: "Bezeichnungen und Verfügbarkeit der Optionen unterscheiden sich je nach Player-App.",
};

/* ---------------------------------------------------------------- Performance */

export const performanceCards = [
  { title: "Full HD oder 4K?", text: "Full HD braucht rund 10 Mbit/s pro Stream, 4K etwa 25 Mbit/s. Liefert Ihr Anbieter einen Sender nur in Full HD, wird er auch auf einer 4K-Box nicht schärfer." },
  { title: "RAM und große Playlists", text: "Tausende Einträge und eine Woche EPG belegen Arbeitsspeicher. Bei wenig RAM helfen ausgeblendete Gruppen und ein kürzerer EPG-Zeitraum." },
  { title: "2,4 GHz oder 5 GHz", text: "2,4 GHz reicht weiter, ist aber oft überlastet. 5 GHz liefert mehr Tempo bei kürzerer Reichweite – im selben Raum fast immer die bessere Wahl." },
  { title: "Router-Abstand", text: "Jede Wand und jede Decke kostet Datenrate. Ein Mesh-Knoten oder Powerline-Adapter in der Nähe der Box kann helfen." },
  { title: "Puffern verstehen", text: "Der Player lädt einige Sekunden vor. Fällt die Datenrate länger unter den Bedarf, ist der Puffer leer und das Bild stockt." },
  { title: "Ladezeiten verkürzen", text: "Den ersten Start mit großer Liste vollständig abwarten. Danach beschleunigen ein lokaler EPG-Cache und weniger Gruppen das Umschalten." },
];

/* ---------------------------------------------------------------- Fehler */

export const troubleshooting = [
  { problem: "Sender laden nicht", cause: "Server vorübergehend gestört, Zugang abgelaufen oder einzelner Stream offline.", fix: "Mehrere Sender aus verschiedenen Gruppen testen, Player neu starten und den Status des Zugangs beim Anbieter prüfen." },
  { problem: "Bild friert ein", cause: "Kurze Verbindungsabbrüche oder ein überlasteter Hardware-Decoder.", fix: "Box per LAN anschließen, Puffer erhöhen und testweise den Decoder im Player wechseln." },
  { problem: "Ständiges Puffern", cause: "WLAN zu schwach, parallele Downloads im Heimnetz oder zu kleiner Puffer.", fix: "5-GHz-WLAN oder LAN nutzen, andere Geräte pausieren und als Gegenprobe den Smartphone-Hotspot testen." },
  { problem: "App stürzt ab", cause: "Veraltete App, voller Speicher oder beschädigte App-Daten.", fix: "Updates installieren, unter Einstellungen › Apps den Cache leeren und die App notfalls neu installieren." },
  { problem: "M3U-Playlist funktioniert nicht", cause: "Tippfehler, falsches Protokoll (http/https), fehlender Port oder abgelaufene Adresse.", fix: "Adresse per Copy & Paste übernehmen, in VLC am Computer gegenprüfen und Port sowie Protokoll kontrollieren." },
  { problem: "Xtream-Daten werden abgelehnt", cause: "Server-URL ohne Port oder mit falschem Pfad, Groß- und Kleinschreibung bei Benutzername oder Passwort.", fix: "Nur Server und Port eintragen (ohne /get.php), Zugangsdaten exakt übernehmen und den Kontostatus prüfen." },
  { problem: "EPG fehlt", cause: "Keine EPG-Adresse hinterlegt, Senderkennungen passen nicht oder die Daten sind veraltet.", fix: "EPG-Adresse ergänzen, Daten manuell aktualisieren und fehlende Sender im Player manuell zuordnen." },
  { problem: "4K funktioniert nicht", cause: "HDMI-Eingang oder Kabel ohne 4K/HDCP 2.2, Box-Ausgabe auf Full HD oder Stream nur in Full HD.", fix: "4K-fähigen HDMI-Eingang nutzen, ggf. erweitertes HDMI-Signal am Fernseher aktivieren und die Ausgabeauflösung der Box prüfen." },
  { problem: "WLAN ist instabil", cause: "Großer Abstand, viele Nachbarnetze auf 2,4 GHz oder Energiesparfunktionen des Routers.", fix: "Auf 5 GHz wechseln, Router freier aufstellen, WLAN-Kanal anpassen oder auf LAN bzw. Powerline umsteigen." },
];

/* ---------------------------------------------------------------- Sicherheit */

export const securityPoints = [
  { title: "Play Store bevorzugen", text: "Apps aus dem Play Store werden von Google Play Protect geprüft und automatisch aktualisiert." },
  { title: "Unbekannte APKs vermeiden", text: "Installieren Sie Apps nur dann außerhalb des Stores, wenn die Datei direkt von der offiziellen Website des Entwicklers stammt – und erlauben Sie „Unbekannte Apps“ nur vorübergehend." },
  { title: "Updates installieren", text: "System- und App-Updates schließen Sicherheitslücken. Geräte ohne Updates sollten Sie nicht dauerhaft mit dem Heimnetz verbinden." },
  { title: "Keine vorinstallierten Senderlisten", text: "Boxen, die mit „allen Sendern gratis“ oder vorinstallierten Listen beworben werden, sind ein Warnsignal – rechtlich wie technisch." },
  { title: "Berechtigungen prüfen", text: "Ein IPTV-Player braucht Netzwerkzugriff, aber keinen Zugriff auf Kontakte, Mikrofon oder Standort. Berechtigungen verwalten Sie unter Einstellungen › Apps." },
];

export const legalNote =
  "IPTV-Player wie TiviMate, Kodi oder VLC sind legale Software – vergleichbar mit einem Videoplayer. Ob die Nutzung rechtmäßig ist, hängt allein davon ab, ob die abgespielten Inhalte lizenziert sind. Mehr dazu in unserem Überblick [IPTV legal in Deutschland](/iptv-legal).";

export const verificationNote =
  "Google hat angekündigt, auf zertifizierten Android-Geräten künftig nur noch Apps von verifizierten Entwicklern zuzulassen – auch bei der Installation außerhalb des Play Stores. Die Einführung beginnt laut Berichten ab Ende September 2026 in ausgewählten Ländern. Wann und in welcher Form Deutschland und TV-Geräte betroffen sind, war bei Redaktionsschluss noch nicht abschließend bekannt.";

/* ---------------------------------------------------------------- FAQ */

export const androidTvFaq: FaqItem[] = [
  {
    question: "Welche Android TV Box eignet sich für IPTV?",
    answer:
      "Eine Play-Protect-zertifizierte Box mit Android TV oder Google TV, mindestens 2 GB Arbeitsspeicher, LAN-Anschluss oder 5-GHz-WLAN und – wenn Sie 4K nutzen möchten – HDMI 2.0 mit HDCP 2.2. Ein bestimmtes Modell empfehlen wir nicht pauschal, weil sich das Angebot laufend ändert.",
  },
  {
    question: "Ist Google TV für IPTV besser als Android TV?",
    answer:
      "Für IPTV macht es kaum einen Unterschied. Google TV ist die neuere Oberfläche und nutzt denselben Play Store. Wichtiger sind Zertifizierung, Arbeitsspeicher und Netzwerkanschluss.",
  },
  {
    question: "Wie erkenne ich, ob meine Box zertifiziert ist?",
    answer:
      "Öffnen Sie den Play Store, wählen Sie Ihr Profil › Einstellungen › Info und prüfen Sie den Eintrag „Play Protect-Zertifizierung“. Zertifizierte Geräte zeigen dort „Gerät ist zertifiziert“.",
  },
  {
    question: "Welche IPTV-App sollte ich auf Android TV verwenden?",
    answer:
      "Das hängt von Ihrem Zugang ab. Bietet Ihr Anbieter eine eigene App an, ist diese am einfachsten. Für M3U oder Xtream Codes sind Player wie TiviMate oder Kodi mit PVR IPTV Simple Client verbreitet. Prüfen Sie im Play Store, ob die App für Ihre Box angeboten wird.",
  },
  {
    question: "Soll ich M3U oder Xtream Codes verwenden?",
    answer:
      "Wenn Ihr Anbieter beides anbietet und Ihr Player Xtream Codes unterstützt, ist das meist komfortabler: kürzere Eingaben und automatische Programmdaten. M3U ist universeller und funktioniert in nahezu jedem Player.",
  },
  {
    question: "Warum funktioniert 4K auf meiner Box nicht?",
    answer:
      "Häufig unterstützt der genutzte HDMI-Eingang oder das Kabel kein 4K mit HDCP 2.2, die Box gibt nur Full HD aus oder der Sender wird gar nicht in 4K übertragen. Prüfen Sie die ganze Kette von der Box bis zum Fernseher.",
  },
  {
    question: "Reicht WLAN für IPTV auf der Android TV Box?",
    answer:
      "Bei kurzer Distanz und 5-GHz-WLAN oft ja. Für 4K, Live-Sport oder bei Puffern ist ein LAN-Kabel die stabilste Lösung. Richtwert: rund 10 Mbit/s für Full HD und etwa 25 Mbit/s für 4K pro Stream.",
  },
  {
    question: "Ist ein IPTV-Player auf Android TV legal?",
    answer:
      "Ja. Player wie TiviMate, Kodi oder VLC sind legale Software. Entscheidend ist, ob die Inhalte, die Sie damit abspielen, lizenziert sind.",
  },
];

/* ---------------------------------------------------------------- Quellen */

export const sources = [
  { label: "Google Play-Hilfe: Play-Protect-Zertifizierung prüfen", href: "https://support.google.com/android/answer/7165974" },
  { label: "Android Authority: So prüfen Sie, ob ein Android-TV-Gerät zertifiziert ist", href: "https://www.androidauthority.com/android-tv-certified-check-3330003/" },
  { label: "Android Authority: Zeitplan der Android-Entwicklerverifizierung", href: "https://www.androidauthority.com/android-developer-verification-rollout-sideloading-flow-3653395/" },
  { label: "Kodi Wiki: Add-on PVR IPTV Simple Client", href: "https://kodi.wiki/view/Add-on:PVR_IPTV_Simple_Client" },
  { label: "Digital Trends: Unterschiede zwischen Google TV und Android TV", href: "https://www.digitaltrends.com/home-theater/whats-the-difference-between-google-tv-and-android-tv/" },
];
