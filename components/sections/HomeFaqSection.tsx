import Link from "next/link";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeFaq } from "@/lib/home-content";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

/**
 * Homepage FAQ. Built on native <details>/<summary>, so it is keyboard- and
 * screen-reader-accessible and works without JavaScript.
 * No FAQPage JSON-LD here: /faq already carries it.
 */
export function HomeFaqSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="faq-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_10%_15%,rgba(167,139,250,0.08),transparent_70%),radial-gradient(ellipse_45%_35%_at_90%_85%,rgba(34,211,238,0.07),transparent_70%)]"
      />
      <Container className="relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-8">
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">FAQ</span>
          <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            Häufig gestellte Fragen zu IPTV
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Die wichtigsten Antworten rund um IPTV in Deutschland – kurz, verständlich und ohne Fachchinesisch.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {homeFaq.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-2xl border border-border bg-background-elevated transition-colors duration-200 hover:border-border-strong open:border-accent/40 open:bg-[linear-gradient(135deg,rgba(34,211,238,0.06),transparent_60%)] open:shadow-lg open:shadow-black/20"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl p-5 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-6 [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden
                  className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border-strong text-xs font-bold tabular-nums text-muted transition-colors group-open:border-accent/40 group-open:bg-accent/10 group-open:text-accent sm:flex"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base font-semibold leading-snug text-foreground sm:text-lg">{item.question}</span>
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent transition-all duration-200 group-open:rotate-45 group-open:border-accent/40 group-open:bg-accent/10"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="flex flex-col gap-3 px-5 pb-5 sm:pb-6 sm:pl-[4.75rem] sm:pr-6">
                <p className="text-sm leading-relaxed text-secondary sm:text-base">{item.answer}</p>
                {item.link ? (
                  <Link href={item.link.href} className="w-fit text-sm font-semibold text-accent hover:text-accent-soft">
                    {item.link.label} <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </details>
          ))}
        </div>

        {/* Help card */}
        <aside
          aria-labelledby="faq-help-heading"
          className="flex flex-col gap-4 self-start rounded-3xl border border-border bg-background-elevated p-6 sm:p-8 lg:sticky lg:top-28 lg:col-start-1 lg:row-start-2"
        >
          <h3 id="faq-help-heading" className="text-lg font-semibold text-foreground">
            Ihre Frage ist nicht dabei?
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            Schreiben Sie uns einfach. Wir beantworten Ihre Frage persönlich und sagen Ihnen ehrlich, was mit Ihren
            Geräten möglich ist.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={WHATSAPP_DEFAULT_LINK} external variant="whatsapp" className="w-full sm:w-auto lg:w-full">
              <WhatsAppIcon className="h-5 w-5" />
              Frage per WhatsApp stellen
            </Button>
            <Button href="/faq" variant="secondary" className="w-full sm:w-auto lg:w-full">
              Alle Fragen ansehen
            </Button>
          </div>
        </aside>
      </Container>
    </section>
  );
}
