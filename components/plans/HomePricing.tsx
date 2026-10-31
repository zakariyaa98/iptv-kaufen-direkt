"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { DeviceGlyph, PricingComparison } from "@/components/plans/PricingComparison";
import { CheckIcon } from "@/components/ui/CheckIcon";
import {
  DURATIONS,
  DURATION_TAGS,
  FEATURED_DURATION,
  PLAN_SCOPE_NOTE,
  PRICE_NOTE,
  deviceCategories,
  durationLabel,
  formatPrice,
  planFeatures,
  planWhatsAppLink,
  type DeviceCategory,
  type DeviceCount,
  type DurationId,
} from "@/lib/plans";

/**
 * Homepage-only pricing block: device selector, five duration cards and a
 * full price/service comparison table (PricingComparison). All numbers come from lib/plans.ts.
 * /iptv-pakete and /angebote keep using PricingPlans + PriceTable.
 */

const minPrice = (category: DeviceCategory) => Math.min(...Object.values(category.prices));

function HomePlanCard({ category, duration }: { category: DeviceCategory; duration: DurationId }) {
  const featured = duration === FEATURED_DURATION;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-3xl p-px transition-transform duration-300 ${
        featured
          ? "bg-gradient-to-b from-accent via-accent/40 to-highlight/50 shadow-[0_24px_60px_-20px_rgba(34,211,238,0.45)] xl:-my-3"
          : "bg-border hover:-translate-y-1 hover:bg-border-strong"
      }`}
    >
      <div
        className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-6 ${
          featured ? "bg-gradient-to-b from-[#0f2333] to-background-elevated xl:py-9" : "bg-background-elevated"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-foreground">{durationLabel(duration)}</h3>
          <span
            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              featured
                ? "bg-accent text-accent-ink"
                : "border border-highlight/30 bg-highlight/10 text-highlight"
            }`}
          >
            {DURATION_TAGS[duration]}
          </span>
        </div>

        <div className="mt-6 flex items-baseline gap-2">
          <p className="text-4xl font-extrabold tracking-tight tabular-nums text-foreground">
            {formatPrice(category.prices[duration])}
          </p>
        </div>
        <p className="mt-1.5 text-xs font-medium text-muted">
          Gesamtpreis · {category.label}
        </p>

        <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border/80 pt-6">
          {planFeatures(category, duration).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-secondary">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15">
                <CheckIcon className="mt-0 h-3 w-3 text-accent" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={planWhatsAppLink(category, duration)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ${
            featured
              ? "bg-accent text-accent-ink shadow-[0_0_0_1px_rgba(34,211,238,0.35)] hover:bg-accent-soft hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]"
              : "border border-border-strong text-foreground hover:border-accent hover:text-accent"
          }`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          Anfragen
          <span className="sr-only">
            : {durationLabel(duration)}, {category.label}, {formatPrice(category.prices[duration])} per WhatsApp
          </span>
        </a>
      </div>
    </article>
  );
}

export function HomePricing() {
  const [selected, setSelected] = useState<DeviceCount>(1);
  const category = deviceCategories.find((item) => item.devices === selected) ?? deviceCategories[0];

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      {/* Step 1 – device count */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <p id="home-device-switch-label" className="text-sm font-semibold text-secondary">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
              1
            </span>
            Für wie viele Geräte?
          </p>
          <div
            role="group"
            aria-labelledby="home-device-switch-label"
            className="grid w-full max-w-2xl grid-cols-3 gap-2 rounded-3xl border border-border bg-background-elevated/80 p-2 sm:gap-3"
          >
            {deviceCategories.map((item) => {
              const active = item.devices === selected;
              return (
                <button
                  key={item.devices}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(item.devices)}
                  className={`flex min-h-11 flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center transition-all duration-200 sm:py-4 ${
                    active
                      ? "bg-surface ring-1 ring-accent shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
                      : "hover:bg-surface/60"
                  }`}
                >
                  <DeviceGlyph count={item.devices} active={active} />
                  <span className={`text-sm font-bold sm:text-base ${active ? "text-foreground" : "text-secondary"}`}>
                    {item.label}
                  </span>
                  <span className={`text-[11px] font-medium sm:text-xs ${active ? "text-accent" : "text-muted"}`}>
                    ab {formatPrice(minPrice(item))}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 – duration cards */}
        <div className="flex flex-col gap-6">
          <p className="text-center text-sm font-semibold text-secondary">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
              2
            </span>
            Laufzeit wählen
          </p>
          <div
            aria-live="polite"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:items-stretch xl:gap-4"
          >
            {DURATIONS.map((duration) => (
              <div
                key={`${category.devices}-${duration.id}`}
                className={duration.id === FEATURED_DURATION ? "order-first sm:order-none" : undefined}
              >
                <HomePlanCard category={category} duration={duration.id} />
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted">
            {PRICE_NOTE} {PLAN_SCOPE_NOTE}
          </p>
        </div>
      </div>

      <PricingComparison selected={selected} onSelect={setSelected} />
    </div>
  );
}
