import type { BlogPost } from "@/lib/blog/types";
import { post as catchUpTimeshift } from "./posts/iptv-catch-up-timeshift-aufnahme";
import { post as mehrereGeraete } from "./posts/iptv-mehrere-geraete-gleichzeitig";
import { post as schwarzesBild } from "./posts/iptv-schwarzes-bild-kein-ton";
import { post as wasIstIptv } from "./posts/was-ist-iptv";

/**
 * Register of all blog articles (published and drafts).
 * New article: copy content/blog/VORLAGE.ts to content/blog/posts/<slug>.ts,
 * fill it in, then add one import line above and its name to this list.
 * Order does not matter – listings are sorted by publishedAt automatically.
 * Full guide: content/blog/README.md
 */
export const allPosts: BlogPost[] = [schwarzesBild, catchUpTimeshift, mehrereGeraete, wasIstIptv];
