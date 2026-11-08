import Image from "next/image";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { FormattedText } from "@/components/content/FormattedText";
import { slugify } from "@/lib/blog";
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
