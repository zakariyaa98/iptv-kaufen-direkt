"use client";

import { useState } from "react";
import { PlanCard } from "@/components/plans/PlanCard";
import {
  DURATIONS,
  FEATURED_DURATION,
  PLAN_SCOPE_NOTE,
  PRICE_NOTE,
  deviceCategories,
  planBenefits,
  type DeviceCount,
} from "@/lib/plans";

const benefitIcons: Record<(typeof planBenefits)[number]["icon"], string> = {
  bolt: "M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z",
  chat: "M21 12a8 8 0 01-11.8 7L4 20l1.1-4.6A8 8 0 1121 12z",
  book: "M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5v14zM4 19.5A2.5 2.5 0 006.5 22H20v-5",
};

/** Device switcher (1/2/3 Geräte) plus the five duration cards of the selected category. */
export function PricingPlans() {
  const [selected, setSelected] = useState<DeviceCount>(1);
  const category = deviceCategories.find((item) => item.devices === selected) ?? deviceCategories[0];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-3">
        <p id="device-switch-label" className="text-sm font-medium text-secondary">
          Für wie viele Geräte?
        </p>
        <div
          role="group"
          aria-labelledby="device-switch-label"
          className="inline-flex w-full max-w-sm rounded-full border border-border-strong bg-background-elevated p-1"
        >
          {deviceCategories.map((item) => {
            const active = item.devices === selected;
            return (
              <button
                key={item.devices}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(item.devices)}
                className={`min-h-11 flex-1 rounded-full px-3 text-sm font-semibold transition-colors ${
                  active ? "bg-accent text-accent-ink" : "text-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-2">
        {planBenefits.map((benefit) => (
          <li
            key={benefit.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-secondary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 shrink-0 text-accent"
              aria-hidden="true"
            >
              <path d={benefitIcons[benefit.icon]} />
            </svg>
            {benefit.label}
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="grid gap-5 pt-4 sm:grid-cols-2 lg:grid-cols-5">
        {DURATIONS.map((duration) => (
          <PlanCard
            key={`${category.devices}-${duration.id}`}
            category={category}
            duration={duration.id}
            featured={duration.id === FEATURED_DURATION}
          />
        ))}
      </div>

      <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted">
        {PRICE_NOTE} {PLAN_SCOPE_NOTE}
      </p>
    </div>
  );
}
