import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FormattedText } from "@/components/content/FormattedText";
import { GuideSection, GuideToc, Illustration, Note, NumberedSteps, formatGuideDate, inlineLink } from "@/components/content/GuideBlocks";
import { PriceTable } from "@/components/plans/PriceTable";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  LEGAL_IPTV_IMAGES as IMAGES,
  LEGAL_IPTV_PHOTOS as PHOTOS,
  LEGAL_IPTV_PUBLISHED,
  LEGAL_IPTV_UPDATED,
  cheapNote,
  cheapReasons,
  comparison,
  comparisonNote,
  distributionSteps,
  filmspelerNote,
  filmspelerPoints,
  heroFacts,
  legalIptvFaq,
  legalIptvMeta,
  legalOptions,
  legalOptionsIntro,
  legalOptionsNote,
  legitimateSigns,
  legitimateSignsNote,
  moreLinks,
  offerDisclaimer,
  offerScopePoints,
  playerTools,
  playerToolsNote,
  premiumParagraphs,
  quickAnswers,
  rightsIntro,
  sources,
  supportDisclaimer,
  supportParagraph,
  technologyVsContent,
  tocItems,
  warningSigns,
  warningSignsNote,
  whatIsIllegal,
  whatIsIptv,
} from "@/lib/legal-iptv";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

/*
 * /iptv-legal – SEO focus: "IPTV legal oder illegal", "IPTV illegal", "IPTV legal", "IPTV Anbieter illegal".
 * Copy lives in lib/legal-iptv.ts; prices come from lib/plans.ts through the shared PriceTable.
 * The offers are setup help and support only: never word them as licensed TV packages.
 */

const PATH = "/iptv-legal";
const OG_IMAGE = {
  url: `${PATH}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "IPTV legal oder illegal in Deutschland – Unterschiede und Preise",
};

export const metadata: Metadata = pageMetadata({
  title: legalIptvMeta.seoTitle,
  absoluteTitle: true,
  description: legalIptvMeta.metaDescription,
  path: PATH,
  type: "article",
  publishedTime: LEGAL_IPTV_PUBLISHED,
  modifiedTime: LEGAL_IPTV_UPDATED,
  image: OG_IMAGE,
});

const quickToneStyles = {
  legal: "border-emerald-400/30 hover:border-emerald-400/60",
  illegal: "border-amber-400/30 hover:border-amber-400/60",
  offer: "border-accent/30 hover:border-accent/60",
} as const;

function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-4 text-base leading-relaxed text-secondary">
      {items.map((text) => (
        <p key={text}>
          <FormattedText text={text} />
        </p>
      ))}
    </div>
  );
}

function SubHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-20 text-xl font-semibold tracking-tight text-balance text-foreground sm:text-2xl">
      {children}
    </h3>
  );
}

/** One H3 topic: text next to its illustration from the lg breakpoint. */
function Topic({ title, image, reverse = false, children }: { title: string; image: (typeof IMAGES)[keyof typeof IMAGES]; reverse?: boolean; children: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={`flex min-w-0 flex-col gap-4 ${reverse ? "lg:order-2" : ""}`}>
        <SubHeading>{title}</SubHeading>
        {children}
      </div>
      <Illustration image={image} className={`min-w-0 ${reverse ? "lg:order-1" : ""}`} />
    </div>
  );
}

/**
 * Illustrative photo with its neutral caption. `beside` puts the caption next to the photo from lg upwards.
 * The static import supplies width, height and a blur placeholder, so the layout doesn't shift while it loads.
 */
function PhotoFigure({ photo, beside = false }: { photo: (typeof PHOTOS)[keyof typeof PHOTOS]; beside?: boolean }) {
  return (
    <figure className={`flex min-w-0 flex-col gap-3 ${beside ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-12" : ""}`}>
      <div className="min-w-0 overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/30">
        <Image
          src={photo.image}
          alt={photo.alt}
          sizes="(min-width: 1152px) 520px, (min-width: 1024px) 46vw, calc(100vw - 2rem)"
          placeholder="blur"
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="min-w-0 text-xs leading-relaxed text-muted lg:text-sm">{photo.caption}</figcaption>
    </figure>
  );
}

function CardGrid({ items, columns = "sm:grid-cols-2 lg:grid-cols-3" }: { items: readonly { title: string; text: string }[]; columns?: string }) {
  return (
    <ul className={`grid gap-4 ${columns}`}>
      {items.map((item) => (
        <li key={item.title} className="flex min-w-0 flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
          <p className="font-semibold text-foreground">{item.title}</p>
          <p className="text-sm leading-relaxed text-muted">
            <FormattedText text={item.text} />
          </p>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items, tone = "accent", columns = "" }: { items: readonly string[]; tone?: "accent" | "warn"; columns?: string }) {
  return (
    <ul className={`grid gap-3 ${columns}`}>
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3 text-sm leading-relaxed text-secondary sm:text-base">
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

/** Below md each row becomes a labelled card, so the table never needs horizontal scrolling on phones. */
function ComparisonTable() {
  const [criterionLabel, licensedLabel, suspiciousLabel] = comparison.headers;
  return (
    <figure className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="block w-full border-collapse text-left text-sm md:table">
          <caption className="sr-only">Vergleich lizenzierter Dienste und verdächtiger IPTV-Angebote</caption>
          <thead className="hidden md:table-header-group">
            <tr className="bg-surface">
              <th scope="col" className="w-1/4 border-b border-border px-4 py-3 font-semibold text-foreground">{criterionLabel}</th>
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-emerald-300">{licensedLabel}</th>
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-amber-300">{suspiciousLabel}</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {comparison.rows.map(([criterion, licensed, suspicious]) => (
              <tr key={criterion} className="block border-b border-border last:border-b-0 odd:bg-background even:bg-background-elevated md:table-row md:align-top">
                <th scope="row" className="block px-4 pt-4 text-base font-semibold text-foreground md:table-cell md:border-b md:border-border md:py-3 md:text-sm">
                  {criterion}
                </th>
                <td className="block px-4 pt-3 leading-relaxed text-secondary md:table-cell md:border-b md:border-border md:py-3">
                  <span className="mb-1 block text-xs font-semibold text-emerald-300 md:hidden">{licensedLabel}</span>
                  {licensed}
                </td>
                <td className="block px-4 pt-3 pb-4 leading-relaxed text-secondary md:table-cell md:border-b md:border-border md:py-3">
                  <span className="mb-1 block text-xs font-semibold text-amber-300 md:hidden">{suspiciousLabel}</span>
                  {suspicious}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="text-sm leading-relaxed text-secondary">{comparisonNote}</figcaption>
    </figure>
  );
}

export default function IptvLegalPage() {
  const pageUrl = absoluteUrl(PATH);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: legalIptvMeta.headline,
          description: legalIptvMeta.metaDescription,
          inLanguage: SITE.language,
          datePublished: LEGAL_IPTV_PUBLISHED,
          dateModified: LEGAL_IPTV_UPDATED,
          image: [absoluteUrl(OG_IMAGE.url)],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          about: [
            { "@type": "Thing", name: "IPTV" },
            { "@type": "Thing", name: "Urheberrecht" },
          ],
        }}
      />
      <JsonLd data={faqJsonLd(legalIptvFaq)} />

      <Breadcrumbs items={[{ label: "IPTV legal oder illegal", href: PATH }]} />

      {/* ------------------------------------------------------------ Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-grid absolute inset-0" />
        <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
          <div className="flex min-w-0 flex-col gap-6">
            <span className="w-fit rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-secondary">
              Rechtliche Orientierung · Stand November 2026
            </span>
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              IPTV legal oder illegal in Deutschland? <span className="text-gradient">Unterschiede und Preise</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              IPTV ist zunächst nur eine Technik. Ob ein Angebot rechtmäßig ist, hängt von den Rechten an den gezeigten
              Sendern und Inhalten ab. Hier lesen Sie, wie Sie lizenzierte Dienste von illegalen IPTV Anbietern
              unterscheiden und was unsere Einrichtungshilfe kostet.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#iptv-legal">IPTV legal</Button>
              <Button href="#iptv-illegal" variant="secondary">IPTV illegal</Button>
              <Button href="/angebote" variant="secondary">Angebote ansehen</Button>
            </div>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={LEGAL_IPTV_UPDATED}>{formatGuideDate(LEGAL_IPTV_UPDATED)}</time> ·{" "}
              {legalIptvMeta.readingTimeMinutes} Min. Lesezeit · Allgemeine Information, keine Rechtsberatung
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <div className="overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40">
              <Image src={IMAGES.hero.src} alt={IMAGES.hero.alt} width={IMAGES.hero.width} height={IMAGES.hero.height} preload className="h-auto w-full" />
            </div>
            <dl className="grid gap-3 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 rounded-2xl border border-border-strong bg-background-elevated/90 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{fact.label}</dt>
                  <dd className="text-sm font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Short answer + TOC */}
      <section aria-labelledby="kurz-heading" className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <h2 id="kurz-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
              IPTV legal oder illegal: die kurze Antwort
            </h2>
            <ul className="flex flex-col gap-4">
              {quickAnswers.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`flex flex-col gap-2 rounded-2xl border bg-background-elevated p-5 transition-colors ${quickToneStyles[item.tone]}`}
                  >
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <span className="text-sm leading-relaxed text-secondary sm:text-base">{item.text}</span>
                    <span className="text-sm font-semibold text-accent">
                      {item.link} <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <GuideToc title="Inhalt" items={tocItems} />
        </Container>
      </section>

      {/* ------------------------------------------------------ Section 1: legal */}
      <GuideSection
        id="iptv-legal"
        eyebrow="Teil 1 · IPTV legal"
        title="IPTV legal: Was die Technik darf und worauf es ankommt"
        intro={<p>IPTV legal in Deutschland zu nutzen ist gut möglich. Dafür hilft es, Technik und Inhalte getrennt zu betrachten.</p>}
        tinted
      >
        <Topic title="Was ist IPTV und wie funktioniert es?" image={IMAGES.technology}>
          <Paragraphs items={whatIsIptv} />
        </Topic>

        <Topic title="Ist IPTV legal? Die Technik und die Inhalte" image={IMAGES.layers} reverse>
          <Paragraphs items={technologyVsContent} />
        </Topic>

        <PhotoFigure photo={PHOTOS.interface} beside />

        <Topic title="IPTV Urheberrecht: Warum Senderechte und Lizenzen zählen" image={IMAGES.rights}>
          <Paragraphs items={rightsIntro} />
        </Topic>

        <div className="flex flex-col gap-5">
          <SubHeading>Sind IPTV-Apps, M3U-Playlists und Xtream Codes legal?</SubHeading>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-12">
            <PhotoFigure photo={PHOTOS.player} />
            <CardGrid items={playerTools} columns="min-w-0" />
          </div>
          <Note>{playerToolsNote}</Note>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Seriöse IPTV Anbieter erkennen</SubHeading>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-12">
            <CheckList items={legitimateSigns} columns="min-w-0" />
            <PhotoFigure photo={PHOTOS.family} />
          </div>
          <Note>
            <FormattedText text={legitimateSignsNote} />
          </Note>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>IPTV Anbieter in Deutschland: legale Möglichkeiten</SubHeading>
          <p className="text-base leading-relaxed text-secondary">{legalOptionsIntro}</p>
          {/* Above the cards on purpose: this photo shows third-party brands and must not sit next to our prices. */}
          <PhotoFigure photo={PHOTOS.guide} beside />
          <CardGrid items={legalOptions} />
          <p className="text-xs leading-relaxed text-muted">{legalOptionsNote}</p>
        </div>

        {/* First offers CTA */}
        <div id="angebote-einrichtung" className="scroll-mt-20 grid gap-8 rounded-3xl border border-accent/40 bg-surface p-5 sm:p-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex min-w-0 flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Unsere Angebote</span>
            <SubHeading>IPTV Preise und Kosten unserer Einrichtungshilfe</SubHeading>
            <p className="text-base leading-relaxed text-secondary">
              Sie haben sich für einen Dienst entschieden und möchten ihn auf Ihren Geräten einrichten? Dabei helfen wir
              Ihnen. Die IPTV Kosten richten sich bei uns nach der Anzahl der Geräte und der Laufzeit. Das ist in den
              Angeboten enthalten:
            </p>
            <CheckList items={offerScopePoints} />
            <Note label="Wichtig">{offerDisclaimer}</Note>
            <Button href="/angebote" className="w-full sm:w-fit">
              Angebote und Preise ansehen
            </Button>
          </div>
          {/* Lifts PriceTable's 420px minimum here, so all prices fit on a phone without sideways scrolling. */}
          <div className="min-w-0 [&_table]:min-w-0 max-sm:[&_td]:px-2.5 max-sm:[&_th]:px-2.5 max-sm:[&_th_span]:ml-0 max-sm:[&_th_span]:block">
            <PriceTable />
          </div>
        </div>
      </GuideSection>

      {/* ---------------------------------------------------- Section 2: illegal */}
      <GuideSection
        id="iptv-illegal"
        eyebrow="Teil 2 · IPTV illegal"
        title="IPTV illegal: Was illegale IPTV Anbieter ausmacht"
        intro={<p>Ist IPTV illegal? Nicht als Technik. Wer nach „IPTV illegal Anbieter“ sucht, möchte meist wissen, wie sich Angebote einordnen lassen, die Sender und Inhalte ohne die nötigen Rechte verbreiten.</p>}
      >
        <Topic title="Was bedeutet illegales IPTV?" image={IMAGES.unlicensed}>
          <Paragraphs items={whatIsIllegal} />
        </Topic>

        <div className="flex flex-col gap-5">
          <SubHeading>Wie Sender ohne Senderechte verbreitet werden</SubHeading>
          <NumberedSteps steps={distributionSteps} />
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Was der EuGH im Filmspeler-Urteil entschieden hat</SubHeading>
          <p className="text-base leading-relaxed text-secondary">
            Am 26. April 2017 hat der Europäische Gerichtshof in der Rechtssache{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:62015CJ0527"
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              C-527/15
            </a>{" "}
            zwei Punkte klargestellt:
          </p>
          <CardGrid items={filmspelerPoints} columns="md:grid-cols-2" />
          <p className="text-sm leading-relaxed text-muted">{filmspelerNote}</p>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>IPTV günstig: Warum sind manche Angebote so billig?</SubHeading>
          <CheckList items={cheapReasons} tone="warn" />
          <Note>{cheapNote}</Note>
        </div>

        <Topic title="Tausende Sport- und Premium-Sender zum Kleinstpreis" image={IMAGES.warning} reverse>
          <Paragraphs items={premiumParagraphs} />
        </Topic>

        <div className="flex flex-col gap-5">
          <SubHeading>IPTV Anbieter illegal? Diese Warnsignale helfen beim Erkennen</SubHeading>
          <CheckList items={warningSigns} tone="warn" columns="md:grid-cols-2 md:gap-x-8" />
          <Note>
            <FormattedText text={warningSignsNote} />
          </Note>
        </div>

        <div id="vergleich" className="flex scroll-mt-20 flex-col gap-5">
          <SubHeading>Vergleich: lizenzierte Dienste und verdächtige Angebote</SubHeading>
          <ComparisonTable />
        </div>

        {/* Second offers CTA */}
        <div id="unterstuetzung" className="hero-glow flex scroll-mt-20 flex-col gap-5 rounded-3xl border border-accent/40 bg-surface p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex min-w-0 flex-col gap-3">
            <SubHeading>Sie suchen Unterstützung bei der IPTV-Einrichtung?</SubHeading>
            <p className="text-base leading-relaxed text-secondary">
              <FormattedText text={supportParagraph} />
            </p>
            <p className="text-sm font-medium leading-relaxed text-foreground">{supportDisclaimer}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/angebote" className="w-full whitespace-nowrap sm:w-auto">
              Zu den Angeboten
            </Button>
            <Button href="/kontakt" variant="secondary" className="w-full whitespace-nowrap sm:w-auto">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </GuideSection>

      {/* ---------------------------------------------------------------- FAQ */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 border-y border-border bg-background-elevated/40 py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-3">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
              Häufige Fragen zu IPTV legal und illegal
            </h2>
            <p className="text-base leading-relaxed text-secondary">
              Weitere Antworten finden Sie in unseren{" "}
              <Link href="/faq" className={inlineLink}>
                allgemeinen FAQ
              </Link>
              .
            </p>
          </div>
          <FaqList items={legalIptvFaq} />
        </Container>
      </section>

      {/* ------------------------------------------------- Further links */}
      <nav aria-labelledby="mehr-heading" className="py-14 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h2 id="mehr-heading" className="text-2xl font-bold tracking-tight text-foreground">
            Weiterlesen
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex h-full min-h-12 items-center justify-between gap-3 rounded-xl border border-border bg-background-elevated px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* ------------------------------------------------------------ Sources */}
      <section id="quellen" aria-labelledby="quellen-heading" className="scroll-mt-20 border-t border-border py-14 sm:py-20">
        <Container className="flex flex-col gap-5">
          <h2 id="quellen-heading" className="text-2xl font-bold tracking-tight text-foreground">
            Quellen und rechtlicher Hinweis
          </h2>
          <Note label="Keine Rechtsberatung">
            Diese Seite dient der allgemeinen Information und ersetzt keine Rechtsberatung. Bei Fragen zu einem konkreten
            Angebot wenden Sie sich an eine Rechtsanwältin, einen Rechtsanwalt oder eine Verbraucherzentrale.
          </Note>
          <ul className="grid gap-2 md:grid-cols-2 md:gap-x-8">
            {sources.map((source) => (
              <li key={source.href} className="min-w-0 text-sm leading-relaxed text-muted">
                <a href={source.href} target="_blank" rel="noopener noreferrer" className={`${inlineLink} break-words`}>
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed text-muted">
            Stand: {formatGuideDate(LEGAL_IPTV_UPDATED)}. Genannte oder in Symbolbildern sichtbare Marken, Logos und Titel
            gehören ihren jeweiligen Inhabern und dienen nur der Beschreibung oder Illustration. Sie sind kein Angebot von
            uns.
          </p>
        </Container>
      </section>
    </>
  );
}
