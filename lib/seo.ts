import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  /** Page title without the brand; the root layout template appends " | IPTV Kaufen Direkt". */
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Use for the homepage, whose title already carries the brand. */
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  /** Page-specific social image; defaults to the sitewide /opengraph-image. */
  image?: { url: string; width: number; height: number; alt: string };
};

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE.name };

/**
 * Builds a complete per-page Metadata object. Next.js merges metadata shallowly,
 * so openGraph/twitter must be fully defined on each page or the image is lost.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
  image = OG_IMAGE,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: SITE.locale,
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
