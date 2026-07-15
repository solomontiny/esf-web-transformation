import type { QuizData } from "@/quiz-types";

const frenchQuiz: QuizData = {
  course: "French",
  level: "Placement Test",
  questions: [
    { id: 1, question: "..... sommes étudiants.", options: ["Tu","Il","Nous","Je"], correctAnswer: 2 },
    { id: 2, question: "Tu ..... les yeux marrons.", options: ["As","Es","Ont","Avez"], correctAnswer: 0 },
    { id: 3, question: "..... 11h00.", options: ["Il est","Ce sont","Est","Ça fait"], correctAnswer: 0 },
    { id: 4, question: "..... combien ? — ..... 6,00 euros.", options: ["Il est / Ils sont","Il est / Il est","C'est / Il fait","C'est / Ça fait"], correctAnswer: 3 },
    { id: 5, question: "..... elle vient ..... toi ?", options: ["Est-ce que / Avec","Est-ce qu' / Chez","- / À","Est / Chez"], correctAnswer: 1 },
    { id: 6, question: "Je mange ..... pain.", options: ["Le","Un","Du","Des"], correctAnswer: 2 },
    { id: 7, question: "..... sœurs sont très .....", options: ["Les / Beaux","Ses / Beaux","Ses / Belles","Mon / Belles"], correctAnswer: 2 },
    { id: 8, question: "Vous parlez espagnol ? — Non, je ne .....", options: ["Le connais pas","Pas connais l'espagnol","Lui connais pas","Sais pas"], correctAnswer: 0 },
    { id: 9, question: "..... allez-vous au restaurant ? — ..... son anniversaire.", options: ["- / C'est","Pourquoi / C'est","Parce que / Pourquoi","Pourquoi / Parce que c'est"], correctAnswer: 3 },
    { id: 10, question: "Tu n'aimes pas le français ? — ..... je l'aime .....", options: ["Oui / -","Si / Beaucoup","Non / Pas","Si / Très"], correctAnswer: 1 },
    { id: 11, question: "Elle est ..... que moi.", options: ["Plus jalouse","Plus jaloux","Jalouse","Aussi jaloux"], correctAnswer: 0 },
    { id: 12, question: "J'..... François pour ..... inviter au cinéma.", options: ["Appelle / Lui","Appelle / L'","Appels / Le","Appelle / Le"], correctAnswer: 1 },
    { id: 13, question: "Ils vont à Paris ? — Oui, .....", options: ["Ils y vont !","Ils vont !","Y vont","Ils en vont"], correctAnswer: 0 },
    { id: 14, question: "La fille ..... tu as connue est .....", options: ["Que / Américain","Qui / Américain","Qui / Américaine","Que / Américaine"], correctAnswer: 3 },
    { id: 15, question: "Sa maison est .....", options: ["Celle","Celui-là","Celle-là","Celles"], correctAnswer: 2 },
    { id: 16, question: "Qui a parlé ? — .....", options: ["Il y a quelques","Quelques","Dans certains","Il y a certains"], correctAnswer: 1 },
    { id: 17, question: "Si je gagnais au loto, ..... une nouvelle voiture.", options: ["J'achetais","J'achète","J'avais acheté","J'achèterais"], correctAnswer: 3 },
    { id: 18, question: "Nous ..... notre leçon de français.", options: ["Ont terminé","Terminons","Terminions","Venons de terminer"], correctAnswer: 3 },
    { id: 19, question: "Il m'a demandé ..... un stylo.", options: ["De lui prêter","De prêter","Lui prêter","De le prêter"], correctAnswer: 0 },
    { id: 20, question: "Il a ..... d'amis.", options: ["Si","Tellement","Tant","Combien"], correctAnswer: 2 },
    { id: 21, question: "Elle m'a dit que son grand-père n'..... jamais ..... à l'étranger.", options: ["Est / Allé","Était / Allée","Était / Allé","A / Allé"], correctAnswer: 2 },
    { id: 22, question: "Il n'est pas sûr que la bonne solution ..... la sienne.", options: ["Est","C'est","Soit","Sera"], correctAnswer: 2 },
    { id: 23, question: "Il faut le savoir ..... on s'organise.", options: ["Parce que","Tandis que","Afin que","Afin qu'"], correctAnswer: 3 },
    { id: 24, question: "S'ils ..... faim, ils .....", options: ["Avaient eu / Auraient mangé","Avaient / Auraient mangé","Auraient / Avaient","Avait eu / Aurait mangé"], correctAnswer: 0 },
    { id: 25, question: "Quel est le mode verbal utilisé dans « Il n'est pas sûr que la bonne solution soit la sienne » ?", options: ["Indicatif","Conditionnel","Subjonctif","Impératif"], correctAnswer: 2 },
  ],
};

export default frenchQuiz;
