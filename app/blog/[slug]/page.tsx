import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogCard } from "@/components/blog/BlogCard";
import { FormattedText } from "@/components/content/FormattedText";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  BLOG_PATH,
  blogPostPath,
  categoryName,
  categoryPath,
  formatBlogDate,
  getAdjacentPosts,
  getPost,
  getRelatedPosts,
  getRenderablePosts,
  getTableOfContents,
  readingTimeMinutes,
  toSummary,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Only known slugs exist; drafts are not part of production builds, so they return 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getRenderablePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const meta = pageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: blogPostPath(post.slug),
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    // The article's own generated image (app/blog/[slug]/opengraph-image.tsx).
    image: { url: `${blogPostPath(post.slug)}/opengraph-image`, width: 1200, height: 630, alt: post.title },
  });

  return post.status === "draft" ? { ...meta, robots: { index: false, follow: false } } : meta;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = blogPostPath(post.slug);
  const modified = post.updatedAt ?? post.publishedAt;
  const minutes = readingTimeMinutes(post);
  const toc = getTableOfContents(post);
  const related = getRelatedPosts(post).map(toSummary);
  const { previous, next } = getAdjacentPosts(post.slug);
  const category = categoryName(post.category);
  const faq = post.faq ?? [];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          inLanguage: SITE.language,
          datePublished: post.publishedAt,
          dateModified: modified,
          image: [absoluteUrl(`${path}/opengraph-image`), absoluteUrl(post.image.src)],
          articleSection: category,
          keywords: post.keywords.join(", "),
          author: post.author
            ? { "@type": "Person", name: post.author.name, ...(post.author.url ? { url: post.author.url } : {}) }
            : { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          isPartOf: { "@id": `${absoluteUrl(BLOG_PATH)}#blog` },
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
        }}
      />
      {faq.length > 0 ? <JsonLd data={faqJsonLd(faq)} /> : null}

      <Breadcrumbs
        items={[
          { label: "Blog", href: BLOG_PATH },
          { label: category, href: categoryPath(post.category) },
          { label: post.title, href: path },
        ]}
      />

      <article className="py-10 sm:py-14">
        <Container className="flex flex-col gap-10">
          {post.status === "draft" ? (
            <p className="mx-auto w-full max-w-3xl rounded-xl border border-highlight bg-highlight/10 px-4 py-3 text-sm text-foreground">
              Entwurf – nur in der lokalen Entwicklung sichtbar, nicht veröffentlicht und nicht indexiert.
            </p>
          ) : null}

          <header className="mx-auto flex w-full max-w-3xl flex-col gap-5">
            <Link
              href={categoryPath(post.category)}
              className="w-fit text-xs font-semibold uppercase tracking-[0.18em] text-highlight hover:text-accent"
            >
              {category}
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted">{post.excerpt}</p>
            <p className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted">
              {post.author ? <span>Von {post.author.name} ·</span> : null}
              <span>
                Veröffentlicht am <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              </span>
              {post.updatedAt ? (
                <span>
                  · Aktualisiert am <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time>
                </span>
              ) : null}
              <span>· {minutes} Min. Lesezeit</span>
            </p>
          </header>

          <figure className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-border-strong bg-background shadow-2xl shadow-black/40">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={post.image.width}
              height={post.image.height}
              preload
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full"
            />
            {post.image.caption ? (
              <figcaption className="border-t border-border px-4 py-2 text-xs text-muted">{post.image.caption}</figcaption>
            ) : null}
          </figure>

          <div className="mx-auto flex w-full min-w-0 max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-secondary sm:text-lg">
              {post.intro.map((paragraph, index) => (
                <p key={index}>
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </div>

            {post.summary && post.summary.length > 0 ? (
              <section
                aria-labelledby="summary-heading"
                className="flex flex-col gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5 sm:p-6"
              >
                <h2 id="summary-heading" className="text-lg font-semibold text-foreground">
                  Das Wichtigste in Kürze
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {post.summary.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-secondary sm:text-base">
                      <CheckIcon className="text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <nav aria-labelledby="toc-heading" className="rounded-2xl border border-border bg-background-elevated p-5 sm:p-6">
              <h2 id="toc-heading" className="text-base font-semibold text-foreground">
                Inhaltsverzeichnis
              </h2>
              <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm text-secondary marker:text-muted">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-accent">
                      {item.label}
                    </a>
                    {item.children.length > 0 ? (
                      <ul className="mt-1.5 flex flex-col gap-1.5 pl-1 text-muted">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <a href={`#${child.id}`} className="hover:text-accent">
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
                {faq.length > 0 ? (
                  <li>
                    <a href="#faq-heading" className="hover:text-accent">
                      Häufige Fragen
                    </a>
                  </li>
                ) : null}
              </ol>
            </nav>

            <BlogArticleBody sections={post.sections} />

            {faq.length > 0 ? (
              <section aria-labelledby="faq-heading" className="flex flex-col gap-5">
                <h2 id="faq-heading" className="scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                  Häufige Fragen
                </h2>
                <FaqList items={faq} />
              </section>
            ) : null}

            {post.furtherReading && post.furtherReading.length > 0 ? (
              <nav aria-labelledby="further-heading" className="flex flex-col gap-4 border-t border-border pt-8">
                <h2 id="further-heading" className="text-lg font-semibold text-foreground">
                  Passende Anleitungen
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {post.furtherReading.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-background-elevated px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {link.label}
                        <span aria-hidden>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            {previous || next ? (
              <nav aria-label="Weitere Artikel" className="grid gap-3 sm:grid-cols-2">
                {previous ? (
                  <Link
                    href={blogPostPath(previous.slug)}
                    rel="prev"
                    className="flex flex-col gap-1 rounded-xl border border-border px-4 py-3 transition-colors hover:border-accent/50"
                  >
                    <span className="text-xs text-muted">← Vorheriger Artikel</span>
                    <span className="text-sm font-semibold text-foreground">{previous.title}</span>
                  </Link>
                ) : (
                  <span className="hidden sm:block" />
                )}
                {next ? (
                  <Link
                    href={blogPostPath(next.slug)}
                    rel="next"
                    className="flex flex-col gap-1 rounded-xl border border-border px-4 py-3 text-right transition-colors hover:border-accent/50"
                  >
                    <span className="text-xs text-muted">Nächster Artikel →</span>
                    <span className="text-sm font-semibold text-foreground">{next.title}</span>
                  </Link>
                ) : null}
              </nav>
            ) : null}
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="border-t border-border bg-background-elevated/40 py-14 sm:py-16">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ähnliche Artikel
              </h2>
              <Link href={BLOG_PATH} className="text-sm font-semibold text-accent hover:text-accent-soft">
                Alle Artikel im Blog →
              </Link>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="min-w-0">
                  <BlogCard post={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
