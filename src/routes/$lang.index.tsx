import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, GraduationCap, Award, Languages, PenLine, Flag, Building2, Check, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import classroomImg from "@/assets/classroom.jpg";
import slideStudents from "@/assets/slide-students.jpg";
import slideBooks from "@/assets/slide-books.jpg";
import slideCertificate from "@/assets/slide-certificate.jpg";
import certCambridge from "@/assets/cert-cambridge.jpg";
import certGatehouse from "@/assets/cert-gatehouse.jpg";
import certUnida from "@/assets/cert-unida.jpg";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const t = getDict(params.lang);
    const title = params.lang === "it"
      ? "ESF Language Service — Corsi di inglese, francese, spagnolo e italiano · Caserta"
      : "ESF Language Service — English, French, Spanish & Italian courses in Caserta";
    const description = params.lang === "it"
      ? "Studio linguistico a Casagiove, Caserta. Corsi individuali e di gruppo, traduzioni e certificazioni, dal 2016."
      : "Boutique language studio in Casagiove, Caserta. Private and group courses, translations and certifications since 2016.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/${params.lang}` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}` }],
    };
  },
  component: Home,
});

const ICONS = [GraduationCap, Award, Languages, PenLine, Flag, Building2];

function Home() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);
  const accreditationLogos = [
    { src: certCambridge, alt: "Cambridge English" },
    { src: certGatehouse, alt: "Gatehouse Awards" },
    { src: certUnida, alt: "UNIDA" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 15% 10%, oklch(0.72 0.13 78 / 0.15), transparent 60%), radial-gradient(50% 50% at 90% 90%, oklch(0.24 0.09 265 / 0.12), transparent 60%)",
          }}
        />
        <div className="container-page grid gap-14 pt-14 pb-24 md:pt-20 md:pb-32 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="eyebrow flex items-center gap-2">
              <Sparkles size={12} className="text-[color:var(--gold)]" />
              {t.hero.eyebrow}
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-ink">
              {t.hero.title}{" "}
              <em className="not-italic bg-gradient-to-r from-[color:var(--gold)] to-[oklch(0.55_0.12_78)] bg-clip-text text-transparent italic">
                {t.hero.titleAccent}
              </em>
              .
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.lede}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/$lang/contact"
                params={{ lang: l }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 shadow-soft"
              >
                {t.cta.book} <ArrowRight size={16} />
              </Link>
              <Link
                to="/$lang/courses"
                params={{ lang: l }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                {t.cta.explore}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border/60 pt-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {l === "it" ? "Accreditamenti" : "Accreditations"}
              </span>
              {accreditationLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} loading="lazy" className="h-7 w-auto object-contain" />
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span>Rated 4.9 · 1,200+ learners since 2016</span>
            </div>
          </div>

          <div className="lg:col-span-5 fade-up" style={{ animationDelay: "120ms" }}>
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <Section tone="muted">
        <SectionHeader eyebrow="ESF Language Service" title={t.pillars.title} align="center" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.items.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border bg-background p-8 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="text-sm font-serif text-[color:var(--gold)]">0{i + 1}</div>
              <h3 className="mt-6 text-lg font-serif text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INTRO */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <img
              src={classroomImg}
              alt="ESF Language Service classroom"
              loading="lazy"
              width={1400}
              height={1000}
              className="rounded-3xl object-cover aspect-[5/4] shadow-soft"
            />
          </div>
          <div className="lg:col-span-6">
            <div className="eyebrow">{t.intro.eyebrow}</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">{t.intro.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.intro.body}</p>
            <Link
              to="/$lang/courses"
              params={{ lang: l }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              {t.cta.explore} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section tone="muted">
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} lede={t.services.lede} />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i] ?? GraduationCap;
            return (
              <div key={s.title} className="group relative bg-background p-8 transition hover:bg-cream">
                <Icon size={26} className="text-primary" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-xl text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to="/$lang/services"
                  params={{ lang: l }}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]"
                >
                  {t.cta.discover} <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* STATS */}
      <Section tone="dark" className="!py-24">
        <div className="grid gap-12 md:grid-cols-4 text-center">
          {t.about.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-5xl md:text-6xl text-[color:var(--gold)]">{s.value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-cream/70">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((it) => (
            <figure key={it.name} className="rounded-3xl border border-border bg-cream p-8">
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl leading-snug text-ink">
                “{it.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="font-medium text-primary">{it.name}</div>
                <div className="text-muted-foreground">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ TEASER */}
      <Section tone="muted">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">{t.faq.eyebrow}</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">{t.faq.title}</h2>
            <Link
              to="/$lang/faq"
              params={{ lang: l }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              See all questions <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {t.faq.items.slice(0, 4).map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-background p-6 open:shadow-soft"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Check size={16} className="transition group-open:rotate-45 text-[color:var(--gold)]" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner lang={l} />
    </>
  );
}

const SLIDES = [
  { img: heroImg, badge: "A1 → C2", caption: "Every CEFR level, one studio" },
  { img: slideStudents, badge: "1,200+", caption: "Learners since 2016" },
  { img: slideBooks, badge: "4 langs", caption: "English · Italian · Spanish · French" },
  { img: slideCertificate, badge: "Cambridge · CECOL", caption: "Accredited exam centre" },
  { img: classroomImg, badge: "In studio · Online", caption: "Casagiove & worldwide" },
];

function HeroSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  const current = SLIDES[idx];
  return (
    <div className="relative">
      <div className="absolute -left-6 -top-6 hidden md:block h-24 w-24 rounded-full border border-[color:var(--gold)]/50" />
      <div className="absolute -right-6 -bottom-6 hidden md:block h-32 w-32 rounded-full bg-cream" />
      <div className="relative overflow-hidden rounded-3xl shadow-elegant aspect-[4/5]">
        {SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.img}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
      <div
        key={idx}
        className="absolute -left-4 bottom-8 md:-left-10 rounded-2xl border border-border bg-background/95 backdrop-blur px-5 py-4 shadow-soft w-60 animate-fade-in"
      >
        <div className="text-2xl font-serif text-primary">{current.badge}</div>
        <div className="mt-1 text-xs text-muted-foreground">{current.caption}</div>
      </div>
    </div>
  );
}
