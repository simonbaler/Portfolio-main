import React from 'react';
import { certificates, activityContent, socialLinks } from '../data/portfolioData';

// GitHub icon SVG
const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// LinkedIn icon SVG
const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const UpdateCard = ({ item, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-red-500/30 hover:bg-white/[0.08] hover:shadow-[0_15px_40px_rgba(255,42,42,0.1)] transition-all duration-500 group"
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <div className="flex items-center gap-3">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
        <div>
          <h4 className="text-white font-bold text-sm leading-snug">{item.title}</h4>
          <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-1">{item.date}</p>
        </div>
      </div>
    </div>
    <p className="text-white/60 text-sm leading-relaxed font-medium">{item.text}</p>
  </div>
);

const CertificateCard = ({ cert, index }) => (
  <a
    href={cert.url || '#'}
    target="_blank"
    rel="noopener noreferrer"
    data-aos="zoom-in"
    data-aos-delay={String((index % 3) * 100 + 100)}
    className="group block"
  >
    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-red-400/40 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(255,42,42,0.2)] transition-all duration-500 h-full">
      <div className="flex items-start gap-4">
        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
        <div className="min-w-0">
          <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-red-300 transition-colors">
            {cert.name}
          </h3>
          <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">{cert.issuer}</p>
          {cert.credentialId && (
            <span className="inline-block mt-2 text-[10px] font-mono font-bold text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/10">
              {cert.credentialId}
            </span>
          )}
        </div>
      </div>
    </div>
  </a>
);

const Updates = () => {
  return (
    <section id="updates" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            {activityContent.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {activityContent.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {activityContent.description}
          </p>
        </div>

        {/* GitHub Live Activity */}
        <div data-aos="fade-up" className="mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight flex items-center gap-3">
              <GitHubIcon className="w-6 h-6 text-white/80" />
              GitHub Activity
            </h3>
            <a
              href={activityContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              @{activityContent.githubUsername}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* GitHub Streak + Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:border-red-500/30 transition-all duration-500">
              <img 
                src={`https://streak-stats.demolab.com/?user=${activityContent.githubUsername}&theme=dark&hide_border=true&background=0A0A0A&stroke=ff2a2a&ring=ff2a2a&fire=ff2a2a&currStreakLabel=ffffff`}
                alt="GitHub Streak Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:border-red-500/30 transition-all duration-500">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${activityContent.githubUsername}&show_icons=true&theme=dark&hide_border=true&bg_color=0A0A0A&icon_color=ff2a2a&text_color=ffffff&title_color=ff2a2a`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="mt-4 md:mt-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:border-red-500/30 transition-all duration-500">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${activityContent.githubUsername}&layout=compact&theme=dark&hide_border=true&bg_color=0A0A0A&text_color=ffffff&title_color=ff2a2a`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* LinkedIn Highlights */}
        <div data-aos="fade-up" className="mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight flex items-center gap-3">
              <LinkedInIcon className="w-6 h-6 text-white/80" />
              LinkedIn Highlights
            </h3>
            <a
              href={activityContent.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              View My LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {activityContent.linkedinHighlights.map((item, index) => (
              <UpdateCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* All Certifications */}
        <div data-aos="fade-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight flex items-center gap-3">
              🏆 All Certifications
            </h3>
            <a
              href={certificates.viewAllUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              View All on LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificates.featured.map((cert, index) => (
              <CertificateCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base hover:bg-white hover:text-black transition-all duration-500 group"
          >
            <GitHubIcon />
            Follow on GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#ff2a2a] text-white font-bold text-base hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,42,42,0.4)] transition-all duration-500 group"
          >
            <LinkedInIcon />
            Connect on LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default Updates;

