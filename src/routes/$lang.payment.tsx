import { createFileRoute } from "@tanstack/react-router";
import { Check, Lock } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

export const Route = createFileRoute("/$lang/payment")({
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
  const l = lang as Lang;
  const t = getDict(l);
  return (
    <>
      <Section>
        <SectionHeader eyebrow={t.payment.eyebrow} title={t.payment.title} lede={t.payment.lede} align="center" />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.payment.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-10 transition ${
                plan.featured
                  ? "border-primary bg-primary text-primary-foreground shadow-elegant lg:-translate-y-4"
                  : "border-border bg-cream"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-10 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink">
                  Most chosen
                </div>
              )}
              <h3 className={`font-serif text-2xl ${plan.featured ? "text-primary-foreground" : "text-primary"}`}>
                {plan.name}
              </h3>
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
              <button
                type="button"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  plan.featured
                    ? "bg-cream text-primary hover:bg-cream/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {t.cta.enroll}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock size={12} /> {t.payment.disclaimer}
        </p>
      </Section>
      <CTABanner lang={l} />
    </>
  );
}
