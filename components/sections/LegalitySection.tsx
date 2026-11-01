import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { legalComparison, legalityNote, legalityParagraphs, legalQuickFacts, legalRisks } from "@/lib/home-content";

const toneStyles = {
  ok: { ring: "border-accent/30 bg-accent/10 text-accent", symbol: "✓" },
  info: { ring: "border-highlight/30 bg-highlight/10 text-highlight", symbol: "§" },
  warn: { ring: "border-amber-400/30 bg-amber-400/10 text-amber-300", symbol: "!" },
} as const;

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden className={className}>
      <path d="M6 6l8 8M14 6l-8 8" />
    </svg>
  );
}

export function LegalitySection() {
  const { legal, illegal } = legalComparison;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="legal-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_20%_10%,rgba(34,211,238,0.07),transparent_70%),radial-gradient(ellipse_55%_35%_at_85%_60%,rgba(248,113,113,0.06),transparent_70%)]"
      />
      <Container className="relative flex flex-col gap-12 sm:gap-14">
        {/* Heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Recht & Sicherheit</span>
          <h2
            id="legal-heading"
            className="scroll-mt-24 text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl"
          >
            Ist IPTV in Deutschland legal?
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Die kurze Antwort: Ja – die Technik ist legal. Ob ein konkretes Angebot legal ist, hängt allein davon ab,
            ob der Anbieter die Rechte an den Sendern und Inhalten besitzt.
          </p>
        </div>

        {/* Quick facts */}
        <ul className="grid gap-4 md:grid-cols-3">
          {legalQuickFacts.map((fact) => {
            const tone = toneStyles[fact.tone];
            return (
              <li key={fact.title} className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
                <span
                  aria-hidden
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-base font-bold ${tone.ring}`}
                >
                  {tone.symbol}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">{fact.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{fact.text}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Legal vs. unauthorized */}
        <div className="flex flex-col gap-6">
          <h3 className="text-center text-xl font-semibold text-foreground sm:text-2xl">
            So unterscheiden Sie legale von nicht autorisierten Angeboten
          </h3>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-5 rounded-3xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <CheckIcon className="mt-0 h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{legal.title}</h4>
                  <p className="text-sm text-muted">{legal.subtitle}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {legal.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-secondary">
                    <CheckIcon className="text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-accent/20 pt-4 text-sm leading-relaxed text-muted">{legal.examples}</p>
            </div>

            <div className="flex flex-col gap-5 rounded-3xl border border-red-400/30 bg-red-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                  <CrossIcon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{illegal.title}</h4>
                  <p className="text-sm text-muted">{illegal.subtitle}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {illegal.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-secondary">
                    <CrossIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-red-400/20 pt-4 text-sm leading-relaxed text-muted">{illegal.examples}</p>
            </div>
          </div>
        </div>

        {/* Background + risks */}
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">Was sagt das Recht?</h3>
            {legalityParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-secondary sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-amber-400/25 bg-amber-400/5 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">Die Risiken illegaler Angebote</h3>
            <ul className="flex flex-col gap-4">
              {legalRisks.map((risk) => (
                <li key={risk.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-sm font-bold text-amber-300"
                  >
                    !
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold text-foreground">{risk.title}</p>
                    <p className="text-sm leading-relaxed text-muted">{risk.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our stance + CTA */}
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-highlight/30 bg-highlight/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">Unsere Haltung</p>
            <p className="text-base leading-relaxed text-secondary">
              Wir verkaufen keine Senderpakete und keine Zugangsdaten. Wir helfen ausschließlich bei der Einrichtung
              legaler Dienste – und sagen Ihnen offen, wenn ein Angebot problematisch ist.
            </p>
            <p className="text-xs text-muted">{legalityNote}</p>
          </div>
          <Button href="/iptv-legal" variant="primary" className="w-full shrink-0 sm:w-auto">
            IPTV legal in Deutschland
          </Button>
        </div>
      </Container>
    </section>
  );
}
