import type { Article } from "./content-types";

export type Guide = Article & {
  category: "Ratgeber" | "Grundlagen" | "Fehlerhilfe";
};

const PUBLISHED = "2026-10-28";

export const guides: Guide[] = [
  {
    slug: "iptv-anbieter-erkennen",
    category: "Ratgeber",
    title: "IPTV kaufen: So erkennen Sie seriöse Anbieter in Deutschland",
    seoTitle: "IPTV kaufen – seriöse IPTV-Anbieter in Deutschland erkennen",
    metaDescription:
      "Bevor Sie IPTV kaufen: Diese Checkliste zeigt, woran Sie seriöse IPTV-Anbieter in Deutschland erkennen und welche Warnsignale auf illegale Angebote hindeuten.",
    excerpt:
      "Eine Checkliste für den Kauf: Impressum, Lizenzen, Zahlungswege und Warnsignale bei verdächtig günstigen Angeboten.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 6,
    intro: [
      "Wer „IPTV kaufen“ sucht, findet unzählige Angebote. Manche stammen von etablierten Unternehmen mit Lizenzen für die gezeigten Sender. Andere verkaufen Zugänge zu Hunderten Pay-TV-Sendern für wenige Euro im Jahr.",
      "Die zweite Gruppe ist in Deutschland fast immer illegal. Das Risiko tragen dabei nicht nur die Verkäufer, sondern auch die Kunden. Mit der folgenden Checkliste erkennen Sie seriöse Anbieter.",
    ],
    summary: [
      "Seriöse Anbieter haben ein vollständiges Impressum mit Anschrift in der EU.",
      "Sie werben mit konkreten, lizenzierten Senderpaketen und nicht mit „allen Sendern weltweit“.",
      "Sie bieten übliche Zahlungswege wie Lastschrift, Kreditkarte oder PayPal, keine reine Krypto- oder Gutscheinzahlung.",
      "Preise weit unter denen bekannter Anbieter sind ein deutliches Warnsignal.",
    ],
    sections: [
      {
        heading: "Checkliste: Daran erkennen Sie seriöse IPTV-Anbieter",
        list: [
          "Impressum: Vollständiger Name, ladungsfähige Anschrift und Kontaktmöglichkeit, wie es das deutsche Recht vorschreibt.",
          "Transparente Senderliste: Der Anbieter nennt konkret, welche Sender in welchem Paket enthalten sind.",
          "Eigene Apps in offiziellen Stores: Die App ist im Google Play Store, Apple App Store oder Amazon Appstore erhältlich.",
          "Verträge und AGB: Laufzeit, Kündigung und Widerrufsrecht sind klar geregelt.",
          "Übliche Zahlungswege: Lastschrift, Kreditkarte, PayPal oder Rechnung.",
          "Erreichbarer Kundenservice mit festen Kontaktwegen.",
        ],
      },
      {
        heading: "Warnsignale für illegale Angebote",
        list: [
          "„Über 10.000 Sender“ oder „alle Sky- und DAZN-Inhalte“ zu einem Bruchteil des regulären Preises.",
          "Kein oder ein offensichtlich unvollständiges Impressum.",
          "Verkauf ausschließlich über Messenger, Foren oder Social-Media-Profile.",
          "Zahlung nur per Kryptowährung, Gutscheinkarten oder an Privatpersonen.",
          "Zugangsdaten als „Line“ oder „Reseller-Panel“ ohne erkennbares Unternehmen dahinter.",
        ],
        note: "Der Europäische Gerichtshof hat 2017 entschieden, dass bereits das Streamen offensichtlich illegaler Inhalte eine Urheberrechtsverletzung sein kann (Rechtssache C‑527/15). Wer solche Zugänge kauft, riskiert Abmahnungen.",
      },
      {
        heading: "Welche legalen Möglichkeiten gibt es?",
        body: [
          "In Deutschland gibt es mehrere lizenzierte TV-Streaming-Dienste und kostenlose Angebote der Sender selbst. Eine Übersicht mit Hinweisen zur Auswahl finden Sie auf unserer Seite [IPTV legal in Deutschland](/iptv-legal).",
        ],
      },
      {
        heading: "Wobei wir helfen und wobei nicht",
        body: [
          "Wir verkaufen keine Senderpakete und keine Zugangsdaten. Wir helfen Ihnen, ein passendes legales Angebot zu finden, und richten es auf Ihren Geräten ein. Details finden Sie bei unseren [Paketen](/iptv-pakete).",
        ],
      },
    ],
    faq: [
      {
        question: "Ist IPTV in Deutschland legal?",
        answer:
          "IPTV ist zunächst nur eine Übertragungstechnik und als solche legal. Entscheidend ist, ob der Anbieter die Rechte an den gezeigten Inhalten besitzt.",
      },
      {
        question: "Was passiert, wenn ich versehentlich einen illegalen Anbieter genutzt habe?",
        answer:
          "Beenden Sie die Nutzung und kündigen Sie etwaige Zahlungen. Bei konkreten rechtlichen Fragen, etwa nach einer Abmahnung, wenden Sie sich an eine Anwältin oder einen Anwalt bzw. an eine Verbraucherzentrale.",
      },
    ],
    related: [
      { href: "/iptv-legal", label: "IPTV legal in Deutschland" },
      { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist und Xtream Codes erklärt" },
      { href: "/iptv-pakete", label: "Unsere Einrichtungs- und Support-Pakete" },
    ],
  },
  {
    slug: "m3u-playlist-xtream-codes",
    category: "Grundlagen",
    title: "M3U-Playlist, Xtream Codes und Portal: IPTV-Zugangsarten erklärt",
    seoTitle: "M3U-Playlist & Xtream Codes erklärt – IPTV-Zugangsarten",
    metaDescription:
      "Was ist eine M3U-Playlist, was sind Xtream Codes und wofür braucht man ein Portal? Die drei IPTV-Zugangsarten einfach erklärt, mit Beispielen und Tipps.",
    excerpt:
      "Die drei gängigen IPTV-Zugangsarten im Vergleich und welche App zu welcher Zugangsart passt.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 5,
    intro: [
      "Wer eine IPTV-Player-App einrichtet, wird meist nach einer von drei Angaben gefragt: einer M3U-Adresse, Xtream-Codes-Zugangsdaten oder einer Portal-Adresse.",
      "Alle drei Wege führen zum gleichen Ziel, einer Senderliste mit Streams. Sie unterscheiden sich aber im Komfort und darin, welche Geräte sie unterstützen.",
    ],
    summary: [
      "M3U ist eine einfache Textliste mit Stream-Adressen und wird von fast jeder Player-App unterstützt.",
      "Xtream Codes nutzt Server, Benutzername und Passwort und liefert Senderliste, EPG und Mediathek bequem in einem.",
      "Ein Portal wird vor allem von MAG-Boxen verwendet und ist an die MAC-Adresse des Geräts gebunden.",
    ],
    sections: [
      {
        heading: "Die drei Zugangsarten im Vergleich",
        table: {
          headers: ["Zugangsart", "Angaben", "Typische Geräte", "EPG"],
          rows: [
            ["M3U-Playlist", "Eine Adresse (URL) oder Datei", "Fast alle Player-Apps, Kodi, Enigma2", "Separate XMLTV-Adresse nötig"],
            ["Xtream Codes", "Server, Benutzername, Passwort", "TiviMate, IPTV Smarters, viele Android-Apps", "Meist automatisch enthalten"],
            ["Portal (Stalker)", "Portal-URL und MAC-Adresse", "MAG-Boxen, einige Emulator-Apps", "Im Portal enthalten"],
          ],
        },
      },
      {
        heading: "Was ist eine M3U-Playlist?",
        body: [
          "Eine M3U-Datei ist eine einfache Textdatei. Jeder Eintrag enthält einen Sendernamen und die Adresse des zugehörigen Streams, oft ergänzt um ein Logo und eine Gruppe wie „Nachrichten“ oder „Sport“.",
          "Ein legales Praxisbeispiel: Eine FRITZ!Box mit DVB-C-Tuner stellt die empfangenen Kabelsender im Heimnetz als M3U-Playlist bereit. Diese können Sie in Apps wie VLC oder Kodi auf anderen Geräten nutzen.",
        ],
      },
      {
        heading: "Was sind Xtream Codes?",
        body: [
          "„Xtream Codes“ bezeichnet eine Schnittstelle, über die eine App mit Server-Adresse, Benutzername und Passwort automatisch Senderliste, Programmzeitschrift und gegebenenfalls Video-on-Demand abruft.",
          "Für Sie bedeutet das weniger Tipparbeit und eine meist besser sortierte Senderliste als bei einer reinen M3U-Adresse.",
        ],
      },
      {
        heading: "Was ist ein Portal?",
        body: [
          "Portale werden hauptsächlich von [MAG-Boxen](/geraete/mag-box) genutzt. Die Box meldet sich mit ihrer MAC-Adresse am Portal an. Deshalb muss der Anbieter diese Adresse vorher freischalten.",
        ],
      },
      {
        heading: "Sicherheitstipps",
        list: [
          "Geben Sie Zugangsdaten nur in Apps ein, denen Sie vertrauen.",
          "Teilen Sie M3U-Adressen nicht öffentlich. Sie enthalten oft Ihre persönlichen Zugangsdaten im Klartext.",
          "Nutzen Sie nur Zugänge von Anbietern, die die Rechte an den Inhalten besitzen.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann ich eine M3U-Playlist selbst bearbeiten?",
        answer:
          "Ja. Da es sich um eine Textdatei handelt, können Sie Sender mit einem Texteditor sortieren oder entfernen. Bei Online-Playlists gehen Änderungen allerdings beim nächsten Abruf verloren.",
      },
      {
        question: "Welche Zugangsart ist die beste?",
        answer:
          "Für Android-Apps ist Xtream Codes meist am bequemsten. M3U ist am universellsten. Ein Portal brauchen Sie in der Regel nur für MAG-Boxen.",
      },
    ],
    related: [
      { href: "/anleitungen/epg-einrichten", label: "EPG für IPTV einrichten" },
      { href: "/geraete/android-tv-box", label: "IPTV auf Android-TV-Geräten" },
      { href: "/geraete/enigma2-receiver", label: "IPTV auf Enigma2-Receivern" },
    ],
  },
  {
    slug: "iptv-ruckelt-loesungen",
    category: "Fehlerhilfe",
    title: "IPTV ruckelt oder friert ein: Ursachen und Lösungen",
    seoTitle: "IPTV ruckelt oder buffert? Ursachen und Lösungen",
    metaDescription:
      "IPTV ruckelt, buffert oder friert ein? Die häufigsten Ursachen von WLAN über Gerät bis Server und konkrete Lösungen Schritt für Schritt.",
    excerpt:
      "Von WLAN-Problemen bis zur überlasteten App: So finden Sie systematisch die Ursache für Ruckler.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 6,
    intro: [
      "Ruckelnde Bilder, ständiges Nachladen oder Standbilder gehören zu den häufigsten Problemen bei IPTV. Die gute Nachricht: In den meisten Fällen liegt die Ursache im eigenen Heimnetz und lässt sich selbst beheben.",
      "Gehen Sie die folgenden Punkte am besten der Reihe nach durch. So grenzen Sie das Problem schnell ein.",
    ],
    summary: [
      "Testen Sie zuerst die Internetgeschwindigkeit direkt am Wiedergabegerät.",
      "WLAN ist die häufigste Ursache. Ein LAN-Kabel löst viele Probleme sofort.",
      "Ein Neustart von Router und Gerät sowie das Leeren des App-Caches hilft oft.",
      "Ruckeln nur einzelne Sender, liegt das Problem meist beim Anbieter.",
    ],
    sections: [
      {
        heading: "Schritt 1: Problem eingrenzen",
        list: [
          "Ruckeln alle Sender oder nur einzelne? Einzelne Sender deuten auf eine Störung beim Anbieter hin.",
          "Tritt das Problem zu bestimmten Uhrzeiten auf, etwa abends? Dann ist Ihr Internetanschluss oder der Server womöglich ausgelastet.",
          "Ruckelt es auch auf einem anderen Gerät im selben Netz? Wenn nicht, liegt es am ersten Gerät.",
        ],
      },
      {
        heading: "Schritt 2: Heimnetz prüfen",
        steps: [
          "Messen Sie die Geschwindigkeit direkt auf dem Wiedergabegerät, zum Beispiel mit einer Speedtest-App.",
          "Verbinden Sie das Gerät testweise per LAN-Kabel mit dem Router.",
          "Nutzen Sie bei WLAN das 5-GHz-Band und stellen Sie den Router möglichst frei und nah auf.",
          "Pausieren Sie große Downloads oder Updates auf anderen Geräten.",
          "Starten Sie Router und Wiedergabegerät neu.",
        ],
        body: [
          "Welche Bandbreite Sie brauchen, lesen Sie in unserer Anleitung [Welche Internetgeschwindigkeit braucht IPTV?](/anleitungen/internetgeschwindigkeit-iptv).",
        ],
      },
      {
        heading: "Schritt 3: Gerät und App prüfen",
        list: [
          "Leeren Sie den Cache der Player-App.",
          "Aktualisieren Sie App und Gerätesoftware.",
          "Wechseln Sie in den App-Einstellungen den Player bzw. Decoder, etwa zwischen Hardware- und Software-Dekodierung.",
          "Erhöhen Sie, falls möglich, die Puffergröße in der App.",
          "Schließen Sie Hintergrund-Apps oder starten Sie das Gerät neu.",
        ],
      },
      {
        heading: "Schritt 4: Anbieter kontaktieren",
        body: [
          "Wenn alle Tests im Heimnetz unauffällig sind und das Problem bleibt, wenden Sie sich mit genauen Angaben an Ihren Anbieter: betroffene Sender, Uhrzeit, Gerät und App.",
        ],
        note: "Manche Internetanbieter drosseln bestimmte Verbindungen zu Stoßzeiten. Ein VPN wird oft als Lösung empfohlen, kann die Verbindung aber auch verlangsamen. Testen Sie das nur, wenn Ihr Anbieter VPN-Nutzung erlaubt.",
      },
    ],
    faq: [
      {
        question: "Warum ruckelt IPTV nur abends?",
        answer:
          "Abends nutzen besonders viele Menschen das Internet. Dadurch können sowohl Ihr Anschluss als auch die Server des Anbieters stärker ausgelastet sein.",
      },
      {
        question: "Hilft ein WLAN-Repeater?",
        answer:
          "Manchmal. Ein Repeater verbessert die Reichweite, halbiert aber je nach Modell die verfügbare Bandbreite. Ein LAN-Kabel oder ein Powerline-Adapter ist meist die stabilere Lösung.",
      },
    ],
    related: [
      { href: "/anleitungen/internetgeschwindigkeit-iptv", label: "Welche Internetgeschwindigkeit braucht IPTV?" },
      { href: "/geraete/fire-tv-stick", label: "IPTV auf dem Fire TV Stick" },
      { href: "/iptv-pakete", label: "Persönliche Hilfe bei der Fehlersuche" },
    ],
  },
  {
    slug: "epg-einrichten",
    category: "Grundlagen",
    title: "EPG für IPTV einrichten: So bekommen Sie die Programmzeitschrift",
    seoTitle: "EPG für IPTV einrichten – XMLTV, Zeitversatz & Fehler",
    metaDescription:
      "EPG für IPTV einrichten: Was eine XMLTV-Adresse ist, wie Sie den elektronischen Programmführer in TiviMate, Kodi und Co. hinterlegen und Zeitversatz beheben.",
    excerpt:
      "Was eine XMLTV-Adresse ist, wo Sie sie eintragen und warum das Programm manchmal um eine Stunde verschoben ist.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 4,
    intro: [
      "Der EPG (Electronic Program Guide) ist die elektronische Programmzeitschrift. Er zeigt, was gerade läuft und was als Nächstes kommt.",
      "Bei Apps legaler Dienste ist der EPG fest eingebaut. Bei Player-Apps mit M3U-Playlist müssen Sie ihn meist selbst einrichten.",
    ],
    summary: [
      "Der EPG kommt meist als XMLTV-Datei über eine eigene Adresse.",
      "Bei Xtream-Codes-Zugängen wird der EPG oft automatisch geladen.",
      "Zeitversatz beheben Sie über die Zeitzonen- bzw. Offset-Einstellung der App.",
    ],
    sections: [
      {
        heading: "So funktioniert der EPG bei IPTV",
        body: [
          "Die Programmdaten liegen in einer XMLTV-Datei. Die Player-App ordnet die Daten anhand einer Kennung, der sogenannten tvg-id, den Sendern in Ihrer Playlist zu. Fehlt diese Kennung oder passt sie nicht, bleibt der EPG für diesen Sender leer.",
        ],
      },
      {
        heading: "EPG in gängigen Apps einrichten",
        table: {
          headers: ["App", "Wo eintragen"],
          rows: [
            ["TiviMate", "Einstellungen › Playlists › Playlist wählen › EPG-Quellen"],
            ["Kodi (PVR IPTV Simple Client)", "Add-on-Einstellungen › EPG-Einstellungen › XMLTV-URL"],
            ["IPTV Smarters", "Bei Xtream Codes automatisch, sonst über „EPG laden“"],
            ["Enigma2", "Über ein EPG-Plugin wie EPGImport, je nach Image"],
          ],
          caption: "Menübezeichnungen können je nach App-Version abweichen.",
        },
      },
      {
        heading: "Häufige EPG-Probleme",
        list: [
          "EPG ist leer: XMLTV-Adresse prüfen und die Daten manuell aktualisieren.",
          "Programm ist um eine oder zwei Stunden verschoben: Den Zeitversatz (EPG-Offset) in der App anpassen. Das tritt häufig nach der Zeitumstellung auf.",
          "Nur einige Sender haben EPG: Die Senderkennungen in Playlist und EPG-Datei passen nicht zusammen. In vielen Apps können Sie den EPG manuell zuordnen.",
        ],
      },
    ],
    faq: [
      {
        question: "Kostet der EPG extra?",
        answer:
          "Bei seriösen Anbietern ist der EPG im Abonnement enthalten. Es gibt auch kostenlose XMLTV-Quellen für frei empfangbare Sender.",
      },
      {
        question: "Wie oft wird der EPG aktualisiert?",
        answer:
          "Das legen Sie in der App fest. Ein Intervall von 12 bis 24 Stunden ist üblich und reicht in der Regel aus.",
      },
    ],
    related: [
      { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist und Xtream Codes erklärt" },
      { href: "/geraete/android-tv-box", label: "IPTV auf Android-TV-Geräten" },
      { href: "/geraete/enigma2-receiver", label: "IPTV auf Enigma2-Receivern" },
    ],
  },
  {
    slug: "internetgeschwindigkeit-iptv",
    category: "Grundlagen",
    title: "Welche Internetgeschwindigkeit braucht IPTV?",
    seoTitle: "Internetgeschwindigkeit für IPTV – Mbit/s für HD & 4K",
    metaDescription:
      "Wie viel Mbit/s braucht IPTV in SD, HD und 4K? Richtwerte, Rechenbeispiele für mehrere Geräte und Tipps, wie Sie Ihr Heimnetz für IPTV optimieren.",
    excerpt:
      "Richtwerte für SD, HD und 4K, ein Rechenbeispiel für Familien und Tipps für ein stabiles Heimnetz.",
    publishedAt: PUBLISHED,
    readingTimeMinutes: 4,
    intro: [
      "IPTV braucht eine stabile Internetverbindung. Wie viel Bandbreite nötig ist, hängt von der Bildqualität und davon ab, wie viele Geräte gleichzeitig streamen.",
      "Die folgenden Werte sind Richtwerte. Der tatsächliche Bedarf hängt vom Anbieter und von der verwendeten Komprimierung ab.",
    ],
    summary: [
      "SD: etwa 3 bis 5 Mbit/s pro Stream.",
      "HD: etwa 8 bis 10 Mbit/s pro Stream.",
      "4K: etwa 20 bis 25 Mbit/s pro Stream.",
      "Planen Sie zusätzlich Reserve für andere Geräte im Haushalt ein.",
    ],
    sections: [
      {
        heading: "Richtwerte nach Bildqualität",
        table: {
          headers: ["Qualität", "Bandbreite pro Stream (Richtwert)", "Empfohlener Anschluss"],
          rows: [
            ["SD", "3–5 Mbit/s", "ab 16 Mbit/s"],
            ["HD (720p/1080p)", "8–10 Mbit/s", "ab 50 Mbit/s"],
            ["4K / UHD", "20–25 Mbit/s", "ab 100 Mbit/s"],
          ],
          caption: "Der empfohlene Anschluss berücksichtigt Reserve für weitere Geräte im Haushalt.",
        },
      },
      {
        heading: "Rechenbeispiel für einen Haushalt",
        body: [
          "Eine Familie schaut im Wohnzimmer in 4K und im Kinderzimmer in HD, während nebenbei Smartphones genutzt werden. Rechnen Sie dann mit etwa 25 Mbit/s für 4K, 10 Mbit/s für HD und 10 Mbit/s Reserve, zusammen also rund 45 Mbit/s.",
          "Wichtiger als die Spitzengeschwindigkeit ist dabei die Stabilität. Ein 100-Mbit/s-Anschluss nützt wenig, wenn das WLAN im Wohnzimmer nur 15 Mbit/s schafft.",
        ],
      },
      {
        heading: "So optimieren Sie Ihr Heimnetz",
        list: [
          "Verbinden Sie das Wiedergabegerät per LAN-Kabel oder Powerline-Adapter.",
          "Nutzen Sie bei WLAN das 5-GHz-Band oder ein Mesh-System.",
          "Prüfen Sie die Geschwindigkeit mit der Breitbandmessung der Bundesnetzagentur unter breitbandmessung.de.",
          "Halten Sie die Firmware Ihres Routers aktuell.",
        ],
      },
    ],
    faq: [
      {
        question: "Reicht ein 16-Mbit/s-Anschluss für IPTV?",
        answer:
          "Für einen HD-Stream meist ja, solange kein anderes Gerät viel Bandbreite nutzt. Für 4K oder mehrere gleichzeitige Streams ist er zu knapp.",
      },
      {
        question: "Funktioniert IPTV über mobiles Internet?",
        answer:
          "Ja, über LTE oder 5G ist das möglich. Beachten Sie aber das Datenvolumen: Eine Stunde HD verbraucht grob 3 bis 4 GB.",
      },
    ],
    related: [
      { href: "/anleitungen/iptv-ruckelt-loesungen", label: "IPTV ruckelt – Ursachen und Lösungen" },
      { href: "/anleitungen#geraete", label: "IPTV-Anleitungen nach Gerät" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
