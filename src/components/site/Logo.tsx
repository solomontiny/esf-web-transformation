import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/dictionaries";

export function Logo({ lang, tone = "dark" }: { lang: Lang; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-cream" : "text-primary";
  return (
    <Link to="/$lang" params={{ lang }} className={`group inline-flex items-center gap-3 ${color}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <text
          x="50%" y="53%" textAnchor="middle" dominantBaseline="middle"
          fontFamily="Playfair Display, serif" fontSize="16" fontStyle="italic" fontWeight="500"
          fill="currentColor"
        >
          esf
        </text>
        <circle cx="30" cy="12" r="1.6" fill="var(--gold)" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-base tracking-tight">ESF Language Service</span>
        <span className="text-[10px] font-medium tracking-[0.22em] uppercase opacity-70">
          Est. 2016 · Casagiove
        </span>
      </span>
    </Link>
  );
}
