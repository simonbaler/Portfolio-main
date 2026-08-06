import { useCallback, useEffect, useRef, useState } from 'react';
import {
  botInfo,
  personal,
  skills,
  internship,
  projects,
  achievements,
  certifications,
  recruiterMode,
  analyticsKeys,
} from '../data/chatbotKnowledge';

// ============================================================
// useChatbot — Core logic, knowledge matching, analytics
// ============================================================

const STORAGE_KEYS = {
  conversations: 'simongpt_total_conversations',
  sessions: 'simongpt_sessions',
  questions: 'simongpt_questions',
  history: 'simongpt_chat_history',
};

const getStored = (key, fallback) => {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
};

const setStored = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable — ignore
  }
};

// ---- Knowledge matching helpers ----
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

const includesAny = (text, keywords) => keywords.some((k) => text.includes(k));

const getProjectById = (text) => {
  const t = normalize(text);
  if (t.includes('lens') || t.includes('ecommerce') || t.includes('e-commerce') || (t.includes('shopping') && t.includes('camera'))) {
    return projects.find((p) => p.id === 'lens');
  }
  if (t.includes('traffic') || t.includes('signal') || t.includes('vehicle')) {
    return projects.find((p) => p.id === 'traffic-management');
  }
  if (t.includes('crop') || t.includes('agriculture') || t.includes('soil') || t.includes('farming')) {
    return projects.find((p) => p.id === 'crop-recommendation');
  }
  if (t.includes('college') || t.includes('student') || t.includes('connect')) {
    return projects.find((p) => p.id === 'college-connect');
  }
  if (t.includes('finance') || t.includes('anand') || t.includes('loan') || t.includes('emi')) {
    return projects.find((p) => p.id === 'anand-finance');
  }
  return null;
};

const formatProjectResponse = (project) => {
  if (!project) return null;
  return [
    `🚀 **${project.name}**${project.flag ? ` — *${project.flag}*` : ''}`,
    '',
    `**📌 Overview:** ${project.overview}`,
    '',
    `**⚠️ Problem:** ${project.problem}`,
    '',
    `**💡 Solution:** ${project.solution}`,
    '',
    `**🛠️ Technologies:** ${project.technologies.join(', ')}`,
    '',
    `**✨ Features:**`,
    ...project.features.map((f) => `  • ${f}`),
    '',
    `**🧗 Challenges:** ${project.challenges}`,
    '',
    `**🎯 Impact:** ${project.impact}`,
  ].join('\n');
};

const formatList = (items) => items.map((i) => `  • ${i}`).join('\n');

const formatCertifications = () =>
  certifications.map((c, i) => `  ${i + 1}. ${c}`).join('\n');

// ---- Main response engine ----
const generateResponse = (rawInput) => {
  const input = rawInput.trim();
  const text = normalize(input);

  // === COMMANDS ===
  if (includesAny(text, ['download resume', 'resume', 'view resume'])) {
    return {
      text: `📄 Here's Simon's resume: ${personal.links.resume}\n\nOpening it in a new tab now.`,
      action: 'resume',
    };
  }
  if (text === 'github' || text.includes('github profile') || (text.includes('github') && text.includes('open'))) {
    return {
      text: `🐙 You can explore Simon's GitHub at: ${personal.links.github}\n\nOpening in a new tab now.`,
      action: 'github',
    };
  }
  if (text === 'linkedin' || text.includes('linkedin profile') || (text.includes('linkedin') && text.includes('open'))) {
    return {
      text: `💼 Connect with Simon on LinkedIn: ${personal.links.linkedin}\n\nOpening in a new tab now.`,
      action: 'linkedin',
    };
  }
  if (text === 'contact' || includesAny(text, ['contact simon', 'get in touch', 'reach simon', 'email simon', 'phone simon', 'contact number'])) {
    return {
      text: `📬 You can reach Simon at:\n  • Email: ${personal.email}\n  • Phone: ${personal.phone}\n\nOpening email composer now.`,
      action: 'contact',
    };
  }

  // === RECRUITER MODE ===
  if (includesAny(text, ['why hire', 'hire simon', 'recruiter', 'why should i hire', 'hire him', 'hire me', 'hiring', 'why choose', 'candidate'])) {
    const response = [recruiterMode.summary, '', ...recruiterMode.points, '', recruiterMode.closing].join('\n');
    return { text: response };
  }

  // === ABOUT SIMON / INTRO ===
  if (
    includesAny(text, ['tell me about simon', 'who is simon', 'about simon', 'about you', 'introduce', 'who are you', 'your name', 'what is simongpt', 'about yourself'])
  ) {
    return {
      text: [
        `👋 ${personal.name} is a ${personal.title}.`,
        '',
        `${personal.summary}`,
        '',
        `🎓 ${personal.education.degree} at ${personal.education.institution} (CGPA: ${personal.education.cgpa}, graduating ${personal.education.graduation}).`,
        '',
        `He's based in ${personal.location}. You can ask me about his projects, skills, internship, certifications, or why you should hire him!`,
      ].join('\n'),
    };
  }

  // === SKILLS / TECHNOLOGIES ===
  if (includesAny(text, ['technolog', 'skills', 'tech stack', 'what does simon know', 'programming', 'stack', 'languages'])) {
    return {
      text: [
        `🛠️ Here's Simon's technical skillset:`,
        '',
        `**Programming Languages:**`,
        formatList(skills.programming),
        '',
        `**Frontend:**`,
        formatList(skills.frontend),
        '',
        `**Backend:**`,
        formatList(skills.backend),
        '',
        `**AI & Machine Learning:**`,
        formatList(skills.aiMl),
        '',
        `**Tools & Technologies:**`,
        formatList(skills.tools),
      ].join('\n'),
    };
  }

  // === AI PROJECTS / AI EXPERIENCE ===
  if (includesAny(text, ['ai project', 'ml project', 'ai experience', 'machine learning project', 'computer vision project', 'ai work', 'ai projects', 'show ai'])) {
    const aiProjects = projects.filter((p) => p.id === 'traffic-management' || p.id === 'crop-recommendation');
    return {
      text: [
        `🤖 Here are Simon's AI & Machine Learning projects:`,
        '',
        ...aiProjects.map((p) => `🚀 **${p.name}**\n${p.overview}\n\nTech: ${p.technologies.join(', ')}`),
        '',
        `Ask me to explain any of them in detail!`,
      ].join('\n'),
    };
  }

  // === PROJECT EXPLAINER ===
  const matchedProject = getProjectById(text);
  if (matchedProject) {
    return { text: formatProjectResponse(matchedProject) };
  }
  if (text.includes('project') || text.includes('portfolio') || text.includes('what has he built')) {
    return {
      text: [
        `📂 Here are Simon's featured projects:`,
        '',
        ...projects.map((p) => `🚀 **${p.name}**\n${p.overview}`),
        '',
        `Ask me to explain any project in detail (overview, problem, solution, technologies, features, challenges, impact)!`,
      ].join('\n'),
    };
  }

  // === INTERNSHIP / EXPERIENCE ===
  if (includesAny(text, ['intern', 'experience', 'work', 'job', 'company', 'webdzen', 'employment'])) {
    return {
      text: [
        `💼 Simon completed a **${internship.role}** at **${internship.organization}** (${internship.duration}).`,
        '',
        `**Skills Gained:**`,
        formatList(internship.skills),
        '',
        `**Technologies Used:**`,
        formatList(internship.tech),
      ].join('\n'),
    };
  }

  // === CERTIFICATIONS ===
  if (includesAny(text, ['certif', 'certificate', 'credential', 'course', 'badge'])) {
    return {
      text: [
        `🏆 Here are Simon's ${certifications.length} certifications:`,
        '',
        formatCertifications(),
        '',
        `You can view all of them on his LinkedIn profile: ${personal.links.linkedin}`,
      ].join('\n'),
    };
  }

  // === ACHIEVEMENTS ===
  if (includesAny(text, ['achiev', 'hackathon', 'award', 'win', 'research paper', 'publication', 'recognition'])) {
    return {
      text: [
        `🏆 Here are Simon's key achievements:`,
        '',
        `  🏁 **Hackathons:** ${achievements.hackathons}`,
        `  📄 **Research:** ${achievements.research}`,
        `  🚀 **Leadership:** ${achievements.leadership}`,
        `  💼 **Internship:** ${achievements.internship}`,
      ].join('\n'),
    };
  }

  // === LEADERSHIP ===
  if (includesAny(text, ['leader', 'team', 'leadership', 'coordinator', 'management'])) {
    return {
      text: [
        `🚀 Simon has strong leadership experience:`,
        '',
        `  • ${achievements.leadership}`,
        `  • Led hackathon teams to 3 wins across national-level competitions`,
        `  • Published a research paper as lead author in IRJMETS 2025`,
        '',
        `He excels at guiding teams, coordinating project planning, and driving execution to completion.`,
      ].join('\n'),
    };
  }

  // === EDUCATION ===
  if (includesAny(text, ['education', 'degree', 'college', 'university', 'btech', 'b.tech', 'cse', 'study', 'academic', 'cgpa'])) {
    return {
      text: [
        `🎓 **Education:**`,
        `  • ${personal.education.degree}`,
        `  • ${personal.education.institution}`,
        `  • CGPA: ${personal.education.cgpa} (graduating ${personal.education.graduation})`,
      ].join('\n'),
    };
  }

  // === GREETINGS ===
  if (includesAny(text, ['hi', 'hello', 'hey', 'namaste', 'greetings', 'yo', 'hii', 'hiii'])) {
    return {
      text: `👋 Hello! I'm ${botInfo.name}. ${botInfo.greeting.split('. ').slice(1).join('. ')}`,
    };
  }

  // === THANKS ===
  if (includesAny(text, ['thank', 'thanks', 'thx', 'appreciate'])) {
    return { text: `😊 You're welcome! Feel free to ask me anything else about Simon — projects, skills, experience, or contact details.` };
  }

  // === HELP / FALLBACK ===
  if (includesAny(text, ['help', 'what can you do', 'commands', 'options', 'menu'])) {
    return {
      text: [
        `🤖 I can help with:`,
        `  • About Simon & his background`,
        `  • Skills & technologies`,
        `  • Projects (LENS, Traffic Management, Crop Recommendation, etc.)`,
        `  • Internship experience`,
        `  • Certifications & achievements`,
        `  • Research paper details`,
        `  • Why to hire Simon (recruiter mode)`,
        `  • Commands: "resume", "github", "linkedin", "contact"`,
        '',
        `Try one of the suggested prompts below! 👇`,
      ].join('\n'),
    };
  }

  // === DEFAULT FALLBACK ===
  return { text: botInfo.fallback };
};

// ============================================================
// Analytics helpers
// ============================================================
const recordQuestion = (question) => {
  const questions = getStored(STORAGE_KEYS.questions, {});
  const key = normalize(question).slice(0, 50) || 'unknown';
  questions[key] = (questions[key] || 0) + 1;
  setStored(STORAGE_KEYS.questions, questions);
};

const incrementCounter = (key) => {
  const current = getStored(key, 0);
  setStored(key, current + 1);
};

// ============================================================
// useChatbot Hook
// ============================================================
export const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [analytics, setAnalytics] = useState({ conversations: 0, sessions: 0, questions: 0 });
  const initializedRef = useRef(false);

  // Initialize: greeting + analytics
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Sessions analytics
    incrementCounter(analyticsKeys.sessions);
    const sessions = getStored(analyticsKeys.sessions, 0);
    const conversations = getStored(analyticsKeys.conversations, 0);
    const questionsData = getStored(analyticsKeys.questions, {});
    const questionCount = Object.values(questionsData).reduce((a, b) => a + b, 0);

    setAnalytics({ sessions, conversations, questions: questionCount });

    // Restore chat history or greeting
    const history = getStored(STORAGE_KEYS.history, []);
    if (Array.isArray(history) && history.length > 0) {
      setMessages(history);
    } else {
      const greeting = {
        id: `bot-${Date.now()}`,
        role: 'bot',
        text: botInfo.greeting,
        timestamp: Date.now(),
      };
      setMessages([greeting]);
    }
  }, []);

  // Persist history
  useEffect(() => {
    if (initializedRef.current && messages.length > 0) {
      setStored(STORAGE_KEYS.history, messages.slice(-50));
    }
  }, [messages]);

  // Track conversation count
  useEffect(() => {
    if (messages.length > 1) {
      incrementCounter(analyticsKeys.conversations);
      setAnalytics((prev) => ({ ...prev, conversations: prev.conversations + 1 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length === 1]);

  const addMessage = useCallback((role, text, extra = {}) => {
    const msg = {
      id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      role,
      text,
      timestamp: Date.now(),
      ...extra,
    };
    setMessages((prev) => [...prev, msg]);
    return msg;
  }, []);

  const sendMessage = useCallback(
    async (rawInput) => {
      const input = (rawInput || '').trim();
      if (!input) return;

      // Add user message
      addMessage('user', input);

      // Record analytics
      recordQuestion(input);

      // Show typing indicator
      setIsTyping(true);

      // Simulate AI processing delay
      const delay = 700 + Math.random() * 600;
      setTimeout(() => {
        const response = generateResponse(input);
        addMessage('bot', response.text, response.action ? { action: response.action } : {});
        setIsTyping(false);
      }, delay);
    },
    [addMessage]
  );

  const clearConversation = useCallback(() => {
    setMessages([
      {
        id: `bot-${Date.now()}`,
        role: 'bot',
        text: botInfo.greeting,
        timestamp: Date.now(),
      },
    ]);
    setStored(STORAGE_KEYS.history, []);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setIsMinimized(false);
      return next;
    });
  }, []);

  const toggleMinimize = useCallback(() => setIsMinimized((prev) => !prev), []);

  return {
    messages,
    isOpen,
    isMinimized,
    isTyping,
    isVoiceListening,
    isSpeaking,
    analytics,
    sendMessage,
    clearConversation,
    toggleOpen,
    toggleMinimize,
    setIsVoiceListening,
    setIsSpeaking,
  };
};

export default useChatbot;

