import type { Article } from "./content-types";

/** Content for /iptv-legal. Uses the shared Article shape so it renders with the guide template. */
export const legalIptvArticle: Article = {
  slug: "iptv-legal",
  title: "IPTV legal in Deutschland: Ihre Möglichkeiten im Überblick",
  seoTitle: "IPTV legal in Deutschland – lizenzierte Anbieter & Rechtslage",
  metaDescription:
    "Ist IPTV legal? Rechtslage in Deutschland, lizenzierte TV-Streaming-Dienste, kostenlose Mediatheken und woran Sie illegale Angebote erkennen.",
  excerpt:
    "Rechtslage, lizenzierte Dienste und kostenlose Angebote: So nutzen Sie IPTV in Deutschland ohne rechtliches Risiko.",
  publishedAt: "2026-10-28",
  readingTimeMinutes: 6,
  intro: [
    "IPTV steht für „Internet Protocol Television“, also Fernsehen über das Internet. Die Technik ist völlig legal und wird von großen Unternehmen wie der Deutschen Telekom genutzt.",
    "Ob ein IPTV-Angebot legal ist, hängt allein davon ab, ob der Anbieter die Rechte an den gezeigten Sendern und Inhalten besitzt. Diese Seite gibt Ihnen einen Überblick. Sie ersetzt keine Rechtsberatung.",
  ],
  summary: [
    "IPTV als Technik ist legal. Illegal sind Angebote ohne Senderlizenzen.",
    "Lizenzierte TV-Streaming-Dienste sind in Deutschland gut verfügbar.",
    "Viele Sender bieten kostenlose Livestreams in ihren Mediatheken an.",
    "Auch Kundinnen und Kunden illegaler Angebote gehen ein rechtliches Risiko ein.",
  ],
  sections: [
    {
      heading: "Die Rechtslage in Kürze",
      body: [
        "Wer Fernsehsender weiterverbreitet, braucht dafür die Rechte der Sender und Rechteinhaber. Angebote, die Pay-TV-Inhalte wie Fußball-Bundesliga oder Serien ohne diese Rechte streamen, verletzen das Urheberrecht.",
        "Der Europäische Gerichtshof hat 2017 im sogenannten Filmspeler-Urteil (Rechtssache C‑527/15) entschieden, dass bereits das Streamen offensichtlich rechtswidriger Inhalte eine Vervielfältigung darstellen kann. Damit können auch Nutzerinnen und Nutzer haftbar werden.",
      ],
    },
    {
      heading: "Lizenzierte TV-Streaming-Dienste",
      body: [
        "In Deutschland gibt es mehrere Dienste, die Fernsehsender legal über das Internet übertragen. Bekannte Beispiele sind waipu.tv, Zattoo und MagentaTV der Telekom. Joyn bietet Livestreams der Sender von ProSiebenSat.1 und weiterer Partner.",
        "Senderumfang, Preise und Funktionen ändern sich regelmäßig. Vergleichen Sie deshalb direkt auf den Websites der Anbieter, welches Paket zu Ihren Wünschen passt. Viele bieten kostenlose Testzeiträume an.",
      ],
      note: "Wir sind mit keinem der genannten Anbieter verbunden und erhalten keine Provision. Die Nennung dient nur Ihrer Orientierung.",
    },
    {
      heading: "Kostenlose und legale Angebote",
      list: [
        "Mediatheken der öffentlich-rechtlichen Sender: ARD, ZDF und die Dritten bieten Livestreams ihrer Programme kostenlos an.",
        "Mediatheken privater Sender mit kostenlosen Livestreams, teilweise mit Werbung.",
        "Ihr eigener Kabelanschluss: Eine FRITZ!Box mit DVB-C-Tuner verteilt Kabelsender im Heimnetz als Stream.",
        "Sat>IP: Mit einem Sat>IP-Server werden Satellitensender im Heimnetz an Apps verteilt.",
      ],
    },
    {
      heading: "Warnsignale für illegale Angebote",
      list: [
        "Tausende Sender inklusive Pay-TV zu einem Bruchteil der üblichen Preise.",
        "Fehlendes oder unvollständiges Impressum.",
        "Verkauf nur über Messenger, Social Media oder Foren.",
        "Zahlung nur per Kryptowährung oder Gutscheinkarten.",
      ],
      body: [
        "Eine ausführliche Checkliste finden Sie in unserem Ratgeber [Seriöse IPTV-Anbieter erkennen](/anleitungen/iptv-anbieter-erkennen).",
      ],
    },
    {
      heading: "So helfen wir Ihnen",
      body: [
        "Wir verkaufen keine Senderpakete. Wir beraten Sie, welches legale Angebot zu Ihren Geräten und Wünschen passt, und richten es für Sie ein. Mehr dazu bei unseren [Einrichtungs- und Support-Paketen](/iptv-pakete).",
      ],
    },
  ],
  faq: [
    {
      question: "Ist es strafbar, IPTV zu schauen?",
      answer:
        "Legale IPTV-Dienste können Sie bedenkenlos nutzen. Wer offensichtlich illegale Angebote nutzt, riskiert zivilrechtliche Ansprüche wie Abmahnungen. In Einzelfällen kann auch eine Strafbarkeit in Betracht kommen.",
    },
    {
      question: "Ist ein VPN eine Lösung für illegale Angebote?",
      answer:
        "Nein. Ein VPN ändert nichts an der Rechtslage. Es verschleiert nur die Verbindung.",
    },
    {
      question: "Ist Kodi oder eine IPTV-Player-App illegal?",
      answer:
        "Nein. Player-Apps sind legale Software. Entscheidend ist, welche Inhalte Sie damit abspielen.",
    },
  ],
  related: [
    { href: "/anleitungen/iptv-anbieter-erkennen", label: "Seriöse IPTV-Anbieter erkennen" },
    { href: "/geraete", label: "Kompatible Geräte" },
    { href: "/iptv-pakete", label: "Einrichtung und Support" },
  ],
};
