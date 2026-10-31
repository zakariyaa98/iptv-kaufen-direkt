import type { ReactNode } from "react";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { homeDevices } from "@/lib/home-content";
import {
  DURATIONS,
  DURATION_TAGS,
  FEATURED_DURATION,
  PRICE_NOTE,
  deviceCategories,
  durationLabel,
  formatPrice,
  planWhatsAppLink,
  type DeviceCategory,
  type DeviceCount,
} from "@/lib/plans";

/**
 * Full comparison table for the homepage: all 15 prices (durations × 1/2/3 Geräte)
 * plus every included service. Prices come from lib/plans.ts; service rows only
 * repeat what the site already states (FAQ, "Warum wir", plan features).
 * Below `sm` each row becomes a 3-column grid with its label spanning the full width.
 */

const minPrice = (category: DeviceCategory) => Math.min(...Object.values(category.prices));

/* ---------- icons ---------- */

type IconName = "calendar" | "check" | "devices" | "wrench" | "headset" | "chat" | "video" | "book" | "shield" | "x" | "tv";

const iconPaths: Record<IconName, ReactNode> = {
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="4" width="14" height="10" rx="1.5" />
      <path d="M7 18h5M9.5 14v4" />
      <rect x="17" y="8" width="4.5" height="10" rx="1" />
    </>
  ),
  wrench: <path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-2-2ZM18 3l-2.5 2.5 3 3L21 6" />,
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.5-1.5 2.5-4 2.5h-2" />
    </>
  ),
  chat: <path d="M4 5.5h16v10H9l-5 4v-14Z" />,
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
    </>
  ),
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15ZM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />,
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6 6 18" />,
  tv: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
};

function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconPaths[name]}
    </svg>
  );
}

export function DeviceGlyph({ count, active }: { count: DeviceCount; active: boolean }) {
  return (
    <span aria-hidden className="flex items-end gap-1">
      {Array.from({ length: 3 }, (_, index) => (
        <span
          key={index}
          className={`h-3 w-4 rounded-[3px] border transition-colors ${
            index < count
              ? active
                ? "border-accent bg-accent/30"
                : "border-secondary/60 bg-secondary/10"
              : "border-border-strong/60"
          }`}
        />
      ))}
    </span>
  );
}

/* ---------- cell helpers ---------- */

const included = (text: string) => (
  <span className="inline-flex items-center gap-1.5 text-secondary">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
      <CheckIcon className="mt-0 h-3 w-3 text-accent" />
    </span>
    <span>{text}</span>
  </span>
);

const excluded = (text: string) => (
  <span className="inline-flex items-center gap-1.5 text-muted">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-border-strong/50">
      <Icon name="x" className="h-3 w-3" />
    </span>
    <span>{text}</span>
  </span>
);

type ServiceRow = {
  icon: IconName;
  label: string;
  hint?: string;
  tone?: "muted";
  value: (category: DeviceCategory) => ReactNode;
};

const serviceRows: ServiceRow[] = [
  {
    icon: "devices",
    label: "Anzahl der Geräte",
    value: (category) => <span className="font-semibold text-foreground">{category.label}</span>,
  },
  {
    icon: "wrench",
    label: "Einrichtungshilfe",
    hint: "Fernseher, Sticks, Boxen oder Receiver",
    value: (category) => included(`für ${category.label}`),
  },
  {
    icon: "headset",
    label: "Technischer Support",
    hint: "Dauer entspricht der gewählten Laufzeit",
    value: () => included("ganze Laufzeit"),
  },
  {
    icon: "chat",
    label: "Support-Kanäle",
    value: () => <span className="text-secondary">WhatsApp, Telegram, E‑Mail</span>,
  },
  {
    icon: "video",
    label: "Einrichtung per Chat, Sprachnachricht oder Videoanruf",
    value: () => included("Inklusive"),
  },
  {
    icon: "book",
    label: "Schritt-für-Schritt-Anleitungen",
    hint: "für Ihre Geräte",
    value: () => included("Inklusive"),
  },
  {
    icon: "shield",
    label: "Fernwartung",
    value: () => <span className="text-secondary">nur mit Ihrer Zustimmung</span>,
  },
];

const notIncludedRow: ServiceRow = {
  icon: "x",
  label: "TV-Sender, Abos oder Zugangsdaten",
  tone: "muted",
  value: () => excluded("nicht enthalten"),
};

/* ---------- layout pieces ---------- */

const rowClass = "grid grid-cols-3 border-b border-border sm:table-row";
const labelCellClass = "col-span-3 px-4 pb-1 pt-4 text-left sm:w-[34%] sm:px-6 sm:py-4";

function RowLabel({ icon, label, hint, tone }: { icon: IconName; label: string; hint?: string; tone?: "muted" }) {
  return (
    <span className="flex items-start gap-3">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          tone === "muted" ? "bg-border-strong/40 text-muted" : "bg-accent/10 text-accent"
        }`}
      >
        <Icon name={icon} />
      </span>
      <span className="flex flex-col pt-1">
        <span className={`font-semibold ${tone === "muted" ? "text-secondary" : "text-foreground"}`}>{label}</span>
        {hint ? <span className="text-xs font-normal text-muted">{hint}</span> : null}
      </span>
    </span>
  );
}

function GroupHeader({ icon, title, accent = "accent" }: { icon: IconName; title: string; accent?: "accent" | "highlight" }) {
  return (
    <tr className="block border-b border-border bg-surface/60 sm:table-row">
      <th scope="colgroup" colSpan={4} className="block px-4 py-3 text-left sm:table-cell sm:px-6">
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${
            accent === "highlight" ? "text-highlight" : "text-accent"
          }`}
        >
          <Icon name={icon} className="h-4 w-4" />
          {title}
        </span>
      </th>
    </tr>
  );
}

function columnTint(devices: DeviceCount, selected: DeviceCount) {
  return devices === selected ? "bg-accent/[0.06]" : "";
}

/* ---------- table ---------- */

export function PricingComparison({
  selected,
  onSelect,
}: {
  selected: DeviceCount;
  onSelect: (devices: DeviceCount) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-highlight">
          Preisvergleich
        </span>
        <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Alle Preise &amp; Leistungen im Vergleich</h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Alle 15 Pakete auf einen Blick. Die Leistungen sind in jedem Paket gleich – die Pakete unterscheiden sich nur
          in der Anzahl der Geräte und der Laufzeit.
        </p>
      </div>

      <div className="rounded-3xl bg-gradient-to-b from-accent/50 via-border to-highlight/40 p-px shadow-[0_30px_80px_-40px_rgba(34,211,238,0.45)]">
        <div className="overflow-hidden rounded-[calc(1.5rem-1px)] bg-background-elevated">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">
              Preise und Leistungen nach Laufzeit für 1, 2 und 3 Geräte. {PRICE_NOTE}
            </caption>

            <thead>
              <tr className="grid grid-cols-3 border-b border-border bg-gradient-to-b from-surface to-background-elevated sm:table-row">
                <th scope="col" className="hidden px-6 py-6 text-left align-bottom sm:table-cell">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Paket</span>
                </th>
                {deviceCategories.map((category) => {
                  const active = category.devices === selected;
                  return (
                    <th
                      key={category.devices}
                      scope="col"
                      className={`relative px-1.5 pb-4 pt-5 text-center align-bottom transition-colors sm:px-4 sm:pb-6 sm:pt-7 ${
                        active ? "bg-accent/10" : ""
                      }`}
                    >
                      {active ? <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent" /> : null}
                      <span className="flex flex-col items-center gap-2">
                        <DeviceGlyph count={category.devices} active={active} />
                        <span className="text-sm font-bold text-foreground sm:text-lg">{category.label}</span>
                        <span className={`text-[11px] font-medium sm:text-xs ${active ? "text-accent" : "text-muted"}`}>
                          ab {formatPrice(minPrice(category))}
                        </span>
                        <button
                          type="button"
                          aria-pressed={active}
                          onClick={() => onSelect(category.devices)}
                          className={`min-h-9 rounded-full px-3 text-[11px] font-semibold transition-colors sm:text-xs ${
                            active
                              ? "bg-accent text-accent-ink"
                              : "border border-border-strong text-secondary hover:border-accent hover:text-accent"
                          }`}
                        >
                          {active ? "Ausgewählt" : "Auswählen"}
                        </button>
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {/* Prices */}
              <GroupHeader icon="calendar" title="Laufzeit & Gesamtpreis" />
              {DURATIONS.map((duration) => {
                const featured = duration.id === FEATURED_DURATION;
                return (
                  <tr key={duration.id} className={`${rowClass} ${featured ? "bg-accent/[0.07]" : ""}`}>
                    <th scope="row" className={labelCellClass}>
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-foreground sm:text-base">{duration.label}</span>
                        <span
                          className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${
                            featured
                              ? "bg-accent text-accent-ink"
                              : "border border-highlight/30 bg-highlight/10 text-highlight"
                          }`}
                        >
                          {DURATION_TAGS[duration.id]}
                        </span>
                      </span>
                    </th>
                    {deviceCategories.map((category) => {
                      const price = formatPrice(category.prices[duration.id]);
                      return (
                        <td
                          key={category.devices}
                          className={`px-1.5 pb-4 pt-2 text-center align-middle transition-colors sm:px-4 sm:py-4 ${columnTint(
                            category.devices,
                            selected
                          )}`}
                        >
                          <span className="flex flex-col items-center gap-2">
                            <span
                              className={`text-lg font-extrabold tracking-tight tabular-nums sm:text-2xl ${
                                featured ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {price}
                            </span>
                            <a
                              href={planWhatsAppLink(category, duration.id)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full px-3 text-[11px] font-semibold transition-colors sm:text-xs ${
                                featured
                                  ? "bg-accent text-accent-ink hover:bg-accent-soft"
                                  : "border border-border-strong text-secondary hover:border-accent hover:text-accent"
                              }`}
                            >
                              <WhatsAppIcon className="h-3.5 w-3.5" />
                              Anfragen
                              <span className="sr-only">
                                : {durationLabel(duration.id)}, {category.label}, {price} per WhatsApp
                              </span>
                            </a>
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}

              {/* Services */}
              <GroupHeader icon="check" title="In jedem Paket enthalten" />
              {serviceRows.map((row) => (
                <tr key={row.label} className={`${rowClass} sm:even:bg-surface/20`}>
                  <th scope="row" className={labelCellClass}>
                    <RowLabel icon={row.icon} label={row.label} hint={row.hint} />
                  </th>
                  {deviceCategories.map((category) => (
                    <td
                      key={category.devices}
                      className={`flex items-start justify-center px-1.5 pb-4 pt-2 text-center text-xs transition-colors sm:table-cell sm:px-4 sm:py-4 sm:text-sm ${columnTint(
                        category.devices,
                        selected
                      )}`}
                    >
                      {row.value(category)}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Compatibility */}
              <GroupHeader icon="tv" title="Gerätekompatibilität" />
              <tr className={rowClass}>
                <th scope="row" className={labelCellClass}>
                  <RowLabel icon="devices" label="Einrichtungshilfe für" hint="gilt für alle Pakete" />
                </th>
                <td colSpan={3} className="col-span-3 px-4 pb-5 pt-2 sm:px-4 sm:py-4">
                  <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {homeDevices.map((device) => (
                      <li
                        key={device.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface/60 px-3 py-1.5 text-xs font-medium text-secondary"
                      >
                        <DeviceIcon icon={device.icon} className="h-3.5 w-3.5 text-accent" />
                        {device.name}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* Not included */}
              <GroupHeader icon="x" title="Nicht enthalten" accent="highlight" />
              <tr className="grid grid-cols-3 sm:table-row">
                <th scope="row" className={labelCellClass}>
                  <RowLabel icon={notIncludedRow.icon} label={notIncludedRow.label} tone="muted" />
                </th>
                {deviceCategories.map((category) => (
                  <td
                    key={category.devices}
                    className={`flex items-start justify-center px-1.5 pb-4 pt-2 text-center text-xs sm:table-cell sm:px-4 sm:py-4 sm:text-sm ${columnTint(
                      category.devices,
                      selected
                    )}`}
                  >
                    {notIncludedRow.value(category)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
