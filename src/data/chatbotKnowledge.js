// ============================================================
// chatbotKnowledge.js — Local knowledge base for SimonGPT
// All data sourced from portfolioData.js (Simon Baler)
// ============================================================

export const botInfo = {
  name: "SimonGPT",
  greeting:
    "Hello! I'm SimonGPT 🤖 — Simon's personal AI assistant. I can tell you about his projects, skills, experience, research work, certifications, and achievements. What would you like to know?",
  fallback:
    "I can help with information about Simon's skills, projects, experience, certifications, achievements, or how to contact him. Try asking about his Traffic Management System, LENS e-commerce platform, or why you should hire him!",
};

export const personal = {
  name: "Simon Baler",
  title: "Software Engineer | AI Engineer | Python Full-Stack Developer",
  location: "India",
  phone: "+91 9392867168",
  email: "simonbaler21@gmail.com",
  summary:
    "Simon is a motivated Computer Science undergraduate with hands-on experience in Full-Stack Development, Artificial Intelligence, Machine Learning, and Generative AI. He builds production-style applications using Python, React, Node.js, MySQL, Machine Learning, and Computer Vision technologies.",
  education: {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Siddhartha Institute of Technology & Sciences",
    cgpa: "8.0",
    graduation: "2027",
  },
  links: {
    github: "https://github.com/simonbaler",
    linkedin: "https://linkedin.com/in/simon-baler-60b105384",
    resume: "https://github.com/simonbaler",
  },
};

export const skills = {
  programming: ["Python (92%)", "JavaScript (88%)"],
  frontend: ["React.js (90%)", "HTML5 (92%)", "CSS3 (88%)", "Tailwind CSS (85%)", "Responsive Design (87%)", "UI/UX Design (80%)"],
  backend: ["Node.js (85%)", "REST APIs (88%)", "MySQL (84%)"],
  aiMl: ["Machine Learning (86%)", "Scikit-Learn (82%)", "OpenCV (80%)", "Computer Vision (84%)", "Prompt Engineering (88%)", "Generative AI (85%)", "LLM Applications (82%)"],
  tools: ["Docker (75%)", "Git (88%)", "GitHub (88%)", "VS Code (92%)", "n8n (78%)", "ChatGPT (90%)", "AI-Assisted Development (90%)", "Prompt Design (87%)"],
};

export const internship = {
  organization: "WebDzen Technologies",
  role: "React Development Intern",
  duration: "October 2025 - December 2025",
  skills: [
    "Production E-Commerce Development",
    "20+ Reusable UI Components",
    "Admin Dashboard & CMS Features",
    "Responsive Layouts",
    "Agile Development & Git Workflows",
    "UI/UX & Performance Optimization",
  ],
  tech: ["React.js", "TypeScript", "Tailwind CSS", "Git", "Agile"],
};

export const projects = [
  {
    id: "lens",
    name: "LENS — Premium E-Commerce Platform",
    flag: "Flagship Project",
    overview:
      "A premium e-commerce platform designed for cameras, lenses, and photography accessories with modern UI/UX and advanced shopping functionality.",
    problem:
      "Photography equipment shoppers need a premium, intuitive platform that handles complex product catalogs, comparisons, and secure checkout seamlessly.",
    solution:
      "Built a production-ready architecture with a premium glassmorphism UI, full catalog management, and advanced shopping features.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
    features: [
      "Product catalog with advanced filtering",
      "Wishlist & shopping cart",
      "Product comparison tool",
      "Secure checkout flow",
      "Admin dashboard & CMS",
      "Dark mode & responsive design",
      "Advanced animations",
    ],
    challenges:
      "Designing a scalable state management architecture with Zustand and delivering a polished, animation-rich UI across all device sizes.",
    impact:
      "A complete, production-ready e-commerce experience demonstrating advanced React, TypeScript, and UI/UX engineering.",
  },
  {
    id: "traffic-management",
    name: "Intelligent Traffic Management System",
    flag: "AI Project",
    overview:
      "An AI-powered traffic management solution that monitors traffic density and dynamically optimizes traffic signal timings.",
    problem:
      "Traditional traffic signals operate on fixed timers, causing congestion and inefficiency during variable traffic flow.",
    solution:
      "Developed computer vision algorithms for vehicle detection, counting, and traffic density estimation to dynamically control signals.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
    features: [
      "Vehicle detection & counting",
      "Traffic analysis & density estimation",
      "Real-time monitoring",
      "Dynamic signal control",
      "Automated traffic flow optimization",
    ],
    challenges:
      "Building accurate computer vision models for varied lighting, vehicle types, and dense traffic scenarios.",
    impact:
      "This project was also published as a research paper in IRJMETS (2025), showcasing AI-driven smart city solutions.",
  },
  {
    id: "crop-recommendation",
    name: "Crop Recommendation System",
    overview:
      "A machine learning-based system that recommends suitable crops based on environmental and soil conditions.",
    problem:
      "Farmers often lack data-driven guidance on which crops to plant for optimal yield in their specific soil and climate.",
    solution:
      "Implemented a KNN-based prediction model with data preprocessing and feature engineering to recommend the best crops.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning"],
    features: [
      "Data preprocessing & feature engineering",
      "Predictive modeling",
      "Crop prediction & agricultural insights",
    ],
    challenges: "Processing agricultural datasets and improving crop selection accuracy with limited data.",
    impact: "A practical ML application supporting smarter agricultural decisions.",
  },
  {
    id: "college-connect",
    name: "College Connect Platform",
    overview:
      "A student collaboration platform allowing college students to share resources, assignments, PDFs, images, and academic updates.",
    problem: "Students lack a centralized space to share academic resources and collaborate effectively.",
    solution:
      "Built a full-stack platform with authentication, content upload, social features, and an admin dashboard.",
    technologies: ["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "User authentication",
      "Content upload (PDFs, images)",
      "Like & comment system",
      "Admin dashboard & search",
      "Role-based access",
    ],
    challenges: "Implementing role-based access and a responsive, intuitive sharing experience.",
    impact: "A functional student collaboration hub used for academic resource sharing.",
  },
  {
    id: "anand-finance",
    name: "Anand Finance Management System",
    overview:
      "A finance management platform for customer loans, EMI tracking, transaction monitoring, and analytics.",
    problem: "Finance teams need a reliable system to manage loans, EMIs, and transactions with clear reporting.",
    solution:
      "Built a full-featured platform with loan tracking, EMI calculation, analytics dashboards, and export capabilities.",
    technologies: ["React.js", "Flask", "SQLite", "Tailwind CSS"],
    features: [
      "Customer & loan management",
      "EMI tracking & calculation",
      "Transaction monitoring",
      "Analytics dashboard",
      "Excel export & PDF reports",
      "Secure authentication",
    ],
    challenges: "Designing accurate EMI calculation logic and comprehensive reporting exports.",
    impact: "A robust finance management tool with powerful reporting.",
  },
];

export const achievements = {
  hackathons: "Winner in 3 hackathons and participant in 5+ national-level hackathons.",
  research: "Published 'An Intelligent Traffic Management System' in IRJMETS (2025) — AI-powered traffic monitoring using Computer Vision and Machine Learning.",
  leadership: "Led academic and technical project teams, coordinating planning, development, and testing.",
  internship: "Completed a React Development Internship at WebDzen Technologies.",
};

export const certifications = [
  "Generative AI Foundations — Microsoft & UpGrad",
  "Artificial Intelligence Fundamentals — IBM SkillsBuild",
  "React Development Internship — WebDzen Technologies",
  "Machine Learning with Python — IBM / Coursera",
  "Python for Data Science — NPTEL",
  "Introduction to Computer Vision — Coursera",
  "Full-Stack Web Development — META / Coursera",
  "Prompt Engineering for Developers — DeepLearning.AI",
  "Docker & DevOps Fundamentals — Linux Foundation",
];

export const recruiterMode = {
  summary:
    "Simon is a high-potential Software Engineer, AI Engineer, and Python Full-Stack Developer who combines strong technical fundamentals with real-world project execution. Here's why he stands out:",
  points: [
    "💻 Technical Skills: Proficient in Python (92%), React.js (90%), Node.js (85%), Machine Learning (86%), OpenCV, Computer Vision, and Generative AI — a rare blend of full-stack + AI capabilities.",
    "🤖 AI Experience: Hands-on with ML, Computer Vision, LLM applications, and prompt engineering, backed by a published research paper in IRJMETS (2025) on an Intelligent Traffic Management System.",
    "💼 Internship: Completed a production-focused React Development Internship at WebDzen Technologies, building e-commerce features, 20+ reusable UI components, and admin dashboards.",
    "🏆 Achievements: Winner of 3 hackathons and participant in 5+ national-level competitions, demonstrating rapid problem-solving and teamwork under pressure.",
    "🚀 Leadership: Led academic and technical project teams, coordinating project planning, execution, and testing with a shared vision.",
    "📚 Growth Mindset: Constantly learning new technologies, frameworks, and AI innovations to stay at the cutting edge.",
  ],
  closing:
    "In short, Simon delivers production-ready full-stack applications with AI integration, strong engineering discipline, and proven leadership — making him an excellent asset for any software engineering or AI-focused team. Would you like to see his projects, contact him, or download his resume?",
};

// Analytics keys
export const analyticsKeys = {
  conversations: "simongpt_total_conversations",
  sessions: "simongpt_sessions",
  questions: "simongpt_questions",
};

