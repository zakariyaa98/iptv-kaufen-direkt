import Image from "next/image";
import Link from "next/link";
import type { BlogPostSummary } from "@/lib/blog/types";

type BlogCardProps = {
  post: BlogPostSummary;
  /** Heading level inside the surrounding section. */
  headingLevel?: "h2" | "h3";
  /** Larger layout for the featured block. */
  variant?: "default" | "featured";
};

/**
 * Article card for /blog, category pages and "Ähnliche Artikel".
 * The title is the link; a stretched pseudo-element makes the whole card clickable
 * while keeping one accessible link name per card.
 */
export function BlogCard({ post, headingLevel = "h3", variant = "default" }: BlogCardProps) {
  const Heading = headingLevel;
  const featured = variant === "featured";

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-colors focus-within:border-accent/60 hover:border-accent/50">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-background">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
          sizes={featured ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
          className="h-full w-full object-cover"
        />
      </div>
      <div className={`flex flex-1 flex-col gap-3 ${featured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">{post.categoryName}</span>
        <Heading
          className={`font-semibold leading-snug text-balance text-foreground group-hover:text-accent ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent">
            {post.title}
          </Link>
        </Heading>
        <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-3 text-xs text-muted">
          <span>
            <time dateTime={post.publishedAt}>{post.publishedLabel}</time> · {post.readingTimeMinutes} Min. Lesezeit
          </span>
          <span aria-hidden className="text-sm font-semibold text-accent">
            Weiterlesen →
          </span>
        </div>
      </div>
    </article>
  );
}
