import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, Languages, PenLine, Flag, Building2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

const ICONS = [GraduationCap, Award, Languages, PenLine, Flag, Building2];

export const Route = createFileRoute("/$lang/services")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Servizi — ESF Language Service" : "Services — ESF Language Service";
    const desc = params.lang === "it"
      ? "Corsi, certificazioni, traduzioni, editing, italiano per stranieri e corsi aziendali."
      : "Courses, certifications, translations, editing, Italian for foreigners and corporate programmes.";
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
  return (
    <>
      <Section>
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} lede={t.services.lede} />
        <div className="mt-16 space-y-6">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i] ?? GraduationCap;
            return (
              <div
                key={s.title}
                className="grid gap-8 rounded-3xl border border-border bg-cream p-10 md:grid-cols-12 md:items-center transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="md:col-span-1 text-sm font-serif text-[color:var(--gold)]">
                  0{i + 1}
                </div>
                <div className="md:col-span-2">
                  <Icon size={40} strokeWidth={1.2} className="text-primary" />
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl text-primary">{s.title}</h3>
                </div>
                <p className="md:col-span-4 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
      <CTABanner lang={l} />
    </>
  );
}
