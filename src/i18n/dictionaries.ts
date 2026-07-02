export type Lang = "en" | "it";
export const LANGS: Lang[] = ["en", "it"];
export const DEFAULT_LANG: Lang = "en";

export const IT_PLACEHOLDER = "[Traduzione professionale in arrivo]";

type Dict = {
  nav: { home: string; about: string; courses: string; services: string; faq: string; contact: string; payment: string };
  cta: { book: string; explore: string; contact: string; enroll: string; discover: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
  };
  pillars: { title: string; items: { title: string; body: string }[] };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { title: string; body: string }[];
  };
  courses: {
    eyebrow: string;
    title: string;
    lede: string;
    languages: { name: string; body: string }[];
    levelsTitle: string;
    levels: string[];
    distanceTitle: string;
    distanceBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    goalsTitle: string;
    goals: string;
    stats: { label: string; value: string }[];
  };
  testimonials: { eyebrow: string; title: string; items: { quote: string; name: string; role: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    address: string; phone: string; whatsapp: string; email: string;
    form: { name: string; email: string; subject: string; message: string; consent: string; submit: string };
  };
  payment: {
    eyebrow: string;
    title: string;
    lede: string;
    plans: { name: string; price: string; period: string; features: string[]; featured?: boolean }[];
    disclaimer: string;
  };
  footer: {
    tagline: string;
    explore: string;
    languages: string;
    contact: string;
    rights: string;
  };
  ctaBanner: { title: string; body: string; action: string };
};

export const en: Dict = {
  nav: { home: "Home", about: "About", courses: "Courses", services: "Services", faq: "FAQ", contact: "Contact", payment: "Enrol" },
  cta: { book: "Book a consultation", explore: "Explore courses", contact: "Get in touch", enroll: "Enrol now", discover: "Discover" },
  hero: {
    eyebrow: "Language Center · Casagiove, Caserta",
    title: "The art of speaking",
    titleAccent: "another language",
    lede: "ESF Language Service is a boutique language studio offering English, French, Spanish and Italian instruction, translations and certifications — tailored to every learner, from first-time speakers to executives.",
  },
  pillars: {
    title: "A studio built on four principles",
    items: [
      { title: "Individual education", body: "Every lesson plan is structured around the learner's level, goals and pace." },
      { title: "Certified teachers", body: "All of our instructors hold the qualifications that confirm their teaching expertise." },
      { title: "A modern approach", body: "We blend interactive methods with contemporary tools to make learning stick." },
      { title: "Online & in person", body: "Study on campus in Casagiove or from anywhere in the world, at times that suit you." },
    ],
  },
  intro: {
    eyebrow: "ESF Language Service",
    title: "Foreign language courses, thoughtfully designed.",
    body: "Courses in English, French and Spanish for children, teenagers and adults who want to learn a new language — or refine one they already speak — whether in the classroom or remotely.",
  },
  services: {
    eyebrow: "What we do",
    title: "Six services, one standard of care",
    lede: "From private tuition to sworn translations, every service we offer is delivered with the same rigour and warmth.",
    items: [
      { title: "Language courses", body: "Foreign language courses in the classroom or online, at every level from A1 to C2." },
      { title: "Certifications", body: "Prepare for and certify your language skills with internationally recognised examinations." },
      { title: "Translations", body: "Literary, sworn and certified translation services delivered by native specialists." },
      { title: "Editing service", body: "Editing and proofreading for any type of text, in both Italian and English." },
      { title: "Italian for foreigners", body: "Courses, certifications and study holidays for those learning the Italian language." },
      { title: "Courses for companies", body: "A reference partner for your organisation, tailored to teams and executives." },
    ],
  },
  courses: {
    eyebrow: "Foreign language courses",
    title: "Four languages. Every level. Your pace.",
    lede: "Courses are designed for adults who want to grow personally or professionally, teenagers who need academic or career support, and children who show an early curiosity for language.",
    languages: [
      { name: "English", body: "From conversational fluency to business English and Cambridge / IELTS preparation." },
      { name: "French", body: "General and professional French, with DELF and DALF certification pathways." },
      { name: "Spanish", body: "Modern Spanish for travel, work and study, aligned with DELE certifications." },
      { name: "Italian", body: "Italian for foreigners — from A1 immersion to CILS and CELI preparation." },
    ],
    levelsTitle: "Aligned with the Common European Framework",
    levels: ["Beginner · A1", "Elementary · A2", "Intermediate · B1", "Upper Intermediate · B2", "Advanced · C1", "Proficiency · C2"],
    distanceTitle: "Distance learning",
    distanceBody: "Work, study or family life leaving little room for a fixed schedule? Our online classes flex around you, without compromising on quality.",
  },
  about: {
    eyebrow: "About ESF",
    title: "Your reference language studio in Caserta.",
    body: [
      "ESF Language Service opened in early 2016 with a simple mission: to provide linguistic services — training, laboratories, teaching, editorial support, intermediation and translation — while contributing to the social and cultural life of our community.",
      "We work one to one or in small groups, and every teaching plan is tailored either in advance or as the course unfolds. The Centre also partners with kindergartens, primary and secondary schools, where we lead laboratories and extracurricular activities with an educational and community-building purpose.",
      "What defines us is reliability. Quality is guaranteed by personalised solutions and attentive support, delivering results that regularly exceed expectations.",
    ],
    goalsTitle: "Our goals",
    goals: "The Centre's main objective is the satisfaction of every learner, and building — from the very first lesson — a relationship that respects their expectations.",
    stats: [
      { value: "1,200+", label: "Students taught" },
      { value: "40+", label: "Course programmes" },
      { value: "9", label: "Years of practice" },
      { value: "4", label: "Languages offered" },
    ],
  },
  testimonials: {
    eyebrow: "What our students say",
    title: "Voices from the studio",
    items: [
      { quote: "The most attentive teachers I have ever worked with. In six months I moved from B1 to a confident B2 — and I actually enjoy speaking English now.", name: "Chiara R.", role: "Marketing Manager" },
      { quote: "ESF prepared me for the IELTS with a plan built around my weak points. I passed with a 7.5 on my first attempt.", name: "Marco T.", role: "Medical Student" },
      { quote: "We entrusted ESF with our team's business English. The results — and the culture around learning — have been outstanding.", name: "Elena D.", role: "HR Director" },
    ],
  },
  faq: {
    eyebrow: "Frequently asked",
    title: "Answers, before you ask",
    items: [
      { q: "How do I know which level I should start at?", a: "Every new learner takes a short complimentary placement — a written test and a brief conversation — so we can recommend the right level and study plan." },
      { q: "Can I take lessons entirely online?", a: "Yes. Every course we offer runs both in the classroom in Casagiove and fully online, with the same teachers and materials." },
      { q: "Do you prepare for official certifications?", a: "We prepare learners for Cambridge, IELTS, DELF/DALF, DELE, CILS and CELI, with dedicated exam-focused modules." },
      { q: "Are courses available for children?", a: "Yes — we run age-appropriate programmes for children, teenagers and adults, either individually or in small groups." },
      { q: "Do you work with companies?", a: "Absolutely. We build bespoke corporate programmes for teams and executives, on site or online." },
      { q: "How can I pay for a course?", a: "You can enrol and pay online through our secure Enrol page, by bank transfer or in person at the studio." },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Come and say hello",
    lede: "Visit our studio in Casagiove, call, message us on WhatsApp or drop us a line — we typically reply within one business day.",
    address: "Via Milano, 18 · 81022 Casagiove (CE), Italy",
    phone: "+39 0823 1410601",
    whatsapp: "+39 0823 1410601",
    email: "info@esflanguageservice.com",
    form: {
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "How can we help?",
      consent: "I have read the privacy policy and agree to be contacted.",
      submit: "Send message",
    },
  },
  payment: {
    eyebrow: "Enrol",
    title: "Choose your programme",
    lede: "Secure your place with a simple online enrolment. Prices are indicative starting points — every course is tailored, and we will confirm the final quote after your placement.",
    plans: [
      { name: "Discovery", price: "€120", period: "per month", features: ["1 private lesson per week", "Personal study plan", "Digital materials", "Progress reviews every 6 weeks"] },
      { name: "Studio", price: "€220", period: "per month", features: ["2 private lessons per week", "Personal study plan", "Certification prep modules", "Priority scheduling"], featured: true },
      { name: "Executive", price: "On request", period: "bespoke", features: ["Corporate & 1-to-1 programmes", "On-site or online delivery", "Dedicated account manager", "Progress reporting for HR"] },
    ],
    disclaimer: "Online payments are processed securely via Stripe. VAT is included where applicable. This is a placeholder — final integration will be enabled at launch.",
  },
  footer: {
    tagline: "Language center · Casagiove, Caserta, Italy. Founded 2016.",
    explore: "Explore",
    languages: "Languages",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  ctaBanner: {
    title: "Ready to start speaking with confidence?",
    body: "Book a free 20-minute consultation and we'll design a study plan around your goals.",
    action: "Book a consultation",
  },
};

// Italian skeleton — real translations to be provided by the client.
const p = IT_PLACEHOLDER;
export const it: Dict = {
  nav: { home: "Home", about: "Chi siamo", courses: "Corsi", services: "Servizi", faq: "FAQ", contact: "Contatti", payment: "Iscriviti" },
  cta: { book: p, explore: p, contact: p, enroll: p, discover: p },
  hero: { eyebrow: "Centro linguistico · Casagiove, Caserta", title: p, titleAccent: p, lede: p },
  pillars: {
    title: p,
    items: [
      { title: "Insegnamento individuale", body: p },
      { title: "Docenti certificati", body: p },
      { title: "Approccio moderno", body: p },
      { title: "Online e in presenza", body: p },
    ],
  },
  intro: { eyebrow: "ESF Language Service", title: p, body: p },
  services: {
    eyebrow: p, title: p, lede: p,
    items: [
      { title: "Corsi di lingua", body: p },
      { title: "Certificazioni", body: p },
      { title: "Traduzioni", body: p },
      { title: "Editing", body: p },
      { title: "Italiano per stranieri", body: p },
      { title: "Corsi aziendali", body: p },
    ],
  },
  courses: {
    eyebrow: p, title: p, lede: p,
    languages: [
      { name: "Inglese", body: p },
      { name: "Francese", body: p },
      { name: "Spagnolo", body: p },
      { name: "Italiano", body: p },
    ],
    levelsTitle: p,
    levels: ["Base · A1", "Elementare · A2", "Intermedio · B1", "Intermedio superiore · B2", "Avanzato · C1", "Padronanza · C2"],
    distanceTitle: p, distanceBody: p,
  },
  about: {
    eyebrow: "Chi siamo", title: p, body: [p, p, p],
    goalsTitle: "I nostri obiettivi", goals: p,
    stats: [
      { value: "1.200+", label: "Studenti" },
      { value: "40+", label: "Corsi" },
      { value: "9", label: "Anni di attività" },
      { value: "4", label: "Lingue" },
    ],
  },
  testimonials: {
    eyebrow: p, title: p,
    items: [
      { quote: p, name: "Chiara R.", role: "Marketing Manager" },
      { quote: p, name: "Marco T.", role: "Studente di Medicina" },
      { quote: p, name: "Elena D.", role: "HR Director" },
    ],
  },
  faq: {
    eyebrow: p, title: p,
    items: Array.from({ length: 6 }, () => ({ q: p, a: p })),
  },
  contact: {
    eyebrow: "Contatti", title: p, lede: p,
    address: "Via Milano, 18 · 81022 Casagiove (CE), Italia",
    phone: "+39 0823 1410601", whatsapp: "+39 0823 1410601", email: "info@esflanguageservice.com",
    form: { name: "Nome", email: "Email", subject: "Oggetto", message: "Messaggio", consent: p, submit: "Invia" },
  },
  payment: {
    eyebrow: "Iscriviti", title: p, lede: p,
    plans: [
      { name: "Discovery", price: "€120", period: "al mese", features: [p, p, p, p] },
      { name: "Studio", price: "€220", period: "al mese", features: [p, p, p, p], featured: true },
      { name: "Executive", price: "Su richiesta", period: "personalizzato", features: [p, p, p, p] },
    ],
    disclaimer: p,
  },
  footer: {
    tagline: "Centro linguistico · Casagiove, Caserta. Dal 2016.",
    explore: "Naviga", languages: "Lingue", contact: "Contatti",
    rights: "Tutti i diritti riservati.",
  },
  ctaBanner: { title: p, body: p, action: p },
};

export const dict = { en, it };
export function getDict(lang: string): Dict {
  return lang === "it" ? it : en;
}
