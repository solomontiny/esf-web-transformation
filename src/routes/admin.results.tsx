import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Download, Inbox, Printer } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { QuizResult } from "@/quiz-types";

type QuizResultRecord = Pick<
  QuizResult,
  | "full_name"
  | "email"
  | "phone"
  | "nationality"
  | "country"
  | "language"
  | "course"
  | "score"
  | "percentage"
  | "cefr_level"
> & {
  created_at: string;
};

const tableColumns = [
  "Full Name",
  "Email",
  "Phone",
  "Nationality",
  "Country",
  "Language",
  "Course",
  "Score",
  "Percentage",
  "CEFR Level",
  "Date Created",
];

export const Route = createFileRoute("/admin/results")({
  component: AdminResultsPage,
});

function AdminResultsPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResultRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingAuthentication, setIsCheckingAuthentication] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [cefrFilter, setCefrFilter] = useState("all");

  useEffect(() => {
    async function checkAuthentication() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        await navigate({ to: "/admin/login", replace: true });
        return;
      }

      setIsAuthenticated(true);
      setIsCheckingAuthentication(false);
    }

    void checkAuthentication();
  }, [navigate]);

  useEffect(() => {
    if (!isAuthenticated) return;

    async function loadResults() {
      setIsLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("quiz_results")
        .select(
          "full_name, email, phone, nationality, country, language, course, score, percentage, cefr_level, created_at",
        )
        .order("created_at", { ascending: false });

      if (fetchError) {
        console.error("Unable to load quiz results from Supabase:", fetchError);
        setError("We could not load quiz results. Please try again.");
      } else {
        setResults((data ?? []) as QuizResultRecord[]);
      }

      setIsLoading(false);
    }

    void loadResults();
  }, [isAuthenticated]);

  async function handleLogout() {
    setIsLoggingOut(true);
    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      console.error("Unable to sign out of Supabase:", signOutError);
    }

    await navigate({ to: "/admin/login", replace: true });
  }

  const languages = useMemo(
    () => [...new Set(results.map((result) => result.language))].sort(),
    [results],
  );

  const filteredResults = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return results.filter((result) => {
      const matchesSearch =
        !normalizedSearchTerm ||
        result.full_name.toLowerCase().includes(normalizedSearchTerm) ||
        result.email.toLowerCase().includes(normalizedSearchTerm) ||
        result.phone.toLowerCase().includes(normalizedSearchTerm);
      const matchesLanguage =
        languageFilter === "all" || result.language === languageFilter;
      const matchesCefr = cefrFilter === "all" || result.cefr_level === cefrFilter;

      return matchesSearch && matchesLanguage && matchesCefr;
    });
  }, [results, searchTerm, languageFilter, cefrFilter]);

  const statistics = useMemo(() => {
    const totalTests = results.length;
    const averageScore = totalTests
      ? results.reduce((total, result) => total + result.score, 0) / totalTests
      : 0;

    return {
      totalTests,
      averageScore,
      levels: ["A1", "A2", "B1", "B2", "C1"].map((level) => ({
        level,
        count: results.filter((result) => result.cefr_level === level).length,
      })),
    };
  }, [results]);

  function exportCsv() {
    const headers = tableColumns;
    const rows = filteredResults.map((result) => [
      result.full_name,
      result.email,
      result.phone,
      result.nationality,
      result.country,
      result.language,
      result.course,
      result.score,
      result.percentage,
      result.cefr_level,
      formatDate(result.created_at),
    ]);
    const escapeCsvValue = (value: string | number) =>
      `"${String(value).replace(/"/g, '""')}"`;
    const csv = [headers, ...rows]
      .map((row) => row.map(escapeCsvValue).join(","))
      .join("\n");
    const downloadUrl = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8" }),
    );
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "esf-placement-test-results.csv";
    downloadLink.click();
    URL.revokeObjectURL(downloadUrl);
  }

  if (isCheckingAuthentication) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="rounded-2xl bg-white px-6 py-4 text-slate-600 shadow-sm" role="status">
          Checking administrator access...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
      <section className="mx-auto max-w-7xl rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5 sm:p-10">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
              ESF Language Service
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Placement Test Results
            </h1>
            <p className="mt-3 text-slate-600">
              Review completed placement tests and learner recommendations.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="rounded-xl border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <StatisticCard label="Total Tests" value={statistics.totalTests} />
          <StatisticCard label="Average Score" value={statistics.averageScore.toFixed(1)} />
          {statistics.levels.map(({ level, count }) => (
            <StatisticCard key={level} label={`${level} Students`} value={count} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <label className="block md:col-span-1">
            <span className="text-sm font-medium text-slate-700">Search</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Name, email, or phone"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Language</span>
            <select
              value={languageFilter}
              onChange={(event) => setLanguageFilter(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            >
              <option value="all">All languages</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">CEFR level</span>
            <select
              value={cefrFilter}
              onChange={(event) => setCefrFilter(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            >
              <option value="all">All levels</option>
              {(["A1", "A2", "B1", "B2", "C1"] as const).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={exportCsv}
            disabled={isLoading || filteredResults.length === 0}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <Download size={18} aria-hidden="true" />
            Export CSV
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-xl border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <Printer size={18} aria-hidden="true" />
            Print
          </button>
        </div>

        <div className="mt-8 max-h-[70vh] overflow-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[1200px] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10 bg-blue-50 text-xs tracking-wide text-blue-900 uppercase shadow-sm">
              <tr>
                {tableColumns.map((heading) => (
                  <th key={heading} scope="col" className="whitespace-nowrap px-4 py-4 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {isLoading ? (
                Array.from({ length: 6 }, (_, rowIndex) => (
                  <tr key={rowIndex}>
                    {tableColumns.map((column) => (
                      <td key={column} className="px-4 py-4">
                        <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : error ? (
                <tr>
                  <td colSpan={11} className="px-4 py-10 text-center text-red-700" role="alert">
                    {error}
                  </td>
                </tr>
              ) : filteredResults.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-4 py-14 text-center">
                    <Inbox className="mx-auto h-10 w-10 text-blue-300" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-slate-800">No matching results yet</p>
                    <p className="mt-2 text-slate-500">
                      Try adjusting your search or filters to find placement test records.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredResults.map((result) => (
                  <tr key={`${result.email}-${result.created_at}`} className="odd:bg-white even:bg-slate-50/70 hover:bg-blue-50/70">
                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-900">{result.full_name}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.email}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.phone}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.nationality}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.country}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.language}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.course}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.score}</td>
                    <td className="whitespace-nowrap px-4 py-4">{result.percentage}%</td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-800">
                        {result.cefr_level}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">{formatDate(result.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function StatisticCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
      <p className="text-sm font-medium text-blue-800">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}
