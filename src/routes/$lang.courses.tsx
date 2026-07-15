import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { getDict, type Lang } from "@/i18n/dictionaries";

import englishImg from "@/assets/course-english.jpg";
import spanishImg from "@/assets/course-spanish.jpg";
import frenchImg from "@/assets/course-french.jpg";
import italianImg from "@/assets/course-italian.jpg";

export const Route = createFileRoute("/$lang/courses")({
  head: ({ params }) => {
    const title = params.lang === "it" ? "Corsi — ESF Language Service" : "Courses — ESF Language Service";
    const desc = params.lang === "it"
      ? "Corsi di inglese, francese, spagnolo e italiano pensati per ogni livello e obiettivo."
      : "English, French, Spanish and Italian courses designed for every level and goal.";

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/courses` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/courses` }],
    };
  },
  component: CoursesPage,
});

function CoursesPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const t = getDict(l);

  const courseImages = {
    english: englishImg,
    italian: italianImg,
    french: frenchImg,
    spanish: spanishImg,
  } as const;
  const courseKeys = ["english", "spanish", "french", "italian"] as const;

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow={t.courses.eyebrow}
          title={t.courses.title}
          lede={t.courses.lede}
        />

        <div className="mt-12 space-y-12">
          {t.courses.languages.map((course, index) => {
            const courseKey = courseKeys[index];

            return (
              <article key={course.name} className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
                <img
                  src={courseImages[courseKey]}
                  alt={`${course.name} course`}
                  className="h-72 w-full rounded-3xl object-cover shadow-soft"
                />
                <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-foreground">{course.name}</h3>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                    {t.courses.priceLabel} {course.priceFrom}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{course.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {course.highlights.slice(0, 3).map((highlight) => (
                    <span key={highlight} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link
                  to="/$lang/contact"
                  params={{ lang }}
                  search={{ course: course.name }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {t.courses.detailsLabel} <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/$lang/quiz/$course"
                  params={{ lang, course: courseKey }}
                  className="ml-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {lang === "it" ? "Test di livello" : "Placement test"}
                  <span aria-hidden="true">→</span>
                </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <CTABanner lang={l} />
    </>
  );
}
