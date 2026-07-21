export type Lang = "en" | "it";
export const LANGS: Lang[] = ["en", "it"];
export const DEFAULT_LANG: Lang = "en";

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

type ServiceDetail = {
  title: string;
  intro: string;
  bullets: string[];
  outro?: string;
};

type Dict = {
  nav: { home: string; about: string; courses: string; services: string; gallery: string; faq: string; contact: string; payment: string };
  cta: { book: string; explore: string; contact: string; enroll: string; discover: string; learnMore: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
  };
  pillars: { title: string; items: { title: string; body: string }[] };
  intro: { eyebrow: string; title: string; body: string };
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
    languages: {
      name: string;
      tagline: string;
      body: string;
      priceFrom: string;
      duration: string;
      format: string;
      levels: string;
      highlights: string[];
      syllabus: string[];
      certifications: string[];
    }[];
    detailsLabel: string;
    hideLabel: string;
    priceLabel: string;
    durationLabel: string;
    formatLabel: string;
    levelsLabel: string;
    includesLabel: string;
    syllabusLabel: string;
    certificationsLabel: string;
    levelsTitle: string;
    levels: string[];
    distanceTitle: string;
    distanceBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    mission: { title: string; body: string };
    vision: { title: string; body: string };
    why: { title: string; body: string; bullets: string[] };
    values: { title: string; body: string };
    stats: { label: string; value: string }[];
    goalsTitle: string;
    goals: string;
  };
  detailed: {
    eyebrow: string;
    title: string;
    lede: string;
    services: ServiceDetail[];
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
    plans: { name: string; price: string; period: string; description: string; features: string[]; featured?: boolean }[];
    disclaimer: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
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
  nav: { home: "Home", about: "About", courses: "Courses", services: "Services", gallery: "Gallery", faq: "FAQ", contact: "Contact", payment: "Enrol" },
  cta: { book: "Book a consultation", explore: "Explore courses", contact: "Get in touch", enroll: "Enrol now", discover: "Discover", learnMore: "Learn more" },
  hero: {
    eyebrow: "Language Center · Casagiove, Caserta · Italy",
    title: "Language, education and",
    titleAccent: "opportunity",
    lede: "ESF Language Services is a trusted provider of language education, international student support, and educational consultancy — helping students, professionals and organisations succeed in a global society.",
  },
  pillars: {
    title: "Built on four principles",
    items: [
      { title: "Individual education", body: "Every lesson plan is structured around the learner's level, goals and pace." },
      { title: "Certified teachers", body: "All of our instructors hold the qualifications that confirm their teaching expertise." },
      { title: "A modern approach", body: "We blend interactive methods with contemporary tools to make learning stick." },
      { title: "Online & in person", body: "Study on campus in Casagiove or from anywhere in the world, at times that suit you." },
    ],
  },
  intro: {
    eyebrow: "ESF Language Services",
    title: "Foreign language courses, thoughtfully designed.",
    body: "English, Italian, Spanish, French and other foreign language courses for children, teenagers, adults, professionals and corporate clients — in the classroom or online, at every level from A1 to C2.",
  },
  services: {
    eyebrow: "What we do",
    title: "One studio, twenty specialised services",
    lede: "From private tuition and internationally recognised certifications to translation, editing, study-abroad and residence-permit assistance — every service is delivered with the same rigour and warmth.",
    items: [
      { title: "Language Courses", body: "English, Italian, Spanish, French and other languages — every level, every learner." },
      { title: "Certification Preparation", body: "Accredited Cambridge centre; UNIDA CECOL accredited for Italian A2–C2." },
      { title: "Student Visa Assistance", body: "From admission to arrival — full support across the student visa process." },
      { title: "University Admissions", body: "Personalised guidance to select the right university and prepare a winning application." },
      { title: "Residence Permit Support", body: "Practical help with residence permit applications and renewals." },
      { title: "Study Abroad Consulting", body: "Choose the right country, programme and institution — with expert guidance at every step." },
      { title: "Translations", body: "Professional, sworn and certified translation services in multiple languages." },
      { title: "Editing & Proofreading", body: "Academic, business and professional editing to elevate every document." },
      { title: "Corporate Language Training", body: "Bespoke language training for teams, executives and organisations." },
    ],
  },
  courses: {
    eyebrow: "Foreign language courses",
    title: "Four core languages. Every level. Your pace.",
    lede: "Courses designed for adults growing personally or professionally, teenagers who need academic support, children with an early curiosity for language, and companies training their teams.",
    detailsLabel: "View full details",
    hideLabel: "Hide details",
    priceLabel: "From",
    durationLabel: "Duration",
    formatLabel: "Format",
    levelsLabel: "Levels",
    includesLabel: "What's included",
    syllabusLabel: "Course syllabus",
    certificationsLabel: "Certifications",
    languages: [
      {
        name: "English",
        tagline: "ESF Language Service",
        body: "From confident daily conversation to Cambridge, IELTS and TOEFL preparation. English at every level, taught by certified native and near-native speakers.",
        priceFrom: "From €50 / month",
        duration: "3 · 6 · 12 month tracks",
        format: "In studio · Online · Hybrid",
        levels: "A1 to C2",
        highlights: [
          "Small group (max 6) or 1-to-1 lessons",
          "Weekly conversation clinic with a native teacher",
          "Digital course book and audio library",
          "Free placement test and progress review every 6 weeks",
        ],
        syllabus: [
          "Grammar in context, practical rather than memorised",
          "Listening and pronunciation labs",
          "Business writing: emails, reports, presentations",
          "Academic writing and IELTS / TOEFL essay technique",
          "Interview and public speaking practice",
        ],
        certifications: ["Cambridge A2 Key to C2 Proficiency", "Gatehouse Awards", "IELTS Academic & General", "TOEFL iBT"],
      },
      {
        name: "Spanish",
        tagline: "ESF Language Service",
        body: "Modern, communicative Spanish taught with a Latin American and Iberian balance for travel, career mobility, study and certification.",
        priceFrom: "From €60 / month",
        duration: "3 · 6 · 12 month tracks",
        format: "In studio · Online · Hybrid",
        levels: "A1 to C2",
        highlights: [
          "Conversation-first methodology",
          "Native teachers from Spain and Latin America",
          "DELE and SIELE examination preparation",
          "Cultural workshops: música, cine, gastronomía",
        ],
        syllabus: [
          "Practical vocabulary for daily life and travel",
          "Grammar built through real dialogue",
          "Professional Spanish for business and negotiation",
          "Academic reading and writing",
          "DELE / SIELE exam strategy and mock tests",
        ],
        certifications: ["Instituto Cervantes DELE A1 to C2", "SIELE"],
      },
      {
        name: "French",
        tagline: "ESF Language Service",
        body: "General and professional French with structured DELF and DALF preparation, from your first bonjour to full academic and business fluency.",
        priceFrom: "From €60 / month",
        duration: "3 · 6 · 12 month tracks",
        format: "In studio · Online · Hybrid",
        levels: "A1 to C2",
        highlights: [
          "Certified francophone teachers",
          "Phonetics lab for authentic pronunciation",
          "DELF / DALF preparation and mock exams",
          "French for hospitality, fashion and diplomacy",
        ],
        syllabus: [
          "Practical French for travel and everyday life",
          "Grammar, conjugation and syntax",
          "Business French: correspondence and meetings",
          "Academic French for universities in France and Belgium",
          "DELF / DALF exam practice with feedback",
        ],
        certifications: ["DELF A1 to B2", "DALF C1 and C2", "TCF"],
      },
      {
        name: "Italian",
        tagline: "ESF Language Service",
        body: "Learn Italian through an internationally recognised programme accredited by UNIDA — Università per Stranieri \"Dante Alighieri\" di Reggio Calabria, the official issuer of the CECOL Italian Language Certification. Our courses combine practical language training, cultural immersion, and expert preparation for internationally recognised certification from A2 to C2.",
        priceFrom: "From €60 / month",
        duration: "10 weeks · 20 weeks · Intensive",
        format: "In studio · Online · Intensive",
        levels: "A2 to C2",
        highlights: [
          "Official UNIDA CECOL preparation and examination",
          "Italian culture sessions (cinema, cuisine, history and traditions)",
          "University admissions guidance for Italy",
          "Assistance with Codice Fiscale applications",
          "Assistance with Residence Permit applications",
          "Experienced instructors",
          "Personalised learning support",
        ],
        syllabus: [
          "Everyday Italian for living and working in Italy",
          "Grammar, verbi and syntax with guided practice",
          "Reading Italian literature and current affairs",
          "Academic Italian for university and research",
          "Simulated CECOL A2 to C2 exam practice",
        ],
        certifications: ["UNIDA CECOL A2 · B1 · B2 · C1 · C2", "CELI A2 · B1 · B2 · C1 · C2"],
      },
    ],
    levelsTitle: "Aligned with the Common European Framework",
    levels: ["Beginner · A1", "Elementary · A2", "Intermediate · B1", "Upper Intermediate · B2", "Advanced · C1", "Proficiency · C2"],
    distanceTitle: "Online lessons",
    distanceBody: "Availability and training possibilities at any time for you — our online classes flex around your schedule, without compromising on quality.",
  },
  about: {
    eyebrow: "About ESF",
    title: "Who we are",
    body: [
      "ESF Language Services is a trusted provider of language education, international student support, and educational consultancy services. We help students, professionals, businesses, and educational institutions achieve their academic and career goals through expert guidance, personalised solutions, and high-quality language services.",
      "Our expertise includes language courses, internationally recognised language certification preparation, study abroad consulting, university admissions, student visa and residence permit assistance, translation and interpretation, academic support, career development, and intercultural consulting.",
    ],
    mission: {
      title: "Our Mission",
      body: "To empower individuals and organisations through high-quality education, language training, and professional consultancy — making international education, communication and career opportunities accessible through reliable guidance and personalised support.",
    },
    vision: {
      title: "Our Vision",
      body: "To become a leading international provider of language and educational services, recognised for excellence, innovation, and a commitment to helping people succeed in an increasingly global society.",
    },
    why: {
      title: "Why Choose Us",
      body: "We combine educational expertise with personalised support to ensure every client receives practical solutions tailored to their needs.",
      bullets: [
        "Comprehensive education and language services under one roof.",
        "Personalised guidance from experienced professionals.",
        "Accredited language training and certification preparation.",
        "Expert support for study abroad, university admissions, visas and residence permits.",
        "Professional translation, interpretation and academic support.",
        "Flexible online and in-person learning opportunities.",
        "A welcoming, multicultural environment dedicated to student and client success.",
      ],
    },
    values: {
      title: "Our Core Values",
      body: "Excellence, integrity, professionalism, inclusivity, innovation and lifelong learning. We believe that education and language are powerful tools for personal growth, cultural understanding and global opportunity.",
    },
    stats: [
      { value: "9+", label: "Years of practice" },
      { value: "1,200+", label: "Learners supported" },
      { value: "20+", label: "Specialised services" },
      { value: "4+", label: "Core languages" },
    ],
    goalsTitle: "Our goals",
    goals: "The Centre's main objective is the satisfaction of every learner, and building — from the very first lesson — a relationship that respects their expectations and delivers measurable results.",
  },
  detailed: {
    eyebrow: "Our services in detail",
    title: "A single studio for every step of your journey",
    lede: "Explore the full breadth of what ESF Language Services delivers — from language learning and certification to visa, admissions, translation and integration support.",
    services: [
      {
        title: "Language Courses",
        intro: "High-quality language courses for learners of all ages and proficiency levels — for education, work, travel or personal development. Our experienced instructors provide practical, engaging and personalised lessons to help you achieve your goals.",
        bullets: [
          "English, Italian, Spanish, French and other foreign language courses.",
          "Beginner, Intermediate, Advanced and Proficiency levels.",
          "General, academic and business language programmes.",
          "Individual and small group classes.",
          "Online and in-person learning options.",
          "Flexible weekday, evening and weekend schedules.",
          "Italian programmes aligned with UNIDA CECOL accreditation (A2 to C2).",
          "Preparation for Cambridge English, IELTS and TOEFL.",
        ],
        outro: "We help learners develop the confidence and communication skills needed to succeed in academic, professional and everyday environments.",
      },
      {
        title: "Language Certification Preparation Center",
        intro: "Specialised preparation courses for internationally recognised language certification exams. We are an accredited Cambridge preparation and examination centre, and UNIDA CECOL accredited for Italian A2 to C2 certification.",
        bullets: [
          "Preparation for Cambridge English Qualifications, IELTS and TOEFL.",
          "Italian certification preparation from A2 to C2 (UNIDA CECOL).",
          "Diagnostic assessments to determine your current level.",
          "Comprehensive training in reading, writing, listening and speaking.",
          "Exam techniques, time management and simulated practice tests.",
          "Individual feedback and progress monitoring.",
          "Small group and one-to-one preparation classes.",
          "Online and in-person preparation courses.",
        ],
      },
      {
        title: "Language Certification Services",
        intro: "We guide students, professionals and organisations through the full certification process — from selecting the right examination to registration and preparation.",
        bullets: [
          "Guidance in selecting the most suitable language certification.",
          "Assistance with examination registration and application.",
          "Information on dates, fees and test centres.",
          "Coordination with authorised examination centres.",
          "Advice on validity and recognition by universities, employers and authorities.",
          "Support for Cambridge English (A2 Key to C2 Proficiency, Business B1/B2/C1), IELTS, TOEFL and UNIDA CECOL Italian.",
        ],
      },
      {
        title: "Student Visa Assistance",
        intro: "Comprehensive support to international students throughout the student visa process — from the initial application to arrival in their study destination.",
        bullets: [
          "Guidance in selecting the right school, college, university or language institution.",
          "Support with applications to obtain the required admission letter.",
          "Preparation and organisation of all required visa documentation.",
          "Review of visa application forms for accuracy and completeness.",
          "Advice on financial documents, accommodation and travel insurance.",
          "Guidance on embassy and consulate requirements.",
          "Pre-departure information and travel preparation.",
          "Ongoing support until the visa decision is received.",
        ],
      },
      {
        title: "University Guidance and Admissions Support",
        intro: "Personalised university guidance and admissions support at every stage of the process, so you make informed decisions about your academic future.",
        bullets: [
          "Personalised consultation to identify the most suitable universities and programmes.",
          "Guidance on admission requirements, eligibility criteria and deadlines.",
          "Support with completing and submitting application forms.",
          "Preparation of academic transcripts, personal statements, motivation letters, CVs and references.",
          "Document review to meet institutional requirements.",
          "Communication with universities regarding admissions.",
          "Guidance on acceptance offers, enrolment procedures and next steps.",
          "Advice on scholarships, tuition fees and funding opportunities.",
        ],
      },
      {
        title: "Residence Permit Assistance",
        intro: "Practical guidance and support for international students and foreign nationals applying for or renewing their residence permits.",
        bullets: [
          "Guidance on residence permit requirements and procedures.",
          "Preparation and organisation of required documentation.",
          "Support in completing application forms accurately.",
          "Information on deadlines and renewal procedures.",
          "Assistance with booking appointments.",
          "Guidance on health insurance, proof of accommodation and enrolment certificates.",
          "Help tracking application progress and status changes.",
          "General information on rights and responsibilities.",
        ],
      },
      {
        title: "Study Abroad Consulting",
        intro: "Expert guidance from choosing the right destination to successfully beginning your studies abroad — tailored to your academic background, career aspirations and budget.",
        bullets: [
          "Personalised counselling on academic goals and budget.",
          "Guidance in selecting country, university, college or language school.",
          "Information on programmes, admission requirements and deadlines.",
          "Advice on tuition fees, living costs, scholarships and financial planning.",
          "Support with applications, visa and pre-departure preparation.",
          "Information on accommodation, health insurance and travel arrangements.",
          "Ongoing support before departure and after arrival.",
        ],
      },
      {
        title: "Student Accommodation Assistance",
        intro: "We help international students find safe, comfortable and affordable accommodation that suits their needs and budget.",
        bullets: [
          "Options across student residences, shared apartments, homestays and private rentals.",
          "Accommodation close to universities, colleges and language schools.",
          "Advice on rental costs, contracts, deposits and utilities.",
          "Communication support with landlords and agencies.",
          "Information on neighbourhoods, transport and amenities.",
          "Guidance on temporary accommodation before permanent housing.",
          "Advice on tenant rights and responsibilities.",
        ],
      },
      {
        title: "International Student Reception and Integration",
        intro: "Reception and integration services designed to make the transition into a new country as smooth and stress-free as possible.",
        bullets: [
          "Airport pickup arrangements and arrival assistance where available.",
          "Orientation sessions on the city and educational institution.",
          "Guidance on transport, banking, healthcare and essential services.",
          "Assistance with registration and administrative formalities.",
          "Cultural orientation on customs, traditions and everyday life.",
          "Access to social, cultural and networking opportunities.",
          "Ongoing guidance during academic and social adaptation.",
        ],
      },
      {
        title: "Private Tutoring & After-School Programs",
        intro: "Personalised private tutoring and after-school programmes designed to help students achieve academic goals and build confidence.",
        bullets: [
          "Individual and small group tutoring sessions.",
          "Support for primary, secondary, college and university students.",
          "Homework assistance and exam preparation.",
          "Study techniques and time-management skills.",
          "Supervised homework and academic reinforcement.",
          "Reading, writing and creative workshops.",
          "Online and in-person options with flexible scheduling.",
        ],
      },
      {
        title: "Professional, Sworn and Certified Translation",
        intro: "Accurate, reliable and confidential translation services for individuals, businesses, educational institutions and public organisations.",
        bullets: [
          "Personal, academic, legal, medical, technical and business documents.",
          "Sworn (official) translations accepted by courts and authorities.",
          "Certified translations for immigration, visa, universities and professional purposes.",
          "Diplomas, transcripts, certificates, contracts and civil status documents.",
          "Multilingual services in English, Italian, Spanish, French and more.",
          "Fast turnaround with strict quality control and confidentiality.",
        ],
      },
      {
        title: "Proofreading, Text Revision and Editing",
        intro: "Professional proofreading, revision and editing to ensure your documents are accurate, clear and polished — while preserving your original message and style.",
        bullets: [
          "Grammar, spelling, punctuation and syntax correction.",
          "Improvement of sentence structure, clarity and readability.",
          "Structural and content editing for essays, dissertations and articles.",
          "Business editing of reports, proposals and presentations.",
          "Formatting according to institutional or publication guidelines.",
          "Multilingual proofreading and revision.",
        ],
      },
      {
        title: "Thesis Support & Academic Assistance",
        intro: "Comprehensive support for undergraduate, postgraduate and doctoral students, from research topic to oral defence — always upholding academic integrity.",
        bullets: [
          "Guidance on selecting and refining research topics.",
          "Thesis planning, structure and organisation.",
          "Support with research proposals and outlines.",
          "Literature reviews and citation styles (APA, MLA, Harvard, Chicago).",
          "Proofreading, editing and language improvement.",
          "Preparation for thesis presentations and oral defences.",
        ],
      },
      {
        title: "Summer and Winter Camps",
        intro: "Engaging camps that combine language learning, education, cultural experiences and recreational activities in a fun and supportive environment.",
        bullets: [
          "Intensive language learning programmes.",
          "Interactive workshops and classroom activities.",
          "Sports, games and outdoor recreation.",
          "Arts, music and creative projects.",
          "Educational excursions and cultural visits.",
          "Team-building and leadership activities.",
          "International participants and safe, supervised environments.",
        ],
      },
      {
        title: "Language Immersion Programs",
        intro: "Immersion programmes that develop language proficiency through real-life communication and cultural experiences.",
        bullets: [
          "Full and partial immersion experiences.",
          "English, Italian, Spanish, French and other languages.",
          "Practical communication with native or fluent speakers.",
          "Cultural workshops and local excursions.",
          "Short-term and long-term options.",
          "Customised programmes for schools and groups.",
        ],
      },
      {
        title: "Educational and Cultural Activities for Young People",
        intro: "Programmes that inspire young people to learn, explore and develop valuable life skills through creativity, teamwork, leadership and intercultural understanding.",
        bullets: [
          "Educational workshops and seminars.",
          "Language clubs and conversation groups.",
          "Cultural exchange activities and museum visits.",
          "Arts, music and creative workshops.",
          "Public speaking, leadership and personal development.",
          "Community engagement and international exchanges.",
        ],
      },
      {
        title: "Career Guidance, CV Writing & Interview Preparation",
        intro: "Personalised career guidance to help students, graduates and professionals identify strengths, build professional documents and succeed in interviews.",
        bullets: [
          "One-to-one career counselling and skills assessment.",
          "Professional, modern CVs tailored to industry standards.",
          "Customised cover letters for specific job applications.",
          "Adaptation of CVs for international job markets.",
          "Mock interview sessions with feedback.",
          "Communication, body language and professional etiquette training.",
          "Internship and placement support with partner organisations.",
        ],
      },
      {
        title: "Codice Fiscale & Administrative Support",
        intro: "Assistance in obtaining the Italian Tax Code (Codice Fiscale) and completing essential administrative procedures.",
        bullets: [
          "Guidance on the Codice Fiscale application process.",
          "Assistance with forms, documentation and appointments.",
          "Completion of official forms and applications.",
          "Document preparation, verification and translation.",
          "Support with appointments at public offices and institutions.",
          "General administrative advice for students and foreign residents.",
        ],
      },
      {
        title: "Integration Services & Intercultural Consulting",
        intro: "Support for foreign nationals to integrate successfully — plus intercultural training for individuals and organisations navigating diverse environments.",
        bullets: [
          "Orientation and welcome support for newcomers.",
          "Guidance on local culture, customs and daily life.",
          "Assistance with healthcare, transport and banking.",
          "Community engagement and social integration.",
          "Cultural awareness training for individuals and organisations.",
          "Cross-cultural communication and etiquette guidance.",
          "Conflict resolution in intercultural settings.",
        ],
      },
      {
        title: "Corporate Language Training & Educational Services",
        intro: "Tailored corporate language training and customised educational solutions for schools, universities, businesses and organisations.",
        bullets: [
          "Customised language courses for companies and employees.",
          "Business English, Italian, Spanish, French and more.",
          "Industry-specific vocabulary and communication training.",
          "Meetings, presentations, negotiations and business writing.",
          "Professional development for teachers, educators and corporate staff.",
          "Workshops, seminars and educational events.",
          "Curriculum development and international education initiatives.",
          "On-site, online or hybrid delivery.",
        ],
      },
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
      { q: "Can I take lessons entirely online?", a: "Yes. Every course we offer runs both in the classroom and fully online, with the same teachers and materials." },
      { q: "Do you prepare for official certifications?", a: "We are an accredited Cambridge preparation and examination centre, and UNIDA CECOL accredited for Italian A2–C2. We also prepare learners for IELTS, TOEFL, DELF/DALF and DELE." },
      { q: "Do you support student visas and residence permits?", a: "Yes — we provide comprehensive support across the student visa process and residence permit applications and renewals." },
      { q: "Do you work with companies?", a: "Absolutely. We build bespoke corporate programmes for teams and executives, on site or online, in every major business language." },
      { q: "Do you provide certified and sworn translations?", a: "Yes — professional, sworn and certified translations accepted by courts, universities, employers and public authorities." },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Come and say hello",
    lede: "Visit our studio in Casagiove, call, message us on WhatsApp or drop us a line. We typically reply within one business day.",
    address: "Via Milano, 18 · 81022 Casagiove (CE), Italy",
    phone: "+39 338 922 8520",
    whatsapp: "+39 0823 141 0601",
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
    lede: "Secure your place with a simple online enrolment. Prices start from the rates below. Every course is tailored, and we will confirm the final quote after your placement.",
    plans: [
      {
        name: "Group Programme",
        price: "From €50",
        period: "per month",
        description: "Small group classes with a certified teacher, perfect for steady, sociable progress.",
        features: [
          "Small group (max 6 learners)",
          "Weekly conversation practice",
          "Digital course book and audio library",
          "Placement test and progress review every 6 weeks",
          "In studio or online",
        ],
      },
      {
  name: "International Student Programme",
  price: "Price on Request",
  period: "bespoke",
  description: "A complete programme designed for international students who need language training, academic support and guidance throughout their study journey.",
  features: [
    "20 hours per week structured tuition",
    "Personalised study plan and weekly homework review",
    "Certification preparation (Cambridge · Gatehouse · IELTS · TOEFL · CECOL · DELF · DELE)",
    "Weekly conversation clinic with a native teacher",
    "Student visa and university support guidance",
    "In studio, online or hybrid learning options",
  ],
  featured: true,
},
      {
        name: "Private & Corporate",
        price: "Price on Request",
        period: "bespoke",
        description: "Fully tailored 1-to-1 or corporate programmes for professionals, executives and teams.",
        features: [
          "Custom 1-to-1 or team programme",
          "On-site, online or hybrid delivery",
          "Industry-specific vocabulary (legal, medical, finance, hospitality)",
          "Dedicated account manager",
          "Monthly progress reporting for HR",
          "Flexible scheduling across time zones",
        ],
      },
    ],
    disclaimer: "Prices are indicative starting rates. After enrolment we confirm the final quote based on your placement, schedule and objectives. VAT included where applicable.",
    faqTitle: "Enrolment questions",
    faq: [
      { q: "How does enrolment work?", a: "Choose a programme, fill in your details, and your enrolment request is sent directly to our team via WhatsApp or email. We reply within one business day to schedule your free placement and confirm your quote." },
      { q: "Can I try a lesson before enrolling?", a: "Yes. Every new learner receives a complimentary placement session (written test and short conversation) so we can recommend the right level and study plan." },
      { q: "How do I pay?", a: "You can pay in studio, by bank transfer, or online via secure card payment. Monthly and quarterly billing available." },
      { q: "Can I switch plans later?", a: "Absolutely. You can move up or down at any point. We simply adjust your next monthly billing cycle." },
    ],
  },
  footer: {
    tagline: "ESF Language Services — trusted provider of language education, international student support and educational consultancy.",
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

// Italian translations. Only genuinely translated copy lives here — any field
// omitted below automatically falls back to the English content in `en`, so no
// placeholder text is ever shown. If English is also missing, the field is left
// empty rather than displaying a placeholder.
const itPartial: DeepPartial<Dict> = {
  nav: { home: "Home", about: "Chi siamo", courses: "Corsi", services: "Servizi", gallery: "Galleria", faq: "FAQ", contact: "Contatti", payment: "Iscriviti" },
  cta: { book: "Prenota una consulenza", explore: "Esplora i corsi", contact: "Contattaci", enroll: "Iscriviti ora", discover: "Scopri", learnMore: "Scopri di più" },
  hero: {
    eyebrow: "Centro linguistico · Casagiove, Caserta · Italia",
    title: "Lingua, formazione e",
    titleAccent: "opportunità",
    lede: "ESF Language Services è un fornitore affidabile di formazione linguistica, supporto agli studenti internazionali e consulenza educativa — aiutiamo studenti, professionisti e organizzazioni ad avere successo in una società globale.",
  },
  pillars: {
    title: "Fondati su quattro principi",
    items: [
      { title: "Insegnamento individuale", body: "Ogni piano di studio è strutturato in base al livello, agli obiettivi e al ritmo dello studente." },
      { title: "Docenti certificati", body: "Tutti i nostri insegnanti possiedono le qualifiche che confermano la loro competenza didattica." },
      { title: "Approccio moderno", body: "Uniamo metodi interattivi a strumenti contemporanei per rendere l'apprendimento efficace e duraturo." },
      { title: "Online e in presenza", body: "Studia nella sede di Casagiove o da qualsiasi parte del mondo, negli orari più adatti a te." },
    ],
  },
  intro: {
    eyebrow: "ESF Language Services",
    title: "Corsi di lingue straniere, progettati con cura.",
    body: "Corsi di inglese, italiano, spagnolo, francese e altre lingue straniere per bambini, adolescenti, adulti, professionisti e aziende — in aula o online, a ogni livello dall'A1 al C2.",
  },
  services: {
    eyebrow: "Cosa facciamo",
    title: "Un unico studio, venti servizi specializzati",
    lede: "Dalle lezioni private e dalle certificazioni riconosciute a livello internazionale alla traduzione, revisione, studio all'estero e assistenza per il permesso di soggiorno — ogni servizio è offerto con lo stesso rigore e la stessa cura.",
    items: [
      { title: "Corsi di lingua", body: "Inglese, italiano, spagnolo, francese e altre lingue — ogni livello, ogni studente." },
      { title: "Preparazione alle certificazioni", body: "Centro accreditato Cambridge; accreditato UNIDA CECOL per l'italiano A2–C2." },
      { title: "Assistenza per il visto studenti", body: "Dall'ammissione all'arrivo — supporto completo in tutto il processo del visto studenti." },
      { title: "Ammissioni universitarie", body: "Guida personalizzata per scegliere l'università giusta e preparare una candidatura vincente." },
      { title: "Supporto per il permesso di soggiorno", body: "Aiuto pratico per le richieste e i rinnovi del permesso di soggiorno." },
      { title: "Consulenza per lo studio all'estero", body: "Scegli il paese, il programma e l'istituto giusti — con una guida esperta a ogni passo." },
      { title: "Traduzioni", body: "Servizi di traduzione professionale, giurata e certificata in più lingue." },
      { title: "Revisione e correzione di bozze", body: "Revisione accademica, aziendale e professionale per valorizzare ogni documento." },
      { title: "Formazione linguistica aziendale", body: "Formazione linguistica su misura per team, dirigenti e organizzazioni." },
    ],
  },
  courses: {
    eyebrow: "Corsi di lingue straniere",
    title: "Quattro lingue principali. Ogni livello. Il tuo ritmo.",
    lede: "Corsi pensati per adulti che crescono a livello personale o professionale, adolescenti che necessitano di supporto scolastico, bambini con una precoce curiosità per le lingue e aziende che formano i propri team.",
    detailsLabel: "Vedi dettagli", hideLabel: "Nascondi",
    priceLabel: "Da", durationLabel: "Durata", formatLabel: "Formato",
    levelsLabel: "Livelli", includesLabel: "Cosa è incluso",
    syllabusLabel: "Programma", certificationsLabel: "Certificazioni",
    languages: [
      {
        name: "Inglese",
        body: "Dalla conversazione quotidiana sicura alla preparazione per Cambridge, IELTS e TOEFL. Inglese a ogni livello, insegnato da docenti certificati madrelingua e quasi madrelingua.",
        priceFrom: "Da €50 / mese",
        duration: "Percorsi da 3 · 6 · 12 mesi",
        format: "In sede · Online · Ibrido",
        levels: "Dall'A1 al C2",
        highlights: [
          "Piccoli gruppi (max 6) o lezioni individuali",
          "Clinica di conversazione settimanale con un docente madrelingua",
          "Libro di testo digitale e libreria audio",
          "Test di livello gratuito e verifica dei progressi ogni 6 settimane",
        ],
        syllabus: [
          "Grammatica in contesto, pratica anziché mnemonica",
          "Laboratori di ascolto e pronuncia",
          "Scrittura aziendale: email, report, presentazioni",
          "Scrittura accademica e tecnica per i saggi IELTS / TOEFL",
          "Pratica di colloqui e public speaking",
        ],
      },
      {
        name: "Spagnolo",
        body: "Spagnolo moderno e comunicativo insegnato con un equilibrio tra varietà latinoamericane e iberiche, per viaggi, mobilità professionale, studio e certificazione.",
        priceFrom: "Da €60 / mese",
        duration: "Percorsi da 3 · 6 · 12 mesi",
        format: "In sede · Online · Ibrido",
        levels: "Dall'A1 al C2",
        highlights: [
          "Metodologia che dà priorità alla conversazione",
          "Docenti madrelingua dalla Spagna e dall'America Latina",
          "Preparazione agli esami DELE e SIELE",
          "Laboratori culturali: música, cine, gastronomía",
        ],
        syllabus: [
          "Vocabolario pratico per la vita quotidiana e i viaggi",
          "Grammatica costruita attraverso il dialogo reale",
          "Spagnolo professionale per affari e negoziazione",
          "Lettura e scrittura accademica",
          "Strategia d'esame DELE / SIELE e simulazioni",
        ],
      },
      {
        name: "Francese",
        body: "Francese generale e professionale con preparazione strutturata a DELF e DALF, dal tuo primo bonjour alla piena padronanza accademica e professionale.",
        priceFrom: "Da €60 / mese",
        duration: "Percorsi da 3 · 6 · 12 mesi",
        format: "In sede · Online · Ibrido",
        levels: "Dall'A1 al C2",
        highlights: [
          "Docenti francofoni certificati",
          "Laboratorio di fonetica per una pronuncia autentica",
          "Preparazione DELF / DALF e simulazioni d'esame",
          "Francese per ospitalità, moda e diplomazia",
        ],
        syllabus: [
          "Francese pratico per viaggi e vita quotidiana",
          "Grammatica, coniugazione e sintassi",
          "Francese aziendale: corrispondenza e riunioni",
          "Francese accademico per le università in Francia e Belgio",
          "Esercitazioni d'esame DELF / DALF con feedback",
        ],
      },
      {
        name: "Italiano",
        body: "Impara l'italiano attraverso un programma riconosciuto a livello internazionale e accreditato da UNIDA — Università per Stranieri \"Dante Alighieri\" di Reggio Calabria, l'ente ufficiale che rilascia la Certificazione di Lingua Italiana CECOL. I nostri corsi combinano formazione linguistica pratica, immersione culturale e una preparazione esperta per la certificazione riconosciuta a livello internazionale dall'A2 al C2.",
        priceFrom: "Da €60 / mese",
        duration: "10 settimane · 20 settimane · Intensivo",
        format: "In sede · Online · Intensivo",
        levels: "Dall'A2 al C2",
        highlights: [
          "Preparazione ed esame ufficiale UNIDA CECOL",
          "Sessioni di cultura italiana (cinema, cucina, storia e tradizioni)",
          "Guida alle ammissioni universitarie in Italia",
          "Assistenza per la richiesta del Codice Fiscale",
          "Assistenza per la richiesta del permesso di soggiorno",
          "Docenti esperti",
          "Supporto all'apprendimento personalizzato",
        ],
        syllabus: [
          "Italiano quotidiano per vivere e lavorare in Italia",
          "Grammatica, verbi e sintassi con pratica guidata",
          "Lettura della letteratura italiana e dell'attualità",
          "Italiano accademico per l'università e la ricerca",
          "Simulazioni d'esame CECOL dall'A2 al C2",
        ],
      },
    ],
    levelsTitle: "In linea con il Quadro Comune Europeo di Riferimento",
    levels: ["Principiante · A1", "Elementare · A2", "Intermedio · B1", "Intermedio superiore · B2", "Avanzato · C1", "Padronanza · C2"],
    distanceTitle: "Lezioni online",
    distanceBody: "Disponibilità e possibilità di formazione in qualsiasi momento per te — le nostre lezioni online si adattano ai tuoi impegni, senza compromettere la qualità.",
  },
  about: {
    eyebrow: "Chi siamo",
    title: "Chi siamo",
    body: [
      "ESF Language Services è un fornitore affidabile di formazione linguistica, supporto agli studenti internazionali e servizi di consulenza educativa. Aiutiamo studenti, professionisti, aziende e istituzioni educative a raggiungere i propri obiettivi accademici e professionali attraverso una guida esperta, soluzioni personalizzate e servizi linguistici di alta qualità.",
      "La nostra competenza comprende corsi di lingua, preparazione alle certificazioni linguistiche riconosciute a livello internazionale, consulenza per lo studio all'estero, ammissioni universitarie, assistenza per visti studenti e permessi di soggiorno, traduzione e interpretariato, supporto accademico, sviluppo professionale e consulenza interculturale.",
    ],
    mission: {
      title: "La nostra missione",
      body: "Dare potere a individui e organizzazioni attraverso una formazione di alta qualità, l'insegnamento delle lingue e la consulenza professionale — rendendo accessibili l'istruzione internazionale, la comunicazione e le opportunità di carriera grazie a una guida affidabile e a un supporto personalizzato.",
    },
    vision: {
      title: "La nostra visione",
      body: "Diventare un fornitore internazionale di riferimento di servizi linguistici ed educativi, riconosciuto per eccellenza, innovazione e impegno nell'aiutare le persone ad avere successo in una società sempre più globale.",
    },
    why: {
      title: "Perché sceglierci",
      body: "Uniamo competenza educativa e supporto personalizzato per garantire a ogni cliente soluzioni pratiche su misura per le proprie esigenze.",
      bullets: [
        "Servizi educativi e linguistici completi in un unico luogo.",
        "Guida personalizzata da parte di professionisti esperti.",
        "Formazione linguistica accreditata e preparazione alle certificazioni.",
        "Supporto esperto per studio all'estero, ammissioni universitarie, visti e permessi di soggiorno.",
        "Traduzione professionale, interpretariato e supporto accademico.",
        "Opportunità di apprendimento flessibili, online e in presenza.",
        "Un ambiente accogliente e multiculturale dedicato al successo di studenti e clienti.",
      ],
    },
    values: {
      title: "I nostri valori",
      body: "Eccellenza, integrità, professionalità, inclusività, innovazione e apprendimento continuo. Crediamo che l'istruzione e le lingue siano strumenti potenti per la crescita personale, la comprensione culturale e le opportunità globali.",
    },
    stats: [
      { label: "Anni di attività" },
      { label: "Studenti supportati" },
      { label: "Servizi specializzati" },
      { label: "Lingue principali" },
    ],
    goalsTitle: "I nostri obiettivi",
    goals: "L'obiettivo principale del Centro è la soddisfazione di ogni studente e la costruzione — fin dalla prima lezione — di un rapporto che rispetti le sue aspettative e offra risultati misurabili.",
  },
  detailed: {
    eyebrow: "I nostri servizi in dettaglio",
    title: "Un unico studio per ogni fase del tuo percorso",
    lede: "Esplora tutta l'ampiezza di ciò che ESF Language Services offre — dall'apprendimento delle lingue e le certificazioni al supporto per visti, ammissioni, traduzioni e integrazione.",
    services: [
      {
        title: "Corsi di lingua",
        intro: "Corsi di lingua di alta qualità per studenti di tutte le età e livelli — per istruzione, lavoro, viaggi o crescita personale. I nostri docenti esperti offrono lezioni pratiche, coinvolgenti e personalizzate per aiutarti a raggiungere i tuoi obiettivi.",
        bullets: [
          "Corsi di inglese, italiano, spagnolo, francese e altre lingue straniere.",
          "Livelli principiante, intermedio, avanzato e padronanza.",
          "Programmi linguistici generali, accademici e aziendali.",
          "Lezioni individuali e in piccoli gruppi.",
          "Opzioni di apprendimento online e in presenza.",
          "Orari flessibili nei giorni feriali, la sera e nel weekend.",
          "Programmi di italiano allineati all'accreditamento UNIDA CECOL (dall'A2 al C2).",
          "Preparazione per Cambridge English, IELTS e TOEFL.",
        ],
        outro: "Aiutiamo gli studenti a sviluppare la sicurezza e le competenze comunicative necessarie per avere successo in ambito accademico, professionale e quotidiano.",
      },
      {
        title: "Centro di preparazione alle certificazioni linguistiche",
        intro: "Corsi di preparazione specializzati per gli esami di certificazione linguistica riconosciuti a livello internazionale. Siamo un centro accreditato di preparazione ed esame Cambridge e accreditati UNIDA CECOL per la certificazione di italiano dall'A2 al C2.",
        bullets: [
          "Preparazione per Cambridge English Qualifications, IELTS e TOEFL.",
          "Preparazione alla certificazione di italiano dall'A2 al C2 (UNIDA CECOL).",
          "Valutazioni diagnostiche per determinare il tuo livello attuale.",
          "Formazione completa in lettura, scrittura, ascolto e conversazione.",
          "Tecniche d'esame, gestione del tempo e simulazioni.",
          "Feedback individuale e monitoraggio dei progressi.",
          "Lezioni di preparazione in piccoli gruppi e individuali.",
          "Corsi di preparazione online e in presenza.",
        ],
      },
      {
        title: "Servizi di certificazione linguistica",
        intro: "Guidiamo studenti, professionisti e organizzazioni attraverso l'intero processo di certificazione — dalla scelta dell'esame più adatto alla registrazione e alla preparazione.",
        bullets: [
          "Guida nella scelta della certificazione linguistica più adatta.",
          "Assistenza per la registrazione e la domanda d'esame.",
          "Informazioni su date, costi e centri d'esame.",
          "Coordinamento con i centri d'esame autorizzati.",
          "Consulenza sulla validità e sul riconoscimento da parte di università, datori di lavoro e autorità.",
          "Supporto per Cambridge English (da A2 Key a C2 Proficiency, Business B1/B2/C1), IELTS, TOEFL e UNIDA CECOL italiano.",
        ],
      },
      {
        title: "Assistenza per il visto studenti",
        intro: "Supporto completo agli studenti internazionali durante tutto il processo del visto studenti — dalla domanda iniziale all'arrivo nella destinazione di studio.",
        bullets: [
          "Guida nella scelta della scuola, del college, dell'università o dell'istituto linguistico giusti.",
          "Supporto nelle domande per ottenere la lettera di ammissione necessaria.",
          "Preparazione e organizzazione di tutta la documentazione richiesta per il visto.",
          "Revisione dei moduli di domanda del visto per accuratezza e completezza.",
          "Consulenza su documenti finanziari, alloggio e assicurazione di viaggio.",
          "Guida sui requisiti di ambasciate e consolati.",
          "Informazioni pre-partenza e preparazione al viaggio.",
          "Supporto continuo fino alla ricezione della decisione sul visto.",
        ],
      },
      {
        title: "Guida e supporto alle ammissioni universitarie",
        intro: "Guida universitaria personalizzata e supporto alle ammissioni in ogni fase del processo, per aiutarti a prendere decisioni informate sul tuo futuro accademico.",
        bullets: [
          "Consulenza personalizzata per individuare le università e i programmi più adatti.",
          "Guida su requisiti di ammissione, criteri di idoneità e scadenze.",
          "Supporto nella compilazione e nell'invio dei moduli di domanda.",
          "Preparazione di certificati accademici, dichiarazioni personali, lettere motivazionali, CV e referenze.",
          "Revisione dei documenti per soddisfare i requisiti degli istituti.",
          "Comunicazione con le università riguardo alle ammissioni.",
          "Guida su offerte di ammissione, procedure di iscrizione e passi successivi.",
          "Consulenza su borse di studio, tasse universitarie e opportunità di finanziamento.",
        ],
      },
      {
        title: "Assistenza per il permesso di soggiorno",
        intro: "Guida e supporto pratici per studenti internazionali e cittadini stranieri che richiedono o rinnovano il permesso di soggiorno.",
        bullets: [
          "Guida sui requisiti e le procedure del permesso di soggiorno.",
          "Preparazione e organizzazione della documentazione richiesta.",
          "Supporto nella compilazione accurata dei moduli di domanda.",
          "Informazioni su scadenze e procedure di rinnovo.",
          "Assistenza nella prenotazione degli appuntamenti.",
          "Guida su assicurazione sanitaria, prova di alloggio e certificati di iscrizione.",
          "Aiuto nel monitoraggio dell'avanzamento e dei cambiamenti di stato della domanda.",
          "Informazioni generali su diritti e doveri.",
        ],
      },
      {
        title: "Consulenza per lo studio all'estero",
        intro: "Guida esperta dalla scelta della destinazione giusta all'avvio con successo degli studi all'estero — su misura per il tuo percorso accademico, le aspirazioni di carriera e il budget.",
        bullets: [
          "Orientamento personalizzato su obiettivi accademici e budget.",
          "Guida nella scelta di paese, università, college o scuola di lingue.",
          "Informazioni su programmi, requisiti di ammissione e scadenze.",
          "Consulenza su tasse universitarie, costi della vita, borse di studio e pianificazione finanziaria.",
          "Supporto per domande, visto e preparazione pre-partenza.",
          "Informazioni su alloggio, assicurazione sanitaria e organizzazione del viaggio.",
          "Supporto continuo prima della partenza e dopo l'arrivo.",
        ],
      },
      {
        title: "Assistenza per l'alloggio studentesco",
        intro: "Aiutiamo gli studenti internazionali a trovare un alloggio sicuro, confortevole e conveniente, adatto alle loro esigenze e al loro budget.",
        bullets: [
          "Opzioni tra residenze studentesche, appartamenti condivisi, famiglie ospitanti e affitti privati.",
          "Alloggi vicini a università, college e scuole di lingue.",
          "Consulenza su costi di affitto, contratti, depositi e utenze.",
          "Supporto nella comunicazione con proprietari e agenzie.",
          "Informazioni su quartieri, trasporti e servizi.",
          "Guida sull'alloggio temporaneo prima di una sistemazione definitiva.",
          "Consulenza su diritti e doveri dell'inquilino.",
        ],
      },
      {
        title: "Accoglienza e integrazione degli studenti internazionali",
        intro: "Servizi di accoglienza e integrazione pensati per rendere la transizione in un nuovo paese il più fluida e serena possibile.",
        bullets: [
          "Organizzazione del ritiro in aeroporto e assistenza all'arrivo dove disponibile.",
          "Sessioni di orientamento sulla città e sull'istituto educativo.",
          "Guida su trasporti, banche, sanità e servizi essenziali.",
          "Assistenza con registrazione e pratiche amministrative.",
          "Orientamento culturale su usanze, tradizioni e vita quotidiana.",
          "Accesso a opportunità sociali, culturali e di networking.",
          "Guida continua durante l'adattamento accademico e sociale.",
        ],
      },
      {
        title: "Lezioni private e programmi doposcuola",
        intro: "Lezioni private personalizzate e programmi doposcuola pensati per aiutare gli studenti a raggiungere gli obiettivi accademici e a costruire fiducia in sé stessi.",
        bullets: [
          "Sessioni di tutoraggio individuali e in piccoli gruppi.",
          "Supporto per studenti di scuola primaria, secondaria, college e università.",
          "Assistenza nei compiti e preparazione agli esami.",
          "Tecniche di studio e gestione del tempo.",
          "Compiti assistiti e rafforzamento accademico.",
          "Laboratori di lettura, scrittura e creatività.",
          "Opzioni online e in presenza con orari flessibili.",
        ],
      },
      {
        title: "Traduzione professionale, giurata e certificata",
        intro: "Servizi di traduzione accurati, affidabili e riservati per privati, aziende, istituzioni educative e organizzazioni pubbliche.",
        bullets: [
          "Documenti personali, accademici, legali, medici, tecnici e aziendali.",
          "Traduzioni giurate (ufficiali) accettate da tribunali e autorità.",
          "Traduzioni certificate per immigrazione, visto, università e scopi professionali.",
          "Diplomi, certificati, attestati, contratti e documenti di stato civile.",
          "Servizi multilingue in inglese, italiano, spagnolo, francese e altre lingue.",
          "Tempi rapidi con rigoroso controllo qualità e riservatezza.",
        ],
      },
      {
        title: "Correzione di bozze, revisione ed editing di testi",
        intro: "Correzione di bozze, revisione ed editing professionali per garantire che i tuoi documenti siano accurati, chiari e curati — preservando il messaggio e lo stile originali.",
        bullets: [
          "Correzione di grammatica, ortografia, punteggiatura e sintassi.",
          "Miglioramento della struttura delle frasi, della chiarezza e della leggibilità.",
          "Editing strutturale e di contenuto per saggi, tesi e articoli.",
          "Editing aziendale di report, proposte e presentazioni.",
          "Formattazione secondo le linee guida degli istituti o delle pubblicazioni.",
          "Correzione di bozze e revisione multilingue.",
        ],
      },
      {
        title: "Supporto per la tesi e assistenza accademica",
        intro: "Supporto completo per studenti di laurea triennale, magistrale e di dottorato, dall'argomento di ricerca alla discussione orale — sempre nel rispetto dell'integrità accademica.",
        bullets: [
          "Guida nella scelta e nel perfezionamento degli argomenti di ricerca.",
          "Pianificazione, struttura e organizzazione della tesi.",
          "Supporto con proposte di ricerca e scalette.",
          "Rassegne bibliografiche e stili di citazione (APA, MLA, Harvard, Chicago).",
          "Correzione di bozze, editing e miglioramento linguistico.",
          "Preparazione per presentazioni e discussioni orali della tesi.",
        ],
      },
      {
        title: "Camp estivi e invernali",
        intro: "Camp coinvolgenti che uniscono apprendimento linguistico, istruzione, esperienze culturali e attività ricreative in un ambiente divertente e stimolante.",
        bullets: [
          "Programmi intensivi di apprendimento linguistico.",
          "Laboratori interattivi e attività in aula.",
          "Sport, giochi e attività ricreative all'aperto.",
          "Arte, musica e progetti creativi.",
          "Escursioni didattiche e visite culturali.",
          "Attività di team building e leadership.",
          "Partecipanti internazionali e ambienti sicuri e supervisionati.",
        ],
      },
      {
        title: "Programmi di immersione linguistica",
        intro: "Programmi di immersione che sviluppano la competenza linguistica attraverso la comunicazione reale e le esperienze culturali.",
        bullets: [
          "Esperienze di immersione totale e parziale.",
          "Inglese, italiano, spagnolo, francese e altre lingue.",
          "Comunicazione pratica con parlanti madrelingua o fluenti.",
          "Laboratori culturali ed escursioni sul territorio.",
          "Opzioni a breve e lungo termine.",
          "Programmi personalizzati per scuole e gruppi.",
        ],
      },
      {
        title: "Attività educative e culturali per i giovani",
        intro: "Programmi che ispirano i giovani a imparare, esplorare e sviluppare preziose competenze di vita attraverso creatività, lavoro di squadra, leadership e comprensione interculturale.",
        bullets: [
          "Laboratori e seminari educativi.",
          "Club linguistici e gruppi di conversazione.",
          "Attività di scambio culturale e visite ai musei.",
          "Laboratori di arte, musica e creatività.",
          "Public speaking, leadership e crescita personale.",
          "Coinvolgimento nella comunità e scambi internazionali.",
        ],
      },
      {
        title: "Orientamento professionale, stesura del CV e preparazione ai colloqui",
        intro: "Orientamento professionale personalizzato per aiutare studenti, laureati e professionisti a individuare i propri punti di forza, costruire documenti professionali e avere successo nei colloqui.",
        bullets: [
          "Consulenza professionale individuale e valutazione delle competenze.",
          "CV professionali e moderni, in linea con gli standard del settore.",
          "Lettere di presentazione personalizzate per specifiche candidature.",
          "Adattamento dei CV per i mercati del lavoro internazionali.",
          "Simulazioni di colloqui con feedback.",
          "Formazione su comunicazione, linguaggio del corpo ed etichetta professionale.",
          "Supporto per tirocini e inserimenti con organizzazioni partner.",
        ],
      },
      {
        title: "Codice Fiscale e supporto amministrativo",
        intro: "Assistenza per ottenere il Codice Fiscale italiano e completare le pratiche amministrative essenziali.",
        bullets: [
          "Guida sul processo di richiesta del Codice Fiscale.",
          "Assistenza con moduli, documentazione e appuntamenti.",
          "Compilazione di moduli e domande ufficiali.",
          "Preparazione, verifica e traduzione dei documenti.",
          "Supporto per appuntamenti presso uffici e istituzioni pubblici.",
          "Consulenza amministrativa generale per studenti e residenti stranieri.",
        ],
      },
      {
        title: "Servizi di integrazione e consulenza interculturale",
        intro: "Supporto ai cittadini stranieri per integrarsi con successo — oltre a formazione interculturale per individui e organizzazioni che operano in ambienti diversificati.",
        bullets: [
          "Orientamento e supporto all'accoglienza per i nuovi arrivati.",
          "Guida su cultura locale, usanze e vita quotidiana.",
          "Assistenza con sanità, trasporti e banche.",
          "Coinvolgimento nella comunità e integrazione sociale.",
          "Formazione sulla consapevolezza culturale per individui e organizzazioni.",
          "Guida alla comunicazione interculturale e all'etichetta.",
          "Risoluzione dei conflitti in contesti interculturali.",
        ],
      },
      {
        title: "Formazione linguistica aziendale e servizi educativi",
        intro: "Formazione linguistica aziendale su misura e soluzioni educative personalizzate per scuole, università, aziende e organizzazioni.",
        bullets: [
          "Corsi di lingua personalizzati per aziende e dipendenti.",
          "Inglese, italiano, spagnolo, francese aziendale e altre lingue.",
          "Vocabolario di settore e formazione comunicativa specifica.",
          "Riunioni, presentazioni, negoziazioni e scrittura aziendale.",
          "Sviluppo professionale per insegnanti, educatori e personale aziendale.",
          "Laboratori, seminari ed eventi educativi.",
          "Sviluppo di programmi didattici e iniziative di educazione internazionale.",
          "Erogazione in sede, online o ibrida.",
        ],
      },
    ],
  },
  testimonials: {
    eyebrow: "Cosa dicono i nostri studenti",
    title: "Le voci dallo studio",
    items: [
      { quote: "Gli insegnanti più attenti con cui abbia mai lavorato. In sei mesi sono passata da un B1 a un B2 sicuro — e ora mi diverto davvero a parlare inglese." },
      { quote: "ESF mi ha preparato per l'IELTS con un piano costruito sui miei punti deboli. Ho superato l'esame con 7.5 al primo tentativo." },
      { quote: "Abbiamo affidato a ESF l'inglese aziendale del nostro team. I risultati — e la cultura dell'apprendimento — sono stati eccezionali." },
    ],
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Le risposte, prima ancora di chiedere",
    items: [
      { q: "Come faccio a sapere da quale livello iniziare?", a: "Ogni nuovo studente svolge un breve test di livello gratuito — una prova scritta e una breve conversazione — così possiamo consigliare il livello e il piano di studio giusti." },
      { q: "Posso seguire le lezioni interamente online?", a: "Sì. Ogni corso che offriamo si svolge sia in aula sia completamente online, con gli stessi insegnanti e materiali." },
      { q: "Preparate alle certificazioni ufficiali?", a: "Siamo un centro accreditato di preparazione ed esame Cambridge e accreditati UNIDA CECOL per l'italiano A2–C2. Prepariamo inoltre gli studenti a IELTS, TOEFL, DELF/DALF e DELE." },
      { q: "Supportate i visti studenti e i permessi di soggiorno?", a: "Sì — offriamo un supporto completo per tutto il processo del visto studenti e per le domande e i rinnovi del permesso di soggiorno." },
      { q: "Lavorate con le aziende?", a: "Assolutamente. Realizziamo programmi aziendali su misura per team e dirigenti, in sede o online, in tutte le principali lingue di business." },
      { q: "Fornite traduzioni certificate e giurate?", a: "Sì — traduzioni professionali, giurate e certificate accettate da tribunali, università, datori di lavoro e autorità pubbliche." },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Vieni a salutarci",
    lede: "Visita il nostro studio a Casagiove, chiamaci, scrivici su WhatsApp o mandaci un messaggio. Di solito rispondiamo entro un giorno lavorativo.",
    address: "Via Milano, 18 · 81022 Casagiove (CE), Italia",
    phone: "+39 0823 1410601", whatsapp: "+39 0823 1410601",
    form: { name: "Nome", email: "Email", subject: "Oggetto", message: "Come possiamo aiutarti?", consent: "Ho letto l'informativa sulla privacy e acconsento a essere contattato.", submit: "Invia" },
  },
  payment: {
    eyebrow: "Iscriviti",
    title: "Scegli il tuo programma",
    lede: "Assicurati il posto con una semplice iscrizione online. I prezzi partono dalle tariffe indicate di seguito. Ogni corso è personalizzato e confermeremo il preventivo finale dopo il test di livello.",
    plans: [
      {
        name: "Programma di gruppo",
        price: "Da €50",
        period: "al mese",
        description: "Lezioni in piccoli gruppi con un docente certificato, perfette per progressi costanti e in compagnia.",
        features: [
          "Piccolo gruppo (max 6 studenti)",
          "Pratica di conversazione settimanale",
          "Libro di testo digitale e libreria audio",
          "Test di livello e verifica dei progressi ogni 6 settimane",
          "In sede o online",
        ],
      },
      {
        name: "Programma per studenti internazionali",
        price: "Prezzo su richiesta",
        period: "su misura",
        description: "Un programma completo pensato per studenti internazionali che necessitano di formazione linguistica, supporto accademico e guida durante tutto il percorso di studio.",
        features: [
          "20 ore settimanali di lezioni strutturate",
          "Piano di studio personalizzato e revisione settimanale dei compiti",
          "Preparazione alle certificazioni (Cambridge · Gatehouse · IELTS · TOEFL · CECOL · DELF · DELE)",
          "Clinica di conversazione settimanale con un docente madrelingua",
          "Guida per il visto studenti e supporto universitario",
          "Opzioni di apprendimento in sede, online o ibride",
        ],
      },
      {
        name: "Privati e aziende",
        price: "Prezzo su richiesta",
        period: "su misura",
        description: "Programmi individuali o aziendali completamente su misura per professionisti, dirigenti e team.",
        features: [
          "Programma personalizzato individuale o di team",
          "Erogazione in sede, online o ibrida",
          "Vocabolario di settore (legale, medico, finanza, ospitalità)",
          "Account manager dedicato",
          "Report mensile dei progressi per le Risorse Umane",
          "Orari flessibili tra fusi orari diversi",
        ],
      },
    ],
    disclaimer: "I prezzi sono tariffe di partenza indicative. Dopo l'iscrizione confermiamo il preventivo finale in base al test di livello, agli orari e agli obiettivi. IVA inclusa ove applicabile.",
    faqTitle: "Domande sull'iscrizione",
    faq: [
      { q: "Come funziona l'iscrizione?", a: "Scegli un programma, inserisci i tuoi dati e la tua richiesta di iscrizione viene inviata direttamente al nostro team via WhatsApp o email. Rispondiamo entro un giorno lavorativo per fissare il tuo test di livello gratuito e confermare il preventivo." },
      { q: "Posso provare una lezione prima di iscrivermi?", a: "Sì. Ogni nuovo studente riceve una sessione di valutazione gratuita (prova scritta e breve conversazione) così possiamo consigliare il livello e il piano di studio giusti." },
      { q: "Come si paga?", a: "Puoi pagare in sede, tramite bonifico bancario o online con pagamento sicuro con carta. Sono disponibili fatturazioni mensili e trimestrali." },
      { q: "Posso cambiare programma in seguito?", a: "Assolutamente. Puoi passare a un piano superiore o inferiore in qualsiasi momento. Adegueremo semplicemente il tuo prossimo ciclo di fatturazione mensile." },
    ],
  },
  footer: {
    tagline: "ESF Language Services — fornitore affidabile di formazione linguistica, supporto agli studenti internazionali e consulenza educativa.",
    explore: "Naviga", languages: "Lingue", contact: "Contatti",
    rights: "Tutti i diritti riservati.",
  },
  ctaBanner: {
    title: "Pronto a iniziare a parlare con sicurezza?",
    body: "Prenota una consulenza gratuita di 20 minuti e progetteremo un piano di studio su misura per i tuoi obiettivi.",
    action: "Prenota una consulenza",
  },
};

// Deep-merges Italian overrides onto the English base so missing Italian copy
// falls back to English. Values present only in the base (never empty here) are
// preserved; nothing is ever replaced with a placeholder.
function mergeDict(base: unknown, override: unknown): unknown {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base)) {
    const ov = Array.isArray(override) ? override : [];
    return base.map((item, i) => mergeDict(item, ov[i]));
  }
  if (base !== null && typeof base === "object") {
    const baseObj = base as Record<string, unknown>;
    const ovObj = (typeof override === "object" && override !== null ? override : {}) as Record<string, unknown>;
    const result: Record<string, unknown> = { ...baseObj };
    for (const key of Object.keys(baseObj)) {
      result[key] = mergeDict(baseObj[key], ovObj[key]);
    }
    return result;
  }
  return override;
}

export const it: Dict = mergeDict(en, itPartial) as Dict;

export const dict = { en, it };
export function getDict(lang: string): Dict {
  return lang === "it" ? it : en;
}
