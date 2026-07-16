export type CourseKey =
  | "english"
  | "french"
  | "italian"
  | "spanish";

export interface CourseDetail {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  whyLearn: string;
  skills: string[];
  frequency: string;
  duration: string;
  delivery: string;
  methodology: string;
  materials: string;
  levels: string[];
  testRoute: string;
}

export const courseDetails: Record<CourseKey, CourseDetail> = {
  english: {
    title: "English Course",
    heroTitle: "Learn English with Confidence",
    heroSubtitle:
      "Cambridge English courses for children, teenagers and adults.",
    overview: "",
    whyLearn: "",
    skills: [],
    frequency: "",
    duration: "",
    delivery: "",
    methodology: "",
    materials: "",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    testRoute: "/quiz/english",
  },

  french: {
    title: "French Course",
    heroTitle: "",
    heroSubtitle: "",
    overview: "",
    whyLearn: "",
    skills: [],
    frequency: "",
    duration: "",
    delivery: "",
    methodology: "",
    materials: "",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    testRoute: "/quiz/french",
  },

  italian: {
    title: "Italian Course",
    heroTitle: "",
    heroSubtitle: "",
    overview: "",
    whyLearn: "",
    skills: [],
    frequency: "",
    duration: "",
    delivery: "",
    methodology: "",
    materials: "",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    testRoute: "/quiz/italian",
  },

  spanish: {
    title: "Spanish Course",
    heroTitle: "",
    heroSubtitle: "",
    overview: "",
    whyLearn: "",
    skills: [],
    frequency: "",
    duration: "",
    delivery: "",
    methodology: "",
    materials: "",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    testRoute: "/quiz/spanish",
  },
};

export default courseDetails;