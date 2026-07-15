import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/quiz/$course")({
  component: QuizPage,
});

function QuizPage() {
  const { lang, course } = Route.useParams();
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-2xl border p-10 shadow-sm">
        <h1 className="text-4xl font-bold mb-4">
          {course.charAt(0).toUpperCase() + course.slice(1)} Placement Test
        </h1>

        <p className="text-lg">
          Language: <strong>{lang}</strong>
        </p>

        <p className="mt-6">
          This page is working correctly.
        </p>

        <p className="mt-2">
          Next we'll build the full quiz system.
        </p>
      </div>
    </main>
  );
}