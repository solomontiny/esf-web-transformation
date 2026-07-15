import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import StudentInformationForm, {
  type StudentInformation,
} from "@/components/quiz/StudentInformationForm";
export const Route = createFileRoute("/$lang/quiz/$course")({
  component: QuizPage,
});

function QuizPage() {
  const { lang, course } = Route.useParams();

  const [student, setStudent] =
    useState<StudentInformation | null>(null);

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {!student ? (
        <StudentInformationForm
          onContinue={(data) => setStudent(data)}
        />
      ) : (
        <div className="rounded-2xl border p-10 shadow-sm">
          <h1 className="text-4xl font-bold mb-4">
            {course.charAt(0).toUpperCase() + course.slice(1)} Placement Test
          </h1>

          <p className="text-lg">
            Welcome <strong>{student.fullName}</strong>
          </p>

          <p className="mt-4">
            Language: <strong>{lang}</strong>
          </p>

          <p className="mt-6">
            Quiz coming in the next step...
          </p>
        </div>
      )}
    </main>
  );
}