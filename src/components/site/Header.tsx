import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getDict, type Lang } from "@/i18n/dictionaries";

export function Header({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav: { to: any; params: any; label: string }[] = [
    { to: "/$lang/about", params: { lang }, label: t.nav.about },
    { to: "/$lang/courses", params: { lang }, label: t.nav.courses },
    { to: "/$lang/services", params: { lang }, label: t.nav.services },
    { to: "/$lang/faq", params: { lang }, label: t.nav.faq },
    { to: "/$lang/contact", params: { lang }, label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-soft"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-24 items-center justify-between gap-6">
        <Logo lang={lang} />

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              params={n.params}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher current={lang} />
          <Link
            to="/$lang/payment"
            params={{ lang }}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            {t.nav.payment}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden -mr-2 p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                params={n.params}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-foreground hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/$lang/payment"
              params={{ lang }}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {t.nav.payment}
            </Link>
            <div className="mt-3 flex justify-center">
              <LanguageSwitcher current={lang} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
