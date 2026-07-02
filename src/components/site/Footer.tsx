import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { getDict, type Lang } from "@/i18n/dictionaries";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-border bg-cream">
      <div className="container-page py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo lang={lang} />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
          <div className="mt-6 flex items-start gap-3 text-sm text-foreground/80">
            <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
            <span>{t.contact.address}</span>
          </div>
        </div>

        <div>
          <h4 className="eyebrow">{t.footer.explore}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {([
              ["/$lang/about", t.nav.about],
              ["/$lang/courses", t.nav.courses],
              ["/$lang/services", t.nav.services],
              ["/$lang/faq", t.nav.faq],
              ["/$lang/payment", t.nav.payment],
              ["/$lang/contact", t.nav.contact],
            ] as const).map(([to, label]) => (
              <li key={label}>
                <Link
                  to={to}
                  params={{ lang }}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-foreground/80">
              <Phone size={14} className="text-primary" /> {t.contact.phone}
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <MessageCircle size={14} className="text-primary" /> WhatsApp {t.contact.whatsapp}
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Mail size={14} className="text-primary" /> {t.contact.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <span>© {year} ESF Language Service. {t.footer.rights}</span>
          <span>Casagiove · Caserta · Italia</span>
        </div>
      </div>
    </footer>
  );
}
