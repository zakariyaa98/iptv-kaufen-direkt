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
import {
  ANDROID_TV_IMAGES,
  ANDROID_TV_UPDATED,
  accessIntro,
  accessTips,
  androidTvFaq,
  basicsIntro,
  buyingCriteria,
  buyingNote,
  certSteps,
  heroSpecs,
  keyFacts,
  kodiSteps,
  legalNote,
  performanceCards,
  platformTable,
  playerSettings,
  players,
  playersNote,
  requirements,
  securityPoints,
  setupSteps,
  sources,
  tocItems,
  troubleshooting,
  verificationNote,
} from "@/lib/android-tv-content";
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
import { deviceWhatsAppLink } from "@/lib/whatsapp";

/*
 * /geraete/android-tv-box – dedicated Android TV / Google TV guide.
 * Static route; app/geraete/[slug] skips this slug. Title, meta and dates come from the
 * "android-tv-box" entry in lib/devices.ts (hub cards + sitemap); body copy lives in lib/android-tv-content.ts.
 */

const PATH = "/geraete/android-tv-box";
const device = getDevice("android-tv-box")!;
const OG_IMAGE = {
  url: `${PATH}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "IPTV auf Android TV Box einrichten – Player, M3U und Xtream Codes",
};

export const metadata: Metadata = pageMetadata({
  title: device.seoTitle,
  description: device.metaDescription,
  path: PATH,
  type: "article",
  publishedTime: device.publishedAt,
  modifiedTime: ANDROID_TV_UPDATED,
  image: OG_IMAGE,
});

/** Featured-duration price per device count, straight from lib/plans.ts. */
const featuredPrices = deviceCategories.map((category) => ({
  label: category.label,
  devices: category.devices,
  price: category.prices[FEATURED_DURATION],
}));

const otherDevices = [
  { href: "/geraete/smart-tv", linkLabel: "Smart-TV-Anleitung", text: "Lieber direkt eine App auf dem Fernseher? So klappt IPTV auf Samsung, LG und anderen Smart TVs." },
  { href: "/geraete/fire-tv-stick", linkLabel: "Zum Fire-TV-Ratgeber", text: "Amazons Streaming-Stick nutzt den Amazon Appstore statt Google Play – mit eigenen Besonderheiten." },
  { href: "/geraete/mag-box", linkLabel: "MAG-Box einrichten", text: "Reine IPTV-Boxen, die per Portal-Adresse verbunden werden und sich wie ein Receiver bedienen lassen." },
  { href: "/geraete/enigma2-receiver", linkLabel: "Enigma2-Anleitung lesen", text: "Linux-Receiver binden IPTV per Bouquet oder Plugin ein – für alle, die gern selbst konfigurieren." },
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

export default function AndroidTvGuidePage() {
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
          dateModified: ANDROID_TV_UPDATED,
          image: [absoluteUrl(OG_IMAGE.url)],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          about: [
            { "@type": "Thing", name: "IPTV" },
            { "@type": "Thing", name: "Android TV" },
            { "@type": "Thing", name: "Google TV" },
          ],
        }}
      />
      <JsonLd data={faqJsonLd(androidTvFaq)} />

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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div className="flex min-w-0 flex-col gap-6">
              <span className="w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
                Geräte-Anleitung · Android TV &amp; Google TV
              </span>
              <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
                IPTV auf Android TV Box einrichten: <span className="text-gradient">Player, Zugang und stabiles Bild</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
                Android-TV- und Google-TV-Boxen bieten über den Play Store die größte Auswahl an IPTV-Playern. Dieser
                Ratgeber zeigt, woran Sie eine geeignete Box erkennen, wie Sie M3U oder Xtream Codes eintragen und wie
                Sie mit LAN, passenden Einstellungen und der richtigen App 4K ohne Puffern genießen.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#einrichtung">Direkt zur Einrichtung</Button>
                <Button href="#fehler" variant="secondary">
                  Probleme lösen
                </Button>
              </div>
              <p className="text-xs text-muted">
                Aktualisiert am <time dateTime={ANDROID_TV_UPDATED}>{formatGuideDate(ANDROID_TV_UPDATED)}</time> ·{" "}
                {device.readingTimeMinutes} Min. Lesezeit
              </p>
            </div>
            <div className="min-w-0 overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40">
              <Image
                src={ANDROID_TV_IMAGES.hero.src}
                alt={ANDROID_TV_IMAGES.hero.alt}
                width={ANDROID_TV_IMAGES.hero.width}
                height={ANDROID_TV_IMAGES.hero.height}
                preload
                className="h-auto w-full"
              />
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {heroSpecs.map((spec) => (
              <div key={spec.label} className="flex min-w-0 flex-col gap-1 bg-background-elevated/95 px-4 py-4 sm:px-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{spec.label}</dt>
                <dd className="text-sm font-semibold text-foreground sm:text-base">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ------------------------------------------------- Key facts + TOC */}
      <section aria-labelledby="kurz-heading" className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-6">
            <h2 id="kurz-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Auf einen Blick
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {keyFacts.map((fact) => (
                <li key={fact.title} className="flex flex-col gap-2 rounded-2xl border-l-4 border-accent bg-background-elevated p-5">
                  <span className="font-semibold text-foreground">{fact.title}</span>
                  <span className="text-sm leading-relaxed text-muted">{fact.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-muted">
              Hier geht es speziell um Android TV und Google TV. Die geräteunabhängigen Grundlagen finden Sie in unseren{" "}
              <Link href="/anleitungen" className={inlineLink}>
                IPTV-Anleitungen für Einsteiger
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
        title="Was ist eine Android TV Box?"
        tinted
        intro={basicsIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div id="plattformen" className="scroll-mt-24 flex flex-col gap-6">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Android TV, Google TV oder einfache Android-Box?
          </h3>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Illustration image={ANDROID_TV_IMAGES.platforms} className="min-w-0" />
            <div className="min-w-0">
              <DataTable label="Android TV, Google TV und nicht zertifizierte Boxen im Vergleich" {...platformTable} />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">So prüfen Sie die Google-Zertifizierung</h3>
              <NumberedSteps steps={certSteps} />
            </div>
            <Note label="Warum das wichtig ist">
              Nur zertifizierte Geräte haben einen lizenzierten Google Play Store mit Play Protect. Günstige Boxen ohne
              Zertifizierung laufen oft mit veralteter Software und bekommen selten Sicherheitsupdates.
            </Note>
          </div>
        </div>
      </GuideSection>

      {/* ------------------------------------------------------ Kaufberatung */}
      <GuideSection
        id="kaufberatung"
        eyebrow="Kaufberatung"
        title="Worauf Sie beim Kauf einer IPTV-tauglichen Android TV Box achten"
        intro={
          <p>
            Für IPTV muss eine Box keine Spitzenleistung haben. Entscheidend sind genug Arbeitsspeicher für große
            Senderlisten, ein moderner Video-Decoder und vor allem eine stabile Netzwerkverbindung.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Illustration image={ANDROID_TV_IMAGES.buying} className="min-w-0" />
          <div className="min-w-0">
            <CardGrid items={buyingCriteria} columns="sm:grid-cols-2" />
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">{buyingNote}</p>
      </GuideSection>

      {/* --------------------------------------------------- Voraussetzungen */}
      <GuideSection
        id="voraussetzungen"
        eyebrow="Vorbereitung"
        title="Voraussetzungen für IPTV auf Android TV"
        tinted
        intro={<p>Halten Sie diese Punkte bereit, bevor Sie den ersten Player installieren.</p>}
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="min-w-0">
            <CheckList items={requirements} />
          </div>
          <Note label="Bandbreite">
            Die Richtwerte gelten pro gleichzeitigem Stream. Wie viel Ihr Haushalt insgesamt braucht, zeigt der Ratgeber{" "}
            <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
              Internetgeschwindigkeit für IPTV
            </Link>
            .
          </Note>
        </div>
      </GuideSection>

      {/* ------------------------------------------------------ Zugangsarten */}
      <GuideSection
        id="zugangsarten"
        eyebrow="Zugangsdaten"
        title="M3U auf Android TV oder Xtream Codes?"
        intro={accessIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <Illustration
          image={ANDROID_TV_IMAGES.access}
          caption="Beispieldaten zur Veranschaulichung. Ihre echten Zugangsdaten erhalten Sie von Ihrem Anbieter."
        />
        <CardGrid items={accessTips} />
        <p className="text-sm leading-relaxed text-muted">
          Ausführlicher, inklusive MAG-Portal:{" "}
          <Link href="/anleitungen/m3u-playlist-xtream-codes" className={inlineLink}>
            Unterschiede zwischen M3U, Xtream Codes und Portal
          </Link>
          .
        </p>
      </GuideSection>

      {/* -------------------------------------------------------- Einrichtung */}
      <GuideSection
        id="einrichtung"
        eyebrow="Schritt für Schritt"
        title="IPTV Box einrichten: von der Installation bis zur Senderliste"
        tinted
        intro={
          <p>
            Der Ablauf ist bei fast allen Playern gleich. Menübezeichnungen unterscheiden sich je nach App und Hersteller,
            die Reihenfolge bleibt aber dieselbe.
          </p>
        }
      >
        <Illustration image={ANDROID_TV_IMAGES.setup} />
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="flex min-w-0 flex-col gap-5 rounded-3xl border border-accent/40 bg-background-elevated p-6 sm:p-7">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">In acht Schritten zum laufenden Sender</h3>
            <NumberedSteps steps={setupSteps} />
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <Note label="Programmzeitschrift">
              Fehlen Programmdaten trotz hinterlegter Adresse, hilft der Ratgeber{" "}
              <Link href="/anleitungen/epg-einrichten" className={inlineLink}>
                EPG für IPTV einrichten
              </Link>{" "}
              mit Tipps zur Zuordnung von Sendern.
            </Note>
            <Note label="Tipp">
              Notieren Sie Ihre Zugangsdaten an einem sicheren Ort. Bei einem Wechsel des Players oder einer neuen Box sind
              Sie dann in wenigen Minuten wieder startklar.
            </Note>
          </div>
        </div>
      </GuideSection>

      {/* ---------------------------------------------------------- Angebote */}
      <section id="angebote" aria-labelledby="angebote-heading" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-highlight/30 bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_0%_0%,rgba(59,130,246,0.16),transparent_70%),radial-gradient(ellipse_45%_60%_at_100%_100%,rgba(34,211,238,0.12),transparent_70%)]"
            />
            <div className="relative flex min-w-0 flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Einrichtungshilfe</span>
              <h2 id="angebote-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                Passendes IPTV-Angebot ansehen
              </h2>
              <p className="text-base leading-relaxed text-secondary">
                Sie möchten Ihre Android TV Box nicht allein einrichten? Wir begleiten Sie Schritt für Schritt – von der
                Player-Auswahl über die Eingabe der Zugangsdaten bis zum ersten laufenden Sender. Pakete gibt es ab{" "}
                {formatPrice(LOWEST_PRICE)} für 1, 2 oder 3 Geräte.
              </p>
              <p className="text-xs leading-relaxed text-muted">
                {PRICE_NOTE} {PLAN_SCOPE_NOTE}
              </p>
            </div>
            <div className="relative flex min-w-0 flex-col gap-5">
              <p className="text-sm font-semibold text-secondary">Laufzeit {durationLabel(FEATURED_DURATION)}:</p>
              <ul className="grid gap-3 sm:grid-cols-3">
                {featuredPrices.map((item) => (
                  <li
                    key={item.devices}
                    className={`flex flex-col gap-1 rounded-2xl border p-4 text-center ${
                      item.devices === 1 ? "border-accent/60 bg-accent/10" : "border-border-strong bg-background-elevated/80"
                    }`}
                  >
                    <span className="text-sm font-semibold text-secondary">{item.label}</span>
                    <span className="text-2xl font-extrabold text-foreground">{formatPrice(item.price)}</span>
                  </li>
                ))}
              </ul>
              <Button href="/angebote" className="w-full whitespace-nowrap sm:w-auto sm:self-start">
                Alle Laufzeiten und Preise
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Apps */}
      <GuideSection
        id="apps"
        eyebrow="Apps"
        title="IPTV Player für Android TV im Überblick"
        tinted
        intro={
          <p>
            Ein IPTV-Player spielt ab, was Ihr Anbieter liefert – er bringt selbst keine Sender mit. Bietet Ihr Anbieter
            eine eigene IPTV App für Android TV an, ist diese meist die einfachste Wahl. Für M3U und Xtream Codes sind
            diese Player verbreitet:
          </p>
        }
      >
        <ul className="grid gap-5 lg:grid-cols-3">
          {players.map((player) => (
            <li key={player.name} className="flex min-w-0 flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-6">
              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight">{player.tag}</span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{player.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{player.text}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                {player.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-secondary">
                    <CheckIcon className="mt-0.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">Kodi mit PVR IPTV Simple Client einrichten</h3>
            <NumberedSteps steps={kodiSteps} tone="blue" />
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <Note>{playersNote}</Note>
            <p className="text-sm leading-relaxed text-muted">
              Player für andere Geräte vergleicht unsere{" "}
              <Link href="/anleitungen#apps" className={inlineLink}>
                Übersicht der IPTV-Apps
              </Link>
              .
            </p>
          </div>
        </div>
      </GuideSection>

      {/* ----------------------------------------------------- Einstellungen */}
      <GuideSection
        id="einstellungen"
        eyebrow="Feinschliff"
        title="Typische Einstellungen im IPTV-Player"
        intro={
          <p>
            Die Standardwerte funktionieren oft gut. Wenn es ruckelt oder das Programm nicht stimmt, lohnt ein Blick in
            diese Optionen.
          </p>
        }
      >
        <DataTable label="Wichtige Einstellungen im IPTV-Player" {...playerSettings} />
      </GuideSection>

      {/* ------------------------------------------------------- Performance */}
      <GuideSection
        id="performance"
        eyebrow="Performance"
        title="IPTV 4K auf Android TV: Netzwerk, LAN und Leistung"
        tinted
        intro={
          <p>
            Die meisten Bildprobleme entstehen nicht in der Box, sondern auf dem Weg dorthin. Das Schema zeigt, warum ein
            Kabel oder 5-GHz-WLAN gerade bei 4K den Unterschied macht.
          </p>
        }
      >
        <Illustration
          image={ANDROID_TV_IMAGES.network}
          caption="Vereinfachte Darstellung. Die tatsächlichen Werte hängen von Router, Wohnung und Auslastung ab."
        />
        <CardGrid items={performanceCards} />
      </GuideSection>

      {/* ------------------------------------------------------------ Fehler */}
      <GuideSection
        id="fehler"
        eyebrow="Fehlerhilfe"
        title="Fehlerbehebung: Ursache erkennen, Problem lösen"
        intro={
          <p>
            Testen Sie zuerst mehrere Sender. Betrifft ein Problem nur einen Sender, liegt es meist am Stream. Tritt es
            überall auf, finden Sie hier die häufigsten Ursachen und konkrete Lösungen.
          </p>
        }
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {troubleshooting.map((item) => (
            <li key={item.problem} className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-5">
              <h3 className="text-lg font-semibold text-foreground">{item.problem}</h3>
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-secondary">Ursache: </span>
                {item.cause}
              </p>
              <p className="rounded-xl bg-accent/10 p-3 text-sm leading-relaxed text-secondary">
                <span className="font-semibold text-accent">Lösung: </span>
                {item.fix}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-muted">
          Weitere Hilfe bei Aussetzern bietet der Ratgeber{" "}
          <Link href="/anleitungen/iptv-ruckelt-loesungen" className={inlineLink}>
            IPTV ruckelt: Ursachen und Lösungen
          </Link>
          . Kommen Sie nicht weiter, schreiben Sie uns über die{" "}
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
        tinted
        intro={
          <p>
            Eine Android TV Box ist ein vollwertiger Computer im Heimnetz. Mit diesen Regeln schützen Sie Gerät,
            Google-Konto und Zugangsdaten. Woran Sie seriöse Dienste erkennen, erklärt der Ratgeber{" "}
            <Link href="/anleitungen/iptv-anbieter-erkennen" className={inlineLink}>
              seriöse IPTV-Anbieter erkennen
            </Link>
            .
          </p>
        }
      >
        <CardGrid items={securityPoints} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Note label="Software und Inhalte">
            <FormattedText text={legalNote} />
          </Note>
          <Note label="Ausblick">{verificationNote}</Note>
        </div>
      </GuideSection>

      {/* ------------------------------------------------------ Andere Geräte */}
      <section aria-labelledby="andere-geraete-heading" className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Andere Geräte</span>
            <h2 id="andere-geraete-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Keine Android TV Box? Diese Anleitungen helfen weiter
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
              Häufige Fragen zu IPTV auf Android TV und Google TV
            </h2>
            <p className="text-base leading-relaxed text-secondary">
              Mehr Antworten rund um IPTV finden Sie in den <Link href="/faq" className={inlineLink}>häufigen Fragen</Link>.
              Zur Rechtslage informiert die Seite <Link href="/iptv-legal" className={inlineLink}>Ist IPTV legal?</Link>
            </p>
          </div>
          <div className="min-w-0">
            <FaqList items={androidTvFaq} />
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
            Stand: {formatGuideDate(ANDROID_TV_UPDATED)}. App-Namen dienen nur der Beschreibung; Marken gehören ihren
            jeweiligen Inhabern. Wir stehen in keiner Verbindung zu Google oder den genannten App-Entwicklern.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Ihre Android TV Box will nicht so wie Sie?"
        description="Nennen Sie uns Hersteller, Modell und den Player, den Sie nutzen möchten. Wir prüfen mit Ihnen, ob die Box geeignet ist, und helfen Schritt für Schritt bei der Einrichtung."
        whatsappLink={deviceWhatsAppLink(device.name)}
      />
    </>
  );
}
