import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/content/ArticleCard";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { PricingPlans } from "@/components/plans/PricingPlans";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { devices } from "@/lib/devices";
import { allFaqItems } from "@/lib/faq-data";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "IPTV kaufen & einrichten – legal, mit persönlicher Hilfe",
  absoluteTitle: true,
  description:
    "Sie möchten IPTV kaufen und nutzen? Wir beraten Sie zu legalen IPTV-Anbietern in Deutschland, richten Fire TV, Smart TV & Co. ein und helfen per WhatsApp.",
  path: "/",
});

const heroPoints = ["Nur legale Angebote", "Hilfe per WhatsApp", "Für alle gängigen Geräte"];

const benefits = [
  {
    title: "Unabhängige Beratung",
    text: "Wir verkaufen keine Senderpakete. Deshalb empfehlen wir nur, was zu Ihren Geräten und Wünschen passt.",
  },
  {
    title: "Persönliche Einrichtung",
    text: "Wir richten Apps, Playlists und Programmzeitschrift gemeinsam mit Ihnen ein, Schritt für Schritt.",
  },
  {
    title: "Verständlich auf Deutsch",
    text: "Keine Fachbegriffe ohne Erklärung. Sie erfahren, was wir tun und warum.",
  },
  {
    title: "Hilfe, wenn es hakt",
    text: "Ruckeln, kein Bild, fehlende Sender: Wir suchen die Ursache mit Ihnen und beheben sie.",
  },
];

const steps = [
  {
    title: "Schreiben Sie uns",
    text: "Per WhatsApp oder Kontaktformular. Nennen Sie Ihre Geräte und was Sie schauen möchten.",
  },
  {
    title: "Ehrliche Empfehlung",
    text: "Wir zeigen Ihnen, was mit Ihren Geräten möglich ist, und nennen Ihnen das passende Paket.",
  },
  {
    title: "Gemeinsame Einrichtung",
    text: "Per Chat, Videoanruf oder Fernwartung richten wir alles ein, bis das Bild läuft.",
  },
];

/** Decorative program-guide mockup for the hero. Purely visual, hidden from assistive tech. */
function HeroVisual() {
  const rows = [
    { channel: "Das Erste", now: "Tagesschau", width: "w-3/5" },
    { channel: "ZDF", now: "heute journal", width: "w-2/5" },
    { channel: "Arte", now: "Dokumentation", width: "w-4/5" },
    { channel: "3sat", now: "Kulturzeit", width: "w-1/2" },
  ];

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="rounded-3xl border border-border-strong bg-background-elevated/90 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Programm · Jetzt</span>
          <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">EPG geladen</span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {rows.map((row) => (
            <li key={row.channel} className="flex items-center gap-3 rounded-xl bg-surface p-3">
              <span className="flex h-9 w-14 shrink-0 items-center justify-center rounded-lg bg-background text-[11px] font-bold text-secondary">
                {row.channel}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="truncate text-sm font-medium text-foreground">{row.now}</span>
                <span className="h-1.5 w-full overflow-hidden rounded-full bg-background">
                  <span className={`block h-full rounded-full bg-gradient-to-r from-accent to-highlight ${row.width}`} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-2xl border border-border-strong bg-surface px-4 py-3 shadow-xl sm:-left-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-[#052e16]">
          <WhatsAppIcon className="h-4 w-4" />
        </span>
        <span className="text-xs font-medium text-secondary">Persönliche Hilfe per WhatsApp</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const latestGuides = guides.slice(0, 3);
  const faqPreview = allFaqItems.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-grid absolute inset-0" />
        <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="flex flex-col gap-6">
            <span className="animate-fade-up w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              IPTV kaufen, einrichten, loslegen
            </span>
            <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              IPTV legal nutzen, <span className="text-gradient">ohne Technikstress</span>
            </h1>
            <p className="animate-fade-up-delay-1 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Wir beraten Sie zu legalen IPTV-Angeboten in Deutschland und richten alles auf Ihrem Fire TV
              Stick, Smart TV oder Receiver ein. Persönlich, verständlich und per WhatsApp.
            </p>
            <div className="animate-fade-up-delay-2 flex flex-col gap-3 sm:flex-row">
              <Button href={WHATSAPP_DEFAULT_LINK} external variant="primary">
                Per WhatsApp anfragen
              </Button>
              <Button href="/geraete" variant="secondary">
                Unterstützte Geräte
              </Button>
            </div>
            <ul className="animate-fade-up-delay-2 flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-secondary">
                  <CheckIcon className="mt-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24" aria-labelledby="benefits-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Warum wir"
            title="IPTV-Hilfe, die auf Ihrer Seite steht"
            description="Viele Angebote im Netz wollen Ihnen vor allem ein Abo verkaufen. Wir helfen Ihnen, die richtige Lösung zu finden und sie zum Laufen zu bringen."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <CheckIcon className="mt-0 h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="steps-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading id="steps-heading" eyebrow="So einfach geht’s" title="In drei Schritten zu Ihrem IPTV" />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 text-lg font-bold text-accent">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Plans */}
      <section className="py-16 sm:py-24" aria-labelledby="plans-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="plans-heading"
            eyebrow="Pakete"
            title="Einrichtungshilfe und Support zum festen Preis"
            description="Wählen Sie die Anzahl Ihrer Geräte und die Laufzeit. Sie zahlen für unsere Hilfe, nicht für Sender."
          />
          <PricingPlans />
          <p className="text-center text-sm text-muted">
            Alle Preise im Vergleich und Antworten zum Ablauf finden Sie auf der Seite{" "}
            <Link href="/iptv-pakete" className="font-medium text-accent underline underline-offset-4">
              Pakete &amp; Preise
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Devices */}
      <section className="border-y border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="devices-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="devices-heading"
            eyebrow="Kompatible Geräte"
            title="IPTV auf Ihrem Gerät einrichten"
            description="Für jedes Gerät gibt es eine ausführliche Anleitung. Lieber nicht selbst machen? Dann übernehmen wir das für Sie."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <ArticleCard
                key={device.slug}
                href={`/geraete/${device.slug}`}
                title={device.shortName}
                excerpt={device.excerpt}
                icon={<DeviceIcon icon={device.icon} className="h-6 w-6" />}
              />
            ))}
            <Link
              href="/kontakt"
              className="flex h-full flex-col justify-center gap-2 rounded-2xl border border-dashed border-border-strong p-6 text-center transition-colors hover:border-accent/50"
            >
              <span className="text-lg font-semibold text-foreground">Ihr Gerät fehlt?</span>
              <span className="text-sm text-muted">Fragen Sie uns. Wir prüfen, was möglich ist.</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Legal */}
      <section className="py-16 sm:py-24" aria-labelledby="legal-heading">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-highlight/30 bg-highlight/5 p-7 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Transparenz</span>
              <h2 id="legal-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                Ist IPTV legal? Ja, wenn der Anbieter die Senderrechte hat.
              </h2>
              <p className="text-base leading-relaxed text-secondary">
                Angebote mit Tausenden Pay-TV-Sendern für wenige Euro sind in Deutschland in aller Regel illegal.
                Das Risiko tragen auch die Kunden. Wir arbeiten deshalb nur mit legalen Lösungen und zeigen Ihnen,
                woran Sie seriöse Anbieter erkennen.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/iptv-legal" variant="primary">
                IPTV legal in Deutschland
              </Button>
              <Button href="/anleitungen/iptv-anbieter-erkennen" variant="secondary">
                Seriöse Anbieter erkennen
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section className="border-t border-border py-16 sm:py-24" aria-labelledby="guides-heading">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="guides-heading"
              align="left"
              eyebrow="Anleitungen"
              title="Wissen, das wirklich weiterhilft"
            />
            <Button href="/anleitungen" variant="secondary" className="shrink-0">
              Alle Anleitungen
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestGuides.map((guide) => (
              <ArticleCard
                key={guide.slug}
                href={`/anleitungen/${guide.slug}`}
                title={guide.title}
                excerpt={guide.excerpt}
                label={guide.category}
                meta={`${guide.readingTimeMinutes} Min.`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="faq-preview-heading">
        <Container className="flex flex-col items-center gap-10">
          <SectionHeading id="faq-preview-heading" eyebrow="FAQ" title="Häufige Fragen" />
          <div className="w-full max-w-3xl">
            <FaqList items={faqPreview} />
          </div>
          <Button href="/faq" variant="secondary">
            Alle Fragen ansehen
          </Button>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
