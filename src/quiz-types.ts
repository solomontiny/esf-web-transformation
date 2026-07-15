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