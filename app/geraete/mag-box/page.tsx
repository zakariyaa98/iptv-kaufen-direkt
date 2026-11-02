import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FormattedText } from "@/components/content/FormattedText";
import {
  DataTable,
  GuideSection,
  GuideToc,
  Illustration,
  Note,
  NumberedSteps,
  formatGuideDate,
  inlineLink,
} from "@/components/content/GuideBlocks";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { getDevice } from "@/lib/devices";
import { homeDevices } from "@/lib/home-content";
import {
  MAG_IMAGES,
  MAG_UPDATED,
  backupNote,
  basicsIntro,
  deviceComparison,
  errorAreas,
  errorTable,
  firmwareCards,
  firmwareNote,
  heroFacts,
  legalNote,
  macFacts,
  macVsUrl,
  magFaq,
  methodNote,
  methodTable,
  modelNotes,
  modelTable,
  networkCards,
  notActivatedSteps,
  principleCards,
  requirements,
  securityPoints,
  setupNote,
  setupSteps,
  sources,
  tocItems,
  typos,
} from "@/lib/mag-content";
import { DURATIONS, FEATURED_DURATION, PLAN_SCOPE_NOTE, PRICE_NOTE, deviceCategories, formatPrice } from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";
import { deviceWhatsAppLink } from "@/lib/whatsapp";

/*
 * /geraete/mag-box – dedicated MAG Box (Infomir) guide.
 * Static route; app/geraete/[slug] skips this slug. Title, meta and dates come from the
 * "mag-box" entry in lib/devices.ts (hub cards + sitemap); body copy lives in lib/mag-content.ts.
 */

const PATH = "/geraete/mag-box";
const device = getDevice("mag-box")!;
const OG_IMAGE = {
  url: `${PATH}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "IPTV auf MAG Box einrichten – Portal, MAC-Adresse und Fehlerhilfe",
};

export const metadata: Metadata = pageMetadata({
  title: device.seoTitle,
  description: device.metaDescription,
  path: PATH,
  type: "article",
  publishedTime: device.publishedAt,
  modifiedTime: MAG_UPDATED,
  image: OG_IMAGE,
});

/** Single-device prices for every duration, straight from lib/plans.ts. */
const singleDevice = deviceCategories.find((category) => category.devices === 1)!;
const otherCategories = deviceCategories.filter((category) => category.devices !== 1);

const otherDevices = [
  { href: "/geraete/smart-tv", linkLabel: "Smart-TV-Anleitung lesen", text: "IPTV per App direkt auf Samsung, LG und anderen Fernsehern." },
  { href: "/geraete/fire-tv-stick", linkLabel: "Zum Fire-TV-Ratgeber", text: "Günstiger Stick mit IPTV-Playern für M3U und Xtream Codes." },
  { href: "/geraete/android-tv-box", linkLabel: "Android TV einrichten", text: "Die größte Auswahl an IPTV-Playern über den Google Play Store." },
  { href: "/geraete/enigma2-receiver", linkLabel: "Enigma2-Anleitung", text: "IPTV als Bouquet neben Satellit und Kabel in einer Senderliste." },
].map((item) => {
  const photo = homeDevices.find((entry) => entry.href === item.href);
  const entry = getDevice(item.href.replace("/geraete/", ""));
  return { ...item, name: entry?.shortName ?? photo?.name ?? item.linkLabel, photo, icon: entry?.icon ?? "tv" };
});

function CardGrid({ items, columns = "sm:grid-cols-2 lg:grid-cols-3" }: { items: { title: string; text: string }[]; columns?: string }) {
  return (
    <ul className={`grid gap-4 ${columns}`}>
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
          <p className="font-semibold text-foreground">{item.title}</p>
          <p className="text-sm leading-relaxed text-muted">
            <FormattedText text={item.text} />
          </p>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items, tone = "accent" }: { items: string[]; tone?: "accent" | "warn" }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-secondary sm:text-base">
          {tone === "accent" ? (
            <CheckIcon className="mt-1 shrink-0 text-accent" />
          ) : (
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MagBoxGuidePage() {
  const pageUrl = absoluteUrl(PATH);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: device.title,
          description: device.metaDescription,
          inLanguage: SITE.language,
          datePublished: device.publishedAt,
          dateModified: MAG_UPDATED,
          image: [absoluteUrl(OG_IMAGE.url)],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          about: [
            { "@type": "Thing", name: "IPTV" },
            { "@type": "Thing", name: "MAG Box" },
          ],
        }}
      />
      <JsonLd data={faqJsonLd(magFaq)} />

      <Breadcrumbs
        items={[
          { label: "Anleitungen", href: "/anleitungen" },
          { label: device.shortName, href: PATH },
        ]}
      />

      {/* ------------------------------------------------------------ Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-grid absolute inset-0" />
        <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="flex min-w-0 flex-col gap-6">
            <span className="w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              Geräte-Anleitung · MAG Box von Infomir
            </span>
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              IPTV auf MAG Box einrichten: <span className="text-gradient">Portal, MAC-Adresse und Senderliste</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Eine MAG Box braucht keine App – sie verbindet sich über eine Portal-Adresse und ihre MAC-Adresse mit Ihrem
              Anbieter. Hier lesen Sie, wie das Portal-Prinzip funktioniert, wie Sie die Box in sieben Schritten
              einrichten und was bei Fehlern wie „Authentifizierung fehlgeschlagen“ hilft.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#einrichtung">Zur Schritt-für-Schritt-Anleitung</Button>
              <Button href="#fehler" variant="secondary">
                MAG Box Fehler beheben
              </Button>
            </div>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={MAG_UPDATED}>{formatGuideDate(MAG_UPDATED)}</time> ·{" "}
              {device.readingTimeMinutes} Min. Lesezeit
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <div className="overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40">
              <Image
                src={MAG_IMAGES.hero.src}
                alt={MAG_IMAGES.hero.alt}
                width={MAG_IMAGES.hero.width}
                height={MAG_IMAGES.hero.height}
                preload
                className="h-auto w-full"
              />
            </div>
            <dl className="grid gap-3 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 rounded-2xl border border-emerald-400/30 bg-background-elevated/90 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">{fact.label}</dt>
                  <dd className="text-sm font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Intro + TOC */}
      <section aria-labelledby="kurz-heading" className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <h2 id="kurz-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              MAG Box IPTV in drei Sätzen
            </h2>
            <ol className="flex flex-col gap-3">
              {[
                "Sie geben Ihrem Anbieter die MAC-Adresse Ihrer Box.",
                "Der Anbieter schaltet die Box frei und nennt Ihnen die Portal-URL.",
                "Sie tragen die URL im Portal-Menü ein, starten neu – und das Portal lädt Ihre Senderliste.",
              ].map((text, index) => (
                <li key={text} className="flex items-start gap-4 rounded-2xl border border-border bg-background-elevated p-4 sm:p-5">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-bold text-emerald-300"
                  >
                    {index + 1}
                  </span>
                  <span className="text-base leading-relaxed text-secondary">{text}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm leading-relaxed text-muted">
              Grundlagen, die für alle Geräte gelten, finden Sie in unseren{" "}
              <Link href="/anleitungen" className={inlineLink}>
                IPTV-Anleitungen
              </Link>
              .
            </p>
          </div>
          <GuideToc title="Inhalt dieser Anleitung" items={tocItems} />
        </Container>
      </section>

      {/* -------------------------------------------------------- Grundlagen */}
      <GuideSection
        id="grundlagen"
        eyebrow="Grundlagen"
        title="Was ist eine MAG Box und wie funktioniert das Portal?"
        tinted
        intro={basicsIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <Illustration image={MAG_IMAGES.principle} />
        <CardGrid items={principleCards} />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Unterschied zu Android TV Box, Fire TV Stick und Smart TV
          </h3>
          <DataTable label="MAG Box im Vergleich zu Android TV, Fire TV und Smart TV" {...deviceComparison} />
        </div>
        <Note label="Modellabhängig">
          Diese Anleitung beschreibt das klassische Portal-Menü der Linux-basierten MAG-Modelle. Einige neuere
          Infomir-Geräte nutzen ein anderes Betriebssystem; dort können Menüs und Einrichtung anders aussehen.
        </Note>
      </GuideSection>

      {/* --------------------------------------------------- Voraussetzungen */}
      <GuideSection
        id="voraussetzungen"
        eyebrow="Vorbereitung"
        title="Voraussetzungen: Was Sie vor der Einrichtung brauchen"
        intro={<p>Mit diesen sechs Punkten ist die eigentliche Einrichtung in wenigen Minuten erledigt.</p>}
      >
        <CardGrid items={requirements} />
        <Note label="Vorher notieren">{backupNote}</Note>
      </GuideSection>

      {/* -------------------------------------------------------- Einrichtung */}
      <GuideSection
        id="einrichtung"
        eyebrow="Schritt für Schritt"
        title="MAG Box einrichten: in 7 Schritten zum IPTV-Portal"
        tinted
        intro={
          <p>
            So installieren Sie IPTV auf der MAG Box: Die Reihenfolge ist wichtig, denn ohne freigeschaltete MAC-Adresse
            lädt auch eine korrekt eingetragene Portal-URL nicht.
          </p>
        }
      >
        <Illustration image={MAG_IMAGES.steps} />
        <ol className="relative flex flex-col gap-4 before:absolute before:bottom-6 before:left-[1.4rem] before:top-6 before:w-px before:bg-border-strong sm:gap-5">
          {setupSteps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 sm:gap-5">
              <span
                aria-hidden
                className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-emerald-400/70 bg-background text-base font-extrabold text-emerald-300"
              >
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  <span className="sr-only">Schritt {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Note label="Menüwege">{setupNote}</Note>
      </GuideSection>

      {/* ---------------------------------------------------------- Angebote */}
      <section id="angebote" aria-labelledby="angebote-heading" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-emerald-400/30 bg-surface p-5 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_100%_0%,rgba(52,211,153,0.14),transparent_70%),radial-gradient(ellipse_45%_60%_at_0%_100%,rgba(34,211,238,0.12),transparent_70%)]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="flex min-w-0 flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Einrichtungshilfe</span>
                <h2 id="angebote-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                  Passendes IPTV-Angebot ansehen
                </h2>
                <p className="text-base leading-relaxed text-secondary">
                  Portal eintragen, MAC-Adresse prüfen, Fehler eingrenzen: Wir begleiten Sie per WhatsApp, Telegram oder
                  E-Mail Schritt für Schritt bei der Einrichtung Ihrer MAG Box.
                </p>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-400/5 p-4">
                  <p className="text-sm font-semibold text-foreground">Im Paket enthalten</p>
                  <CheckList items={["Einrichtungshilfe", "Support per Chat und E-Mail", "Schritt-für-Schritt-Anleitungen"]} />
                </div>
                <div className="flex flex-col gap-2 rounded-2xl border border-amber-400/40 bg-amber-400/5 p-4">
                  <p className="text-sm font-semibold text-foreground">Nicht enthalten</p>
                  <CheckList tone="warn" items={["TV-Sender und Inhalte", "Abonnements", "Portal- oder Zugangsdaten"]} />
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-3">
              <p className="text-sm font-semibold text-secondary">{singleDevice.label} – Gesamtpreis je Laufzeit:</p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {DURATIONS.map((duration) => {
                  const featured = duration.id === FEATURED_DURATION;
                  return (
                    <li
                      key={duration.id}
                      className={`flex flex-col gap-1 rounded-2xl border p-4 text-center ${
                        featured ? "border-emerald-400/60 bg-emerald-400/10" : "border-border-strong bg-background-elevated/80"
                      }`}
                    >
                      <span className="text-sm font-semibold text-secondary">{duration.label}</span>
                      <span className="text-2xl font-extrabold text-foreground">{formatPrice(singleDevice.prices[duration.id])}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="text-xs leading-relaxed text-muted">
                Pakete gibt es auch für{" "}
                {otherCategories
                  .map((category) => `${category.label} (ab ${formatPrice(Math.min(...Object.values(category.prices)))})`)
                  .join(" und ")}
                .
              </p>
            </div>
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
              <p className="max-w-2xl text-xs leading-relaxed text-muted">
                {PRICE_NOTE} {PLAN_SCOPE_NOTE}
              </p>
              <Button href="/angebote" className="w-full shrink-0 whitespace-nowrap md:w-auto">
                Alle Laufzeiten und Preise ansehen
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Portal & MAC */}
      <GuideSection
        id="portal-mac"
        eyebrow="Portal & MAC"
        title="MAG Portal und MAC-Adresse erklärt"
        tinted
        intro={
          <p>
            Fast alle Probleme bei der ersten Einrichtung drehen sich um zwei Angaben: die MAC-Adresse Ihrer Box und die
            Portal-URL Ihres Anbieters. Wer beide versteht, findet Fehler in Minuten.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Illustration image={MAG_IMAGES.mac} className="min-w-0" />
          <div className="min-w-0">
            <CardGrid items={macFacts} columns="sm:grid-cols-2" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">MAC-Adresse und Portal-URL: der Unterschied</h3>
          <DataTable label="Unterschied zwischen MAC-Adresse und Portal-URL" {...macVsUrl} />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-amber-400/40 bg-amber-400/5 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">Typische Tippfehler</h3>
            <CheckList tone="warn" items={typos} />
          </div>
          <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">MAC-Adresse nicht freigeschaltet – was tun?</h3>
            <NumberedSteps steps={notActivatedSteps} />
          </div>
        </div>
        <Note label="Datenschutz">
          Ihre MAC-Adresse und Portal-URL sind Zugangsdaten. Teilen Sie sie nur direkt mit Ihrem Anbieter – nie öffentlich.
          Auch wir fragen sie nur ab, wenn Sie uns ausdrücklich um Hilfe bei der Einrichtung bitten.
        </Note>
      </GuideSection>

      {/* ------------------------------------------------------------ Modelle */}
      <GuideSection
        id="modelle"
        eyebrow="Modelle"
        title="MAG 254, MAG 322, MAG 420 und MAG 520 im Vergleich"
        intro={
          <p>
            Viele Haushalte nutzen noch ältere MAG-Boxen. Die Tabelle zeigt ausschließlich Angaben aus den offiziellen
            Produktseiten von Infomir. Welche Firmware-Version auf Ihrer Box läuft, sehen Sie in den Geräteinformationen.
          </p>
        }
      >
        <DataTable label="MAG-Modelle im Vergleich" {...modelTable} />
        <CardGrid items={modelNotes} columns="sm:grid-cols-2 lg:grid-cols-4" />
      </GuideSection>

      {/* ----------------------------------------------------------- Verfahren */}
      <GuideSection
        id="verfahren"
        eyebrow="Zugangsarten"
        title="MAG Portal, M3U oder Xtream Codes: Was ist der Unterschied?"
        tinted
        intro={
          <p>
            Im Netz liest man oft alle drei Begriffe durcheinander. Für Ihre MAG Box ist wichtig: Sie arbeitet mit dem
            Portal-Verfahren, Player-Apps auf anderen Geräten meist mit M3U oder Xtream Codes.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Illustration image={MAG_IMAGES.methods} className="min-w-0" />
          <div className="flex min-w-0 flex-col gap-5">
            <DataTable label="MAG-Portal, M3U und Xtream Codes im Vergleich" {...methodTable} />
            <Note label="Nicht austauschbar">{methodNote}</Note>
            <p className="text-sm leading-relaxed text-muted">
              Wie M3U-Playlists und Xtream Codes im Detail funktionieren, erklärt der Ratgeber{" "}
              <Link href="/anleitungen/m3u-playlist-xtream-codes" className={inlineLink}>
                M3U, Xtream Codes und Portal im Vergleich
              </Link>
              .
            </p>
          </div>
        </div>
      </GuideSection>

      {/* ------------------------------------------------------------ Netzwerk */}
      <GuideSection
        id="netzwerk"
        eyebrow="Netzwerk"
        title="Netzwerk und Streaming: stabiles Bild an der MAG Box"
        intro={
          <p>
            Die MAG Box kann nur so gut streamen, wie das Netz es zulässt. Die meisten Ruckler und langen Umschaltzeiten
            haben ihre Ursache zwischen Router und Box.
          </p>
        }
      >
        <CardGrid items={networkCards} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <p className="text-sm leading-relaxed text-muted">
          Wie viel Bandbreite Ihr Haushalt braucht, zeigt der Ratgeber{" "}
          <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
            Internetgeschwindigkeit für IPTV
          </Link>
          . Bei Bildaussetzern hilft zusätzlich{" "}
          <Link href="/anleitungen/iptv-ruckelt-loesungen" className={inlineLink}>
            IPTV ruckelt: Ursachen und Lösungen
          </Link>
          .
        </p>
      </GuideSection>

      {/* ------------------------------------------------------------ Fehler */}
      <GuideSection
        id="fehler"
        eyebrow="Fehlerhilfe"
        title="MAG Box Fehler: Problem, Ursache, Lösung"
        tinted
        intro={
          <p>
            Prüfen Sie zuerst, ob alles oder nur ein Teil betroffen ist. Läuft kein einziger Sender, liegt die Ursache
            meist bei Netzwerk, Portal oder Freischaltung. Fällt nur ein Kanal aus, ist es fast immer eine einzelne
            Senderstörung.
          </p>
        }
      >
        <Illustration image={MAG_IMAGES.troubleshooting} />
        <ul className="flex flex-wrap gap-2" aria-label="Fehlerbereiche">
          {errorAreas.map((area) => (
            <li key={area.label} className="rounded-full border border-border-strong bg-background-elevated px-3 py-1.5 text-xs text-secondary">
              <span className="font-semibold text-foreground">{area.label}:</span> {area.text}
            </li>
          ))}
        </ul>
        {/* Mobile: one card per problem instead of a four-column table that would need horizontal scrolling. */}
        <ul className="flex flex-col gap-3 md:hidden" aria-label="MAG Box Fehler mit Bereich, Ursache und Lösung">
          {errorTable.rows.map(([problem, area, cause, solution]) => (
            <li key={problem} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-foreground">{problem}</p>
                <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-xs text-secondary">{area}</span>
              </div>
              <dl className="flex flex-col gap-2 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-300">Mögliche Ursache</dt>
                  <dd className="text-muted">{cause}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Lösung</dt>
                  <dd className="text-secondary">{solution}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <DataTable label="MAG Box Fehler mit Bereich, Ursache und Lösung" {...errorTable} />
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Fehlende Programmdaten? Der Ratgeber{" "}
          <Link href="/anleitungen/epg-einrichten" className={inlineLink}>
            EPG für IPTV einrichten
          </Link>{" "}
          erklärt, woher der Programmführer kommt. Für Ihre konkrete Box erreichen Sie uns über die{" "}
          <Link href="/kontakt" className={inlineLink}>
            Kontaktseite
          </Link>
          .
        </p>
      </GuideSection>

      {/* ----------------------------------------------------------- Firmware */}
      <GuideSection
        id="firmware"
        eyebrow="Firmware"
        title="Firmware und Updates der MAG Box"
        intro={
          <p>
            Eine aktuelle Firmware sorgt dafür, dass die Box gut mit dem Portal Ihres Anbieters zusammenarbeitet. Gleichzeitig
            ist das Update der heikelste Moment im Leben einer MAG Box.
          </p>
        }
      >
        <CardGrid items={firmwareCards} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <Note label="Nur passende Firmware">{firmwareNote}</Note>
      </GuideSection>

      {/* -------------------------------------------------------- Sicherheit */}
      <GuideSection
        id="sicherheit"
        eyebrow="Sicherheit"
        title="Sicherheit, Datenschutz und Rechtliches"
        tinted
        intro={<p>MAC-Adresse und Portal-URL sind Ihr Zugang. So bleiben sie geschützt.</p>}
      >
        <CardGrid items={securityPoints} />
        <Note label="Gerät und Inhalte">
          <FormattedText text={legalNote} />
        </Note>
      </GuideSection>

      {/* ------------------------------------------------------ Andere Geräte */}
      <section aria-labelledby="andere-geraete-heading" className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Andere Geräte</span>
            <h2 id="andere-geraete-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Keine MAG Box? So klappt IPTV auf anderen Geräten
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherDevices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  {item.photo ? (
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
                      <Image
                        src={item.photo.image}
                        alt={item.photo.imageAlt}
                        placeholder="blur"
                        fill
                        loading="lazy"
                        sizes="(min-width: 1152px) 270px, (min-width: 640px) 45vw, calc(100vw - 2rem)"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="flex items-center gap-2 font-semibold text-foreground group-hover:text-accent">
                      <DeviceIcon icon={item.icon} className="h-5 w-5 text-accent" />
                      {item.name}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                    <span className="mt-auto pt-1 text-sm font-semibold text-accent">
                      {item.linkLabel} <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* --------------------------------------------------------------- FAQ */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 border-t border-border py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">FAQ</span>
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Häufige Fragen zur MAG Box
            </h2>
            <p className="text-base leading-relaxed text-secondary">
              Allgemeine Antworten finden Sie in unseren <Link href="/faq" className={inlineLink}>häufigen Fragen</Link>.
              Zur Rechtslage informiert die Seite <Link href="/iptv-legal" className={inlineLink}>Ist IPTV legal?</Link>
            </p>
          </div>
          <div className="min-w-0">
            <FaqList items={magFaq} />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Quellen */}
      <section aria-labelledby="quellen-heading" className="border-t border-border py-12 sm:py-16">
        <Container className="flex flex-col gap-5">
          <h2 id="quellen-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Quellen &amp; weiterführende Informationen
          </h2>
          <ul className="flex flex-col gap-2">
            {sources.map((source) => (
              <li key={source.href} className="text-sm leading-relaxed text-muted">
                <a href={source.href} target="_blank" rel="noopener noreferrer" className={`${inlineLink} break-words`}>
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed text-muted">
            Stand: {formatGuideDate(MAG_UPDATED)}. MAG und Infomir sind Marken ihrer jeweiligen Inhaber und dienen hier nur
            der Beschreibung. Wir stehen in keiner Verbindung zu Infomir.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Ihre MAG Box lädt das Portal nicht?"
        description="Nennen Sie uns Modell und die Fehlermeldung auf dem Bildschirm. Wir helfen Ihnen, die Ursache einzugrenzen, und begleiten Sie Schritt für Schritt durch die Einrichtung."
        whatsappLink={deviceWhatsAppLink(device.name)}
      />
    </>
  );
}
