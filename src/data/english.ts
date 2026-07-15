import type { QuizData } from "@/quiz-types";

const englishQuiz: QuizData = {
  course: "English",
  level: "A1",
  questions: [
    {
      id: 1,
      question: "Choose the correct sentence.",
      options: [
        "She work in a bank.",
        "She works in a bank.",
        "She working in a bank.",
        "She is work in a bank.",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "I have lived in Lagos ___ 2020.",
      options: ["for", "since", "from", "during"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "If it rains tomorrow, we ___ at home.",
      options: ["stay", "stayed", "will stay", "would stay"],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "Which word is closest in meaning to 'generous'?",
      options: ["Kind", "Careful", "Quiet", "Nervous"],
      correctAnswer: 0,
    },
    {
      id: 5,
      question: "By the time I arrived, the meeting ___.",
      options: ["starts", "has started", "had started", "was starting"],
      correctAnswer: 2,
    },
  ],
};

export default englishQuiz;
