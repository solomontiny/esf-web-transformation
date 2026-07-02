import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";
import classroomImg from "@/assets/classroom.jpg";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Chi siamo — ESF Language Service" : "About — ESF Language Service";
    const desc = params.lang === "it"
      ? "Il centro ESF Language Service a Casagiove, Caserta. La nostra storia, la nostra missione."
      : "The ESF Language Service centre in Casagiove, Caserta. Our story and our mission.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/about` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/about` }],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);
  return (
    <>
      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85 max-w-2xl">
              {t.about.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={classroomImg}
              alt="Interior of the ESF classroom in Casagiove"
              loading="lazy"
              width={1400}
              height={1000}
              className="rounded-3xl object-cover aspect-[4/5] shadow-soft"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 md:grid-cols-4 text-center">
          {t.about.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-background border border-border p-8">
              <div className="font-serif text-4xl md:text-5xl text-primary">{s.value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow">{t.about.goalsTitle}</div>
          <p className="mt-6 font-serif text-2xl md:text-3xl leading-snug text-ink">
            {t.about.goals}
          </p>
        </div>
      </Section>

      <CTABanner lang={l} />
    </>
  );
}
