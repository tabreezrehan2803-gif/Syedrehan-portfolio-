import { portfolioData } from '../data/portfolioData';

// Intelligent offline-first AI conversational engine for Syed Rehan's Portfolio
export function generateAIResponse(userInput, mode = 'portfolio') {
  const query = userInput.trim().toLowerCase();

  // MODE 1: LIVE TRAVEL PLANNER SIMULATOR
  if (mode === 'travel' || query.startsWith('/travel') || query.includes('plan a trip') || query.includes('itinerary') || query.includes('hotel in')) {
    return generateTravelResponse(query);
  }

  // MODE 2: AGRI-AI MULTILINGUAL SIMULATOR
  if (mode === 'agri' || query.startsWith('/farm') || query.includes('crop') || query.includes('fertilizer') || query.includes('irrigation') || query.includes('kisan')) {
    return generateAgriResponse(query);
  }

  // MODE 3: PORTFOLIO & RECRUITER ASSISTANT
  // 0. What I Bring & Strategic Goal
  if (query.includes('bring') || query.includes('goal') || query.includes('what i bring') || query.includes('why should') || query.includes('mindset') || query.includes('value proposition')) {
    return `🎯 **WHAT SYED BRINGS & STRATEGIC GOAL**:

> *“I don’t want to simply be a candidate who knows technologies — I want to be the candidate who understands the problem, builds the solution, and creates business value.”*

**What Syed Brings (10 Core Attributes)**:
1. 🛡️ **AI + Cybersecurity Mindset** — combining intelligent automation, risk management, and security-focused problem solving to address real-world business challenges.
2. 🎯 **Business-Driven Problem Solving** — identifying business needs, analyzing problems, and translating them into practical technology solutions that create measurable value.
3. 💻 **Web & AI Development** — building scalable solutions across frontend, backend, databases, APIs, AI/ML integrations, and cloud-ready technologies.
4. 📊 **Data-Driven Decision Making** — using data, analytics, and AI to identify patterns, improve processes, support informed decisions, and reduce operational risks.
5. ⚙️ **Process Improvement & Automation** — exploring opportunities to automate repetitive workflows, improve efficiency, reduce manual effort, and enhance user experience.
6. 🔒 **Risk & Security Awareness** — applying cybersecurity principles to identify threats, strengthen systems, protect data, and support business continuity.
7. 🧩 **Product & Solution Thinking** — understanding user requirements, defining practical solutions, prioritizing features, and focusing on usability, scalability, and business impact.
8. ⚡ **Hackathon & Innovation Experience** — developing and presenting technology solutions under time constraints while working with teams to turn ideas into functional prototypes.
9. 👥 **Stakeholder & Communication Skills** — capable of communicating technical concepts clearly, collaborating with teams, understanding requirements, and presenting solutions effectively.
10. 📖 **Continuous Learner** — continuously developing expertise across AI/ML, cybersecurity, software engineering, business analysis, and emerging technologies.

**My Goal**:
I’m looking for opportunities where I can combine technology, business understanding, and problem-solving to contribute to meaningful projects and deliver measurable impact. My goal is to grow as a technology professional who understands not only how to build solutions, but also why they matter to the business, users, and stakeholders.`;
  }

  // 0.1 Recruiter Fast-Track Dossier
  if (query.includes('recruiter') || query.includes('why hire') || query.includes('tldr') || query.includes('dossier') || query.includes('summary')) {
    return `⚡ **EXECUTIVE CANDIDATE DOSSIER // RECRUITER TL;DR**:
• **Name**: Syed Mohmmed Tabreez Rehan
• **Current Role**: 3rd-Year B.Tech Cyber Security Student at Vel Tech R&D (Chennai)
• **Academic CGPA**: **8.5 / 10**
• **Top National Benchmark**: **90% Elite Gold** in NPTEL Human-Computer Interaction (IIT Madras & IIIT Delhi) — Top 1% nationally of 23,139 candidates!
• **Enterprise Credentials**:
  - Oracle Certified: Agentic AI Foundations Associate
  - IBM SkillsBuild: Getting Started with Artificial Intelligence
  - Reliance Foundation: 180h Intensive Cybersecurity Skilling
  - AICTE & Brainovision: 1-Month Generative AI & Cloud Engineering
• **Core Specialization**: Dual focus on Enterprise AI (Prompt Engineering & RAG) + Cyber Security (OWASP Top 10 & Delimiter Sandboxing).
• **Shipped Projects**: 5 web and AI production applications.
• **Availability**: Open for Summer 2026 Internships / Full-time roles (Hyderabad · Bangalore · Chennai · Remote / Relocation).
• **Direct Contact**: syedrehan0428@gmail.com | +91 9347638395`;
  }

  // 0.1 Certifications & Credentials
  if (query.includes('certif') || query.includes('credential') || query.includes('nptel') || query.includes('oracle') || query.includes('reliance') || query.includes('ibm') || query.includes('aicte')) {
    return `🏆 **Verified Credentials & Certifications**:
1. 🥇 **NPTEL Elite Gold (90%)**: Human-Computer Interaction (IIT Madras & IIIT Delhi) — Top 1% rank.
2. 🤖 **Oracle Cloud Infrastructure**: Certified Agentic AI Foundations Associate (2025).
3. 🛡️ **Reliance Foundation Cyber Security**: 180-Hour Skilling Course Certificate.
4. 🧠 **IBM SkillsBuild**: Getting Started with Artificial Intelligence.
5. 🌐 **AICTE & Brainovision**: 1-Month Generative AI Internship Certificate.
6. 🔒 **Tech Mahindra & NASSCOM**: Cybersecurity & Endpoint Security Associate.
7. 💻 **Hackviser CORE**: Practical Cybersecurity Certification.

*All certificates include viewable high-res badges & verified PDF attachments in the Credentials section!*`;
  }

  // 1. Projects
  if (query.includes('project') || query.includes('built') || query.includes('portfolio') || query.includes('work') || query.includes('shipped')) {
    if (query.includes('travel')) {
      const p = portfolioData.projects[0];
      return `✈️ **AI Travel Chatbot** [Project #01]:
• **Role**: Solo Builder · Design to Deployment (4 weeks)
• **Tech Stack**: Python, OpenAI LLM API, Prompt Engineering, FastAPI, React
• **Core Innovation**: Replaced tab-hell by modeling itineraries as stateful JSON that the LLM modifies turn-by-turn. Built a "clarify vs. commit" heuristic that cut back-and-forth turns by ~40%!
• **Key Takeaway**: "Prompt engineering is a UX discipline, not a hack."`;
    }

    if (query.includes('farmer') || query.includes('agri')) {
      const p = portfolioData.projects[1];
      return `🌾 **AI Farmer Chatbot** [Project #02]:
• **Role**: Solo Builder · Research + Product (5 weeks)
• **Languages**: English, Hindi (हिन्दी), Telugu (తెలుగు), Urdu (اردو)
• **Core Innovation**: Auto-detects language and returns structured 1-line answers with a 3-line rationale. Optimized for low bandwidth and mobile literacy.`;
    }

    if (query.includes('credit') || query.includes('risk') || query.includes('fintech')) {
      const p = portfolioData.projects[2];
      return `📊 **Dynamic Credit Risk Monitoring Engine** [Project #03]:
• **Role**: Backend & ML Lead (6 weeks)
• **Tech Stack**: Python, scikit-learn, Pandas, FastAPI, MongoDB
• **Core Innovation**: Moves away from static snapshot credit scores. Evaluates rolling repayment ratios and transaction velocity, surfacing explainable risk alerts weeks before a default happens. You can test the interactive slider simulator right on the page!`;
    }

    if (query.includes('career') || query.includes('advisor')) {
      const p = portfolioData.projects[3];
      return `🎓 **AI Career Advisor** [Project #04]:
• **Role**: Web Builder (3 weeks)
• **Target Audience**: Tier-2 & tier-3 college students seeking mentorship.
• **Core Innovation**: Constrains LLM outputs into ranked, actionable 3-step roadmaps with certifications and curated learning paths rather than generic quizzes.`;
    }

    if (query.includes('disaster') || query.includes('emergency')) {
      const p = portfolioData.projects[4];
      return `🚨 **AI Disaster Response System** [Project #05]:
• **Role**: Concept + AI Lead (4 weeks)
• **Core Innovation**: Multi-modal triage pipeline for floods and cyclones in India. Classifies urgent requests (medical, food, rescue), deduplicates reports via geo-clustering, and matches nearest response teams in sub-2s latency.`;
    }

    return `Syed has shipped **5 real-world AI applications**:
1. ✈️ **AI Travel Chatbot**: Stateful conversational itinerary planner.
2. 🌾 **AI Farmer Chatbot**: Multilingual agricultural assistant across 4 languages.
3. 📊 **Dynamic Credit Risk Monitoring**: Predictive ML creditworthiness engine with explainable signals.
4. 🎓 **AI Career Advisor**: Personalized career path roadmap for students.
5. 🚨 **AI Disaster Response System**: Emergency triage and geo-allocation pipeline.

Would you like a deep dive into any specific project or want to test the interactive simulators?`;
  }

  // 2. Cybersecurity & Security background
  if (query.includes('cyber') || query.includes('security') || query.includes('hack') || query.includes('vulnerability') || query.includes('owasp') || query.includes('auth')) {
    return `🛡️ **Cyber Security Specialization**:
• **Education**: 3rd Year B.Tech in Cyber Security at Vel Tech University (8.5 CGPA).
• **Core Competencies**:
  - Web Security Fundamentals & OWASP Top 10 mitigation
  - Defensive Network Security & Vulnerability Auditing
  - Secure Coding & Delimiter Sandboxing against Prompt Injections
  - Authentication (JWT, OAuth 2.0, Role-Based Access Control)
• **Security Mindset**: Security-first engineering applied across full-stack applications, API endpoints, and LLM integrations.`;
  }

  // 3. Prompt Engineering & LLM Philosophy
  if (query.includes('prompt') || query.includes('llm') || query.includes('rag') || query.includes('gpt') || query.includes('model') || query.includes('ai')) {
    return `⚡ **Prompt Engineering & Generative AI Philosophy**:
• Syed treats Prompt Engineering as a **rigorous UX & architecture discipline**, not random trial-and-error hacks.
• **Architectural Pillars**:
  1. *Layered System Prompts*: Separation of persona, knowledge retrieval boundaries, and strict refusal policies.
  2. *Turn-Taking Optimization*: Heuristic thresholds that decide when to commit actions vs. ask clarifying questions.
  3. *Structured Schema Enforcement*: Forcing stateful JSON outputs for zero hallucination in critical workflows.
  4. *RAG & Grounding*: Vector context injection with citations.`;
  }

  // 4. Skills & Tech Stack
  if (query.includes('skill') || query.includes('stack') || query.includes('tech') || query.includes('languages') || query.includes('framework') || query.includes('business analyst') || query.includes('product') || query.includes('management')) {
    return `💻 **Technical & Business Stack Matrix**:
• **Target Roles**: Cyber Security, AI & Prompt Engineering, Web Developer, Business Analyst, Product & Project Management
• **Programming Languages**: JavaScript (ES6+), TypeScript, Java, HTML5, CSS3 / Tailwind
• **Business Analysis & PM**: Requirements Gathering (BRD/PRD), User Stories, Agile/Scrum, Stakeholder Management, Process Mapping, Wireframing
• **AI & LLM**: Prompt Engineering, LLMs, RAG, NLP, Stateful Assistants
• **Cyber Security**: Network Security, Web Security, Vulnerability Auditing, Secure Coding, Auth (JWT/OAuth)
• **Web & Backend**: React.js, Node.js, Express.js
• **Databases**: MySQL, MongoDB, Firebase
• **Tooling**: Git & GitHub, VS Code, Figma, JIRA/Trello, Linux Terminal`;
  }

  // 5. Education & College
  if (query.includes('college') || query.includes('university') || query.includes('degree') || query.includes('vel tech') || query.includes('cgpa') || query.includes('education') || query.includes('study')) {
    return `🎓 **Academic Credentials**:
• **Degree**: B.Tech in Cyber Security (3rd Year)
• **Institution**: Vel Tech R&D Institute of Science and Technology, Chennai, India
• **Current CGPA**: 8.5 / 10
• **Graduation**: 2028
• **Languages**: English, Hindi, Telugu, Urdu (4 languages)`;
  }

  // 6. Internship / Hiring / Availability / Location
  if (query.includes('hire') || query.includes('intern') || query.includes('job') || query.includes('available') || query.includes('offer') || query.includes('opportunity') || query.includes('role') || query.includes('location')) {
    return `🤝 **Status: Available for Internships & Full-Time Roles!**
• **Target Roles**: Cyber Security, AI & Prompt Engineering, Web Developer, Business Analyst, Product & Project Management
• **Location Preferences**: Hyderabad, Bangalore, Chennai (Open to Remote / Relocation)
• **Value Proposition**: Proven experience taking AI and web systems from business requirements to production with security-first architecture.
• **Direct Email**: syedrehan0428@gmail.com
• **Phone**: +91 9347638395
• **LinkedIn**: [www.linkedin.com/in/syed-rehan-85b25a377](https://www.linkedin.com/in/syed-rehan-85b25a377)
(You can also click "Transmit Signal" in the Contact section to send a direct message!)`;
  }

  // 7. Contact Details / Resume
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('linkedin') || query.includes('reach') || query.includes('resume') || query.includes('cv')) {
    return `📬 **Get in Touch with Syed**:
• **Email**: [syedrehan0428@gmail.com](mailto:syedrehan0428@gmail.com)
• **Phone**: [+91 9347638395](tel:+919347638395)
• **LinkedIn**: [www.linkedin.com/in/syed-rehan-85b25a377](https://www.linkedin.com/in/syed-rehan-85b25a377)
• **Resume**: You can download the verified PDF resume from the top nav bar or hero section!`;
  }

  // 8. Greetings & general chat
  if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('who are you') || query.includes('what can you do')) {
    return `👋 **Hey there! I am SYED · AI**, Syed Rehan's virtual portfolio copilot.

I can help you explore:
1. 🚀 **Shipped Projects** (Travel Bot, Farmer Bot, Credit Risk Engine, etc.)
2. 🛡️ **Cyber Security & Defensive Skills**
3. ⚡ **Prompt Engineering & LLM Architecture**
4. 🗺️ **Live Travel Planning** (Ask me to plan a trip!)
5. 🤝 **Hiring & Internship Details**

What would you like to know?`;
  }

  // Fallback synthesis
  return `I understand you're asking about: "${userInput}".
As Syed's AI assistant, I can confirm Syed is a 3rd-year Cyber Security student at Vel Tech (8.5 CGPA) specializing in Prompt Engineering, AI Chatbots, and Secure Software Development.

Try asking:
• "What projects have you built?"
• "Explain your dynamic credit risk engine"
• "Plan a 3-day trip to Goa under 10k" (Activates Travel Bot mode!)
• "How can I contact or hire you?"`;
}

// Live Travel Bot Response Generator
function generateTravelResponse(query) {
  let destination = 'Goa';
  if (query.includes('paris')) destination = 'Paris';
  else if (query.includes('kochi') || query.includes('kerala')) destination = 'Kochi, Kerala';
  else if (query.includes('manali') || query.includes('himachal')) destination = 'Manali, Himachal Pradesh';
  else if (query.includes('chennai')) destination = 'Chennai';
  else if (query.includes('tokyo') || query.includes('japan')) destination = 'Tokyo';
  else if (query.includes('bali')) destination = 'Bali';

  const days = query.includes('2') ? 2 : query.includes('4') ? 4 : 3;

  return `✈️ **TRAVEL PLANNER AI // ITINERARY GENERATED**
📍 **Destination**: ${destination} | ⏳ **Duration**: ${days} Days | 💰 **Budget Tier**: Smart-Budget

**Day 1: Arrival & Local Vibes**
• Morning: Check-in, grab local breakfast & fresh roast coffee.
• Afternoon: Explore historic quarters & heritage streets.
• Evening: Sunset viewpoint followed by dinner at top-rated local café (~₹800/person).

**Day 2: Coastal / Nature Immersion**
• Morning: Scenic exploration (quiet beaches / viewpoint hike).
• Afternoon: Curated cultural stop & local craft markets.
• Evening: Live music venue & coastal cuisine experience.

${days >= 3 ? `**Day 3: Hidden Gems & Departure**
• Morning: Offbeat village walk & hidden culinary spot.
• Afternoon: Souvenir hunting & relaxed café wrap-up.
• Evening: Departure transfer.` : ''}

🏨 **Suggested Stays**: Boutique hostels & verified eco-stays within ₹1,800–₹3,200/night.
💡 *Prompt Engineering Signal*: This response was generated using turn-taking state management developed in Syed's AI Travel Chatbot project!`;
}

// Agri-AI Response Generator
function generateAgriResponse(query) {
  return `🌾 **AGRI-AI ASSISTANT // ADVISORY DISPATCH**
• **Topic**: Crop & Soil Advisory
• **Recommendation**: For current seasonal windows, maintain 2-3 cm shallow standing water for the initial 20–25 days following transplantation.
• **Fertilizer Protocol**: Apply 45–50 kg Urea per acre post the first vegetative irrigation cycle.
• **Scientific Rationale**: Maximizes root anchor strength and suppresses early weed germination.
• **Languages Available**: English, Hindi (हिन्दी), Telugu (తెలుగు), Urdu (اردو).`;
}
