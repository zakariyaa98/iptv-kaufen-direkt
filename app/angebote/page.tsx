import type { Metadata } from "next";
import Link from "next/link";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { PriceTable } from "@/components/plans/PriceTable";
import { PricingPlans } from "@/components/plans/PricingPlans";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { devices } from "@/lib/devices";
import {
  DURATIONS,
  DURATION_TAGS,
  FEATURED_DURATION,
  LOWEST_PRICE,
  PLAN_SCOPE_NOTE,
  PRICE_NOTE,
  deviceCategories,
  durationLabel,
  formatPrice,
  type DeviceCount,
  type DurationId,
} from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

/*
 * SEO focus of this page: "IPTV Angebote" (plus IPTV Preise / Kosten / Abo / Pakete).
 * The homepage owns "IPTV kaufen" – keep that phrase out of this page's headings and intro
 * so the two pages don't compete for the same query.
 * Every number below is derived from lib/plans.ts, so the text can never drift from the price list.
 */

const PACKAGE_COUNT = deviceCategories.length * DURATIONS.length;
const HIGHEST_PRICE = Math.max(...deviceCategories.flatMap((category) => Object.values(category.prices)));
const FIRST_DURATION = durationLabel(DURATIONS[0].id);
const LAST_DURATION = durationLabel(DURATIONS[DURATIONS.length - 1].id);

/** Length of each duration in months, used for the "price per month" comparison. */
const DURATION_MONTHS: Record<DurationId, number> = { "1m": 1, "3m": 3, "6m": 6, "12m": 12, "24m": 24 };

/** Always two decimals ("3,75 €"), so the monthly column lines up. */
const formatMonthly = (value: number) =>
  value.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });

const monthlyPrice = (price: number, duration: DurationId) => price / DURATION_MONTHS[duration];

const singleDevice = deviceCategories[0];
const LOWEST_MONTHLY = Math.min(
  ...deviceCategories.flatMap((category) => DURATIONS.map((duration) => monthlyPrice(category.prices[duration.id], duration.id)))
);

const listJoin = (items: string[], last: string) => items.join(", ").replace(/, ([^,]*)$/, ` ${last} $1`);

export const metadata: Metadata = pageMetadata({
  title: "IPTV Angebote & Preise 2026",
  description: `Entdecken Sie unsere IPTV Angebote und Preise: ${PACKAGE_COUNT} Pakete für 1, 2 oder 3 Geräte, Laufzeiten von ${FIRST_DURATION} bis ${LAST_DURATION}, ab ${formatPrice(LOWEST_PRICE)} Gesamtpreis.`,
  path: "/angebote",
});

const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";

const lowestPriceFor = (prices: Record<DurationId, number>) => Math.min(...Object.values(prices));

const quickFacts = [
  { value: `${PACKAGE_COUNT}`, label: "Pakete" },
  { value: `1–${deviceCategories.length}`, label: "Geräte" },
  { value: `ab ${formatPrice(LOWEST_PRICE)}`, label: "Gesamtpreis" },
];

const icons = {
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
  devices: "M3 5h13v9H3zM7 18h5M9.5 14v4M18 8h3v11h-3z",
  chat: "M21 12a8 8 0 01-11.8 7L4 20l1.1-4.6A8 8 0 1121 12z",
  card: "M2 6h20v12H2zM2 10h20M6 15h4",
  play: "M5 3l14 9-14 9V3z",
  shield: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
} as const;

function LineIcon({ name, className }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={icons[name]} />
    </svg>
  );
}

const includedItems: { icon: keyof typeof icons; title: string; text: string }[] = [
  {
    icon: "chat",
    title: "Persönliche Einrichtungshilfe",
    text: "Wir begleiten Sie Schritt für Schritt per WhatsApp, Telegram oder E-Mail – bei der Einrichtung und bei Störungen während der gesamten Laufzeit.",
  },
  {
    icon: "devices",
    title: "Für 1, 2 oder 3 Geräte",
    text: "Ob ein Fernseher oder mehrere Geräte im Haushalt: Jedes Paket gilt für die gewählte Anzahl an Geräten, etwa Smart TV, Fire TV Stick oder Receiver.",
  },
  {
    icon: "calendar",
    title: "Laufzeit nach Bedarf",
    text: `Von ${FIRST_DURATION} bis ${LAST_DURATION}: Sie legen fest, wie lange Sie unseren Support nutzen möchten. Der Preis gilt jeweils für die gesamte Laufzeit.`,
  },
];

const deviceAdvice: Record<DeviceCount, string> = {
  1: "Sie nutzen IPTV an einem Fernseher, zum Beispiel mit einem Fire TV Stick oder direkt am Smart TV.",
  2: "Zwei Geräte im Haushalt, etwa der Fernseher im Wohnzimmer und ein zweites Gerät im Schlafzimmer.",
  3: "Mehrere Fernseher oder eine Mischung aus Smart TV, Streaming-Stick und Enigma2-Receiver.",
};

const durationAdvice: Record<DurationId, string> = {
  "1m": "Für eine einmalige Einrichtung mit kurzer Unterstützung danach.",
  "3m": "Sie möchten nach der Einrichtung noch einige Wochen Hilfe bei Fragen.",
  "6m": "Ein halbes Jahr Support, zum Beispiel wenn Sie neue Apps oder Geräte ausprobieren.",
  "12m": "Unsere Empfehlung: ein Jahr Ansprechpartner für alle Fragen rund um Ihre Geräte.",
  "24m": "Die längste Laufzeit: einmal abstimmen, zwei Jahre Unterstützung.",
};

const featuredDeviceSlugs = ["smart-tv", "fire-tv-stick", "android-tv-box", "enigma2-receiver"];
const featuredDevices = featuredDeviceSlugs.flatMap((slug) => devices.filter((device) => device.slug === slug));

const orderInfo: { icon: keyof typeof icons; title: string; text: React.ReactNode }[] = [
  {
    icon: "play",
    title: "Bestellung und Start",
    text: "Nach Ihrer Anfrage bestätigen wir Ihnen Paket und Preis. Der Vertrag kommt zustande, wenn Sie dieses Angebot in Textform annehmen. Danach beginnen wir mit der Einrichtungshilfe.",
  },
  {
    icon: "card",
    title: "Zahlung",
    text: "Alle Preise sind Gesamtpreise für die gewählte Laufzeit. Die verfügbaren Zahlungsarten nennen wir Ihnen vor Vertragsschluss. Sofern nicht anders vereinbart, ist der Preis vor Beginn der Leistung fällig.",
  },
  {
    icon: "chat",
    title: "Support während der Laufzeit",
    text: "Sie erreichen uns per WhatsApp, Telegram und E-Mail. Wir bemühen uns, Anfragen am selben Tag zu beantworten; an Wochenenden und Feiertagen kann es länger dauern.",
  },
  {
    icon: "shield",
    title: "Verlängerung und Widerruf",
    text: (
      <>
        Jedes Paket gilt für die gewählte Laufzeit. Ein weiteres Paket kommt wie jede Bestellung nur zustande, wenn
        Sie unser Angebot in Textform annehmen. Verbraucher haben ein 14-tägiges Widerrufsrecht, Details in der{" "}
        <Link href="/widerruf" className={inlineLink}>
          Widerrufsbelehrung
        </Link>
        .
      </>
    ),
  },
];

const angeboteFaq = [
  {
    question: "Welche IPTV Angebote gibt es bei IPTV Kaufen Direkt?",
    answer: `Wir bieten ${PACKAGE_COUNT} Pakete: für ${listJoin(
      deviceCategories.map((category) => category.label),
      "oder"
    )} mit Laufzeiten von ${FIRST_DURATION} bis ${LAST_DURATION}, ab ${formatPrice(LOWEST_PRICE)}. ${PLAN_SCOPE_NOTE}`,
  },
  {
    question: "Was kostet IPTV bei Ihnen?",
    answer: `Die IPTV Preise liegen zwischen ${formatPrice(LOWEST_PRICE)} (${FIRST_DURATION}, ${singleDevice.label}) und ${formatPrice(
      HIGHEST_PRICE
    )} (${LAST_DURATION}, ${deviceCategories[deviceCategories.length - 1].label}). ${PRICE_NOTE} Auf den Monat umgerechnet beginnen die Kosten bei ${formatMonthly(
      LOWEST_MONTHLY
    )}.`,
  },
  {
    question: "Ist der angegebene Preis ein Monatspreis?",
    answer: `Nein. Zur Auswahl stehen ${listJoin(
      DURATIONS.map((duration) => duration.label),
      "und"
    )}. Der angegebene Preis ist jeweils der Gesamtpreis für die gesamte Laufzeit. Den rechnerischen Monatswert zeigt die Tabelle „IPTV Kosten pro Monat“ auf dieser Seite.`,
  },
  {
    question: "Ist ein Paket ein IPTV Abo mit TV-Sendern?",
    answer: `Nein. Unsere Angebote sind kein IPTV Abonnement für Sender. ${PLAN_SCOPE_NOTE} Den eigentlichen TV-Dienst schließen Sie direkt bei einem lizenzierten Anbieter ab – wir sorgen dafür, dass er auf Ihren Geräten zuverlässig läuft.`,
  },
  {
    question: "Für wie viele Geräte gilt ein Paket?",
    answer:
      "Sie wählen 1, 2 oder 3 Geräte. Während der Laufzeit helfen wir Ihnen bei der Einrichtung und bei technischen Problemen auf genau dieser Anzahl an Geräten. Welche Geräte das sind, stimmen wir vorab mit Ihnen ab.",
  },
  {
    question: "Wie bestelle ich ein IPTV Angebot?",
    answer:
      "Sie schreiben uns per WhatsApp, Telegram, E-Mail oder Kontaktformular, welches Paket Sie interessiert. Wir bestätigen Ihnen Paket und Preis und nennen die Zahlungsarten. Sobald Sie das Angebot in Textform annehmen und der Preis bezahlt ist, beginnen wir mit der Einrichtungshilfe.",
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer:
      "Wir helfen bei Fire TV Stick, Smart TVs von Samsung und LG, Android-TV- und Google-TV-Geräten, MAG-Boxen und Enigma2-Receivern wie VU+, Dreambox, Zgemma und GigaBlue.",
  },
  {
    question: "Wie funktioniert die Einrichtungshilfe?",
    answer:
      "Meist per WhatsApp- oder Telegram-Chat, Sprachnachricht oder Videoanruf: Sie bedienen das Gerät, wir erklären jeden Schritt. Eine Fernwartung erfolgt nur mit Ihrer ausdrücklichen Zustimmung. Technisches Vorwissen brauchen Sie nicht.",
  },
  {
    question: "Wie funktionieren Verlängerung und Widerruf?",
    answer:
      "Jedes Paket gilt für die gewählte Laufzeit zum angegebenen Gesamtpreis. Möchten Sie danach weiter Unterstützung, schreiben Sie uns: Ein weiteres Paket kommt nur zustande, wenn Sie unser Angebot in Textform annehmen. Als Verbraucher haben Sie außerdem ein 14-tägiges Widerrufsrecht, die Einzelheiten stehen in unserer Widerrufsbelehrung.",
  },
  {
    question: "Worauf sollte ich bei einem IPTV Anbieter Vergleich achten?",
    answer:
      "Prüfen Sie vor allem ein vollständiges Impressum, offen genannte Rechte an den Sendern, klare Gesamtpreise mit Laufzeit, einen erreichbaren Kundensupport und übliche Zahlungswege mit Käuferschutz. Eine ausführliche Checkliste finden Sie in unserem Ratgeber „Seriöse IPTV-Anbieter erkennen“.",
  },
];

export default function AngebotePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(angeboteFaq)} />
      <Breadcrumbs items={[{ label: "Angebote", href: "/angebote" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-grid absolute inset-0" />
        <Container className="relative flex flex-col items-center gap-7 py-14 text-center sm:py-20">
          <span className="animate-fade-up rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
            Einrichtungshilfe · Support · Anleitungen
          </span>
          <h1 className="animate-fade-up max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            IPTV Angebote und <span className="text-gradient">Preise im Überblick</span>
          </h1>
          <p className="animate-fade-up-delay-1 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            Unsere IPTV Angebote unterscheiden sich in genau zwei Punkten: der Anzahl der Geräte und der Laufzeit. Hier
            sehen Sie alle {PACKAGE_COUNT} Pakete für 1, 2 oder 3 Geräte mit festen Gesamtpreisen von {FIRST_DURATION}{" "}
            bis {LAST_DURATION} – und finden in zwei Schritten das passende Angebot für Ihren Haushalt.
          </p>
          <p className="animate-fade-up-delay-1 max-w-2xl text-sm leading-relaxed text-muted">
            Jedes Paket umfasst persönliche Einrichtungshilfe, Support und Anleitungen für Ihre Geräte. TV-Sender,
            Abonnements oder Zugangsdaten sind nicht enthalten.
          </p>
          <div className="animate-fade-up-delay-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#pakete" variant="primary" className="w-full sm:w-auto">
              Angebote vergleichen
            </Button>
            <Button href="/kontakt" variant="secondary" className="w-full sm:w-auto">
              Kontakt aufnehmen
            </Button>
          </div>
          <dl className="animate-fade-up-delay-2 grid w-full max-w-xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-background-elevated/70">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse items-center gap-1 px-2 py-4">
                <dt className="text-xs text-muted">{fact.label}</dt>
                <dd className="text-lg font-bold tabular-nums text-foreground sm:text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Prices */}
      <section id="pakete" className="scroll-mt-20 py-16 sm:py-24" aria-labelledby="pakete-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="pakete-heading"
            eyebrow="Pakete & Preise"
            title="IPTV Preise: alle Angebote im Vergleich"
            description="Wählen Sie die Anzahl Ihrer Geräte und vergleichen Sie darunter die fünf Laufzeiten. Jeder Preis ist ein Gesamtpreis für die gesamte Laufzeit – kein Monatspreis."
          />
          <PricingPlans />

          <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:gap-8">
            <section aria-labelledby="price-table-heading" className="flex min-w-0 flex-col gap-5">
              <h3 id="price-table-heading" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Alle IPTV Preise auf einen Blick
              </h3>
              <PriceTable />
            </section>

            <section aria-labelledby="monthly-heading" className="flex min-w-0 flex-col gap-5">
              <h3 id="monthly-heading" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                IPTV Kosten pro Monat
              </h3>
              <figure className="flex flex-col gap-2">
                <div className="w-full overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                    <caption className="sr-only">Rechnerischer Preis pro Monat nach Laufzeit und Anzahl der Geräte</caption>
                    <thead>
                      <tr className="bg-surface">
                        <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                          Laufzeit
                        </th>
                        {deviceCategories.map((category) => (
                          <th
                            key={category.devices}
                            scope="col"
                            className="border-b border-border px-4 py-3 text-right font-semibold text-foreground"
                          >
                            {category.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {DURATIONS.map((duration) => (
                        <tr
                          key={duration.id}
                          className={
                            duration.id === FEATURED_DURATION ? "bg-accent/10" : "odd:bg-background even:bg-background-elevated"
                          }
                        >
                          <th scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">
                            {duration.label}
                          </th>
                          {deviceCategories.map((category) => (
                            <td
                              key={category.devices}
                              className="border-b border-border px-4 py-3 text-right font-semibold tabular-nums text-secondary"
                            >
                              {formatMonthly(monthlyPrice(category.prices[duration.id], duration.id))}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figcaption className="text-xs leading-relaxed text-muted">
                  Rechnerischer Wert pro Monat, nur zum Vergleich. Berechnet wird der Gesamtpreis für die gesamte Laufzeit.
                </figcaption>
              </figure>
            </section>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 text-center text-sm leading-relaxed text-muted">
            <p>
              Je länger die Laufzeit, desto niedriger der Preis pro Monat: {durationLabel(FEATURED_DURATION)} für{" "}
              {singleDevice.label} entspricht{" "}
              {formatMonthly(monthlyPrice(singleDevice.prices[FEATURED_DURATION], FEATURED_DURATION))} im Monat, ein
              einzelner Monat kostet {formatPrice(singleDevice.prices["1m"])}.
            </p>
            <p>
              Welche Leistungen jedes Paket im Einzelnen enthält – und was nicht –, lesen Sie unter{" "}
              <Link href="/iptv-pakete" className={inlineLink}>
                IPTV Pakete und Leistungen im Detail
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* What every package includes */}
      <section
        className="border-y border-border bg-background-elevated/40 py-16 sm:py-24"
        aria-labelledby="included-heading"
      >
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="included-heading"
            eyebrow="Leistungsumfang"
            title="Was in jedem IPTV Angebot enthalten ist"
            description="Alle Pakete haben denselben Leistungsumfang. Sie unterscheiden sich nur in der Anzahl der Geräte und in der Laufzeit – so bleibt der Vergleich einfach."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {includedItems.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-border-strong sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <LineIcon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* How to choose: devices and durations */}
      <section className="py-16 sm:py-24" aria-labelledby="choose-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="choose-heading"
            eyebrow="Entscheidungshilfe"
            title="Welches IPTV Angebot passt zu Ihnen?"
            description="Zwei Fragen genügen: An wie vielen Geräten möchten Sie IPTV nutzen, und wie lange möchten Sie Unterstützung?"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <section
              aria-labelledby="choose-devices-heading"
              className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent"
                >
                  1
                </span>
                <h3 id="choose-devices-heading" className="text-lg font-semibold text-foreground">
                  IPTV Angebote für 1, 2 oder 3 Geräte
                </h3>
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {deviceCategories.map((category) => (
                  <li key={category.devices} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-semibold text-foreground">{category.label}</p>
                      <p className="text-sm tabular-nums text-secondary">
                        ab {formatPrice(lowestPriceFor(category.prices))}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{deviceAdvice[category.devices]}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-border pt-4 text-sm leading-relaxed text-muted">
                Laufen mehrere Geräte gleichzeitig, addiert sich die nötige Bandbreite. Wie viel Sie brauchen, zeigt
                unser Ratgeber zur{" "}
                <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
                  Internetgeschwindigkeit für IPTV
                </Link>
                .
              </p>
            </section>

            <section
              aria-labelledby="choose-duration-heading"
              className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent"
                >
                  2
                </span>
                <h3 id="choose-duration-heading" className="text-lg font-semibold text-foreground">
                  Unterschiede zwischen den Laufzeiten
                </h3>
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {DURATIONS.map((duration) => {
                  const featured = duration.id === FEATURED_DURATION;
                  return (
                    <li key={duration.id} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="font-semibold text-foreground">{duration.label}</p>
                        <span
                          className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                            featured
                              ? "bg-accent text-accent-ink"
                              : "border border-highlight/30 bg-highlight/10 text-highlight"
                          }`}
                        >
                          {DURATION_TAGS[duration.id]}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{durationAdvice[duration.id]}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted">
            Unsicher, welches Angebot passt? Beschreiben Sie uns kurz Ihre Geräte über die{" "}
            <Link href="/kontakt" className={inlineLink}>
              Kontaktseite
            </Link>{" "}
            oder lesen Sie vorab die{" "}
            <Link href="/faq" className={inlineLink}>
              häufigen Fragen zu IPTV
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Compatible devices */}
      <section
        className="border-y border-border bg-background-elevated/40 py-16 sm:py-24"
        aria-labelledby="devices-heading"
      >
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="devices-heading"
            eyebrow="Geräte"
            title="Welches IPTV Angebot passt zu Ihren Geräten?"
            description="Jedes Paket gilt für die gängigen IPTV-Geräte im Haushalt. Zu jedem Gerät gibt es eine ausführliche Anleitung – so sehen Sie vorab, was die Einrichtung umfasst."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDevices.map((device) => (
              <Link
                key={device.slug}
                href={`/geraete/${device.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <DeviceIcon icon={device.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-base font-semibold text-foreground">{device.shortName}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{device.excerpt}</p>
                <span className="text-sm font-semibold text-accent">
                  Zur Anleitung <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Sie nutzen eine MAG-Box? Auch dafür gibt es eine Anleitung:{" "}
              <Link href="/geraete/mag-box" className={inlineLink}>
                IPTV auf der MAG-Box einrichten
              </Link>
              .
            </p>
            <Button href="/geraete" variant="secondary">
              Alle Geräte ansehen
            </Button>
          </div>
        </Container>
      </section>

      {/* Before ordering */}
      <section className="py-16 sm:py-24" aria-labelledby="order-info-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="order-info-heading"
            eyebrow="Transparenz"
            title="Wichtige Informationen vor der Bestellung"
            description="Anders als ein IPTV Abo bei einem TV-Anbieter enthalten unsere Angebote keine Sender. So laufen Bestellung, Zahlung, Support und Verlängerung ab – wie in unseren AGB geregelt."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {orderInfo.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-6 sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <LineIcon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="flex min-w-0 flex-col gap-2">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-border-strong bg-surface/60 p-6 sm:p-7">
            <p className="flex items-start gap-2 text-sm leading-relaxed text-secondary">
              <CheckIcon className="text-accent" />
              <span>{PLAN_SCOPE_NOTE}</span>
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Es gelten unsere{" "}
              <Link href="/agb" className={inlineLink}>
                AGB
              </Link>
              . Welche legalen IPTV-Dienste es in Deutschland gibt, lesen Sie unter{" "}
              <Link href="/iptv-legal" className={inlineLink}>
                IPTV legal in Deutschland
              </Link>
              . Für einen IPTV Anbieter Vergleich – also die Wahl des eigentlichen TV-Dienstes – hilft unsere Checkliste{" "}
              <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
                seriöse IPTV-Anbieter erkennen
              </Link>
              . Einen allgemeinen{" "}
              <Link href="/" className={inlineLink}>
                Überblick über IPTV in Deutschland
              </Link>{" "}
              finden Sie auf unserer Startseite.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="border-t border-border bg-background-elevated/40 py-16 sm:py-24"
        aria-labelledby="angebote-faq-heading"
      >
        <Container className="flex flex-col gap-10">
          <SectionHeading
            id="angebote-faq-heading"
            eyebrow="FAQ"
            title="Häufige Fragen zu IPTV Angeboten und Preisen"
          />
          <div className="mx-auto w-full max-w-3xl">
            <FaqList items={angeboteFaq} />
          </div>
          <p className="text-center text-sm text-muted">
            Weitere Antworten finden Sie in unseren{" "}
            <Link href="/faq" className={inlineLink}>
              FAQ
            </Link>{" "}
            oder direkt per E-Mail an{" "}
            <a href={`mailto:${SITE.email}`} className={`${inlineLink} break-all`}>
              {SITE.email}
            </a>
            .
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Ihr passendes IPTV Angebot gefunden?"
        description="Schreiben Sie uns, welches Paket Sie interessiert und welche Geräte Sie nutzen. Wir bestätigen Ihnen Paket und Preis, bevor etwas fest vereinbart ist."
      />
    </>
  );
}
