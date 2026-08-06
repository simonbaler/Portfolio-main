import React, { lazy, Suspense } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import Updates from './components/Updates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lazy-load the AI chatbot for performance (code splitting)
const SimonGPT = lazy(() => import('./components/chatbot/SimonGPT'))

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <ContentCreator />
      <Internships />
      <Leadership />
      <Certificates />
      <Updates />
      <SoftSkills />
      <Contact />
      <Footer />
      {/* AI Chatbot — floating assistant (lazy loaded) */}
      <Suspense fallback={null}>
        <SimonGPT />
      </Suspense>
    </>
  )
}

export default App
