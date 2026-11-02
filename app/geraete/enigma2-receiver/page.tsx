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
  ENIGMA2_IMAGES,
  ENIGMA2_UPDATED,
  accessIntro,
  accessTips,
  backupSteps,
  basicsIntro,
  bouquetFiles,
  bouquetIntro,
  bouquetTips,
  bouquetsTvLine,
  comparisonTable,
  enigma2Faq,
  epgCards,
  fitCards,
  imageNote,
  images,
  legalNote,
  m3uSteps,
  manualExample,
  manualNote,
  manualSteps,
  networkCards,
  oscamNote,
  oscamPoints,
  playerTable,
  pluginSteps,
  receiverTable,
  requirements,
  securityPoints,
  sources,
  tocItems,
  troubleshootingTable,
  xtreamSteps,
} from "@/lib/enigma2-content";
import { homeDevices } from "@/lib/home-content";
import { DURATIONS, FEATURED_DURATION, PLAN_SCOPE_NOTE, PRICE_NOTE, deviceCategories, formatPrice } from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";
import { deviceWhatsAppLink } from "@/lib/whatsapp";

/*
 * /geraete/enigma2-receiver – dedicated Enigma2 guide (VU+, Dreambox, Zgemma, GigaBlue).
 * Static route; app/geraete/[slug] skips this slug. Title, meta and dates come from the
 * "enigma2-receiver" entry in lib/devices.ts (hub cards + sitemap); body copy lives in lib/enigma2-content.ts.
 */

const PATH = "/geraete/enigma2-receiver";
const device = getDevice("enigma2-receiver")!;
const OG_IMAGE = {
  url: `${PATH}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "IPTV auf Enigma2 Receiver einrichten – Bouquets, M3U und Xtream Codes",
};

export const metadata: Metadata = pageMetadata({
  title: device.seoTitle,
  description: device.metaDescription,
  path: PATH,
  type: "article",
  publishedTime: device.publishedAt,
  modifiedTime: ENIGMA2_UPDATED,
  image: OG_IMAGE,
});

/** Price table straight from lib/plans.ts: rows = durations, columns = 1/2/3 devices. */
const priceColumns = [...deviceCategories].sort((a, b) => a.devices - b.devices);

const setupWays = [
  { id: "weg-plugin", badge: "Weg 1", title: "IPTV über ein vorhandenes Plugin", lead: "Der einfachste Einstieg, wenn Ihr Image ein passendes Plugin im Feed anbietet.", steps: pluginSteps, tone: "accent" as const },
  { id: "weg-m3u", badge: "Weg 2", title: "M3U zu Enigma2-Bouquet", lead: "Die Playlist wird in Bouquets umgewandelt – die Sender stehen danach in Ihrer normalen Senderliste.", steps: m3uSteps, tone: "accent" as const },
  { id: "weg-xtream", badge: "Weg 3", title: "Xtream Codes auf Enigma2", lead: "Zugangsdaten statt langer Adresse; Kategorien und Programmdaten kommen vom Server.", steps: xtreamSteps, tone: "blue" as const },
];

const otherDevices = [
  { href: "/geraete/smart-tv", linkLabel: "Zur Smart-TV-Anleitung", text: "IPTV per App direkt auf dem Fernseher – ohne Receiver und ohne Bouquets." },
  { href: "/geraete/fire-tv-stick", linkLabel: "Fire TV Stick einrichten", text: "Günstiger Zuspieler mit IPTV-Playern aus dem Amazon Appstore." },
  { href: "/geraete/android-tv-box", linkLabel: "Android-TV-Ratgeber lesen", text: "Größte Auswahl an IPTV-Playern über den Google Play Store." },
  { href: "/geraete/mag-box", linkLabel: "MAG-Box-Anleitung", text: "Reine IPTV-Box mit Portal-Zugang und Receiver-ähnlicher Bedienung." },
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
          <CheckIcon className="mt-1 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <figure className="flex min-w-0 flex-col gap-2">
      <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</figcaption>
      <pre className="overflow-x-auto rounded-2xl border border-border bg-background p-4 text-xs leading-relaxed text-secondary sm:text-sm">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

export default function Enigma2GuidePage() {
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
          dateModified: ENIGMA2_UPDATED,
          image: [absoluteUrl(OG_IMAGE.url)],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          about: [
            { "@type": "Thing", name: "IPTV" },
            { "@type": "Thing", name: "Enigma2" },
          ],
        }}
      />
      <JsonLd data={faqJsonLd(enigma2Faq)} />

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
        <Container className="relative flex flex-col gap-10 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <span className="rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              Geräte-Anleitung · VU+, Dreambox, Zgemma, GigaBlue
            </span>
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              IPTV auf Enigma2 Receiver einrichten: <span className="text-gradient">Bouquets, Plugins und Senderliste</span>
            </h1>
            <p className="text-base leading-relaxed text-secondary sm:text-lg">
              Linux-Receiver mit Enigma2 holen IPTV-Sender direkt in die gewohnte Senderliste – neben Satellit und Kabel.
              Dieser Ratgeber erklärt Images wie OpenATV, OpenPLi und VTi, zeigt vier Wege zur Einrichtung mit M3U oder
              Xtream Codes und hilft, wenn Sender schwarz bleiben oder das EPG fehlt.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="#einrichtung">Zu den vier Einrichtungswegen</Button>
              <Button href="#fehler" variant="secondary">
                Fehler beheben
              </Button>
            </div>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={ENIGMA2_UPDATED}>{formatGuideDate(ENIGMA2_UPDATED)}</time> ·{" "}
              {device.readingTimeMinutes} Min. Lesezeit
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
            <div className="min-w-0 overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40">
              <Image
                src={ENIGMA2_IMAGES.hero.src}
                alt={ENIGMA2_IMAGES.hero.alt}
                width={ENIGMA2_IMAGES.hero.width}
                height={ENIGMA2_IMAGES.hero.height}
                preload
                className="h-auto w-full"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-5 rounded-3xl border border-border bg-background-elevated/90 p-6">
              <h2 className="text-lg font-semibold text-foreground">Passt Enigma2 zu Ihnen?</h2>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Ideal, wenn</p>
                <ul className="flex flex-col gap-2">
                  {fitCards.good.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-secondary">
                      <CheckIcon className="mt-0.5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">Gut zu wissen</p>
                <ul className="flex flex-col gap-2">
                  {fitCards.limits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Intro + TOC */}
      <section aria-labelledby="ueberblick-heading" className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <h2 id="ueberblick-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              IPTV Enigma2: So funktioniert es
            </h2>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                ["Zugang", "M3U-Playlist oder Xtream Codes von Ihrem Anbieter"],
                ["Einbindung", "Plugin oder Bouquet bringt die Sender auf den Receiver"],
                ["Fernsehen", "Umschalten in der Senderliste – wie bei Sat"],
              ].map(([title, text], index) => (
                <li key={title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
                  <span className="text-3xl font-extrabold text-accent">{index + 1}</span>
                  <span className="font-semibold text-foreground">{title}</span>
                  <span className="text-sm leading-relaxed text-muted">{text}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm leading-relaxed text-muted">
              Wie IPTV unabhängig vom Gerät funktioniert, erklärt unser Ratgeber{" "}
              <Link href="/anleitungen" className={inlineLink}>
                IPTV einrichten: Grundlagen
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
        title="Was ist Enigma2 – und warum ist IPTV hier anders?"
        tinted
        intro={basicsIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <Illustration image={ENIGMA2_IMAGES.hardware} />
        <div id="images" className="flex scroll-mt-24 flex-col gap-5">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Receiver-Hardware und Enigma2-Image: OpenATV, OpenPLi, VTi
          </h3>
          <CardGrid items={images} columns="sm:grid-cols-2 lg:grid-cols-4" />
          <Note label="Hardware ≠ Image">{imageNote}</Note>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Unterschied zu Smart TV und Android TV
          </h3>
          <DataTable label="IPTV auf Smart TV und Android TV im Vergleich zu Enigma2" {...comparisonTable} />
        </div>
      </GuideSection>

      {/* ---------------------------------------------------------- Receiver */}
      <GuideSection
        id="receiver"
        eyebrow="Geräte"
        title="IPTV auf VU+, Dreambox, Zgemma und GigaBlue"
        intro={
          <p>
            Alle vier Marken nutzen Enigma2, unterscheiden sich aber bei Hardware, Image-Auswahl und Alter der Modelle.
            Die Tabelle zeigt verbreitete Beispiele. Prüfen Sie vor jeder Änderung, welches Image auf Ihrem Gerät läuft –
            Sie finden es meist unter Menü › Informationen.
          </p>
        }
      >
        <DataTable label="Enigma2-Receiver im Vergleich" {...receiverTable} />
      </GuideSection>

      {/* --------------------------------------------------- Voraussetzungen */}
      <GuideSection
        id="voraussetzungen"
        eyebrow="Vorbereitung"
        title="Voraussetzungen und Backup"
        tinted
        intro={<p>Diese Punkte sollten erledigt sein, bevor Sie Plugins installieren oder Bouquets anlegen.</p>}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="min-w-0">
            <CheckList items={requirements} />
          </div>
          <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-amber-400/40 bg-amber-400/5 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">Zuerst sichern: Backup der Senderlisten</h3>
            <NumberedSteps steps={backupSteps} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">LAN oder WLAN am Receiver?</h3>
          <CardGrid items={networkCards} />
          <p className="text-sm leading-relaxed text-muted">
            Wie viel Bandbreite mehrere Streams brauchen, zeigt der Ratgeber{" "}
            <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
              Internetgeschwindigkeit für IPTV
            </Link>
            .
          </p>
        </div>
      </GuideSection>

      {/* ------------------------------------------------------ Zugangsarten */}
      <GuideSection
        id="zugangsarten"
        eyebrow="Zugangsdaten"
        title="M3U auf Enigma2 oder Xtream Codes?"
        intro={accessIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <Illustration
          image={ENIGMA2_IMAGES.access}
          caption="Beispieldaten zur Veranschaulichung. Ihre echten Zugangsdaten erhalten Sie von Ihrem Anbieter."
        />
        <CardGrid items={accessTips} />
        <p className="text-sm leading-relaxed text-muted">
          Grundlagen zu beiden Formaten:{" "}
          <Link href="/anleitungen/m3u-playlist-xtream-codes" className={inlineLink}>
            M3U-Playlist und Xtream Codes erklärt
          </Link>
          .
        </p>
      </GuideSection>

      {/* -------------------------------------------------------- Einrichtung */}
      <GuideSection
        id="einrichtung"
        eyebrow="Schritt für Schritt"
        title="Vier Wege, IPTV auf dem Enigma2-Receiver einzurichten"
        tinted
        intro={
          <p>
            Welcher Weg passt, hängt von Zugangsart, Image und Ihrem Anspruch an die Senderliste ab. Die Wege 1 bis 3
            kommen ohne Dateiarbeit aus, Weg 4 richtet sich an Fortgeschrittene.
          </p>
        }
      >
        <Illustration image={ENIGMA2_IMAGES.setup} />
        <Note label="Plugin-Verfügbarkeit">
          Kein Plugin ist auf jedem Receiver verfügbar. Ob es angeboten wird, hängt von Image, Version, Feed und Hardware
          ab. Plugin-Namen in dieser Anleitung sind Beispiele, keine Garantie.
        </Note>
        <ul className="grid gap-5 lg:grid-cols-3">
          {setupWays.map((way) => (
            <li
              key={way.id}
              id={way.id}
              className="flex min-w-0 scroll-mt-24 flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-6"
            >
              <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">{way.badge}</span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{way.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{way.lead}</p>
              <NumberedSteps steps={way.steps} tone={way.tone} />
            </li>
          ))}
        </ul>
        <div
          id="weg-manuell"
          className="flex min-w-0 scroll-mt-24 flex-col gap-6 rounded-3xl border border-highlight/40 bg-background-elevated p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-full bg-highlight px-3 py-1 text-xs font-bold text-background">Weg 4 · Fortgeschritten</span>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">IPTV Bouquet für Enigma2 manuell anlegen</h3>
            <p className="text-sm leading-relaxed text-muted">
              Volle Kontrolle über Namen, Reihenfolge und Player – dafür arbeiten Sie direkt mit Dateien auf dem Receiver.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="min-w-0">
              <NumberedSteps steps={manualSteps} tone="blue" />
            </div>
            <div className="flex min-w-0 flex-col gap-5">
              <CodeBlock label="Beispiel: userbouquet.iptv.tv" code={manualExample} />
              <CodeBlock label="Zusätzliche Zeile in bouquets.tv" code={bouquetsTvLine} />
            </div>
          </div>
          <Note label="Wichtig">{manualNote}</Note>
        </div>
      </GuideSection>

      {/* ---------------------------------------------------------- Angebote */}
      <section id="angebote" aria-labelledby="angebote-heading" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-accent/30 bg-surface p-5 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_0%_0%,rgba(251,191,36,0.10),transparent_70%),radial-gradient(ellipse_45%_60%_at_100%_100%,rgba(34,211,238,0.14),transparent_70%)]"
            />
            <div className="relative flex max-w-3xl flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Einrichtungshilfe</span>
              <h2 id="angebote-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                Passendes IPTV-Angebot ansehen
              </h2>
              <p className="text-base leading-relaxed text-secondary">
                Plugin, Bouquet oder EPG-Zuordnung – auf Enigma2 hängt viel am Detail. Wir begleiten Sie per WhatsApp,
                Telegram oder E-Mail Schritt für Schritt bei der Einrichtung Ihres Receivers. Alle Pakete im Überblick:
              </p>
            </div>
            <div className="relative min-w-0 overflow-x-auto rounded-2xl border border-border-strong">
              <table className="w-full min-w-[270px] border-collapse text-left text-xs sm:text-sm">
                <caption className="sr-only">Gesamtpreise nach Laufzeit und Anzahl der Geräte</caption>
                <thead>
                  <tr className="bg-background-elevated/80">
                    <th scope="col" className="px-2.5 py-3 font-semibold text-secondary sm:px-4">
                      Laufzeit
                    </th>
                    {priceColumns.map((category) => (
                      <th key={category.devices} scope="col" className="px-2.5 py-3 text-right font-semibold text-secondary sm:px-4">
                        {category.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DURATIONS.map((duration) => {
                    const featured = duration.id === FEATURED_DURATION;
                    return (
                      <tr key={duration.id} className={`border-t border-border ${featured ? "bg-accent/10" : ""}`}>
                        <th scope="row" className="px-2.5 py-3 font-semibold text-foreground sm:px-4">
                          {duration.label}
                        </th>
                        {priceColumns.map((category) => (
                          <td key={category.devices} className="px-2.5 py-3 text-right font-bold text-foreground sm:px-4">
                            {formatPrice(category.prices[duration.id])}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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

      {/* ----------------------------------------------------------- Bouquets */}
      <GuideSection
        id="bouquets"
        eyebrow="Senderliste"
        title="IPTV-Bouquet und Senderliste auf Enigma2 verstehen"
        tinted
        intro={bouquetIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Illustration image={ENIGMA2_IMAGES.bouquets} className="min-w-0" />
          <div className="flex min-w-0 flex-col gap-5">
            <DataTable label="Typische Bouquet-Dateien auf Enigma2" {...bouquetFiles} />
            <Note label="Backup vor Änderungen">
              Plugins, Senderlisten-Editoren und manuelle Änderungen schreiben in dieselben Dateien. Eine fehlerhafte
              Zeile oder ein überschriebenes Bouquet kann Ihre gewohnte Senderliste durcheinanderbringen.
            </Note>
          </div>
        </div>
        <CardGrid items={bouquetTips} />
      </GuideSection>

      {/* -------------------------------------------------------- Wiedergabe */}
      <GuideSection
        id="wiedergabe"
        eyebrow="Wiedergabe"
        title="Player und Service-Typen: wenn das Bild schwarz bleibt"
        intro={
          <p>
            Jeder IPTV-Eintrag in einem Bouquet beginnt mit einem Service-Typ. Er legt fest, welcher Player den Stream
            abspielt. Mit dem Plugin ServiceApp stehen – je nach Image – zusätzliche Player zur Auswahl.
          </p>
        }
      >
        <DataTable label="Service-Typen für IPTV auf Enigma2" {...playerTable} />
      </GuideSection>

      {/* --------------------------------------------------------------- EPG */}
      <GuideSection
        id="epg"
        eyebrow="Komfort"
        title="EPG, Favoriten und übersichtliche IPTV-Senderliste"
        tinted
        intro={
          <p>
            Mit Programmdaten und sauber sortierten Bouquets wird IPTV auf dem Receiver so bequem wie Satellitenfernsehen.
          </p>
        }
      >
        <CardGrid items={epgCards} />
        <p className="text-sm leading-relaxed text-muted">
          Ausführlich erklärt:{" "}
          <Link href="/anleitungen/epg-einrichten" className={inlineLink}>
            EPG für IPTV einrichten
          </Link>
          .
        </p>
      </GuideSection>

      {/* ------------------------------------------------------------- OSCam */}
      <GuideSection
        id="oscam"
        eyebrow="Einordnung"
        title="OSCam und IPTV: zwei verschiedene Dinge"
        intro={
          <p>
            Wer Enigma2 nutzt, kennt oft auch OSCam. Damit keine Missverständnisse entstehen, hier die sachliche
            Abgrenzung.
          </p>
        }
      >
        <CardGrid items={oscamPoints} />
        <Note label="Rechtlicher Hinweis">{oscamNote}</Note>
      </GuideSection>

      {/* ------------------------------------------------------------ Fehler */}
      <GuideSection
        id="fehler"
        eyebrow="Fehlerhilfe"
        title="Fehlerbehebung: Symptom, Ursache, Lösung"
        tinted
        intro={
          <p>
            Gehen Sie bei Problemen in fester Reihenfolge vor: erst das Netzwerk, dann Player, Zugang, Bouquet und zuletzt
            das EPG. So finden Sie die Ursache schneller.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Illustration image={ENIGMA2_IMAGES.troubleshooting} className="min-w-0" />
          <div className="min-w-0">
            <DataTable label="Fehler bei IPTV auf Enigma2 und ihre Lösungen" {...troubleshootingTable} />
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Bei Rucklern hilft zusätzlich der Ratgeber{" "}
          <Link href="/anleitungen/iptv-ruckelt-loesungen" className={inlineLink}>
            IPTV ruckelt: Ursachen und Lösungen
          </Link>
          . Für Ihren konkreten Receiver erreichen Sie uns über die{" "}
          <Link href="/kontakt" className={inlineLink}>
            Kontaktseite
          </Link>
          .
        </p>
      </GuideSection>

      {/* -------------------------------------------------------- Sicherheit */}
      <GuideSection
        id="sicherheit"
        eyebrow="Sicherheit"
        title="Sicherheit, Datenschutz und Rechtliches"
        intro={
          <p>
            Ein Enigma2-Receiver ist ein vollwertiger Linux-Rechner im Heimnetz. Mit diesen Regeln bleiben Gerät und
            Zugangsdaten geschützt.
          </p>
        }
      >
        <CardGrid items={securityPoints} />
        <Note label="Software und Inhalte">
          <FormattedText text={legalNote} />
        </Note>
      </GuideSection>

      {/* ------------------------------------------------------ Andere Geräte */}
      <section aria-labelledby="andere-geraete-heading" className="border-t border-border py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Andere Geräte</span>
            <h2 id="andere-geraete-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Lieber ohne Receiver? Diese Anleitungen passen
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
              Häufige Fragen zu IPTV auf Enigma2
            </h2>
            <p className="text-base leading-relaxed text-secondary">
              Weitere Antworten bieten unsere <Link href="/faq" className={inlineLink}>FAQ rund um IPTV</Link>. Zur
              Rechtslage informiert die Seite <Link href="/iptv-legal" className={inlineLink}>Ist IPTV legal?</Link>
            </p>
          </div>
          <div className="min-w-0">
            <FaqList items={enigma2Faq} />
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
            Stand: {formatGuideDate(ENIGMA2_UPDATED)}. Marken- und Produktnamen dienen nur der Beschreibung und gehören
            ihren jeweiligen Inhabern. Wir stehen in keiner Verbindung zu den genannten Herstellern, Image-Teams oder
            Plugin-Entwicklern.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Ihr Enigma2-Receiver zeigt keine IPTV-Sender?"
        description="Nennen Sie uns Receiver-Modell, Image und Version. Wir sagen Ihnen, welcher Weg zu Ihrem Gerät passt, und helfen Schritt für Schritt bei Plugin, Bouquet und EPG."
        whatsappLink={deviceWhatsAppLink(device.name)}
      />
    </>
  );
}
