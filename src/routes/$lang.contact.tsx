import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Send } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { getDict, type Lang } from "@/i18n/dictionaries";

type Search = { plan?: string; course?: string };

export const Route = createFileRoute("/$lang/contact")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    plan: typeof s.plan === "string" ? s.plan : undefined,
    course: typeof s.course === "string" ? s.course : undefined,
  }),
  head: ({ params }) => {
    const title = params.lang === "it" ? "Contatti — ESF Language Service" : "Contact — ESF Language Service";
    const desc = params.lang === "it"
      ? "Vieni a trovarci a Casagiove, scrivici o chiamaci."
      : "Visit us in Casagiove, or reach us by phone, email or WhatsApp.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/contact` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/contact` }],
    };
  },
  component: ContactPage,
});

const WHATSAPP_NUMBER = "3908231410601";

function ContactPage() {
  const { lang } = Route.useParams();
  const { plan, course } = Route.useSearch();
  const l = lang as Lang;
  const t = getDict(l);
  const [sent, setSent] = useState(false);

  const isEnrollment = Boolean(plan || course);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: isEnrollment
      ? l === "it"
        ? `Iscrizione${course ? ` — ${course}` : ""}${plan ? ` (${plan})` : ""}`
        : `Enrolment${course ? ` — ${course}` : ""}${plan ? ` (${plan})` : ""}`
      : "",
    message: isEnrollment
      ? l === "it"
        ? `Ciao ESF, vorrei iscrivermi${course ? ` al corso di ${course}` : ""}${plan ? ` con il piano ${plan}` : ""}. Potete contattarmi per confermare?`
        : `Hello ESF, I would like to enrol${course ? ` in the ${course} course` : ""}${plan ? ` on the ${plan} plan` : ""}. Please get in touch to confirm.`
      : "",
  });

  useEffect(() => {
    if (isEnrollment) {
      const el = document.getElementById("enrolment-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isEnrollment]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `${l === "it" ? "Nome" : "Name"}: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `${l === "it" ? "Telefono" : "Phone"}: ${form.phone}` : null,
      form.subject ? `${l === "it" ? "Oggetto" : "Subject"}: ${form.subject}` : null,
      "",
      form.message,
    ].filter(Boolean).join("\n");
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={t.contact.eyebrow} title={isEnrollment ? (l === "it" ? "Completa la tua iscrizione" : "Complete your enrolment") : t.contact.title} lede={isEnrollment ? (l === "it" ? "Inserisci i tuoi dati — il tuo messaggio arriverà direttamente al nostro team via WhatsApp." : "Fill in your details — your message goes straight to our team via WhatsApp.") : t.contact.lede} />
          <div className="mt-12 space-y-6">
            <Info icon={<MapPin size={18} />} label="Address" value={t.contact.address} />
            <DualContact
              label={l === "it" ? "Mobile" : "Mobile"}
              display="+39 338 922 8520"
              telHref="tel:+393389228520"
              waHref="https://api.whatsapp.com/send?phone=393389228520"
            />
            <DualContact
              label={l === "it" ? "Ufficio" : "Office"}
              display="+39 0823 141 0601"
              telHref="tel:+390823141061"
              waHref="https://api.whatsapp.com/send?phone=3908231410601"
            />
            <Info icon={<Mail size={18} />} label="Email" value={t.contact.email} href={`mailto:${t.contact.email}`} />
          </div>
        </div>

        <div className="lg:col-span-7" id="enrolment-form">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-cream p-8 md:p-10 space-y-5"
          >
            {isEnrollment && (
              <div className="rounded-2xl border border-primary/20 bg-background px-5 py-4">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  {l === "it" ? "La tua iscrizione" : "Your enrolment"}
                </div>
                <div className="mt-1 text-sm text-foreground">
                  {course && <><strong>{course}</strong>{plan && " · "}</>}
                  {plan && <span>{plan} {l === "it" ? "piano" : "plan"}</span>}
                </div>
              </div>
            )}

            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-14 w-14 rounded-full bg-[#25D366]/15 grid place-items-center text-[#25D366]">
                  <MessageCircle size={22} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary">
                  {l === "it" ? "Ci siamo!" : "You're set!"}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                  {l === "it"
                    ? "Abbiamo aperto WhatsApp con il tuo messaggio precompilato. Premi Invia per completare."
                    : "We've opened WhatsApp with your message ready to send. Tap Send to complete."}
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-primary underline underline-offset-4"
                >
                  {l === "it" ? "Invia un altro" : "Send another"}
                </button>
              </div>
            ) : (
              <>
                <Field label={t.contact.form.name}>
                  <input required className="input" name="name" type="text" value={form.name} onChange={handleChange} />
                </Field>
                <Field label={t.contact.form.email}>
                  <input required className="input" name="email" type="email" value={form.email} onChange={handleChange} />
                </Field>
                <Field label={l === "it" ? "Telefono (opzionale)" : "Phone (optional)"}>
                  <input className="input" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </Field>
                <Field label={t.contact.form.subject}>
                  <input className="input" name="subject" type="text" value={form.subject} onChange={handleChange} />
                </Field>
                <Field label={t.contact.form.message}>
                  <textarea required className="input min-h-40 resize-y" name="message" rows={5} value={form.message} onChange={handleChange} />
                </Field>
                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5" />
                  {t.contact.form.consent}
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  <MessageCircle size={16} />
                  {l === "it" ? "Invia via WhatsApp" : "Send via WhatsApp"}
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  {l === "it"
                    ? "Il modulo aprirà WhatsApp con il tuo messaggio precompilato."
                    : "The form will open WhatsApp with your message pre-filled."}
                </p>
              </>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px oklch(0.55 0.08 155 / 0.15); }
      `}</style>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function DualContact({ label, display, telHref, waHref }: { label: string; display: string; telHref: string; waHref: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Phone size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <a href={telHref} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{display}</a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${display}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-2.5 py-1 text-[11px] font-medium text-[#128C7E] hover:bg-[#25D366]/20 transition"
          >
            <MessageCircle size={12} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm text-foreground/90 truncate">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 group">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-4">{inner}</div>
  );
}
