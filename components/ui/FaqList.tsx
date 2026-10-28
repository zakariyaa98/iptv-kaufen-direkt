import type { FaqItem } from "@/lib/faq-data";

/** Accessible accordion built on native <details>, works without JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex w-full flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-border bg-background-elevated p-5 open:border-accent/40 sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
