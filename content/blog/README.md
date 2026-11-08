# IPTV Blog – neue Artikel veröffentlichen

Jeder Artikel ist eine eigene TypeScript-Datei in `content/blog/posts/`. Die Seite `/blog`,
Kategorieseiten, Sitemap, Metadaten, Lesezeit, „Ähnliche Artikel“ und die Vor/Zurück-Navigation
entstehen automatisch – `app/blog/page.tsx` muss nie bearbeitet werden.

## Neuen Artikel anlegen (Beispiel: 4. Artikel)

1. `content/blog/VORLAGE.ts` kopieren nach `content/blog/posts/epg-zeitversatz-korrigieren.ts`.
2. Felder ausfüllen, `slug: "epg-zeitversatz-korrigieren"`, `status: "draft"`.
3. In `content/blog/index.ts` registrieren:
   ```ts
   import { post as epgZeitversatz } from "./posts/epg-zeitversatz-korrigieren";
   export const allPosts: BlogPost[] = [schwarzesBild, catchUpTimeshift, mehrereGeraete, epgZeitversatz];
   ```
4. Titelbild nach `public/images/blog/epg-zeitversatz-korrigieren/` legen (16:9, z. B. 1200 × 675).
5. Lokal prüfen: `npm run dev` → http://localhost:3000/blog/epg-zeitversatz-korrigieren
   (Entwürfe sind nur lokal sichtbar und mit „noindex“ markiert).
6. Veröffentlichen: `status: "published"`, `publishedAt` auf das echte Datum setzen,
   dann `npx tsc --noEmit`, `npm run lint`, `npm run build`.

## Wichtige Felder

| Feld | Zweck |
| --- | --- |
| `status` | `"draft"` = nirgends öffentlich, nicht in Sitemap, 404 im Live-Build. `"published"` = sichtbar. |
| `featured` | `true` = erscheint unter „Empfohlene Artikel“ (die 3 neuesten markierten). |
| `category` | Eine der 6 Kategorien aus `lib/blog/categories.ts`. |
| `seoTitle` / `metaDescription` | `<title>` (ohne Marke, wird ergänzt) und Meta-Beschreibung. Einzigartig halten. |
| `keywords` | Begriffe für die Blog-Suche (Geräte, Apps, Fehlermeldungen). |
| `updatedAt` | Nur setzen, wenn der Artikel wirklich überarbeitet wurde. |
| `author` | Nur mit echter, überprüfbarer Person. Sonst weglassen (Autor = Organisation). |
| `relatedSlugs` | Wunsch-Reihenfolge für „Ähnliche Artikel“; wird automatisch aufgefüllt. |
| `furtherReading` | Links zu bestehenden Seiten (nur existierende Routen). |
| `faq` | Nur echte Fragen – wird sichtbar angezeigt und als FAQPage-Schema ausgegeben. |

Links im Text: `[Ankertext](/pfad)`. Beschreibende Ankertexte verwenden, keine „hier klicken“.
H2 = `sections[].heading`, H3 = Block `{ type: "h3" }`. Das Inhaltsverzeichnis entsteht daraus.
