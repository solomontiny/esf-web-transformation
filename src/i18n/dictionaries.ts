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
  nav: {
    home: "Home",
    about: "Chi siamo",
    courses: "Corsi",
    services: "Servizi",
    gallery: "Galleria",
    faq: "FAQ",
    contact: "Contatti",
    payment: "Iscriviti"
  },
  cta: {
    book: "Prenota una consulenza",
    explore: "Esplora i corsi",
    contact: "Contattaci",
    enroll: "Iscriviti ora",
    discover: "Scopri",
    learnMore: "Scopri di più"
  },
  hero: {
    eyebrow: "Centro linguistico · Casagiove, Caserta · Italia",
    title: "Lingua, istruzione e",
    titleAccent: "opportunità",
    lede: "ESF Language Services è un fornitore di fiducia nei settori della formazione linguistica, del supporto agli studenti internazionali e della consulenza didattica, per aiutare studenti, professionisti e organizzazioni ad affermarsi in una società globale."
  },
  pillars: {
    title: "Costruito su quattro principi",
    items: [
      { title: "Insegnamento individuale", body: "Ogni percorso didattico è strutturato in base al livello, agli obiettivi e ai ritmi dello studente." },
      { title: "Docenti certificati", body: "Tutti i nostri docenti possiedono le qualifiche che attestano la loro competenza d'insegnamento." },
      { title: "Approccio moderno", body: "Uniamo metodi interattivi e strumenti moderni per rendere l'apprendimento efficace e duraturo." },
      { title: "Online e in presenza", body: "Studia nella nostra sede di Casagiove o ovunque nel mondo, negli orari più comodi per te." }
    ]
  },
  intro: {
    eyebrow: "ESF Language Services",
    title: "Corsi di lingue straniere, progettati con cura.",
    body: "Corsi di inglese, italiano, spagnolo, francese e altre lingue straniere per bambini, ragazzi, adulti, professionisti e aziende — in aula o online, per ogni livello da A1 a C2."
  },
  services: {
    eyebrow: "Cosa facciamo",
    title: "Un unico centro, venti servizi specializzati",
    lede: "Dalle lezioni private e certificazioni riconosciute a livello internazionale all'assistenza per traduzioni, editing, studi all'estero e permessi di soggiorno — ogni servizio è svolto con lo stesso rigore e la stessa dedizione.",
    items: [
      { title: "Corsi di lingua", body: "Inglese, italiano, spagnolo, francese e altre lingue — per ogni livello e ogni studente." },
      { title: "Preparazione alle certificazioni", body: "Centro di preparazione accreditato Cambridge; accreditato UNIDA CECOL per l'italiano da A2 a C2." },
      { title: "Assistenza visti studenteschi", body: "Dall'ammissione all'arrivo — supporto completo durante tutto l'iter di richiesta del visto per motivi di studio." },
      { title: "Ammissioni universitarie", body: "Consulenza personalizzata per scegliere l'università più adatta e preparare una domanda di ammissione vincente." },
      { title: "Supporto per permessi di soggiorno", body: "Assistenza pratica per le richieste di rilascio e rinnovo del permesso di soggiorno." },
      { title: "Consulenza per studi all'estero", body: "Scegli il Paese, il programma e l'istituto scolastico ideale — con un supporto esperto in ogni fase." },
      { title: "Traduzioni", body: "Servizi di traduzione professionale, giurata e certificata in diverse lingue." },
      { title: "Editing e correzione bozze", body: "Revisione accademica, commerciale e professionale per valorizzare ogni vostro documento." },
      { title: "Formazione linguistica aziendale", body: "Corsi di lingua su misura per team, dirigenti e organizzazioni." }
    ]
  },
  courses: {
    eyebrow: "Corsi di lingue straniere",
    title: "Quattro lingue principali. Ogni livello. Il tuo ritmo.",
    lede: "Corsi pensati per adulti che desiderano crescere a livello personale o professionale, ragazzi che necessitano di supporto scolastico, bambini con una precoce curiosità linguistica e aziende che formano il proprio personale.",
    detailsLabel: "Vedi dettagli",
    hideLabel: "Nascondi",
    priceLabel: "Da",
    durationLabel: "Durata",
    formatLabel: "Formato",
    levelsLabel: "Livelli",
    includesLabel: "Cosa è incluso",
    syllabusLabel: "Programma",
    certificationsLabel: "Certificazioni",
    languages: [
      {
        name: "Inglese",
        tagline: "ESF Language Service",
        body: "Dalla conversazione quotidiana in totale sicurezza alla preparazione per gli esami Cambridge, IELTS e TOEFL. L'inglese a ogni livello, insegnato da docenti certificati madrelingua e bilingue.",
        priceFrom: "Da €50 / mese",
        duration: "Percorsi di 3 · 6 · 12 mesi",
        format: "In sede · Online · Ibrido",
        levels: "Da A1 a C2",
        highlights: [
          "Lezioni in piccoli gruppi (max 6) o individuali (1-a-1)",
          "Incontri di conversazione settimanali con docente madrelingua",
          "Libro di testo digitale e libreria audio",
          "Test di posizionamento gratuito e monitoraggio dei progressi ogni 6 settimane"
        ],
        syllabus: [
          "Grammatica contestualizzata, orientata alla pratica anziché alla memorizzazione",
          "Laboratori di ascolto e pronuncia",
          "Scrittura professionale: email, report, presentazioni",
          "Scrittura accademica e tecniche di redazione per IELTS / TOEFL",
          "Simulazioni di colloqui e tecniche per parlare in pubblico"
        ],
        certifications: ["Cambridge A2 Key to C2 Proficiency", "Gatehouse Awards", "IELTS Academic & General", "TOEFL iBT"]
      },
      {
        name: "Spagnolo",
        tagline: "ESF Language Service",
        body: "Spagnolo moderno e comunicativo con un perfetto equilibrio tra varianti iberiche e latino-americane, pensato per viaggi, opportunità di carriera, studio e certificazioni.",
        priceFrom: "Da €60 / mese",
        duration: "Percorsi di 3 · 6 · 12 mesi",
        format: "In sede · Online · Ibrido",
        levels: "Da A1 a C2",
        highlights: [
          "Metodologia incentrata sulla conversazione",
          "Docenti madrelingua provenienti dalla Spagna e dall'America Latina",
          "Preparazione agli esami di certificazione DELE e SIELE",
          "Laboratori culturali: musica, cinema, gastronomia"
        ],
        syllabus: [
          "Vocabolario pratico per la vita quotidiana e i viaggi",
          "Apprendimento della grammatica tramite conversazioni reali",
          "Spagnolo professionale per il business e la negoziazione",
          "Lettura e scrittura accademica",
          "Strategie d'esame DELE / SIELE e simulazioni di prova"
        ],
        certifications: ["Instituto Cervantes DELE A1 to C2", "SIELE"]
      },
      {
        name: "Francese",
        tagline: "ESF Language Service",
        body: "Francese generale e professionale con preparazione strutturata agli esami DELF e DALF, dal tuo primo bonjour fino alla piena fluidità in ambito accademico e lavorativo.",
        priceFrom: "Da €60 / mese",
        duration: "Percorsi di 3 · 6 · 12 mesi",
        format: "In sede · Online · Ibrido",
        levels: "Da A1 a C2",
        highlights: [
          "Docenti francofoni certificati",
          "Laboratorio di fonetica per una pronuncia autentica",
          "Preparazione e simulazioni d'esame DELF / DALF",
          "Francese specialistico per l'ospitalità, la moda e la diplomazia"
        ],
        syllabus: [
          "Francese pratico per il viaggio e la vita quotidiana",
          "Grammatica, coniugazione verbale e sintassi",
          "Francese commerciale: corrispondenza e riunioni",
          "Francese accademico per università in Francia e Belgio",
          "Pratica d'esame DELF / DALF con feedback mirato"
        ],
        certifications: ["DELF A1 to B2", "DELF C1 and C2", "TCF"]
      },
      {
        name: "Italiano",
        tagline: "ESF Language Service",
        body: "Impara l'italiano attraverso un programma riconosciuto a livello internazionale e accreditato da UNIDA — Università per Stranieri \"Dante Alighieri\" di Reggio Calabria, l'ente ufficiale di rilascio della certificazione di lingua italiana CECOL. I nostri corsi uniscono una formazione linguistica pratica, l'immersione culturale e la preparazione esperta per certificazioni riconosciute a livello internazionale da A2 a C2.",
        priceFrom: "Da €60 / mese",
        duration: "10 settimane · 20 settimane · Intensivo",
        format: "In sede · Online · Intensivo",
        levels: "Da A2 a C2",
        highlights: [
          "Preparazione e sessioni d'esame ufficiali UNIDA CECOL",
          "Incontri sulla cultura italiana (cinema, cucina, storia e tradizioni)",
          "Orientamento per l'ammissione alle università in Italia",
          "Assistenza per la richiesta del Codice Fiscale",
          "Assistenza per le domande di Permesso di Soggiorno",
          "Insegnanti di grande esperienza",
          "Supporto all'apprendimento personalizzato"
        ],
        syllabus: [
          "Italiano pratico per vivere e lavorare in Italia",
          "Grammatica, verbi e sintassi con esercitazioni guidate",
          "Lettura di opere della letteratura italiana e di attualità",
          "Italiano accademico per università e ricerca",
          "Simulazioni d'esame CECOL da A2 a C2"
        ],
        certifications: ["UNIDA CECOL A2 · B1 · B2 · C1 · C2", "CELI A2 · B1 · B2 · C1 · C2"]
      }
    ],
    levelsTitle: "Allineati al Quadro Comune Europeo di Riferimento",
    levels: ["Base · A1", "Elementare · A2", "Intermedio · B1", "Intermedio superiore · B2", "Avanzato · C1", "Padronanza · C2"],
    distanceTitle: "Lezioni online",
    distanceBody: "Disponibilità e possibilità di formazione in qualsiasi momento per te — le nostre lezioni online si adattano ai tuoi orari, senza scendere a compromessi sulla qualità."
  },
  about: {
    eyebrow: "Chi siamo",
    title: "Chi siamo",
    body: [
      "ESF Language Services è un fornitore affidabile nei settori dell'istruzione linguistica, del supporto agli studenti internazionali e dei servizi di consulenza didattica. Aiutiamo studenti, professionisti, aziende e istituzioni scolastiche a raggiungere i loro obiettivi accademici e di carriera attraverso una guida esperta, soluzioni personalizzate e servizi linguistici di alta qualità.",
      "Le nostre competenze comprendono corsi di lingua, preparazione alle certificazioni linguistiche riconosciute a livello internazionale, consulenza per studi all'estero, ammissioni universitarie, assistenza per visti studenteschi e permessi di soggiorno, servizi di traduzione e interpretariato, supporto accademico, sviluppo professionale e consulenza interculturale."
    ],
    mission: {
      title: "La nostra missione",
      body: "Offrire a singoli individui e organizzazioni gli strumenti idonei tramite un'istruzione di alta qualità, formazione linguistica e consulenza professionale — rendendo accessibili l'istruzione internazionale, la comunicazione e le opportunità di carriera grazie a una guida affidabile e a un supporto personalizzato."
    },
    vision: {
      title: "La nostra visione",
      body: "Diventare un fornitore leader a livello internazionale di servizi linguistici ed educativi, riconosciuto per l'eccellenza, l'innovazione e l'impegno costante nell'aiutare le persone ad affermarsi in una società sempre più globale."
    },
    why: {
      title: "Perché sceglierci",
      body: "Uniamo competenze didattiche a un supporto personalizzato per garantire a ciascun cliente soluzioni pratiche e su misura per le proprie esigenze.",
      bullets: [
        "Servizi educativi e linguistici completi riuniti sotto un unico tetto.",
        "Guida personalizzata da parte di professionisti qualificati ed esperti.",
        "Formazione linguistica accreditata e preparazione alle certificazioni.",
        "Supporto esperto per soggiorni di studio all'estero, ammissioni universitarie, visti e permessi di soggiorno.",
        "Traduzione professionale, interpretariato e supporto accademico.",
        "Flessibilità con opzioni di apprendimento sia online che in presenza.",
        "Un ambiente accogliente e multiculturale, attento al successo di ogni studente e cliente."
      ]
    },
    values: {
      title: "I nostri valori",
      body: "Eccellenza, integrità, professionalità, inclusività, innovazione e apprendimento continuo. Crediamo che l'istruzione e la conoscenza delle lingue siano strumenti potenti per la crescita personale, la comprensione tra culture e l'apertura a nuove opportunità globali."
    },
    stats: [
      { value: "9+", label: "Anni di attività" },
      { value: "1,200+", label: "Studenti supportati" },
      { value: "20+", label: "Servizi specializzati" },
      { value: "4+", label: "Lingue principali" }
    ],
    goalsTitle: "I nostri obiettivi",
    goals: "L'obiettivo principale del Centro è la soddisfazione di ogni studente e la costruzione — fin dalla prima lezione — di un rapporto che rispetti le sue aspettative e porti a risultati misurabili."
  },
  detailed: {
    eyebrow: "I nostri servizi in dettaglio",
    title: "Un unico centro per ogni fase del tuo percorso",
    lede: "Esplora l'intera gamma delle prestazioni fornite da ESF Language Services — dall'apprendimento linguistico e certificazioni al supporto per visti, ammissioni universitarie, traduzioni e integrazione.",
    services: [
      {
        title: "Corsi di lingua",
        intro: "Corsi di lingua di alta qualità per studenti di tutte le età e livelli di competenza — per studio, lavoro, viaggi o crescita personale. I nostri docenti qualificati offrono lezioni pratiche, coinvolgenti e personalizzate per aiutarti a raggiungere i tuoi obiettivi.",
        bullets: [
          "Corsi di inglese, italiano, spagnolo, francese e altre lingue straniere.",
          "Livelli Base, Intermedio, Avanzato e Padronanza.",
          "Programmi di lingua generale, accademica e commerciale.",
          "Lezioni individuali e in piccoli gruppi.",
          "Opzioni di studio in presenza e online.",
          "Orari flessibili nei giorni feriali, di sera e nei fine settimana.",
          "Programmi di lingua italiana allineati all'accreditamento UNIDA CECOL (da A2 a C2).",
          "Preparazione agli esami Cambridge English, IELTS e TOEFL."
        ],
        outro: "Aiutiamo gli studenti a sviluppare la sicurezza e le abilità comunicative necessarie per avere successo in ambito accademico, professionale e nella vita di tutti i giorni."
      },
      {
        title: "Centro di preparazione alle certificazioni linguistiche",
        intro: "Corsi di preparazione specializzati per esami di certificazione linguistica riconosciuti a livello internazionale. Siamo un centro accreditato di preparazione ed esame Cambridge, e accreditato UNIDA CECOL per la certificazione di italiano da A2 a C2.",
        bullets: [
          "Preparazione per le certificazioni Cambridge English, IELTS e TOEFL.",
          "Preparazione alle certificazioni di italiano da A2 a C2 (UNIDA CECOL).",
          "Valutazioni diagnostiche per determinare il livello di partenza.",
          "Formazione completa su lettura, scrittura, ascolto e conversazione.",
          "Tecniche d'esame, gestione del tempo e simulazioni di prove pratiche.",
          "Feedback individuale e monitoraggio costante dei progressi.",
          "Corsi di preparazione in piccoli gruppi o individuali.",
          "Corsi di preparazione sia online che in presenza."
        ]
      },
      {
        title: "Servizi di certificazione linguistica",
        intro: "Guidiamo studenti, professionisti e organizzazioni nell'intero processo di certificazione — dalla scelta dell'esame più idoneo alla registrazione e alla preparazione finale.",
        bullets: [
          "Orientamento nella scelta della certificazione linguistica più adatta.",
          "Assistenza con l'iscrizione e la presentazione della domanda d'esame.",
          "Informazioni su date, tariffe e centri d'esame.",
          "Coordinamento con i centri d'esame autorizzati.",
          "Consulenza sulla validità e sul riconoscimento da parte di università, datori di lavoro ed enti pubblici.",
          "Supporto per gli esami Cambridge English (da A2 Key a C2 Proficiency, Business B1/B2/C1), IELTS, TOEFL e italiano UNIDA CECOL."
        ]
      },
      {
        title: "Assistenza visti studenteschi",
        intro: "Un supporto completo per gli studenti internazionali durante l'intero processo di richiesta del visto studentesco — dalla domanda iniziale fino all'arrivo nel Paese di destinazione.",
        bullets: [
          "Orientamento nella scelta della scuola, del college, dell'università o dell'istituto linguistico più adatto.",
          "Supporto nella presentazione delle domande per ottenere la lettera di ammissione richiesta.",
          "Preparazione e organizzazione di tutta la documentazione necessaria per il visto.",
          "Revisione dei moduli di domanda del visto per verificarne l'esattezza e la completezza.",
          "Consulenza sui documenti finanziari, sulla scelta dell'alloggio e sull'assicurazione sanitaria di viaggio.",
          "Guida sui requisiti previsti da ambasciate e consolati.",
          "Informazioni pre-partenza e preparazione al viaggio.",
          "Supporto continuo fino al ricevimento della decisione sulla concessione del visto."
        ]
      },
      {
        title: "Orientamento e supporto alle ammissioni universitarie",
        intro: "Orientamento universitario personalizzato e supporto all'ammissione in ogni fase del processo, per aiutarti a prendere decisioni informate sul tuo futuro accademico.",
        bullets: [
          "Consulenza personalizzata per individuare le università e i corsi di laurea più adatti.",
          "Informazioni dettagliate su requisiti di ammissione, criteri di idoneità e scadenze.",
          "Supporto nella compilazione e nell'invio dei moduli di domanda di ammissione.",
          "Preparazione di trascrizioni accademiche, dichiarazioni personali, lettere di motivazione, CV e referenze.",
          "Revisione accurata della documentazione per soddisfare i requisiti dei singoli istituti.",
          "Comunicazione diretta con le università in merito alle procedure di ammissione.",
          "Guida sulle offerte di accettazione, sulle procedure di immatricolazione e sui passaggi successivi.",
          "Consulenza su borse di studio, tasse universitarie e opportunità di finanziamento."
        ]
      },
      {
        title: "Assistenza per permesso di soggiorno",
        intro: "Guida pratica e supporto per studenti internazionali e cittadini stranieri che presentano domanda di rilascio o di rinnovo del permesso di soggiorno.",
        bullets: [
          "Informazioni sui requisiti e sulle procedure per il permesso di soggiorno.",
          "Preparazione e organizzazione di tutta la documentazione richiesta.",
          "Supporto per la compilazione corretta dei moduli di domanda.",
          "Informazioni su scadenze e procedure per il rinnovo.",
          "Assistenza nella prenotazione degli appuntamenti.",
          "Consulenza su assicurazione sanitaria, idoneità alloggiativa e certificati di iscrizione.",
          "Supporto nel monitoraggio dello stato di avanzamento della pratica.",
          "Informazioni generali su diritti e doveri del cittadino straniero."
        ]
      },
      {
        title: "Consulenza per studi all'estero",
        intro: "Una guida esperta dalla scelta della meta ideale all'avvio con successo dei tuoi studi all'estero — su misura per il tuo percorso accademico, le tue aspirazioni lavorative e il tuo budget.",
        bullets: [
          "Consulenza personalizzata sugli obiettivi accademici e sulle disponibilità di budget.",
          "Orientamento nella scelta del Paese, dell'università, del college o della scuola di lingue.",
          "Informazioni dettagliate sui programmi, sui requisiti di ammissione e sulle scadenze.",
          "Consulenza su tasse d'iscrizione, costo della vita, borse di studio e pianificazione finanziaria.",
          "Supporto con le domande di ammissione, la richiesta del visto e la preparazione pre-partenza.",
          "Informazioni su alloggio, assicurazione sanitaria e dettagli del viaggio.",
          "Supporto continuo prima della partenza e dopo l'arrivo."
        ]
      },
      {
        title: "Assistenza alloggi per studenti",
        intro: "Aiutiamo gli studenti internazionali a trovare alloggi sicuri, confortevoli e convenienti, adatti alle loro esigenze e al loro budget.",
        bullets: [
          "Opzioni tra residenze studentesche, appartamenti condivisi, soggiorni in famiglia e affitti privati.",
          "Alloggi situati in prossimità di università, college e scuole di lingue.",
          "Consulenza su costi d'affitto, contratti, depositi cauzionali e utenze.",
          "Supporto nella comunicazione con proprietari e agenzie immobiliari.",
          "Informazioni su quartieri, trasporti pubblici e servizi di zona.",
          "Orientamento sulla scelta di alloggi temporanei prima della sistemazione definitiva.",
          "Consulenza su diritti e doveri degli inquilini."
        ]
      },
      {
        title: "Accoglienza e integrazione studenti internazionali",
        intro: "Servizi di accoglienza e integrazione progettati per rendere la transizione in un nuovo Paese il più agevole e priva di stress possibile.",
        bullets: [
          "Organizzazione del servizio di pick-up in aeroporto e assistenza all'arrivo, ove disponibile.",
          "Sessioni di orientamento sulla città e sull'istituto scolastico ospitante.",
          "Informazioni utili su trasporti, servizi bancari, assistenza sanitaria e altri servizi essenziali.",
          "Assistenza con le procedure di iscrizione e i vari adempimenti amministrativi.",
          "Orientamento culturale su usi, costumi, tradizioni e vita quotidiana.",
          "Accesso a opportunità di socializzazione, eventi culturali e attività di networking.",
          "Supporto continuo durante la fase di adattamento accademico e sociale."
        ]
      },
      {
        title: "Ripetizioni private e doposcuola",
        intro: "Lezioni private e programmi di doposcuola personalizzati, studiati per aiutare gli studenti a raggiungere i propri obiettivi scolastici e a rafforzare la fiducia in se stessi.",
        bullets: [
          "Sessioni di ripetizioni individuali o in piccoli gruppi.",
          "Supporto rivolto a studenti delle scuole primarie, secondarie e universitari.",
          "Assistenza nello svolgimento dei compiti a casa e nella preparazione delle verifiche.",
          "Insegnamento di metodi di studio efficaci e tecniche di gestione del tempo.",
          "Svolgimento assistito dei compiti e consolidamento delle materie scolastiche.",
          "Laboratori di lettura, scrittura e attività creative.",
          "Opzioni online e in presenza con massima flessibilità di orario."
        ]
      },
      {
        title: "Traduzioni professionali, giurate e certificate",
        intro: "Servizi di traduzione precisi, affidabili e riservati per privati, aziende, istituzioni educative ed enti pubblici.",
        bullets: [
          "Traduzione di documenti personali, accademici, legali, medici, tecnici e commerciali.",
          "Traduzioni giurate (asseverate) legalmente riconosciute da tribunali e autorità pubbliche.",
          "Traduzioni certificate per scopi di immigrazione, richieste di visti, università e utilizzi professionali.",
          "Diplomi, pagelle, certificati di nascita/matrimonio, contratti e atti di stato civile.",
          "Servizi multilingue in inglese, italiano, spagnolo, francese e altre lingue.",
          "Consegna in tempi rapidi con rigoroso controllo qualità e massima riservatezza."
        ]
      },
      {
        title: "Correzione bozze, revisione testi ed editing",
        intro: "Servizi professionali di correzione bozze, revisione ed editing per garantire che i tuoi documenti siano precisi, chiari e rifiniti, preservandone il messaggio originale e lo stile.",
        bullets: [
          "Correzione di grammatica, ortografia, punteggiatura e sintassi.",
          "Miglioramento della struttura della frase, della chiarezza e della fluidità di lettura.",
          "Editing strutturale e di contenuto per tesine, saggi, tesi di laurea e articoli.",
          "Editing aziendale per relazioni, proposte commerciali e presentazioni.",
          "Formattazione e impaginazione secondo le linee guida accademiche o editoriali.",
          "Correzione bozze e revisione testi in modalità multilingue."
        ]
      },
      {
        title: "Supporto tesi e assistenza accademica",
        intro: "Un supporto completo per studenti di corsi di laurea triennale, magistrale e dottorato, dalla scelta del tema di ricerca alla preparazione della discussione orale, nel pieno rispetto dell'integrità accademica.",
        bullets: [
          "Consulenza per l'individuazione e la definizione del tema di ricerca.",
          "Pianificazione, strutturazione e organizzazione della tesi.",
          "Supporto nella stesura di proposte di ricerca e indici preliminari.",
          "Revisione della letteratura e corretta applicazione degli stili di citazione (APA, MLA, Harvard, Chicago).",
          "Correzione bozze, editing e perfezionamento del registro linguistico.",
          "Preparazione per la presentazione della tesi e per la discussione orale."
        ]
      },
      {
        title: "Campi estivi e invernali",
        intro: "Campi coinvolgenti che uniscono l'apprendimento delle lingue straniere, l'istruzione, le esperienze culturali e le attività ricreative in un ambiente divertente e protetto.",
        bullets: [
          "Programmi intensivi di apprendimento della lingua.",
          "Laboratori interattivi e attività didattiche in aula.",
          "Pratica sportiva, giochi e attività ricreative all'aperto.",
          "Laboratori artistici, musicali e progetti creativi.",
          "Gite didattiche ed escursioni culturali guidate.",
          "Attività di team-building e sviluppo della leadership.",
          "Partecipanti internazionali e ambienti sicuri con personale qualificato."
        ]
      },
      {
        title: "Programmi di immersione linguistica",
        intro: "Programmi di immersione studiati per sviluppare la competenza linguistica attraverso comunicazioni reali in contesti quotidiani ed esperienze culturali sul campo.",
        bullets: [
          "Esperienze di immersione linguistica totale o parziale.",
          "Corsi di inglese, italiano, spagnolo, francese e altre lingue straniere.",
          "Pratica di conversazione activa con interlocutori madrelingua o bilingui.",
          "Laboratori culturali e visite guidate sul territorio.",
          "Opzioni disponibili per brevi e lunghi periodi.",
          "Programmi personalizzati per scuole, istituti e gruppi organizzati."
        ]
      },
      {
        title: "Attività educative e culturali per giovani",
        intro: "Programmi che ispirano i giovani a imparare, esplorare e sviluppare preziose competenze per la vita attraverso la creatività, il lavoro di squadra, la leadership e la comprensione interculturale.",
        bullets: [
          "Laboratori educativi, seminari e corsi a tema.",
          "Club linguistici e gruppi di conversazione attiva.",
          "Attività di scambio culturale e visite guidate ai musei.",
          "Laboratori artistici, musicali e di espressione creativa.",
          "Corsi di public speaking, sviluppo della leadership e crescita personale.",
          "Iniziative di impegno sociale e scambi giovanili internazionali."
        ]
      },
      {
        title: "Orientamento professionale, stesura CV e preparazione colloqui",
        intro: "Servizio di orientamento professionale personalizzato per aiutare studenti, laureati e professionisti a individuare i propri punti di forza, redigere documenti di candidatura d'impatto e superare i colloqui di lavoro.",
        bullets: [
          "Incontri individuali di consulenza di carriera e bilancio delle competenze.",
          "Stesura di CV professionali e moderni, conformi agli standard di settore.",
          "Redazione di lettere di presentazione mirate per specifiche posizioni di lavoro.",
          "Adattamento del curriculum vitae per i mercati del lavoro esteri.",
          "Sessioni di simulazione di colloqui di lavoro con feedback dettagliato.",
          "Formazione su comunicazione, linguaggio del corpo e galateo professionale.",
          "Supporto per la ricerca di stage e tirocini presso aziende partner."
        ]
      },
      {
        title: "Richiesta Codice Fiscale e supporto amministrativo",
        intro: "Assistenza nell'ottenimento del codice fiscale italiano e nel completamento delle principali pratiche burocratiche e amministrative.",
        bullets: [
          "Guida chiara sulla procedura di richiesta del Codice Fiscale.",
          "Assistenza con la modulistica, i documenti e la prenotazione degli appuntamenti.",
          "Compilazione assistita di domande, richieste e moduli ufficiali.",
          "Preparazione, verifica di conformità e traduzione dei documenti necessari.",
          "Accompagnamento e supporto per gli appuntamenti presso uffici pubblici ed enti territoriali.",
          "Consulenza amministrativa di carattere generale per studenti e residenti stranieri."
        ]
      },
      {
        title: "Servizi di integrazione e consulenza interculturale",
        intro: "Supporto dedicato ai cittadini stranieri per favorire un'integrazione di successo — unito a percorsi di formazione interculturale per singoli e aziende che operano in contesti multiculturali.",
        bullets: [
          "Orientamento iniziale e supporto all'accoglienza per i nuovi arrivati.",
          "Informazioni su cultura locale, abitudini, stile di vita e regole sociali.",
          "Assistenza per l'accesso ai servizi sanitari, trasporti e apertura di conti correnti bancari.",
          "Coinvolgimento della comunità e iniziative volte all'integrazione sociale.",
          "Formazione sulla sensibilità culturale per singoli professionisti e organizzazioni aziendali.",
          "Consulenza sulla comunicazione e sul galateo relazionale tra culture diverse.",
          "Tecniche di risoluzione dei conflitti in ambienti interculturali."
        ]
      },
      {
        title: "Formazione linguistica aziendale e servizi educativi",
        intro: "Corsi di formazione linguistica aziendale su misura e soluzioni educative personalizzate per scuole, università, imprese ed enti pubblici.",
        bullets: [
          "Corsi di lingua personalizzati per aziende, collaboratori e dipendenti.",
          "Corsi di Business English, italiano, spagnolo, francese e altre lingue.",
          "Formazione mirata sul vocabolario specifico di settore e sulle competenze comunicative.",
          "Preparazione per riunioni, presentazioni in pubblico, trattative e corrispondenza commerciale.",
          "Sviluppo professionale per docenti, educatori e personale aziendale.",
          "Organizzazione di workshop, seminari tematici ed eventi didattici.",
          "Sviluppo di programmi di studio e progetti di internazionalizzazione scolastica.",
          "Erogazione dei corsi in modalità in presenza, online o in formula ibrida."
        ]
      }
    ]
  },
  testimonials: {
    eyebrow: "Dicono di noi",
    title: "Le voci della nostra sede",
    items: [
      { quote: "I docenti più attenti con cui abbia mai lavorato. In sei mesi sono passata da un livello B1 a un B2 fluente — e ora adoro parlare in inglese.", name: "Chiara R.", role: "Marketing Manager" },
      { quote: "ESF mi ha preparato per l'esame IELTS con un percorso strutturato esattamente sui miei punti deboli. Ho superato la prova con un punteggio di 7.5 al primo tentativo.", name: "Marco T.", role: "Studente di Medicina" },
      { quote: "Ci siamo affidati a ESF per l'inglese commerciale del nostro team. I risultati conseguiti — e la cultura positiva nata intorno all'apprendimento — sono stati eccezionali.", name: "Elena D.", role: "Direttore Risorse Umane" }
    ]
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Risposte, prima ancora di chiedere",
    items: [
      { q: "Come faccio a sapere da quale livello iniziare?", a: "Ogni nuovo studente svolge un breve test di posizionamento gratuito, composto da una prova scritta e una breve conversazione, in modo da poter consigliare il livello e il piano di studi più adatti." },
      { q: "È possibile seguire le lezioni interamente online?", a: "Sì. Ogni corso che offriamo si svolge sia in aula che completamente online, garantendo gli stessi insegnanti e lo stesso materiale didattico." },
      { q: "Preparate per il conseguimento di certificazioni ufficiali?", a: "Siamo un centro accreditato di preparazione ed esami Cambridge, e accreditato UNIDA CECOL per l'italiano da A2 a C2. Prepariamo inoltre gli studenti per gli esami IELTS, TOEFL, DELF/DALF e DELE." },
      { q: "Fornite assistenza per visti studenteschi e permessi di soggiorno?", a: "Sì — forniamo un supporto completo durante tutto l'iter di rilascio del visto di studio e per le domande di rilascio e rinnovo del permesso di soggiorno." },
      { q: "Lavorate anche con le aziende?", a: "Assolutamente sì. Progettiamo programmi aziendali su misura per team e dirigenti, in sede o online, in tutte le principali lingue commerciali." },
      { q: "Fornite traduzioni certificate e giurate?", a: "Sì — eseguiamo traduzioni professionali, giurate e certificate legalmente riconosciute da tribunali, università, datori di lavoro ed enti pubblici." }
    ]
  },
  contact: {
    eyebrow: "Contatti",
    title: "Vieni a trovarci o scrivici",
    lede: "Visita la nostra sede a Casagiove, chiamaci, scrivici su WhatsApp o inviaci un'email. Di solito rispondiamo entro un giorno lavorativo.",
    address: "Via Milano, 18 · 81022 Casagiove (CE), Italia",
    phone: "+39 338 922 8520",
    whatsapp: "+39 0823 141 0601",
    email: "info@esflanguageservice.com",
    form: {
      name: "Nome",
      email: "Email",
      subject: "Oggetto",
      message: "Messaggio",
      consent: "Ho letto l'informativa sulla privacy e acconsento al trattamento dei dati personali.",
      submit: "Invia"
    }
  },
  payment: {
    eyebrow: "Iscriviti",
    title: "Scegli il tuo programma",
    lede: "Assicurati un posto completando una semplice iscrizione online. I prezzi partono dalle tariffe indicate di seguito. Ciascun corso è personalizzato e confermeremo il preventivo finale dopo il test di posizionamento.",
    plans: [
      {
        name: "Corso di gruppo",
        price: "Da €50",
        period: "al mese",
        description: "Lezioni in piccoli gruppi con un insegnante certificato, ideali per un progresso costante e stimolante.",
        features: [
          "Piccoli gruppi (massimo 6 studenti)",
          "Pratica di conversazione settimanale",
          "Libro di testo digitale e libreria audio",
          "Test di posizionamento e verifica dei progressi ogni 6 settimane",
          "In sede oppure online"
        ]
      },
      {
        name: "Programma per studenti internazionali",
        price: "Prezzo su richiesta",
        period: "personalizzato",
        description: "Un programma completo pensato per gli studenti internazionali che necessitano di formazione linguistica, supporto accademico e orientamento durante il loro percorso di studi.",
        features: [
          "20 ore settimanali di didattica strutturata",
          "Piano di studi personalizzato e revisione settimanale dei compiti",
          "Preparazione alle certificazioni (Cambridge · Gatehouse · IELTS · TOEFL · CECOL · DELF · DELE)",
          "Incontri di conversazione settimanali con docente madrelingua",
          "Orientamento per visti studenteschi e supporto universitario",
          "Opzioni di studio in sede, online o in modalità ibrida"
        ],
        featured: true
      },
      {
        name: "Lezioni private e aziendali",
        price: "Prezzo su richiesta",
        period: "personalizzato",
        description: "Programmi individuali o aziendali completamente personalizzati per professionisti, dirigenti e gruppi di lavoro.",
        features: [
          "Programma individuale o di team su misura",
          "Erogazione delle lezioni in presenza, online o ibrida",
          "Vocabolario specialistico di settore (legale, medico, finanziario, alberghiero)",
          "Account manager dedicato",
          "Report mensili sui progressi per l'ufficio Risorse Umane",
          "Pianificazione flessibile tra diversi fusi orari"
        ]
      }
    ],
    disclaimer: "I prezzi indicati sono tariffe minime indicative. Successivamente all'iscrizione confermeremo il preventivo finale basato sul tuo livello di partenza, sugli orari e sui tuoi obiettivi. IVA inclusa dove applicabile.",
    faqTitle: "Domande sull'iscrizione",
    faq: [
      { q: "Come funziona l'iscrizione?", a: "Scegli un programma, compila i tuoi dati e la richiesta d'iscrizione verrà inviata direttamente al nostro team tramite WhatsApp o email. Risponderemo entro un giorno lavorativo per fissare il test di posizionamento gratuito e confermare il preventivo." },
      { q: "Posso fare una lezione di prova prima di iscrivermi?", a: "Sì. Ogni nuovo studente ha diritto a una sessione di posizionamento gratuita (test scritto e breve colloquio) in modo da poter consigliare il livello e il piano di studi ideale." },
      { q: "Quali sono le modalità di pagamento?", a: "È possibile pagare direttamente in sede, tramite bonifico bancario o online con carta di credito in totale sicurezza. Sono disponibili soluzioni di fatturazione mensile o trimestrale." },
      { q: "Posso cambiare piano in un secondo momento?", a: "Certamente. Puoi passare a un programma diverso o modificare la frequenza in qualsiasi momento. L'importo verrà adeguato a partire dal ciclo di fatturazione mensile successivo." }
    ]
  },
  footer: {
    tagline: "ESF Language Services — fornitore di fiducia nei settori della formazione linguistica, del supporto agli studenti internazionali e della consulenza didattica.",
    explore: "Naviga",
    languages: "Lingue",
    contact: "Contatti",
    rights: "Tutti i diritti riservati."
  },
  ctaBanner: {
    title: "Sei pronto a iniziare a parlare con sicurezza?",
    body: "Prenota una consulenza gratuita di 20 minuti e progetteremo un piano di studi basato sui tuoi obiettivi.",
    action: "Prenota una consulenza"
  }
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
