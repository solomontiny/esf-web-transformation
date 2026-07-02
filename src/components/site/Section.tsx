import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "dark";
}) {
  const bg =
    tone === "muted" ? "bg-cream" : tone === "dark" ? "bg-primary text-primary-foreground" : "";
  return (
    <section id={id} className={`py-24 md:py-32 ${bg} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const eyebrowCls = tone === "light" ? "text-cream/70" : "text-muted-foreground";
  const ledeCls = tone === "light" ? "text-cream/80" : "text-muted-foreground";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className={`eyebrow ${eyebrowCls}`}>{eyebrow}</div>
      )}
      <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
        {title}
      </h2>
      {lede && (
        <p className={`mt-6 text-lg leading-relaxed ${ledeCls}`}>{lede}</p>
      )}
    </div>
  );
}
