import { allPosts } from "@/content/blog";
import { blogCategories, getCategory } from "./categories";
import type { BlogBlock, BlogCategorySlug, BlogPost, BlogPostSummary } from "./types";

export * from "./types";
export * from "./categories";

export const BLOG_PATH = "/blog";

/**
 * Drafts can be previewed locally with `npm run dev` under /blog/<slug> (marked "noindex").
 * In every production build they are excluded from pages, listings, sitemap and static params.
 */
export const SHOW_DRAFTS = process.env.NODE_ENV === "development";

function byNewest(a: BlogPost, b: BlogPost) {
  return b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title, "de");
}

/** All published articles, newest first. */
export function getPublishedPosts(): BlogPost[] {
  return allPosts.filter((post) => post.status === "published").sort(byNewest);
}

/** Articles that may be rendered as a page (drafts only in local development). */
export function getRenderablePosts(): BlogPost[] {
  return allPosts.filter((post) => post.status === "published" || SHOW_DRAFTS).sort(byNewest);
}

export function getPost(slug: string): BlogPost | undefined {
  return getRenderablePosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategorySlug): BlogPost[] {
  return getPublishedPosts().filter((post) => post.category === category);
}

/** Featured articles (newest first, max. 3). Falls back to the newest articles if none is flagged. */
export function getFeaturedPosts(limit = 3): BlogPost[] {
  const posts = getPublishedPosts();
  const featured = posts.filter((post) => post.featured);
  return (featured.length > 0 ? featured : posts).slice(0, limit);
}

export function blogPostPath(slug: string): string {
  return `${BLOG_PATH}/${slug}`;
}

export function categoryName(slug: BlogCategorySlug): string {
  return getCategory(slug)?.name ?? slug;
}

/** Categories with their number of published articles, in display order. */
export function getCategoriesWithCounts() {
  const posts = getPublishedPosts();
  return blogCategories.map((category) => ({
    ...category,
    count: posts.filter((post) => post.category === category.slug).length,
  }));
}

/**
 * Related articles: manual `relatedSlugs` first, then the same category,
 * then articles sharing keywords, then the newest remaining ones.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const candidates = getPublishedPosts().filter((other) => other.slug !== post.slug);
  const picked: BlogPost[] = [];
  const add = (items: BlogPost[]) => {
    for (const item of items) {
      if (picked.length >= limit) return;
      if (!picked.some((existing) => existing.slug === item.slug)) picked.push(item);
    }
  };

  add((post.relatedSlugs ?? []).map((slug) => candidates.find((c) => c.slug === slug)).filter((c): c is BlogPost => !!c));
  add(candidates.filter((c) => c.category === post.category));
  const keywords = new Set(post.keywords.map((k) => k.toLowerCase()));
  add(candidates.filter((c) => c.keywords.some((k) => keywords.has(k.toLowerCase()))));
  add(candidates);
  return picked;
}

/** Previous (older) and next (newer) published article by date. */
export function getAdjacentPosts(slug: string): { previous?: BlogPost; next?: BlogPost } {
  const posts = getPublishedPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return { next: posts[index - 1], previous: posts[index + 1] };
}

/* ------------------------------------------------------------ Text helpers */

/** Heading → anchor id ("Was ist ein Codec?" → "was-ist-ein-codec"). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Strips `[label](href)` link syntax so only the visible words remain. */
export function plainText(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function blockText(block: BlogBlock): string {
  switch (block.type) {
    case "p":
    case "h3":
    case "note":
      return block.text;
    case "list":
    case "steps":
      return block.items.join(" ");
    case "table":
      return [...block.headers, ...block.rows.flat()].join(" ");
    case "code":
      return block.code;
    case "cta":
      return `${block.title} ${block.text}`;
    case "image":
      return block.caption ?? "";
  }
}

const WORDS_PER_MINUTE = 200;

/** Reading time from the actual text, so it never has to be maintained by hand. */
export function readingTimeMinutes(post: BlogPost): number {
  const text = [
    ...post.intro,
    ...(post.summary ?? []),
    ...post.sections.flatMap((section) => [section.heading, ...section.blocks.map(blockText)]),
    ...(post.faq ?? []).flatMap((item) => [item.question, item.answer]),
  ]
    .map(plainText)
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Table of contents: every H2 with its H3 children. */
export function getTableOfContents(post: BlogPost) {
  return post.sections.map((section) => ({
    id: slugify(section.heading),
    label: section.heading,
    children: section.blocks
      .filter((block): block is Extract<BlogBlock, { type: "h3" }> => block.type === "h3")
      .map((block) => ({ id: slugify(block.text), label: block.text })),
  }));
}

export function toSummary(post: BlogPost): BlogPostSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    categoryName: categoryName(post.category),
    keywords: post.keywords,
    publishedAt: post.publishedAt,
    publishedLabel: formatBlogDate(post.publishedAt),
    readingTimeMinutes: readingTimeMinutes(post),
    image: post.image,
  };
}

/** Latest modification of any published article – used for /blog in the sitemap. */
export function latestBlogUpdate(): string | undefined {
  return getPublishedPosts()
    .map((post) => post.updatedAt ?? post.publishedAt)
    .sort()
    .at(-1);
}
