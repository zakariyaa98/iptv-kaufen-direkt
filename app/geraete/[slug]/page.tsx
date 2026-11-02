import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/content/ArticleView";
import { devices, getDevice } from "@/lib/devices";
import { pageMetadata } from "@/lib/seo";
import { deviceWhatsAppLink } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

// Devices with their own static route (app/geraete/<slug>/page.tsx) are rendered there, not here.
const OWN_PAGE_SLUGS = new Set(["smart-tv", "fire-tv-stick"]);

export function generateStaticParams() {
  return devices.filter((device) => !OWN_PAGE_SLUGS.has(device.slug)).map((device) => ({ slug: device.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const device = getDevice(slug);
  if (!device) return {};

  return pageMetadata({
    title: device.seoTitle,
    description: device.metaDescription,
    path: `/geraete/${device.slug}`,
    type: "article",
    publishedTime: device.publishedAt,
    modifiedTime: device.updatedAt ?? device.publishedAt,
  });
}

export default async function DevicePage({ params }: PageProps) {
  const { slug } = await params;
  const device = getDevice(slug);
  if (!device) notFound();

  const path = `/geraete/${device.slug}`;

  return (
    <ArticleView
      article={device}
      path={path}
      eyebrow={`Geräte · ${device.shortName}`}
      breadcrumbs={[
        { label: "Anleitungen", href: "/anleitungen" },
        { label: device.shortName, href: path },
      ]}
      whatsappLink={deviceWhatsAppLink(device.name)}
    />
  );
}
