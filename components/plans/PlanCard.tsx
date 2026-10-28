import { Button } from "@/components/ui/Button";
import { durationLabel, formatPrice, planWhatsAppLink, type DeviceCategory, type DurationId } from "@/lib/plans";

type PlanCardProps = {
  category: DeviceCategory;
  duration: DurationId;
  featured?: boolean;
};

/** One duration within a device category. Shows only the confirmed total price. */
export function PlanCard({ category, duration, featured = false }: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-background-elevated p-5 sm:p-6 ${
        featured ? "border-accent shadow-[0_0_32px_rgba(34,211,238,0.14)]" : "border-border"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-ink">
          Empfohlen ⭐
        </span>
      ) : null}
      <h3 className="text-base font-semibold text-foreground">{durationLabel(duration)}</h3>
      <p className="mt-1 text-xs text-muted">{category.label}</p>
      <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">{formatPrice(category.prices[duration])}</p>
      <Button
        href={planWhatsAppLink(category, duration)}
        external
        variant={featured ? "primary" : "secondary"}
        className="mt-5 w-full"
      >
        Anfragen
      </Button>
    </article>
  );
}
