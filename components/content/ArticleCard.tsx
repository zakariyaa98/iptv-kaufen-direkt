import Link from "next/link";
import type { ReactNode } from "react";

type ArticleCardProps = {
  href: string;
  title: string;
  excerpt: string;
  label?: string;
  icon?: ReactNode;
  meta?: string;
};

/** Card used for guide and device listings. The whole card is one link. */
export function ArticleCard({ href, title, excerpt, label, icon, meta }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/50"
    >
      {icon ? (
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">{icon}</span>
      ) : null}
      {label ? (
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">{label}</span>
      ) : null}
      <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-accent">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{excerpt}</p>
      <span className="mt-auto pt-2 text-sm font-semibold text-accent">
        {meta ? `${meta} · ` : ""}Weiterlesen
        <span aria-hidden> →</span>
      </span>
    </Link>
  );
}
