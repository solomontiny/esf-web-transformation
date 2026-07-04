import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Lock, ArrowRight, MessageCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

type Search = { course?: string };

export const Route = createFileRoute("/$lang/payment")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    course: typeof s.course === "string" ? s.course : undefined,
  }),
  head: ({ params }) => {
    const title = params.lang === "it" ? "Iscriviti — ESF Language Service" : "Enrol — ESF Language Service";
    const desc = params.lang === "it"
      ? "Iscriviti online in modo sicuro. Scegli il tuo programma."
      : "Enrol online securely. Choose the programme that fits you.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/payment` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/payment` }],
    };
  },
  component: PaymentPage,
});

function PaymentPage() {
  const { lang } = Route.useParams();
  const { course } = Route.useSearch();
  const l = lang as Lang;
  const t = getDict(l);

  return (
    <>
      <Section>
        <SectionHeader eyebrow={t.payment.eyebrow} title={t.payment.title} lede={t.payment.lede} align="center" />

        {course && (
          <div className="mx-auto mt-8 max-w-xl rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-center text-sm text-primary">
            {l === "it" ? "Corso selezionato:" : "Selected course:"} <strong>{course}</strong>
          </div>
        )}

        <div className="mt-16 grid gap-6 lg:grid-cols-3 items-start">
          {t.payment.plans.map((plan) => {
            const search: Search & { plan: string } = { plan: plan.name, ...(course ? { course } : {}) };
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-10 transition ${
                  plan.featured
                    ? "border-primary bg-primary text-primary-foreground shadow-elegant lg:-translate-y-4"
                    : "border-border bg-cream hover:-translate-y-1 hover:shadow-soft"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-10 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink">
                    {l === "it" ? "Più scelto" : "Most chosen"}
                  </div>
                )}
                <h3 className={`font-serif text-2xl ${plan.featured ? "text-primary-foreground" : "text-primary"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-5xl">{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${plan.featured ? "text-[color:var(--gold)]" : "text-primary"}`}
                      />
                      <span className={plan.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/$lang/contact"
                  params={{ lang: l }}
                  search={search}
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition ${
                    plan.featured
                      ? "bg-cream text-primary hover:bg-cream/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {t.cta.enroll} <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          <Lock size={12} className="shrink-0" /> {t.payment.disclaimer}
        </p>
      </Section>

      <Section tone="muted">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="FAQ" title={t.payment.faqTitle} />
            <a
              href="https://api.whatsapp.com/send?phone=3908231410601"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <MessageCircle size={16} /> {l === "it" ? "Scrivici su WhatsApp" : "Message us on WhatsApp"}
            </a>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {t.payment.faq.map((f) => (
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
