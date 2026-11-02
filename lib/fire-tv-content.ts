import type { FaqItem } from "./faq-data";

/**
 * Copy for /geraete/fire-tv-stick (app/geraete/fire-tv-stick/page.tsx). Layout lives in the page.
 *
 * SEO focus: "IPTV auf Fire TV Stick einrichten" plus Fire TV IPTV App, M3U, IPTV-Player, installieren, WLAN/LAN.
 * - Home owns "IPTV kaufen", /angebote owns prices, /anleitungen owns general "IPTV einrichten",
 *   /geraete/smart-tv owns Samsung/LG. This page stays on Amazon Fire TV.
 * - Facts as of Nov 2026: Fire TV Stick 4K (3rd gen, 2026) and 4K Select run Vega OS – no APK installation.
 *   Fire TV Stick 4K Max (2nd gen) and 4K (2nd gen) run Fire OS. Re-check before editing model statements.
 * - Never claim a player app is available on every model; menu paths are typical examples.
 */

export const FIRE_TV_UPDATED = "2026-11-02";

export const FIRE_TV_IMAGES = {
  hero: {
    src: "/images/geraete/fire-tv-stick/iptv-fire-tv-stick-einrichten.svg",
    width: 1200,
    height: 900,
    alt: "Illustration ohne Herstellerlogos: Fernseher mit Programmübersicht, Detailansicht eines Streaming-Sticks im HDMI-Anschluss, Sprachfernbedienung und WLAN-Router, dazu die Stichworte Fire OS, IPTV-Player sowie M3U und Xtream",
  },
  models: {
    src: "/images/geraete/fire-tv-stick/fire-tv-stick-modelle-vergleich.svg",
    width: 1200,
    height: 860,
    alt: "Vergleichsgrafik der Fire-TV-Stick-Modelle: 4K Max und 4K der zweiten Generation mit Fire OS und APK-Installation, Fire TV Stick 4K der dritten Generation mit Vega OS nur mit Appstore-Apps, Fire TV Stick HD mit Betriebssystem je nach Modell",
  },
  install: {
    src: "/images/geraete/fire-tv-stick/fire-tv-stick-iptv-player-installieren.svg",
    width: 1200,
    height: 820,
    alt: "Ablaufgrafik zur Installation eines IPTV-Players auf dem Fire TV Stick: Weg A über den Amazon Appstore, Weg B über die App Downloader nur bei Fire OS, danach Player öffnen, Zugangsdaten eintragen sowie EPG und Favoriten einrichten",
  },
  access: {
    src: "/images/geraete/fire-tv-stick/m3u-xtream-codes-fire-tv-stick.svg",
    width: 1200,
    height: 800,
    alt: "Schaubild M3U und Xtream Codes: Aus einer Beispiel-M3U-Adresse werden Server-URL mit Port, Benutzername und Passwort farbig markiert und den drei Feldern eines Xtream-Codes-Zugangs zugeordnet",
  },
  network: {
    src: "/images/geraete/fire-tv-stick/fire-tv-stick-wlan-oder-ethernet.svg",
    width: 1200,
    height: 780,
    alt: "Drei Anschlussvarianten des Fire TV Sticks von hinten: direkt im HDMI-Anschluss mit abgeschirmtem WLAN, mit HDMI-Verlängerung frei hängend mit besserem Empfang und mit Ethernet-Adapter per LAN-Kabel am Router",
  },
  errors: {
    src: "/images/geraete/fire-tv-stick/fire-tv-stick-iptv-fehlerhilfe.svg",
    width: 1200,
    height: 820,
    alt: "Sechs Fehlerkacheln für IPTV am Fire TV Stick mit erster Lösung: Installation blockiert, Paket lässt sich nicht installieren, Bild puffert, Speicher fast voll, Programmzeitschrift fehlt, App startet nicht",
  },
} as const;

export const tocItems = [
  { id: "modelle", label: "Welches Modell eignet sich?" },
  { id: "voraussetzungen", label: "Voraussetzungen" },
  { id: "apps", label: "Streaming-App oder IPTV-Player" },
  { id: "zugangsdaten", label: "M3U und Xtream Codes" },
  { id: "installation", label: "Player installieren & einrichten" },
  { id: "epg-favoriten", label: "EPG und Favoriten" },
  { id: "netzwerk", label: "WLAN oder LAN" },
  { id: "bild-speicher", label: "Bild, Pufferung & Speicher" },
  { id: "fehler", label: "Fehler und Lösungen" },
  { id: "updates", label: "Updates & Fire-OS-Versionen" },
  { id: "aeltere-geraete", label: "Ältere Fire-TV-Geräte" },
  { id: "sicherheit", label: "Sicherheit & Datenschutz" },
  { id: "faq", label: "Häufige Fragen" },
];

export const keyFacts = [
  { title: "Betriebssystem entscheidet", text: "Modelle mit Fire OS erlauben Appstore-Apps und die Installation über den Downloader. Neue Sticks mit Vega OS beschränken sich auf den Appstore." },
  { title: "Zwei Arten von Apps", text: "Offizielle Apps eines Dienstes bringen Sender und Konto mit. Ein IPTV-Player spielt dagegen Ihre eigene M3U- oder Xtream-Codes-Quelle ab." },
  { title: "Daten exakt übernehmen", text: "Server, Port, Benutzername und Passwort müssen Zeichen für Zeichen stimmen. Am bequemsten geht das per Copy & Paste." },
  { title: "Empfang verbessern", text: "Der Stick sitzt im Funkschatten des Fernsehers. HDMI-Verlängerung, 5-GHz-WLAN oder ein Ethernet-Adapter helfen gegen Puffern." },
];

/* ---------------------------------------------------------------- Modelle */

export const modelIntro = [
  "Für IPTV zählt beim Fire TV Stick vor allem eine Frage: Läuft er mit Fire OS oder mit Vega OS? Fire OS basiert auf Android und erlaubt neben Apps aus dem Amazon Appstore auch die Installation von Player-Apps über eine APK-Datei. Vega OS ist Amazons neues, Linux-basiertes System. Laut Amazon sollen künftig alle neuen Fire TV Sticks damit erscheinen. Auf Vega OS lassen sich nur Apps aus dem Appstore installieren.",
  "Für die Bildqualität spielt außerdem die Auflösung eine Rolle: HD-Modelle geben höchstens Full HD aus, die 4K-Modelle auch Ultra HD – sofern Fernseher und Stream das liefern.",
];

export const modelTable = {
  headers: ["Modell", "Betriebssystem", "Max. Auflösung", "IPTV-Player"],
  rows: [
    ["Fire TV Stick 4K Max (2. Gen.)", "Fire OS", "4K UHD, Wi-Fi 6E, 16 GB Speicher", "Appstore und APK-Installation"],
    ["Fire TV Stick 4K (2. Gen.)", "Fire OS", "4K UHD, Wi-Fi 6, 8 GB Speicher", "Appstore und APK-Installation"],
    ["Fire TV Stick 4K (3. Gen., 2026) / 4K Select", "Vega OS", "4K UHD", "Nur Apps aus dem Appstore"],
    ["Fire TV Stick HD / ältere Full-HD-Sticks", "Je nach Modell", "Full HD (1080p)", "Abhängig vom Betriebssystem"],
  ],
  caption:
    "Angaben laut Hersteller- und Fachpresseinformationen, Stand November 2026. Amazon verkauft Modelle teils unter gleichem Namen in mehreren Generationen – maßgeblich ist das Betriebssystem Ihres Geräts.",
};

export const findOsSteps = [
  "Öffnen Sie auf dem Startbildschirm die Einstellungen (Zahnrad).",
  "Wählen Sie „Mein Fire TV“ und dann „Info“.",
  "Unter dem Gerätenamen bzw. der Software-Version sehen Sie, ob Fire OS (z. B. Fire OS 7 oder 8) oder Vega OS installiert ist. Die Bezeichnungen können je nach Version leicht abweichen.",
];

/* ---------------------------------------------------------------- Voraussetzungen */

export const requirements = [
  { title: "Amazon-Konto", text: "Ohne Anmeldung lässt sich der Stick nicht einrichten, und der Appstore bleibt gesperrt." },
  { title: "Freier HDMI-Anschluss", text: "Bei 4K-Inhalten einen Anschluss wählen, der laut Fernseher-Handbuch 4K und HDR unterstützt." },
  { title: "Mitgeliefertes Netzteil", text: "Der USB-Anschluss des Fernsehers liefert oft zu wenig Strom. Das führt zu Neustarts oder Warnmeldungen." },
  { title: "Zugangsdaten Ihres Anbieters", text: "M3U-Adresse oder Xtream-Codes-Daten, optional eine EPG-Adresse – am besten als Text, nicht als Foto." },
  { title: "Stabile Internetverbindung", text: "Richtwert: rund 10 Mbit/s für Full HD und etwa 25 Mbit/s für 4K pro Stream." },
  { title: "Freier Speicherplatz", text: "Player-Apps, Senderlogos und EPG-Daten brauchen Platz. Den Stand sehen Sie unter Mein Fire TV › Info › Speicher." },
];

/* ---------------------------------------------------------------- Apps */

export const appComparison = {
  headers: ["Merkmal", "Offizielle Streaming-App", "IPTV-Player"],
  rows: [
    ["Was ist das?", "App eines TV-Streaming-Dienstes mit eigenem Senderangebot", "Abspiel-App ohne eigene Inhalte"],
    ["Inhalte", "Kommen vom Dienst, nach Abschluss eines Abos", "Kommen aus Ihrer M3U-Playlist oder Ihrem Xtream-Codes-Zugang"],
    ["Anmeldung", "Kundenkonto des Dienstes", "Server-Adresse und Zugangsdaten"],
    ["Installation", "Amazon Appstore", "Appstore oder – nur bei Fire OS – APK von der Entwickler-Website"],
    ["Updates", "Automatisch über den Appstore", "Appstore automatisch, APK-Apps manuell oder über die App selbst"],
  ],
};

export const playerCriteria = [
  "Unterstützt der Player die Zugangsart Ihres Anbieters – M3U, Xtream Codes oder beides?",
  "Lässt sich eine EPG-Adresse (XMLTV) hinterlegen, und gibt es eine Rasteransicht für die Programmzeitschrift?",
  "Ist die App im Amazon Appstore gelistet? Dann erhält sie Updates automatisch und wurde von Amazon geprüft.",
  "Wird die App noch gepflegt? Ein Blick auf das letzte Update-Datum spart später Ärger.",
  "Welche Funktionen sind kostenlos, welche kosten extra? Viele Player finanzieren sich über eine Premium-Version.",
];

/* ---------------------------------------------------------------- Zugangsdaten */

export const accessIntro = [
  "IPTV-Anbieter liefern ihre Zugangsdaten meist in einer von zwei Formen. Eine M3U-Playlist ist eine einzige Internetadresse, hinter der die komplette Senderliste steht. Xtream Codes teilen dieselben Informationen in drei Felder auf: Server-URL, Benutzername und Passwort.",
  "Bei vielen Anbietern steckt beides in derselben Adresse. Die Grafik zeigt, welche Teile einer M3U-Adresse in welches Xtream-Feld gehören. Bietet Ihr Player beide Varianten an, ist Xtream Codes am Fire TV Stick oft bequemer: Die Felder sind kurz, und Gruppen sowie Programmdaten werden meist automatisch geladen.",
];

export const accessTips = [
  { title: "Port nicht vergessen", text: "Die Zahl nach dem Doppelpunkt, etwa :8080, gehört zur Server-URL. Ohne sie meldet der Player häufig „Server nicht erreichbar“." },
  { title: "http oder https", text: "Übernehmen Sie das Protokoll genau so, wie Ihr Anbieter es angibt. Ein zusätzliches „s“ kann die Verbindung verhindern." },
  { title: "Fire-TV-App als Tastatur", text: "Mit der kostenlosen Amazon-Fire-TV-App auf dem Smartphone tippen Sie Text am Handy ein – deutlich schneller als mit der Fernbedienung." },
  { title: "Gegenprobe machen", text: "Funktioniert die Adresse nicht, testen Sie sie am Computer, zum Beispiel im VLC media player. So trennen Sie Eingabefehler von Zugangsproblemen." },
];

/* ---------------------------------------------------------------- Installation */

export const appstoreSteps = [
  "Drücken Sie die Home-Taste und öffnen Sie die Suche (Lupe) oder „Apps“.",
  "Geben Sie den Namen des IPTV-Players oder Ihres Streaming-Dienstes ein.",
  "Öffnen Sie die Detailseite, prüfen Sie Entwickler, Bewertungen und Kompatibilitätshinweise.",
  "Wählen Sie „Herunterladen“ bzw. „Abrufen“. Die App erscheint anschließend unter „Ihre Apps & Spiele“.",
];

export const downloaderSteps = [
  "Installieren Sie die App „Downloader“ aus dem Amazon Appstore.",
  "Gehen Sie zu Einstellungen › Mein Fire TV › Info und klicken Sie siebenmal auf den Gerätenamen, bis die Entwickleroptionen freigeschaltet sind.",
  "Öffnen Sie Einstellungen › Mein Fire TV › Entwickleroptionen › Apps unbekannter Herkunft installieren und erlauben Sie dies nur für „Downloader“.",
  "Tippen Sie im Downloader die offizielle Download-Adresse des Player-Entwicklers ein und installieren Sie die APK-Datei.",
  "Löschen Sie die APK-Datei nach der Installation, wenn der Downloader danach fragt – das spart Speicher.",
];

export const playerSetupSteps = [
  "Öffnen Sie den Player und wählen Sie „Playlist hinzufügen“, „Benutzer hinzufügen“ oder eine ähnliche Option.",
  "Entscheiden Sie sich für M3U (eine Adresse) oder Xtream Codes (Server, Benutzername, Passwort) – je nachdem, was Ihr Anbieter liefert.",
  "Tragen Sie die Daten ein. Eine EPG-Adresse kommt in das separate EPG-Feld, sofern vorhanden.",
  "Warten Sie, bis Senderliste und Programmdaten vollständig geladen sind. Bei großen Listen dauert der erste Start etwas länger.",
  "Testen Sie mehrere Sender aus unterschiedlichen Gruppen, bevor Sie Favoriten anlegen.",
];

/* ---------------------------------------------------------------- EPG & Favoriten */

export const epgFavCards = [
  { title: "EPG richtig zuordnen", text: "Die Programmzeitschrift wird über Senderkennungen zugeordnet. Fehlen Daten bei einzelnen Sendern, bieten viele Player eine manuelle Zuordnung an." },
  { title: "Zeitversatz korrigieren", text: "Liegt das Programm eine Stunde daneben, stellen Sie im Player den EPG-Zeitversatz ein – typisch nach der Zeitumstellung." },
  { title: "Favoritenliste anlegen", text: "Markieren Sie häufig genutzte Sender als Favoriten. So zappen Sie durch eine kurze Liste statt durch hunderte Einträge." },
  { title: "Gruppen ausblenden", text: "Blenden Sie ungenutzte Kategorien aus. Die App lädt dann schneller und die Bedienung mit der Fernbedienung wird übersichtlicher." },
];

/* ---------------------------------------------------------------- Netzwerk */

export const networkTable = {
  headers: ["Variante", "Stärken", "Grenzen"],
  rows: [
    ["WLAN, Stick direkt im HDMI", "Kein Zubehör nötig", "Fernseher schirmt das Signal teilweise ab"],
    ["WLAN mit HDMI-Verlängerung", "Besserer Empfang, kaum Aufwand", "Router sollte nicht zu weit entfernt stehen"],
    ["WLAN mit 5 GHz oder 6 GHz", "Mehr Tempo, weniger Störungen", "Kürzere Reichweite; 6 GHz nur mit Wi-Fi-6E-Router und passendem Stick"],
    ["Ethernet-Adapter (LAN)", "Gleichmäßigste Datenrate", "Zubehör und Kabel nötig, Kompatibilität mit dem Modell prüfen"],
  ],
};

export const networkTips = [
  "Liegt eine HDMI-Verlängerung bei, nutzen Sie sie – oft genügen wenige Zentimeter Abstand zur Fernseher-Rückwand.",
  "Prüfen Sie die Verbindung unter Einstellungen › Netzwerk: Mit der Play/Pause-Taste auf dem markierten Netzwerk sehen Sie bei vielen Modellen Details zur Signalstärke.",
  "Ethernet-Adapter für Fire TV sind als Netzteil mit LAN-Buchse erhältlich. Achten Sie auf die Kompatibilitätsangaben für Ihr Modell.",
];

/* ---------------------------------------------------------------- Bild & Speicher */

export const qualityCards = [
  { title: "Auflösung auf „Automatisch“", text: "Unter Einstellungen › Anzeige und Töne › Anzeige wählt der Stick die passende Auflösung. Eine feste Einstellung führt bei manchen Fernsehern zu schwarzen Bildschirmen." },
  { title: "Bildwiederholrate anpassen", text: "Viele Fire-OS-Modelle bieten unter Anzeige eine Option, die Bildwiederholrate an das Original anzupassen. Das kann Mikroruckler bei 50-Hz-Sendern verringern." },
  { title: "Puffer im Player", text: "Viele IPTV-Player haben eine Puffer-Einstellung. Ein größerer Puffer verzögert den Start etwas, überbrückt aber kurze Verbindungsschwankungen." },
  { title: "Speicher überwachen", text: "Unter Mein Fire TV › Info › Speicher sehen Sie den freien Platz. Ist er knapp, reagieren Apps träger und Updates schlagen fehl." },
  { title: "Cache leeren", text: "Einstellungen › Anwendungen › Installierte Anwendungen verwalten › App › „Cache leeren“. Die Zugangsdaten bleiben dabei erhalten." },
  { title: "Daten löschen nur gezielt", text: "„Daten löschen“ setzt eine App komplett zurück – inklusive Playlist und Favoriten. Notieren Sie Ihre Zugangsdaten vorher." },
];

/* ---------------------------------------------------------------- Fehler */

export const errorTable = {
  headers: ["Fehlerbild", "Häufige Ursache", "So lösen Sie es"],
  rows: [
    ["Player im Appstore nicht auffindbar", "App wird für Ihr Modell oder Ihre Region nicht angeboten", "Auf Fire OS ggf. die APK von der Entwickler-Website nutzen, auf Vega OS eine Alternative aus dem Appstore wählen"],
    ["Downloader blockiert die Installation", "„Apps unbekannter Herkunft“ für Downloader nicht erlaubt", "In den Entwickleroptionen für Downloader freigeben"],
    ["„Paket konnte nicht installiert werden“", "APK für andere Android-Version oder Gerätetyp gebaut, beschädigter Download", "Fire-TV-Version beim Entwickler laden, Download wiederholen, freien Speicher prüfen"],
    ["„Ungültige Zugangsdaten“", "Tippfehler, falsches Protokoll oder abgelaufener Zugang", "Daten neu kopieren, http/https und Port prüfen, Status beim Anbieter klären"],
    ["Bild puffert regelmäßig", "Schwaches WLAN hinter dem Fernseher oder ausgelastetes Heimnetz", "HDMI-Verlängerung, 5 GHz oder LAN-Adapter; Puffer im Player erhöhen"],
    ["Schwarzes Bild, Ton läuft", "Auflösung oder Bildwiederholrate passt nicht zum Fernseher", "Auflösung auf „Automatisch“ stellen, anderen Sender testen"],
    ["Warnung zur Stromversorgung", "USB-Anschluss des Fernsehers liefert zu wenig Strom", "Mitgeliefertes Netzteil an der Steckdose verwenden"],
  ],
  caption: "Die genaue Formulierung von Fehlermeldungen unterscheidet sich je nach Player-App und Software-Version.",
};

/* ---------------------------------------------------------------- Updates */

export const updateCards = [
  { title: "System-Updates", text: "Einstellungen › Mein Fire TV › Info › „Nach Updates suchen“. Installieren Sie verfügbare Updates, bevor Sie Fehler bei einer App suchen." },
  { title: "Appstore-Apps", text: "Apps aus dem Appstore aktualisieren sich automatisch, sofern unter Einstellungen › Anwendungen › Appstore die automatischen Updates aktiv sind." },
  { title: "APK-Apps", text: "Apps, die Sie per Downloader installiert haben, aktualisiert der Appstore nicht. Manche Player melden neue Versionen selbst, sonst laden Sie das Update von derselben Entwickler-Website." },
  { title: "Fire-OS-Versionen", text: "Neuere Player-Versionen setzen teils eine aktuelle Fire-OS-Version voraus. Ältere Geräte bleiben dann auf einer früheren App-Version stehen." },
];

/* ---------------------------------------------------------------- Ältere Geräte */

export const olderLimits = [
  "Ältere Sticks erhalten keine System-Updates mehr. Neue App-Versionen lassen sich dann teilweise nicht mehr installieren.",
  "Weniger Arbeitsspeicher und langsamere Prozessoren machen sich bei großen Senderlisten und EPG-Daten bemerkbar.",
  "Ältere WLAN-Standards erreichen geringere Datenraten – hier lohnt der Ethernet-Adapter besonders.",
  "Full-HD-Modelle können keine 4K-Streams ausgeben, selbst wenn der Fernseher 4K beherrscht.",
];

export const alternatives = [
  { name: "Smart TV (Samsung & LG)", href: "/geraete/smart-tv", text: "Ohne Zusatzgerät direkt im Fernseher – wenn die passende App angeboten wird.", linkLabel: "IPTV auf dem Smart TV einrichten" },
  { name: "Android-TV- oder Google-TV-Gerät", href: "/geraete/android-tv-box", text: "Google Play Store mit großer Player-Auswahl, auch nach dem Wechsel zu Vega OS eine Option.", linkLabel: "IPTV auf Android TV einrichten" },
  { name: "MAG-Box", href: "/geraete/mag-box", text: "Reiner IPTV-Empfänger mit Portal statt App – ohne App-Installation.", linkLabel: "Zur MAG-Box-Anleitung" },
  { name: "Enigma2-Receiver", href: "/geraete/enigma2-receiver", text: "IPTV und Sat- oder Kabelempfang in einer gemeinsamen Senderliste.", linkLabel: "Zur Enigma2-Anleitung" },
];

/* ---------------------------------------------------------------- Sicherheit */

export const securityPoints = [
  { title: "Nur offizielle Quellen", text: "Laden Sie APK-Dateien ausschließlich von der Website des Entwicklers. Kopien auf Download-Portalen oder in Foren können verändert sein." },
  { title: "Freigabe gezielt erteilen", text: "Erlauben Sie „Apps unbekannter Herkunft“ nur für den Downloader und schalten Sie die Option nach der Installation wieder aus." },
  { title: "Vorinstallierte Sticks meiden", text: "Sticks, die mit vorinstallierten Senderpaketen oder „freigeschalteten“ Apps verkauft werden, sind ein Sicherheits- und Rechtsrisiko. Mehr dazu unter [legale IPTV-Angebote](/iptv-legal)." },
  { title: "Zugangsdaten schützen", text: "Ihre M3U-Adresse enthält Benutzername und Passwort. Teilen Sie sie nicht in Screenshots oder Foren." },
  { title: "Datenschutzeinstellungen prüfen", text: "Unter Einstellungen › Einstellungen › Datenschutzeinstellungen können Sie bei vielen Modellen die Erfassung von Nutzungsdaten und interessenbasierte Werbung einschränken." },
  { title: "Käufe absichern", text: "Mit der Kindersicherung schützen Sie Käufe und den Start von Apps per PIN – sinnvoll, wenn mehrere Personen den Stick nutzen." },
];

/* ---------------------------------------------------------------- FAQ */

export const fireTvFaq: FaqItem[] = [
  {
    question: "Kann ich IPTV auf jedem Fire TV Stick nutzen?",
    answer:
      "Grundsätzlich ja, aber auf unterschiedlichen Wegen. Modelle mit Fire OS können IPTV-Player aus dem Appstore oder per APK-Datei nutzen. Modelle mit Vega OS, etwa der Fire TV Stick 4K der dritten Generation, sind auf Apps aus dem Amazon Appstore beschränkt. Ob dort ein passender Player angeboten wird, hängt vom aktuellen Store-Angebot ab.",
  },
  {
    question: "Warum lässt sich auf meinem neuen Fire TV Stick keine APK installieren?",
    answer:
      "Vermutlich läuft Ihr Stick mit Vega OS. Dieses System unterstützt keine Android-Apps außerhalb des Appstores; die Entwickleroptionen für unbekannte Apps fehlen. Prüfen Sie das Betriebssystem unter Einstellungen › Mein Fire TV › Info.",
  },
  {
    question: "Welche IPTV-App ist für den Fire TV Stick geeignet?",
    answer:
      "Das hängt von Ihrem Anbieter ab. Hat er eine eigene App, ist diese die einfachste Lösung. Für M3U- oder Xtream-Codes-Zugänge brauchen Sie einen Player, der diese Zugangsart unterstützt. Bevorzugen Sie Apps aus dem Appstore, die regelmäßig aktualisiert werden.",
  },
  {
    question: "Ist die App Downloader sicher?",
    answer:
      "Die App Downloader selbst ist eine reguläre App aus dem Amazon Appstore. Das Risiko liegt in den Dateien, die Sie damit laden. Nutzen Sie ausschließlich die offiziellen Download-Adressen der App-Entwickler.",
  },
  {
    question: "Reicht WLAN für IPTV auf dem Fire TV Stick?",
    answer:
      "In vielen Haushalten ja, besonders mit 5-GHz-WLAN und HDMI-Verlängerung. Puffert das Bild trotzdem, ist ein Ethernet-Adapter die zuverlässigste Lösung. Als Richtwert gelten rund 10 Mbit/s für Full HD und etwa 25 Mbit/s für 4K pro Stream.",
  },
  {
    question: "Wie bekomme ich auf dem Fire TV Stick mehr Speicherplatz?",
    answer:
      "Deinstallieren Sie ungenutzte Apps, leeren Sie den Cache großer Apps und löschen Sie heruntergeladene APK-Dateien im Downloader. Den freien Speicher sehen Sie unter Einstellungen › Mein Fire TV › Info › Speicher.",
  },
  {
    question: "Werden per Downloader installierte Apps automatisch aktualisiert?",
    answer:
      "Nein, der Amazon Appstore aktualisiert nur Apps, die aus dem Appstore stammen. Einige Player weisen selbst auf neue Versionen hin. Andernfalls laden Sie das Update erneut von der Website des Entwicklers.",
  },
  {
    question: "Kann ich denselben IPTV-Zugang auf mehreren Fire TV Sticks nutzen?",
    answer:
      "Technisch können Sie die Daten auf mehreren Geräten eintragen. Wie viele Geräte gleichzeitig streamen dürfen, legt allein Ihr Anbieter in seinen Bedingungen fest.",
  },
];
