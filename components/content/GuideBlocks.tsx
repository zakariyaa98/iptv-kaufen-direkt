import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/*
 * Layout building blocks shared by the long-form device guides (/geraete/smart-tv, /geraete/fire-tv-stick).
 * Copy stays in lib/*-content.ts; these components only handle presentation.
 */

export const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";

export type GuideImage = { src: string; width: number; height: number; alt: string };

export function formatGuideDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
}

export function GuideSection({
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
      className={`scroll-mt-20 py-14 sm:py-20 ${tinted ? "border-y border-border bg-background-elevated/40" : ""}`}
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

/** SVG illustration rendered through next/image (SVGs are served unoptimized automatically). */
export function Illustration({ image, caption, className = "" }: { image: GuideImage; caption?: string; className?: string }) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div className="overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/30">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="h-auto w-full" />
      </div>
      {caption ? <figcaption className="text-xs leading-relaxed text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

export function DataTable({
  label,
  headers,
  rows,
  caption,
}: {
  label: string;
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="w-full overflow-x-auto rounded-2xl border border-border">
        <table aria-label={label} className="w-full min-w-[600px] border-collapse text-left text-sm">
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
                {rest.map((cell, index) => (
                  <td key={index} className="border-b border-border px-4 py-3 leading-relaxed text-secondary">
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

export function NumberedSteps({ steps, tone = "accent" }: { steps: string[]; tone?: "accent" | "blue" }) {
  const badge = tone === "accent" ? "bg-accent text-accent-ink" : "bg-blue-500 text-white";
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <li key={step} className="flex items-start gap-4 text-base leading-relaxed text-secondary">
          <span aria-hidden className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${badge}`}>
            {index + 1}
          </span>
          <span className="pt-1">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function TipGrid({ tips, title }: { tips: { title: string; text: string }[]; title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {tips.map((tip) => (
          <li key={tip.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5">
            <p className="font-semibold text-foreground">{tip.title}</p>
            <p className="text-sm leading-relaxed text-muted">{tip.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Note({ children, label = "Hinweis" }: { children: ReactNode; label?: string }) {
  return (
    <p className="rounded-2xl border-l-4 border-highlight bg-highlight/10 p-4 text-sm leading-relaxed text-secondary sm:p-5">
      <strong className="text-foreground">{label}: </strong>
      {children}
    </p>
  );
}

/** Numbered table of contents card used next to the key facts. */
export function GuideToc({ title, items }: { title: string; items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-labelledby="toc-heading"
      className="h-fit rounded-3xl border border-border-strong bg-background-elevated/90 p-6 shadow-2xl shadow-black/30 sm:p-7"
    >
      <h2 id="toc-heading" className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
        {title}
      </h2>
      <ol className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item, index) => (
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
  );
}
