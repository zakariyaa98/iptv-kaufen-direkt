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
import {
  FIRE_TV_IMAGES,
  FIRE_TV_UPDATED,
  accessIntro,
  accessTips,
  alternatives,
  appComparison,
  appstoreSteps,
  downloaderSteps,
  epgFavCards,
  errorTable,
  findOsSteps,
  fireTvFaq,
  keyFacts,
  modelIntro,
  modelTable,
  networkTable,
  networkTips,
  olderLimits,
  playerCriteria,
  playerSetupSteps,
  qualityCards,
  requirements,
  securityPoints,
  tocItems,
  updateCards,
} from "@/lib/fire-tv-content";
import { homeDevices } from "@/lib/home-content";
import { DURATIONS, FEATURED_DURATION, PLAN_SCOPE_NOTE, PRICE_NOTE, deviceCategories, formatPrice } from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";
import { deviceWhatsAppLink } from "@/lib/whatsapp";

/*
 * /geraete/fire-tv-stick – dedicated Amazon Fire TV guide.
 * Static route; app/geraete/[slug] skips this slug. Title, meta and dates come from the
 * "fire-tv-stick" entry in lib/devices.ts (hub cards + sitemap); body copy lives in lib/fire-tv-content.ts.
 */

const PATH = "/geraete/fire-tv-stick";
const device = getDevice("fire-tv-stick")!;
const OG_IMAGE = {
  url: `${PATH}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "IPTV auf Fire TV Stick einrichten – Player, M3U und Xtream Codes",
};

export const metadata: Metadata = pageMetadata({
  title: device.seoTitle,
  description: device.metaDescription,
  path: PATH,
  type: "article",
  publishedTime: device.publishedAt,
  modifiedTime: FIRE_TV_UPDATED,
  image: OG_IMAGE,
});

/** Single-device prices for every duration, straight from lib/plans.ts. */
const singleDevice = deviceCategories.find((category) => category.devices === 1)!;

const relatedDevices = alternatives.map((item) => {
  const photo = homeDevices.find((entry) => entry.href === item.href);
  const entry = getDevice(item.href.replace("/geraete/", ""));
  return { ...item, photo, icon: entry?.icon ?? "tv" };
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
          <CheckIcon className="mt-1 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FireTvGuidePage() {
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
          dateModified: FIRE_TV_UPDATED,
          image: [absoluteUrl(OG_IMAGE.url)],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          about: [
            { "@type": "Thing", name: "IPTV" },
            { "@type": "Thing", name: "Amazon Fire TV Stick" },
          ],
        }}
      />
      <JsonLd data={faqJsonLd(fireTvFaq)} />

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
        <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="flex min-w-0 flex-col gap-6 lg:order-2">
            <span className="w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              Geräte-Anleitung · Amazon Fire TV
            </span>
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              IPTV auf Fire TV Stick einrichten: <span className="text-gradient">vom Appstore bis zur Senderliste</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Der Fire TV Stick macht fast jeden Fernseher IPTV-fähig. Hier erfahren Sie, welches Modell und welche App
              zu Ihrem Zugang passen, wie Sie eine M3U-Playlist oder Xtream Codes eintragen und was gegen Puffern und
              volle Speicher hilft – inklusive der Neuerungen durch Amazons Vega OS.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#installation">Zur Schritt-für-Schritt-Anleitung</Button>
              <Button href="#modelle" variant="secondary">
                Welches Modell habe ich?
              </Button>
            </div>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={FIRE_TV_UPDATED}>{formatGuideDate(FIRE_TV_UPDATED)}</time> ·{" "}
              {device.readingTimeMinutes} Min. Lesezeit
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40 lg:order-1">
            <Image
              src={FIRE_TV_IMAGES.hero.src}
              alt={FIRE_TV_IMAGES.hero.alt}
              width={FIRE_TV_IMAGES.hero.width}
              height={FIRE_TV_IMAGES.hero.height}
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
            <ol className="flex flex-col gap-3">
              {keyFacts.map((fact, index) => (
                <li key={fact.title} className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-5">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent"
                  >
                    {index + 1}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">{fact.title}</span>
                    <span className="text-sm leading-relaxed text-muted">{fact.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-sm leading-relaxed text-muted">
              Diese Anleitung konzentriert sich auf Amazon Fire TV. Wie IPTV grundsätzlich funktioniert, erklärt unser
              Ratgeber <Link href="/anleitungen" className={inlineLink}>IPTV einrichten: Grundlagen und Konfiguration</Link>.
            </p>
          </div>
          <GuideToc title="Inhalt dieser Anleitung" items={tocItems} />
        </Container>
      </section>

      {/* ----------------------------------------------------------- Modelle */}
      <GuideSection
        id="modelle"
        eyebrow="Modellwahl"
        title="Welcher Fire TV Stick eignet sich für IPTV?"
        tinted
        intro={modelIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Illustration image={FIRE_TV_IMAGES.models} className="min-w-0" />
          <div className="flex min-w-0 flex-col gap-6">
            <DataTable label="Fire-TV-Stick-Modelle im Vergleich" {...modelTable} />
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">So finden Sie das Betriebssystem Ihres Sticks</h3>
              <NumberedSteps steps={findOsSteps} />
            </div>
          </div>
        </div>
        <Note label="Vor dem Kauf beachten">
          Wenn Sie einen bestimmten IPTV-Player nutzen möchten, der nicht im Amazon Appstore angeboten wird, brauchen Sie
          ein Modell mit Fire OS. Achten Sie beim Kauf auf die Generation, denn derselbe Produktname kann je nach
          Baujahr ein anderes Betriebssystem bedeuten.
        </Note>
      </GuideSection>

      {/* --------------------------------------------------- Voraussetzungen */}
      <GuideSection
        id="voraussetzungen"
        eyebrow="Vorbereitung"
        title="Voraussetzungen vor der Installation"
        intro={
          <p>
            Fünf Minuten Vorbereitung ersparen Ihnen später die meisten Rückfragen. Prüfen Sie diese Punkte, bevor Sie
            die erste App installieren.
          </p>
        }
      >
        <CardGrid items={requirements} />
      </GuideSection>

      {/* -------------------------------------------------------------- Apps */}
      <GuideSection
        id="apps"
        eyebrow="App-Auswahl"
        title="Fire TV IPTV App: offizielle Streaming-App oder IPTV-Player?"
        tinted
        intro={
          <p>
            „IPTV-App“ meint zwei sehr unterschiedliche Dinge. Bevor Sie installieren, klären Sie, welche Art Ihr Zugang
            braucht – das bestimmt den ganzen weiteren Weg.
          </p>
        }
      >
        <DataTable label="Offizielle Streaming-App und IPTV-Player im Vergleich" {...appComparison} />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Woran Sie einen passenden IPTV-Player erkennen</h3>
            <CheckList items={playerCriteria} />
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <Note>
              Wir nennen keine Player-App als „kompatibel mit allen Modellen“. Welche Apps im Appstore erscheinen, hängt
              von Modell, Betriebssystem, Region und dem aktuellen Store-Angebot ab – gerade nach dem Wechsel einiger
              Modelle auf Vega OS.
            </Note>
            <p className="text-sm leading-relaxed text-muted">
              Eine Übersicht verbreiteter Player für verschiedene Geräte finden Sie in unserer{" "}
              <Link href="/anleitungen#apps" className={inlineLink}>
                Übersicht zu IPTV-Apps
              </Link>
              .
            </p>
          </div>
        </div>
      </GuideSection>

      {/* ------------------------------------------------------ Zugangsdaten */}
      <GuideSection
        id="zugangsdaten"
        eyebrow="Zugangsdaten"
        title="M3U auf dem Fire TV Stick oder Xtream Codes?"
        intro={accessIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <Illustration
          image={FIRE_TV_IMAGES.access}
          caption="Beispieldaten zur Veranschaulichung. Ob und wie die Zuordnung funktioniert, hängt von Ihrem Anbieter ab."
        />
        <CardGrid items={accessTips} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <p className="text-sm leading-relaxed text-muted">
          Alle Zugangsarten einschließlich MAG-Portal erklärt der Ratgeber{" "}
          <Link href="/anleitungen/m3u-playlist-xtream-codes" className={inlineLink}>
            M3U-Playlist, Xtream Codes und Portal
          </Link>
          .
        </p>
      </GuideSection>

      {/* ------------------------------------------------------ Installation */}
      <GuideSection
        id="installation"
        eyebrow="Schritt für Schritt"
        title="Fire TV Stick: IPTV-Player installieren und einrichten"
        tinted
        intro={
          <p>
            Es gibt zwei Wege, einen IPTV-Player auf den Stick zu bringen. Der Appstore ist immer die erste Wahl. Der
            Downloader ist nur nötig, wenn Ihr Player dort fehlt – und funktioniert ausschließlich auf Modellen mit Fire OS.
          </p>
        }
      >
        <Illustration image={FIRE_TV_IMAGES.install} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-5 rounded-3xl border border-accent/40 bg-background-elevated p-6 sm:p-7">
            <div className="flex flex-col gap-1">
              <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-ink">Weg A · empfohlen</span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">Installation über den Amazon Appstore</h3>
            </div>
            <NumberedSteps steps={appstoreSteps} />
          </div>
          <div className="flex min-w-0 flex-col gap-5 rounded-3xl border border-highlight/40 bg-background-elevated p-6 sm:p-7">
            <div className="flex flex-col gap-1">
              <span className="w-fit rounded-full bg-highlight px-3 py-1 text-xs font-bold text-background">Weg B · nur Fire OS</span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">Installation per Downloader (APK)</h3>
            </div>
            <NumberedSteps steps={downloaderSteps} tone="blue" />
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex min-w-0 flex-col gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Zugang im Player einrichten</h3>
            <NumberedSteps steps={playerSetupSteps} />
          </div>
          <Note label="Sicherheit">
            Laden Sie APK-Dateien nur von der offiziellen Website des Entwicklers und schalten Sie „Apps unbekannter
            Herkunft“ nach der Installation wieder aus. Mehr dazu im Abschnitt{" "}
            <a href="#sicherheit" className={inlineLink}>
              Sicherheit und Datenschutz
            </a>
            .
          </Note>
        </div>
      </GuideSection>

      {/* ----------------------------------------------------- EPG/Favoriten */}
      <GuideSection
        id="epg-favoriten"
        eyebrow="Komfort"
        title="EPG und Favoriten: So wird der Player übersichtlich"
        intro={
          <p>
            Die Programmzeitschrift (EPG) zeigt, was gerade läuft und was als Nächstes kommt. Favoriten verkürzen den Weg
            zu Ihren wichtigsten Sendern. Beides richten Sie einmal ein und profitieren täglich davon.
          </p>
        }
      >
        <CardGrid items={epgFavCards} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <p className="text-sm leading-relaxed text-muted">
          Schritt für Schritt erklärt:{" "}
          <Link href="/anleitungen/epg-einrichten" className={inlineLink}>
            EPG für IPTV einrichten
          </Link>
          .
        </p>
      </GuideSection>

      {/* ---------------------------------------------------------- Netzwerk */}
      <GuideSection
        id="netzwerk"
        eyebrow="Netzwerk"
        title="IPTV mit WLAN oder LAN am Fire TV Stick"
        tinted
        intro={
          <p>
            Anders als ein Fernseher steckt der Stick meist direkt hinter dem Gerät – mitten im Funkschatten von
            Rückwand und Elektronik. Deshalb lohnt es sich, gerade hier über die Verbindung nachzudenken.
          </p>
        }
      >
        <Illustration image={FIRE_TV_IMAGES.network} />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="min-w-0">
            <DataTable label="Verbindungsarten für den Fire TV Stick" {...networkTable} />
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <CheckList items={networkTips} />
            <p className="text-sm leading-relaxed text-muted">
              Wie viel Bandbreite mehrere Streams brauchen, zeigt unser Ratgeber{" "}
              <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
                Internetgeschwindigkeit für IPTV
              </Link>
              .
            </p>
          </div>
        </div>
      </GuideSection>

      {/* ----------------------------------------------------- Bild/Speicher */}
      <GuideSection
        id="bild-speicher"
        eyebrow="Feinschliff"
        title="Bildqualität, Pufferung und Speicherplatz"
        intro={
          <p>
            Viele Probleme, die nach einem schlechten Stream aussehen, entstehen auf dem Stick selbst: durch unpassende
            Anzeigeeinstellungen, zu kleinen Puffer oder knappen Speicher.
          </p>
        }
      >
        <CardGrid items={qualityCards} />
      </GuideSection>

      {/* ------------------------------------------------------------ Fehler */}
      <GuideSection
        id="fehler"
        eyebrow="Fehlerhilfe"
        title="Häufige Fehler am Fire TV Stick und ihre Lösungen"
        tinted
        intro={
          <p>
            Prüfen Sie zuerst, ob das Problem bei allen Sendern auftritt. Betrifft es nur einen Sender, liegt die Ursache
            meist beim Stream selbst. Läuft alles schlecht, helfen die folgenden Lösungen.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Illustration image={FIRE_TV_IMAGES.errors} className="min-w-0" />
          <div className="min-w-0">
            <DataTable label="Fehler und Lösungen am Fire TV Stick" {...errorTable} />
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Speziell bei Rucklern und Bildaussetzern hilft der Ratgeber{" "}
          <Link href="/anleitungen/iptv-ruckelt-loesungen" className={inlineLink}>
            IPTV ruckelt oder friert ein
          </Link>{" "}
          weiter.
        </p>
      </GuideSection>

      {/* ----------------------------------------------------------- Updates */}
      <GuideSection
        id="updates"
        eyebrow="Aktuell bleiben"
        title="App-Updates und Fire-OS-Versionen"
        intro={
          <p>
            Fire OS gibt es in mehreren Versionen, etwa Fire OS 7 und Fire OS 8. Welche auf Ihrem Gerät läuft, hängt vom
            Modell ab. Für einen stabilen Betrieb sollten System und Apps aktuell sein – auf unterschiedlichen Wegen.
          </p>
        }
      >
        <CardGrid items={updateCards} columns="sm:grid-cols-2 lg:grid-cols-4" />
      </GuideSection>

      {/* --------------------------------------------------- Ältere Geräte */}
      <GuideSection
        id="aeltere-geraete"
        eyebrow="Ältere Modelle"
        title="Ältere Fire-TV-Geräte: Einschränkungen und Alternativen"
        tinted
        intro={
          <p>
            Ein älterer Fire TV Stick funktioniert oft noch – aber mit Kompromissen. Wenn Sie an die Grenzen stoßen, gibt
            es mehrere Alternativen, die je nach Haushalt besser passen können.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Typische Grenzen älterer Sticks</h3>
            <CheckList items={olderLimits} />
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

      {/* -------------------------------------------------------- Sicherheit */}
      <GuideSection
        id="sicherheit"
        eyebrow="Sicherheit"
        title="Sicherheit und Datenschutz bei Apps außerhalb des Appstores"
        intro={
          <p>
            Apps aus dem Amazon Appstore werden vor der Veröffentlichung geprüft. Bei APK-Dateien übernehmen Sie diese
            Prüfung selbst. Mit diesen Regeln bleiben Stick, Amazon-Konto und Zugangsdaten geschützt. Woran Sie seriöse
            Dienste erkennen, lesen Sie unter{" "}
            <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
              seriöse IPTV-Anbieter erkennen
            </Link>
            .
          </p>
        }
      >
        <CardGrid items={securityPoints} />
      </GuideSection>

      {/* ---------------------------------------------------------- Angebote */}
      <section id="angebote" aria-labelledby="angebote-heading" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_100%_0%,rgba(34,211,238,0.14),transparent_70%),radial-gradient(ellipse_45%_60%_at_0%_100%,rgba(167,139,250,0.12),transparent_70%)]"
            />
            <div className="relative flex flex-col gap-8">
              <div className="flex max-w-3xl flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Einrichtungshilfe</span>
                <h2 id="angebote-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                  Fire TV Stick nicht allein einrichten?
                </h2>
                <p className="text-base leading-relaxed text-secondary">
                  Wir begleiten Sie per WhatsApp, Telegram oder E-Mail – von der App-Auswahl bis zum ersten laufenden
                  Sender. Die Pakete gelten für 1, 2 oder 3 Geräte. Hier die Gesamtpreise für ein Gerät; alle Varianten
                  finden Sie auf der Angebotsseite.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {DURATIONS.map((duration) => {
                  const featured = duration.id === FEATURED_DURATION;
                  return (
                    <li
                      key={duration.id}
                      className={`flex flex-col gap-1 rounded-2xl border p-4 text-center ${
                        featured ? "border-accent/60 bg-accent/10" : "border-border-strong bg-background-elevated/80"
                      }`}
                    >
                      <span className="text-sm font-semibold text-secondary">{duration.label}</span>
                      <span className="text-2xl font-extrabold text-foreground">{formatPrice(singleDevice.prices[duration.id])}</span>
                      <span className="text-xs text-muted">{singleDevice.label}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
                <p className="max-w-2xl text-xs leading-relaxed text-muted">
                  {PRICE_NOTE} {PLAN_SCOPE_NOTE}
                </p>
                <Button href="/angebote" className="w-full shrink-0 whitespace-nowrap md:w-auto">
                  Alle Angebote und Preise ansehen
                  <span aria-hidden>→</span>
                </Button>
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
              Häufige Fragen zu IPTV auf dem Fire TV Stick
            </h2>
            <p className="text-base leading-relaxed text-secondary">
              Weitere Antworten finden Sie in unseren <Link href="/faq" className={inlineLink}>allgemeinen FAQ</Link>. Für
              Ihre konkrete Frage nutzen Sie gern die <Link href="/kontakt" className={inlineLink}>Kontaktseite</Link>.
            </p>
          </div>
          <div className="min-w-0">
            <FaqList items={fireTvFaq} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ihr Fire TV Stick spielt nicht mit?"
        description="Nennen Sie uns Modell und Generation Ihres Sticks. Wir sagen Ihnen ehrlich, welcher Weg bei Ihrem Gerät funktioniert, und helfen Ihnen Schritt für Schritt bei der Einrichtung."
        whatsappLink={deviceWhatsAppLink(device.name)}
      />
    </>
  );
}
