import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl } from "@/lib/site";

type Crumb = {
  label: string;
  href: string;
};

/** Breadcrumb trail plus matching BreadcrumbList schema. The homepage crumb is added automatically. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: "Startseite", href: "/" }, ...items];

  return (
    <nav aria-label="Brotkrumen-Navigation" className="border-b border-border">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: absoluteUrl(item.href),
          })),
        }}
      />
      <ol className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-muted sm:px-6 lg:px-8">
        {trail.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {index === trail.length - 1 ? (
              <span aria-current="page" className="text-secondary">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
