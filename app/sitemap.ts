import type { MetadataRoute } from "next";
import { ANLEITUNGEN_UPDATED } from "@/lib/anleitungen-content";
import { blogCategories, blogPostPath, categoryPath, getPostsByCategory, getPublishedPosts, latestBlogUpdate } from "@/lib/blog";
import { devices } from "@/lib/devices";
import { guides } from "@/lib/guides";
import { LEGAL_IPTV_UPDATED } from "@/lib/legal-iptv";
import { LEGAL, absoluteUrl } from "@/lib/site";

const SITE_UPDATED = "2026-10-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; lastModified?: string }[] = [
    { path: "/", priority: 1 },
    { path: "/iptv-pakete", priority: 0.9 },
    { path: "/angebote", priority: 0.9 },
    { path: "/anleitungen", priority: 0.8, lastModified: ANLEITUNGEN_UPDATED },
    { path: "/iptv-legal", priority: 0.8, lastModified: LEGAL_IPTV_UPDATED },
    { path: "/blog", priority: 0.8, lastModified: latestBlogUpdate() },
    { path: "/faq", priority: 0.6 },
    { path: "/kontakt", priority: 0.6 },
    { path: "/ueber-uns", priority: 0.5 },
    { path: "/impressum", priority: 0.2, lastModified: LEGAL.lastUpdated },
    { path: "/datenschutz", priority: 0.2, lastModified: LEGAL.lastUpdated },
    { path: "/agb", priority: 0.2, lastModified: LEGAL.lastUpdated },
    { path: "/widerruf", priority: 0.2, lastModified: LEGAL.lastUpdated },
  ];

  return [
    ...pages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: page.lastModified ?? SITE_UPDATED,
      priority: page.priority,
    })),
    ...devices.map((device) => ({
      url: absoluteUrl(`/geraete/${device.slug}`),
      lastModified: device.updatedAt ?? device.publishedAt,
      priority: 0.7,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/anleitungen/${guide.slug}`),
      lastModified: guide.updatedAt ?? guide.publishedAt,
      priority: 0.7,
    })),
    // Published blog articles only – drafts never reach the sitemap.
    ...getPublishedPosts().map((post) => ({
      url: absoluteUrl(blogPostPath(post.slug)),
      lastModified: post.updatedAt ?? post.publishedAt,
      priority: 0.7,
    })),
    // Category pages without articles are noindex, so they are left out here as well.
    ...blogCategories.flatMap((category) => {
      const posts = getPostsByCategory(category.slug);
      if (posts.length === 0) return [];
      const lastModified = posts.map((post) => post.updatedAt ?? post.publishedAt).sort().at(-1);
      return [{ url: absoluteUrl(categoryPath(category.slug)), lastModified, priority: 0.5 }];
    }),
  ];
}
