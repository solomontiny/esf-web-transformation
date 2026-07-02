import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

export function CTABanner({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <section className="container-page py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-16 md:py-20 text-primary-foreground shadow-elegant">
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30"
          style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
        />
        <div className="relative max-w-2xl">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight">
            {t.ctaBanner.title}
          </h3>
          <p className="mt-4 text-primary-foreground/80 text-lg">{t.ctaBanner.body}</p>
          <Link
            to="/$lang/contact"
            params={{ lang }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-primary transition hover:bg-cream/90"
          >
            {t.ctaBanner.action} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
