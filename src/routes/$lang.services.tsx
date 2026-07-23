import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Award, FileCheck, Plane, School, Home as HomeIcon, Compass, Languages, PenLine, BookOpen, ScrollText, Users, Palmtree, Globe, Sparkles, Briefcase, FileText, HeartHandshake, Building2, ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";
import { useCmsData, type CmsServices } from "@/lib/cms";

const ICONS = [
  Languages, Award, FileCheck, Plane, School, HomeIcon, Compass, GraduationCap, Users,
  BookOpen, PenLine, ScrollText, Palmtree, Globe, Sparkles, HeartHandshake, Briefcase, FileText, Building2,
];

export const Route = createFileRoute("/$lang/services")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Servizi — ESF Language Services" : "Services — ESF Language Services";
    const desc = params.lang === "it"
      ? "Corsi, certificazioni, visti studente, ammissioni universitarie, traduzioni, editing, integrazione e molto altro."
      : "Language courses, certifications, student visas, university admissions, translations, editing, integration and more.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/services` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/services` }],
    };
  },
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);

  const fallback: CmsServices = {
    eyebrow: t.detailed.eyebrow,
    title: t.detailed.title,
    lede: t.detailed.lede,
    services: t.detailed.services.map((s) => ({
      title: s.title,
      intro: s.intro,
      bullets: [...s.bullets],
    })),
  };
  const cms = useCmsData("services", fallback);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-cream to-background">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl fade-up">
            <div className="eyebrow flex items-center gap-2">
              <Sparkles size={12} className="text-[color:var(--gold)]" />
              {cms.eyebrow}
            </div>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink">
              {cms.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{cms.lede}</p>
          </div>
        </div>
      </section>

      {/* Quick grid */}
      <Section>
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} lede={t.services.lede} />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i] ?? GraduationCap;
            return (
              <a
                href={`#service-${i}`}
                key={s.title}
                className="group relative bg-background p-8 transition hover:bg-cream"
              >
                <Icon size={26} className="text-primary" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-xl text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  {t.cta.learnMore} <ArrowRight size={12} />
                </span>
              </a>
            );
          })}
        </div>
      </Section>

      {/* Detailed */}
      <Section tone="muted" className="!py-24">
        <div className="space-y-10">
          {cms.services.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article
                id={`service-${i}`}
                key={s.title || i}
                className="scroll-mt-24 rounded-3xl border border-border bg-background p-8 md:p-12 shadow-soft"
              >
                <div className="grid gap-10 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={26} strokeWidth={1.4} />
                    </div>
                    <div className="mt-6 text-sm font-serif text-[color:var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-2 font-serif text-2xl md:text-3xl text-primary leading-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-base leading-relaxed text-foreground/85">{s.intro}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3 text-sm text-foreground/80">
                          <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/$lang/contact"
                      params={{ lang: l }}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      {t.cta.contact} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <CTABanner lang={l} />
    </>
  );
}
