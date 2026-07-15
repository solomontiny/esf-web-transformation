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
  const answeredQuestionCount = Object.keys(answers).length;
  const completionPercentage = Math.round(
    (answeredQuestionCount / questions.length) * 100,
  );

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

  function retakeTest() {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {!student ? (
        <StudentInformationForm
          onContinue={(data) => setStudent(data)}
        />
      ) : isFinished ? (
        <section className="mx-auto max-w-2xl rounded-3xl border border-blue-100 bg-white p-6 text-center shadow-xl shadow-blue-950/5 sm:p-10">
          <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
            {englishQuiz.course} Placement Test
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Placement Test Complete
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Well done, <strong className="text-slate-900">{student.fullName}</strong>.
          </p>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-blue-800">Score</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {score} / {questions.length}
              </p>
            </div>
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-blue-800">Percentage</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{percentage}%</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 p-5">
            <p className="text-sm font-medium text-slate-600">Recommended CEFR level</p>
            <p className="mt-1 text-3xl font-bold text-blue-700">{cefrLevel}</p>
          </div>

          <button
            type="button"
            onClick={retakeTest}
            className="mt-8 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Retake Test
          </button>
        </section>
      ) : currentQuestion ? (
        <section className="mx-auto max-w-3xl rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5 sm:p-10">
          <header className="border-b border-slate-100 pb-6">
            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
              {course.charAt(0).toUpperCase() + course.slice(1)} Placement Test
            </p>
            <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Welcome, {student.fullName}
              </h1>
              <p className="text-sm text-slate-500">Language: {lang}</p>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm font-medium">
              <span className="text-slate-700">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="text-blue-700">{completionPercentage}% complete</span>
            </div>
            <div
              className="mt-2 h-2.5 overflow-hidden rounded-full bg-blue-100"
              role="progressbar"
              aria-label="Quiz completion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={completionPercentage}
            >
              <div
                className="h-full rounded-full bg-blue-700 transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </header>

          <h2 className="mt-8 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            {currentQuestion.question}
          </h2>

          <div className="mt-7 space-y-3" role="group" aria-label="Answer options">
            {currentQuestion.options.map((option, optionIndex) => (
              <button
                key={option}
                type="button"
                onClick={() => selectAnswer(optionIndex)}
                aria-pressed={selectedAnswer === optionIndex}
                className={`w-full rounded-2xl border-2 p-4 text-left text-base font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:p-5 sm:text-lg ${
                  selectedAnswer === optionIndex
                    ? "border-blue-700 bg-blue-50 text-blue-950 shadow-sm"
                    : "border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={() => setCurrentQuestionIndex((index) => index - 1)}
              disabled={currentQuestionIndex === 0}
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Previous
            </button>

            {isLastQuestion ? (
              <button
                type="button"
                onClick={() => setIsFinished(true)}
                disabled={selectedAnswer === undefined}
                className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Finish
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex((index) => index + 1)}
                disabled={selectedAnswer === undefined}
                className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </section>
      ) : (
        <p>No quiz questions are available.</p>
      )}
    </main>
  );
}
