import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryIcon } from "@/components/blog/CategoryIcon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { BLOG_PATH, blogCategories, categoryPath, getCategory, getCategoriesWithCounts, getPostsByCategory, toSummary } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const meta = pageMetadata({
    title: `${category.name} – IPTV Blog`,
    description: `${category.description} Ratgeber aus dem IPTV Blog – verständlich und auf Deutsch.`,
    path: categoryPath(category.slug),
  });

  // A category without articles is a thin page: reachable for visitors, but kept out of the index.
  return getPostsByCategory(category.slug).length === 0 ? { ...meta, robots: { index: false, follow: true } } : meta;
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug).map(toSummary);
  const otherCategories = getCategoriesWithCounts().filter((item) => item.slug !== category.slug);
  const path = categoryPath(category.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: BLOG_PATH },
          { label: category.name, href: path },
        ]}
      />

      <section className="hero-glow border-b border-border">
        <Container className="flex flex-col gap-5 py-12 sm:py-16">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <CategoryIcon icon={category.icon} className="h-6 w-6" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">IPTV Blog · Kategorie</span>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            {category.name}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">{category.intro}</p>
          <ul aria-label="Themen dieser Kategorie" className="flex flex-wrap gap-2">
            {category.topics.map((topic) => (
              <li key={topic} className="rounded-full border border-border-strong px-3 py-1 text-xs text-secondary">
                {topic}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="category-posts-heading" className="py-14 sm:py-16">
        <Container className="flex flex-col gap-8">
          <h2 id="category-posts-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Artikel in dieser Kategorie
          </h2>
          {posts.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="min-w-0">
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl border border-dashed border-border-strong p-6 text-base text-secondary">
              Zu diesem Thema erscheinen in Kürze die ersten Artikel. Bis dahin helfen Ihnen die passenden Anleitungen
              unten weiter.
            </p>
          )}

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
            <h2 className="text-lg font-semibold text-foreground">Passende Anleitungen</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {category.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {link.label}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="other-categories-heading" className="flex flex-col gap-4">
            <h2 id="other-categories-heading" className="text-lg font-semibold text-foreground">
              Weitere Themen im Blog
            </h2>
            <ul className="flex flex-wrap gap-2">
              {otherCategories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={categoryPath(item.slug)}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    {item.name}
                    <span className="text-xs text-muted">{item.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
