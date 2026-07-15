import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import StudentInformationForm, {
  type StudentInformation,
} from "@/components/quiz/StudentInformationForm";
import englishQuiz from "@/data/english";
export const Route = createFileRoute("/$lang/quiz/$course")({
  component: QuizPage,
});

function QuizPage() {
  const { lang, course } = Route.useParams();

  const [student, setStudent] =
    useState<StudentInformation | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const questions = englishQuiz.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const score = questions.reduce(
    (total, question) =>
      total + (answers[question.id] === question.correctAnswer ? 1 : 0),
    0,
  );
  const percentage = Math.round((score / questions.length) * 100);
  const cefrLevel =
    percentage <= 40
      ? "A1"
      : percentage <= 60
        ? "A2"
        : percentage <= 75
          ? "B1"
          : percentage <= 90
            ? "B2"
            : "C1";

  function selectAnswer(optionIndex: number) {
    if (!currentQuestion) return;

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: optionIndex,
    }));
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {!student ? (
        <StudentInformationForm
          onContinue={(data) => setStudent(data)}
        />
      ) : isFinished ? (
        <section className="mx-auto max-w-2xl rounded-2xl border p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">Placement Test Complete</h1>
          <p className="mt-4 text-lg">
            Well done, <strong>{student.fullName}</strong>.
          </p>
          <p className="mt-6 text-xl">
            Score: <strong>{score} out of {questions.length}</strong>
          </p>
          <p className="mt-2 text-xl">
            Percentage: <strong>{percentage}%</strong>
          </p>
          <p className="mt-6 text-2xl font-semibold">
            Recommended CEFR level: {cefrLevel}
          </p>
        </section>
      ) : currentQuestion ? (
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

          <p className="mt-6 text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            {currentQuestion.question}
          </h2>

          <div className="mt-6 space-y-3">
            {currentQuestion.options.map((option, optionIndex) => (
              <button
                key={option}
                type="button"
                onClick={() => selectAnswer(optionIndex)}
                className={`w-full rounded-xl border p-4 text-left transition ${
                  selectedAnswer === optionIndex
                    ? "border-blue-700 bg-blue-50"
                    : "hover:border-blue-400"
                }`}
                aria-pressed={selectedAnswer === optionIndex}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setCurrentQuestionIndex((index) => index - 1)}
              disabled={currentQuestionIndex === 0}
              className="rounded-xl border px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            {isLastQuestion ? (
              <button
                type="button"
                onClick={() => setIsFinished(true)}
                disabled={selectedAnswer === undefined}
                className="rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Finish
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex((index) => index + 1)}
                disabled={selectedAnswer === undefined}
                className="rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No quiz questions are available.</p>
      )}
    </main>
  );
}
