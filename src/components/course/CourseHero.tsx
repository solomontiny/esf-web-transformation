import { Link } from "@tanstack/react-router";
import type { CourseDetail, CourseKey } from "@/data/courseDetails";

interface CourseHeroProps {
  lang: string;
  courseKey: CourseKey;
  course: CourseDetail;
}

export default function CourseHero({
  lang,
  courseKey,
  course,
}: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 px-8 py-16 text-white shadow-xl">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
          ESF Language Service
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {course.heroTitle}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
          {course.heroSubtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/$lang/quiz/$course"
            params={{
              lang,
              course: courseKey,
            }}
            className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-100"
          >
            Start Placement Test
          </Link>

          <Link
            to="/$lang/contact"
            params={{ lang }}
            search={{ course: course.title }}
            className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}