import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

type LegalPageProps = {
  title: string;
  path: string;
  updated?: string;
  children: ReactNode;
};

/** Shared layout for Impressum, Datenschutz, AGB and Widerruf with consistent typography. */
export function LegalPage({ title, path, updated, children }: LegalPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: title, href: path }]} />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-base leading-relaxed text-secondary [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:font-semibold [&_h3]:text-foreground [&_strong]:text-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:pl-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
            {updated ? (
              <p className="text-xs text-muted">
                Stand:{" "}
                {new Date(updated).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            ) : null}
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
