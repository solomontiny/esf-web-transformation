import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import type { Lang } from "@/i18n/dictionaries";
import classroom from "@/assets/classroom.jpg";
import hero from "@/assets/hero.jpg";
import naples from "@/assets/naples.jpg";
import slideStudents from "@/assets/slide-students.jpg";
import slideBooks from "@/assets/slide-books.jpg";
import slideCert from "@/assets/slide-certificate.jpg";
import courseEnglish from "@/assets/course-english.jpg.asset.json";
import courseFrench from "@/assets/course-french.jpg.asset.json";
import courseSpanish from "@/assets/course-spanish.jpg.asset.json";
import courseItalian from "@/assets/course-italian.jpg.asset.json";

type Category = "all" | "studio" | "students" | "destinations" | "certifications";

type Item = { src: string; alt: string; category: Exclude<Category, "all">; span?: string };

const ITEMS: Item[] = [
  { src: hero, alt: "ESF studio interior", category: "studio", span: "md:col-span-2 md:row-span-2" },
  { src: slideStudents, alt: "Students in class", category: "students" },
  { src: courseEnglish.url, alt: "English destinations", category: "destinations" },
  { src: classroom, alt: "Classroom", category: "studio" },
  { src: slideCert, alt: "Certification day", category: "certifications" },
  { src: courseFrench.url, alt: "French destinations", category: "destinations", span: "md:col-span-2" },
  { src: slideBooks, alt: "Course materials", category: "studio" },
  { src: courseSpanish.url, alt: "Spanish learning", category: "destinations" },
  { src: naples, alt: "Naples", category: "destinations" },
  { src: courseItalian.url, alt: "Italian culture", category: "destinations" },
];

export const Route = createFileRoute("/$lang/gallery")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Galleria — ESF Language Service" : "Gallery — ESF Language Service";
    const desc = params.lang === "it"
      ? "Fotografie dello studio, dei nostri studenti, delle certificazioni e delle destinazioni ESF."
      : "Photographs of our studio, students, certifications and ESF destinations.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/gallery` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/gallery` }],
    };
  },
  component: GalleryPage,
});

function GalleryPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const [cat, setCat] = useState<Category>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = useMemo(() => (cat === "all" ? ITEMS : ITEMS.filter((i) => i.category === cat)), [cat]);

  const cats: { id: Category; label: string }[] = [
    { id: "all", label: l === "it" ? "Tutte" : "All" },
    { id: "studio", label: l === "it" ? "Studio" : "Studio" },
    { id: "students", label: l === "it" ? "Studenti" : "Students" },
    { id: "certifications", label: l === "it" ? "Certificazioni" : "Certifications" },
    { id: "destinations", label: l === "it" ? "Destinazioni" : "Destinations" },
  ];

  function prev() { setOpenIdx((i) => (i === null ? i : (i + filtered.length - 1) % filtered.length)); }
  function next() { setOpenIdx((i) => (i === null ? i : (i + 1) % filtered.length)); }

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow={l === "it" ? "Galleria" : "Gallery"}
          title={l === "it" ? "Momenti dallo Studio Linguistico" : "Moments from the Studio Linguistico"}
          lede={l === "it"
            ? "Uno sguardo alla nostra sede, ai nostri studenti e ai luoghi che ispirano il loro percorso."
            : "A look inside our studio, our learners, and the places that inspire their journey."}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition ${
                cat === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {filtered.map((item, i) => (
            <button
              key={item.src + i}
              onClick={() => setOpenIdx(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-cream ${item.span ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-4 text-left text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground opacity-0 transition group-hover:opacity-100">
                {item.alt}
              </div>
            </button>
          ))}
        </div>
      </Section>

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIdx(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
            aria-label="Close"
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <ChevronRight size={22} />
          </button>
          <img
            src={filtered[openIdx].src}
            alt={filtered[openIdx].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-elegant"
          />
        </div>
      )}

      <CTABanner lang={l} />
    </>
  );
}
