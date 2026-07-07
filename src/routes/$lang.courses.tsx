import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Award, Clock, Monitor, Layers, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";
import englishAsset from "@/assets/course-english.jpg.asset.json";
import spanishAsset from "@/assets/course-spanish.jpg.asset.json";
import frenchAsset from "@/assets/course-french.jpg.asset.json";
import italianAsset from "@/assets/course-italian.jpg.asset.json";
import unidaAsset from "@/assets/cert-unida.jpg.asset.json";
import gatehouseAsset from "@/assets/cert-gatehouse.jpg.asset.json";
import cambridgeAsset from "@/assets/cert-cambridge.jpg.asset.json";

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

const COURSE_IMAGES = [englishAsset.url, spanishAsset.url, frenchAsset.url, italianAsset.url];

function CoursesPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <Section>
        <SectionHeader eyebrow={t.courses.eyebrow} title={t.courses.title} lede={t.courses.lede} />

        <div className="mt-16 space-y-8">
          {t.courses.languages.map((c, i) => {
            const isOpen = openIdx === i;
            return (
              <article
                key={c.name}
                className="overflow-hidden rounded-3xl border border-border bg-background transition hover:shadow-elegant"
              >
                <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={COURSE_IMAGES[i]}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-primary-foreground">
                      <div className="eyebrow text-cream/80">Course · 0{i + 1}</div>
                      <h3 className="mt-2 font-serif text-4xl md:text-5xl">{c.name}</h3>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--gold)]">
                      {c.tagline}
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-foreground/80">{c.body}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <Meta icon={<Sparkles size={14} />} label={t.courses.priceLabel} value={c.priceFrom} />
                      <Meta icon={<Clock size={14} />} label={t.courses.durationLabel} value={c.duration} />
                      <Meta icon={<Monitor size={14} />} label={t.courses.formatLabel} value={c.format} />
                      <Meta icon={<Layers size={14} />} label={t.courses.levelsLabel} value={c.levels} />
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        to="/$lang/payment"
                        params={{ lang: l }}
                        search={{ course: c.name }}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                      >
                        {t.cta.enroll} <ArrowRight size={14} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
                      >
                        {isOpen ? t.courses.hideLabel : t.courses.detailsLabel}
                        <ChevronDown size={14} className={`transition ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="animate-fade-in border-t border-border bg-cream p-8 md:p-12">
                    <div className="grid gap-10 lg:grid-cols-3">
                      <div>
                        <h4 className="eyebrow text-primary/80">{t.courses.includesLabel}</h4>
                        <ul className="mt-4 space-y-3">
                          {c.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                              <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="eyebrow text-primary/80">{t.courses.syllabusLabel}</h4>
                        <ul className="mt-4 space-y-3">
                          {c.syllabus.map((s) => (
                            <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/85">
                              <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="eyebrow text-primary/80">{t.courses.certificationsLabel}</h4>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {c.certifications.map((cert) => (
                            <span
                              key={cert}
                              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-xs font-medium text-primary"
                            >
                              <Award size={12} /> {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
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
        <SectionHeader
          eyebrow={l === "it" ? "Certificazioni" : "Certifications"}
          title={l === "it" ? "Preparazione riconosciuta a livello internazionale" : "Internationally recognised preparation"}
          lede={l === "it"
            ? "Siamo centro accreditato per esami e preparazione con enti riconosciuti in tutto il mondo."
            : "We are an accredited preparation and examination centre partnered with globally recognised awarding bodies."}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Cambridge English", logo: cambridgeAsset.url, desc: l === "it" ? "Centro autorizzato · Preparazione ed esami A2 Key → C2 Proficiency" : "Authorised Exam Centre · A2 Key to C2 Proficiency preparation & exams" },
            { name: "Gatehouse Awards", logo: gatehouseAsset.url, desc: l === "it" ? "Qualifiche di lingua inglese regolamentate nel Regno Unito" : "UK-regulated English language qualifications" },
            { name: "UNIDA", logo: unidaAsset.url, desc: l === "it" ? "Università per Stranieri \"Dante Alighieri\" · Certificazione CECOL A2 → C2" : "Università per Stranieri \"Dante Alighieri\" · CECOL Italian certification A2 to C2" },
          ].map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-background p-8 text-center transition hover:shadow-elegant hover:-translate-y-1">
              <div className="mx-auto flex h-24 items-center justify-center">
                <img src={c.logo} alt={c.name} loading="lazy" className="max-h-20 w-auto object-contain" />
              </div>
              <div className="mt-5 font-serif text-lg text-primary">{c.name}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
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

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-cream/60 px-4 py-3">
      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
