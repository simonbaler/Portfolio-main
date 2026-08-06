// ============================================================
// portfolioData.js — Centralized configuration for Simon Baler's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Simon Baler",
  firstName: "Simon",
  brandName: "Simon Baler",
  title: "React Frontend Developer | Web Developer | Software Engineering Student",
  location: "Hyderabad, Telangana, India",
  phone: "+91 9392867168",
  emails: {
    primary: "simonbaler21@gmail.com",
    secondary: "simonbaler21@gmail.com",
  },
  summary:
    "Computer Science undergraduate specializing in Software Engineering with hands-on experience in React Frontend Development and modern web technologies. Skilled in developing responsive, user-friendly web applications using React.js, HTML5, CSS3, JavaScript, and Tailwind CSS. Completed a React Development Internship and built multiple academic and real-world projects, including AI-assisted applications and e-commerce platforms.",
  resumeUrl: "https://github.com/simonbaler",
};

export const socialLinks = {
  github: "https://github.com/simonbaler",
  linkedin: "https://linkedin.com/in/simon-baler-60b105384",
  instagram: "https://github.com/simonbaler",
};

export const heroContent = {
  greeting: "Hi, I'm Simon Baler",
  titleHighlight: "React Frontend Developer, Web Developer & Software Engineering Student",
  subtitle:
    "I build responsive, user-friendly web applications with React.js, modern UI design, and AI-assisted development.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:simonbaler21@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Simon Baler,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "View GitHub", href: "https://github.com/simonbaler" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Simon Baler</span>, a Computer Science undergraduate specializing in Software Engineering with hands-on experience in <span class="text-black font-bold">React Frontend Development</span> and modern web technologies. I love building responsive, user-friendly web applications and contributing to innovative projects like AI-assisted applications and e-commerce platforms.`,
  techStack: ["React", "JavaScript", "Tailwind"],
  quickStats: [
    { value: "10+", label: "Projects Built" },
    { value: "3", label: "Hackathon Wins" },
    { value: "1", label: "Published Research" },
    { value: "1", label: "Internship" },
  ],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "Here's how I turn ideas into intelligent applications",
  description:
    "I follow a structured, creative, and highly technical approach to build robust full-stack and AI-powered applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends, intelligent AI features, and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to build!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Frontend & Web",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5", level: 93 },
        { name: "CSS3", level: 90 },
        { name: "Responsive Web Design", level: 91 },
        { name: "REST API Integration", level: 88 },
        { name: "Component-Based Development", level: 90 }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "K-Nearest Neighbors (KNN)", level: 82 },
        { name: "OpenCV", level: 82 },
        { name: "Basic Machine Learning", level: 84 },
        { name: "ChatGPT", level: 90 },
        { name: "Claude", level: 88 },
        { name: "Gemini", level: 88 },
        { name: "Ollama", level: 80 },
        { name: "Code Llama", level: 78 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 78 },
        { name: "VS Code", level: 92 },
        { name: "n8n", level: 82 }
      ]
    }
  ]
};

// Achievements & Recognition Data
export const contentCreation = {
  badge: "Achievements",
  heading: "Recognition, Research & Leadership",
  description: "Hackathon wins, published research, and 10+ real-world projects that complement my technical work.",
  categories: [
    {
      title: "Hackathon Winner",
      description: "Winner of 3 hackathons and participant in 5+ national-level hackathons, demonstrating innovation, teamwork, and strong problem-solving skills.",
      stats: "3 Wins",
      icon: "🏆"
    },
    {
      title: "Published Research Paper",
      description: "\"An Intelligent Traffic Management System\" published in IRJMETS (2025) — AI-powered traffic monitoring and dynamic signal optimization using Computer Vision and Machine Learning.",
      stats: "IRJMETS 2025",
      icon: "📄"
    },
    {
      title: "10+ Projects Developed",
      description: "Built over 10 real-world and academic projects including e-commerce platforms, AI applications, and responsive web applications using React and modern tools.",
      stats: "10+ Projects",
      icon: "💻"
    },
    {
      title: "React Frontend Development",
      description: "B.Tech CSE (Software Engineering) student specializing in React Frontend Development with a completed internship and production UI component experience.",
      stats: "B.Tech CSE",
      icon: "⚛️"
    }
  ]
};

// Leadership & Engagement Data
export const leadershipList = [
  {
    title: "Published Research Paper",
    description: "Authored \"An Intelligent Traffic Management System\" published in IRJMETS (2025), focused on AI-powered traffic monitoring and dynamic signal optimization using Computer Vision and Machine Learning.",
    role: "Research Author – IRJMETS",
    badge: "Research"
  },
  {
    title: "Hackathon Winner",
    description: "Winner of 3 hackathons and participant in 5+ national-level hackathons, demonstrating innovation, teamwork, and problem-solving under pressure.",
    role: "Competitive Programmer",
    badge: "Achievement"
  },
  {
    title: "10+ Projects Developed",
    description: "Developed over 10 real-world projects spanning e-commerce, AI, machine learning, and responsive web applications with production-quality code.",
    role: "Project Builder",
    badge: "Projects"
  },
  {
    title: "React Development Internship",
    description: "Completed a React Frontend Developer Internship at WebDzen Technologies, building production-ready e-commerce features, reusable UI components, and admin dashboards.",
    role: "React Frontend Developer Intern",
    badge: "Internship"
  }
];

// Experience / Internships Data
export const internshipsList = [
  {
    organization: "WebDzen Technologies",
    role: "React Frontend Developer Intern",
    duration: "October 2025 - December 2025",
    skills: [
      "Responsive web application development with React.js, HTML5, CSS3, JavaScript, and Tailwind CSS",
      "Built reusable React components for better maintainability and performance",
      "Integrated REST APIs to display dynamic content",
      "Collaborated using Git/GitHub in an Agile environment",
      "Followed clean code standards and best practices"
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "Agile"]
  }
];

// Soft Skills / Why Hire Me Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧠", desc: "Strong analytical mindset for breaking complex technical challenges into clean, efficient solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Effective collaboration across technical teams with clear communication and shared goals." },
  { name: "Communication", icon: "💬", desc: "Clear and concise communication of technical ideas to both technical and non-technical audiences." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to adopt modern stacks like React, Tailwind, OpenCV, and AI-assisted development tools." },
  { name: "Time Management", icon: "⏱️", desc: "Efficient prioritization and delivery of tasks across multiple projects and deadlines." },
  { name: "Continuous Learning", icon: "📚", desc: "Passionate about learning new technologies, frameworks, and AI innovations constantly." },
  { name: "React Development", icon: "⚛️", desc: "Strong foundation in building responsive, component-based web applications with React.js." },
  { name: "Frontend Engineering", icon: "🎨", desc: "Building pixel-perfect, accessible, and high-performance user interfaces with modern CSS." }
];

export const projects = [
  {
    id: "lens",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "LENS - Premium E-Commerce Platform",
description:
      "A premium e-commerce platform designed for cameras, lenses, and photography accessories with modern UI/UX and advanced shopping functionality. Includes product catalog, wishlist, shopping cart, product comparison, secure checkout, admin dashboard, content management system, dark mode, responsive design, and advanced animations. Built with a production-ready architecture, premium glassmorphism UI, and fully responsive layouts.",
    techTags: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "traffic-management",
    number: "02",
    badge: null,
    title: "Intelligent Traffic Management System",
    description:
      "An AI-powered traffic management solution that monitors traffic density and dynamically optimizes traffic signal timings. Features vehicle detection, vehicle counting, traffic analysis, and density estimation. Developed computer vision algorithms for vehicle detection and automated traffic flow optimization.",
    techTags: ["Python", "OpenCV", "KNN"],
    links: {
      github: "#",
    },
    isFlagship: false,
  },
  {
    id: "crop-recommendation",
    number: "03",
    badge: null,
    title: "Crop Recommendation System",
    description:
      "A machine learning-based recommendation system that suggests suitable crops based on environmental and soil conditions. Includes data preprocessing, predictive modeling, crop prediction, and agricultural insights. Implemented a KNN-based prediction model and processed agricultural datasets to improve crop selection accuracy.",
    techTags: ["Python", "KNN", "HTML", "CSS"],
    links: {
      github: "#",
    },
    isFlagship: false,
  },
  {
    id: "college-connect",
    number: "04",
    badge: null,
    title: "College Connect Portal",
    description:
      "A centralized, responsive student portal for sharing real-time academic notices and campus information. Features user authentication, content upload, like & comment system, admin dashboard, search functionality, and role-based access.",
    techTags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "#",
    },
    isFlagship: false,
  },
  {
    id: "fake-news-detection",
    number: "05",
    badge: null,
    title: "Fake News Detection System",
    description:
      "An automated fake news prediction application built with Machine Learning. Applied text preprocessing and classification techniques to build an accurate model that detects and classifies news articles as fake or real.",
    techTags: ["Python", "Machine Learning"],
    links: {
      github: "#",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Microsoft Generative AI Foundations",
      issuer: "Microsoft",
      icon: "🤖",
      credentialId: "Microsoft-GenAI-Foundations",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      icon: "🧠",
      credentialId: "IBM-AI-Fundamentals",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "React Development Internship",
      issuer: "WebDzen Technologies",
      icon: "⚛️",
      credentialId: "WebDzen-React-Intern",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia (Forage)",
      icon: "📊",
      credentialId: "Deloitte-Forage-DataAnalytics",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "Advanced Software Engineering Job Simulation",
      issuer: "Walmart USA (Forage)",
      icon: "🛒",
      credentialId: "Walmart-Forage-SWE",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "iCAT 2026 Certificate of Participation",
      issuer: "iCAT 2026",
      icon: "🎖️",
      credentialId: "iCAT-2026-Participation",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "AI Tools Workshop",
      issuer: "Workshop Certification",
      icon: "🛠️",
      credentialId: "AI-Tools-Workshop",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
    {
      name: "Cyber Security Workshop",
      issuer: "Workshop Certification",
      icon: "🔐",
      credentialId: "CyberSecurity-Workshop",
      url: "https://www.linkedin.com/in/simon-baler-60b105384/",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/simon-baler-60b105384/",
};

// Live Activity / Updates Data
export const activityContent = {
  badge: "Daily Updates",
  heading: "Live From My Profiles",
  description:
    "Stay updated with my latest GitHub repositories, commits, and LinkedIn posts — showcasing what I'm building and learning every day.",
  githubUsername: "simonbaler",
  linkedinUrl: "https://www.linkedin.com/in/simon-baler-60b105384/",
  githubUrl: "https://github.com/simonbaler",
  linkedinHighlights: [
    {
      title: "New Post — AI Project Showcase",
      text: "Sharing my latest Computer Vision project built with OpenCV and Machine Learning.",
      date: "Today",
      icon: "📝",
    },
    {
      title: "Certification Achievement",
      text: "Earned a new Generative AI certification from Microsoft & UpGrad.",
      date: "This Week",
      icon: "🏅",
    },
    {
title: "Internship Experience Update",
      text: "Completed my React Frontend Developer Internship at WebDzen Technologies.",
      date: "This Month",
      icon: "💼",
    },
    {
      title: "Research Publication Announcement",
      text: "\"An Intelligent Traffic Management System\" published in IRJMETS 2025.",
      date: "Recently",
      icon: "📄",
    },
  ],
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering (Software Engineering)",
  institution: "Siddhartha Institute of Technology & Sciences (SITS), Hyderabad",
  cgpa: "8.0",
  graduation: "2027",
};

export const footerContent = {
  taglines: [
    "React Frontend Development",
    "JavaScript · React · Tailwind CSS",
    "Responsive Web Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.0",
  copyright: `© ${new Date().getFullYear()} Simon Baler | Built with React`,
};

// Contact Section Data
export const contactContent = {
  heading: "Let's Build Something Amazing Together",
  description: "I am actively seeking React Frontend Developer roles, Web Developer opportunities, internships, freelance projects, and collaboration opportunities.",
  seeking: [
    "React Frontend Developer Roles",
    "Web Developer Opportunities",
    "Frontend Engineering Positions",
    "Internships",
    "Freelance Projects",
    "Collaboration Opportunities",
  ],
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

