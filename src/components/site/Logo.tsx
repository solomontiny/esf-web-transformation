import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/dictionaries";
import logoImg from "@/assets/logo.jpg";

export function Logo({ lang, tone = "dark", size = "md" }: { lang: Lang; tone?: "dark" | "light"; size?: "sm" | "md" | "lg" }) {
  const textColor = tone === "light" ? "text-cream" : "text-primary";
  const h = size === "lg" ? "h-16 md:h-20" : size === "sm" ? "h-9" : "h-12 md:h-14";
  return (
    <Link
      to="/$lang"
      params={{ lang }}
      aria-label="ESF Language Service — Home"
      className={`group inline-flex items-center gap-3 ${textColor}`}
    >
      <img
        src={logoImg}
        alt="ESF Language Service"
        className={`${h} w-auto object-contain transition-transform group-hover:scale-105`}
        style={{ mixBlendMode: tone === "light" ? "screen" : "multiply" }}
      />
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="font-serif text-base md:text-lg tracking-tight">ESF Language Service</span>
        <span className="text-[10px] font-medium tracking-[0.16em] uppercase opacity-70">
          Di Palmiero Luigia &amp; C. · Studio Linguistico
        </span>
      </span>
    </Link>
  );
}
