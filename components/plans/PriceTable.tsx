import { DURATIONS, FEATURED_DURATION, PRICE_NOTE, deviceCategories, formatPrice } from "@/lib/plans";

/** All 15 prices side by side. Rows are durations, columns are device categories. */
export function PriceTable() {
  return (
    <figure className="flex flex-col gap-2">
      <div className="w-full overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <caption className="sr-only">Preise nach Laufzeit und Anzahl der Geräte</caption>
          <thead>
            <tr className="bg-surface">
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                Laufzeit
              </th>
              {deviceCategories.map((category) => (
                <th key={category.devices} scope="col" className="border-b border-border px-4 py-3 text-right font-semibold text-foreground">
                  {category.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DURATIONS.map((duration) => {
              const featured = duration.id === FEATURED_DURATION;
              return (
                <tr key={duration.id} className={featured ? "bg-accent/10" : "odd:bg-background even:bg-background-elevated"}>
                  <th scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">
                    {duration.label}
                    {featured ? <span className="ml-2 text-xs font-semibold text-accent">Empfohlen ⭐</span> : null}
                  </th>
                  {deviceCategories.map((category) => (
                    <td key={category.devices} className="border-b border-border px-4 py-3 text-right font-semibold tabular-nums text-secondary">
                      {formatPrice(category.prices[duration.id])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption className="text-xs text-muted">{PRICE_NOTE}</figcaption>
    </figure>
  );
}
