import type { FaqItem } from "./faq-data";

export type ArticleTable = {
  headers: string[];
  rows: string[][];
  caption?: string;
};

export type ArticleSection = {
  heading: string;
  /** Paragraphs. Inline links use the `[label](/path)` syntax rendered by FormattedText. */
  body?: string[];
  /** Unordered bullet list. */
  list?: string[];
  /** Ordered, numbered steps. */
  steps?: string[];
  table?: ArticleTable;
  /** Highlighted hint box shown after the section content. */
  note?: string;
};

/** Shared shape for device guides, general how-to guides and the legal-information page. */
export type Article = {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> without the brand suffix (the layout template appends it). */
  seoTitle: string;
  metaDescription: string;
  /** One or two sentences for cards and listings. */
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  intro: string[];
  /** Short answer bullets shown under the intro. */
  summary?: string[];
  sections: ArticleSection[];
  faq: FaqItem[];
  /** Internal links shown at the end as "Weiterlesen". */
  related?: { href: string; label: string }[];
};
