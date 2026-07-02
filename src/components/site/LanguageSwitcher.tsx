import { Link, useRouterState } from "@tanstack/react-router";
import type { Lang } from "@/i18n/dictionaries";

export function LanguageSwitcher({ current }: { current: Lang }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // swap /en/... <-> /it/...
  const swap = (target: Lang) => {
    const rest = pathname.replace(/^\/(en|it)/, "");
    return `/${target}${rest || ""}` as string;
  };
  const langs: Lang[] = ["en", "it"];
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 p-1 text-xs">
      {langs.map((l) => (
        <Link
          key={l}
          to={swap(l)}
          className={`rounded-full px-3 py-1 font-medium tracking-wider uppercase transition ${
            current === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
