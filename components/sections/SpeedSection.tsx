import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  speedConnections,
  speedExample,
  speedQuickFacts,
  speedStability,
  speedTiers,
  speedTiersNote,
  type SpeedConnection,
} from "@/lib/home-content";
import speedImage from "@/public/images/home page/welche/Welche Internetgeschwindigkeit benötigt IPTV.webp";

const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";

/** The comparison bars are scaled against the highest per-stream value (4K). */
const maxTierMbit = Math.max(...speedTiers.map((tier) => tier.maxMbit));

const exampleTotal = speedExample.segments.reduce((sum, segment) => sum + segment.mbit, 0);
const exampleColors = ["bg-highlight", "bg-accent", "bg-border-strong"];

function ConnectionIcon({ icon, className }: { icon: SpeedConnection["icon"]; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (icon === "lan") {
    return (
      <svg {...common}>
        <rect x="8" y="3" width="8" height="7" rx="1.5" />
        <path d="M10 6h1M13 6h1M12 10v4M5 14h14M5 14v3M12 14v3M19 14v3" />
        <rect x="3" y="17" width="4" height="4" rx="1" />
        <rect x="10" y="17" width="4" height="4" rx="1" />
        <rect x="17" y="17" width="4" height="4" rx="1" />
      </svg>
    );
  }
  if (icon === "wifi") {
    return (
      <svg {...common}>
        <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.8 16a4.8 4.8 0 0 1 6.4 0" />
        <circle cx="12" cy="19.2" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M6 18h6M9 14v4" />
      <rect x="17" y="9" width="5" height="11" rx="1.2" />
    </svg>
  );
}

export function SpeedSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background-elevated/40 py-16 sm:py-24" aria-labelledby="speed-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_15%_0%,rgba(34,211,238,0.08),transparent_70%),radial-gradient(ellipse_50%_35%_at_90%_100%,rgba(167,139,250,0.08),transparent_70%)]"
      />
      <Container className="relative flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          id="speed-heading"
          eyebrow="Internet"
          title="Welche Internetgeschwindigkeit benötigt IPTV?"
          description="Die kurze Antwort: Für Full HD genügen pro Gerät rund 10 Mbit/s, für 4K etwa 25 Mbit/s. Genauso wichtig wie das Tempo ist aber, wie stabil Ihre Verbindung ist."
        />

        {/* Image + quick answer */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <figure className="flex min-w-0 flex-col gap-3">
            <div className="relative isolate">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.16),transparent_70%)] blur-2xl"
              />
              <div className="overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40 ring-1 ring-white/5">
                <Image
                  src={speedImage}
                  alt="Infografik zur Internetgeschwindigkeit für IPTV: Bandbreite für SD, HD und 4K mit Tachometern, dazu Hinweise zu Glasfaser, stabiler Verbindung und Ping"
                  placeholder="blur"
                  sizes="(min-width: 1152px) 620px, (min-width: 1024px) 54vw, (min-width: 704px) 672px, calc(100vw - 2rem)"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <figcaption className="text-xs leading-relaxed text-muted">
              Die Grafik zeigt Mindestwerte für den Anschluss. Die Richtwerte pro Stream finden Sie in der Übersicht unten.
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Das Wichtigste in Kürze</p>
            <ol className="flex flex-col gap-5">
              {speedQuickFacts.map((fact, index) => (
                <li key={fact.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">{fact.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{fact.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="rounded-2xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-secondary">
              <span className="font-semibold text-accent">Faustregel:</span> Für die meisten Haushalte ist ein
              Anschluss mit 50 bis 100 Mbit/s eine sichere Wahl.
            </p>
          </div>
        </div>

        {/* Quality tiers */}
        <div className="flex flex-col gap-6">
          <h3 className="text-center text-xl font-semibold text-foreground sm:text-2xl">Bandbreite pro Stream nach Bildqualität</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {speedTiers.map((tier) => (
              <li
                key={tier.label}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6 shadow-lg shadow-black/20"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-lg font-bold text-foreground">{tier.label}</span>
                  <span className="text-xs font-medium text-muted">{tier.resolution}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-extrabold tracking-tight text-foreground tabular-nums">
                    {tier.perStream}
                  </p>
                  <p className="text-xs text-muted">pro Stream</p>
                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-surface"
                    role="presentation"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-highlight"
                      style={{ width: `${(tier.maxMbit / maxTierMbit) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted">{tier.idealFor}</p>
                <p className="mt-auto flex flex-col gap-0.5 rounded-xl bg-surface px-3 py-2.5">
                  <span className="text-xs text-muted">Empfohlener Anschluss</span>
                  <span className="text-sm font-semibold text-foreground">{tier.connection}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="text-center text-xs leading-relaxed text-muted">{speedTiersNote}</p>
        </div>

        {/* Stability + connection types */}
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="flex flex-col gap-5 rounded-3xl border border-highlight/30 bg-highlight/5 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{speedStability.title}</h3>
            {speedStability.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-secondary sm:text-base">
                {paragraph}
              </p>
            ))}
            <div className="grid gap-3 sm:grid-cols-2" aria-hidden>
              <div className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-4">
                <svg viewBox="0 0 200 48" className="h-12 w-full text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
                  <polyline points="0,10 18,12 30,38 42,9 60,14 72,44 86,11 104,16 116,40 130,10 150,30 164,8 180,36 200,12" />
                </svg>
                <p className="text-xs font-semibold text-foreground">Schwankende Verbindung</p>
                <p className="text-xs leading-relaxed text-muted">Hohe Spitzenwerte, aber Einbrüche – das Bild ruckelt.</p>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-4">
                <svg viewBox="0 0 200 48" className="h-12 w-full text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
                  <polyline points="0,20 25,19 50,21 75,20 100,19 125,21 150,20 175,19 200,20" />
                </svg>
                <p className="text-xs font-semibold text-foreground">Stabile Verbindung</p>
                <p className="text-xs leading-relaxed text-muted">Gleichmäßiger Datenfluss – das Bild läuft flüssig.</p>
              </div>
            </div>
            <p className="border-t border-border pt-5 text-sm leading-relaxed text-muted">{speedStability.tip}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {speedConnections.map((connection) => (
              <li
                key={connection.title}
                className="flex flex-1 items-center gap-4 rounded-2xl border border-border bg-background-elevated p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <ConnectionIcon icon={connection.icon} className="h-6 w-6" />
                </span>
                <div className="flex min-w-0 flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">{connection.title}</h3>
                    <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-xs font-medium text-secondary">
                      {connection.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{connection.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Worked example */}
        <div className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">{speedExample.title}</h3>
            <p className="text-2xl font-extrabold tracking-tight text-foreground tabular-nums">
              ≈ {exampleTotal} <span className="text-base font-semibold text-muted">Mbit/s</span>
            </p>
          </div>
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-surface" role="presentation">
            {speedExample.segments.map((segment, index) => (
              <div
                key={segment.label}
                className={`${exampleColors[index]} h-full border-r-2 border-background-elevated last:border-r-0`}
                style={{ width: `${(segment.mbit / exampleTotal) * 100}%` }}
              />
            ))}
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {speedExample.segments.map((segment, index) => (
              <li key={segment.label} className="flex items-start gap-3 text-sm">
                <span aria-hidden className={`mt-1 h-3 w-3 shrink-0 rounded-full ${exampleColors[index]}`} />
                <span className="text-secondary">
                  {segment.label}: <span className="font-semibold text-foreground tabular-nums">{segment.mbit} Mbit/s</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="border-t border-border pt-5 text-sm leading-relaxed text-secondary">
            {speedExample.conclusion} Mehr dazu:{" "}
            <Link href="/anleitungen/internetgeschwindigkeit-iptv" className={inlineLink}>
              Internetgeschwindigkeit für IPTV
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
