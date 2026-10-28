type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  id,
}: SectionHeadingProps) {
  const Heading = as;
  const alignClasses = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  const size =
    as === "h1" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl lg:text-4xl";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">{eyebrow}</span>
      ) : null}
      <Heading id={id} className={`${size} font-bold tracking-tight text-balance text-foreground`}>
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
