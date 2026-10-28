"use client";

import { useState } from "react";
import { PlanCard } from "@/components/plans/PlanCard";
import { CheckIcon } from "@/components/ui/CheckIcon";
import {
  DURATIONS,
  FEATURED_DURATION,
  PLAN_SCOPE_NOTE,
  PRICE_NOTE,
  deviceCategories,
  planFeatures,
  type DeviceCount,
} from "@/lib/plans";

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

      <div aria-live="polite" className="grid gap-5 pt-2 sm:grid-cols-2 lg:grid-cols-5">
        {DURATIONS.map((duration) => (
          <PlanCard
            key={`${category.devices}-${duration.id}`}
            category={category}
            duration={duration.id}
            featured={duration.id === FEATURED_DURATION}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
          {planFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-secondary">
              <CheckIcon className="text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-xs leading-relaxed text-muted">
          {PRICE_NOTE} {PLAN_SCOPE_NOTE}
        </p>
      </div>
    </div>
  );
}
