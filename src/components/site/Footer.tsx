import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, FileText, Building2 } from "lucide-react";
import { Logo } from "./Logo";
import { getDict, type Lang } from "@/i18n/dictionaries";
import unidaLogo from "@/assets/naples.jpg";
import gatehouseLogo from "@/assets/slide-books.jpg";
import cambridgeLogo from "@/assets/slide-certificate.jpg";

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

          <div className="mt-8">
            <h4 className="eyebrow">{lang === "it" ? "Accreditamenti" : "Accreditations"}</h4>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <img src={cambridgeLogo} alt="Cambridge English" className="h-10 w-auto object-contain" />
              <img src={gatehouseLogo} alt="Gatehouse Awards" className="h-10 w-auto object-contain" />
              <img src={unidaLogo} alt="UNIDA" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="eyebrow">{t.footer.explore}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {([
              ["/$lang/about", t.nav.about],
              ["/$lang/courses", t.nav.courses],
              ["/$lang/services", t.nav.services],
              ["/$lang/gallery", t.nav.gallery],
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
              <Phone size={14} className="text-primary shrink-0" />
              <a href="tel:+393389228520" className="hover:text-primary transition-colors">+39 338 922 8520</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <MessageCircle size={14} className="text-primary shrink-0" />
              <a href="tel:+3908231410601" className="hover:text-primary transition-colors">+39 0823 141 0601</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Mail size={14} className="text-primary shrink-0" />
              <a href="mailto:info@esflanguageservice.com" className="hover:text-primary transition-colors truncate">info@esflanguageservice.com</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <a href="https://esflanguageservice.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">esflanguageservice.com</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <ShieldCheck size={14} className="text-primary shrink-0" />
              <a href="mailto:esflanguageservice@pec.it" className="hover:text-primary transition-colors truncate">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mr-1">PEC</span>
                esflanguageservice@pec.it
              </a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <FileText size={14} className="text-primary shrink-0" />
              <span><span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mr-1">C.F.</span>04964450615</span>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Building2 size={14} className="text-primary shrink-0" />
              <span><span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mr-1">P.IVA</span>04964450615</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <span>© {year} ESF Language Service S.a.s · Di Palmiero Luigia &amp; C. · Studio Linguistico. {t.footer.rights}</span>
          <span>Casagiove · Caserta · Italia</span>
        </div>
      </div>
    </footer>
  );
}
