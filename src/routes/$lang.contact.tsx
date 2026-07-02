import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Send } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { getDict, type Lang } from "@/i18n/dictionaries";

export const Route = createFileRoute("/$lang/contact")({
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

function ContactPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);
  const [sent, setSent] = useState(false);

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} lede={t.contact.lede} />
          <div className="mt-12 space-y-6">
            <Info icon={<MapPin size={18} />} label="Address" value={t.contact.address} />
            <Info icon={<Phone size={18} />} label="Phone" value={t.contact.phone} href={`tel:${t.contact.phone.replace(/\s/g, "")}`} />
            <Info icon={<MessageCircle size={18} />} label="WhatsApp" value={t.contact.whatsapp} href="https://api.whatsapp.com/send?phone=3908231410601" />
            <Info icon={<Mail size={18} />} label="Email" value={t.contact.email} href={`mailto:${t.contact.email}`} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-cream p-8 md:p-10 space-y-5"
          >
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 grid place-items-center text-primary">
                  <Send size={22} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary">Grazie!</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                  Your message is ready. Connect an email service to enable delivery.
                </p>
              </div>
            ) : (
              <>
                <Field label={t.contact.form.name}>
                  <input required className="input" name="name" type="text" />
                </Field>
                <Field label={t.contact.form.email}>
                  <input required className="input" name="email" type="email" />
                </Field>
                <Field label={t.contact.form.subject}>
                  <input className="input" name="subject" type="text" />
                </Field>
                <Field label={t.contact.form.message}>
                  <textarea required className="input min-h-40 resize-y" name="message" rows={5} />
                </Field>
                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5" />
                  {t.contact.form.consent}
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  {t.contact.form.submit} <Send size={14} />
                </button>
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
