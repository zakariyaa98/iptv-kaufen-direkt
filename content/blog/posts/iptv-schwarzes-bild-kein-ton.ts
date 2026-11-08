import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "iptv-schwarzes-bild-kein-ton",
  status: "published",
  featured: true,
  category: "iptv-fehlerbehebung",
  title: "IPTV zeigt schwarzes Bild oder hat keinen Ton? Codecs als Ursache erkennen",
  seoTitle: "IPTV schwarzes Bild oder kein Ton? Codec-Probleme lösen",
  metaDescription:
    "Ton läuft, aber das Bild bleibt schwarz – oder umgekehrt? So erkennen Sie, ob H.265, AV1 oder AC3 die Ursache ist, und welche Einstellungen im Player helfen.",
  excerpt:
    "Läuft der Ton, aber das Bild bleibt schwarz, liegt es selten am Internet. Meist kann das Gerät das Video- oder Tonformat nicht verarbeiten. So finden Sie die Ursache.",
  keywords: [
    "schwarzes Bild",
    "kein Bild",
    "kein Ton",
    "nur Ton",
    "Codec",
    "H.264",
    "H.265",
    "HEVC",
    "AV1",
    "AC3",
    "E-AC3",
    "Dolby Digital",
    "Decoder",
    "Passthrough",
    "Soundbar",
    "Fire TV",
    "Smart TV",
    "Android TV",
    "4K",
  ],
  publishedAt: "2026-11-08",
  image: {
    src: "/images/blog/iptv-schwarzes-bild-kein-ton/iptv-schwarzes-bild-kein-ton.svg",
    width: 1200,
    height: 675,
    alt: "Illustration: Fernseher mit schwarzem Bild und Tonwelle, daneben ein Decoder-Chip mit den Formaten H.264, H.265 und AV1 sowie ein Lautsprecher mit durchgestrichenem AC3-Symbol",
  },
  intro: [
    "Der Sender startet, die Zeitanzeige läuft, der Ton ist da – nur das Bild bleibt schwarz. Oder es ist genau umgekehrt: Das Bild läuft einwandfrei, aber aus den Lautsprechern kommt nichts. Beides wirkt wie ein Totalausfall, hat aber meist eine eng begrenzte Ursache.",
    "Wenn eine der beiden Spuren funktioniert, ist die Verbindung zum Server in aller Regel in Ordnung. Dann kann das Gerät oder die App das Format der anderen Spur nicht verarbeiten. Beim Bild sind das häufig H.265 (HEVC) oder AV1, beim Ton die Dolby-Formate AC3 und E-AC3. In diesem Artikel grenzen Sie die Ursache ein. Danach wissen Sie, welche Einstellung im Player hilft und wann das Gerät selbst die Grenze ist.",
  ],
  summary: [
    "Ton ohne Bild: Meist fehlt dem Gerät die Unterstützung für den Videocodec, typisch bei 4K-Sendern in H.265 oder AV1.",
    "Bild ohne Ton: Häufig wird ein Dolby-Tonformat (AC3/E-AC3) nicht verarbeitet oder die Passthrough-Einstellung passt nicht zur Anlage.",
    "Erste Hilfe im Player: zwischen Hardware- und Software-Decoder wechseln und eine andere Tonspur wählen.",
    "Betrifft es nur einzelne Sender, ist das ein starkes Indiz für ein Format-Problem und nicht für eine Netzwerkstörung.",
  ],
  sections: [
    {
      heading: "Zuerst eingrenzen: Ist es wirklich ein Codec-Problem?",
      blocks: [
        {
          type: "p",
          text: "Nicht jedes schwarze Bild hat dieselbe Ursache. Bevor Sie Einstellungen ändern, ordnen Sie das Fehlerbild ein. Die Tabelle zeigt typische Symptome und wohin sie meistens führen.",
        },
        {
          type: "table",
          headers: ["Symptom", "Wahrscheinliche Ursache", "Wo Sie ansetzen"],
          rows: [
            ["Ton läuft, Bild bleibt schwarz", "Videocodec oder Profil wird nicht unterstützt (z. B. H.265 mit 10 Bit, AV1)", "Decoder-Einstellung im Player, Datenblatt des Geräts"],
            ["Bild läuft, kein Ton", "Tonformat wie AC3/E-AC3 wird nicht verarbeitet, Passthrough falsch eingestellt", "Tonspur und Audio-Einstellungen in App und Gerät"],
            ["Weder Bild noch Ton, nur Ladekreis", "Stream startet gar nicht: Verbindung, Zugangsdaten oder Verbindungslimit", "Netzwerk und Zugang prüfen, nicht den Codec"],
            ["Bild startet, stockt dann regelmäßig", "Zu wenig Datenrate oder Gerät überlastet (z. B. Software-Decoding in 4K)", "Heimnetz und Decoder-Einstellung"],
            ["Grüne Flächen, Klötzchen, Bildfehler", "Decoder-Fehler oder beschädigter Stream", "Decoder wechseln, anderen Sender gegenprüfen"],
            ["Nur bestimmte Sender betroffen", "Diese Sender nutzen ein anderes Format als der Rest", "Codec der betroffenen Sender ermitteln"],
          ],
          caption: "Die Zuordnung ist ein Ausgangspunkt. Mehrere Ursachen können zusammenkommen.",
        },
        {
          type: "p",
          text: "Startet ein Stream überhaupt nicht oder bricht er immer wieder ab, ist dieser Artikel der falsche Startpunkt. Dann hilft unsere Anleitung [IPTV ruckelt oder friert ein](/anleitungen/iptv-ruckelt-loesungen). Erscheint dazu die Meldung „zu viele Verbindungen“, liegt es meist am Verbindungslimit. Wie das funktioniert, erklärt der Beitrag zu [IPTV auf mehreren Geräten gleichzeitig](/blog/iptv-mehrere-geraete-gleichzeitig).",
        },
      ],
    },
    {
      heading: "Was ein Codec ist – kurz erklärt",
      blocks: [
        {
          type: "p",
          text: "Ein Fernsehsender in HD würde unkomprimiert ein Vielfaches der Datenmenge erzeugen, die über einen Internetanschluss passt. Deshalb werden Bild und Ton vor dem Versand komprimiert. Das Verfahren dafür heißt Codec. Ein Stream besteht dabei aus mehreren Spuren: einer Videospur, einer oder mehreren Tonspuren und manchmal Untertiteln. Sie werden gemeinsam in einem Container übertragen, bei IPTV meist als MPEG-TS oder HLS.",
        },
        {
          type: "p",
          text: "Ihr Gerät muss jede Spur wieder entpacken, also decodieren. Bei Video übernimmt das meist ein spezieller Chip, der Hardware-Decoder. Er arbeitet schnell und stromsparend, kann aber nur die Formate, für die er gebaut wurde. Kennt er einen Codec nicht, bleibt das Bild schwarz – der Ton, der separat decodiert wird, läuft trotzdem weiter.",
        },
        {
          type: "image",
          src: "/images/blog/iptv-schwarzes-bild-kein-ton/iptv-decodierung-ablauf.svg",
          width: 1200,
          height: 560,
          alt: "Ablaufdiagramm: Ein IPTV-Stream wird in Video- und Tonspur getrennt. Die Videospur geht an den Video-Decoder und dann zum Fernseher, die Tonspur an den Audio-Decoder oder per Passthrough an eine Soundbar.",
          caption: "Bild und Ton werden getrennt decodiert. Deshalb kann eine Spur ausfallen, während die andere normal läuft.",
        },
        { type: "h3", text: "Die wichtigsten Videocodecs bei IPTV" },
        {
          type: "table",
          headers: ["Codec", "Typischer Einsatz", "Unterstützung auf Geräten"],
          rows: [
            ["H.264 (AVC)", "Standard für SD- und HD-Sender", "Praktisch alle aktuellen TV-Geräte und Apps"],
            ["H.265 (HEVC)", "4K/UHD und datensparende HD-Streams", "Neuere Geräte ja, ältere Fernseher und Boxen teils nicht; die 10-Bit-Variante (Main 10) nicht überall"],
            ["AV1", "Neuerer, lizenzfreier Codec, sehr effizient", "Nur Geräte mit neueren Chipsätzen haben einen Hardware-Decoder"],
            ["MPEG-2", "Älteres Format, aus dem klassischen Digitalfernsehen bekannt", "Bei IPTV selten geworden; ob ein Gerät es abspielt, hängt von Chip und App ab"],
          ],
          caption:
            "Ob Ihr Gerät einen Codec per Hardware unterstützt, steht im technischen Datenblatt des Herstellers. Werbeangaben wie „4K“ sagen darüber allein nichts aus.",
        },
        {
          type: "p",
          text: "Ein Beispiel für ein solches Datenblatt sind die [Geräte-Spezifikationen von Amazon für Fire-TV-Geräte](https://developer.amazon.com/docs/device-specs/device-specifications-fire-tv-streaming-media-player.html). Dort ist für jedes Modell aufgeführt, welche Video- und Tonformate es per Hardware verarbeitet – bei aktuellen 4K-Modellen etwa H.265 im Profil Main 10 und AV1.",
        },
        { type: "h3", text: "Die wichtigsten Tonformate" },
        {
          type: "list",
          items: [
            "AAC: weit verbreitet, besonders bei HLS-Streams. Wird von nahezu allen Geräten verarbeitet.",
            "MPEG-1 Layer II (MP2): klassisches Stereoformat vieler Sender aus dem Digitalfernsehen, ebenfalls breit unterstützt.",
            "AC3 (Dolby Digital) und E-AC3 (Dolby Digital Plus): Mehrkanalton, oft bei Spielfilmen, Sport und HD-Sendern. Nicht jede App und nicht jedes Gerät kann diese Formate selbst decodieren. Dann muss der Ton unverändert an eine Soundbar oder einen AV-Receiver weitergereicht werden (Passthrough).",
          ],
        },
      ],
    },
    {
      heading: "Ton läuft, aber das Bild bleibt schwarz",
      blocks: [
        {
          type: "p",
          text: "Gehen Sie die Schritte der Reihe nach durch. Die Bezeichnungen der Menüpunkte unterscheiden sich von App zu App. Die Funktionen finden Sie aber in den meisten IPTV-Playern unter „Einstellungen“, „Wiedergabe“ oder „Player“.",
        },
        {
          type: "steps",
          items: [
            "Gegenprobe mit anderen Sendern: Testen Sie einen Sender in HD statt in 4K. Läuft HD, aber UHD nicht, spricht fast alles für ein Codec-Problem.",
            "Decoder umschalten: Wechseln Sie im Player zwischen Hardware- und Software-Decoder (oft „HW“, „HW+“ oder „SW“ genannt). Der Software-Decoder rechnet mit dem Prozessor und kann Formate abspielen, die der Chip nicht kennt – sofern die App einen passenden Software-Decoder mitbringt.",
            "Stream-Format wechseln, falls angeboten: Manche Apps lassen bei Xtream-Codes-Zugängen die Wahl zwischen TS und HLS (m3u8). Ein anderes Format kann helfen, wenn der Player mit einem Container nicht zurechtkommt.",
            "Updates installieren: System-Updates und neue App-Versionen verbessern regelmäßig die Format-Unterstützung.",
            "Zweiten Player testen: Läuft der Sender in einer anderen App auf demselben Gerät, lag es am Player und nicht an der Hardware.",
            "Codec ermitteln: Spielen Sie den Sender testweise am Computer im VLC media player ab. Unter „Werkzeuge › Codec-Informationen“ (Strg + J) sehen Sie, welches Video- und Tonformat der Stream nutzt.",
          ],
        },
        {
          type: "note",
          title: "Software-Decoding hat Grenzen",
          text: "Ein schwacher Stick oder eine ältere Box kann 4K in H.265 per Software oft nicht flüssig berechnen. Das Bild erscheint dann, ruckelt aber. Für HD-Sender ist Software-Decoding meist unproblematisch.",
        },
        { type: "h3", text: "Wenn der ganze Bildschirm schwarz wird" },
        {
          type: "p",
          text: "Verschwindet nicht nur das Video, sondern auch das Menü der App, oder meldet der Fernseher „kein Signal“, liegt das Problem meist an der HDMI-Verbindung und nicht am Codec. Ein typischer Fall: Viele kopiergeschützte 4K-Inhalte setzen HDCP 2.2 voraus. Unterstützt der genutzte HDMI-Eingang das nicht, kann das Bild schwarz bleiben oder eine Fehlermeldung erscheinen. Prüfen Sie den Anschluss laut Handbuch des Fernsehers, testen Sie ein anderes HDMI-Kabel und stellen Sie die Auflösung des Zuspielers auf „Automatisch“. Für den Fire TV Stick finden Sie die genauen Menüpfade in unserer [Fire-TV-Stick-Anleitung](/geraete/fire-tv-stick).",
        },
      ],
    },
    {
      heading: "Bild läuft, aber es ist kein Ton zu hören",
      blocks: [
        {
          type: "p",
          text: "Fehlender Ton bei laufendem Bild hat fast immer mit dem Tonformat oder dem Weg zur Lautsprecheranlage zu tun. Prüfen Sie zuerst das Offensichtliche: Lautstärke, Stummschaltung und den richtigen Eingang an Soundbar oder AV-Receiver.",
        },
        {
          type: "steps",
          items: [
            "Tonspur wechseln: Viele Sender bieten mehrere Spuren an, etwa Stereo und Dolby Digital oder verschiedene Sprachen. Wählen Sie im Player unter „Audio“ oder „Tonspur“ testweise eine Stereo-Spur.",
            "Passthrough richtig einstellen: Hängt eine Soundbar oder ein AV-Receiver am HDMI-ARC/eARC- oder optischen Ausgang, schalten Sie Passthrough ein. Dann decodiert die Anlage den Dolby-Ton. Hören Sie über die Fernseher-Lautsprecher oder kann die Anlage kein Dolby, schalten Sie Passthrough aus.",
            "Toneinstellung des Geräts prüfen: Bei vielen Sticks und Boxen lässt sich das Surround-Format im Systemmenü festlegen. Stellen Sie testweise auf Stereo bzw. PCM um.",
            "Audio-Decoder im Player wechseln: Einige Player bieten auch für den Ton die Wahl zwischen Hardware- und Software-Decoder.",
            "Gegenprobe mit einem anderen Sender: Fehlt der Ton nur auf einem Sender und dort auf allen Geräten, liegt die Störung beim Sender bzw. Anbieter.",
          ],
        },
        {
          type: "p",
          text: "Läuft der Ton, aber zeitversetzt zum Bild, ist das ein anderes Thema: Viele Fernseher und Player haben eine Einstellung für den Tonversatz (Audio-Verzögerung). Wie das bei Samsung und LG aussieht, steht in unserer [Smart-TV-Anleitung](/geraete/smart-tv).",
        },
      ],
    },
    {
      heading: "Warum dieselbe Playlist nicht auf jedem Gerät gleich läuft",
      blocks: [
        {
          type: "p",
          text: "Ein häufiger Fall im Alltag: Im Wohnzimmer läuft ein UHD-Sender problemlos auf der neuen Box, auf dem älteren Fernseher im Schlafzimmer bleibt er schwarz. Die Zugangsdaten sind dieselben, der Stream auch. Der Unterschied liegt im Chip und in der App.",
        },
        {
          type: "list",
          items: [
            "Smart-TV-Apps nutzen in der Regel die Decoder des Fernsehers. Ältere Modelle unterstützen H.265 in 10 Bit oder AV1 oft nicht, und ein Software-Update rüstet einen fehlenden Hardware-Decoder in der Regel nicht nach.",
            "Android-TV-Boxen und Fire TV Sticks unterscheiden sich je nach Generation deutlich im Chipsatz. Neuere Modelle decodieren häufiger auch AV1 – maßgeblich ist das Datenblatt des jeweiligen Modells.",
            "Bei Enigma2-Receivern (VU+, Dreambox, Zgemma, GigaBlue) hängt die Format-Unterstützung vom Chipsatz des Modells und vom installierten Image ab. Receiver ohne H.265-Decoder können entsprechende UHD-Sender nicht abspielen.",
            "Player-Apps bringen unterschiedlich gute Software-Decoder mit. Deshalb kann ein Sender in einer App laufen und in einer anderen nicht.",
          ],
        },
        {
          type: "p",
          text: "Nutzen Sie IPTV in mehreren Räumen, lohnt sich ein kurzer Blick auf die Datenblätter aller Geräte. Was dabei sonst noch wichtig ist, lesen Sie in unserem Artikel [IPTV auf mehreren Geräten nutzen](/blog/iptv-mehrere-geraete-gleichzeitig). Auch zeitversetzte Sendungen aus dem Archiv werden in der Regel im selben Format übertragen wie das Live-Programm. Bleibt dort das Bild schwarz, gelten dieselben Schritte wie oben. Mehr zum Archiv erklärt unser Beitrag zu [Catch-up und Timeshift](/blog/iptv-catch-up-timeshift-aufnahme).",
        },
        { type: "h3", text: "Worauf Sie beim nächsten Gerät achten" },
        {
          type: "list",
          items: [
            "Hardware-Decoder für H.265 (HEVC) einschließlich 10 Bit (Main 10) – Pflicht für die meisten 4K-Streams.",
            "AV1-Hardware-Decoding, wenn das Gerät einige Jahre halten soll.",
            "HDMI 2.0 oder neuer mit HDCP 2.2 für 4K – am Gerät und am genutzten Eingang des Fernsehers.",
            "Dolby-Ton: Entweder decodiert das Gerät AC3/E-AC3 selbst, oder es reicht ihn zuverlässig per Passthrough weiter.",
            "Regelmäßige System-Updates durch den Hersteller.",
          ],
        },
        {
          type: "p",
          text: "Die Kaufkriterien für Boxen im Detail finden Sie in unserer Anleitung zur [Android TV Box](/geraete/android-tv-box). Einen Überblick über alle Geräte bieten unsere [Anleitungen](/anleitungen#geraete).",
        },
      ],
    },
    {
      heading: "Wann Sie den Anbieter kontaktieren sollten",
      blocks: [
        {
          type: "p",
          text: "Liegt das Problem nicht bei Ihnen, nützt die beste Einstellung nichts. Ein Kontakt zum Anbieter Ihres TV-Dienstes ist sinnvoll, wenn mindestens einer dieser Punkte zutrifft:",
        },
        {
          type: "list",
          items: [
            "Ein Sender hat auf allen Geräten und in allen Apps kein Bild oder keinen Ton, andere Sender laufen normal.",
            "Das Problem trat plötzlich auf, ohne dass Sie Gerät, App oder Einstellungen verändert haben.",
            "Sie haben ein Format ermittelt, das Ihr Gerät nicht unterstützt, und möchten wissen, ob der Sender auch in H.264 bzw. mit Stereoton angeboten wird.",
          ],
        },
        {
          type: "p",
          text: "Beschreiben Sie dabei Sender, Uhrzeit, Gerät, App und die Decoder-Einstellung, die Sie getestet haben. Die Codec-Informationen aus VLC helfen zusätzlich. Schicken Sie keine Screenshots, auf denen Ihre Zugangsdaten zu sehen sind.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Liegt ein schwarzes Bild am Internet?",
      answer:
        "Selten, wenn der Ton weiterläuft. Bei zu wenig Datenrate stocken in der Regel Bild und Ton gemeinsam oder der Stream startet gar nicht. Läuft der Ton sauber durch und nur das Bild fehlt, ist ein nicht unterstützter Videocodec die wahrscheinlichere Ursache.",
    },
    {
      question: "Ist der Software-Decoder schlechter als der Hardware-Decoder?",
      answer:
        "Die Bildqualität ist nicht schlechter. Der Software-Decoder belastet aber den Prozessor stärker. Auf schwächeren Geräten kann das bei 4K zu Rucklern führen. Für HD-Sender ist er meist eine gute Ausweichlösung.",
    },
    {
      question: "Kann ein Update meinem alten Fernseher H.265 oder AV1 beibringen?",
      answer:
        "Einen fehlenden Hardware-Decoder kann ein Software-Update in der Regel nicht nachrüsten. Eine Player-App mit eigenem Software-Decoder kann helfen, sofern der Fernseher genug Rechenleistung hat. Sonst ist ein externer Zuspieler wie ein Stick oder eine Box die praktikable Lösung.",
    },
    {
      question: "Warum habe ich mit Soundbar keinen Ton, über die TV-Lautsprecher aber schon?",
      answer:
        "Meist passt die Passthrough-Einstellung nicht zur Soundbar. Wird Dolby-Ton weitergereicht, den die Soundbar nicht verarbeitet, bleibt sie stumm. Schalten Sie Passthrough aus oder stellen Sie die Tonausgabe des Geräts auf Stereo bzw. PCM.",
    },
  ],
  relatedSlugs: ["iptv-mehrere-geraete-gleichzeitig", "iptv-catch-up-timeshift-aufnahme"],
  furtherReading: [
    { href: "/anleitungen/iptv-ruckelt-loesungen", label: "IPTV ruckelt oder friert ein: Ursachen und Lösungen" },
    { href: "/anleitungen#fehler", label: "Häufige Konfigurationsfehler im Überblick" },
    { href: "/geraete/android-tv-box", label: "IPTV auf Android TV Box einrichten" },
    { href: "/geraete/smart-tv", label: "IPTV auf Smart TV (Samsung & LG) einrichten" },
  ],
};
