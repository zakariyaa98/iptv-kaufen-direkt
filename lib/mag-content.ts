import type { FaqItem } from "./faq-data";

/**
 * Copy for /geraete/mag-box (app/geraete/mag-box/page.tsx). Layout lives in the page.
 *
 * SEO focus: "IPTV auf MAG Box einrichten" plus MAG portal, MAC address, portal URL, errors and the models
 * MAG 254 / 322 / 420 / 520. /anleitungen owns the generic M3U/Xtream explanation; other device pages own
 * app-based setups and Enigma2 bouquets.
 * - Model data only from Infomir's official archive pages (checked Nov 2026); all four are listed there as
 *   discontinued. Menu paths follow the Infomir wiki and are marked as model/firmware dependent.
 * - Never ask users to publish their MAC address or portal URL.
 */

export const MAG_UPDATED = "2026-11-02";

export const MAG_IMAGES = {
  hero: {
    src: "/images/geraete/mag-box/iptv-mag-box-einrichten.svg",
    width: 1200,
    height: 900,
    alt: "Illustration ohne Herstellerlogos: Fernseher mit einer Portal-Startseite aus Kacheln für Live-TV, Favoriten, Programmführer und Einstellungen, davor eine kompakte MAG-Box, per LAN-Kabel mit dem Router verbunden, dazu eine Fernbedienung und die Stichworte Portal-URL, MAC-Adresse und LAN",
  },
  principle: {
    src: "/images/geraete/mag-box/mag-portal-prinzip.svg",
    width: 1200,
    height: 660,
    alt: "Schema des Portal-Prinzips: Die MAG-Box mit ihrer MAC-Adresse verbindet sich über die Portal-URL mit dem Portal des Anbieters, das prüft, ob die MAC-Adresse freigeschaltet ist, und dann Senderliste, Programmführer und Menü an den Fernseher liefert",
  },
  mac: {
    src: "/images/geraete/mag-box/mag-mac-adresse-finden.svg",
    width: 1200,
    height: 780,
    alt: "Zwei Wege zur MAC-Adresse: links das Typenschild auf der Unterseite der MAG-Box mit einer MAC-Adresse, die mit 00:1A:79 beginnt, rechts die Geräteinformationen im Menü der Box; darunter Hinweise zum Abschreiben, etwa dass nur die Zeichen 0 bis 9 und A bis F vorkommen",
  },
  steps: {
    src: "/images/geraete/mag-box/mag-box-einrichtung-schritte.svg",
    width: 1200,
    height: 760,
    alt: "Sieben Schritte zur Einrichtung der MAG-Box: anschließen, MAC-Adresse prüfen, Portal-URL vom Anbieter erhalten, Portal eintragen, speichern, neu starten und Portal sowie Senderliste prüfen",
  },
  methods: {
    src: "/images/geraete/mag-box/mag-portal-m3u-xtream-vergleich.svg",
    width: 1200,
    height: 780,
    alt: "Vergleich von MAG-Portal mit Portal-URL und MAC-Adresse, M3U-Playlist mit einer Playlist-Adresse und Xtream Codes mit Server, Benutzername und Passwort, jeweils mit typischem Gerät, und der Hinweis, dass es drei unterschiedliche Verfahren sind",
  },
  troubleshooting: {
    src: "/images/geraete/mag-box/mag-box-fehlersuche.svg",
    width: 1200,
    height: 760,
    alt: "Fehlersuche an der MAG-Box in vier Stationen – Netzwerk, Portal, Sender und EPG – mit Prüffragen und einer Legende, ob die Ursache am Gerät, im Heimnetz, beim Portal oder Server, beim Anbieter oder bei einem einzelnen Sender liegt",
  },
} as const;

export const tocItems = [
  { id: "grundlagen", label: "Was ist eine MAG Box?" },
  { id: "voraussetzungen", label: "Voraussetzungen" },
  { id: "einrichtung", label: "Einrichtung in 7 Schritten" },
  { id: "portal-mac", label: "Portal und MAC-Adresse" },
  { id: "modelle", label: "MAG 254, 322, 420 und 520" },
  { id: "verfahren", label: "Portal, M3U oder Xtream?" },
  { id: "netzwerk", label: "Netzwerk und Streaming" },
  { id: "fehler", label: "MAG Box Fehler beheben" },
  { id: "firmware", label: "Firmware und Updates" },
  { id: "sicherheit", label: "Sicherheit & Rechtliches" },
  { id: "faq", label: "Häufige Fragen" },
];

export const heroFacts = [
  { label: "Anmeldung", value: "Portal-URL + MAC-Adresse" },
  { label: "Apps", value: "Kein App-Store nötig" },
  { label: "Empfohlen", value: "LAN-Kabel" },
];

/* ---------------------------------------------------------------- Grundlagen */

export const basicsIntro = [
  "Eine MAG Box ist ein spezieller IPTV-Empfänger des Herstellers Infomir. Sie wird per HDMI an den Fernseher angeschlossen und mit einer Fernbedienung bedient – ähnlich wie ein klassischer Sat-Receiver. Anders als ein Smart TV oder ein Streaming-Stick ist sie ganz auf IPTV ausgerichtet.",
  "Das Besondere ist das Portal-Prinzip: Statt eine App zu installieren, tragen Sie eine Portal-Adresse ein. Die Box meldet sich dort mit ihrer MAC-Adresse an. Hat Ihr Anbieter genau diese MAC-Adresse freigeschaltet, liefert das Portal Menü, Senderliste und Programmführer direkt auf den Fernseher.",
];

export const principleCards = [
  { title: "Die Portal-URL", text: "Eine Internetadresse, unter der das Portal Ihres Anbieters erreichbar ist. Sie sagt der Box, wohin sie sich verbinden soll." },
  { title: "Die MAC-Adresse", text: "Eine feste Hardware-Kennung Ihrer Box. Das Portal erkennt daran, ob dieses Gerät Zugriff hat – Benutzername und Passwort entfallen." },
  { title: "Kein App-Store", text: "Oberfläche, Senderliste und EPG kommen vom Portal. Deshalb braucht die Box für IPTV normalerweise keinen App-Store und keine Player-App." },
];

export const deviceComparison = {
  headers: ["", "MAG Box", "Android TV Box / Fire TV Stick", "Smart TV"],
  rows: [
    ["Einrichtung", "Portal-URL im Menü eintragen", "IPTV-Player aus dem Store installieren", "App aus dem Store des Fernsehers"],
    ["Anmeldung", "MAC-Adresse der Box", "M3U, Xtream Codes oder Anbieter-App", "M3U, Xtream Codes oder Anbieter-App"],
    ["Bedienung", "Wie ein Receiver", "Je nach App", "Je nach App"],
    ["Weitere Apps", "Sehr eingeschränkt", "Große Auswahl", "Abhängig vom Hersteller"],
  ],
  caption: "Funktionen unterscheiden sich je nach Modell, Firmware und Anbieter.",
};

/* ---------------------------------------------------------------- Voraussetzungen */

export const requirements = [
  { title: "HDMI-Verbindung", text: "Ein freier HDMI-Eingang am Fernseher. Für 4K-Modelle sollte der Eingang 4K unterstützen." },
  { title: "Stromversorgung", text: "Das mitgelieferte Netzteil verwenden. Eine stabile Stromversorgung ist vor allem bei Firmware-Updates wichtig." },
  { title: "Internetverbindung", text: "Rund 10 Mbit/s für einen Full-HD-Stream und etwa 25 Mbit/s für 4K – je gleichzeitigem Stream." },
  { title: "LAN oder WLAN", text: "Ein LAN-Kabel ist am stabilsten. WLAN haben nur bestimmte Modellvarianten eingebaut oder es wird über einen USB-Adapter nachgerüstet." },
  { title: "MAC-Adresse", text: "Steht auf dem Aufkleber der Box und im Menü. Ihr Anbieter braucht sie, um die Box freizuschalten." },
  { title: "Portal-URL", text: "Die Adresse erhalten Sie von Ihrem Anbieter. Ohne sie zeigt die Box nur ihr eingebautes Menü." },
];

export const backupNote =
  "Notieren Sie vor Änderungen die aktuell eingetragenen Portal-Adressen und Netzwerkeinstellungen – am besten per Foto vom Bildschirm. So kehren Sie jederzeit zum alten Stand zurück. Bewahren Sie die Notiz privat auf: Portal-URL und MAC-Adresse gehören zu Ihrem Zugang.";

/* ---------------------------------------------------------------- Einrichtung */

export const setupSteps = [
  {
    title: "MAG Box mit Fernseher und Internet verbinden",
    text: "Schließen Sie die Box per HDMI an den Fernseher an, verbinden Sie sie per LAN-Kabel mit dem Router und stecken Sie zuletzt das Netzteil ein. Wählen Sie am Fernseher den passenden HDMI-Eingang.",
  },
  {
    title: "MAC-Adresse finden und kontrollieren",
    text: "Lesen Sie die MAC-Adresse vom Aufkleber ab und vergleichen Sie sie mit der Anzeige im Menü, etwa unter den Geräte- oder Systeminformationen. Die Bezeichnung hängt von Modell und Firmware ab.",
  },
  {
    title: "Portal-Adresse vom Anbieter erhalten",
    text: "Teilen Sie Ihrem Anbieter die MAC-Adresse über den vorgesehenen, privaten Weg mit. Er schaltet die Box frei und nennt Ihnen die Portal-URL.",
  },
  {
    title: "Portal im Menü eintragen",
    text: "Öffnen Sie die Einstellungen (je nach Fernbedienung über die Taste SET oder das Menü) und wählen Sie Systemeinstellungen › Server › Portale. Tragen Sie bei „Portal 1“ einen Namen und die URL exakt ein.",
  },
  {
    title: "Einstellungen speichern",
    text: "Bestätigen Sie die Eingabe. Ist die Adresse formal fehlerhaft, zeigt die Box beim Speichern meist eine Warnung – lesen Sie diese genau.",
  },
  {
    title: "MAG Box neu starten",
    text: "Starten Sie das Portal über Systemeinstellungen › Portal neu starten neu oder starten Sie die ganze Box über das Menü neu. Ziehen Sie dafür nicht einfach den Stecker.",
  },
  {
    title: "Portal und Senderliste prüfen",
    text: "Die Box sollte nun das Portal Ihres Anbieters laden. Testen Sie mehrere Sender aus verschiedenen Kategorien und öffnen Sie den Programmführer.",
  },
];

export const setupNote =
  "Die Menüwege folgen der Dokumentation von Infomir. Je nach Modell, Firmware und Software-Version des Anbieters können Bezeichnungen abweichen oder einzelne Menüs ausgeblendet sein.";

/* ---------------------------------------------------------------- Portal & MAC */

export const macFacts = [
  { title: "Was ist die MAC-Adresse?", text: "Eine weltweit eindeutige Kennung der Netzwerkschnittstelle, bestehend aus sechs Zeichenpaaren wie 00:1A:79:XX:XX:XX. Bei vielen MAG-Boxen beginnt sie mit 00:1A:79." },
  { title: "Wo finde ich sie?", text: "Auf dem Aufkleber an der Unter- oder Rückseite der Box und im Menü unter den Geräteinformationen. Bei Modellen mit WLAN kann das Menü zusätzlich eine WLAN-MAC zeigen – fragen Sie Ihren Anbieter, welche Adresse er braucht." },
  { title: "Warum wird sie benötigt?", text: "Das Portal identifiziert Ihre Box über die MAC-Adresse. Nur freigeschaltete Adressen erhalten Zugriff – sie ersetzt quasi Benutzername und Passwort." },
  { title: "Was ist die Portal-URL?", text: "Die Internetadresse des Portals. Sie beginnt in der Regel mit http:// oder https:// und muss Zeichen für Zeichen so eingetragen werden, wie der Anbieter sie nennt." },
];

export const macVsUrl = {
  headers: ["", "MAC-Adresse", "Portal-URL"],
  rows: [
    ["Woher?", "Von Ihrer Box (Aufkleber, Menü)", "Von Ihrem Anbieter"],
    ["Wohin?", "Sie geben sie dem Anbieter", "Sie tragen sie in die Box ein"],
    ["Wozu?", "Identifiziert Ihr Gerät", "Zeigt der Box, wo das Portal liegt"],
    ["Änderbar?", "Fest an die Hardware gebunden", "Kann sich ändern, wenn der Anbieter es mitteilt"],
  ],
};

export const typos = [
  "Buchstabe „O“ statt Ziffer 0 – in einer MAC-Adresse gibt es nur 0–9 und A–F",
  "Fehlende oder zusätzliche Doppelpunkte zwischen den Zeichenpaaren",
  "Vertauschte Zeichen wie 8 und B, wenn der Aufkleber schwer lesbar ist",
  "Bei der Portal-URL: http statt https (oder umgekehrt), fehlender Port oder fehlender Schrägstrich am Ende",
  "Leerzeichen am Anfang oder Ende der URL",
];

export const notActivatedSteps = [
  "MAC-Adresse im Menü der Box mit der Adresse vergleichen, die Sie dem Anbieter genannt haben.",
  "Dem Anbieter die korrekte Adresse erneut über den privaten Kontaktweg mitteilen – nicht in Foren oder Kommentaren.",
  "Nach der Bestätigung das Portal neu starten. Hilft das nicht, die Box komplett neu starten.",
];

/* ---------------------------------------------------------------- Modelle */

export const modelTable = {
  headers: ["Modell", "Status laut Infomir", "Max. Auflösung", "HEVC (H.265)", "WLAN", "Anschlüsse"],
  rows: [
    ["MAG 254", "Archiv · älteres Modell", "1080p (Full HD)", "Im Datenblatt nicht aufgeführt", "Nur Variante w1 oder per USB-Adapter", "LAN 100 Mbit/s, HDMI 1.4"],
    ["MAG 322", "Archiv", "1080p (Full HD)", "Ja, bis 1080p (laut Datenblatt optional)", "Nur MAG322w1", "LAN 100 Mbit/s, HDMI 1.4"],
    ["MAG 420", "Archiv", "2160p (4K)", "Ja, bis 4K", "Nur MAG420w1", "LAN 100 Mbit/s, HDMI 2.0"],
    ["MAG 520", "Archiv", "2160p (4K), HDR", "Ja, bis 4K", "Nur MAG520w3 (Dualband)", "LAN 100 Mbit/s, HDMI 2.1"],
  ],
  caption:
    "Quelle: Produktseiten im Archiv von Infomir (Stand: November 2026). Alle vier Modelle stehen dort im Bereich der nicht mehr produzierten Geräte. Firmware-Stände und Funktionen können je nach Modell, Variante und Anbieter abweichen.",
};

export const modelNotes = [
  { title: "MAG 254 IPTV", text: "Ein älteres Full-HD-Modell. Für H.264-Streams in HD weiterhin nutzbar, laut Datenblatt aber ohne HEVC – moderne, effizient komprimierte Streams können daran scheitern." },
  { title: "MAG 322 IPTV", text: "Full HD mit HEVC-Unterstützung laut Datenblatt. Eine solide Wahl, wenn 4K keine Rolle spielt." },
  { title: "MAG 420 IPTV", text: "4K-Modell mit HEVC und HDMI 2.0. Für 4K brauchen auch Fernseher, Kabel und Stream die passende Unterstützung." },
  { title: "MAG 520 IPTV", text: "4K mit HDR und HDMI 2.1, laut Datenblatt mit 1 GB Arbeitsspeicher. Das leistungsstärkste der vier Modelle." },
];

/* ---------------------------------------------------------------- Verfahren */

export const methodTable = {
  headers: ["Methode", "Typisches Gerät", "Prinzip"],
  rows: [
    ["MAG-Portal", "MAG Box", "Portal-URL + MAC-Adresse"],
    ["M3U", "Android TV, Smart TV, andere Player", "Playlist-Adresse"],
    ["Xtream Codes", "Viele IPTV-Player", "Server + Benutzername + Passwort"],
  ],
};

export const methodNote =
  "Eine klassische MAG-Portal-Einrichtung ist ein eigenes Verfahren. Eine M3U-Adresse oder Xtream-Codes-Daten lassen sich nicht einfach als Portal-URL eintragen – und umgekehrt. Nutzen Sie die Zugangsart, die Ihr Anbieter ausdrücklich für MAG-Boxen bereitstellt.";

/* ---------------------------------------------------------------- Netzwerk */

export const networkCards = [
  { title: "LAN statt WLAN", text: "Eine MAG Box steht fest am Fernseher – ideal für ein Kabel. LAN liefert gleichmäßige Datenraten ohne Funkstörungen." },
  { title: "Router-Entfernung", text: "Ohne Kabel zählt jeder Meter: Wände, Decken und Nachbarnetze bremsen WLAN. Powerline oder ein Mesh-Knoten mit LAN-Anschluss helfen." },
  { title: "Instabiles WLAN", text: "Bricht das Bild zu bestimmten Zeiten ab, liegt es oft an Störungen im Funknetz. Ein anderer Kanal oder 5 GHz (falls unterstützt) kann helfen." },
  { title: "Neustart in Reihenfolge", text: "Erst den Router neu starten und warten, bis das Internet wieder läuft, dann die MAG Box. So erhält sie sauber eine neue Verbindung." },
  { title: "Internetgeschwindigkeit", text: "Richtwerte pro Stream: rund 10 Mbit/s für Full HD, etwa 25 Mbit/s für 4K. Laufen parallel Downloads oder weitere Streams, steigt der Bedarf." },
  { title: "Puffern und Aussetzer", text: "Fällt die Datenrate kurz unter den Bedarf, leert sich der Puffer und das Bild stockt. Ein stabiles Netz ist wichtiger als ein schneller Tarif." },
  { title: "Umschaltzeiten", text: "Beim Umschalten muss jeder Stream neu starten. Ein bis zwei Sekunden sind normal; deutlich längere Zeiten deuten auf Netz- oder Serverprobleme hin." },
];

/* ---------------------------------------------------------------- Fehler */

export const errorTable = {
  headers: ["Problem", "Bereich", "Mögliche Ursache", "Lösung"],
  rows: [
    ["Portal wird nicht geladen", "Netzwerk / Portal", "Keine Internetverbindung, Tippfehler in der URL oder Server gestört", "Netzwerk im Menü prüfen, URL vergleichen, später erneut versuchen"],
    ["Authentifizierung fehlgeschlagen", "Anbieter", "MAC-Adresse nicht oder falsch hinterlegt, Zugang abgelaufen", "MAC abgleichen und beim Anbieter bestätigen lassen"],
    ["MAC-Adresse nicht freigeschaltet", "Anbieter", "Freischaltung noch nicht erfolgt oder falsche MAC übermittelt", "Korrekte MAC erneut senden, nach Bestätigung Portal neu starten"],
    ["Portal-URL falsch", "Gerät (Eingabe)", "Protokoll, Port oder Schrägstrich fehlt, Leerzeichen", "URL Zeichen für Zeichen mit der Vorgabe des Anbieters vergleichen"],
    ["Endlos-Ladebildschirm", "Portal / Gerät", "Portal antwortet nicht, veraltete Firmware oder Netzwerkproblem", "Router und Box neu starten, LAN testen, Firmware prüfen"],
    ["Sender bleiben schwarz", "Portal / Anbieter", "Störung beim Anbieter oder Zugang eingeschränkt", "Mehrere Sender testen, Status beim Anbieter erfragen"],
    ["Einzelne Sender funktionieren nicht", "Einzelner Sender", "Stream dieses Senders gestört oder Format nicht unterstützt", "Später erneut versuchen, Störung dem Anbieter melden"],
    ["Bild friert ein", "Netzwerk", "Kurze Verbindungsabbrüche, WLAN-Störungen", "LAN verwenden, Router-Abstand verkürzen"],
    ["Buffering", "Netzwerk / Server", "Zu geringe oder schwankende Bandbreite, ausgelasteter Server", "Andere Geräte pausieren, zu anderen Tageszeiten testen"],
    ["Netzwerkverbindung verloren", "Netzwerk", "Kabel lose, Router-Neustart, WLAN-Signal zu schwach", "Kabel und Port prüfen, Box nach dem Router neu starten"],
    ["EPG fehlt", "Portal / Anbieter", "Keine Programmdaten im Portal oder Zeitzone falsch", "Zeitzone in den Einstellungen prüfen, Anbieter informieren"],
    ["Box reagiert langsam", "Gerät", "Ältere Hardware, lange Laufzeit ohne Neustart, sehr große Senderlisten", "Box neu starten, Favoriten statt kompletter Liste nutzen"],
    ["Firmware-Update schlägt fehl", "Gerät / Netzwerk", "Verbindungsabbruch oder falsche Update-Datei", "Per LAN erneut versuchen, nur Dateien für Ihr Modell verwenden"],
  ],
};

export const errorAreas = [
  { label: "Gerät", text: "Eingabe, Firmware oder Hardware der Box" },
  { label: "Netzwerk", text: "Router, Kabel, WLAN oder Internetanschluss" },
  { label: "Portal/Server", text: "Erreichbarkeit und Antwort des Portals" },
  { label: "Anbieter", text: "Freischaltung, Zugang, Vertragsstatus" },
  { label: "Einzelner Sender", text: "Nur ein Kanal betroffen, Rest läuft" },
];

/* ---------------------------------------------------------------- Firmware */

export const firmwareCards = [
  { title: "Warum aktualisieren?", text: "Firmware-Updates können Fehler beheben, die Kompatibilität mit Portalen verbessern und Sicherheitslücken schließen." },
  { title: "Wo finde ich die Funktion?", text: "Meist in den Systemeinstellungen unter einem Punkt wie „Software-Update“. Menü und Update-Weg – über das Internet oder per USB – hängen von Modell und Firmware ab." },
  { title: "Nie unterbrechen", text: "Während eines Updates darf weder der Strom getrennt noch die Box ausgeschaltet werden. Ein Abbruch kann die Box unbrauchbar machen." },
  { title: "Vorher sichern", text: "Notieren Sie Portal-Adressen und Einstellungen. Nach größeren Updates kann es nötig sein, sie neu einzutragen." },
];

export const firmwareNote =
  "Installieren Sie nur Firmware, die Infomir oder Ihr Anbieter ausdrücklich für Ihr Modell bereitstellt. Einige Anbieter liefern eigene Software-Versionen aus, in denen Menüs oder Update-Funktionen anders aussehen.";

/* ---------------------------------------------------------------- Sicherheit */

export const securityPoints = [
  { title: "MAC-Adresse privat halten", text: "Die MAC-Adresse ist Ihr Zugangsschlüssel. Veröffentlichen Sie sie nicht in Foren, Kommentaren oder auf Fotos." },
  { title: "Portal-URL nicht teilen", text: "Die Portal-Adresse gehört zu Ihrem Zugang. Geben Sie sie nur an Personen weiter, die Ihnen bei der Einrichtung helfen sollen." },
  { title: "Gebrauchte Boxen", text: "Bei gebrauchten Geräten alte Portale entfernen und die Einstellungen prüfen. Ein Zurücksetzen auf Werkseinstellungen löscht alle Einträge." },
];

export const legalNote =
  "Die MAG Box selbst ist ein legales Gerät. Ob die Nutzung rechtmäßig ist, hängt davon ab, ob die Inhalte im Portal lizenziert sind. Mehr dazu unter [IPTV legal in Deutschland](/iptv-legal).";

/* ---------------------------------------------------------------- FAQ */

export const magFaq: FaqItem[] = [
  {
    question: "Wo trage ich das Portal auf der MAG Box ein?",
    answer:
      "Laut Infomir unter Systemeinstellungen › Server › Portale. Dort tragen Sie bei „Portal 1“ einen Namen und die URL ein. Je nach Modell und Firmware können die Bezeichnungen leicht abweichen.",
  },
  {
    question: "Wo finde ich die MAC-Adresse meiner MAG Box?",
    answer:
      "Auf dem Aufkleber an der Unter- oder Rückseite der Box und im Menü unter den Geräte- bzw. Systeminformationen. Bei vielen MAG-Boxen beginnt sie mit 00:1A:79.",
  },
  {
    question: "Kann ich eine M3U-Playlist auf der MAG Box nutzen?",
    answer:
      "Die MAG Box ist für das Portal-Verfahren gebaut. Eine M3U-Adresse ist keine Portal-URL und lässt sich nicht einfach dort eintragen. Nutzen Sie den Zugang, den Ihr Anbieter für MAG-Boxen vorsieht.",
  },
  {
    question: "Was bedeutet „Authentifizierung fehlgeschlagen“?",
    answer:
      "Meist ist die MAC-Adresse beim Anbieter nicht oder falsch hinterlegt oder der Zugang ist abgelaufen. Vergleichen Sie die MAC im Menü mit der übermittelten Adresse und wenden Sie sich an Ihren Anbieter.",
  },
  {
    question: "Kann ich mehrere Portale speichern?",
    answer:
      "Ja. Im normalen Modus sind laut Infomir ein bis zwei Portale vorgesehen, im Multiportal-Modus bis zu acht. Beim Start wählen Sie dann das gewünschte Portal.",
  },
  {
    question: "Welche MAG Box eignet sich für 4K?",
    answer:
      "Von den hier verglichenen Modellen unterstützen MAG 420 und MAG 520 laut Datenblatt 4K und HEVC. MAG 254 und MAG 322 sind auf Full HD ausgelegt.",
  },
  {
    question: "Brauche ich WLAN in der MAG Box?",
    answer:
      "Nicht unbedingt. Viele Modelle haben WLAN nur in bestimmten Varianten. Für eine stationäre Box ist ein LAN-Kabel ohnehin die stabilere Wahl.",
  },
  {
    question: "Kann ich auf einer MAG Box Apps wie Netflix installieren?",
    answer:
      "Nur sehr eingeschränkt. MAG-Boxen sind auf IPTV-Portale ausgelegt. Wenn Sie viele Streaming-Apps nutzen möchten, ist ein Android-TV-Gerät oder ein Fire TV Stick besser geeignet.",
  },
];

/* ---------------------------------------------------------------- Quellen */

export const sources = [
  { label: "Infomir Wiki: Externe Portale laden (Menüweg, Multiportal, Portal-Neustart)", href: "https://wiki.infomir.eu/eng/set-top-box/stb-linux-webkit/embedded-portal/external-portal-loading" },
  { label: "Infomir: MAG254/MAG255 – Beschreibung und technische Daten", href: "https://www.infomir.eu/eng/products/archive/mag255" },
  { label: "Infomir: MAG322 – Beschreibung und technische Daten", href: "https://www.infomir.eu/eng/products/archive/mag322" },
  { label: "Infomir: MAG420 – Beschreibung und technische Daten", href: "https://www.infomir.eu/eng/products/archive/mag420" },
  { label: "Infomir: MAG520 – Beschreibung und technische Daten", href: "https://www.infomir.eu/eng/products/archive/mag520" },
];
