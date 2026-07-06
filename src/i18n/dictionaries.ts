export type Lang = "en" | "it";
export const LANGS: Lang[] = ["en", "it"];
export const DEFAULT_LANG: Lang = "en";

export const IT_PLACEHOLDER = "[Traduzione professionale in arrivo]";

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
  nav: { home: "Home", about: "About", courses: "Courses", services: "Services", faq: "FAQ", contact: "Contact", payment: "Enrol" },
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
        tagline: "ESF · General · Business · Academic",
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
        tagline: "ESF · Español para viajar, trabajar, vivir",
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
        tagline: "ESF · Français général et professionnel",
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
        tagline: "ESF · Accredited by UNIDA — Università per Stranieri \"Dante Alighieri\" di Reggio Calabria",
        body: "Learn Italian through an internationally recognised programme accredited by UNIDA, the official issuer of the CECOL Italian Language Certification. Our courses combine practical language training, cultural immersion, and expert preparation for internationally recognised certification from A2 to C2.",
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
        certifications: ["UNIDA CECOL A2 · B1 · B2 · C1 · C2"],
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
        name: "Yearly Programme",
        price: "From €60",
        period: "per month",
        description: "Our most chosen programme. 20 hours per week of structured tuition with dedicated certification support.",
        features: [
          "20 hours per week",
          "Personalised study plan and weekly homework review",
          "Certification prep (Cambridge · Gatehouse · IELTS · TOEFL · CECOL · DELF · DELE)",
          "Weekly conversation clinic with a native teacher",
          "Priority scheduling and rescheduling",
          "In studio, online or hybrid",
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

// Italian skeleton — real translations to be provided by the client.
const p = IT_PLACEHOLDER;
export const it: Dict = {
  nav: { home: "Home", about: "Chi siamo", courses: "Corsi", services: "Servizi", faq: "FAQ", contact: "Contatti", payment: "Iscriviti" },
  cta: { book: p, explore: p, contact: p, enroll: p, discover: p, learnMore: p },
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
  intro: { eyebrow: "ESF Language Services", title: p, body: p },
  services: {
    eyebrow: p, title: p, lede: p,
    items: en.services.items.map((s) => ({ title: s.title, body: p })),
  },
  courses: {
    eyebrow: p, title: p, lede: p,
    detailsLabel: "Vedi dettagli", hideLabel: "Nascondi",
    priceLabel: "Da", durationLabel: "Durata", formatLabel: "Formato",
    levelsLabel: "Livelli", includesLabel: "Cosa è incluso",
    syllabusLabel: "Programma", certificationsLabel: "Certificazioni",
    languages: en.courses.languages.map((c) => ({
      name: c.name === "English" ? "Inglese" : c.name === "Italian" ? "Italiano" : c.name === "Spanish" ? "Spagnolo" : "Francese",
      tagline: p, body: p,
      priceFrom: c.priceFrom, duration: c.duration, format: c.format, levels: c.levels,
      highlights: c.highlights.map(() => p),
      syllabus: c.syllabus.map(() => p),
      certifications: c.certifications,
    })),
    levelsTitle: p,
    levels: ["Base · A1", "Elementare · A2", "Intermedio · B1", "Intermedio superiore · B2", "Avanzato · C1", "Padronanza · C2"],
    distanceTitle: p, distanceBody: p,
  },
  about: {
    eyebrow: "Chi siamo", title: p, body: [p, p],
    mission: { title: "La nostra missione", body: p },
    vision: { title: "La nostra visione", body: p },
    why: { title: "Perché sceglierci", body: p, bullets: en.about.why.bullets.map(() => p) },
    values: { title: "I nostri valori", body: p },
    stats: en.about.stats.map((s) => ({ value: s.value, label: p })),
    goalsTitle: "I nostri obiettivi", goals: p,
  },
  detailed: {
    eyebrow: p, title: p, lede: p,
    services: en.detailed.services.map((s) => ({
      title: s.title, intro: p, bullets: s.bullets.map(() => p), outro: p,
    })),
  },
  testimonials: {
    eyebrow: p, title: p,
    items: en.testimonials.items.map((t) => ({ quote: p, name: t.name, role: t.role })),
  },
  faq: {
    eyebrow: p, title: p,
    items: en.faq.items.map(() => ({ q: p, a: p })),
  },
  contact: {
    eyebrow: "Contatti", title: p, lede: p,
    address: "Via Milano, 18 · 81022 Casagiove (CE), Italia",
    phone: "+39 0823 1410601", whatsapp: "+39 0823 1410601", email: "info@esflanguageservice.com",
    form: { name: "Nome", email: "Email", subject: "Oggetto", message: "Messaggio", consent: p, submit: "Invia" },
  },
  payment: {
    eyebrow: "Iscriviti", title: p, lede: p,
    plans: en.payment.plans.map((plan) => ({
      name: plan.name, price: plan.price, period: plan.period,
      description: p,
      features: plan.features.map(() => p),
      featured: plan.featured,
    })),
    disclaimer: p,
    faqTitle: p,
    faq: en.payment.faq.map(() => ({ q: p, a: p })),
  },
  footer: {
    tagline: p,
    explore: "Naviga", languages: "Lingue", contact: "Contatti",
    rights: "Tutti i diritti riservati.",
  },
  ctaBanner: { title: p, body: p, action: p },
};

export const dict = { en, it };
export function getDict(lang: string): Dict {
  return lang === "it" ? it : en;
}
