import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

export const Route = createFileRoute("/$lang/faq")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "FAQ — ESF Language Service" : "FAQ — ESF Language Service";
    const desc = params.lang === "it"
      ? "Domande frequenti su corsi, certificazioni, iscrizioni e pagamenti."
      : "Frequently asked questions about courses, certifications, enrolment and payment.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/faq` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/faq` }],
    };
  },
  component: FAQPage,
});

function FAQPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);
  return (
    <>
      <Section>
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mt-16 space-y-4 max-w-3xl">
          {t.faq.items.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-cream p-6 open:shadow-soft"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-primary [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus size={18} className="shrink-0 text-[color:var(--gold)] transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CTABanner lang={l} />
    </>
  );
}
