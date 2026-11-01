import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { HomePricing } from "@/components/plans/HomePricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { LegalitySection } from "@/components/sections/LegalitySection";
import { SpeedSection } from "@/components/sections/SpeedSection";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  HOME_SEO,
  heroTrustPoints,
  homeDevices,
  homeFaq,
  installGuideLinks,
  installSteps,
  introChecklist,
  introParagraphs,
  iptvFeatures,
  pricingExplainer,
  providerCriteria,
  providerWarningSigns,
  whyUsBenefits,
} from "@/lib/home-content";
import { pageMetadata } from "@/lib/seo";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";
import heroImage from "@/public/images/home page/IPTV kaufen in Deutschland – Angebote, Preise und Informationen.webp";
import infoImage from "@/public/images/home page/Informationen/IPTV in Deutschland Die wichtigsten Informationen.webp";

export const metadata: Metadata = pageMetadata({
  title: HOME_SEO.title,
  absoluteTitle: true,
  description: HOME_SEO.description,
  path: "/",
});

const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";

export default function HomePage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-grid absolute inset-0" />
        <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="flex flex-col gap-6">
            <span className="animate-fade-up w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              Einrichtungshilfe · Support · Anleitungen
            </span>
            <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
              IPTV kaufen in Deutschland – <span className="text-gradient">Angebote, Preise und Informationen</span>
            </h1>
            <p className="animate-fade-up-delay-1 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Sie möchten IPTV kaufen und suchen einen ehrlichen Überblick? Hier finden Sie transparente Preise für
              persönliche Einrichtungshilfe und Support, Anleitungen für Ihre Geräte und alles, was Sie vor der Wahl
              eines IPTV-Anbieters wissen sollten.
            </p>
            <p className="animate-fade-up-delay-1 max-w-xl text-sm leading-relaxed text-muted">
              Wichtig vorab: Wir verkaufen keine Senderpakete und keine Zugangsdaten. Wir sorgen dafür, dass ein
              legaler Dienst auf Ihren Geräten zuverlässig läuft.
            </p>
            <div className="animate-fade-up-delay-2 flex flex-col gap-3 sm:flex-row">
              <Button href="#preise" variant="primary">
                Preise ansehen
              </Button>
              <Button href={WHATSAPP_DEFAULT_LINK} external variant="secondary">
                <WhatsAppIcon className="h-4 w-4" />
                Per WhatsApp beraten lassen
              </Button>
            </div>
            <ul className="animate-fade-up-delay-2 flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {heroTrustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-secondary">
                  <CheckIcon className="mt-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up-delay-1 relative isolate mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_70%)] blur-2xl"
            />
            <div className="overflow-hidden rounded-3xl border border-border-strong bg-background-elevated shadow-2xl shadow-black/40 ring-1 ring-white/5">
              <Image
                src={heroImage}
                alt="IPTV kaufen in Deutschland: Fernseher mit IPTV-Senderübersicht, Angeboten und Preisen in einem modernen Wohnzimmer"
                placeholder="blur"
                preload
                sizes="(min-width: 1152px) 470px, (min-width: 1024px) 42vw, (min-width: 704px) 672px, calc(100vw - 2rem)"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2 · Devices */}
      <section className="py-16 sm:py-24" aria-labelledby="devices-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="devices-heading"
            eyebrow="Kompatible Geräte"
            title="Auf welchen Geräten kann IPTV genutzt werden?"
            description="IPTV läuft auf fast jedem modernen Gerät mit Internetzugang. Ob eine bestimmte App verfügbar ist, hängt vom Dienst ab – hier sind die gängigsten IPTV-Geräte in Deutschland."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeDevices.map((device) => {
              const body = (
                <>
                  <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-background">
                    <Image
                      src={device.image}
                      alt={device.imageAlt}
                      placeholder="blur"
                      fill
                      sizes="(min-width: 1152px) 352px, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, calc(100vw - 2rem)"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <DeviceIcon icon={device.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">{device.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{device.text}</p>
                    {device.href ? (
                      <span className="mt-auto pt-2 text-sm font-semibold text-accent">
                        Zur Anleitung <span aria-hidden>→</span>
                      </span>
                    ) : (
                      <span className="mt-auto w-fit rounded-full border border-border-strong px-2.5 py-0.5 text-xs font-medium text-muted">
                        Anleitung folgt
                      </span>
                    )}
                  </div>
                </>
              );
              const cardClass =
                "group flex h-full flex-col overflow-hidden rounded-2xl border bg-background-elevated shadow-lg shadow-black/20 transition-all duration-300";
              return (
                <li key={device.name}>
                  {device.href ? (
                    <Link href={device.href} className={`${cardClass} border-border hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10`}>
                      {body}
                    </Link>
                  ) : (
                    <div className={`${cardClass} border-border`}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="text-center text-sm text-muted">
            Ihr Gerät ist nicht dabei?{" "}
            <Link href="/kontakt" className={inlineLink}>
              Fragen Sie uns
            </Link>{" "}
            – wir prüfen, was möglich ist. Alle Geräte im Überblick:{" "}
            <Link href="/geraete" className={inlineLink}>
              IPTV-Geräte
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* 3 · Pricing */}
      <section id="preise" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24" aria-labelledby="plans-heading">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(34,211,238,0.10),transparent_70%),radial-gradient(ellipse_40%_30%_at_90%_60%,rgba(167,139,250,0.08),transparent_70%)]"
        />
        <Container className="relative flex flex-col gap-12 sm:gap-14">
          <SectionHeading
            id="plans-heading"
            eyebrow="Pakete & Preise"
            title="IPTV Preise und Abonnements im Überblick"
            description="Unsere Pakete umfassen Einrichtungshilfe, Support und Anleitungen – für 1, 2 oder 3 Geräte und Laufzeiten von 1 Monat bis 2 Jahre. Alle Beträge sind Gesamtpreise für die gesamte Laufzeit."
          />
          <HomePricing />
          <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-2">
            {pricingExplainer.map((paragraph, index) => (
              <div
                key={paragraph}
                className="flex gap-4 rounded-2xl border border-border bg-background-elevated/60 p-6 text-sm leading-relaxed text-secondary"
              >
                <span
                  aria-hidden
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    index === 0 ? "bg-accent/15 text-accent" : "bg-highlight/15 text-highlight"
                  }`}
                >
                  {index === 0 ? "i" : "!"}
                </span>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted">
            Alle 15 Preise in einer Tabelle und Antworten zum Ablauf finden Sie unter{" "}
            <Link href="/iptv-pakete" className={inlineLink}>
              IPTV-Pakete &amp; Preise
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* 4 · Introduction */}
      <section className="py-16 sm:py-24" aria-labelledby="intro-heading">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="intro-heading"
              align="left"
              eyebrow="Grundlagen"
              title="IPTV in Deutschland: Die wichtigsten Informationen auf einen Blick"
            />
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 self-start lg:mx-0 lg:max-w-none">
            <figure className="relative isolate">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),transparent_70%)] blur-2xl"
              />
              <div className="overflow-hidden rounded-3xl border border-border-strong bg-white p-1.5 shadow-2xl shadow-black/40 ring-1 ring-white/5">
                <Image
                  src={infoImage}
                  alt="IPTV in Deutschland im Überblick: Familie schaut IPTV auf dem Smart TV – 4K-Qualität, legale lizenzierte Anbieter, Glasfaser-Internet und Streaming-Apps auf allen Geräten"
                  placeholder="blur"
                  sizes="(min-width: 1152px) 470px, (min-width: 1024px) 40vw, (min-width: 704px) 672px, calc(100vw - 2rem)"
                  className="h-auto w-full rounded-[1.25rem]"
                />
              </div>
            </figure>
            <aside
              aria-labelledby="intro-checklist-heading"
              className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <h3 id="intro-checklist-heading" className="text-lg font-semibold text-foreground">
                Bevor Sie IPTV kaufen: drei Fragen
              </h3>
              <ol className="flex flex-col gap-5">
                {introChecklist.map((item, index) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent">
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="border-t border-border pt-5 text-sm leading-relaxed text-muted">
                Und vor allem: Besitzt der Anbieter die Rechte an den Sendern? Mehr dazu unter{" "}
                <a href="#legal-heading" className={inlineLink}>
                  Ist IPTV in Deutschland legal?
                </a>
              </p>
            </aside>
          </div>
        </Container>
      </section>

      {/* 5 · Why us */}
      <section className="border-y border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="why-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="why-heading"
            eyebrow="Unser Service"
            title="Warum IPTV Kaufen Direkt?"
            description="Viele Seiten im Netz wollen Ihnen vor allem ein Abo verkaufen. Wir helfen Ihnen, eine legale Lösung zu finden und sie auf Ihren Geräten zum Laufen zu bringen."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="p-2 pb-0">
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10"
                    style={{ backgroundColor: benefit.imageBg }}
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      placeholder="blur"
                      fill
                      sizes="240px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <CheckIcon className="mt-0 h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{benefit.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6 · Features */}
      <section className="border-y border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="features-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="features-heading"
            eyebrow="Funktionen"
            title="Welche Funktionen bietet ein moderner IPTV-Dienst?"
            description="Welche Funktionen Ihnen zur Verfügung stehen, legt immer der jeweilige Anbieter fest. Diese Funktionen sind bei lizenzierten IPTV-Diensten verbreitet – und bei ihrer Einrichtung helfen wir Ihnen."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {iptvFeatures.map((feature) => (
              <li
                key={feature.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-lg shadow-black/20 transition-colors duration-300 hover:border-border-strong"
              >
                <div className="p-2 pb-0">
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10"
                    style={{ backgroundColor: feature.imageBg }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      placeholder="blur"
                      fill
                      sizes="240px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.text}</p>
                  {feature.href ? (
                    <Link href={feature.href} className="mt-auto pt-2 text-sm font-semibold text-accent hover:text-accent-soft">
                      {feature.linkLabel} <span aria-hidden>→</span>
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
            <li className="flex flex-col justify-center gap-2 rounded-2xl border border-dashed border-highlight/40 bg-highlight/5 p-6">
              <p className="text-sm font-semibold text-highlight">Unser Beitrag</p>
              <p className="text-sm leading-relaxed text-secondary">
                Wir richten diese Funktionen auf Ihren Geräten ein. Inhalte schalten wir nicht frei – das übernimmt
                Ihr Anbieter.
              </p>
            </li>
          </ul>
        </Container>
      </section>

      {/* 7 · Installation */}
      <section className="border-y border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="install-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="install-heading"
            eyebrow="Einrichtung"
            title="IPTV installieren und richtig einrichten"
            description="Die genauen Schritte unterscheiden sich je nach Gerät und Dienst. Der grundsätzliche Ablauf ist aber fast immer gleich."
          />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <ol className="flex flex-col gap-6">
              {installSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 text-base font-bold text-accent">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside
              aria-labelledby="install-guides-heading"
              className="flex flex-col gap-5 self-start rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <h3 id="install-guides-heading" className="text-lg font-semibold text-foreground">
                Anleitungen für Ihr Gerät
              </h3>
              <ul className="flex flex-col gap-1">
                {installGuideLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-start gap-2 py-1.5 text-sm text-secondary transition-colors hover:text-accent">
                      <span aria-hidden className="text-accent">
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <p className="text-sm leading-relaxed text-muted">
                  Lieber nicht selbst einrichten? Wir führen Sie Schritt für Schritt durch alle Einstellungen.
                </p>
                <Button href={WHATSAPP_DEFAULT_LINK} external variant="whatsapp" className="w-full">
                  <WhatsAppIcon className="h-5 w-5" />
                  Einrichtungshilfe anfragen
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* 8 · Provider selection */}
      <section className="py-16 sm:py-24" aria-labelledby="provider-heading">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            id="provider-heading"
            eyebrow="Orientierung"
            title="Woran erkennt man einen seriösen IPTV Anbieter?"
            description="Bevor Sie einen IPTV-Anbieter wählen und Geld bezahlen, lohnt ein kritischer Blick. Diese sieben Kriterien helfen bei der Einschätzung."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {providerCriteria.map((criterion) => (
              <li
                key={criterion.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-lg shadow-black/20 transition-colors duration-300 hover:border-border-strong"
              >
                <div className="p-2 pb-0">
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10"
                    style={{ backgroundColor: criterion.imageBg }}
                  >
                    <Image
                      src={criterion.image}
                      alt={criterion.imageAlt}
                      placeholder="blur"
                      fill
                      sizes="240px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <CheckIcon className="mt-0 h-5 w-5 text-accent" />
                  <h3 className="text-base font-semibold text-foreground">{criterion.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{criterion.text}</p>
                </div>
              </li>
            ))}
            <li className="flex flex-col gap-3 rounded-2xl border border-highlight/30 bg-highlight/5 p-6">
              <h3 className="text-base font-semibold text-highlight">Warnsignale</h3>
              <ul className="flex flex-col gap-2">
                {providerWarningSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-sm leading-relaxed text-secondary">
                    <span aria-hidden className="mt-0.5 font-bold text-highlight">
                      !
                    </span>
                    {sign}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <p className="text-center text-sm text-muted">
            Die ausführliche Checkliste lesen Sie im Ratgeber{" "}
            <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
              Seriöse IPTV-Anbieter erkennen
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* 9 · Internet speed */}
      <SpeedSection />

      {/* 10 · Legality */}
      <LegalitySection />

      {/* 11 · FAQ – no FAQPage JSON-LD here: /faq already carries it, and Google limits FAQ rich results to authoritative sites. */}
      <section className="border-t border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="faq-heading">
        <Container className="flex flex-col items-center gap-10">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Häufig gestellte Fragen zu IPTV" />
          <div className="w-full max-w-3xl">
            <FaqList items={homeFaq} />
          </div>
          <Button href="/faq" variant="secondary">
            Alle Fragen ansehen
          </Button>
        </Container>
      </section>

      {/* 12 · Final CTA */}
      <CtaBanner
        title="Bereit für IPTV auf Ihren Geräten?"
        description="Sehen Sie sich unsere Pakete an oder schreiben Sie uns direkt. Wir sagen Ihnen ehrlich, was mit Ihren Geräten möglich ist, und begleiten Sie Schritt für Schritt bis zum ersten Sender."
      />
    </>
  );
}
