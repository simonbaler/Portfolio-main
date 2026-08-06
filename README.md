<div align="center">

# Simon Baler — Portfolio 🚀

**React Frontend Developer | Web Developer | Software Engineering Student**

A modern, responsive personal portfolio website built with **React 19**, **Vite 8**, and **Tailwind CSS 4** — featuring an AI-powered chatbot, background video reel, and a fully centralized content system.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## ✨ Features

- 🎬 **Hero section with a background video** (click the play button to watch the intro reel)
- 🤖 **AI Chatbot** ("SimonGPT") — a floating, lazy-loaded assistant with suggested prompts, typing indicators, and voice controls
- 🏠 **About** — ID-badge style profile card with quick stats and tech stack icons (React, JavaScript, Tailwind)
- 🛠️ **Technical Skills** — categorized skill bars (Frontend, Languages, AI/ML, Tools)
- 🔄 **Services / My Approach** — Research → Design → Develop → Deploy process
- 💼 **Featured Projects** — including the flagship **LENS** e-commerce platform
- 🏆 **Achievements** — hackathon wins, published research, and more
- 🎓 **Internships, Leadership, Certificates, Updates & Soft Skills** sections
- 📬 **Contact form** powered by **EmailJS**
- 📱 **Fully responsive** with a mobile menu
- 🎨 **AOS scroll animations** + **Framer Motion**

---

## 🧰 Tech Stack

| Category      | Technologies                                                        |
| ------------- | ------------------------------------------------------------------- |
| **Framework** | React 19, Vite 8                                                     |
| **Styling**   | Tailwind CSS 4                                                       |
| **Animation** | AOS, Framer Motion                                                   |
| **Forms**     | EmailJS                                                              |
| **Other**     | JavaScript (ES6), HTML5, CSS3, REST APIs                             |

---

## 📁 Project Structure

```
portfolio/
├── public/                    # Static assets (icons, favicon, resume PDF)
├── src/
│   ├── assets/                # Images, avatars, hero videos
│   ├── components/            # React section components
│   │   ├── chatbot/           # AI chatbot UI (SimonGPT)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── ...                # All other sections
│   ├── data/
│   │   ├── portfolioData.js   # ⭐ Central content config
│   │   └── chatbotKnowledge.js# Chatbot knowledge base
│   ├── hooks/                 # Custom hooks (e.g., useChatbot)
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SimonBaler/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173/** (or the port shown in your terminal) to view the site.

---

## 📦 Available Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the development server (Vite)  |
| `npm run build`    | Build the production bundle          |
| `npm run preview`  | Preview the production build         |
| `npm run lint`     | Run ESLint on the project            |

---

## ⚙️ Customization

All personal information, projects, skills, achievements, and links are centralized in **one file**:

```
src/data/portfolioData.js
```

Edit this file to update content across the entire site — no need to touch individual components.

### EmailJS Configuration

The contact form uses **EmailJS**. Create a `.env` file in the project root with your credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **Important:** `.env` files are gitignored by default. Never commit your EmailJS keys.

---

## 🌐 Deploying to GitHub Pages

To deploy this Vite app to GitHub Pages:

### 1. Set the `base` path in `vite.config.js`

```js
export default defineConfig({
  base: '/<your-repo-name>/',   // e.g. '/portfolio/'
  plugins: [react(), tailwindcss()],
})
```

### 2. Add the `homepage` field to `package.json`

```json
"homepage": "https://SimonBaler.github.io/portfolio"
```

### 3. Build & deploy

```bash
npm run build
```

Then push the contents of the `dist/` folder to the `gh-pages` branch, or use
[GitHub Actions](https://github.com/features/actions) for automatic deployment.

---

## 🧠 About the AI Chatbot

The **SimonGPT** chatbot is a fully client-side assistant that:

- Answers questions about the portfolio using the knowledge base in `src/data/chatbotKnowledge.js`
- Provides **suggested prompts** for quick interactions
- Displays **typing indicators** and **message bubbles**
- Supports **voice controls** (speech recognition / synthesis)
- Is **lazy-loaded** via `React.lazy()` for better performance

---

## 📄 Sections

- **Hero** — welcome message with background video reel
- **About** — profile card, bio, quick stats, tech icons
- **Technical Skills** — categorized skill proficiency bars
- **Services / My Approach** — project process (Research → Deploy)
- **Projects** — featured work incl. LENS e-commerce & AI projects
- **Achievements** — hackathons, published research, projects
- **Internships** — React Frontend Developer intern experience
- **Leadership** — research, hackathons, project leadership
- **Certificates** — Microsoft, IBM, Forage, and more
- **Updates** — live GitHub/LinkedIn activity
- **Soft Skills** — why hire me
- **Contact** — EmailJS-powered form
- **Footer** — links & credits

---

## 📬 Contact

- **Email:** [simonbaler21@gmail.com](mailto:simonbaler21@gmail.com)
- **GitHub:** [@simonbaler](https://github.com/simonbaler)
- **LinkedIn:** [Simon Baler](https://linkedin.com/in/simon-baler-60b105384)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <strong>Simon Baler</strong></p>
