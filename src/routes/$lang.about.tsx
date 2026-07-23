import { createFileRoute } from "@tanstack/react-router";
import { Check, Target, Eye, Sparkles, Award } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";
import { useCmsData, type CmsAbout } from "@/lib/cms";
import classroomImg from "@/assets/classroom.jpg";
import naplesImg from "@/assets/naples.jpg";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Chi siamo — ESF Language Services" : "About — ESF Language Services";
    const desc = params.lang === "it"
      ? "ESF Language Services: la nostra missione, visione e valori."
      : "ESF Language Services: our mission, vision and values.";
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

  const fallback: CmsAbout = {
    eyebrow: t.about.eyebrow,
    title: t.about.title,
    body: t.about.body,
    missionTitle: t.about.mission.title,
    missionBody: t.about.mission.body,
    visionTitle: t.about.vision.title,
    visionBody: t.about.vision.body,
    stats: t.about.stats,
  };
  const cms = useCmsData("about", fallback);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={naplesImg}
          alt="Naples, Italy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        <div className="relative container-page py-24 md:py-32">
          <div className="max-w-3xl fade-up">
            <div className="eyebrow flex items-center gap-2">
              <Sparkles size={12} className="text-[color:var(--gold)]" />
              {cms.eyebrow}
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-ink">
              {cms.title}
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
              {cms.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-cream p-10 md:p-12">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target size={26} strokeWidth={1.4} />
            </div>
            <h2 className="mt-6 font-serif text-3xl text-primary">{cms.missionTitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{cms.missionBody}</p>
          </div>
          <div className="rounded-3xl border border-border bg-cream p-10 md:p-12">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Eye size={26} strokeWidth={1.4} />
            </div>
            <h2 className="mt-6 font-serif text-3xl text-primary">{cms.visionTitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{cms.visionBody}</p>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="muted">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Why ESF" title={t.about.why.title} lede={t.about.why.body} />
            <img
              src={classroomImg}
              alt="ESF Language Services classroom"
              loading="lazy"
              width={1400}
              height={1000}
              className="mt-10 rounded-3xl object-cover aspect-[5/4] shadow-soft"
            />
          </div>
          <ul className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {t.about.why.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background p-6 shadow-soft"
              >
                <Check size={18} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                <span className="text-sm leading-relaxed text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Award size={26} strokeWidth={1.4} />
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight text-primary">
              {t.about.values.title}
            </h2>
          </div>
          <p className="lg:col-span-7 text-lg leading-relaxed text-foreground/85">
            {t.about.values.body}
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section tone="dark">
        <div className="grid gap-12 md:grid-cols-4 text-center">
          {cms.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-5xl md:text-6xl text-[color:var(--gold)]">{s.value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-cream/70">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Goals */}
      <Section tone="muted">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow">{t.about.goalsTitle}</div>
          <p className="mt-6 font-serif text-2xl md:text-3xl leading-snug text-ink italic">
            "{t.about.goals}"
          </p>
        </div>
      </Section>

      <CTABanner lang={l} />
    </>
  );
}
