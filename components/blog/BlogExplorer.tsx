"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogCategorySlug, BlogPostSummary } from "@/lib/blog/types";

type BlogExplorerProps = {
  posts: BlogPostSummary[];
  /** Categories that have at least one article (empty ones are not offered as a filter). */
  categories: { slug: BlogCategorySlug; name: string; count: number }[];
};

/** Lowercase and fold umlauts, so "Gerät", "Geraet" and "gerat" all match. */
function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Search and category filter for the article list on /blog.
 * The full list is server-rendered first; this only filters what is already on the page.
 */
export function BlogExplorer({ posts, categories }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategorySlug | "all">("all");
  const searchId = useId();

  const index = useMemo(
    () =>
      posts.map((post) => ({
        post,
        haystack: normalize([post.title, post.excerpt, post.categoryName, ...post.keywords].join(" ")),
      })),
    [posts]
  );

  const results = useMemo(() => {
    const terms = normalize(query).split(" ").filter(Boolean);
    return index
      .filter(({ post }) => category === "all" || post.category === category)
      .filter(({ haystack }) => terms.every((term) => haystack.includes(term)))
      .map(({ post }) => post);
  }, [index, query, category]);

  const filtered = query.trim() !== "" || category !== "all";
  const chipBase =
    "inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-4 sm:p-5">
        <div className="flex flex-col gap-2">
          <label htmlFor={searchId} className="text-sm font-semibold text-foreground">
            Artikel durchsuchen
          </label>
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" strokeLinecap="round" />
            </svg>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="z. B. Fire TV, kein Ton, Catch-up"
              autoComplete="off"
              enterKeyHint="search"
              className="min-h-12 w-full rounded-full border border-border-strong bg-background py-3 pl-12 pr-4 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <div role="group" aria-label="Nach Kategorie filtern" className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={`${chipBase} ${
              category === "all"
                ? "border-accent bg-accent text-accent-ink"
                : "border-border-strong text-secondary hover:border-accent hover:text-accent"
            }`}
          >
            Alle <span className="text-xs opacity-80">{posts.length}</span>
          </button>
          {categories.map((item) => {
            const active = category === item.slug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setCategory(active ? "all" : item.slug)}
                aria-pressed={active}
                className={`${chipBase} ${
                  active
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-border-strong text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                {item.name} <span className="text-xs opacity-80">{item.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="text-sm text-muted">
        {filtered
          ? results.length === 1
            ? "1 Artikel gefunden"
            : `${results.length} Artikel gefunden`
          : `${posts.length} Artikel, neueste zuerst`}
      </p>

      {results.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <li key={post.slug} className="min-w-0">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border-strong p-6">
          <p className="text-base text-secondary">
            Zu Ihrer Suche haben wir noch keinen Artikel. Versuchen Sie einen anderen Begriff oder schauen Sie in
            unsere{" "}
            <Link href="/anleitungen" className="font-medium text-accent underline underline-offset-4 hover:text-accent-soft">
              Anleitungen
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-soft"
          >
            Suche zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
