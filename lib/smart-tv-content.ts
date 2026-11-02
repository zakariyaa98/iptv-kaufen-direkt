import type { FaqItem } from "./faq-data";

/**
 * Copy for /geraete/smart-tv (app/geraete/smart-tv/page.tsx). Kept out of the page so the page only handles layout.
 *
 * SEO focus: "IPTV auf Smart TV einrichten" plus Samsung/Tizen, LG/webOS, IPTV-App, M3U-Playlist, WLAN oder LAN.
 * - The homepage owns "IPTV kaufen", /angebote owns "IPTV Angebote & Preise", /anleitungen owns general
 *   "IPTV einrichten". This page stays on Smart-TV setup and links out for the rest.
 * - Never name a specific Tizen/webOS player app as "compatible": availability changes by model, software
 *   version, region and store. Menu paths are written as typical examples with a "may differ" hint.
 */

export const SMART_TV_UPDATED = "2026-11-02";

export const SMART_TV_IMAGES = {
  hero: {
    src: "/images/geraete/smart-tv/iptv-smart-tv-einrichten-samsung-lg.svg",
    width: 1200,
    height: 900,
    alt: "Illustration: zwei moderne Smart TVs ohne Herstellerlogos, beschriftet mit Samsung Tizen und LG webOS, davor Router mit LAN-Kabel und Fernbedienung sowie die drei Schritte App installieren, Daten eintragen und Wiedergabe testen",
  },
  steps: {
    src: "/images/geraete/smart-tv/smart-tv-iptv-einrichtung-schritte.svg",
    width: 1200,
    height: 800,
    alt: "Ablaufdiagramm der IPTV-Einrichtung am Smart TV in sechs Schritten: Software aktualisieren, Netzwerk prüfen, App aus dem Store installieren, Zugangsdaten eintragen, Senderliste und EPG laden, testen und Favoriten anlegen",
  },
  compare: {
    src: "/images/geraete/smart-tv/tizen-webos-vergleich.svg",
    width: 1200,
    height: 820,
    alt: "Vergleichsgrafik Samsung Tizen und LG webOS: App-Bereich, Benutzerkonto, typische Fernbedienung und Weg zum Software-Update, dazu die vier Faktoren Modelljahr, Softwareversion, Region und Store, von denen die App-Verfügbarkeit abhängt",
  },
  m3u: {
    src: "/images/geraete/smart-tv/m3u-playlist-smart-tv-einrichten.svg",
    width: 1200,
    height: 820,
    alt: "Schaubild zur M3U-Playlist am Smart TV: Aufbau einer Beispiel-Adresse aus Server, Port, Pfad, Benutzername, Passwort und Format sowie zwei Wege, die Adresse in die App zu bringen – per Fernbedienung oder über die Website des App-Entwicklers",
  },
  network: {
    src: "/images/geraete/smart-tv/iptv-wlan-oder-lan-smart-tv.svg",
    width: 1200,
    height: 760,
    alt: "Vergleich LAN und WLAN für IPTV am Smart TV: links Router per Kabel mit gleichmäßiger Datenrate, rechts WLAN durch eine Wand mit schwankender Datenrate, jeweils mit Vor- und Nachteilen",
  },
  diagnosis: {
    src: "/images/geraete/smart-tv/smart-tv-iptv-fehlerdiagnose.svg",
    width: 1200,
    height: 880,
    alt: "Entscheidungsbaum zur Fehlersuche bei IPTV am Smart TV: Erst prüfen, ob alle Sender betroffen sind, dann den Test über den Smartphone-Hotspot – mit Lösungen für einzelne Streams, das Heimnetz sowie App und Fernseher",
  },
} as const;

export const tocItems = [
  { id: "checkliste", label: "Checkliste vor dem Start" },
  { id: "ablauf", label: "Ablauf in sechs Schritten" },
  { id: "samsung", label: "Samsung Smart TV (Tizen)" },
  { id: "lg", label: "LG Smart TV (webOS)" },
  { id: "tizen-webos", label: "Tizen und webOS im Vergleich" },
  { id: "apps", label: "IPTV-Apps für Smart TVs" },
  { id: "m3u", label: "M3U-Playlist & Zugangsdaten" },
  { id: "netzwerk", label: "WLAN oder LAN?" },
  { id: "bildqualitaet", label: "Bildqualität & Ladezeiten" },
  { id: "fehler", label: "Fehler und Lösungen" },
  { id: "aeltere-tvs", label: "Ältere Fernseher & Sticks" },
  { id: "datenschutz", label: "Datenschutz & sichere Apps" },
  { id: "faq", label: "Häufige Fragen" },
];

export const keyFacts = [
  {
    title: "Kein Zusatzgerät nötig",
    text: "Samsung (Tizen) und LG (webOS) haben einen eigenen App-Store. IPTV läuft dort über eine App direkt im Fernseher.",
  },
  {
    title: "Verfügbarkeit prüfen",
    text: "Welche Apps angeboten werden, hängt von Modell, Softwareversion, Region und dem aktuellen Store-Angebot ab.",
  },
  {
    title: "Zugangsdaten bereithalten",
    text: "M3U-Adresse oder Xtream-Codes-Daten erhalten Sie von Ihrem Anbieter. Ein Tippfehler genügt, damit nichts lädt.",
  },
  {
    title: "Kabel schlägt Funk",
    text: "Ein LAN-Kabel liefert die gleichmäßigste Verbindung. Bei WLAN zählen Abstand, Wände und das Frequenzband.",
  },
];

export const checklist = [
  { title: "Modell und Baujahr notieren", text: "Die Modellnummer steht auf dem Typenschild an der Rückseite oder im Menü unter den Geräteinformationen. Damit klären Sie schnell, ob eine App für Ihren Fernseher angeboten wird." },
  { title: "Software aktualisieren", text: "Installieren Sie verfügbare Updates, bevor Sie Apps einrichten. Ältere Versionen sind eine häufige Ursache für Apps, die sich nicht installieren lassen oder abstürzen." },
  { title: "Herstellerkonto bereithalten", text: "Für Downloads aus dem Store verlangen Samsung und LG in der Regel ein Samsung- bzw. LG-Konto. Halten Sie E-Mail-Adresse und Passwort bereit." },
  { title: "Zugangsdaten vollständig vorliegen", text: "M3U-Adresse, Xtream-Codes-Daten (Server, Benutzername, Passwort) und gegebenenfalls eine EPG-Adresse. Am besten als Text zum Kopieren, nicht als Foto." },
  { title: "Internetverbindung testen", text: "Prüfen Sie im Netzwerkmenü des Fernsehers, ob eine Verbindung besteht. Für Full HD rechnen Sie mit rund 10 Mbit/s pro Stream, für 4K mit etwa 25 Mbit/s." },
  { title: "Speicherplatz prüfen", text: "Smart TVs haben begrenzten internen Speicher. Deinstallieren Sie Apps, die Sie nicht nutzen, bevor Sie neue hinzufügen." },
  { title: "Texteingabe erleichtern", text: "Lange Adressen per Fernbedienung einzutippen ist mühsam. Prüfen Sie, ob die App eine Eingabe über eine Website anbietet oder ob Sie die Smartphone-App des Herstellers als Tastatur nutzen können." },
  { title: "Zeit einplanen", text: "Beim ersten Start lädt die App Senderliste und Programmzeitschrift. Bei großen Listen kann das einige Minuten dauern – brechen Sie den Vorgang nicht vorzeitig ab." },
];

export const setupFlow = [
  { title: "Software aktualisieren", text: "Firmware des Fernsehers auf den neuesten Stand bringen." },
  { title: "Netzwerk prüfen", text: "LAN-Kabel anschließen oder ein stabiles WLAN wählen." },
  { title: "App installieren", text: "Offizielle App Ihres Dienstes oder einen Player aus dem Store laden." },
  { title: "Zugangsdaten eintragen", text: "M3U-Adresse oder Xtream-Codes-Daten exakt übernehmen." },
  { title: "Sender und EPG laden", text: "Den ersten Ladevorgang vollständig abwarten." },
  { title: "Testen und Favoriten", text: "Mehrere Sender prüfen und eine Favoritenliste anlegen." },
];

/* ---------------------------------------------------------------- Samsung */

export const samsungIntro = [
  "Samsung-Fernseher nutzen das Betriebssystem Tizen. Apps finden Sie im Smart Hub unter „Apps“. Wenn Sie IPTV auf dem Samsung TV einrichten möchten, installieren Sie dort entweder die offizielle App Ihres Dienstes oder eine IPTV-Player-App, die Ihre Zugangsart unterstützt.",
  "Die Menüführung hat sich über die Modelljahre mehrfach verändert. Die folgenden Pfade sind typische Beispiele. Heißt ein Menüpunkt bei Ihnen anders, hilft meist die Suchfunktion im Einstellungsmenü weiter.",
];

export const samsungSteps = [
  "Drücken Sie die Home-Taste der Fernbedienung und öffnen Sie „Apps“.",
  "Melden Sie sich mit Ihrem Samsung-Konto an, falls der Fernseher danach fragt.",
  "Wählen Sie die Lupe, geben Sie den Namen der App ein und öffnen Sie die Detailseite.",
  "Prüfen Sie Beschreibung, Bewertungen und das Datum der letzten Aktualisierung, und tippen Sie dann auf „Installieren“.",
  "Öffnen Sie die App und tragen Sie Ihre Zugangsdaten nach den Vorgaben der App ein – direkt am TV oder über die Website des Entwicklers.",
  "Warten Sie, bis Senderliste und EPG geladen sind, und legen Sie die App über „Zum Startbildschirm hinzufügen“ griffbereit ab.",
];

export const samsungTips = [
  { title: "Software-Update", text: "Meist unter Einstellungen › Support › Software-Update. Aktivieren Sie bei Bedarf die automatische Aktualisierung." },
  { title: "Bewegungsglättung", text: "Die Funktion heißt bei Samsung „Auto Motion Plus“. Wirkt Sport verzögert oder unnatürlich, schalten Sie sie testweise aus." },
  { title: "Vollständiger Neustart", text: "Bei vielen Modellen startet der Fernseher neu, wenn Sie die Ein-/Aus-Taste der Fernbedienung einige Sekunden gedrückt halten. Alternativ ziehen Sie den Netzstecker für etwa eine Minute." },
  { title: "Smart Hub zurücksetzen", text: "Je nach Modell unter Einstellungen › Support › Gerätepflege bzw. Eigendiagnose. Das entfernt installierte Apps und Anmeldungen – nur als letzter Schritt." },
];

/* ---------------------------------------------------------------- LG */

export const lgIntro = [
  "LG setzt auf das Betriebssystem webOS. Der App-Store heißt je nach Version „LG Content Store“ oder einfach „Apps“. Wer IPTV auf dem LG Fernseher einrichten möchte, geht grundsätzlich wie bei Samsung vor: App suchen, installieren, anmelden.",
  "Ein praktischer Unterschied ist die Magic Remote, die vielen LG-Modellen beiliegt. Mit ihrem Zeiger wählen Sie Buchstaben auf der Bildschirmtastatur direkt an. Das erleichtert die Eingabe langer Adressen spürbar.",
];

export const lgSteps = [
  "Drücken Sie die Home-Taste und öffnen Sie „Apps“ bzw. den „LG Content Store“.",
  "Melden Sie sich mit Ihrem LG-Konto an, falls der Fernseher danach fragt.",
  "Suchen Sie die gewünschte App über die Suchfunktion und öffnen Sie die Detailseite.",
  "Prüfen Sie Anbieter, Bewertungen und letzte Aktualisierung, und wählen Sie „Installieren“.",
  "Starten Sie die App und hinterlegen Sie Ihre Zugangsdaten. Nutzen Sie bei langen Adressen den Zeiger der Magic Remote oder die Web-Eingabe der App.",
  "Lassen Sie Senderliste und EPG vollständig laden und ordnen Sie die App im Startmenü an eine gut erreichbare Position.",
];

export const lgTips = [
  { title: "Software-Update", text: "Je nach webOS-Version unter Einstellungen › Support › Software-Update oder unter Allgemein › Geräteinformationen." },
  { title: "Bewegungsglättung", text: "Bei LG heißt die Funktion „TruMotion“. Bei Ruckeln oder Verzögerung lohnt ein Test mit ausgeschalteter Glättung." },
  { title: "Schnellstart+", text: "„Schnellstart+“ (Quick Start+) lässt den Fernseher nur in Bereitschaft gehen. Für einen echten Neustart deaktivieren Sie die Funktion vorübergehend oder ziehen kurz den Netzstecker." },
  { title: "App-Probleme", text: "Hängt eine App dauerhaft, deinstallieren Sie sie, starten den Fernseher vollständig neu und installieren die App anschließend erneut." },
];

/* ---------------------------------------------------------------- Vergleich */

export const osComparison = {
  headers: ["Merkmal", "Samsung (Tizen)", "LG (webOS)"],
  rows: [
    ["App-Store", "„Apps“ im Smart Hub", "„LG Content Store“ oder „Apps“"],
    ["Konto für Downloads", "In der Regel Samsung-Konto", "In der Regel LG-Konto"],
    ["Typische Bedienung", "Steuerkreuz und OK-Taste, je nach Modell mit Sprachsteuerung", "Bei vielen Modellen Magic Remote mit Zeiger"],
    ["Software-Update", "Meist Einstellungen › Support › Software-Update", "Je nach Version unter Support oder Allgemein"],
    ["Bewegungsglättung", "„Auto Motion Plus“", "„TruMotion“"],
    ["Apps außerhalb des Stores", "Nur über Entwicklerwerkzeuge, nicht für den Alltag gedacht", "Nur über Entwicklerwerkzeuge, nicht für den Alltag gedacht"],
  ],
  caption:
    "Bezeichnungen und Menüpfade können je nach Modelljahr, Softwareversion und Region abweichen. Maßgeblich sind die Angaben im Menü Ihres Fernsehers und auf der Website des Herstellers.",
};

export const osComparisonText = [
  "Für die IPTV-Einrichtung sind Tizen und webOS sich ähnlicher, als die Namen vermuten lassen: Beide Systeme beziehen Apps ausschließlich aus dem eigenen Store, beide verlangen meist ein Herstellerkonto, und bei beiden entscheidet das Modelljahr darüber, welche Apps überhaupt angezeigt werden.",
  "Unterschiede zeigen sich vor allem im Alltag: bei Menünamen, bei der Fernbedienung und bei der Frage, wie lange ein Modell noch Updates erhält. Android-basierte Fernseher und Streaming-Geräte haben dagegen Zugriff auf den deutlich größeren Google Play Store.",
];

/* ---------------------------------------------------------------- Apps */

export const appTypes = [
  {
    label: "Weg 1",
    title: "Offizielle App Ihres Dienstes",
    text: "Lizenzierte TV-Streaming-Dienste bieten häufig eigene Apps für Samsung und LG an. Sie melden sich mit Ihrem Kundenkonto an – Senderliste und Programmzeitschrift sind bereits integriert.",
    points: ["Einfachste Einrichtung", "Updates kommen vom Dienst selbst", "Verfügbarkeit je nach Modelljahr prüfen"],
  },
  {
    label: "Weg 2",
    title: "Player-App mit Direkteingabe",
    text: "Ein IPTV-Player spielt Inhalte ab, die Sie selbst hinzufügen – etwa eine M3U-Playlist oder einen Xtream-Codes-Zugang. Die Daten tragen Sie direkt in der App am Fernseher ein.",
    points: ["Unterstützte Zugangsarten vorab prüfen", "Lange Adressen per Fernbedienung mühsam", "Daten bleiben auf dem Fernseher"],
  },
  {
    label: "Weg 3",
    title: "Player-App mit Web-Aktivierung",
    text: "Manche Player zeigen beim Start eine Geräte-ID oder MAC-Adresse. Auf der Website des Entwicklers ordnen Sie dieser ID Ihre Playlist zu, und der Fernseher lädt sie anschließend herunter.",
    points: ["Bequeme Eingabe am PC oder Smartphone", "Teils kostenpflichtige Aktivierung", "Playlist liegt beim Entwickler – Datenschutz beachten"],
  },
];

export const appCheck = [
  "Wird die App laut Store-Seite noch aktualisiert? Ein Update-Datum, das Jahre zurückliegt, ist ein Warnsignal.",
  "Welche Zugangsarten unterstützt sie – M3U, Xtream Codes oder beides – und kann sie eine EPG-Adresse (XMLTV) einbinden?",
  "Gibt es eine kostenlose Testphase, bevor Sie für eine Aktivierung oder Premium-Funktionen bezahlen?",
  "Nennt der Entwickler ein Impressum oder eine Datenschutzerklärung, und ist erkennbar, wo Ihre Playlist gespeichert wird?",
  "Wirbt die App mit vorinstallierten oder kostenlosen Senderpaketen? Dann ist Vorsicht geboten – seriöse Player liefern keine Inhalte mit.",
];

export const availabilityNote =
  "Wir nennen bewusst keine einzelnen Player-Apps als „kompatibel“: Ob eine App in Ihrem Store erscheint, hängt vom Modell, der Softwareversion, der Region und dem aktuellen Angebot des Stores ab. Apps werden regelmäßig neu aufgenommen, aktualisiert oder entfernt.";

/* ---------------------------------------------------------------- M3U */

export const m3uIntro = [
  "Eine M3U-Playlist ist eine Textliste mit den Stream-Adressen aller Sender, oft ergänzt um Logos und Gruppen. Sie erhalten dafür von Ihrem Anbieter eine Adresse (URL), die Sie in die Player-App eintragen. Die App lädt die Liste und baut daraus die Senderübersicht auf.",
  "Viele Anbieter stellen alternativ einen Xtream-Codes-Zugang bereit. Dabei tragen Sie Server-Adresse, Benutzername und Passwort in getrennte Felder ein. Das ist am Fernseher oft einfacher, weil die einzelnen Angaben kürzer sind.",
];

export const m3uParts = [
  { part: "http://anbieter.example", label: "Server", text: "Adresse des Servers, inklusive http:// oder https://. Das Protokoll muss exakt stimmen." },
  { part: ":8080", label: "Port", text: "Die Zahl nach dem Doppelpunkt. Fehlt sie oder ist sie falsch, ist der Server nicht erreichbar." },
  { part: "username=… & password=…", label: "Zugangsdaten", text: "Ihre persönlichen Daten. Groß- und Kleinschreibung beachten." },
  { part: "type=m3u_plus", label: "Format", text: "Legt fest, welche Zusatzinformationen die Liste enthält, etwa Gruppen und Logos." },
];

export const m3uTips = [
  "Kopieren Sie Adressen immer per Copy & Paste aus der Nachricht Ihres Anbieters, statt sie abzutippen – zumindest bei der Eingabe über eine Website.",
  "Achten Sie auf versehentliche Leerzeichen am Anfang oder Ende. Am Fernseher sind sie kaum zu erkennen.",
  "Verwechslungsgefahr: die Ziffer 0 und der Buchstabe O, das kleine l und die Ziffer 1.",
  "Tragen Sie die EPG-Adresse (XMLTV) separat ein, falls Ihre App dafür ein eigenes Feld hat.",
  "Testen Sie die Adresse bei Zweifeln zuerst auf einem anderen Gerät, etwa im VLC media player am Computer.",
];

/* ---------------------------------------------------------------- Netzwerk */

export const networkRows = {
  headers: ["Kriterium", "LAN-Kabel", "WLAN"],
  rows: [
    ["Stabilität", "Sehr gleichmäßig", "Schwankt mit Abstand, Wänden und Auslastung"],
    ["Störanfälligkeit", "Unempfindlich gegen Funkstörungen", "Nachbarnetze und andere Funkgeräte können stören"],
    ["Aufwand", "Kabel oder Powerline-Adapter nötig", "Keine Kabel, sofort nutzbar"],
    ["Empfehlung", "Erste Wahl für 4K und Live-Sport", "Gut bei kurzer Distanz und 5-GHz-Band"],
  ],
};

export const networkTips = [
  { title: "LAN-Anschluss nutzen", text: "Viele Smart TVs haben eine LAN-Buchse, die bei manchen Modellen nur mit 100 Mbit/s arbeitet. Für IPTV-Streams reicht das in der Regel aus – entscheidend ist die Gleichmäßigkeit." },
  { title: "Powerline als Alternative", text: "Liegt kein Kabel zum Fernseher, übertragen Powerline-Adapter das Netzwerk über die Stromleitung. Die Leistung hängt stark von der Hausinstallation ab." },
  { title: "Das richtige WLAN-Band", text: "5 GHz bietet mehr Tempo bei kürzerer Reichweite, 2,4 GHz reicht weiter, ist aber störanfälliger. Steht der Router nah am Fernseher, ist 5 GHz meist die bessere Wahl." },
  { title: "Router-Standort", text: "Router nicht im Schrank oder hinter dem Fernseher verstecken. Schon ein freier Platz in einem Meter Höhe verbessert den Empfang oft deutlich." },
];

/* ---------------------------------------------------------------- Bildqualität */

export const qualityCards = [
  { title: "Bildmodus wählen", text: "Modi wie „Standard“ oder „Film“ zeigen Farben natürlicher als ein besonders heller Ladenmodus. Bei vielen Fernsehern steht zusätzlich ein „Filmmaker Mode“ zur Verfügung." },
  { title: "Bewegungsglättung testen", text: "„Auto Motion Plus“ (Samsung) und „TruMotion“ (LG) berechnen Zwischenbilder. Das kann bei IPTV-Streams zu Artefakten führen – vergleichen Sie mit und ohne." },
  { title: "Auflösung realistisch einschätzen", text: "Ein 4K-Fernseher skaliert Full-HD-Streams hoch. Schärfer als die Quelle wird das Bild dadurch nicht – die Stream-Qualität des Dienstes bleibt die Grenze." },
  { title: "Ton läuft versetzt", text: "Bei Soundbars oder AV-Receivern entsteht leicht ein Versatz. Viele Fernseher und Player-Apps bieten eine Einstellung zur Audio-Verzögerung." },
  { title: "Lange Ladezeiten", text: "Große Playlists und EPG-Daten brauchen beim ersten Laden Zeit. Blenden Sie in der App ungenutzte Gruppen aus, damit sie schneller reagiert." },
  { title: "Senderwechsel dauert", text: "Jeder Wechsel baut einen neuen Stream auf. Eine kurze Pufferzeit ist bei IPTV normal; deutlich längere Wartezeiten deuten auf Netzwerk- oder Serverprobleme hin." },
];

/* ---------------------------------------------------------------- Fehler */

export const troubleshooting = [
  { symptom: "App wird im Store nicht gefunden", cause: "Für Ihr Modell, Ihre Softwareversion oder Region nicht angeboten.", fix: "Software aktualisieren und erneut suchen. Erscheint die App dann noch nicht, ist ein Streaming-Stick die praktikable Alternative." },
  { symptom: "Installation bricht ab", cause: "Zu wenig Speicher oder ein Problem mit dem Herstellerkonto.", fix: "Ungenutzte Apps entfernen, im Konto ab- und wieder anmelden und den Fernseher vollständig neu starten." },
  { symptom: "„Ungültige Zugangsdaten“", cause: "Tippfehler, falsche Groß- und Kleinschreibung oder ein abgelaufener Zugang.", fix: "Daten neu kopieren oder Zeichen für Zeichen prüfen und den Status beim Anbieter klären." },
  { symptom: "Playlist lädt, Liste bleibt leer", cause: "Falsches Format gewählt oder Gruppen in der App ausgeblendet.", fix: "Zugangsart in der App prüfen (M3U oder Xtream Codes), Gruppenfilter zurücksetzen, Liste neu laden." },
  { symptom: "Bild ruckelt oder friert ein", cause: "Schwankende WLAN-Verbindung oder ausgelastetes Heimnetz.", fix: "LAN-Kabel testen, Router neu starten, parallele Downloads pausieren und das 5-GHz-Band nutzen." },
  { symptom: "Schwarzes Bild mit Ton", cause: "Der Fernseher oder die App unterstützt das Videoformat des Streams nicht.", fix: "Anderen Sender testen. Betrifft es mehrere Sender, kann ein anderer Player oder ein externes Gerät helfen." },
  { symptom: "EPG fehlt oder ist verschoben", cause: "EPG-Adresse fehlt, Zeitzone stimmt nicht oder die Sender sind nicht zugeordnet.", fix: "EPG-Adresse eintragen, Zeitzone und Zeitversatz prüfen und die Daten manuell aktualisieren." },
  { symptom: "App stürzt immer wieder ab", cause: "Veraltete App- oder TV-Software, voller Cache.", fix: "Updates installieren, App neu installieren und Schnellstart-Funktionen für einen echten Neustart kurz deaktivieren." },
];

/* ---------------------------------------------------------------- Ältere TVs */

export const olderTvSignals = [
  "Die gewünschte App erscheint im Store Ihres Fernsehers nicht oder lässt sich nicht installieren.",
  "Der Fernseher erhält keine Software-Updates mehr, und Apps melden, dass Ihre Version veraltet ist.",
  "Menü und Apps reagieren träge, Senderwechsel dauern spürbar länger als auf anderen Geräten.",
  "Sie möchten eine bestimmte Player-App nutzen, die nur für Android oder Fire OS angeboten wird.",
];

export const alternatives = [
  { name: "Fire TV Stick", href: "/geraete/fire-tv-stick", text: "Günstig nachrüsten über HDMI, mit großer Auswahl an Apps im Amazon Appstore.", linkLabel: "IPTV auf dem Fire TV Stick einrichten" },
  { name: "Android-TV- oder Google-TV-Gerät", href: "/geraete/android-tv-box", text: "Zugriff auf den Google Play Store und damit die größte Auswahl an IPTV-Playern.", linkLabel: "Android-TV-Box für IPTV einrichten" },
  { name: "MAG-Box", href: "/geraete/mag-box", text: "Reiner IPTV-Empfänger mit Portal statt App – bedient sich wie ein klassischer Receiver.", linkLabel: "MAG-Box mit Portal einrichten" },
  { name: "Enigma2-Receiver", href: "/geraete/enigma2-receiver", text: "IPTV neben Satellit oder Kabel in einer gemeinsamen Senderliste.", linkLabel: "IPTV auf Enigma2-Receivern" },
];

/* ---------------------------------------------------------------- Datenschutz */

export const privacyPoints = [
  { title: "Zugangsdaten wie ein Passwort behandeln", text: "Ihre M3U-Adresse enthält Benutzername und Passwort im Klartext. Teilen Sie sie nicht in Foren oder Screenshots und geben Sie sie nur in Apps ein, denen Sie vertrauen." },
  { title: "Web-Aktivierung bewusst nutzen", text: "Laden Sie Ihre Playlist über die Website eines App-Entwicklers hoch, liegt sie auf dessen Server. Lesen Sie vorher die Datenschutzerklärung und löschen Sie den Eintrag, wenn Sie die App nicht mehr nutzen." },
  { title: "Nur aus dem offiziellen Store installieren", text: "Tizen und webOS sind auf den eigenen Store ausgelegt. Anleitungen, die zum Umgehen über Entwicklermodi raten, sind für normale Nutzer weder nötig noch sinnvoll." },
  { title: "Datenschutzeinstellungen des Fernsehers prüfen", text: "Smart TVs bieten Optionen zu personalisierter Werbung und zur Auswertung von Sehgewohnheiten. Sie finden sie meist in den Einstellungen unter Datenschutz bzw. Nutzungsbedingungen und können sie dort häufig einschränken." },
  { title: "Bei Gratis-Versprechen skeptisch sein", text: "Apps oder Listen mit „allen Sendern kostenlos“ sind in der Regel nicht lizenziert. Mehr dazu lesen Sie in unseren Hinweisen zu [legalen IPTV-Angeboten](/iptv-legal)." },
];

/* ---------------------------------------------------------------- FAQ */

export const smartTvFaq: FaqItem[] = [
  {
    question: "Brauche ich für IPTV auf dem Smart TV ein Zusatzgerät?",
    answer:
      "Nicht unbedingt. Wird für Ihren Samsung- oder LG-Fernseher eine passende App angeboten, läuft IPTV direkt im Gerät. Ein Streaming-Stick ist erst nötig, wenn die App fehlt, der Fernseher keine Updates mehr erhält oder spürbar zu langsam ist.",
  },
  {
    question: "Welche IPTV-App ist die beste für Samsung und LG?",
    answer:
      "Eine allgemeingültige Antwort gibt es nicht. Entscheidend ist, ob die App in Ihrem Store angeboten wird, Ihre Zugangsart (M3U oder Xtream Codes) unterstützt und noch aktiv gepflegt wird. Die Verfügbarkeit hängt von Modell, Softwareversion, Region und dem aktuellen Store-Angebot ab.",
  },
  {
    question: "Warum finde ich eine bestimmte App nicht im Store meines Fernsehers?",
    answer:
      "Apps werden oft nur für bestimmte Modelljahre oder Regionen freigegeben, und manchmal entfernt der Entwickler oder Hersteller sie wieder. Installieren Sie zuerst alle Software-Updates. Erscheint die App weiterhin nicht, ist sie für Ihr Modell nicht verfügbar.",
  },
  {
    question: "Ist WLAN für IPTV auf dem Smart TV ausreichend?",
    answer:
      "Häufig ja, wenn der Router nicht weit entfernt steht und Sie das 5-GHz-Band nutzen. Für 4K-Inhalte, Live-Sport oder bei Ruckeln ist ein LAN-Kabel die stabilere Wahl. Als Richtwert gelten rund 10 Mbit/s pro Full-HD-Stream und etwa 25 Mbit/s für 4K.",
  },
  {
    question: "Kann ich eine M3U-Playlist direkt am Fernseher eintragen?",
    answer:
      "Ja, sofern die Player-App eine Direkteingabe anbietet. Viele Apps erlauben zusätzlich die Eingabe über eine Website, auf der Sie die Adresse bequem per Copy & Paste einfügen. Bei Xtream Codes sind die einzelnen Felder kürzer und am Fernseher leichter einzugeben.",
  },
  {
    question: "Kann ich Apps auf Samsung oder LG auch ohne Store installieren?",
    answer:
      "Beide Systeme sehen dafür nur Entwicklerwerkzeuge vor, die für App-Entwickler gedacht sind und nicht für den Alltag. Wenn Sie eine App benötigen, die im Store fehlt, ist ein Fire TV Stick oder ein Android-TV-Gerät die einfachere und sicherere Lösung.",
  },
];
