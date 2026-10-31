import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import {
  DURATION_TAGS,
  durationLabel,
  formatPrice,
  planFeatures,
  planWhatsAppLink,
  type DeviceCategory,
  type DurationId,
} from "@/lib/plans";

type PlanCardProps = {
  category: DeviceCategory;
  duration: DurationId;
  featured?: boolean;
};

/** One duration within a device category. Shows only the confirmed total price. */
export function PlanCard({ category, duration, featured = false }: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-5 transition-all duration-200 sm:p-6 ${
        featured
          ? "border-accent bg-gradient-to-b from-accent/10 to-background-elevated shadow-[0_0_40px_rgba(34,211,238,0.18)] lg:-translate-y-2"
          : "border-border bg-background-elevated hover:-translate-y-0.5 hover:border-border-strong"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-ink shadow-[0_0_16px_rgba(34,211,238,0.4)]">
          Empfohlen ⭐
        </span>
      ) : null}

      {/* Fixed-height tag row keeps titles and prices aligned across the five cards. */}
      <div className="mb-2 flex h-6 items-center">
        {featured ? null : (
          <span className="whitespace-nowrap rounded-full border border-highlight/30 bg-highlight/10 px-2 py-0.5 text-[11px] font-semibold text-highlight">
            {DURATION_TAGS[duration]}
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold text-foreground">{durationLabel(duration)}</h3>
      <p className="mt-1 text-xs text-muted">{category.label}</p>

      <p className="mt-4 text-3xl font-bold tracking-tight tabular-nums text-foreground">
        {formatPrice(category.prices[duration])}
      </p>
      <p className="mt-1 text-xs text-muted">Gesamtpreis</p>

      <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-border pt-5">
        {planFeatures(category, duration).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-secondary">
            <CheckIcon className="text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={planWhatsAppLink(category, duration)}
        external
        variant={featured ? "primary" : "secondary"}
        className="mt-6 w-full"
      >
        Anfragen
      </Button>
    </article>
  );
}
