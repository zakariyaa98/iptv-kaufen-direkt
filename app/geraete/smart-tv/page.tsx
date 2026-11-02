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
  TipGrid,
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
  FEATURED_DURATION,
  LOWEST_PRICE,
  PLAN_SCOPE_NOTE,
  PRICE_NOTE,
  deviceCategories,
  durationLabel,
  formatPrice,
} from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";
import {
  SMART_TV_IMAGES,
  SMART_TV_UPDATED,
  alternatives,
  appCheck,
  appTypes,
  availabilityNote,
  checklist,
  keyFacts,
  lgIntro,
  lgSteps,
  lgTips,
  m3uIntro,
  m3uParts,
  m3uTips,
  networkRows,
  networkTips,
  olderTvSignals,
  osComparison,
  osComparisonText,
  privacyPoints,
  qualityCards,
  samsungIntro,
  samsungSteps,
  samsungTips,
  setupFlow,
  smartTvFaq,
  tocItems,
  troubleshooting,
} from "@/lib/smart-tv-content";
import { deviceWhatsAppLink } from "@/lib/whatsapp";

/*
 * /geraete/smart-tv – dedicated Smart TV guide (Samsung Tizen & LG webOS).
 * Static route; app/geraete/[slug] skips this slug. Title, meta and dates come from the
 * "smart-tv" entry in lib/devices.ts so the hub cards and sitemap stay in sync; all body copy
 * lives in lib/smart-tv-content.ts.
 */

const PATH = "/geraete/smart-tv";
const device = getDevice("smart-tv")!;
const OG_IMAGE = {
  url: `${PATH}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "IPTV auf Smart TV einrichten – Anleitung für Samsung (Tizen) und LG (webOS)",
};

export const metadata: Metadata = pageMetadata({
  title: device.seoTitle,
  description: device.metaDescription,
  path: PATH,
  type: "article",
  publishedTime: device.publishedAt,
  modifiedTime: SMART_TV_UPDATED,
  image: OG_IMAGE,
});

/** Related device guides with the product photos already used on the homepage. */
const relatedDevices = alternatives.map((item) => {
  const photo = homeDevices.find((entry) => entry.href === item.href);
  const entry = getDevice(item.href.replace("/geraete/", ""));
  return { ...item, photo, icon: entry?.icon ?? "tv" };
});

/* --------------------------------------------------------------------- page */

export default function SmartTvGuidePage() {
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
          dateModified: SMART_TV_UPDATED,
          image: [absoluteUrl(OG_IMAGE.url)],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          about: [
            { "@type": "Thing", name: "IPTV" },
            { "@type": "Thing", name: "Smart TV" },
          ],
        }}
      />
      <JsonLd data={faqJsonLd(smartTvFaq)} />

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
        <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="flex min-w-0 flex-col gap-6">
            <span className="w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              Geräte-Anleitung · Samsung Tizen · LG webOS
            </span>
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              IPTV auf Smart TV einrichten: <span className="text-gradient">Samsung und LG Schritt für Schritt</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Sie möchten IPTV direkt auf dem Fernseher nutzen, ohne Stick oder Box? Diese Anleitung zeigt, wie Sie
              IPTV auf einem Smart TV von Samsung (Tizen) oder LG (webOS) einrichten: von der passenden App über die
              M3U-Playlist bis zur stabilen Netzwerkverbindung. Außerdem erfahren Sie, wie Sie typische Fehler selbst
              beheben.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#samsung">Zur Samsung-Anleitung</Button>
              <Button href="#lg" variant="secondary">
                Zur LG-Anleitung
              </Button>
            </div>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={SMART_TV_UPDATED}>{formatGuideDate(SMART_TV_UPDATED)}</time> ·{" "}
              {device.readingTimeMinutes} Min. Lesezeit
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40">
            <Image
              src={SMART_TV_IMAGES.hero.src}
              alt={SMART_TV_IMAGES.hero.alt}
              width={SMART_TV_IMAGES.hero.width}
              height={SMART_TV_IMAGES.hero.height}
              preload
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------- Key facts + TOC */}
      <section aria-labelledby="kurz-heading" className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-6">
            <h2 id="kurz-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Das Wichtigste in Kürze
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {keyFacts.map((fact) => (
                <li key={fact.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
                  <span className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckIcon className="mt-0 text-accent" />
                    {fact.title}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{fact.text}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-muted">
              Neu bei IPTV? Die technischen Grundlagen – von Zugangsarten bis EPG – erklären wir geräteübergreifend in
              unserem Ratgeber <Link href="/anleitungen" className={inlineLink}>IPTV einrichten: Grundlagen und Konfiguration</Link>.
            </p>
          </div>

          <GuideToc title="Inhalt dieser Anleitung" items={tocItems} />
        </Container>
      </section>

      {/* -------------------------------------------------------- Checkliste */}
      <GuideSection
        id="checkliste"
        eyebrow="Vorbereitung"
        title="Checkliste: Das sollten Sie vor der Einrichtung erledigen"
        tinted
        intro={
          <p>
            Die meisten Probleme bei der Einrichtung entstehen, bevor die erste App installiert ist: veraltete
            Software, fehlende Zugangsdaten oder ein schwaches WLAN. Mit diesen acht Punkten starten Sie vorbereitet.
          </p>
        }
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {checklist.map((item, index) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-5">
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-accent/70 text-xs font-bold text-accent"
              >
                {index + 1}
              </span>
              <div className="flex flex-col gap-1.5">
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </GuideSection>

      {/* ------------------------------------------------------------ Ablauf */}
      <GuideSection
        id="ablauf"
        eyebrow="Überblick"
        title="So läuft die Einrichtung am Fernseher ab"
        intro={
          <p>
            Ob Samsung oder LG: Der Ablauf ist auf beiden Systemen gleich. Unterschiede gibt es nur bei Menünamen und
            Bedienung – die folgen in den Abschnitten zu Tizen und webOS.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Illustration image={SMART_TV_IMAGES.steps} className="min-w-0" />
          <ol className="flex min-w-0 flex-col gap-3">
            {setupFlow.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4 rounded-2xl border border-border bg-background-elevated p-4">
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-ink"
                >
                  {index + 1}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="font-semibold text-foreground">{step.title}</span>
                  <span className="text-sm leading-relaxed text-muted">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </GuideSection>

      {/* ----------------------------------------------------------- Samsung */}
      <GuideSection
        id="samsung"
        eyebrow="Samsung · Tizen"
        title="IPTV auf Samsung Smart TV einrichten"
        tinted
        intro={samsungIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">App installieren und einrichten</h3>
            <NumberedSteps steps={samsungSteps} />
          </div>
          <div className="min-w-0">
            <TipGrid title="Samsung-spezifische Einstellungen" tips={samsungTips} />
          </div>
        </div>
        <Note>
          Menübezeichnungen unterscheiden sich je nach Modelljahr. Ob eine bestimmte App für Ihren Samsung-Fernseher
          verfügbar ist, sehen Sie verbindlich nur im Store des Geräts.
        </Note>
      </GuideSection>

      {/* ---------------------------------------------------------------- LG */}
      <GuideSection
        id="lg"
        eyebrow="LG · webOS"
        title="IPTV auf LG Smart TV einrichten"
        intro={lgIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">App installieren und einrichten</h3>
            <NumberedSteps steps={lgSteps} tone="blue" />
          </div>
          <div className="min-w-0">
            <TipGrid title="LG-spezifische Einstellungen" tips={lgTips} />
          </div>
        </div>
        <Note>
          Auch bei LG hängt das App-Angebot von Modell und webOS-Version ab. Verlassen Sie sich nicht auf Listen im
          Internet, sondern prüfen Sie den Store Ihres Fernsehers.
        </Note>
      </GuideSection>

      {/* ---------------------------------------------------- Tizen vs webOS */}
      <GuideSection
        id="tizen-webos"
        eyebrow="Systemvergleich"
        title="Tizen und webOS: Wo liegen die Unterschiede?"
        tinted
        intro={osComparisonText.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Illustration image={SMART_TV_IMAGES.compare} className="min-w-0" />
          <div className="min-w-0">
            <DataTable label="Vergleich Samsung Tizen und LG webOS" {...osComparison} />
          </div>
        </div>
      </GuideSection>

      {/* -------------------------------------------------------------- Apps */}
      <GuideSection
        id="apps"
        eyebrow="App-Auswahl"
        title="IPTV-App für den Smart TV: Welche Möglichkeiten gibt es?"
        intro={
          <p>
            Auf Samsung und LG gibt es drei grundsätzliche Wege, IPTV abzuspielen. Welcher für Sie passt, hängt davon ab,
            wie Ihr Dienst den Zugang bereitstellt: als eigene App mit Kundenkonto oder als Playlist bzw.
            Xtream-Codes-Zugang für einen Player.
          </p>
        }
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {appTypes.map((type) => (
            <li key={type.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                {type.label}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{type.text}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                {type.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-secondary">
                    <CheckIcon className="text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">So prüfen Sie eine App vor der Installation</h3>
            <ul className="flex flex-col gap-3">
              {appCheck.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
                  <CheckIcon className="mt-1 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <Note>{availabilityNote}</Note>
            <p className="text-sm leading-relaxed text-muted">
              Einen Überblick über verbreitete Player auf anderen Plattformen finden Sie in unserer{" "}
              <Link href="/anleitungen#apps" className={inlineLink}>
                Übersicht zu IPTV-Apps und Geräten
              </Link>
              .
            </p>
          </div>
        </div>
      </GuideSection>

      {/* --------------------------------------------------------------- M3U */}
      <GuideSection
        id="m3u"
        eyebrow="Zugangsdaten"
        title="M3U-Playlist am Smart TV richtig einrichten"
        tinted
        intro={m3uIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <Illustration
          image={SMART_TV_IMAGES.m3u}
          caption="Schematische Darstellung mit Beispieladresse. Aufbau und Felder unterscheiden sich je nach Anbieter und App."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Aufbau einer M3U-Adresse</h3>
            <dl className="flex flex-col gap-3">
              {m3uParts.map((part) => (
                <div key={part.label} className="rounded-2xl border border-border bg-background-elevated p-4">
                  <dt className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-foreground">{part.label}</span>
                    <code className="break-all rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-accent-soft">{part.part}</code>
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{part.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Tippfehler vermeiden</h3>
            <ul className="flex flex-col gap-3">
              {m3uTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
                  <CheckIcon className="mt-1 text-accent" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-muted">
              Tiefer ins Thema steigen Sie mit unseren Anleitungen{" "}
              <Link href="/anleitungen/m3u-playlist-xtream-codes" className={inlineLink}>
                M3U-Playlist, Xtream Codes und Portal erklärt
              </Link>{" "}
              und{" "}
              <Link href="/anleitungen/epg-einrichten" className={inlineLink}>
                EPG für IPTV einrichten
              </Link>
              .
            </p>
          </div>
        </div>
      </GuideSection>

      {/* ---------------------------------------------------------- Netzwerk */}
      <GuideSection
        id="netzwerk"
        eyebrow="Netzwerk"
        title="IPTV über WLAN oder LAN: Welche Verbindung ist besser?"
        intro={
          <p>
            Für IPTV zählt weniger die maximale Geschwindigkeit als eine gleichmäßige Verbindung. Ein Stream braucht
            ununterbrochen Daten – kurze Einbrüche im WLAN sehen Sie sofort als Ruckeln oder Ladekreis. Als Richtwert
            gelten rund 10 Mbit/s pro Full-HD-Stream und etwa 25 Mbit/s für 4K.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Illustration image={SMART_TV_IMAGES.network} className="min-w-0" />
          <div className="min-w-0">
            <DataTable label="Vergleich LAN und WLAN für IPTV" {...networkRows} />
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {networkTips.map((tip) => (
            <li key={tip.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
              <p className="font-semibold text-foreground">{tip.title}</p>
              <p className="text-sm leading-relaxed text-muted">{tip.text}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-muted">
          Wie viel Bandbreite mehrere Fernseher gleichzeitig benötigen, zeigt unser Ratgeber{" "}
          <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
            Welche Internetgeschwindigkeit braucht IPTV?
          </Link>
        </p>
      </GuideSection>

      {/* ----------------------------------------------------- Bildqualität */}
      <GuideSection
        id="bildqualitaet"
        eyebrow="Bild und Ton"
        title="Bildqualität, Ladezeiten und typische Wiedergabeprobleme"
        tinted
        intro={
          <p>
            Viele Effekte, die nach einem schlechten Stream aussehen, entstehen erst im Fernseher: durch
            Bildverbesserer, Hochskalierung oder Tonverzögerung. Diese Einstellungen lohnen einen Blick.
          </p>
        }
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualityCards.map((card) => (
            <li key={card.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
              <p className="font-semibold text-foreground">{card.title}</p>
              <p className="text-sm leading-relaxed text-muted">{card.text}</p>
            </li>
          ))}
        </ul>
      </GuideSection>

      {/* ------------------------------------------------------------ Fehler */}
      <GuideSection
        id="fehler"
        eyebrow="Fehlerhilfe"
        title="App-Fehler am Smart TV und mögliche Lösungen"
        intro={
          <p>
            Bei Wiedergabeproblemen hilft eine feste Reihenfolge: Erst klären, ob alle Sender betroffen sind, dann
            das Heimnetz ausschließen. Für den Hotspot-Test verbinden Sie den Fernseher kurz mit dem Smartphone-Hotspot –
            beachten Sie dabei Ihr mobiles Datenvolumen.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Illustration image={SMART_TV_IMAGES.diagnosis} className="min-w-0" />
          <ul className="grid min-w-0 gap-4 sm:grid-cols-2">
            {troubleshooting.map((item) => (
              <li key={item.symptom} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-5">
                <p className="font-semibold text-foreground">{item.symptom}</p>
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-secondary">Ursache: </span>
                  {item.cause}
                </p>
                <p className="mt-auto border-t border-border pt-3 text-sm leading-relaxed text-secondary">
                  <span className="font-semibold text-accent">Lösung: </span>
                  {item.fix}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Weitere Ursachen für Bildaussetzer und ausführliche Lösungen finden Sie unter{" "}
          <Link href="/anleitungen/iptv-ruckelt-loesungen" className={inlineLink}>
            IPTV ruckelt oder friert ein: Ursachen und Lösungen
          </Link>
          .
        </p>
      </GuideSection>

      {/* ------------------------------------------------------- Ältere TVs */}
      <GuideSection
        id="aeltere-tvs"
        eyebrow="Alternativen"
        title="Ältere Smart TVs: Wann lohnt sich ein Streaming-Stick?"
        tinted
        intro={
          <p>
            Smart TVs erhalten nur für einen begrenzten Zeitraum Software-Updates. Danach werden neue App-Versionen
            oft nicht mehr angeboten. Ein externes Gerät am HDMI-Anschluss bringt dann eine aktuelle App-Plattform auf
            den vorhandenen Bildschirm. Über HDMI-CEC – bei Samsung „Anynet+“, bei LG „SIMPLINK“ – steuern Sie viele
            Geräte zusätzlich mit der TV-Fernbedienung.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Anzeichen für ein Zusatzgerät</h3>
            <ul className="flex flex-col gap-3">
              {olderTvSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
                  <CheckIcon className="mt-1 text-accent" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid min-w-0 gap-4 sm:grid-cols-2">
            {relatedDevices.map((item) => (
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
                        sizes="(min-width: 1152px) 330px, (min-width: 640px) 45vw, calc(100vw - 2rem)"
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
        </div>
      </GuideSection>

      {/* ------------------------------------------------------ Datenschutz */}
      <GuideSection
        id="datenschutz"
        eyebrow="Sicherheit"
        title="Datenschutz und sichere App-Auswahl"
        intro={
          <p>
            Ein Smart TV ist dauerhaft online und verwaltet Konten, Apps und Zugangsdaten. Mit wenigen Regeln schützen
            Sie Ihre Daten und vermeiden unseriöse Angebote. Woran Sie einen seriösen Dienst erkennen, lesen Sie in{" "}
            <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
              So erkennen Sie seriöse IPTV-Anbieter
            </Link>
            .
          </p>
        }
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {privacyPoints.map((point) => (
            <li key={point.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
              <p className="font-semibold text-foreground">{point.title}</p>
              <p className="text-sm leading-relaxed text-muted">
                <FormattedText text={point.text} />
              </p>
            </li>
          ))}
        </ul>
      </GuideSection>

      {/* ---------------------------------------------------------- Angebote */}
      <section id="angebote" aria-labelledby="angebote-heading" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_0%,rgba(34,211,238,0.14),transparent_70%),radial-gradient(ellipse_40%_60%_at_100%_100%,rgba(59,130,246,0.14),transparent_70%)]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
              <div className="flex min-w-0 flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Einrichtungshilfe</span>
                <h2 id="angebote-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                  Passende IPTV-Angebote entdecken
                </h2>
                <p className="text-base leading-relaxed text-secondary">
                  Sie möchten den Smart TV nicht allein einrichten? Unsere Pakete verbinden persönliche
                  Einrichtungshilfe und Support für 1, 2 oder 3 Geräte. Auf der Angebotsseite sehen Sie alle Laufzeiten
                  und Gesamtpreise auf einen Blick und entscheiden in Ruhe.
                </p>
                <p className="text-sm leading-relaxed text-muted">{PLAN_SCOPE_NOTE}</p>
                <div>
                  <Button href="/angebote" className="w-full sm:w-auto">
                    Alle Angebote und Preise ansehen
                    <span aria-hidden>→</span>
                  </Button>
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-3">
                <ul className="grid gap-3 sm:grid-cols-3">
                  {deviceCategories.map((category) => (
                    <li
                      key={category.devices}
                      className="flex flex-col gap-1 rounded-2xl border border-border-strong bg-background-elevated/80 p-5 text-center"
                    >
                      <span className="text-sm font-semibold text-secondary">{category.label}</span>
                      <span className="text-2xl font-extrabold text-foreground">
                        {formatPrice(category.prices[FEATURED_DURATION])}
                      </span>
                      <span className="text-xs text-muted">für {durationLabel(FEATURED_DURATION)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-relaxed text-muted">
                  Beispiel Laufzeit {durationLabel(FEATURED_DURATION)}. Weitere Laufzeiten ab {formatPrice(LOWEST_PRICE)}.{" "}
                  {PRICE_NOTE}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------------- FAQ */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 border-t border-border py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">FAQ</span>
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Häufige Fragen zu IPTV am Smart TV
            </h2>
            <p className="text-base leading-relaxed text-secondary">
              Ihre Frage ist nicht dabei? In unseren <Link href="/faq" className={inlineLink}>allgemeinen FAQ</Link> und
              auf der <Link href="/kontakt" className={inlineLink}>Kontaktseite</Link> helfen wir weiter.
            </p>
          </div>
          <div className="min-w-0">
            <FaqList items={smartTvFaq} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ihr Smart TV macht nicht mit?"
        description="Schreiben Sie uns Modell und Baujahr Ihres Fernsehers. Wir sagen Ihnen ehrlich, welcher Weg für Ihr Gerät sinnvoll ist, und begleiten Sie Schritt für Schritt durch die Einrichtung."
        whatsappLink={deviceWhatsAppLink(device.name)}
      />
    </>
  );
}
