export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  course: string;
  level: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  full_name: string;
  email: string;
  phone: string;
  nationality: string;
  country: string;
  language: string;
  course: string;
  answers: Record<number, number>;
  score: number;
  percentage: number;
  cefr_level: "A1" | "A2" | "B1" | "B2" | "C1";
  elapsed_seconds: number;
}
