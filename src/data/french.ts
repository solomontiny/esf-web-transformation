import type { QuizData } from "@/quiz-types";

const frenchQuiz: QuizData = {
  course: "French",
  level: "A1",
  questions: [
    {
      id: 1,
      question: "Comment vous appelez-vous ?",
      options: [
        "Je m'appelle Pierre",
        "J'ai vingt ans",
        "J'habite à Paris",
        "Je suis français"
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Quelle heure est-il ?",
      options: [
        "Il est dix heures",
        "J'ai dix ans",
        "Je vais à l'école",
        "C'est lundi"
      ],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "Comment dit-on 'Good morning' en français ?",
      options: [
        "Bonsoir",
        "Bonjour",
        "Bonne nuit",
        "Merci"
      ],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Choisissez l'article correct : ___ livre",
      options: [
        "Le",
        "La",
        "Les",
        "Une"
      ],
      correctAnswer: 0,
    },
    {
      id: 5,
      question: "Je ___ étudiant.",
      options: [
        "es",
        "suis",
        "est",
        "sommes"
      ],
      correctAnswer: 1,
    }
  ]
};

export default frenchQuiz;