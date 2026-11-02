import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  ANLEITUNGEN_SEO,
  ANLEITUNGEN_UPDATED,
  accessTypes,
  anleitungenFaq,
  appOverview,
  basicsParagraphs,
  configErrors,
  deviceComparison,
  deviceOrder,
  deviceTags,
  diagnosisSteps,
  epgParagraphs,
  epgProblems,
  glossary,
  heroPoints,
  inputMistakes,
  iptvTypes,
  networkTips,
  playerSettings,
  qualityTips,
  quickStart,
  requirements,
  securityPoints,
  setupSteps,
  signalFlow,
  tocItems,
  topicClusters,
  type QuickStartIcon,
} from "@/lib/anleitungen-content";
import { devices } from "@/lib/devices";
import { guides } from "@/lib/guides";
import { homeDevices, speedTiers } from "@/lib/home-content";
import { LOWEST_PRICE, formatPrice } from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";
import { WHATSAPP_DEFAULT_LINK, buildWhatsAppLink } from "@/lib/whatsapp";
import mobileImage from "@/public/images/home page/Anleitungen/iptv-unterwegs-smartphone-livestream-zug.webp";
import kodiEpgImage from "@/public/images/home page/Anleitungen/kodi-pvr-iptv-simple-client-epg.webp";
import magPortalImage from "@/public/images/home page/Anleitungen/mag-box-portal-url-einrichten.webp";
import xtreamLoginImage from "@/public/images/home page/Anleitungen/xtream-codes-login-iptv-player.webp";
import privacyImage from "@/public/images/home page/Woran erkennt man einen seriosen IPTV Anbieter/Woran erkennt man einen seriösen IPTV Anbieter 6.webp";

/*
 * /anleitungen – the central IPTV setup hub. Copy lives in lib/anleitungen-content.ts.
 * Keyword focus: "IPTV einrichten" (informational). Purchase intent is routed to /angebote,
 * never targeted here, so the hub doesn't compete with the homepage or /angebote.
 * id="geraete" must stay: /geraete (301) and several pages link to /anleitungen#geraete.
 */

const PATH = "/anleitungen";

export const metadata: Metadata = pageMetadata({
  title: ANLEITUNGEN_SEO.title,
  description: ANLEITUNGEN_SEO.description,
  path: PATH,
});

const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";
const SETUP_HELP_LINK = buildWhatsAppLink(
  "Hallo IPTV Kaufen Direkt Team,\nich brauche Hilfe bei der IPTV-Einrichtung. Mein Gerät: "
);

/** Device guide cards: text from lib/devices.ts, product photo reused from the homepage device section. */
const deviceCards = deviceOrder.flatMap((slug) => {
  const device = devices.find((item) => item.slug === slug);
  const photo = homeDevices.find((item) => item.href === `/geraete/${slug}`);
  return device && photo ? [{ ...device, image: photo.image, imageAlt: photo.imageAlt, tags: deviceTags[slug] ?? [] }] : [];
});

const maxSpeed = Math.max(...speedTiers.map((tier) => tier.maxMbit));

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
}

/* ------------------------------------------------------------------ helpers */

function HubSection({
  id,
  eyebrow,
  title,
  intro,
  tinted = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  tinted?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 py-16 sm:py-20 ${tinted ? "border-y border-border bg-background-elevated/40" : ""}`}
    >
      <Container className="flex flex-col gap-10">
        <header className="flex max-w-3xl flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">{eyebrow}</span>
          <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          {intro ? <div className="flex flex-col gap-4 text-base leading-relaxed text-secondary sm:text-lg">{intro}</div> : null}
        </header>
        {children}
      </Container>
    </section>
  );
}

/** Slim, in-content call to action that routes purchase intent to /angebote. */
function OfferCta({ title, text, label }: { title: string; text: string; label: string }) {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-6 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_0%,rgba(34,211,238,0.14),transparent_70%),radial-gradient(ellipse_40%_60%_at_100%_100%,rgba(167,139,250,0.10),transparent_70%)]"
      />
      <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex max-w-2xl flex-col gap-2">
          <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{title}</p>
          <p className="text-sm leading-relaxed text-secondary sm:text-base">{text}</p>
        </div>
        <Button href="/angebote" className="w-full shrink-0 whitespace-nowrap md:w-auto">
          {label}
          <span aria-hidden>→</span>
        </Button>
      </div>
    </aside>
  );
}

function DataTable({ id, headers, rows, caption, minWidth = "min-w-[640px]" }: {
  id: string;
  headers: string[];
  rows: string[][];
  caption?: string;
  minWidth?: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="w-full overflow-x-auto rounded-2xl border border-border">
        <table aria-labelledby={id} className={`w-full ${minWidth} border-collapse text-left text-sm`}>
          <thead>
            <tr className="bg-surface">
              {headers.map((header) => (
                <th key={header} scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([first, ...rest]) => (
              <tr key={first} className="align-top odd:bg-background even:bg-background-elevated">
                <th scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">
                  {first}
                </th>
                {rest.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border-b border-border px-4 py-3 leading-relaxed text-secondary">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? <figcaption className="text-xs leading-relaxed text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

const quickIcons: Record<QuickStartIcon, ReactNode> = {
  device: <DeviceIcon icon="tv" className="h-5 w-5" />,
  app: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14v7M14 17.5h7" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M2 8.5a15 15 0 0120 0M5 12a10.5 10.5 0 0114 0M8.5 15.5a5.5 5.5 0 017 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  ),
};

/* --------------------------------------------------------------------- page */

export default function GuidesPage() {
  const pageUrl = absoluteUrl(PATH);
  const hubItems = [
    ...guides.map((guide) => ({ name: guide.title, url: absoluteUrl(`/anleitungen/${guide.slug}`) })),
    ...deviceCards.map((device) => ({ name: device.title, url: absoluteUrl(`/geraete/${device.slug}`) })),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: ANLEITUNGEN_SEO.h1,
          description: ANLEITUNGEN_SEO.description,
          inLanguage: SITE.language,
          dateModified: ANLEITUNGEN_UPDATED,
          isPartOf: { "@id": `${SITE.url}/#website` },
          publisher: { "@id": `${SITE.url}/#organization` },
          about: { "@type": "Thing", name: "IPTV-Einrichtung" },
          mainEntity: {
            "@type": "ItemList",
            name: "IPTV-Anleitungen und Ratgeber",
            numberOfItems: hubItems.length,
            itemListElement: hubItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              url: item.url,
            })),
          },
        }}
      />
      <JsonLd data={faqJsonLd(anleitungenFaq)} />

      <Breadcrumbs items={[{ label: "Anleitungen", href: PATH }]} />

      {/* ------------------------------------------------------------ Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-grid absolute inset-0" />
        <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:py-20">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              IPTV-Wissen · Einrichtung · Fehlerhilfe
            </span>
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              IPTV einrichten – <span className="text-gradient">Grundlagen, Anleitungen und Konfiguration</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Ob Fire TV Stick, Smart TV, MAG-Box oder Enigma2-Receiver: Hier erfahren Sie, wie IPTV technisch
              funktioniert, welche Zugangsdaten Sie wo eintragen und wie Sie typische Probleme selbst lösen –
              verständlich für Einsteiger und mit genug Tiefe für Fortgeschrittene.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#ablauf">Zur Schritt-für-Schritt-Anleitung</Button>
              <Button href="/angebote" variant="secondary">
                IPTV-Angebote entdecken
              </Button>
            </div>
            <ul className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-secondary">
                  <CheckIcon className="mt-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={ANLEITUNGEN_UPDATED}>{formatDate(ANLEITUNGEN_UPDATED)}</time>
            </p>
          </div>

          <nav
            aria-labelledby="toc-heading"
            className="rounded-3xl border border-border-strong bg-background-elevated/90 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-7"
          >
            <h2 id="toc-heading" className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
              Inhalt dieser Seite
            </h2>
            <ol className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {tocItems.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 rounded-xl px-2 py-2 text-sm text-secondary transition-colors hover:bg-surface hover:text-accent"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-strong text-[0.7rem] font-bold text-muted group-hover:border-accent/60 group-hover:text-accent">
                      {index + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </section>

      {/* ------------------------------------------------------ Quick start */}
      <section aria-labelledby="quickstart-heading" className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Kurz erklärt</span>
            <h2 id="quickstart-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
              Diese vier Dinge brauchen Sie für die IPTV-Einrichtung
            </h2>
            <p className="text-base leading-relaxed text-secondary sm:text-lg">
              Jede IPTV-Installation folgt demselben Prinzip – egal auf welchem Gerät. Wenn diese vier Bausteine
              stimmen, ist der Rest meist Routine.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickStart.map((item, index) => (
              <li
                key={item.title}
                className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-background-elevated p-6"
              >
                <span aria-hidden className="absolute right-4 top-3 text-5xl font-extrabold text-white/[0.04]">
                  {index + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {quickIcons[item.icon]}
                </span>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
          <OfferCta
            title="Lieber mit persönlicher Begleitung starten?"
            text={`Unsere Angebote kombinieren Einrichtungshilfe und Support für 1, 2 oder 3 Geräte – ab ${formatPrice(
              LOWEST_PRICE
            )} Gesamtpreis. Wir führen Sie per WhatsApp, Telegram oder E-Mail bis zum ersten laufenden Sender.`}
            label="IPTV-Angebote entdecken"
          />
        </Container>
      </section>

      {/* ------------------------------------------------------- Grundlagen */}
      <HubSection
        id="grundlagen"
        eyebrow="IPTV-Grundlagen"
        title="Was ist IPTV und wie funktioniert es?"
        tinted
        intro={basicsParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Der Weg vom Sender auf Ihren Bildschirm</h3>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {signalFlow.map((step, index) => (
              <li key={step.title} className="relative flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-ink">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground">{step.title}</span>
                </span>
                <p className="text-sm leading-relaxed text-muted">{step.text}</p>
                {index < signalFlow.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-background text-xs text-accent lg:flex"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="text-sm leading-relaxed text-muted">
            Praktisch: Fast jedes Problem lässt sich einer dieser vier Stationen zuordnen. Ruckelt nur ein Sender, liegt
            die Ursache meist bei Station 1 oder 2. Ruckelt alles, eher bei Station 3 oder 4.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Zwei Arten von IPTV</h3>
            <div className="grid gap-4">
              {iptvTypes.map((type) => (
                <div key={type.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6">
                  <span className="w-fit rounded-full border border-highlight/40 bg-highlight/10 px-2.5 py-0.5 text-xs font-semibold text-highlight">
                    {type.label}
                  </span>
                  <p className="font-semibold text-foreground">{type.title}</p>
                  <p className="text-sm leading-relaxed text-muted">{type.text}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative isolate">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),transparent_70%)] blur-2xl"
            />
            <div className="overflow-hidden rounded-3xl border border-border-strong bg-background-elevated shadow-2xl shadow-black/40">
              <Image
                src={mobileImage}
                alt="Mann im Regionalzug verfolgt auf dem Smartphone die Tagesschau als Livestream in einer IPTV-App – IPTV über das offene Internet funktioniert auch unterwegs"
                placeholder="blur"
                sizes="(min-width: 1152px) 500px, (min-width: 1024px) 44vw, calc(100vw - 2rem)"
                className="h-auto w-full"
              />
            </div>
          </figure>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Begriffe, die Ihnen bei der Einrichtung begegnen</h3>
          <dl className="grid gap-x-8 gap-y-5 rounded-2xl border border-border bg-background-elevated p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {glossary.map((entry) => (
              <div key={entry.term} className="flex flex-col gap-1">
                <dt className="text-sm font-semibold text-accent">{entry.term}</dt>
                <dd className="text-sm leading-relaxed text-muted">{entry.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </HubSection>

      {/* -------------------------------------------------- Voraussetzungen */}
      <HubSection
        id="voraussetzungen"
        eyebrow="Vorbereitung"
        title="Voraussetzungen: Was Sie vor der IPTV-Einrichtung prüfen sollten"
        intro={
          <p>
            Die meisten Einrichtungsprobleme entstehen, bevor die erste App geöffnet ist. Mit dieser Checkliste schaffen
            Sie in wenigen Minuten die Grundlage für eine reibungslose IPTV-Installation.
          </p>
        }
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckIcon className="mt-0" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div id="internet" className="grid scroll-mt-20 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Internetverbindung und Heimnetz
            </h3>
            <p className="text-base leading-relaxed text-secondary">
              Wie viel Bandbreite Sie brauchen, hängt von der Bildqualität und der Zahl gleichzeitiger Streams ab. Die
              Werte addieren sich: Zwei Fernseher in Full HD benötigen etwa doppelt so viel wie einer.
            </p>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
              {speedTiers.map((tier) => (
                <div key={tier.label} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-semibold text-foreground">
                      {tier.label} <span className="font-normal text-muted">({tier.resolution})</span>
                    </span>
                    <span className="shrink-0 font-semibold text-accent">{tier.perStream}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface" aria-hidden>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                      style={{ width: `${(tier.maxMbit / maxSpeed) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="pt-1 text-xs leading-relaxed text-muted">
                Richtwerte pro Stream. Rechenbeispiele und empfohlene Anschlüsse finden Sie im Ratgeber{" "}
                <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
                  Welche Internetgeschwindigkeit braucht IPTV?
                </Link>
              </p>
            </div>
          </div>
          <ul className="grid gap-4">
            {networkTips.map((tip, index) => (
              <li key={tip.title} className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-foreground">{tip.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{tip.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </HubSection>

      {/* -------------------------------------------------------------- Apps */}
      <HubSection
        id="apps"
        eyebrow="Apps & Geräte"
        title="IPTV-Apps und kompatible Geräte"
        tinted
        intro={
          <p>
            Welche App die richtige ist, hängt von zwei Fragen ab: Auf welchem Gerät schauen Sie, und in welcher Form
            liefert Ihr Anbieter die Zugangsdaten? Bietet der Dienst eine eigene App an, ist sie fast immer die
            einfachste Lösung. Für M3U und Xtream Codes brauchen Sie einen IPTV-Player.
          </p>
        }
      >
        <div className="flex flex-col gap-4">
          <h3 id="apps-table-heading" className="text-xl font-semibold tracking-tight text-foreground">
            Verbreitete IPTV-Apps im Überblick
          </h3>
          <DataTable id="apps-table-heading" headers={appOverview.headers} rows={appOverview.rows} caption={appOverview.caption} minWidth="min-w-[760px]" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 id="compare-heading" className="text-xl font-semibold tracking-tight text-foreground">
            Die Geräte im Vergleich
          </h3>
          <DataTable id="compare-heading" headers={["Gerät", "Stärke", "Zu beachten"]} rows={deviceComparison} minWidth="min-w-[520px]" />
        </div>
      </HubSection>

      {/* ------------------------------------------------------ Zugangsarten */}
      <HubSection
        id="zugangsarten"
        eyebrow="Zugangsdaten verstehen"
        title="M3U, Xtream Codes und Portal-URL: die drei Zugangsarten"
        intro={
          <p>
            Ihr Anbieter liefert die Verbindungsdaten in einer von drei Formen. Alle führen zur gleichen Senderliste,
            unterscheiden sich aber in Komfort und Gerätewahl. Die Beispiele zeigen, wie die Angaben typischerweise
            aussehen – Ihre echten Daten erhalten Sie von Ihrem Anbieter.
          </p>
        }
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {accessTypes.map((type) => (
            <article key={type.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">{type.tagline}</span>
                <h3 className="text-xl font-semibold text-foreground">{type.name}</h3>
              </div>
              <dl className="flex flex-col gap-2 rounded-xl border border-border bg-background p-4">
                {type.fields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-0.5">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted">{field.label}</dt>
                    <dd className="break-all font-mono text-xs leading-relaxed text-accent-soft">{field.example}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm leading-relaxed text-secondary">{type.text}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4 text-sm leading-relaxed">
                <li className="flex gap-2 text-secondary">
                  <span aria-hidden className="font-bold text-accent">+</span>
                  <span>
                    <span className="sr-only">Vorteil: </span>
                    {type.pro}
                  </span>
                </li>
                <li className="flex gap-2 text-muted">
                  <span aria-hidden className="font-bold text-highlight">!</span>
                  <span>
                    <span className="sr-only">Zu beachten: </span>
                    {type.con}
                  </span>
                </li>
              </ul>
            </article>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              src: xtreamLoginImage,
              // White graphic: shown uncropped on a matching white background.
              contain: true,
              alt: "Anmeldemaske von IPTV Smarters auf einem Fernseher mit den Feldern Beliebiger Name, Benutzername, Passwort sowie dem Feld für die Server-URL im Format http://url:port für Xtream Codes",
            },
            {
              src: magPortalImage,
              contain: false,
              alt: "MAG-524-Box vor einem Fernseher, auf dem die Eingabemaske für die Portal-URL eines Stalker-Portals mit den Schaltflächen Speichern und Abbrechen zu sehen ist",
            },
          ].map((image) => (
            <div
              key={image.alt}
              className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-strong shadow-xl shadow-black/30 ${
                image.contain ? "bg-white" : "bg-background-elevated"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                placeholder="blur"
                fill
                sizes="(min-width: 1152px) 532px, (min-width: 640px) 48vw, calc(100vw - 2rem)"
                className={image.contain ? "object-contain" : "object-cover"}
              />
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Alle drei Formate sind neutrale Technik. Entscheidend ist, dass Ihr Anbieter die Rechte an den Inhalten
          besitzt – mehr dazu unter{" "}
          <Link href="/iptv-legal" className={inlineLink}>
            IPTV legal in Deutschland
          </Link>
          . Beispiele, Vor- und Nachteile im Detail lesen Sie in{" "}
          <Link href="/anleitungen/m3u-playlist-xtream-codes" className={inlineLink}>
            M3U-Playlist und Xtream Codes erklärt
          </Link>
          .
        </p>
      </HubSection>

      {/* ------------------------------------------------------------ Ablauf */}
      <HubSection
        id="ablauf"
        eyebrow="Schritt für Schritt"
        title="IPTV einrichten: der Ablauf in sechs Schritten"
        tinted
        intro={
          <p>
            Menüs und Bezeichnungen unterscheiden sich von App zu App, der Ablauf bleibt aber gleich. So konfigurieren
            Sie IPTV auf praktisch jedem Gerät – für die genauen Menüpfade nutzen Sie anschließend die passende{" "}
            <a href="#geraete" className={inlineLink}>
              Anleitung für Ihr Gerät
            </a>
            .
          </p>
        }
      >
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <ol className="relative flex flex-col gap-8 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-border-strong">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background text-base font-bold text-accent">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1.5 pt-1.5">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside
            aria-labelledby="mistakes-heading"
            className="flex flex-col gap-4 self-start rounded-3xl border border-highlight/30 bg-highlight/5 p-6 sm:p-8"
          >
            <h3 id="mistakes-heading" className="text-lg font-semibold text-foreground">
              Die häufigsten Eingabefehler
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Meldet die App „ungültige Daten“, steckt fast immer eines dieser Details dahinter:
            </p>
            <ul className="flex flex-col gap-2.5">
              {inputMistakes.map((mistake) => (
                <li key={mistake} className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary">
                  <span aria-hidden className="mt-px font-bold text-highlight">
                    !
                  </span>
                  {mistake}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <OfferCta
          title="Die Einrichtung lieber gemeinsam erledigen?"
          text="Wir begleiten Sie Schritt für Schritt durch alle Einstellungen – vom ersten App-Download bis zur sortierten Senderliste mit Programmzeitschrift."
          label="Passendes IPTV-Angebot finden"
        />
      </HubSection>

      {/* ----------------------------------------------------- Einstellungen */}
      <HubSection
        id="einstellungen"
        eyebrow="Feinschliff"
        title="IPTV-Einstellungen richtig konfigurieren"
        intro={
          <p>
            Wenn die Sender grundsätzlich laufen, holen Sie mit den richtigen Einstellungen das Beste aus Bild, Ton und
            Bedienung heraus. Diese Optionen finden Sie in den meisten IPTV-Playern – meist unter „Wiedergabe“,
            „Player“ oder „Erweitert“.
          </p>
        }
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {playerSettings.map((setting) => (
            <li key={setting.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6">
              <h3 className="font-semibold text-foreground">{setting.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{setting.text}</p>
            </li>
          ))}
        </ul>
      </HubSection>

      {/* --------------------------------------------------------------- EPG */}
      <HubSection id="epg" eyebrow="Programmzeitschrift" title="IPTV-EPG einrichten und Probleme beheben" tinted>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-5">
            {epgParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-secondary">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-3 sm:p-4">
              <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  src={kodiEpgImage}
                  alt="Kodi mit PVR IPTV Simple Client unter Windows: geladene M3U-Senderliste mit ARD, ZDF und weiteren Sendern, aktuellen EPG-Einträgen und der Meldung „EPG erfolgreich aktualisiert“"
                  placeholder="blur"
                  sizes="(min-width: 1152px) 540px, (min-width: 1024px) 48vw, calc(100vw - 2rem)"
                  className="h-auto w-full"
                />
              </div>
              <p className="px-2 pb-1 text-sm leading-relaxed text-muted">
                Wo Sie die XMLTV-Adresse in TiviMate, Kodi, IPTV Smarters und auf Enigma2 eintragen, zeigt unsere{" "}
                <Link href="/anleitungen/epg-einrichten" className={inlineLink}>
                  Anleitung: EPG für IPTV einrichten
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-foreground">Typische EPG-Probleme</h3>
            <ul className="flex flex-col gap-3">
              {epgProblems.map((item) => (
                <li key={item.problem} className="rounded-2xl border border-border bg-background-elevated p-5">
                  <p className="font-semibold text-foreground">{item.problem}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.fix}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HubSection>

      {/* ----------------------------------------------------------- Geräte */}
      <HubSection
        id="geraete"
        eyebrow="Anleitungen nach Gerät"
        title="IPTV auf Fire TV, Smart TV, Android TV, MAG und Enigma2 einrichten"
        intro={
          <p>
            Jedes Gerät hat seine Eigenheiten: Der Fire TV Stick braucht manchmal eine App außerhalb des Appstores, die
            MAG-Box arbeitet mit einem Portal, der Enigma2-Receiver mit Bouquets. Unsere Geräte-Anleitungen führen Sie
            mit konkreten Menüpfaden durch die Einrichtung.
          </p>
        }
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deviceCards.map((device) => (
            <li key={device.slug}>
              <Link
                href={`/geraete/${device.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={device.image}
                    alt={device.imageAlt}
                    placeholder="blur"
                    fill
                    loading="lazy"
                    sizes="(min-width: 1152px) 352px, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, calc(100vw - 2rem)"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <DeviceIcon icon={device.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-accent">{device.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{device.excerpt}</p>
                  {device.tags.length > 0 ? (
                    <ul className="flex flex-wrap gap-1.5" aria-label="Auch für">
                      {device.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-border-strong px-2.5 py-0.5 text-xs text-secondary">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <span className="mt-auto pt-2 text-sm font-semibold text-accent">
                    Zur Anleitung <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
          <li className="flex flex-col justify-center gap-3 rounded-2xl border border-dashed border-highlight/40 bg-highlight/5 p-6">
            <p className="text-base font-semibold text-foreground">Ihr Gerät ist nicht dabei?</p>
            <p className="text-sm leading-relaxed text-secondary">
              Apple TV, Smartphone, PC oder ein ganz anderes Modell: Die Grundlagen auf dieser Seite gelten für alle
              Geräte. Für den Rest fragen Sie uns einfach.
            </p>
            <Link href="/kontakt" className="text-sm font-semibold text-accent hover:text-accent-soft">
              Frage stellen <span aria-hidden>→</span>
            </Link>
          </li>
        </ul>
        <OfferCta
          title="Mehrere Fernseher oder Receiver im Haushalt?"
          text="Unsere Angebote gelten für 1, 2 oder 3 Geräte – egal ob Smart TV, Fire TV Stick, MAG-Box oder Enigma2-Receiver. Wir unterstützen Sie bei der Einrichtung jedes einzelnen Geräts."
          label="Unsere IPTV-Angebote ansehen"
        />
      </HubSection>

      {/* ------------------------------------------------------------ Fehler */}
      <HubSection
        id="fehler"
        eyebrow="Fehlerhilfe"
        title="Häufige IPTV-Konfigurationsfehler und ihre Lösungen"
        tinted
        intro={
          <p>
            Die meisten Fehlermeldungen haben eine überschaubare Zahl an Ursachen. Diese Übersicht hilft Ihnen, das
            Symptom schnell der richtigen Lösung zuzuordnen.
          </p>
        }
      >
        <DataTable id="fehler-heading" headers={configErrors.headers} rows={configErrors.rows} caption={configErrors.caption} minWidth="min-w-[720px]" />
      </HubSection>

      {/* ------------------------------------------------------ Bildqualität */}
      <HubSection
        id="bildqualitaet"
        eyebrow="Ruckeln & Bildqualität"
        title="IPTV ruckelt, friert ein oder die Verbindung bricht ab"
        intro={
          <p>
            Ruckler und Standbilder gehören zu den häufigsten IPTV-Problemen – und lassen sich meist im eigenen Heimnetz
            beheben. Gehen Sie systematisch vor, statt wahllos Einstellungen zu ändern.
          </p>
        }
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {diagnosisSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">Schritt {index + 1}</span>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">IPTV-Bildqualität verbessern</h3>
            <ul className="flex flex-col gap-3">
              {qualityTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-secondary">
                  <CheckIcon className="text-accent" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted">
              Alle Ursachen und Lösungen ausführlich:{" "}
              <Link href="/anleitungen/iptv-ruckelt-loesungen" className={inlineLink}>
                IPTV ruckelt oder friert ein – Ursachen und Lösungen
              </Link>
            </p>
          </div>

          <aside
            aria-labelledby="support-heading"
            className="hero-glow flex flex-col gap-4 rounded-3xl border border-border-strong bg-surface p-6 sm:p-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">IPTV-Support</span>
            <h3 id="support-heading" className="text-xl font-bold tracking-tight text-foreground">
              Sie kommen nicht weiter?
            </h3>
            <p className="text-sm leading-relaxed text-secondary">
              Beschreiben Sie uns Gerät, App und Fehlermeldung. Wir helfen Ihnen persönlich auf Deutsch weiter – per
              WhatsApp, Telegram oder E-Mail. Mit einem unserer Angebote erhalten Sie während der gesamten Laufzeit
              Support.
            </p>
            <div className="mt-auto flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={SETUP_HELP_LINK} external variant="whatsapp" className="w-full whitespace-nowrap xl:w-auto">
                <WhatsAppIcon className="h-5 w-5" />
                Hilfe per WhatsApp
              </Button>
              <Button href="/angebote" variant="secondary" className="w-full whitespace-nowrap xl:w-auto">
                Jetzt Angebote vergleichen
              </Button>
            </div>
          </aside>
        </div>
      </HubSection>

      {/* -------------------------------------------------------- Sicherheit */}
      <HubSection
        id="sicherheit"
        eyebrow="Sicherheit & Datenschutz"
        title="IPTV sicher nutzen: Apps, Zugangsdaten und Geräte"
        tinted
        intro={
          <p>
            Mit ein paar Grundregeln schützen Sie Ihre Geräte, Ihre Daten und Ihr Geld. Und achten Sie bei der Wahl des
            Dienstes darauf, dass er die Rechte an den gezeigten Inhalten besitzt – woran Sie das erkennen, lesen Sie im
            Ratgeber{" "}
            <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
              Seriöse IPTV-Anbieter erkennen
            </Link>
            .
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="mx-auto flex w-full max-w-xs items-center justify-center overflow-hidden rounded-3xl bg-[#fcfcfc] p-6 ring-1 ring-white/10 lg:max-w-none">
            <Image
              src={privacyImage}
              alt="Schutzschild mit Schloss und Häkchen als Symbol für Sicherheit und Datenschutz bei der IPTV-Nutzung"
              placeholder="blur"
              loading="lazy"
              sizes="(min-width: 1024px) 340px, 320px"
              className="h-auto w-full max-w-[280px]"
            />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {securityPoints.map((point) => (
              <li key={point.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="font-semibold text-foreground">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </HubSection>

      {/* ------------------------------------------------------------ Themen */}
      <HubSection
        id="themen"
        eyebrow="Wissens-Hub"
        title="Alle Anleitungen und Ratgeber nach Thema"
        intro={
          <p>
            Hier finden Sie alle vertiefenden Anleitungen an einem Ort. Wir erweitern diese Sammlung regelmäßig um neue
            Ratgeber zu Einrichtung, Apps und Fehlerhilfe.
          </p>
        }
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicClusters.map((cluster) => (
            <li key={cluster.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
              <h3 className="text-lg font-semibold text-foreground">{cluster.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{cluster.text}</p>
              <ul className="mt-1 flex flex-col gap-1 border-t border-border pt-3">
                {cluster.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href.startsWith("#") ? `${PATH}${link.href}` : link.href}
                      className="flex items-start gap-2 py-1 text-sm text-secondary transition-colors hover:text-accent"
                    >
                      <span aria-hidden className="text-accent">
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </HubSection>

      {/* --------------------------------------------------------------- FAQ */}
      <HubSection id="faq" eyebrow="FAQ" title="Häufige Fragen zur IPTV-Einrichtung" tinted>
        <div className="mx-auto w-full max-w-3xl">
          <FaqList items={anleitungenFaq} />
        </div>
      </HubSection>

      {/* --------------------------------------------------------- Final CTA */}
      <section aria-labelledby="final-cta-heading" className="py-16 sm:py-20">
        <Container>
          <div className="hero-glow relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-7 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <h2 id="final-cta-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                  Bereit für die Einrichtung? Wir begleiten Sie gern.
                </h2>
                <p className="text-base leading-relaxed text-secondary">
                  Mit dem Wissen von dieser Seite gelingt die IPTV-Einrichtung oft schon allein. Wenn Sie lieber einen
                  festen Ansprechpartner möchten: Unsere Angebote umfassen persönliche Einrichtungshilfe und Support für
                  1, 2 oder 3 Geräte, mit Laufzeiten von 1 Monat bis 2 Jahren.
                </p>
                <p className="text-sm text-muted">
                  Mehr über IPTV in Deutschland erfahren Sie auf unserer{" "}
                  <Link href="/" className={inlineLink}>
                    Startseite
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/angebote" className="w-full">
                  Jetzt Angebote vergleichen
                  <span aria-hidden>→</span>
                </Button>
                <Button href={WHATSAPP_DEFAULT_LINK} external variant="secondary" className="w-full">
                  <WhatsAppIcon className="h-4 w-4" />
                  Frage per WhatsApp stellen
                </Button>
                <p className="text-center text-xs text-muted">ab {formatPrice(LOWEST_PRICE)} Gesamtpreis</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
