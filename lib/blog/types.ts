import type { FaqItem } from "@/lib/faq-data";

/** Slugs of the six blog categories. Add a new slug here and in lib/blog/categories.ts. */
export type BlogCategorySlug =
  | "iptv-apps"
  | "iptv-einrichtung"
  | "iptv-geraete"
  | "iptv-fehlerbehebung"
  | "iptv-grundlagen"
  | "news-updates";

export type BlogImage = {
  /** Path below /public, e.g. "/images/blog/mein-artikel/titelbild.svg". */
  src: string;
  width: number;
  height: number;
  /** Describe what the image shows – not just the keyword. */
  alt: string;
  caption?: string;
};

/**
 * One content block inside a section. Text in `p`, `list`, `steps` and `note`
 * may contain internal or external links written as `[Linktext](/pfad)`.
 */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "note"; text: string; title?: string }
  | { type: "code"; code: string; caption?: string }
  | ({ type: "image" } & BlogImage);

/** One H2 section. Its H3 sub-headings appear indented in the table of contents. */
export type BlogSection = {
  heading: string;
  blocks: BlogBlock[];
};

export type BlogStatus = "draft" | "published";

export type BlogPost = {
  /** URL segment: /blog/<slug>. Lowercase, hyphens, no umlauts. */
  slug: string;
  /** "draft" articles are never listed, never in the sitemap and return 404 in production. */
  status: BlogStatus;
  /** Show the article in the "Empfohlene Artikel" block on /blog. */
  featured?: boolean;
  category: BlogCategorySlug;
  /** Visible H1. */
  title: string;
  /** <title> without the brand suffix – the root layout appends " | IPTV Kaufen Direkt". */
  seoTitle: string;
  /** 140–160 characters. */
  metaDescription: string;
  /** One or two sentences for cards and listings. */
  excerpt: string;
  /** Search terms for the /blog search (devices, apps, error messages …). Not rendered as meta keywords. */
  keywords: string[];
  /** ISO date (YYYY-MM-DD) of the first publication. */
  publishedAt: string;
  /** ISO date of the last substantive update. Leave out until the article is actually revised. */
  updatedAt?: string;
  /** Only set when a real, verifiable person wrote the article. Otherwise the organisation is the author. */
  author?: { name: string; url?: string };
  image: BlogImage;
  intro: string[];
  /** Short answer bullets under the intro ("Das Wichtigste in Kürze"). */
  summary?: string[];
  sections: BlogSection[];
  /** Only real questions that the article answers. Rendered visibly and as FAQPage schema. */
  faq?: FaqItem[];
  /** Slugs of blog articles shown first under "Ähnliche Artikel". The list is filled up automatically. */
  relatedSlugs?: string[];
  /** Existing website pages that fit the article, shown under "Passende Anleitungen". */
  furtherReading?: { href: string; label: string }[];
};

/** Lightweight shape passed to the client-side search on /blog. */
export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategorySlug;
  categoryName: string;
  keywords: string[];
  publishedAt: string;
  publishedLabel: string;
  readingTimeMinutes: number;
  image: BlogImage;
};
