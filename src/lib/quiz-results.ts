import { supabase } from "@/lib/supabase";
import type { QuizResult } from "@/quiz-types";

export async function saveQuizResult(result: QuizResult): Promise<void> {
  const { error } = await supabase.from("quiz_results").insert(result);

  if (error) {
    console.error("Unable to save quiz result to Supabase:", error);
  }
}
