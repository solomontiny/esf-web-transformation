import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

export const Route = createFileRoute("/$lang/courses")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Corsi — ESF Language Service" : "Courses — ESF Language Service";
    const desc = params.lang === "it"
      ? "Corsi di inglese, francese, spagnolo e italiano per bambini, ragazzi e adulti."
      : "English, French, Spanish and Italian courses for children, teenagers and adults.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/courses` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/courses` }],
    };
  },
  component: CoursesPage,
});

function CoursesPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);
  return (
    <>
      <Section>
        <SectionHeader eyebrow={t.courses.eyebrow} title={t.courses.title} lede={t.courses.lede} />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.courses.languages.map((c, i) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-cream p-10 transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="text-sm font-serif text-[color:var(--gold)]">Course · 0{i + 1}</div>
              <h3 className="mt-4 font-serif text-4xl text-primary">{c.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">{c.body}</p>
              <Link
                to="/$lang/contact"
                params={{ lang: l }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                {t.cta.book} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="CEFR" title={t.courses.levelsTitle} />
          </div>
          <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
            {t.courses.levels.map((lvl) => (
              <div key={lvl} className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4">
                <Check size={16} className="text-[color:var(--gold)]" />
                <span className="text-sm font-medium">{lvl}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-primary text-primary-foreground p-12 md:p-16">
          <div className="max-w-2xl">
            <div className="eyebrow text-cream/70">Online</div>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl">{t.courses.distanceTitle}</h3>
            <p className="mt-4 text-primary-foreground/80 text-lg">{t.courses.distanceBody}</p>
          </div>
        </div>
      </Section>

      <CTABanner lang={l} />
    </>
  );
}
