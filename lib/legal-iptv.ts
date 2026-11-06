import type { FaqItem } from "./faq-data";
import { DURATIONS, LOWEST_PRICE, PLAN_SCOPE_NOTE, PRICE_NOTE, deviceCategories, durationLabel, formatPrice } from "./plans";

/*
 * Copy for /iptv-legal. Presentation lives in app/iptv-legal/page.tsx.
 * Prices are always derived from lib/plans.ts. Figures quoted from third parties were read on
 * their official websites on LEGAL_IPTV_UPDATED: re-check them whenever that date changes.
 * Legal statements stay general and are backed by the entries in `sources`.
 */

export const LEGAL_IPTV_PUBLISHED = "2026-10-28";
export const LEGAL_IPTV_UPDATED = "2026-11-06";

export const legalIptvMeta = {
  seoTitle: "IPTV legal oder illegal? Preise & Anbieter in Deutschland",
  metaDescription:
    "IPTV legal oder illegal? So erkennen Sie illegale IPTV Anbieter und lizenzierte Dienste: mit Vergleich, Warnsignalen und Preisen für unsere Einrichtungshilfe.",
  headline: "IPTV legal oder illegal in Deutschland? Unterschiede und Preise",
  readingTimeMinutes: 12,
};

const IMAGE_DIR = "/images/iptv-legal";

export const LEGAL_IPTV_IMAGES = {
  hero: {
    src: `${IMAGE_DIR}/iptv-legal-oder-illegal-vergleich.svg`,
    width: 800,
    height: 600,
    alt: "IPTV legal oder illegal im Vergleich: links ein Fernseher mit Häkchen und dem Hinweis auf vorhandene Senderechte, rechts ein Fernseher mit Warndreieck und dem Hinweis auf fehlende Senderechte",
  },
  technology: {
    src: `${IMAGE_DIR}/iptv-funktionsweise-internet.svg`,
    width: 800,
    height: 480,
    alt: "So funktioniert IPTV: Der Anbieter überträgt das Fernsehprogramm als Datenstrom über das Internet an eine App oder einen Receiver am Fernseher",
  },
  layers: {
    src: `${IMAGE_DIR}/iptv-technik-und-inhalte.svg`,
    width: 800,
    height: 520,
    alt: "IPTV-Technik und Inhalte getrennt betrachtet: oben die Technik mit App, M3U-Playlist, Xtream Codes und Receiver, unten die Sender, Filme und Sportinhalte, für die Rechte nötig sind",
  },
  rights: {
    src: `${IMAGE_DIR}/senderechte-lizenzkette.svg`,
    width: 800,
    height: 480,
    alt: "Lizenzkette beim legalen IPTV: Der Rechteinhaber erteilt dem Anbieter eine Lizenz, der Anbieter überträgt das Programm an die Zuschauer",
  },
  unlicensed: {
    src: `${IMAGE_DIR}/iptv-ohne-lizenz-verbreitung.svg`,
    width: 800,
    height: 480,
    alt: "Schema zu IPTV ohne Lizenz: Ein Programm wird ohne Erlaubnis des Rechteinhabers über einen Server an viele Geräte weiterverbreitet, die Lizenz ist durchgestrichen",
  },
  warning: {
    src: `${IMAGE_DIR}/warnsignale-verdaechtige-iptv-angebote.svg`,
    width: 800,
    height: 520,
    alt: "Warnsignale bei verdächtigen IPTV Anbietern: eine fiktive Werbeanzeige mit tausenden Sendern, allen Sport- und Premium-Sendern und einem Kleinstpreis unter einer Lupe",
  },
} as const;

export const heroFacts = [
  { label: "IPTV-Technik", value: "Übertragung über das Internet" },
  { label: "Entscheidend", value: "Rechte an Sendern und Inhalten" },
  { label: "Unsere Angebote", value: "Einrichtungshilfe und Support" },
];

export const tocItems = [
  { id: "iptv-legal", label: "IPTV legal: Technik, Lizenzen, legale Optionen" },
  { id: "angebote-einrichtung", label: "IPTV Preise unserer Einrichtungshilfe" },
  { id: "iptv-illegal", label: "IPTV illegal: Bedeutung und Warnsignale" },
  { id: "vergleich", label: "Vergleich: lizenziert oder verdächtig" },
  { id: "unterstuetzung", label: "Unterstützung bei der Einrichtung" },
  { id: "faq", label: "Häufige Fragen" },
  { id: "quellen", label: "Quellen" },
];

export const quickAnswers = [
  {
    href: "#iptv-legal",
    tone: "legal" as const,
    title: "IPTV legal",
    text: "Die Technik ist nicht das Problem. Rechtmäßig ist ein Angebot, wenn für Sender und Inhalte die nötigen Rechte vorliegen.",
    link: "Zur Erklärung",
  },
  {
    href: "#iptv-illegal",
    tone: "illegal" as const,
    title: "IPTV illegal",
    text: "Illegal wird es, wenn geschützte Sender und Inhalte ohne Erlaubnis der Rechteinhaber verbreitet werden.",
    link: "Warnsignale ansehen",
  },
  {
    href: "/angebote",
    tone: "offer" as const,
    title: "Unsere Angebote",
    text: `Einrichtungshilfe und technischer Support ab ${formatPrice(LOWEST_PRICE)}. Keine TV-Sender, keine Abonnements, keine Zugangsdaten.`,
    link: "Angebote ansehen",
  },
];

/* ------------------------------------------------------------------ Section 1: IPTV legal */

export const whatIsIptv = [
  "IPTV steht für Internet Protocol Television, also Fernsehen über das Internetprotokoll. Der Anbieter wandelt das Programm in einen Datenstrom um und überträgt ihn über Ihren Internetanschluss. Eine App oder ein Receiver empfängt diesen Datenstrom und zeigt das Bild am Fernseher an. Eine Satellitenschüssel oder ein Kabelanschluss ist dafür nicht nötig.",
  "Wie das auf einzelnen Geräten aussieht, erklären unsere [Anleitungen](/anleitungen), zum Beispiel für [Smart TV](/geraete/smart-tv), [Fire TV Stick](/geraete/fire-tv-stick) und [Android TV Box](/geraete/android-tv-box).",
];

export const technologyVsContent = [
  "Ist IPTV legal? Als Übertragungstechnik ist IPTV nicht das rechtliche Problem. Große Unternehmen nutzen sie selbst: Die Telekom beschreibt MagentaTV ausdrücklich als Angebot, das Sender über das Internet überträgt.",
  "Das Urheberrecht knüpft nicht am Übertragungsweg an, sondern an der Nutzung geschützter Werke und Sendungen. Dieselbe Technik kann deshalb für ein lizenziertes Programm oder für unerlaubt verbreitete Inhalte eingesetzt werden. Die Frage „IPTV legal oder illegal?“ lässt sich also nicht pauschal beantworten, sondern nur für das jeweilige Angebot.",
];

export const rightsIntro = [
  "Wer ein Fernsehprogramm oder einen Film verbreitet, nutzt fremde Rechte. Das Urheberrechtsgesetz (UrhG) weist sie den Rechteinhabern zu: Das Senderecht nach [§ 20 UrhG](https://www.gesetze-im-internet.de/urhg/__20.html), das Recht der öffentlichen Zugänglichmachung nach [§ 19a UrhG](https://www.gesetze-im-internet.de/urhg/__19a.html) und das Recht der Sendeunternehmen nach [§ 87 UrhG](https://www.gesetze-im-internet.de/urhg/__87.html), ihre Funksendungen weiterzusenden und öffentlich zugänglich zu machen.",
  "Eine Lizenz regelt, wer ein Programm unter welchen Bedingungen zeigen darf. Deshalb ist sie der eigentliche Unterschied zwischen zwei Angeboten, die technisch gleich aussehen. Gerade bei IPTV Pay TV und Sportübertragungen liegen die Rechte oft bei einzelnen Diensten.",
];

export const playerTools = [
  {
    title: "IPTV-Apps und Player",
    text: "Ein Player spielt Datenströme ab, ähnlich wie ein Videoplayer Dateien. Ob die Nutzung rechtmäßig ist, hängt von den abgespielten Inhalten ab.",
  },
  {
    title: "M3U-Playlists",
    text: "Eine M3U-Datei ist eine Liste mit Stream-Adressen. Das Format allein sagt nichts darüber aus, ob für die verlinkten Sender Rechte bestehen. Mehr dazu im [M3U- und Xtream-Ratgeber](/anleitungen/m3u-playlist-xtream-codes).",
  },
  {
    title: "Xtream Codes",
    text: "Hinter dem Begriff steht eine Anmeldung mit Server-Adresse, Benutzername und Passwort. Auch das ist nur ein technischer Zugangsweg und kein Nachweis von Lizenzen.",
  },
];

export const playerToolsNote =
  "IPTV-Apps, M3U-Playlists und Xtream Codes sind also weder automatisch legal noch automatisch illegal. Es kommt darauf an, welche Inhalte darüber laufen und wer sie bereitstellt. Vorkonfigurierte Geräte können anders zu bewerten sein, wie das Filmspeler-Urteil weiter unten zeigt.";

export const legitimateSigns = [
  "Vollständiges Impressum: Geschäftsmäßige Online-Dienste müssen nach § 5 DDG unter anderem Name, Anschrift und Kontaktmöglichkeiten nennen.",
  "Konkrete Senderliste: Der Anbieter nennt nachvollziehbar, welche Sender in welchem Paket enthalten sind.",
  "Klare Vertragsbedingungen: Preis, Laufzeit, Kündigung und Widerruf eines IPTV Abonnements stehen vor dem Kauf fest.",
  "Eigene Apps in offiziellen Stores: Der Dienst ist zum Beispiel im Google Play Store oder Amazon Appstore auffindbar.",
  "Übliche Zahlungswege und feste Kontaktwege: Sie wissen, an wen Sie zahlen und wie Sie den Anbieter erreichen.",
  "Nachprüfbare Aussagen: Bei Zweifeln können Sie den Anbieter nach seinen Rechten fragen oder beim Sender nachfragen, ob eine Zusammenarbeit besteht.",
];

export const legitimateSignsNote =
  "Keines dieser Merkmale beweist für sich allein, dass Lizenzen vorliegen. Je mehr davon erfüllt sind, desto besser lässt sich ein Anbieter einschätzen. Mehr dazu im Ratgeber [IPTV Anbieter erkennen](/anleitungen/iptv-anbieter-erkennen).";

export const legalOptionsIntro =
  "Wer nach „IPTV Anbieter Deutschland“ sucht, findet neben kostenlosen Livestreams auch etablierte Bezahldienste. Diese Beispiele sind ein guter Ausgangspunkt für den eigenen Vergleich.";

export const legalOptions = [
  {
    title: "ZDF und ARD",
    text: "Das ZDF bietet auf [Live & TV](https://www.zdf.de/live-tv) Livestreams an, die ARD Livestreams in der [ARD Mediathek](https://www.ardmediathek.de/live). Beide sind ohne eigenes Abo nutzbar.",
  },
  {
    title: "Joyn",
    text: "[Joyn](https://www.joyn.de/) wirbt mit vielen TV-Sendern im kostenlosen Live-Stream. Joyn+ kostet laut Anbieter 8,99 € im Monat.",
  },
  {
    title: "Zattoo",
    text: "[Zattoo](https://zattoo.com/de) nennt ein kostenloses Angebot sowie Abos von 6,99 € bis 13,99 € im Monat, monatlich kündbar.",
  },
  {
    title: "waipu.tv",
    text: "[waipu.tv](https://www.waipu.tv/) ist ein Live-TV-Streamingdienst mit laut Anbieter über 300 Sendern, darunter über 70 Pay-TV-Sender.",
  },
  {
    title: "MagentaTV",
    text: "[MagentaTV](https://www.telekom.de/magenta-tv) ist das TV- und Streaming-Angebot der Telekom und überträgt Sender über das Internet.",
  },
  {
    title: "Streaming und Pay-TV",
    text: "Die [Verbraucherzentrale](https://www.verbraucherzentrale.de/digitale-welt/checkliste-urheberrecht-79986) nennt als legale Alternativen Mediatheken, Portale wie Netflix, Amazon Prime Video, Disney+ und WOW sowie Pay-TV wie Sky.",
  },
];

export const legalOptionsNote =
  "Die Preise und Senderzahlen stammen von den offiziellen Websites der Anbieter (Stand: 6. November 2026) und können sich ändern. Die Liste ist nicht vollständig. Wir sind mit keinem der genannten Anbieter verbunden.";

export const offerScopePoints = [
  "Einrichtungshilfe für 1, 2 oder 3 Geräte",
  "Technischer Support per WhatsApp, Telegram und E-Mail während der Laufzeit",
  "Schritt-für-Schritt-Anleitungen für Ihre Geräte",
];

export const offerDisclaimer = `Unsere Angebote sind keine lizenzierten TV-Senderpakete und kein Nachweis von Senderechten. ${PLAN_SCOPE_NOTE} Verträge mit TV-Streaming-Anbietern schließen Sie direkt mit dem jeweiligen Anbieter.`;

/* ------------------------------------------------------------------ Section 2: IPTV illegal */

export const whatIsIllegal = [
  "Von illegalem IPTV spricht man, wenn urheberrechtlich geschützte Sender, Filme oder Sportübertragungen ohne Erlaubnis der Rechteinhaber verbreitet werden. Gemeint ist also nicht die Technik, sondern IPTV ohne Lizenz.",
  "Gegen rechtswidrige Verletzungen sieht [§ 97 UrhG](https://www.gesetze-im-internet.de/urhg/__97.html) unter anderem Ansprüche auf Beseitigung und Unterlassung sowie bei Verschulden auf Schadensersatz vor. Ob ein konkretes Angebot rechtswidrig ist, entscheidet im Streitfall ein Gericht.",
];

export const distributionSteps = [
  "Ein geschütztes Programm oder ein Film wird ohne Erlaubnis der Rechteinhaber aufgegriffen.",
  "Der Inhalt wird über eigene Server oder fremde Quellen als Stream bereitgestellt oder verlinkt.",
  "Zugänge werden als Playlist, Zugangsdaten oder vorkonfiguriertes Gerät angeboten, teils über Wiederverkäufer.",
  "Für Käuferinnen und Käufer sieht das Ergebnis aus wie ein normales IPTV Abonnement. Der Stream selbst zeigt nicht, ob Rechte bestehen.",
];

export const filmspelerPoints = [
  {
    title: "Verkauf vorkonfigurierter Geräte",
    text: "Der Verkauf eines Medienabspielers mit vorinstallierten Add-ons, die auf ohne Erlaubnis zugänglich gemachte Werke verlinken, ist eine öffentliche Wiedergabe im Sinne von Art. 3 Abs. 1 der Richtlinie 2001/29/EG.",
  },
  {
    title: "Streaming aus solchen Quellen",
    text: "Vorübergehende Vervielfältigungen durch Streaming von der Website eines Dritten, auf der ein Werk ohne Erlaubnis angeboten wird, erfüllen auf einem solchen Abspieler nicht die Voraussetzungen der Ausnahme in Art. 5 Abs. 1 und 5 der Richtlinie. In Deutschland ist diese Ausnahme in § 44a UrhG geregelt.",
  },
];

export const filmspelerNote =
  "Das Urteil betraf einen konkreten Medienabspieler. Wie es sich auf ein einzelnes IPTV-Angebot auswirkt, hängt vom Einzelfall ab.";

export const cheapReasons = [
  "Keine Rechtekosten: Wer keine Senderechte erwirbt, muss diese Kosten nicht in den Preis einrechnen. Das kann erklären, warum manche Angebote deutlich günstiger sind als lizenzierte Dienste.",
  "Pauschale statt Pakete: Viele Inhalte, die bei lizenzierten Diensten getrennt gebucht werden, erscheinen dort zu einem einzigen Preis.",
  "Fehlende Angaben: Wenn nicht erkennbar ist, wer hinter dem Angebot steht und was enthalten ist, lässt sich auch der Preis nicht nachvollziehen.",
];

export const cheapNote =
  "IPTV günstig bedeutet nicht automatisch illegal. Zattoo und Joyn zeigen, dass auch lizenzierte Angebote günstig oder kostenlos sein können. Ein niedriger Preis allein beweist also nichts. Er ist ein Anlass, genauer hinzusehen.";

export const premiumParagraphs = [
  "Zum Vergleich: Zattoo nennt 255 Sender, waipu.tv über 300. Wirbt ein Angebot mit tausenden Sendern, liegt es also deutlich über dem, was diese Dienste nennen.",
  "Auch IPTV Sport Sender und IPTV Premium Sender sind bei lizenzierten Angeboten oft auf mehrere Dienste verteilt. Die Telekom führt zum Beispiel MagentaSport, DAZN und WOW als eigene Sportangebote auf. Ein Komplettpaket mit allen Sport- und Premium-Sendern zu einem ungewöhnlich niedrigen Preis ist deshalb ein Warnsignal, aber für sich allein noch kein Beweis.",
];

export const warningSigns = [
  "Werbung mit tausenden Sendern, Sport und Pay-TV zu einem Bruchteil üblicher Preise",
  "Pauschale Aussagen wie „100 % legal“ ohne nachprüfbare Angaben zu Rechten",
  "Keine konkrete Senderliste oder keine Angabe, wer die Sender bereitstellt",
  "Fehlendes oder offensichtlich unvollständiges Impressum",
  "Keine klaren Angaben zu Vertrag, Laufzeit, Kündigung und Widerruf",
  "Verkauf ausschließlich über Messenger, Foren oder Social-Media-Profile",
  "Zahlung nur per Kryptowährung, Gutscheinkarte oder an Privatpersonen",
  "Zugangsdaten als „Line“ oder „Reseller-Panel“ ohne erkennbares Unternehmen",
  "Geräte mit vorinstallierten Senderlisten oder „freigeschalteten“ Add-ons",
];

export const warningSignsNote =
  "Die [Verbraucherzentrale](https://www.verbraucherzentrale.de/digitale-welt/checkliste-urheberrecht-79986) nennt für illegale Streaming-Portale zudem aggressive Werbung wie Pop-ups oder Weiterleitungen und Kreditkartenabfragen bei angeblich kostenlosen Diensten. Einzelne Warnsignale sind noch kein Beweis, mehrere zusammen sprechen dafür, das Angebot nicht ungeprüft zu kaufen.";

export const comparison = {
  headers: ["Kriterium", "Lizenzierte Dienste", "Verdächtige Angebote"],
  rows: [
    [
      "Senderechte und Lizenzen",
      "Der Dienst nennt konkrete Senderpakete, die er anbieten darf.",
      "Keine nachprüfbaren Angaben zu Rechten, oft nur pauschale Legalitätsversprechen.",
    ],
    [
      "Preise",
      "Preis richtet sich nach Paket und Leistung. Es gibt auch günstige oder kostenlose Optionen.",
      "Sehr niedriger Pauschalpreis für einen ungewöhnlich großen Umfang.",
    ],
    [
      "Sport- und Premium-Sender",
      "Oft als eigene Pakete oder bei getrennten Diensten buchbar.",
      "Alle Sport- und Premium-Sender in einem einzigen günstigen Paket.",
    ],
    [
      "Unternehmensangaben",
      "Vollständiges Impressum mit Name, Anschrift und Kontakt.",
      "Impressum fehlt oder ist unvollständig, das Unternehmen bleibt unklar.",
    ],
    [
      "Verträge und Abonnement",
      "AGB, Laufzeit, Kündigung und Widerruf sind vor dem Kauf einsehbar.",
      "Keine oder unklare Bedingungen, Zugangsdaten nur per Chat.",
    ],
    [
      "Kundensupport",
      "Feste Kontaktwege und Hilfeseiten des Anbieters.",
      "Nur ein Chat-Kontakt, ohne erkennbares Unternehmen dahinter.",
    ],
  ],
};

export const comparisonNote =
  "Die Tabelle zeigt typische Merkmale und keine rechtliche Bewertung einzelner Anbieter. Ein niedriger Preis allein beweist nicht, dass ein Dienst illegal ist, und ein hoher Preis beweist nicht, dass er legal ist.";

export const supportParagraph = `Wir helfen bei der Einrichtung von Apps und Geräten und bei technischen Problemen, ab ${formatPrice(LOWEST_PRICE)} Gesamtpreis. Nach unseren [AGB](/agb) unterstützen wir ausschließlich die Einrichtung rechtmäßig angebotener Dienste und Inhalte. ${PLAN_SCOPE_NOTE}`;

export const supportDisclaimer =
  "Unsere Angebote sind keine lizenzierten TV-Senderpakete. Ob ein Dienst die nötigen Rechte besitzt, bestätigt unsere Einrichtungshilfe nicht.";

/* ------------------------------------------------------------------ FAQ, links, sources */

const highestPrice = Math.max(...deviceCategories.flatMap((category) => Object.values(category.prices)));
const firstDuration = DURATIONS[0].id;
const lastDuration = DURATIONS[DURATIONS.length - 1].id;

export const legalIptvFaq: FaqItem[] = [
  {
    question: "Ist IPTV legal?",
    answer:
      "Als Technik ist IPTV nicht das rechtliche Problem. Entscheidend ist, ob für die gezeigten Sender und Inhalte die nötigen Rechte vorliegen. Diese Frage lässt sich nur für das jeweilige Angebot beantworten.",
  },
  {
    question: "Ist IPTV illegal?",
    answer:
      "Nicht grundsätzlich. Illegal ist die Verbreitung geschützter Sender und Inhalte ohne Erlaubnis der Rechteinhaber, nicht die Übertragungstechnik selbst.",
  },
  {
    question: "Woran erkenne ich illegale IPTV Anbieter?",
    answer:
      "Typische Warnsignale sind tausende Sender mit Sport und Pay-TV zum Kleinstpreis, ein fehlendes Impressum, unklare Vertragsbedingungen, Verkauf nur über Messenger und Zahlung nur per Kryptowährung oder Gutscheinkarte. Einzelne Merkmale sind kein Beweis.",
  },
  {
    question: "Ist ein günstiges IPTV Angebot automatisch illegal?",
    answer:
      "Nein. Auch lizenzierte Dienste haben günstige oder kostenlose Angebote. Umgekehrt beweist ein hoher Preis nicht, dass ein Angebot legal ist. Entscheidend sind die Rechte an den Inhalten.",
  },
  {
    question: "Sind M3U-Playlists und Xtream Codes legal?",
    answer:
      "Beides sind technische Formate und Zugangswege. Sie sind weder automatisch legal noch automatisch illegal. Es kommt darauf an, welche Inhalte darüber bereitgestellt werden und ob dafür Rechte bestehen.",
  },
  {
    question: "Verkaufen Sie lizenzierte TV-Senderpakete?",
    answer: `Nein. Wir bieten Einrichtungshilfe und technischen Support. ${PLAN_SCOPE_NOTE} Unsere Pakete sind auch kein Nachweis von Senderechten.`,
  },
  {
    question: "Was kostet die Einrichtungshilfe?",
    answer: `Die Preise liegen zwischen ${formatPrice(LOWEST_PRICE)} (${durationLabel(firstDuration)}, ${deviceCategories[0].label}) und ${formatPrice(highestPrice)} (${durationLabel(lastDuration)}, ${deviceCategories[deviceCategories.length - 1].label}). ${PRICE_NOTE} Alle Pakete finden Sie auf der Angebotsseite.`,
  },
];

export const moreLinks = [
  { href: "/", label: "Startseite von IPTV Kaufen Direkt" },
  { href: "/angebote", label: "Angebote und Preise" },
  { href: "/anleitungen", label: "Alle IPTV-Anleitungen" },
  { href: "/anleitungen/iptv-anbieter-erkennen", label: "IPTV Anbieter erkennen" },
  { href: "/geraete/smart-tv", label: "IPTV auf dem Smart TV" },
  { href: "/geraete/fire-tv-stick", label: "IPTV auf dem Fire TV Stick" },
  { href: "/geraete/android-tv-box", label: "IPTV auf der Android TV Box" },
  { href: "/geraete/enigma2-receiver", label: "IPTV auf dem Enigma2-Receiver" },
  { href: "/geraete/mag-box", label: "IPTV auf der MAG Box" },
  { href: "/faq", label: "Häufige Fragen (FAQ)" },
  { href: "/kontakt", label: "Kontakt aufnehmen" },
];

export const sources = [
  { label: "EuGH, Urteil vom 26. April 2017, C-527/15 (Stichting Brein / Wullems, „Filmspeler“), EUR-Lex", href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:62015CJ0527" },
  { label: "Richtlinie 2001/29/EG (Urheberrecht in der Informationsgesellschaft), EUR-Lex", href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32001L0029" },
  { label: "§ 19a UrhG: Recht der öffentlichen Zugänglichmachung", href: "https://www.gesetze-im-internet.de/urhg/__19a.html" },
  { label: "§ 20 UrhG: Senderecht", href: "https://www.gesetze-im-internet.de/urhg/__20.html" },
  { label: "§ 44a UrhG: Vorübergehende Vervielfältigungshandlungen", href: "https://www.gesetze-im-internet.de/urhg/__44a.html" },
  { label: "§ 87 UrhG: Sendeunternehmen", href: "https://www.gesetze-im-internet.de/urhg/__87.html" },
  { label: "§ 97 UrhG: Anspruch auf Unterlassung und Schadensersatz", href: "https://www.gesetze-im-internet.de/urhg/__97.html" },
  { label: "§ 5 DDG: Allgemeine Informationspflichten", href: "https://www.gesetze-im-internet.de/ddg/__5.html" },
  { label: "Verbraucherzentrale: Checkliste Urheberrecht", href: "https://www.verbraucherzentrale.de/digitale-welt/checkliste-urheberrecht-79986" },
  { label: "Telekom: MagentaTV", href: "https://www.telekom.de/magenta-tv" },
  { label: "Zattoo: Angebot und Preise", href: "https://zattoo.com/de" },
  { label: "waipu.tv: Angebot und Preise", href: "https://www.waipu.tv/" },
  { label: "Joyn: Live-TV und Joyn+", href: "https://www.joyn.de/" },
  { label: "ZDF: Live & TV", href: "https://www.zdf.de/live-tv" },
  { label: "ARD Mediathek: Livestreams", href: "https://www.ardmediathek.de/live" },
];
