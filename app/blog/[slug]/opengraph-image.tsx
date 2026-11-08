import { ImageResponse } from "next/og";
import { categoryName, getPost, getRenderablePosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Artikel aus dem IPTV Blog von IPTV Kaufen Direkt";

export function generateStaticParams() {
  return getRenderablePosts().map((post) => ({ slug: post.slug }));
}

/** Social preview per blog article – same look as the device pages, with the article title. */
export default async function BlogOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "IPTV Blog";
  const label = post ? categoryName(post.category).toUpperCase() : "IPTV BLOG";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#0a0f1c",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 90% 85%, rgba(167,139,250,0.26), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#a78bfa", letterSpacing: 3 }}>
          IPTV BLOG · {label}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: title.length > 70 ? 56 : 64, fontWeight: 800, color: "#f8fafc", lineHeight: 1.12 }}>
          {title}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "#94a3b8" }}>{SITE.name} · iptv-kaufen-direkt.de/blog</div>
      </div>
    ),
    { ...size }
  );
}
