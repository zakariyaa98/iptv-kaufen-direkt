import { LOWEST_PRICE, formatPrice } from "./plans";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Unser Service",
    items: [
      {
        question: "Verkaufen Sie IPTV-Abos oder Senderpakete?",
        answer:
          "Nein. Wir verkaufen keine Senderpakete und keine Zugangsdaten. Wir bieten ausschließlich Einrichtungshilfe, Support bei technischen Problemen und Anleitungen.",
      },
      {
        question: "Wie läuft die Einrichtung ab?",
        answer:
          "Sie schreiben uns per WhatsApp, Telegram oder über das Kontaktformular, welche Geräte Sie haben. Danach führen wir Sie Schritt für Schritt per Chat, Sprachnachricht oder Videoanruf durch die Einrichtung. Eine Fernwartung erfolgt nur mit Ihrer Zustimmung.",
      },
      {
        question: "Welche Geräte unterstützen Sie?",
        answer:
          "Wir helfen bei Fire TV Stick, Smart TVs von Samsung und LG, Android-TV- und Google-TV-Geräten, MAG-Boxen und Enigma2-Receivern wie VU+, Dreambox, Zgemma und GigaBlue.",
      },
      {
        question: "Was kostet die Hilfe?",
        answer: `Die Pakete beginnen bei ${formatPrice(LOWEST_PRICE)} für 1 Monat und 1 Gerät. Alle Preise für 1, 2 oder 3 Geräte und Laufzeiten bis 2 Jahre finden Sie auf unserer Seite „Pakete“. TV-Sender oder Zugangsdaten sind nicht enthalten.`,
      },
    ],
  },
  {
    category: "IPTV allgemein",
    items: [
      {
        question: "Was ist IPTV?",
        answer:
          "IPTV steht für Internet Protocol Television, also Fernsehen über das Internet. Statt per Satellit, Kabel oder Antenne kommen die Sender als Datenstrom über Ihren Internetanschluss.",
      },
      {
        question: "Ist IPTV in Deutschland legal?",
        answer:
          "Die Technik ist legal. Entscheidend ist, ob der Anbieter die Rechte an den Sendern besitzt. Angebote mit Tausenden Pay-TV-Sendern zu Kleinstpreisen sind in der Regel illegal.",
      },
      {
        question: "Welche Internetgeschwindigkeit brauche ich?",
        answer:
          "Als Richtwert etwa 8 bis 10 Mbit/s für einen HD-Stream und 20 bis 25 Mbit/s für 4K. Wichtiger als die Höchstgeschwindigkeit ist eine stabile Verbindung.",
      },
      {
        question: "Was ist der Unterschied zwischen M3U und Xtream Codes?",
        answer:
          "Eine M3U-Playlist ist eine einfache Liste von Stream-Adressen. Xtream Codes nutzt Server, Benutzername und Passwort und lädt Senderliste und Programmzeitschrift automatisch.",
      },
    ],
  },
  {
    category: "Kontakt & Ablauf",
    items: [
      {
        question: "Wie schnell antworten Sie?",
        answer:
          "Wir bemühen uns, Anfragen am selben Tag zu beantworten. An Wochenenden und Feiertagen kann es etwas länger dauern.",
      },
      {
        question: "Brauche ich technisches Vorwissen?",
        answer:
          "Nein. Wir erklären jeden Schritt verständlich und passen das Tempo an Sie an.",
      },
    ],
  },
];

export const allFaqItems: FaqItem[] = faqCategories.flatMap((category) => category.items);
