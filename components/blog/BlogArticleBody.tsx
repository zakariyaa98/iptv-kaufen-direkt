import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { FormattedText } from "@/components/content/FormattedText";
import { slugify } from "@/lib/blog";
import { LOWEST_PRICE, PLAN_SCOPE_NOTE, PRICE_NOTE, formatPrice } from "@/lib/plans";
import type { BlogBlock, BlogSection } from "@/lib/blog/types";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-secondary sm:text-[1.0625rem]">
          <FormattedText text={block.text} />
        </p>
      );

    case "h3":
      return (
        <h3 id={slugify(block.text)} className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-foreground">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-secondary">
              <CheckIcon className="mt-1 text-accent" />
              <span className="min-w-0">
                <FormattedText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="flex flex-col gap-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex items-start gap-4 text-base leading-relaxed text-secondary">
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent"
              >
                {index + 1}
              </span>
              <span className="min-w-0 pt-0.5">
                <FormattedText text={item} />
              </span>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <figure className="flex min-w-0 flex-col gap-2">
          <div className="w-full overflow-x-auto rounded-2xl border border-border" tabIndex={0} role="region" aria-label={block.caption ?? "Tabelle"}>
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-surface">
                  {block.headers.map((header) => (
                    <th key={header} scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="odd:bg-background even:bg-background-elevated">
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th key={cellIndex} scope="row" className="border-b border-border px-4 py-3 align-top font-medium text-foreground">
                          {cell}
                        </th>
                      ) : (
                        <td key={cellIndex} className="border-b border-border px-4 py-3 align-top text-secondary">
                          {cell}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? <figcaption className="text-xs leading-relaxed text-muted">{block.caption}</figcaption> : null}
        </figure>
      );

    case "note":
      return (
        <div className="rounded-2xl border-l-4 border-highlight bg-highlight/10 p-4 text-sm leading-relaxed text-secondary sm:p-5 sm:text-base">
          <strong className="text-foreground">{block.title ?? "Hinweis"}: </strong>
          <FormattedText text={block.text} />
        </div>
      );

    case "code":
      return (
        <figure className="flex min-w-0 flex-col gap-2">
          <pre className="overflow-x-auto rounded-2xl border border-border bg-background p-4 text-[0.8125rem] leading-relaxed text-accent-soft">
            <code>{block.code}</code>
          </pre>
          {block.caption ? <figcaption className="text-xs leading-relaxed text-muted">{block.caption}</figcaption> : null}
        </figure>
      );

    case "cta":
      return (
        <aside
          aria-label={block.title}
          className="relative my-2 overflow-hidden rounded-3xl border border-accent/30 bg-surface p-6 sm:p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_0%,rgba(34,211,238,0.14),transparent_70%),radial-gradient(ellipse_40%_60%_at_100%_100%,rgba(167,139,250,0.10),transparent_70%)]"
          />
          <div className="relative flex flex-col gap-4">
            <span className="w-fit rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              Pakete ab {formatPrice(LOWEST_PRICE)} · für 1, 2 oder 3 Geräte
            </span>
            <p className="text-xl font-semibold tracking-tight text-balance text-foreground sm:text-2xl">{block.title}</p>
            <p className="text-base leading-relaxed text-secondary">{block.text}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={block.primary.href} className="w-full sm:w-auto">
                {block.primary.label}
                <span aria-hidden>→</span>
              </Button>
              {block.secondary ? (
                <Button href={block.secondary.href} variant="secondary" className="w-full sm:w-auto">
                  {block.secondary.label}
                </Button>
              ) : null}
            </div>
            <p className="text-xs leading-relaxed text-muted">
              {PLAN_SCOPE_NOTE} {PRICE_NOTE}
            </p>
          </div>
        </aside>
      );

    case "image":
      return (
        <figure className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(min-width: 768px) 768px, 100vw"
              className="h-auto w-full"
            />
          </div>
          {block.caption ? <figcaption className="text-xs leading-relaxed text-muted">{block.caption}</figcaption> : null}
        </figure>
      );
  }
}

/** Renders the H2 sections of a blog article. */
export function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} aria-labelledby={slugify(section.heading)} className="flex flex-col gap-4">
          <h2
            id={slugify(section.heading)}
            className="scroll-mt-24 text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-[1.75rem]"
          >
            {section.heading}
          </h2>
          {section.blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </section>
      ))}
    </>
  );
}
