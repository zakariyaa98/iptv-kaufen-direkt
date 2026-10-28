import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-soft shadow-[0_0_0_1px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]",
  secondary:
    "border border-border-strong bg-transparent text-foreground hover:border-accent hover:text-accent",
  whatsapp: "bg-[#25D366] text-[#052e16] hover:brightness-110",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200";

export function Button({ href, external, variant = "primary", className, children }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
