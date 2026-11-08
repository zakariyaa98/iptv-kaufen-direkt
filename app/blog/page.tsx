import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { CategoryIcon } from "@/components/blog/CategoryIcon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  BLOG_PATH,
  blogPostPath,
  categoryPath,
  getCategoriesWithCounts,
  getFeaturedPosts,
  getPublishedPosts,
  toSummary,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "IPTV Blog – Anleitungen, Apps, Geräte & Tipps",
  description:
    "Der IPTV Blog mit Tipps zu Einrichtung, Apps und Geräten: verständliche Anleitungen, Hilfe bei Problemen wie schwarzem Bild oder Verbindungsfehlern – auf Deutsch.",
  path: BLOG_PATH,
  image: { url: `${BLOG_PATH}/opengraph-image`, width: 1200, height: 630, alt: "IPTV Blog – Anleitungen, Apps, Geräte & Tipps" },
});

/** Existing hub pages linked from the blog intro and the "Anleitungen" strip. Only real routes. */
const guideLinks = [
  { href: "/anleitungen", label: "Alle IPTV-Anleitungen" },
  { href: "/geraete/smart-tv", label: "Smart TV" },
  { href: "/geraete/fire-tv-stick", label: "Fire TV Stick" },
  { href: "/geraete/android-tv-box", label: "Android TV Box" },
  { href: "/geraete/mag-box", label: "MAG-Box" },
  { href: "/geraete/enigma2-receiver", label: "Enigma2-Receiver" },
  { href: "/iptv-legal", label: "IPTV legal" },
];

const inlineLink = "font-medium text-accent underline underline-offset-4 hover:text-accent-soft";

export default function BlogPage() {
  const posts = getPublishedPosts();
  const summaries = posts.map(toSummary);
  const featured = getFeaturedPosts().map(toSummary);
  const categories = getCategoriesWithCounts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${absoluteUrl(BLOG_PATH)}#blog`,
          name: "IPTV Blog – Anleitungen, Apps, Geräte & Tipps",
          url: absoluteUrl(BLOG_PATH),
          inLanguage: SITE.language,
          publisher: { "@id": `${SITE.url}/#organization` },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: absoluteUrl(blogPostPath(post.slug)),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
          })),
        }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: BLOG_PATH }]} />

      {/* ---------------------------------------------------------- Hero */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
        <Container className="relative flex flex-col gap-6 py-14 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">IPTV Hilfe & Tipps</span>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            IPTV Blog – Anleitungen, Apps, Geräte & Tipps
          </h1>
          <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-secondary sm:text-lg">
            <p>
              Im Blog erklären wir IPTV-Themen, die über eine reine Einrichtung hinausgehen: wie Apps und Funktionen wie
              Catch-up arbeiten, worauf es bei Geräten ankommt und wie Sie Probleme wie ein schwarzes Bild oder
              Verbindungsfehler gezielt lösen. Jeder Artikel ist praxisnah, technisch sauber und auf Deutsch.
            </p>
            <p>
              Für die Einrichtung Schritt für Schritt finden Sie unsere{" "}
              <Link href="/anleitungen" className={inlineLink}>
                IPTV-Anleitungen
              </Link>{" "}
              und die Geräteseiten, etwa für den{" "}
              <Link href="/geraete/fire-tv-stick" className={inlineLink}>
                Fire TV Stick
              </Link>{" "}
              oder{" "}
              <Link href="/geraete/smart-tv" className={inlineLink}>
                Smart TVs von Samsung und LG
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Featured */}
      {featured.length > 0 ? (
        <section aria-labelledby="featured-heading" className="py-14 sm:py-16">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 id="featured-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Empfohlene Artikel
              </h2>
              <p className="text-base text-muted">Ausgewählte Beiträge, mit denen Sie typische Fragen schnell klären.</p>
            </div>
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((post) => (
                <li key={post.slug} className="min-w-0">
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ---------------------------------------------------- Categories */}
      <section aria-labelledby="categories-heading" className="border-y border-border bg-background-elevated/40 py-14 sm:py-16">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 id="categories-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Themen im Blog
            </h2>
            <p className="text-base text-muted">Sechs Kategorien – von Apps über Geräte bis zur Fehlerbehebung.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug} className="min-w-0">
                <Link
                  href={categoryPath(category.slug)}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/50 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <CategoryIcon icon={category.icon} />
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {category.count === 0 ? "Bald verfügbar" : category.count === 1 ? "1 Artikel" : `${category.count} Artikel`}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                    {category.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{category.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------- Latest + search/filter */}
      <section aria-labelledby="latest-heading" className="py-14 sm:py-16">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 id="latest-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Neueste Artikel
            </h2>
            <p className="text-base text-muted">Suchen Sie nach Gerät, App oder Fehlermeldung oder filtern Sie nach Thema.</p>
          </div>
          <BlogExplorer
            posts={summaries}
            categories={categories
              .filter((category) => category.count > 0)
              .map(({ slug, name, count }) => ({ slug, name, count }))}
          />
        </Container>
      </section>

      {/* --------------------------------------------- Existing guide pages */}
      <section aria-labelledby="guides-heading" className="pb-4">
        <Container>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6 sm:p-8">
            <h2 id="guides-heading" className="text-lg font-semibold text-foreground">
              Anleitungen für Ihr Gerät
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Die Schritt-für-Schritt-Einrichtung je Gerät finden Sie auf unseren Anleitungsseiten. Ob ein Angebot legal
              ist, erklärt unsere Seite zu IPTV in Deutschland.
            </p>
            <ul className="flex flex-wrap gap-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
