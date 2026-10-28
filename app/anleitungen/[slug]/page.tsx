import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/content/ArticleView";
import { getGuide, guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return pageMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    path: `/anleitungen/${guide.slug}`,
    type: "article",
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt ?? guide.publishedAt,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/anleitungen/${guide.slug}`;

  return (
    <ArticleView
      article={guide}
      path={path}
      eyebrow={`Anleitungen · ${guide.category}`}
      breadcrumbs={[
        { label: "Anleitungen", href: "/anleitungen" },
        { label: guide.title, href: path },
      ]}
    />
  );
}
