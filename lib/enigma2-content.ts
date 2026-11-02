import type { FaqItem } from "./faq-data";

/**
 * Copy for /geraete/enigma2-receiver (app/geraete/enigma2-receiver/page.tsx). Layout lives in the page.
 *
 * SEO focus: "IPTV auf Enigma2 Receiver einrichten" plus VU+, Dreambox, Zgemma, GigaBlue, OpenATV, OpenPLi, VTi,
 * M3U/Xtream on Enigma2, bouquets and plugins. Other pages own app-based setups (Smart TV, Fire TV, Android TV),
 * portal setups (MAG) and generic IPTV basics (/anleitungen).
 * - Facts checked Nov 2026 (see `sources`). Plugin availability always depends on image, feed and version.
 * - OSCam is only explained to separate it from IPTV; never add instructions around encryption or access control.
 */

export const ENIGMA2_UPDATED = "2026-11-02";

export const ENIGMA2_IMAGES = {
  hero: {
    src: "/images/geraete/enigma2-receiver/iptv-enigma2-receiver-einrichten.svg",
    width: 1200,
    height: 900,
    alt: "Illustration ohne Herstellerlogos: Fernseher mit einer Senderliste, in der Satelliten- und IPTV-Sender gemeinsam stehen, darunter ein Enigma2-Receiver mit Frontdisplay, per LAN-Kabel mit dem Router verbunden, dazu die Stichworte Bouquet, M3U und Xtream sowie Sat plus IPTV",
  },
  hardware: {
    src: "/images/geraete/enigma2-receiver/enigma2-receiver-hardware-image.svg",
    width: 1200,
    height: 820,
    alt: "Neutrale Receiver-Illustrationen für VU+, Dreambox, Zgemma und GigaBlue mit Beispielmodellen, darunter ein Schichtenmodell aus Receiver-Hardware, Enigma2-Image wie OpenATV, OpenPLi, VTi oder DreamOS und darüber Plugins und Bouquets",
  },
  setup: {
    src: "/images/geraete/enigma2-receiver/iptv-enigma2-einrichtung-ablauf.svg",
    width: 1200,
    height: 700,
    alt: "Ablauf in fünf Stationen: Zugangsdaten als M3U oder Xtream Codes, Playlist mit EPG-Adresse, Plugin zur Bouquet-Erstellung, Bouquet in der Senderliste und Fernseher, auf dem wie bei Sat umgeschaltet wird",
  },
  access: {
    src: "/images/geraete/enigma2-receiver/m3u-oder-xtream-codes-enigma2.svg",
    width: 1200,
    height: 800,
    alt: "Vergleich auf Enigma2: Eine M3U-Playlist wird per Plugin in eine Bouquet-Datei umgewandelt, Xtream-Codes-Daten nutzt entweder ein IPTV-Plugin mit eigener Oberfläche oder ein erzeugtes Bouquet, unten eine Gegenüberstellung von Einbindung, EPG und Aktualisierung",
  },
  bouquets: {
    src: "/images/geraete/enigma2-receiver/enigma2-bouquet-struktur.svg",
    width: 1200,
    height: 820,
    alt: "Bouquet-Struktur im Ordner /etc/enigma2: bouquets.tv verweist auf eine Sat-Favoritenliste und zwei IPTV-Bouquets, darunter ein vereinfachter Auszug einer IPTV-Bouquet-Datei, rechts die Bouquet-Übersicht am Fernseher und der Hinweis, vor Änderungen ein Backup anzulegen",
  },
  troubleshooting: {
    src: "/images/geraete/enigma2-receiver/enigma2-iptv-fehlersuche.svg",
    width: 1200,
    height: 780,
    alt: "Prüfreihenfolge zur Fehlersuche: Netzwerk, Player, Playlist und Zugang, Bouquet und EPG, jeweils mit Prüffrage und typischem Symptom wie Puffern, Schwarzbild, Sender laden nicht, Bouquet fehlt oder keine Programmdaten",
  },
} as const;

export const tocItems = [
  { id: "grundlagen", label: "Was ist Enigma2?" },
  { id: "images", label: "OpenATV, OpenPLi, VTi & Co." },
  { id: "receiver", label: "Receiver im Vergleich" },
  { id: "voraussetzungen", label: "Voraussetzungen" },
  { id: "zugangsarten", label: "M3U oder Xtream Codes" },
  { id: "einrichtung", label: "Vier Wege zur Einrichtung" },
  { id: "bouquets", label: "Bouquets und Senderliste" },
  { id: "wiedergabe", label: "Player und Service-Typen" },
  { id: "epg", label: "EPG und Favoriten" },
  { id: "oscam", label: "OSCam richtig einordnen" },
  { id: "fehler", label: "Fehlerbehebung" },
  { id: "sicherheit", label: "Sicherheit & Rechtliches" },
  { id: "faq", label: "Häufige Fragen" },
];

export const fitCards = {
  good: [
    "Sie nutzen bereits einen Linux-Receiver für Satellit oder Kabel.",
    "Sie möchten IPTV-Sender in derselben Senderliste wie Ihre Sat-Sender.",
    "Sie scheuen keine Menüs, Plugins und gelegentlich eine Datei auf dem Receiver.",
  ],
  limits: [
    "Die Einrichtung ist aufwendiger als eine App auf Smart TV oder Stick.",
    "Plugins und Menüs unterscheiden sich je nach Image und Version.",
    "Ältere Receiver stoßen bei 4K und großen Playlists an Grenzen.",
  ],
};

/* ---------------------------------------------------------------- Grundlagen */

export const basicsIntro = [
  "Enigma2 ist die Bedienoberfläche einer Familie von Linux-Betriebssystemen für TV-Receiver. Ursprünglich entwickelte Dream Multimedia sie für die Dreambox; heute nutzen auch Receiver von VU+, Zgemma, GigaBlue und weiteren Herstellern Enigma2. Das komplette System auf dem Gerät nennt man „Image“.",
  "Für IPTV ist dabei eines entscheidend: Ein Enigma2-Receiver arbeitet nicht mit einer einzelnen IPTV-App wie ein Smart TV, sondern mit Senderlisten, den sogenannten Bouquets. IPTV-Sender werden entweder als eigenes Bouquet in diese Liste eingebunden oder über ein Plugin mit eigener Oberfläche abgespielt.",
];

export const images = [
  { title: "OpenATV", text: "Weit verbreitetes Community-Image für viele Hersteller und Modelle, mit umfangreichem Plugin-Angebot im Feed." },
  { title: "OpenPLi", text: "Community-Image mit Fokus auf Stabilität. Der offizielle Feed ist eher zurückhaltend bestückt." },
  { title: "VTi", text: "Image speziell für VU+-Receiver, unter VU+-Nutzern sehr verbreitet." },
  { title: "DreamOS", text: "System, mit dem neuere Dreambox-Modelle ab Werk ausgeliefert werden. Plugins für andere Images passen dort nicht automatisch." },
];

export const imageNote =
  "Hardware und Image sind zwei verschiedene Dinge: Derselbe Receiver kann – je nach Modell – mit unterschiedlichen Images betrieben werden. Welche Images für Ihr Gerät angeboten werden, sehen Sie auf der Download-Seite des jeweiligen Images. Menüs, Plugin-Feeds und Einstellungen unterscheiden sich zwischen den Images teils deutlich.";

export const comparisonTable = {
  headers: ["", "Smart TV / Android TV", "Enigma2-Receiver"],
  rows: [
    ["Wiedergabe", "IPTV-App bzw. Player aus dem Store", "Bouquet in der Senderliste oder IPTV-Plugin"],
    ["Installation", "App-Store des Geräts", "Plugin-Feed des Images, teils manuell"],
    ["Senderliste", "Eigene Liste in der App", "Gemeinsam mit Sat- und Kabelsendern möglich"],
    ["EPG", "Meist im Player eingebaut", "Über Plugin oder EPG-Import"],
    ["Aufwand", "Gering", "Mittel bis hoch, dafür sehr flexibel"],
  ],
};

/* ---------------------------------------------------------------- Receiver */

export const receiverTable = {
  headers: ["Gerät", "Typische Images", "IPTV-Eignung", "Besonderheiten"],
  rows: [
    ["VU+ Uno 4K SE", "VTi, OpenATV, OpenPLi", "Gut, auch für 4K-Streams geeignet", "Neuere 4K-Generation der VU+-Reihe"],
    ["VU+ Solo2", "VTi, OpenATV, OpenPLi", "Für HD-Streams geeignet", "Ältere HD-Generation; aktuelle Image-Unterstützung vor Updates prüfen"],
    ["VU+ Zero", "VTi, OpenATV, OpenPLi", "Für HD-Streams geeignet", "Einstiegsmodell mit einem Tuner; große Playlists können träge laufen"],
    ["Dreambox Two", "DreamOS ab Werk", "Gut, 4K-fähig", "Andere Images nur, wenn sie das Modell ausdrücklich unterstützen"],
    ["Dreambox DM920", "DreamOS ab Werk, je nach Image auch Community-Images", "Gut, 4K-fähig", "Plugins müssen zum installierten System passen"],
    ["Dreambox DM900", "DreamOS ab Werk, je nach Image auch Community-Images", "Gut, 4K-fähig", "Wie DM920: Image vor der Plugin-Suche festlegen"],
    ["Zgemma", "Je nach Serie z. B. OpenATV", "Modellabhängig", "Einige Modelle nutzen für Streams einen eigenen Player statt GStreamer"],
    ["GigaBlue", "Je nach Serie z. B. OpenATV", "Modellabhängig", "Viele Serien und Generationen; Modellbezeichnung genau prüfen"],
  ],
  caption:
    "Angaben zu Images sind Beispiele, keine vollständige Liste. Ob ein Image Ihr Modell unterstützt, entscheidet die jeweilige Download-Seite; die IPTV-Eignung hängt zusätzlich von Stream, Player und Netzwerk ab.",
};

/* ---------------------------------------------------------------- Voraussetzungen */

export const requirements = [
  "Ein Enigma2-Receiver mit aktuellem, zum Modell passendem Image",
  "Netzwerkverbindung, am besten per LAN-Kabel – rund 10 Mbit/s für Full HD und etwa 25 Mbit/s für 4K pro Stream",
  "Ihre Zugangsdaten: M3U-Adresse oder Xtream-Codes-Daten (Server, Benutzername, Passwort), optional eine EPG-Adresse",
  "Ein aktuelles Backup Ihrer Senderlisten und Einstellungen",
  "Für die manuelle Einrichtung: ein PC mit FTP- oder SFTP-Programm und ein Texteditor, der Linux-Zeilenenden speichert",
];

export const networkCards = [
  { title: "LAN-Kabel", text: "Die zuverlässigste Verbindung. Fast jeder Enigma2-Receiver hat einen Netzwerkanschluss – nutzen Sie ihn, wenn es irgendwie geht." },
  { title: "WLAN", text: "Viele Receiver haben kein eingebautes WLAN. Ob ein USB-WLAN-Stick funktioniert, hängt von den Treibern im Image ab." },
  { title: "Powerline oder Mesh", text: "Liegt kein Kabel am Fernseher, ist ein Powerline-Adapter oder ein Mesh-Knoten mit LAN-Anschluss oft stabiler als WLAN." },
];

export const backupSteps = [
  "Erstellen Sie über die Backup-Funktion Ihres Images eine Sicherung der Einstellungen (der Menüpunkt heißt je nach Image unterschiedlich).",
  "Kopieren Sie zusätzlich den Ordner /etc/enigma2 per FTP oder SFTP auf Ihren PC. Darin liegen Bouquets und Senderdaten.",
  "Speichern Sie die Sicherung außerhalb des Receivers, etwa auf dem PC oder einem USB-Stick.",
];

/* ---------------------------------------------------------------- Zugangsarten */

export const accessIntro = [
  "Auf Enigma2 entscheidet die Zugangsart darüber, welcher Weg am bequemsten ist. Eine M3U-Playlist wird in der Regel in ein Bouquet umgewandelt. Xtream-Codes-Daten können Sie in einem IPTV-Plugin mit eigener Oberfläche nutzen oder ebenfalls als Bouquet einbinden.",
];

export const accessTips = [
  { title: "M3U auf Enigma2", text: "Ideal, wenn die Sender in der normalen Senderliste stehen sollen. Programmdaten kommen über eine separate XMLTV-Adresse." },
  { title: "Xtream Codes auf Enigma2", text: "Kurze Eingabe, Kategorien und Programmdaten meist direkt vom Server. Viele Plugins bieten zusätzlich Filme und Serien." },
  { title: "Beide verfügbar?", text: "Für den Alltag am Receiver sind Xtream Codes oft bequemer. Für eine gemeinsame Liste mit Sat-Sendern ist ein Bouquet die bessere Wahl." },
];

/* ---------------------------------------------------------------- Einrichtung */

export const pluginSteps = [
  "Öffnen Sie den Plugin-Browser – je nach Image über Menü › Plugins oder eine Farbtaste.",
  "Wählen Sie „Herunterladen“ bzw. „Download“ und suchen Sie in Kategorien wie „Extensions“ oder „IPTV“.",
  "Installieren Sie ein passendes Plugin und starten Sie die Benutzeroberfläche neu, wenn das Image dazu auffordert.",
  "Öffnen Sie das Plugin über den Plugin-Browser und tragen Sie Ihre M3U-Adresse oder Xtream-Codes-Daten ein.",
  "Folgen Sie der Plugin-Oberfläche: Je nach Plugin spielen Sie Sender direkt ab oder lassen Bouquets erzeugen.",
];

export const m3uSteps = [
  "Legen Sie ein Backup Ihrer Senderlisten an.",
  "Installieren Sie ein Plugin, das M3U-Playlists in Bouquets umwandelt (Bezeichnungen wie „Bouquet Maker“ sind üblich).",
  "Tragen Sie die M3U-Adresse ein und wählen Sie, welche Gruppen übernommen werden sollen.",
  "Hinterlegen Sie – falls das Plugin es anbietet – die EPG-Adresse für die Programmdaten.",
  "Erzeugen Sie die Bouquets. Sie erscheinen danach in der Bouquet-Übersicht Ihrer Senderliste.",
];

export const xtreamSteps = [
  "Installieren Sie ein IPTV-Plugin mit Xtream-Codes-Unterstützung, zum Beispiel XStreamity, sofern es für Ihr Image angeboten wird.",
  "Legen Sie im Plugin eine neue Playlist an und tragen Sie Server (mit Port), Benutzername und Passwort exakt ein.",
  "Das Plugin lädt Kategorien, Sender und meist auch Programmdaten vom Server.",
  "Spielen Sie Sender direkt im Plugin ab oder nutzen Sie – falls vorhanden – die Funktion zum Erzeugen von Bouquets.",
];

export const manualSteps = [
  "Sichern Sie den Ordner /etc/enigma2 vollständig auf Ihrem PC.",
  "Erstellen Sie eine Datei, z. B. userbouquet.iptv.tv, mit einer #NAME-Zeile und je Sender einer #SERVICE- und #DESCRIPTION-Zeile (siehe Beispiel).",
  "Speichern Sie die Datei mit Linux-Zeilenenden (LF) und kopieren Sie sie per FTP oder SFTP nach /etc/enigma2.",
  "Ergänzen Sie in der Datei bouquets.tv eine Zeile, die auf das neue Bouquet verweist.",
  "Laden Sie die Senderliste neu, etwa durch einen Neustart der Benutzeroberfläche.",
];

export const manualExample = `#NAME IPTV Nachrichten
#SERVICE 4097:0:1:0:0:0:0:0:0:0:http%3a//anbieter.example/…/1001.ts:Sender A
#DESCRIPTION Sender A`;

export const bouquetsTvLine = `#SERVICE 1:7:1:0:0:0:0:0:0:0:FROM BOUQUET "userbouquet.iptv.tv" ORDER BY bouquet`;

export const manualNote =
  "In der Stream-Adresse wird der Doppelpunkt als %3a geschrieben, weil Enigma2 den Doppelpunkt als Trennzeichen nutzt. Ein Tippfehler in bouquets.tv kann dazu führen, dass Bouquets nicht mehr angezeigt werden – mit Ihrem Backup ist der alte Stand schnell wiederhergestellt.";

/* ---------------------------------------------------------------- Bouquets */

export const bouquetIntro = [
  "Ein Bouquet ist eine benannte Senderliste, etwa „Favoriten“, „Nachrichten“ oder „IPTV Sport“. In der Bouquet-Übersicht Ihres Receivers wählen Sie zwischen diesen Listen. IPTV-Bouquets stehen dort gleichberechtigt neben Sat- oder Kabel-Bouquets.",
  "So können Sie IPTV und Satellit gemeinsam organisieren: getrennt in eigenen Bouquets oder gemischt in einer Favoritenliste. Ein Sender aus einem IPTV-Bouquet lässt sich wie jeder andere Sender in Ihre Favoriten übernehmen.",
];

export const bouquetFiles = {
  headers: ["Datei in /etc/enigma2", "Inhalt"],
  rows: [
    ["bouquets.tv", "Liste aller TV-Bouquets in der angezeigten Reihenfolge"],
    ["bouquets.radio", "Dasselbe für Radio-Bouquets"],
    ["userbouquet.*.tv", "Ein einzelnes Bouquet mit seinen Sendern – auch IPTV-Bouquets"],
    ["lamedb", "Datenbank der per Suchlauf gefundenen Sat-, Kabel- oder DVB-T-Sender"],
  ],
  caption: "Je nach Image können weitere Dateien hinzukommen. Plugins legen ihre Bouquets meist ebenfalls als userbouquet-Datei an.",
};

export const bouquetTips = [
  { title: "Nur benötigte Gruppen", text: "Übernehmen Sie nicht die komplette Playlist. Wenige, gut benannte Bouquets machen die Senderliste schneller und übersichtlicher." },
  { title: "Senderlisten-Editoren", text: "Manche Senderlisten-Programme für den PC überschreiben beim Speichern alle Bouquets. Prüfen Sie danach, ob Ihre IPTV-Bouquets noch da sind." },
  { title: "Plugin-Aktualisierungen", text: "Lässt ein Plugin Bouquets automatisch neu erzeugen, gehen manuelle Änderungen an diesen Bouquets dabei oft verloren." },
];

/* ---------------------------------------------------------------- Wiedergabe */

export const playerTable = {
  headers: ["Service-Typ", "Player", "Hinweis"],
  rows: [
    ["4097", "Standard-Player des Images (meist GStreamer)", "Funktioniert ohne Zusatz. Einige Zgemma-Modelle nutzen hier einen eigenen Hardware-Player."],
    ["5001", "GStreamer über ServiceApp", "Benötigt das Plugin ServiceApp"],
    ["5002", "ExtEplayer3 über ServiceApp", "Benötigt ServiceApp; hilft oft bei Streams, die mit 4097 kein Bild oder keinen Ton zeigen"],
  ],
  caption:
    "Welcher Player besser läuft, hängt vom Stream und vom Receiver ab. Probieren Sie bei Problemen einen anderen Service-Typ aus, bevor Sie Einstellungen am Netzwerk ändern.",
};

/* ---------------------------------------------------------------- EPG */

export const epgCards = [
  { title: "EPG-Grundlagen", text: "Die Programmzeitschrift kommt bei IPTV aus einer XMLTV-Quelle oder direkt vom Xtream-Server – nicht wie bei Sat aus dem Sendesignal." },
  { title: "EPG-Zuordnung", text: "Jeder IPTV-Sender braucht eine Verknüpfung zu seinen Programmdaten. Plugins übernehmen das meist über die tvg-id; fehlt sie, bleibt das EPG leer." },
  { title: "EPG-Import", text: "Für Bouquets aus M3U-Listen ist ein XMLTV-Importer wie EPGImport verbreitet, sofern er für Ihr Image verfügbar ist." },
  { title: "Favoriten anlegen", text: "Sender mit der Menütaste in der Senderliste zu einem Favoriten-Bouquet hinzufügen – genauso wie Sat-Sender." },
  { title: "Sender sortieren", text: "Im Bearbeitungsmodus der Senderliste verschieben Sie Sender und Bouquets. Häufig genutzte Listen gehören nach oben." },
  { title: "Große Playlists zähmen", text: "Lieber fünf thematische Bouquets als eines mit tausend Sendern. Das beschleunigt Umschalten, EPG-Import und Bedienung." },
];

/* ---------------------------------------------------------------- OSCam */

export const oscamPoints = [
  { title: "Was ist OSCam?", text: "OSCam ist eine sogenannte Softcam. Sie arbeitet mit dem Kartenleser des Receivers zusammen, damit verschlüsselte Sat- oder Kabelsender mit einer eigenen, rechtmäßig erworbenen Smartcard entschlüsselt werden können." },
  { title: "Zwei getrennte Bereiche", text: "IPTV-Streams kommen über das Internet, nicht über den Tuner. Für die Wiedergabe sind Player und Bouquets zuständig – eine Softcam spielt dabei keine Rolle." },
  { title: "Für IPTV nicht nötig", text: "Für eine normale Einrichtung mit M3U-Playlist oder Xtream Codes brauchen Sie OSCam nicht. Sie müssen eine vorhandene Softcam auch nicht deinstallieren." },
];

export const oscamNote =
  "Wir erklären OSCam hier nur zur Abgrenzung. Anleitungen zum Umgehen von Verschlüsselung oder Zugangskontrollen geben wir nicht – das Weitergeben von Kartenzugängen, sogenanntes Card-Sharing, ist in Deutschland unzulässig und kann strafbar sein.";

/* ---------------------------------------------------------------- Fehler */

export const troubleshootingTable = {
  headers: ["Symptom", "Mögliche Ursache", "Lösung"],
  rows: [
    ["IPTV-Sender bleiben schwarz", "Player kommt mit dem Stream nicht zurecht oder Stream ist offline", "Service-Typ 5002 bzw. anderen Player testen; Stream am PC gegenprüfen"],
    ["Sender laden nicht", "Zugang abgelaufen, Server gestört oder falsche Adresse", "Kontostatus prüfen, mehrere Sender testen, Adresse neu übernehmen"],
    ["Buffering", "WLAN zu schwach, Netz ausgelastet oder Stream mit hoher Datenrate", "LAN nutzen, Downloads pausieren, Bandbreite am Receiver-Standort prüfen"],
    ["Bild friert ein (Freeze)", "Kurze Verbindungsabbrüche oder Player-Problem", "LAN statt WLAN, anderen Service-Typ testen, Receiver neu starten"],
    ["Audio fehlt", "Tonformat wird vom gewählten Player nicht unterstützt", "Mit 5002 (ExtEplayer3) testen, Tonspur im Audiomenü wechseln"],
    ["Lange Umschaltzeiten", "Langsamer Stream-Start, schwache Hardware oder riesige Bouquets", "Bouquets verkleinern, anderen Player testen, LAN verwenden"],
    ["EPG fehlt", "Keine EPG-Quelle, fehlende Zuordnung oder Import nicht gelaufen", "EPG-Adresse ergänzen, EPG-Import manuell starten, Zuordnung prüfen"],
    ["Bouquet erscheint nicht", "Eintrag in bouquets.tv fehlt oder Senderliste nicht neu geladen", "bouquets.tv prüfen, Benutzeroberfläche neu starten"],
    ["M3U funktioniert nicht", "Tippfehler, abgelaufene Adresse oder Datei mit falschem Format", "Adresse kopieren statt abtippen, in VLC am PC testen"],
    ["Xtream-Daten funktionieren nicht", "Port fehlt, falscher Server-Pfad oder Groß-/Kleinschreibung", "Server mit Port ohne Zusatzpfad eintragen, Daten exakt übernehmen"],
    ["Plugin fehlt im Feed", "Nicht für Ihr Image, Ihre Version oder Ihre Hardware angeboten", "Feed aktualisieren, Alternativen im Feed prüfen, nur aus offizieller Quelle installieren"],
    ["Receiver verliert das Netzwerk", "Kabel, Switch, Energiesparfunktion oder WLAN-Treiber", "Kabel und Port tauschen, feste IP oder DHCP-Reservierung, LAN statt USB-WLAN"],
  ],
};

/* ---------------------------------------------------------------- Sicherheit */

export const securityPoints = [
  { title: "Plugins aus dem Feed", text: "Bevorzugen Sie Plugins aus dem offiziellen Feed Ihres Images. Externe Pakete nur von der Projektseite des Entwicklers installieren." },
  { title: "Keine fremden Skripte", text: "Installationsbefehle aus Foren oder Videos nicht ungeprüft ausführen – sie laufen auf dem Receiver mit vollen Rechten." },
  { title: "Root-Passwort setzen", text: "Viele Images erlauben den Zugriff per FTP, SSH und Webinterface. Vergeben Sie ein Passwort und geben Sie diese Dienste nie ins Internet frei." },
  { title: "Updates einspielen", text: "Image- und Plugin-Updates schließen Fehler und Sicherheitslücken. Vor großen Updates vorher ein Backup anlegen." },
  { title: "Zugangsdaten schützen", text: "M3U-Adressen und Xtream-Daten enthalten Ihre Zugangsdaten. Teilen Sie keine Backups oder Screenshots, in denen sie zu sehen sind." },
];

export const legalNote =
  "Enigma2, Plugins und Player sind legale Software. Ob die Nutzung rechtmäßig ist, hängt davon ab, ob die abgespielten Inhalte lizenziert sind. Hintergründe finden Sie unter [IPTV legal in Deutschland](/iptv-legal).";

/* ---------------------------------------------------------------- FAQ */

export const enigma2Faq: FaqItem[] = [
  {
    question: "Welches Image ist für IPTV auf Enigma2 am besten?",
    answer:
      "Ein pauschal bestes Image gibt es nicht. OpenATV bietet ein großes Plugin-Angebot, OpenPLi gilt als stabil, VTi ist auf VU+-Receiver zugeschnitten. Wichtiger als die Wahl ist ein aktuelles Image, das Ihr Modell offiziell unterstützt.",
  },
  {
    question: "Brauche ich für IPTV auf Enigma2 OSCam?",
    answer:
      "Nein. OSCam ist eine Softcam für verschlüsselte Sat- und Kabelsender. IPTV-Streams laufen über Player und Bouquets und kommen ohne Softcam aus.",
  },
  {
    question: "Kann ich IPTV und Satellit in einer Senderliste nutzen?",
    answer:
      "Ja. IPTV-Sender liegen in eigenen Bouquets und stehen damit neben Ihren Sat-Bouquets. Einzelne IPTV-Sender können Sie wie gewohnt in Ihre Favoritenliste übernehmen.",
  },
  {
    question: "Welches Plugin brauche ich für Xtream Codes?",
    answer:
      "Für Xtream Codes gibt es eigene Plugins, ein bekanntes Beispiel ist XStreamity. Ob ein Plugin für Ihren Receiver angeboten wird, hängt von Image, Version und Feed ab.",
  },
  {
    question: "Warum sehe ich bei IPTV-Sendern Ton, aber kein Bild?",
    answer:
      "Meist kommt der gewählte Player mit dem Stream nicht zurecht. Testen Sie einen anderen Service-Typ, zum Beispiel 5002 mit ExtEplayer3 über das Plugin ServiceApp.",
  },
  {
    question: "Funktioniert IPTV auch auf älteren Receivern wie der VU+ Solo2?",
    answer:
      "Häufig ja, vor allem mit HD-Streams. Bei 4K, sehr großen Playlists oder ohne aktuelles Image stoßen ältere Modelle jedoch an Grenzen.",
  },
  {
    question: "Kann ich IPTV-Sender auf dem Receiver aufnehmen?",
    answer:
      "Technisch ist das auf vielen Receivern mit Festplatte oder USB-Speicher möglich, abhängig von Player und Image. Ob Aufnahmen erlaubt sind, regeln die Nutzungsbedingungen Ihres Anbieters.",
  },
  {
    question: "Was mache ich, wenn nach einer Änderung die Senderliste kaputt ist?",
    answer:
      "Spielen Sie Ihr Backup ein oder kopieren Sie den gesicherten Ordner /etc/enigma2 zurück und starten Sie die Benutzeroberfläche neu.",
  },
];

/* ---------------------------------------------------------------- Quellen */

export const sources = [
  { label: "Wikipedia: E2 Linux – Geschichte und Verbreitung von Enigma2", href: "https://en.wikipedia.org/wiki/E2_Linux" },
  { label: "OpenPLi Wiki: Hinweise zu VU+-Receivern", href: "https://wiki.openpli.org/Receivers:Vu" },
  { label: "OpenPLi Forum: GStreamer und ExtEplayer3 für IPTV", href: "https://forums.openpli.org/topic/93487-gstreamer-vs-exteplayer-3-for-iptv/" },
  { label: "GitHub: XStreamity – Enigma2-Plugin für Xtream Codes", href: "https://github.com/kiddac/XStreamity" },
  { label: "GitHub: EPGImport – XMLTV-Import für Enigma2 (OpenPLi)", href: "https://github.com/OpenPLi/enigma2-plugin-extensions-epgimport" },
];
