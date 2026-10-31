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
  deviceCategories,
  durationLabel,
  formatPrice,
  type DeviceCount,
  type DurationId,
} from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "IPTV Angebote & Pakete vergleichen",
  description: `IPTV Angebote vergleichen: Einrichtungshilfe und Support für 1, 2 oder 3 Geräte, 1 Monat bis 2 Jahre, ab ${formatPrice(LOWEST_PRICE)}. Feste Gesamtpreise.`,
  path: "/angebote",
});

const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";

const lowestPriceFor = (prices: Record<DurationId, number>) => Math.min(...Object.values(prices));

const quickFacts = [
  { value: `${deviceCategories.length}`, label: "Gerätestufen" },
  { value: `${DURATIONS.length}`, label: "Laufzeiten" },
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

const compareReasons: { icon: keyof typeof icons; title: string; text: string }[] = [
  {
    icon: "calendar",
    title: "Laufzeit nach Bedarf",
    text: "Von 1 Monat bis 2 Jahre: Sie legen fest, wie lange Sie unseren Support nutzen möchten. Der Preis ist ein Gesamtpreis für die gesamte Laufzeit.",
  },
  {
    icon: "devices",
    title: "Für 1, 2 oder 3 Geräte",
    text: "Ob ein Fernseher oder mehrere Geräte im Haushalt: Jedes Paket gilt für die gewählte Anzahl an Geräten, etwa Smart TV, Fire TV Stick oder Receiver.",
  },
  {
    icon: "chat",
    title: "Persönliche Einrichtungshilfe",
    text: "Wir begleiten Sie Schritt für Schritt per WhatsApp, Telegram oder E-Mail, bei der Einrichtung und bei Störungen während der Laufzeit.",
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

const transparencyItems: { icon: keyof typeof icons; title: string; text: React.ReactNode }[] = [
  {
    icon: "card",
    title: "Zahlung",
    text: "Alle Preise sind Gesamtpreise für die gewählte Laufzeit. Die verfügbaren Zahlungsarten nennen wir Ihnen vor Vertragsschluss. Sofern nicht anders vereinbart, ist der Preis vor Beginn der Leistung fällig.",
  },
  {
    icon: "play",
    title: "Start der Leistung",
    text: "Nach Ihrer Anfrage bestätigen wir Ihnen Paket und Preis. Der Vertrag kommt zustande, wenn Sie dieses Angebot in Textform annehmen. Danach beginnen wir mit der Einrichtungshilfe.",
  },
  {
    icon: "chat",
    title: "Support",
    text: "Während der Laufzeit erreichen Sie uns per WhatsApp, Telegram und E-Mail. Wir bemühen uns, Anfragen am selben Tag zu beantworten; an Wochenenden und Feiertagen kann es länger dauern.",
  },
  {
    icon: "shield",
    title: "Verlängerung & Widerruf",
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
    answer: `Wir bieten ${deviceCategories.length * DURATIONS.length} Pakete: für ${deviceCategories.map((category) => category.label).join(", ").replace(/, ([^,]*)$/, " oder $1")} mit Laufzeiten von ${durationLabel(DURATIONS[0].id)} bis ${durationLabel(DURATIONS[DURATIONS.length - 1].id)}, ab ${formatPrice(LOWEST_PRICE)}. ${PLAN_SCOPE_NOTE}`,
  },
  {
    question: "Für wie viele Geräte gilt ein Paket?",
    answer:
      "Sie wählen 1, 2 oder 3 Geräte. Während der Laufzeit helfen wir Ihnen bei der Einrichtung und bei technischen Problemen auf genau dieser Anzahl an Geräten. Welche Geräte das sind, stimmen wir vorab mit Ihnen ab.",
  },
  {
    question: "Welche Laufzeiten kann ich wählen?",
    answer: `Zur Auswahl stehen ${DURATIONS.map((duration) => duration.label).join(", ").replace(/, ([^,]*)$/, " und $1")}. Der angegebene Preis ist jeweils der Gesamtpreis für die gesamte Laufzeit, nicht ein Monatspreis.`,
  },
  {
    question: "Wie läuft die Aktivierung meines Pakets ab?",
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
            IPTV Angebote in Deutschland – <span className="text-gradient">Pakete und Preise vergleichen</span>
          </h1>
          <p className="animate-fade-up-delay-1 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            Sie möchten IPTV kaufen und suchen ein Paket, das zu Ihrem Haushalt passt? Hier vergleichen Sie unsere
            Pakete für persönliche Einrichtungshilfe und Support, nach Anzahl der Geräte und Laufzeit, mit festen
            Gesamtpreisen.
          </p>
          <p className="animate-fade-up-delay-1 max-w-2xl text-sm leading-relaxed text-muted">
            Wichtig: Wir verkaufen keine Senderpakete und keine Zugangsdaten. Wir helfen Ihnen, einen legalen Dienst
            auf Ihren Geräten einzurichten und zuverlässig zu nutzen.
          </p>
          <div className="animate-fade-up-delay-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#pakete" variant="primary" className="w-full sm:w-auto">
              Pakete vergleichen
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

      {/* Packages */}
      <section id="pakete" className="scroll-mt-20 py-16 sm:py-24" aria-labelledby="pakete-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="pakete-heading"
            eyebrow="Pakete & Preise"
            title="IPTV Pakete für 1, 2 oder 3 Geräte"
            description="Wählen Sie oben die Anzahl Ihrer Geräte und vergleichen Sie darunter die fünf Laufzeiten. Jeder Preis gilt für die gesamte Laufzeit."
          />
          <PricingPlans />
          <section aria-labelledby="price-table-heading" className="mx-auto flex w-full max-w-3xl flex-col gap-5">
            <h3 id="price-table-heading" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Alle IPTV Preise auf einen Blick
            </h3>
            <PriceTable />
          </section>
        </Container>
      </section>

      {/* Why compare */}
      <section
        className="border-y border-border bg-background-elevated/40 py-16 sm:py-24"
        aria-labelledby="compare-heading"
      >
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="compare-heading"
            eyebrow="Transparent vergleichen"
            title="Warum sich ein Vergleich unserer Pakete lohnt"
            description="Unsere IPTV Angebote unterscheiden sich nur in zwei Punkten: Anzahl der Geräte und Laufzeit. Der Leistungsumfang ist in jedem Paket gleich."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {compareReasons.map((reason) => (
              <article
                key={reason.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-border-strong sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <LineIcon name={reason.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* How to choose */}
      <section className="py-16 sm:py-24" aria-labelledby="choose-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="choose-heading"
            eyebrow="Entscheidungshilfe"
            title="So wählen Sie das passende IPTV Paket"
            description="Zwei Fragen genügen: An wie vielen Geräten möchten Sie IPTV nutzen, und wie lange möchten Sie Unterstützung?"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <section
              aria-labelledby="choose-devices-heading"
              className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <h3 id="choose-devices-heading" className="flex items-center gap-3 text-lg font-semibold text-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent">
                  1
                </span>
                Anzahl der Geräte
              </h3>
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
            </section>

            <section
              aria-labelledby="choose-duration-heading"
              className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <h3 id="choose-duration-heading" className="flex items-center gap-3 text-lg font-semibold text-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent">
                  2
                </span>
                Laufzeit
              </h3>
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
            Unsicher, welches Paket passt? Beschreiben Sie uns kurz Ihre Geräte über die{" "}
            <Link href="/kontakt" className={inlineLink}>
              Kontaktseite
            </Link>{" "}
            oder lesen Sie vorab die{" "}
            <Link href="/faq" className={inlineLink}>
              häufigen Fragen
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
            title="Kompatible Geräte"
            description="Unsere Pakete gelten für die gängigen IPTV-Geräte. Zu jedem Gerät finden Sie eine ausführliche Anleitung."
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
          <div className="flex justify-center">
            <Button href="/geraete" variant="secondary">
              Alle Geräte ansehen
            </Button>
          </div>
        </Container>
      </section>

      {/* Transparent information */}
      <section className="py-16 sm:py-24" aria-labelledby="transparency-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="transparency-heading"
            eyebrow="Transparenz"
            title="Zahlung, Start, Support und Verlängerung"
            description="Anders als ein IPTV Abonnement bei einem TV-Anbieter enthalten unsere Pakete keine Sender. So laufen Zahlung, Start und Support ab, wie in unseren AGB geregelt."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {transparencyItems.map((item) => (
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
              . Woran Sie seriöse Anbieter erkennen, erklärt unsere{" "}
              <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
                Anleitung zur Anbieterwahl
              </Link>
              .
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
            title="Häufige Fragen zu unseren IPTV Angeboten"
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
        title="Sie haben das passende Paket gefunden?"
        description="Schreiben Sie uns, welches Paket Sie interessiert und welche Geräte Sie nutzen. Wir bestätigen Ihnen Paket und Preis, bevor etwas fest vereinbart ist."
      />
    </>
  );
}
