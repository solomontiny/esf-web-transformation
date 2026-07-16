import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/courses/$course")({
  component: CourseDetailsPage,
});

function CourseDetailsPage() {
  const { lang, course } = Route.useParams();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-5xl font-bold">
        {course.charAt(0).toUpperCase() + course.slice(1)} Course
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Language: {lang}
      </p>
    </main>
  );
}