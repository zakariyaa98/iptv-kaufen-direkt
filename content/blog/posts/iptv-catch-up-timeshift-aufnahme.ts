import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "iptv-catch-up-timeshift-aufnahme",
  status: "published",
  featured: true,
  category: "iptv-apps",
  title: "Catch-up, Timeshift und Aufnahme: Zeitversetzt fernsehen mit IPTV",
  seoTitle: "IPTV Catch-up & Timeshift erklärt – Replay und Aufnahme",
  metaDescription:
    "Catch-up, Timeshift, Restart oder Aufnahme? So funktioniert zeitversetztes Fernsehen bei IPTV, was Ihr Anbieter und Ihre App dafür bieten müssen und was bei Fehlern hilft.",
  excerpt:
    "Pausieren, eine Sendung von vorn starten oder gestern Verpasstes nachholen: Hinter jeder Funktion steckt eine andere Technik. Hier erfahren Sie, was Sie dafür brauchen.",
  keywords: [
    "Catch-up",
    "Catchup",
    "Timeshift",
    "Replay",
    "Restart",
    "TV-Archiv",
    "zeitversetzt",
    "Live-Pause",
    "Aufnahme",
    "aufnehmen",
    "Cloud-Aufnahme",
    "Recording",
    "EPG",
    "Xtream Codes",
    "M3U",
    "Kodi",
    "Speicher",
  ],
  publishedAt: "2026-11-08",
  image: {
    src: "/images/blog/iptv-catch-up-timeshift-aufnahme/iptv-catch-up-timeshift-aufnahme.svg",
    width: 1200,
    height: 675,
    alt: "Illustration: Programmzeitschrift über einer Zeitleiste mit markiertem Archivbereich, Live-Markierung sowie Symbolen für Pause, Zurückspulen und Aufnahme",
  },
  intro: [
    "„Zeitversetzt fernsehen“ ist ein Sammelbegriff für vier Funktionen: das Live-Programm anhalten und zurückspulen (Timeshift), eine laufende Sendung von vorn starten (Restart), vergangene Sendungen aus einem Archiv abrufen (Catch-up oder Replay) und Sendungen dauerhaft speichern (Aufnahme).",
    "Für Sie sieht das ähnlich aus, technisch steckt jeweils etwas anderes dahinter. Ob eine Funktion bei Ihnen funktioniert, hängt von drei Dingen ab: Ihr TV-Dienst muss sie für den jeweiligen Sender anbieten, Ihre Zugangsart muss die nötigen Informationen übertragen, und Ihre App muss sie umsetzen können. In diesem Artikel erfahren Sie, welche Funktion wie arbeitet, woran Sie Sender mit Archiv erkennen und was hilft, wenn Catch-up nicht startet.",
  ],
  summary: [
    "Timeshift speichert das laufende Programm kurz zwischen – meist auf dem Gerät. Beim Senderwechsel ist der Puffer in der Regel weg.",
    "Catch-up und Restart greifen auf ein Archiv beim Anbieter zu. Sie brauchen dafür keine Festplatte, aber einen Sender mit Archiv und einen funktionierenden EPG.",
    "Bei Xtream Codes erkennen Apps das Archiv meist automatisch. Bei M3U-Playlists müssen die Angaben in der Liste stehen, und die App muss sie unterstützen.",
    "Aufnahmen landen in der Cloud des Dienstes oder lokal auf dem Gerät. Eine lokale Aufnahme belegt dabei eine eigene Verbindung.",
  ],
  sections: [
    {
      heading: "Vier Funktionen im Überblick",
      blocks: [
        {
          type: "table",
          headers: ["Funktion", "Was sie macht", "Wo die Daten liegen", "Was Sie brauchen"],
          rows: [
            ["Timeshift (Live-Pause)", "Laufendes Programm anhalten und ein Stück zurückspulen", "Meist im Zwischenspeicher des Geräts, bei manchen Diensten auf dem Server", "App mit Timeshift-Funktion, freier Speicher"],
            ["Restart", "Laufende Sendung von Beginn an schauen", "Archiv beim Anbieter", "Sender mit Archiv, EPG"],
            ["Catch-up / Replay", "Bereits gelaufene Sendungen aus der Programmzeitschrift starten", "Archiv beim Anbieter, meist für einige Tage", "Sender mit Archiv, EPG, App mit Catch-up-Unterstützung"],
            ["Aufnahme", "Sendung dauerhaft speichern", "Cloud des Dienstes oder lokal (intern, USB, Festplatte)", "Aufnahmefunktion im Tarif oder in der App, Speicherplatz"],
          ],
          caption: "Welche Funktionen für welche Sender verfügbar sind, entscheidet Ihr TV-Dienst – oft abhängig von den Senderrechten.",
        },
        {
          type: "image",
          src: "/images/blog/iptv-catch-up-timeshift-aufnahme/zeitversetzt-fernsehen-zeitleiste.svg",
          width: 1200,
          height: 520,
          alt: "Zeitleiste von „vor 7 Tagen“ bis „jetzt“: Der lange Bereich links ist das Catch-up-Archiv beim Anbieter, ein Abschnitt markiert den Restart der laufenden Sendung, der kurze Bereich vor der Live-Markierung ist der Timeshift-Puffer auf dem Gerät. Darunter eine Aufnahme als dauerhaft gespeicherter Block.",
          caption: "Catch-up und Restart nutzen das Archiv auf dem Server, Timeshift nur einen kurzen Puffer auf dem Gerät.",
        },
      ],
    },
    {
      heading: "Timeshift: Live-Programm pausieren und zurückspulen",
      blocks: [
        {
          type: "p",
          text: "Bei Timeshift schreibt der Player den eingehenden Stream laufend in einen Zwischenspeicher. Drücken Sie Pause, empfängt die App weiter. Setzen Sie die Wiedergabe fort, sehen Sie das Programm mit Verzögerung. Zurückspulen können Sie nur so weit, wie der Puffer reicht, und das legt die App fest.",
        },
        {
          type: "p",
          text: "Weil der Puffer zum laufenden Sender gehört, ist er bei einem Senderwechsel in der Regel verloren. Manche TV-Dienste bieten Timeshift serverseitig an. Dann ist der Zeitraum größer, und Ihr Gerät braucht keinen eigenen Speicher dafür.",
        },
        { type: "h3", text: "Tipps für flüssiges Timeshift" },
        {
          type: "list",
          items: [
            "Freien Speicher prüfen: Geräte mit wenig internem Speicher, etwa viele Streaming-Sticks, stoßen schnell an Grenzen. Wo Sie den Speicherstand finden, steht in unserer [Fire-TV-Stick-Anleitung](/geraete/fire-tv-stick).",
            "Speicherort wählen: Einige Player für Android TV erlauben, den Puffer auf einen USB-Speicher zu legen.",
            "Pufferlänge realistisch einstellen: Ein sehr langer Puffer belegt viel Speicher, bringt im Alltag aber selten etwas.",
          ],
        },
      ],
    },
    {
      heading: "Catch-up und Replay: Verpasste Sendungen aus dem Archiv",
      blocks: [
        {
          type: "p",
          text: "Beim Catch-up speichert der Anbieter das Programm ausgewählter Sender für eine bestimmte Zeit auf seinen Servern. Wählen Sie in der Programmzeitschrift eine vergangene Sendung, fragt die App beim Server genau dieses Zeitfenster ab: Sender, Startzeit und Dauer. Deshalb hängt Catch-up so eng am EPG. Ohne Programmdaten weiß die App nicht, wo eine Sendung beginnt.",
        },
        {
          type: "p",
          text: "Daraus folgt auch eine häufige Fehlerquelle: Stimmen Uhrzeit oder Zeitzone des Geräts nicht, fragt die App das falsche Zeitfenster ab. Sie landen dann mitten in der vorherigen Sendung. Wie Sie EPG-Quelle und Zeitversatz korrekt einstellen, zeigt unsere Anleitung [EPG für IPTV einrichten](/anleitungen/epg-einrichten).",
        },
        { type: "h3", text: "Woran Sie Sender mit Archiv erkennen" },
        {
          type: "p",
          text: "Viele Apps markieren Sender mit Archiv in der Senderliste oder im EPG mit einem kleinen Symbol, oft eine Uhr oder ein Rückspulpfeil. Vergangene Sendungen sind bei diesen Sendern in der Programmzeitschrift anwählbar, bei Sendern ohne Archiv nicht. Wie viele Tage zurück das Archiv reicht, legt der Anbieter pro Sender fest.",
        },
        { type: "h3", text: "Catch-up mit Xtream Codes, M3U und Portal" },
        {
          type: "p",
          text: "Wie die App vom Archiv erfährt, hängt von der Zugangsart ab. Die Grundlagen der Zugangsarten erklärt unser Ratgeber [M3U-Playlist, Xtream Codes und Portal](/anleitungen/m3u-playlist-xtream-codes). Für Catch-up gilt:",
        },
        {
          type: "list",
          items: [
            "Xtream Codes: Bei diesem Zugang übermittelt der Server in der Regel pro Sender, ob ein Archiv vorhanden ist und wie viele Tage es umfasst. Apps mit Catch-up-Unterstützung lesen das automatisch aus. Eine offizielle, einheitliche Dokumentation dieser Schnittstelle gibt es allerdings nicht – Details können je nach Anbieter abweichen.",
            "M3U-Playlist: Die Archiv-Angaben müssen als zusätzliche Attribute in der Playlist stehen, zum Beispiel catchup, catchup-days und catchup-source. Kodi mit dem PVR IPTV Simple Client wertet solche Attribute aus – die unterstützten Attribute und Modi beschreibt die [offizielle Dokumentation des Add-ons](https://github.com/kodi-pvr/pvr.iptvsimple/blob/Omega/README.md). Nicht jeder andere Player tut das.",
            "Portal (MAG-Box): Bietet der Anbieter ein Archiv an, erscheint es direkt in der Portal-Oberfläche.",
          ],
        },
        {
          type: "code",
          code: '#EXTINF:-1 tvg-id="beispielsender.de" catchup="default" catchup-days="7" catchup-source="…" group-title="Beispiel",Beispielsender HD\nhttp://anbieter.example:8080/live/BENUTZERNAME/PASSWORT/123.ts',
          caption:
            "Schematisches Beispiel eines M3U-Eintrags mit Catch-up-Angaben (Platzhalterdaten, catchup-source gekürzt). Welche Attribute und Werte gelten, legt Ihr Anbieter fest – tragen Sie sie nicht selbst nach.",
        },
        {
          type: "note",
          text: "Bietet Ihr Anbieter beide Zugangsarten an und Catch-up funktioniert mit der M3U-Playlist nicht, probieren Sie in derselben App den Xtream-Codes-Zugang. Dann liefert die Schnittstelle die Archiv-Informationen selbst.",
        },
      ],
    },
    {
      heading: "So starten Sie eine Sendung aus dem Archiv",
      blocks: [
        {
          type: "p",
          text: "Der genaue Weg unterscheidet sich je nach App. In den meisten IPTV-Playern läuft es so ab:",
        },
        {
          type: "steps",
          items: [
            "Datum und Uhrzeit des Geräts auf „automatisch“ stellen und die richtige Zeitzone wählen.",
            "Programmzeitschrift laden bzw. aktualisieren und prüfen, ob die Sendezeiten zum tatsächlichen Programm passen.",
            "Einen Sender mit Archiv-Symbol wählen und im EPG zur gewünschten vergangenen Sendung zurücknavigieren.",
            "Die Sendung auswählen und „Abspielen“, „Replay“ oder „Catch-up“ wählen. Bei einer laufenden Sendung heißt die Option oft „Von vorn“ oder „Restart“.",
            "Innerhalb der Sendung können Sie wie bei einem Video vor- und zurückspulen.",
          ],
        },
      ],
    },
    {
      heading: "Aufnahmen: in der Cloud oder lokal speichern",
      blocks: [
        { type: "h3", text: "Cloud-Aufnahme" },
        {
          type: "p",
          text: "Bei einer Cloud-Aufnahme speichert der TV-Dienst die Sendung auf seinen Servern. Sie können sie danach auf allen Geräten abspielen, die mit Ihrem Konto verbunden sind. Legale TV-Streaming-Dienste bieten das häufig in bestimmten Tarifen an. Wie viel Speicher Sie haben und welche Sender aufgenommen werden dürfen, regelt der Dienst.",
        },
        { type: "h3", text: "Lokale Aufnahme auf dem Gerät" },
        {
          type: "p",
          text: "Einige Player-Apps und klassische Receiver wie [Enigma2-Geräte](/geraete/enigma2-receiver) nehmen den Stream direkt auf einen internen Speicher, einen USB-Stick oder eine Festplatte auf. Dabei sollten Sie drei Punkte kennen:",
        },
        {
          type: "list",
          items: [
            "Das Gerät muss während der Aufnahme eingeschaltet bleiben und die App muss im Hintergrund weiterarbeiten dürfen.",
            "Die Aufnahme ist ein eigener Stream. Schauen Sie währenddessen einen anderen Sender, laufen zwei Verbindungen gleichzeitig. Ob Ihr Zugang das erlaubt, erklärt unser Beitrag zu [IPTV auf mehreren Geräten](/blog/iptv-mehrere-geraete-gleichzeitig).",
            "Der Speicherbedarf ergibt sich aus der Datenrate: Ein Stream mit 8 Mbit/s erzeugt rund 1 MB pro Sekunde, also etwa 3,6 GB pro Stunde. 4K-Sender brauchen ein Mehrfaches.",
          ],
        },
      ],
    },
    {
      heading: "Wenn Catch-up oder Timeshift nicht funktioniert",
      blocks: [
        {
          type: "table",
          headers: ["Problem", "Häufige Ursache", "Lösung"],
          rows: [
            ["Vergangene Sendungen lassen sich nicht anwählen", "Sender ohne Archiv oder App ohne Catch-up-Unterstützung", "Archiv-Symbol prüfen, Funktionsumfang der App prüfen"],
            ["Es startet die falsche Sendung", "Uhrzeit, Zeitzone oder EPG-Versatz stimmen nicht", "Zeit auf automatisch stellen, EPG-Versatz korrigieren"],
            ["Ältere Sendungen geben einen Fehler aus", "Archivzeitraum des Senders überschritten", "Nur Sendungen innerhalb der Archivtage wählen"],
            ["Catch-up geht mit Xtream Codes, aber nicht mit M3U", "Archiv-Attribute fehlen in der Playlist oder die App liest sie nicht", "Xtream-Codes-Zugang nutzen, falls der Anbieter ihn bereitstellt"],
            ["Zurückspulen im Live-Programm geht nicht", "Timeshift in der App deaktiviert oder zu wenig Speicher", "Timeshift aktivieren, Speicher freigeben"],
            ["Wiedergabe startet nicht, Meldung zu Verbindungen", "Weitere Streams laufen bereits, etwa eine Aufnahme", "Andere Wiedergaben beenden"],
          ],
        },
        {
          type: "p",
          text: "Startet eine Sendung aus dem Archiv mit Ton, aber schwarzem Bild, ist das meist ein Format-Problem und hat mit dem Archiv nichts zu tun. Die passenden Schritte finden Sie im Artikel [IPTV zeigt schwarzes Bild oder hat keinen Ton](/blog/iptv-schwarzes-bild-kein-ton). Stockt die Wiedergabe, hilft unsere Anleitung [IPTV ruckelt oder friert ein](/anleitungen/iptv-ruckelt-loesungen).",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Brauche ich für Catch-up eine Festplatte?",
      answer:
        "Nein. Das Archiv liegt beim Anbieter, Ihr Gerät spielt es nur ab. Speicherplatz auf dem Gerät brauchen Sie lediglich für lokales Timeshift und lokale Aufnahmen.",
    },
    {
      question: "Wie viele Tage kann ich zurückschauen?",
      answer:
        "Das legt Ihr Anbieter für jeden Sender fest, oft abhängig von den Senderrechten. Viele Apps zeigen die Archivdauer in den Senderinformationen an oder machen nur die Sendungen im EPG anwählbar, die noch im Archiv liegen.",
    },
    {
      question: "Funktioniert Catch-up auch mit einer M3U-Playlist?",
      answer:
        "Ja, wenn die Playlist die nötigen Archiv-Angaben enthält und Ihre App diese auswertet. Bei Xtream-Codes-Zugängen ist Catch-up meist einfacher, weil die Schnittstelle die Informationen automatisch liefert.",
    },
    {
      question: "Verbraucht Catch-up mehr Datenvolumen als Live-Fernsehen?",
      answer:
        "In der Regel nicht. Eine Sendung aus dem Archiv wird in vergleichbarer Qualität übertragen wie das Live-Programm und braucht daher ungefähr dieselbe Datenrate.",
    },
  ],
  relatedSlugs: ["iptv-mehrere-geraete-gleichzeitig", "iptv-schwarzes-bild-kein-ton"],
  furtherReading: [
    { href: "/anleitungen/epg-einrichten", label: "EPG für IPTV einrichten" },
    { href: "/anleitungen/m3u-playlist-xtream-codes", label: "M3U-Playlist, Xtream Codes und Portal erklärt" },
    { href: "/anleitungen#apps", label: "IPTV-Apps im Vergleich" },
    { href: "/iptv-legal", label: "IPTV legal in Deutschland" },
  ],
};
