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
    slug: "android-tv-box",
    name: "Android-TV- und Google-TV-Boxen",
    shortName: "Android TV Box",
    icon: "box",
    title: "IPTV auf Android-TV- und Google-TV-Geräten einrichten",
    seoTitle: "IPTV auf Android TV Box einrichten – Apps, Tipps & Sicherheit",
    metaDescription:
      "IPTV auf Android TV und Google TV: passende Apps aus dem Play Store, Kodi mit PVR IPTV Simple Client und worauf Sie beim Kauf einer Box achten sollten.",
    excerpt:
      "Android-Geräte bieten die größte App-Auswahl für IPTV. So richten Sie sie ein und vermeiden unsichere Billig-Boxen.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 6,
    intro: [
      "Geräte mit Android TV oder Google TV, etwa der Chromecast mit Google TV, die Nvidia Shield oder viele Fernseher von Sony, Philips und TCL, nutzen den Google Play Store. Damit steht Ihnen die größte Auswahl an IPTV-Apps zur Verfügung.",
      "Gleichzeitig werden viele günstige Android-Boxen ohne Google-Zertifizierung verkauft. Diese erhalten oft keine Sicherheitsupdates und sind manchmal schon ab Werk mit fragwürdigen Apps bestückt.",
    ],
    summary: [
      "Bevorzugen Sie Geräte mit offiziellem Android TV oder Google TV und Zugang zum Play Store.",
      "Legale Dienste installieren Sie direkt aus dem Play Store.",
      "Für M3U-Playlists eignen sich TiviMate oder Kodi mit PVR IPTV Simple Client.",
      "Meiden Sie Boxen mit vorinstallierten Streaming-Apps unklarer Herkunft.",
    ],
    sections: [
      {
        heading: "Die richtige Box auswählen",
        list: [
          "Google-Zertifizierung: Nur zertifizierte Geräte haben offiziellen Zugang zum Play Store und erhalten Sicherheitsupdates.",
          "Leistung: Mindestens 2 GB Arbeitsspeicher, für 4K besser mehr.",
          "Anschlüsse: Ein LAN-Anschluss sorgt für stabilere Streams als WLAN.",
          "Updates: Prüfen Sie, ob der Hersteller regelmäßig Software-Updates liefert.",
        ],
        note: "Boxen, die mit „alle Sender kostenlos“ oder vorinstallierten Senderlisten beworben werden, sind ein Warnsignal. Solche Angebote sind in der Regel nicht lizenziert und rechtlich riskant.",
      },
      {
        heading: "Legale Dienste über den Play Store",
        steps: [
          "Öffnen Sie den Google Play Store auf dem Gerät.",
          "Suchen Sie nach Ihrem Dienst, zum Beispiel „Zattoo“, „waipu.tv“ oder „Joyn“.",
          "Installieren Sie die App und melden Sie sich an.",
        ],
      },
      {
        heading: "M3U-Playlist mit TiviMate oder Kodi",
        body: [
          "TiviMate ist eine verbreitete IPTV-Player-App mit übersichtlicher Programmzeitschrift. Einige Funktionen wie mehrere Playlists sind kostenpflichtig.",
          "Kodi ist kostenlos und quelloffen. Die IPTV-Funktion steckt im Add-on „PVR IPTV Simple Client“.",
        ],
        steps: [
          "Installieren Sie Kodi aus dem Play Store und öffnen Sie es.",
          "Gehen Sie zu Add-ons › Aus Repository installieren › PVR-Clients › PVR IPTV Simple Client.",
          "Öffnen Sie die Einstellungen des Add-ons und tragen Sie unter „M3U-Playlist-URL“ Ihre Adresse ein.",
          "Hinterlegen Sie unter „EPG-Einstellungen“ die XMLTV-Adresse, falls vorhanden.",
          "Starten Sie Kodi neu. Die Sender erscheinen danach im Menüpunkt „TV“.",
        ],
      },
      {
        heading: "Sicherheit und Datenschutz",
        list: [
          "Installieren Sie Apps bevorzugt aus dem Play Store.",
          "Geben Sie keine Zahlungsdaten in Apps unbekannter Herkunft ein.",
          "Halten Sie Gerät und Apps aktuell.",
          "Entfernen Sie vorinstallierte Apps, die Sie nicht kennen, oder setzen Sie das Gerät auf Werkseinstellungen zurück.",
        ],
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Android TV und Google TV?",
        answer:
          "Google TV ist eine neuere Bedienoberfläche, die auf Android TV aufsetzt. Für IPTV-Apps macht das kaum einen Unterschied, beide nutzen den Google Play Store.",
      },
      {
        question: "Ist Kodi legal?",
        answer:
          "Ja. Kodi ist eine legale, quelloffene Mediacenter-Software. Rechtlich problematisch sind nur Add-ons, die nicht lizenzierte Inhalte bereitstellen.",
      },
    ],
    related: [
      { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist und Xtream Codes erklärt" },
      { href: "/anleitungen/iptv-anbieter-erkennen", label: "Seriöse IPTV-Anbieter erkennen" },
      { href: "/geraete/fire-tv-stick", label: "IPTV auf dem Fire TV Stick" },
    ],
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
    slug: "enigma2-receiver",
    name: "Enigma2-Receiver (VU+, Dreambox, Zgemma, GigaBlue)",
    shortName: "Enigma2 Receiver",
    icon: "receiver",
    title: "IPTV auf Enigma2-Receivern einrichten",
    seoTitle: "IPTV auf Enigma2 einrichten – VU+, Dreambox, Zgemma & GigaBlue",
    metaDescription:
      "IPTV auf Linux-Receivern mit Enigma2: M3U als Bouquet einbinden, passende Plugins, ServiceApp und Tipps für VU+, Dreambox, Zgemma und GigaBlue.",
    excerpt:
      "Linux-Receiver können IPTV-Streams direkt in die Senderliste einbinden. So gelingt es auf VU+, Dreambox, Zgemma und GigaBlue.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 7,
    intro: [
      "Enigma2 ist die Bedienoberfläche vieler Linux-Receiver, zum Beispiel von VU+, Dreambox, Zgemma und GigaBlue. Neben Satellit, Kabel und Antenne können diese Geräte auch IPTV-Streams abspielen.",
      "Der große Vorteil: IPTV-Sender erscheinen auf Wunsch direkt in Ihrer gewohnten Senderliste, neben den Sat- oder Kabelsendern.",
    ],
    summary: [
      "IPTV-Streams landen auf Enigma2 als eigenes Bouquet in der Senderliste.",
      "M3U-Playlists wandeln Sie mit einem Plugin oder Skript in ein Bouquet um.",
      "Das Plugin ServiceApp verbessert bei vielen Images die Wiedergabe von Streams.",
      "Welche Plugins verfügbar sind, hängt vom installierten Image ab, etwa OpenATV oder OpenPLi.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        list: [
          "Ein Receiver mit aktuellem Enigma2-Image, zum Beispiel OpenATV, OpenPLi oder VTi.",
          "Netzwerkverbindung, idealerweise per LAN-Kabel.",
          "Eine M3U-Playlist, etwa aus Ihrer FRITZ!Box mit DVB-C-Tuner, oder Zugangsdaten eines Anbieters, der dieses Format unterstützt.",
          "Optional: Ein Programm wie DreamboxEDIT oder FileZilla, um Dateien auf den Receiver zu übertragen.",
        ],
      },
      {
        heading: "Weg 1: Plugin aus dem Plugin-Browser",
        body: [
          "Viele Images bieten im Plugin-Browser Erweiterungen an, die M3U-Playlists oder Xtream-Codes-Zugänge automatisch als Bouquet anlegen. Bekannte Beispiele sind XStreamity oder e2m3u2bouquet. Welche Plugins angeboten werden, unterscheidet sich je nach Image.",
        ],
        steps: [
          "Drücken Sie die grüne Taste bzw. öffnen Sie Menü › Plugins.",
          "Wählen Sie „Plugins herunterladen“ und suchen Sie in den Kategorien „Extensions“ oder „IPTV“.",
          "Installieren Sie das Plugin und starten Sie die Benutzeroberfläche neu.",
          "Tragen Sie im Plugin Ihre Playlist-Adresse bzw. Zugangsdaten ein und erstellen Sie das Bouquet.",
        ],
      },
      {
        heading: "Weg 2: Bouquet-Datei manuell anlegen",
        body: [
          "Fortgeschrittene Nutzer können eine Bouquet-Datei selbst erstellen. Jeder Stream wird darin mit einem Service-Typ, der Stream-Adresse und dem Sendernamen eingetragen. Der Service-Typ 4097 nutzt den Standard-Player des Images. Mit installiertem ServiceApp stehen zusätzlich die Typen 5001 und 5002 zur Verfügung.",
          "Die fertige Datei kopieren Sie nach /etc/enigma2/ und tragen sie in der Datei bouquets.tv ein. Anschließend laden Sie die Senderlisten neu.",
        ],
        note: "Sichern Sie vor jeder Änderung Ihre bestehenden Senderlisten. Ein Fehler in der Bouquet-Datei kann die Senderliste unbrauchbar machen.",
      },
      {
        heading: "Wiedergabe verbessern mit ServiceApp",
        body: [
          "ServiceApp ist ein Plugin, das alternative Player wie exteplayer3 oder gstplayer für Streams bereitstellt. Bei Rucklern, fehlendem Ton oder langen Umschaltzeiten lohnt ein Wechsel des Players in den ServiceApp-Einstellungen.",
        ],
      },
    ],
    faq: [
      {
        question: "Brauche ich für IPTV auf Enigma2 OSCam?",
        answer:
          "Nein. OSCam ist eine Softcam für verschlüsselte Sat- und Kabelsender und hat mit IPTV-Streams nichts zu tun.",
      },
      {
        question: "Kann ich IPTV-Sender aufnehmen?",
        answer:
          "Technisch ist das auf vielen Enigma2-Receivern möglich, sofern eine Festplatte oder ein USB-Stick angeschlossen ist. Ob Aufnahmen erlaubt sind, regeln die Nutzungsbedingungen Ihres Anbieters.",
      },
    ],
    related: [
      { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist und Xtream Codes erklärt" },
      { href: "/anleitungen/epg-einrichten", label: "EPG für IPTV einrichten" },
      { href: "/geraete/mag-box", label: "IPTV auf der MAG-Box" },
    ],
  },
];

export function getDevice(slug: string): Device | undefined {
  return devices.find((device) => device.slug === slug);
}
