export const portfolioData = {
  profile: {
    name: "Syed Rehan",
    shortName: "Syed Rehan",
    handle: "syed_rehan",
    tagline: "Cyber Security · AI & Prompt Engineering · Web Developer · Business Analyst · Product & Project Management",
    roles: [
      "Cyber Security Student",
      "AI & Prompt Engineering",
      "Web Developer",
      "Business Analyst",
      "Product & Project Management",
      "LLM & RAG Tinkerer",
      "Secure Software Builder"
    ],
    photo: "/assets/syed.png",
    resumeUrl: "/assets/syed-rehan-resume.pdf",
    location: "Hyderabad · Bangalore · Chennai (Open to Remote / Relocation)",
    locationPreferences: ["Hyderabad", "Bangalore", "Chennai"],
    email: "syedrehan0428@gmail.com",
    phone: "+91 9347638395",
    linkedin: "https://www.linkedin.com/in/syed-rehan-85b25a377",
    linkedinLabel: "www.linkedin.com/in/syed-rehan-85b25a377",
    university: "Vel Tech R&D Institute of Science and Technology",
    degree: "B.Tech · Cyber Security",
    year: "Third Year (3rd Yr)",
    cgpa: "8.5 / 10",
    graduation: "2028",
    languages: ["English", "Hindi", "Telugu", "Urdu"],
    summary: "A third-year Cyber Security undergraduate building AI-powered systems and secure software. I work at the intersection of large language models, prompt engineering, and secure application design — turning research ideas into shipping products.",
    objective: "Seeking an internship or full-time opportunity in Cyber Security, Artificial Intelligence, Web Development, Business Analysis, or Product/Project Management where I can ship real systems and deliver measurable business value.",
    status: "ONLINE · AVAILABLE FOR INTERNSHIPS",
    statusDetail: "Open to roles in Cyber Security, AI, Web Development, Business Analysis, and Product/Project Management."
  },

  stats: [
    { label: "CGPA", value: "8.5", detail: "Vel Tech University" },
    { label: "YEAR", value: "3rd", detail: "Graduation 2028" },
    { label: "PROJECTS SHIPPED", value: "05+", detail: "AI & Web Apps" },
    { label: "LANGUAGES", value: "04", detail: "Eng · Hin · Tel · Urd" }
  ],

  projects: [
    {
      id: "ai-travel-chatbot",
      index: "01",
      title: "AI Travel Chatbot",
      tagline: "Conversational travel planner",
      category: "AI",
      categoryLabel: "AI & Prompt Engineering",
      featured: true,
      description: "An intelligent travel assistant that plans destinations, generates itineraries, suggests hotels, and answers open-ended travel questions through a natural conversational interface.",
      stack: ["Python", "OpenAI LLM API", "Prompt Engineering", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&q=85",
      tone: "AI",
      color: "#FF3B30",
      year: "2025",
      role: "Solo builder · design → deployment",
      duration: "4 weeks",
      overview: "People planning trips juggle blogs, forums, spreadsheets and half-remembered advice. I wanted a single conversation that could replace that whole tab-hell — feel like texting a well-travelled friend who knows your budget, dates and vibe.",
      problem: [
        "Travel research is fragmented across too many sources with conflicting advice.",
        "Fixed-form itinerary builders can't handle nuanced requests like 'quiet beaches near Kochi under ₹4k/night'.",
        "Casual users rarely know what questions to ask — the tool should surface them."
      ],
      approach: [
        "Designed a layered system prompt separating persona, retrieval rules and refusal policy.",
        "Modelled the itinerary as a stateful JSON object the LLM edits turn-by-turn instead of regenerating from scratch.",
        "Added a 'clarify vs. commit' heuristic: the bot asks a question only when confidence < threshold, otherwise it acts.",
        "Integrated destination/hotel lookups via structured tool calls so the model doesn't hallucinate prices."
      ],
      outcome: [
        "A single conversation covers destination shortlist, day-by-day itinerary and hotel picks.",
        "Reduced back-and-forth turns per completed itinerary by ~40% in informal user tests.",
        "Reusable prompt-engineering template I ported into two other chatbot projects."
      ],
      learnings: "Prompt engineering is a UX discipline, not a hack. The biggest quality lifts came from tightening turn-taking rules — not from bigger models.",
      hasPlayground: "travel"
    },
    {
      id: "ai-farmer-chatbot",
      index: "02",
      title: "AI Farmer Chatbot",
      tagline: "Multilingual assistant for Indian farmers",
      category: "AI",
      categoryLabel: "AI & Agriculture",
      featured: true,
      description: "A multilingual AI assistant that helps farmers with crop selection, irrigation guidance, weather insights, and fertilizer recommendations in plain, accessible language across four languages.",
      stack: ["Python", "LLM", "NLP", "Multilingual Prompts"],
      image: "https://images.unsplash.com/photo-1667264501379-c1537934c7ab?crop=entropy&cs=srgb&fm=jpg&q=85",
      tone: "AGRI-AI",
      color: "#32D74B",
      year: "2025",
      role: "Solo builder · research + product",
      duration: "5 weeks",
      overview: "A large fraction of Indian farmers ask WhatsApp groups the same recurring questions: what to plant, when to irrigate, which fertilizer. I built a multilingual assistant that speaks their language literally — Hindi, Telugu, Urdu, English — and gives plain, actionable answers.",
      problem: [
        "Existing agri-advisory apps assume English literacy and a smartphone-native user.",
        "Region-specific guidance (crop, soil, monsoon window) is rarely surfaced in a conversational form.",
        "Trust matters more than accuracy alone — the bot must explain the 'why' behind advice."
      ],
      approach: [
        "Language auto-detection with fall-through to Hindi as the safe default.",
        "Grounded the LLM with a curated crop/season/region knowledge base loaded as system context.",
        "Wrote answer templates with a '1-line answer + 3-line rationale' shape to build farmer trust.",
        "Aggressively short outputs — mobile-first, low-bandwidth friendly."
      ],
      outcome: [
        "Handles crop selection, irrigation timing, weather implications and fertilizer choice.",
        "Same content works across four languages without duplicating prompts.",
        "Confirmed strong understanding across code-mixed Hinglish inputs."
      ],
      learnings: "Multilingual isn't just translation. It is a completely different tone, formality and structure per language. Templating that per-language paid off.",
      hasPlayground: "farmer"
    },
    {
      id: "credit-risk-platform",
      index: "03",
      title: "Dynamic Credit Risk Monitoring",
      tagline: "Real-time borrower creditworthiness engine",
      category: "DATA",
      categoryLabel: "Machine Learning & FinTech",
      featured: true,
      description: "An AI-driven platform that continuously evaluates borrower behaviour using repayment patterns and transaction signals — with predictive analytics for early default detection.",
      stack: ["Python", "scikit-learn", "Pandas", "FastAPI", "MongoDB"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&q=85",
      tone: "FINTECH",
      color: "#FFD60A",
      year: "2025",
      role: "Backend & ML lead",
      duration: "6 weeks",
      overview: "Traditional credit scoring is a snapshot — computed once at approval and rarely updated. I built a monitoring platform that continuously re-scores borrowers using transaction and repayment signals, and flags early warning signs weeks before a default.",
      problem: [
        "Static credit scores lag reality. By the time they update, the default has already happened.",
        "Analysts drown in tabular dashboards — they need surfaced anomalies, not raw rows.",
        "Feature engineering has to survive noisy real-world repayment data."
      ],
      approach: [
        "Built a feature pipeline extracting rolling repayment ratios, transaction velocity and category drift.",
        "Trained a gradient-boosted classifier plus a simple heuristic ensemble for interpretability.",
        "Exposed a 'why' endpoint returning the top contributing features for every score — makes it usable for humans.",
        "Designed a monitoring loop that recomputes score deltas daily and fires alerts on threshold crossings."
      ],
      outcome: [
        "Early-default warning fires days-to-weeks before missed payments in backtests.",
        "Model explanations gave analysts specific behavioural signals to act on.",
        "Modular pipeline — swap the classifier without touching feature extraction."
      ],
      learnings: "Explainability is not optional in credit. A '80% risk' score with no reason gets ignored; a '80% risk because rolling repayment ratio dropped 3× in 30 days' gets acted upon.",
      hasPlayground: "credit"
    },
    {
      id: "ai-career-advisor",
      index: "04",
      title: "AI Career Advisor",
      tagline: "Personalized career guidance platform",
      category: "FULLSTACK",
      categoryLabel: "Full-Stack AI Platform",
      featured: true,
      description: "A guidance platform that recommends career paths, higher-education options, certifications and learning resources — personalized to each user's interests, budget, and skills.",
      stack: ["React.js", "Python", "LLM", "Prompt Engineering"],
      image: "https://images.unsplash.com/photo-1584462746497-276f4aeb9fca?crop=entropy&cs=srgb&fm=jpg&q=85",
      tone: "ED-TECH",
      color: "#FF3B30",
      year: "2025",
      role: "Full-stack builder",
      duration: "3 weeks",
      overview: "Students in tier-2/tier-3 colleges rarely have access to career mentors. I built an AI advisor that takes a short profile — interests, current skills, constraints — and outputs a personalised path with certifications, learning resources and career trajectories.",
      problem: [
        "Generic career quizzes give shallow, one-size-fits-all outputs.",
        "The gap isn't information — it is prioritising the right next 3 steps.",
        "Users want tangible resources, not vague 'explore your options' rhetoric."
      ],
      approach: [
        "Multi-step conversation gathering interests, current level, budget and time available.",
        "LLM generates a ranked 3-step action plan grounded in a curated resource list.",
        "React frontend visualises the plan as a timeline the user can save or share."
      ],
      outcome: [
        "Personalised recommendations spanning careers, certifications and free/paid learning paths.",
        "Users receive an actionable 3-step plan rather than a bland 'consider a career in X' verdict."
      ],
      learnings: "Structured outputs beat freeform in advisory products. Forcing the model into a 'ranked 3 steps' schema created much sharper answers than open essays.",
      hasPlayground: "career"
    },
    {
      id: "disaster-response",
      index: "05",
      title: "AI Disaster Response System",
      tagline: "Emergency response automation",
      category: "CIVIC",
      categoryLabel: "Emergency & Civic AI",
      featured: true,
      description: "An emergency-response platform that supports disaster reporting, multilingual communication, resource allocation and coordination — reducing response friction during crises.",
      stack: ["AI", "NLP", "GIS Concepts", "Multilingual Comms"],
      image: "https://images.unsplash.com/photo-1772536888848-c0e7f0f6cf39?crop=entropy&cs=srgb&fm=jpg&q=85",
      tone: "CIVIC",
      color: "#FF3B30",
      year: "2025",
      role: "Concept + AI lead",
      duration: "4 weeks",
      overview: "During floods and cyclones in India, coordination collapses — the same request for help gets duplicated across dozens of channels while resources idle elsewhere. I designed a response system that triages disaster reports, translates them, and helps allocate resources at scale.",
      problem: [
        "Reports arrive in mixed languages and unstructured formats (voice, text, forwarded messages).",
        "Duplicate reports drown out unique critical ones.",
        "Coordinators can't manually match need to nearest resource fast enough in emergencies."
      ],
      approach: [
        "NLP layer classifies each report into type (medical, shelter, food, rescue) and urgency.",
        "Multilingual normalisation converts all reports into a common structured record.",
        "Geo-clustering deduplicates and groups nearby reports for triage.",
        "AI-assisted match suggests the nearest available resource per cluster."
      ],
      outcome: [
        "End-to-end pipeline: report → classify → dedupe → match → assign.",
        "Handled multilingual inputs including code-mixed Hindi/English.",
        "Concept-validated for scale in high-noise emergency scenarios."
      ],
      learnings: "Crisis products live or die on latency. Every prompt was rewritten to minimise tokens and every classification step was designed to complete in under 2 seconds.",
      hasPlayground: null
    }
  ],

  skillCategories: [
    {
      code: "01",
      category: "Cyber Security",
      icon: "ShieldAlert",
      description: "Defensive & offensive security foundations, secure software life-cycles and threat mitigation.",
      items: [
        { name: "Network Security", level: "Advanced", tag: "Defensive" },
        { name: "Web Security Fundamentals", level: "Advanced", tag: "OWASP Top 10" },
        { name: "Vulnerability Assessment", level: "Proficient", tag: "Auditing" },
        { name: "Auth & Authorization", level: "Advanced", tag: "JWT / OAuth / RBAC" },
        { name: "Secure Coding Practices", level: "Advanced", tag: "Sanitization & Defense" }
      ]
    },
    {
      code: "02",
      category: "Artificial Intelligence",
      icon: "Cpu",
      description: "Generative AI systems, prompt engineering architecture, and RAG pipelines.",
      items: [
        { name: "Prompt Engineering", level: "Expert", tag: "Turn-taking & Templates" },
        { name: "Large Language Models", level: "Advanced", tag: "OpenAI / Open-Weight" },
        { name: "Retrieval-Augmented Generation", level: "Proficient", tag: "Vector Grounding" },
        { name: "Natural Language Processing", level: "Advanced", tag: "Classification & NLU" },
        { name: "AI Chatbot Development", level: "Expert", tag: "Stateful Assistants" }
      ]
    },
    {
      code: "03",
      category: "Programming Languages",
      icon: "Code2",
      description: "Core programming languages across web applications, OOP, and modern system architectures.",
      items: [
        { name: "JavaScript (ES6+)", level: "Expert", tag: "Modern Full-Stack" },
        { name: "TypeScript", level: "Advanced", tag: "Type-Safe Architecture" },
        { name: "Java", level: "Proficient", tag: "OOP & Enterprise" },
        { name: "HTML5", level: "Expert", tag: "Semantic Markup" },
        { name: "CSS3 / Tailwind", level: "Expert", tag: "Modern Styling" }
      ]
    },
    {
      code: "04",
      category: "Web Development",
      icon: "Layers",
      description: "Modern full-stack JavaScript architectures, component design, and API services.",
      items: [
        { name: "React.js", level: "Advanced", tag: "SPAs & Hooks" },
        { name: "Node.js", level: "Advanced", tag: "Runtime" },
        { name: "Express.js", level: "Advanced", tag: "REST APIs" }
      ]
    },
    {
      code: "05",
      category: "Business Analysis & Product Management",
      icon: "Briefcase",
      description: "Requirements elicitation, agile product delivery, stakeholder alignment, and feature roadmap planning.",
      items: [
        { name: "Requirements Engineering", level: "Expert", tag: "BRD / PRD" },
        { name: "User Stories & Backlogs", level: "Advanced", tag: "Agile / Scrum" },
        { name: "Stakeholder Management", level: "Advanced", tag: "Cross-Functional" },
        { name: "Process & Flow Mapping", level: "Advanced", tag: "BPMN / Diagrams" },
        { name: "Product Roadmap Strategy", level: "Proficient", tag: "Prioritization" }
      ]
    },
    {
      code: "06",
      category: "Databases & Dev Platforms",
      icon: "Database",
      description: "Data modeling, relational & NoSQL persistence, cloud BaaS, and modern developer workflows.",
      items: [
        { name: "MySQL & MongoDB", level: "Advanced", tag: "SQL & NoSQL" },
        { name: "Firebase", level: "Proficient", tag: "Auth & Realtime" },
        { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
        { name: "VS Code & Terminal", level: "Advanced", tag: "Dev Environment" },
        { name: "Figma & Wireframing", level: "Proficient", tag: "UI / Prototypes" }
      ]
    }
  ],

  competencies: [
    "Cyber Security",
    "Artificial Intelligence",
    "Prompt Engineering",
    "Web Development",
    "Business Analysis",
    "Product & Project Management",
    "Secure Software Design",
    "Problem Solving",
    "Stakeholder Communication",
    "Analytical Thinking"
  ],

  candidateValue: {
    goal: {
      opportunity: "I’m looking for opportunities where I can combine technology, business understanding, and problem-solving to contribute to meaningful projects and deliver measurable impact.",
      vision: "My goal is to grow as a technology professional who understands not only how to build solutions, but also why they matter to the business, users, and stakeholders.",
      quote: "I don’t want to simply be a candidate who knows technologies — I want to be the candidate who understands the problem, builds the solution, and creates business value."
    },
    whatIBring: [
      {
        num: "01",
        title: "AI + Cybersecurity Mindset",
        tag: "Strategic",
        description: "combining intelligent automation, risk management, and security-focused problem solving to address real-world business challenges."
      },
      {
        num: "02",
        title: "Business-Driven Problem Solving",
        tag: "Impact",
        description: "identifying business needs, analyzing problems, and translating them into practical technology solutions that create measurable value."
      },
      {
        num: "03",
        title: "Web & AI Development",
        tag: "Web Dev",
        description: "building scalable solutions across frontend, backend, databases, APIs, AI/ML integrations, and cloud-ready technologies."
      },
      {
        num: "04",
        title: "Data-Driven Decision Making",
        tag: "Analytics",
        description: "using data, analytics, and AI to identify patterns, improve processes, support informed decisions, and reduce operational risks."
      },
      {
        num: "05",
        title: "Process Improvement & Automation",
        tag: "Efficiency",
        description: "exploring opportunities to automate repetitive workflows, improve efficiency, reduce manual effort, and enhance user experience."
      },
      {
        num: "06",
        title: "Risk & Security Awareness",
        tag: "Security",
        description: "applying cybersecurity principles to identify threats, strengthen systems, protect data, and support business continuity."
      },
      {
        num: "07",
        title: "Product & Solution Thinking",
        tag: "Product",
        description: "understanding user requirements, defining practical solutions, prioritizing features, and focusing on usability, scalability, and business impact."
      },
      {
        num: "08",
        title: "Hackathon & Innovation Experience",
        tag: "Innovation",
        description: "developing and presenting technology solutions under time constraints while working with teams to turn ideas into functional prototypes."
      },
      {
        num: "09",
        title: "Stakeholder & Communication Skills",
        tag: "Collaboration",
        description: "capable of communicating technical concepts clearly, collaborating with teams, understanding requirements, and presenting solutions effectively."
      },
      {
        num: "10",
        title: "Continuous Learner",
        tag: "Growth",
        description: "continuously developing expertise across AI/ML, cybersecurity, software engineering, business analysis, and emerging technologies."
      }
    ]
  },

  credentials: [
    {
      id: "cert-nptel-hci",
      name: "Elite — Human Computer Interaction (HCI)",
      category: "ai",
      issuer: "NPTEL · IIT Madras · IIIT Delhi · Swayam",
      year: "2026",
      date: "Jan-Apr 2026 (12 Weeks)",
      tag: "Elite Gold · 90% Consolidated Score",
      verified: true,
      image: "/assets/certificates/certificate_3.png",
      pdfUrl: "/assets/certificates/certificate_3.pdf",
      description: "Prestigious NPTEL Elite certification funded by the Ministry of Education (MoE), Govt. of India. Achieved 90% (Assignments: 25/25, Proctored Exam: 64.5/75) among 23,139 candidates. Roll No: NPTEL26CS70S750304938.",
      signatory: "Prof. Andrew Thangaraj (IIT Madras) & Prof. Sumit J. Darak (Dean, IIIT Delhi)"
    },
    {
      id: "cert-oracle-agentic-ai",
      name: "Agentic AI Certified Foundations Associate",
      category: "ai",
      issuer: "Oracle",
      year: "2026",
      date: "September 25, 2026",
      tag: "Oracle Certified · Agentic Systems",
      verified: true,
      image: "/assets/certificates/oracle_certificate.png",
      pdfUrl: "/assets/certificates/oracle_certificate.pdf",
      description: "Certified by Oracle in Agentic AI Foundations, covering autonomous agents, multi-agent reasoning loops, and enterprise AI orchestration (Cert ID: 103549193AAI26OFA).",
      signatory: "Oracle Certification Program"
    },
    {
      id: "cert-ibm-ai",
      name: "Getting Started with Artificial Intelligence",
      category: "ai",
      issuer: "IBM SkillsBuild",
      year: "2026",
      date: "September 10, 2026",
      tag: "IBM Certified · Credly Verified",
      verified: true,
      image: "/assets/certificates/ibm_ai_certificate.png",
      pdfUrl: "/assets/certificates/ibm_ai_certificate.pdf",
      description: "Credentialed by IBM in core Artificial Intelligence foundations, generative AI principles, ethics, and machine learning models with Credly digital badge verification.",
      signatory: "IBM SkillsBuild Certification Authority"
    },
    {
      id: "cert-reliance-cybersecurity",
      name: "Cyber Security Associate Certification Programme",
      category: "security",
      issuer: "Reliance Foundation Skilling Academy",
      year: "2026",
      date: "September 23, 2026",
      tag: "Reliance Foundation Certified · Cert ID: RFSA000625636",
      verified: true,
      image: "/assets/certificates/cyber_security_associate.png",
      pdfUrl: "/assets/certificates/cyber_security_associate.pdf",
      description: "Official Certificate of Completion for the Cyber Security Associate Certification Programme by Reliance Foundation Skilling Academy (Cert ID: RFSA000625636). Completed on September 23, 2026.",
      signatory: "Reliance Foundation Skilling Academy"
    },
    {
      id: "cert-nasscom-endpoint",
      name: "Analyst Endpoint Security - Cybersecurity",
      category: "security",
      issuer: "NASSCOM · Skill India Digital Hub · NSDC",
      year: "2026",
      date: "August 28, 2026",
      tag: "National Skilling · NASSCOM Certified",
      verified: true,
      image: "/assets/certificates/cybersecurity_certificate.png",
      pdfUrl: "/assets/certificates/cybersecurity_certificate.pdf",
      description: "Official skilling credential in Analyst Endpoint Security & Cybersecurity offered by the National Association of Software and Service Companies (NASSCOM) through Skill India Digital Hub.",
      signatory: "Sindhu Gangadharan (Chairperson, NASSCOM) & IT-ITeS SSC"
    },
    {
      id: "cert-tech-mahindra",
      name: "Cybersecurity Skilling Programme",
      category: "security",
      issuer: "Tech Mahindra Foundation · Skill India",
      year: "2026",
      date: "September 19, 2026",
      tag: "Tech Mahindra Foundation Certified",
      verified: true,
      image: "/assets/certificates/cyber_certificate.png",
      pdfUrl: "/assets/certificates/cyber_certificate.pdf",
      description: "10-hour skilling course in cybersecurity foundations, incident response, network monitoring, and enterprise defense mechanisms.",
      signatory: "Chetan Kapoor (CEO, Tech Mahindra Foundation)"
    },
    {
      id: "cert-nasscom-ai-ba",
      name: "AI- Business Analyst",
      category: "ai",
      issuer: "NASSCOM · Skill India Digital Hub · NSDC",
      year: "2026",
      date: "September 20, 2026",
      tag: "NASSCOM Certified · AI & Business Systems",
      verified: true,
      image: "/assets/certificates/ai_bussiness.png",
      pdfUrl: "/assets/certificates/ai_bussiness.pdf",
      description: "Skilling course in AI Business Analysis, predictive workflow integration, and enterprise data requirements through Skill India Digital Hub.",
      signatory: "Sindhu Gangadharan (Chairperson, NASSCOM)"
    },
    {
      id: "cert-hackviser",
      name: "Certified Cybersecurity Foundations (CORE)",
      category: "security",
      issuer: "Hackviser",
      year: "2026",
      date: "2026",
      tag: "Defensive & Offensive Security · Core Verified",
      verified: true,
      image: "/assets/certificates/rehan_hackviser.png",
      pdfUrl: "/assets/certificates/rehan_hackviser.pdf",
      description: "Practical hands-on certification in defensive and offensive cybersecurity fundamentals, vulnerability assessment, and attack vector mitigation (ID: HV-CORE-GTB3Z27S).",
      signatory: "Hackviser Technical Verification Authority"
    },
    {
      id: "cert-cyber-specialist",
      name: "Cyber Security Specialist & Skill Assessment",
      category: "security",
      issuer: "Skill Assessment Authority",
      year: "2026",
      date: "August 17, 2026",
      tag: "Specialist Skill Test Passed",
      verified: true,
      image: "/assets/certificates/rehan_certificate.png",
      pdfUrl: "/assets/certificates/rehan_certificate.pdf",
      description: "Certified Cyber Security Specialist having passed comprehensive technical skill assessments in penetration testing, threat hunting, and secure system architecture (ID: CYBER-2023-2026-43907fe6-649754).",
      signatory: "Cyber Security Certification Board"
    },
    {
      id: "cert-aiga-internship",
      name: "AIGA — AI for Generation & Automation (Internship)",
      category: "ai",
      issuer: "Brainovision Solutions & AICTE",
      year: "2026",
      date: "July 16, 2026",
      tag: "AICTE Recognized · 1-Month Internship",
      verified: true,
      image: "/assets/certificates/cert_aiga_brainovision.png",
      pdfUrl: "/assets/certificates/cert_aiga_brainovision.pdf",
      description: "One-month intensive internship program on AI for Generation & Automation (Intern ID: BOV26D-0661). Developed stateful generative AI workflows, agent prompts, and automations.",
      signatory: "Ganesh Nag Doddi (CEO, Brainovision) & Dr. Buddha Chandrashekar (Chief Coordinating Officer, AICTE)"
    }
  ],

  marqueeKeywords: [
    "CYBER SECURITY",
    "PROMPT ENGINEERING",
    "WEB DEVELOPER",
    "BUSINESS ANALYST",
    "PRODUCT & PROJECT MANAGEMENT",
    "LLM · RAG · NLP",
    "HYDERABAD · BANGALORE · CHENNAI",
    "SECURE CODE ARCHITECTURE",
    "B.TECH · VEL TECH UNIVERSITY",
    "CREDIT RISK ENGINES",
    "MULTILINGUAL AGRI-AI",
    "SYSTEM ONLINE 2026"
  ],

  terminalResponses: {
    help: `Available commands:
  - bio         : Display background, education, and focus
  - projects    : List all 5 shipped projects with descriptions
  - skills      : Show core competencies and technical stack
  - credentials : List verified certifications & timeline
  - contact     : Display direct communication channels
  - clear       : Clear terminal output
  - sudo hire   : Trigger direct hiring sequence & confetti
  - matrix      : Toggle matrix digital rain mode
  - sound       : Toggle audio sound effects`,
    bio: `SYED REHAN // PROFILE
----------------------------------------
Roles       : Cyber Security · AI & Prompt Eng · Web Dev · Business Analyst · Product & PM
Degree      : B.Tech in Cyber Security (3rd Year, Graduating 2028)
Institution : Vel Tech R&D Institute of Science and Technology
CGPA        : 8.5 / 10
Location    : Hyderabad · Bangalore · Chennai (Open to Remote / Relocation)
Languages   : English, Hindi, Telugu, Urdu
Summary     : Building at the intersection of AI, business analysis, product thinking, and secure software.`,
    projects: `SHIPPED PROJECTS (05):
----------------------------------------
[01] AI Travel Chatbot          - Conversational itinerary & hotel planner (Python, LLM, FastAPI)
[02] AI Farmer Chatbot          - Multilingual assistant across 4 languages (Hindi, Telugu, Urdu, English)
[03] Credit Risk Monitoring     - Real-time ML borrower creditworthiness engine with explainability
[04] AI Career Advisor          - Personalized mentor for tier-2/tier-3 students
[05] AI Disaster Response       - Emergency triage, deduplication, and geo-allocation pipeline
(Tip: Click "Read Case Study" on any card on the page to inspect architecture & results)`,
    skills: `TECHNICAL STACK & COMPETENCIES:
----------------------------------------
Security   : Network Security, Web Security, Vulnerability Assessment, Auth/OAuth, Secure Coding
AI / LLM   : Prompt Engineering, LLMs, RAG, NLP, Stateful Chatbots
Web & Dev  : JavaScript (ES6+), TypeScript, Java, HTML5, CSS3 / Tailwind, React.js, Node.js
Business   : Business Analysis, Product & Project Management, Agile, Requirements Engineering
Tools      : Git, GitHub, VS Code, Figma, Linux CLI`,
    credentials: `CREDENTIALS & CERTIFICATIONS:
----------------------------------------
[2026] NPTEL Elite Gold (90%) - HCI (Top 1% of 23,139 candidates)
[2025] Oracle Cloud Infrastructure Certified Agentic AI Foundations Associate
[2026] Reliance Foundation Cyber Security Associate (Cert ID: RFSA000625636)
[2025] NASSCOM & Skill India AI - Business Analyst
[2025] NASSCOM Analyst Endpoint Security
[2025] IBM SkillsBuild Artificial Intelligence
[2026] Brainovision & AICTE 1-Month Generative AI Internship`,
    contact: `DIRECT COMMUNICATION CHANNELS:
----------------------------------------
Email    : syedrehan0428@gmail.com
Phone    : +91 9347638395
LinkedIn : https://www.linkedin.com/in/syed-rehan-85b25a377
Location : Hyderabad · Bangalore · Chennai (Open to Remote / Relocation)
Status   : Available for Cyber Security, AI, Web, Business Analyst & Product Roles`
  },

  aiFAQ: [
    {
      q: "What projects have you built?",
      a: "I have shipped 5+ real-world AI applications including: 1) AI Travel Chatbot with turn-based stateful JSON; 2) AI Farmer Chatbot supporting 4 Indian languages; 3) Dynamic Credit Risk Monitoring engine with explainable ML predictions; 4) AI Career Advisor; and 5) AI Disaster Response system."
    },
    {
      q: "Tell me about your cybersecurity skills",
      a: "I am a 3rd-year Cyber Security student at Vel Tech (8.5 CGPA). My security focus spans Web Security Fundamentals (OWASP Top 10), Network Security, Secure Coding Practices, Input Sanitization & Threat Mitigation, and RBAC / JWT Authentication."
    },
    {
      q: "What is your experience with Prompt Engineering?",
      a: "I view Prompt Engineering as a UX discipline, not just clever hacks. In my travel and multilingual farmer chatbots, I built layered system prompts, turn-taking rules, clarify-vs-commit heuristics, and output schema enforcements that cut conversational turns by 40%."
    },
    {
      q: "Are you available for internships?",
      a: "Yes! I am actively seeking an internship or entry role in Cyber Security, Artificial Intelligence, Web Development, Business Analysis, or Product & Project Management. My location preferences are Hyderabad, Bangalore, and Chennai, and I am open to remote or hybrid roles."
    }
  ]
};
