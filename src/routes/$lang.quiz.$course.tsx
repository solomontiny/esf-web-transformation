import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMovingNext, setIsMovingNext] = useState(false);
  const [showFinishConfirmation, setShowFinishConfirmation] = useState(false);
  const nextInProgress = useRef(false);

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
  const unansweredQuestionCount = questions.length - answeredQuestionCount;
  const formattedElapsedTime = `${String(Math.floor(elapsedSeconds / 60)).padStart(2, "0")}:${String(
    elapsedSeconds % 60,
  ).padStart(2, "0")}`;

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
  const levelMessage = {
    A1: "You are ready to build a foundation with everyday words and simple phrases.",
    A2: "You can handle familiar situations and are ready to expand your confidence.",
    B1: "You can communicate independently in many everyday and work situations.",
    B2: "You can communicate clearly and comfortably on a wide range of topics.",
    C1: "You can use English fluently and flexibly in demanding situations.",
  }[cefrLevel];

  useEffect(() => {
    if (!student || isFinished) return;

    const timer = window.setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [student, isFinished]);

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
    setElapsedSeconds(0);
    setShowFinishConfirmation(false);
  }

  function moveToQuestion(questionIndex: number) {
    setCurrentQuestionIndex(questionIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function moveToNextQuestion() {
    if (nextInProgress.current || !currentQuestion || selectedAnswer === undefined) {
      return;
    }

    nextInProgress.current = true;
    setIsMovingNext(true);
    moveToQuestion(currentQuestionIndex + 1);

    window.setTimeout(() => {
      nextInProgress.current = false;
      setIsMovingNext(false);
    }, 250);
  }

  function requestFinish() {
    setShowFinishConfirmation(true);
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
          <p className="mt-1 text-sm text-slate-500">Language: {englishQuiz.course}</p>

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
            <p className="mt-2 text-sm leading-6 text-slate-600">{levelMessage}</p>
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
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>Language: {lang}</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-800">
                  {formattedElapsedTime}
                </span>
              </div>
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

            <div className="mt-5">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Question status
              </p>
              <div className="mt-2 flex flex-wrap gap-2" aria-label="Question navigation">
                {questions.map((question, questionIndex) => {
                  const isAnswered = answers[question.id] !== undefined;
                  const isCurrent = questionIndex === currentQuestionIndex;

                  return (
                    <button
                      key={question.id}
                      type="button"
                      onClick={() => moveToQuestion(questionIndex)}
                      aria-label={`Question ${questionIndex + 1}${isAnswered ? ", answered" : ", unanswered"}`}
                      aria-current={isCurrent ? "step" : undefined}
                      className={`h-9 w-9 rounded-full border text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                        isCurrent
                          ? "border-blue-700 bg-blue-700 text-white"
                          : isAnswered
                            ? "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"
                            : "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100"
                      }`}
                    >
                      {questionIndex + 1}
                    </button>
                  );
                })}
              </div>
              {unansweredQuestionCount > 0 && (
                <p className="mt-2 text-sm text-amber-800">
                  {unansweredQuestionCount} unanswered {unansweredQuestionCount === 1 ? "question" : "questions"} are highlighted.
                </p>
              )}
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
              onClick={() => moveToQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Previous
            </button>

            {isLastQuestion ? (
              <button
                type="button"
                onClick={requestFinish}
                disabled={unansweredQuestionCount > 0}
                className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Finish
              </button>
            ) : (
              <button
                type="button"
                onClick={moveToNextQuestion}
                disabled={selectedAnswer === undefined || isMovingNext}
                className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Next
              </button>
            )}
          </div>

          {showFinishConfirmation && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4"
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="finish-dialog-title"
              aria-describedby="finish-dialog-description"
            >
              <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
                <h2 id="finish-dialog-title" className="text-2xl font-bold text-slate-900">
                  Finish placement test?
                </h2>
                <p id="finish-dialog-description" className="mt-3 leading-6 text-slate-600">
                  {unansweredQuestionCount > 0
                    ? `You still have ${unansweredQuestionCount} unanswered ${unansweredQuestionCount === 1 ? "question" : "questions"}. Please review them before finishing.`
                    : "All questions are answered. Your result will be calculated now."}
                </p>
                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowFinishConfirmation(false)}
                    className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    Continue reviewing
                  </button>
                  {unansweredQuestionCount === 0 && (
                    <button
                      type="button"
                      onClick={() => setIsFinished(true)}
                      className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      Finish test
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <p>No quiz questions are available.</p>
      )}
    </main>
  );
}
