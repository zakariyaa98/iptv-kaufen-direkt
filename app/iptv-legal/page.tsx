import type { Metadata } from "next";
import { ArticleView } from "@/components/content/ArticleView";
import { legalIptvArticle } from "@/lib/legal-iptv";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: legalIptvArticle.seoTitle,
  description: legalIptvArticle.metaDescription,
  path: "/iptv-legal",
  type: "article",
  publishedTime: legalIptvArticle.publishedAt,
  modifiedTime: legalIptvArticle.updatedAt ?? legalIptvArticle.publishedAt,
});

export default function IptvLegalPage() {
  return (
    <ArticleView
      article={legalIptvArticle}
      path="/iptv-legal"
      eyebrow="Rechtliches & Orientierung"
      breadcrumbs={[{ label: "IPTV legal", href: "/iptv-legal" }]}
    />
  );
}
