import type { BlogPost } from "@/lib/blog/types";

/**
 * VORLAGE für einen neuen Blogartikel.
 *
 * 1. Datei kopieren nach content/blog/posts/<slug>.ts (Dateiname = slug).
 * 2. Alle Felder ausfüllen. Solange status "draft" ist, erscheint der Artikel nirgends öffentlich.
 *    Lokal (npm run dev) können Sie ihn unter http://localhost:3000/blog/<slug> ansehen.
 * 3. In content/blog/index.ts importieren und in allPosts eintragen.
 * 4. Titelbild nach public/images/blog/<slug>/ legen (16:9, z. B. 1200 × 675, WebP oder SVG).
 * 5. Zum Veröffentlichen status auf "published" setzen und publishedAt auf das echte Datum.
 *
 * Diese Datei selbst ist nicht registriert und wird daher nie veröffentlicht.
 */
export const post: BlogPost = {
  slug: "neuer-artikel-slug",
  status: "draft",
  featured: false,
  // iptv-apps | iptv-einrichtung | iptv-geraete | iptv-fehlerbehebung | iptv-grundlagen | news-updates
  category: "iptv-geraete",
  title: "Sichtbare Überschrift (H1) mit dem Hauptkeyword",
  seoTitle: "SEO-Titel, max. ca. 60 Zeichen (Markenname wird automatisch ergänzt)",
  metaDescription: "140–160 Zeichen: Was lernt der Leser, und warum lohnt sich der Klick?",
  excerpt: "Ein bis zwei Sätze für die Artikelkarten.",
  keywords: ["Suchbegriff 1", "Gerätename", "Fehlermeldung"],
  publishedAt: "2026-01-01",
  // updatedAt: "2026-02-01", // erst setzen, wenn der Artikel inhaltlich überarbeitet wurde
  image: {
    src: "/images/blog/neuer-artikel-slug/titelbild.webp",
    width: 1200,
    height: 675,
    alt: "Beschreiben, was auf dem Bild zu sehen ist",
  },
  intro: ["Einleitung, die die Suchfrage direkt beantwortet."],
  summary: ["Kernaussage 1", "Kernaussage 2"],
  sections: [
    {
      heading: "Erste H2-Überschrift",
      blocks: [
        { type: "p", text: "Absatz mit [internem Link](/anleitungen) im Text." },
        { type: "h3", text: "Eine H3-Unterüberschrift" },
        { type: "list", items: ["Punkt A", "Punkt B"] },
        { type: "steps", items: ["Schritt 1", "Schritt 2"] },
        { type: "table", headers: ["Spalte 1", "Spalte 2"], rows: [["Zeile", "Wert"]], caption: "Optional" },
        { type: "note", text: "Hinweisbox" },
        { type: "code", code: "http://anbieter.example:8080", caption: "Nur Platzhalterdaten verwenden" },
        // { type: "image", src: "/images/blog/neuer-artikel-slug/grafik.svg", width: 1200, height: 600, alt: "…", caption: "…" },
      ],
    },
  ],
  faq: [{ question: "Echte Frage, die der Artikel beantwortet?", answer: "Kurze, vollständige Antwort." }],
  relatedSlugs: [],
  furtherReading: [{ href: "/anleitungen", label: "Passende bestehende Seite" }],
};
