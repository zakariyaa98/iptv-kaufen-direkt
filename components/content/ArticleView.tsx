import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { FormattedText } from "@/components/content/FormattedText";
import { CtaBanner } from "@/components/sections/CtaBanner";
import type { Article } from "@/lib/content-types";
import { SITE, absoluteUrl } from "@/lib/site";

type Crumb = { label: string; href: string };

type ArticleViewProps = {
  article: Article;
  /** Canonical path of this page, e.g. "/geraete/fire-tv-stick". */
  path: string;
  /** Breadcrumbs after "Startseite"; the last item is this page. */
  breadcrumbs: Crumb[];
  eyebrow?: string;
  /** Optional prefilled WhatsApp link for the closing call to action. */
  whatsappLink?: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
}

export function ArticleView({ article, path, breadcrumbs, eyebrow, whatsappLink }: ArticleViewProps) {
  const modified = article.updatedAt ?? article.publishedAt;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          inLanguage: SITE.language,
          datePublished: article.publishedAt,
          dateModified: modified,
          image: [absoluteUrl("/opengraph-image")],
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
        }}
      />
      {article.faq.length > 0 ? <JsonLd data={faqJsonLd(article.faq)} /> : null}

      <Breadcrumbs items={breadcrumbs} />

      <article className="py-12 sm:py-16">
        <Container className="flex flex-col gap-10">
          <header className="mx-auto flex w-full max-w-3xl flex-col gap-5">
            {eyebrow ? (
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">{eyebrow}</span>
            ) : null}
            <h1 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="text-xs text-muted">
              Aktualisiert am <time dateTime={modified}>{formatDate(modified)}</time> ·{" "}
              {article.readingTimeMinutes} Min. Lesezeit
            </p>
          </header>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-secondary sm:text-lg">
              {article.intro.map((paragraph, index) => (
                <p key={index}>
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </div>

            {article.summary && article.summary.length > 0 ? (
              <section
                aria-labelledby="summary-heading"
                className="flex flex-col gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-6"
              >
                <h2 id="summary-heading" className="text-lg font-semibold text-foreground">
                  Das Wichtigste in Kürze
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {article.summary.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-secondary sm:text-base">
                      <CheckIcon className="text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {article.sections.length > 3 ? (
              <nav aria-label="Inhaltsverzeichnis" className="rounded-2xl border border-border bg-background-elevated p-6">
                <h2 className="text-base font-semibold text-foreground">Inhalt</h2>
                <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm text-muted marker:text-muted">
                  {article.sections.map((section) => (
                    <li key={section.heading}>
                      <a href={`#${slugify(section.heading)}`} className="hover:text-accent">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {article.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <h2
                  id={slugify(section.heading)}
                  className="scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground"
                >
                  {section.heading}
                </h2>

                {section.body?.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-secondary">
                    <FormattedText text={paragraph} />
                  </p>
                ))}

                {section.steps ? (
                  <ol className="flex flex-col gap-3">
                    {section.steps.map((step, index) => (
                      <li key={step} className="flex items-start gap-4 text-base leading-relaxed text-secondary">
                        <span
                          aria-hidden
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent"
                        >
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}

                {section.list ? (
                  <ul className="flex flex-col gap-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
                        <CheckIcon className="mt-1 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.table ? (
                  <figure className="flex flex-col gap-2">
                    <div className="w-full overflow-x-auto rounded-2xl border border-border">
                      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="bg-surface">
                            {section.table.headers.map((header) => (
                              <th key={header} scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="odd:bg-background even:bg-background-elevated">
                              {row.map((cell, cellIndex) =>
                                cellIndex === 0 ? (
                                  <th key={cellIndex} scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">
                                    {cell}
                                  </th>
                                ) : (
                                  <td key={cellIndex} className="border-b border-border px-4 py-3 text-secondary">
                                    {cell}
                                  </td>
                                )
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {section.table.caption ? (
                      <figcaption className="text-xs text-muted">{section.table.caption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}

                {section.note ? (
                  <p className="rounded-2xl border-l-4 border-highlight bg-highlight/10 p-4 text-sm leading-relaxed text-secondary">
                    <strong className="text-foreground">Hinweis: </strong>
                    {section.note}
                  </p>
                ) : null}
              </section>
            ))}

            {article.faq.length > 0 ? (
              <section aria-labelledby="faq-heading" className="flex flex-col gap-5">
                <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-foreground">
                  Häufige Fragen
                </h2>
                <FaqList items={article.faq} />
              </section>
            ) : null}

            {article.related && article.related.length > 0 ? (
              <nav aria-labelledby="related-heading" className="flex flex-col gap-4 border-t border-border pt-8">
                <h2 id="related-heading" className="text-lg font-semibold text-foreground">
                  Weiterlesen
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {article.related.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-background-elevated px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {link.label}
                        <span aria-hidden>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
        </Container>
      </article>

      <CtaBanner whatsappLink={whatsappLink} />
    </>
  );
}
