import React from 'react';
import stackImage from '../assets/about/simon-avatar.svg';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M64 39.6c9.3 0 18.5 1.5 26.4 4.2 9.7 3.3 15.9 8.2 15.9 13.4s-6.2 10.1-15.9 13.4c-7.9 2.7-17.1 4.2-26.4 4.2s-18.5-1.5-26.4-4.2C27.9 63.5 21.7 58.6 21.7 53.3s6.2-10.1 15.9-13.4c7.9-2.7 17.1-4.2 26.4-4.2zM39.6 53.3c0 3 4.3 6 11.3 8.4 5.7 2 12.5 3.1 19.7 3.1 4.3 0 8.5-.3 12.4-1 1.5 1.8 2.4 3.7 2.4 5.6 0 5.3-6.2 10.1-15.9 13.4-7.9 2.7-17.1 4.2-26.4 4.2s-18.5-1.5-26.4-4.2C25.1 79.4 18.9 74.5 18.9 69.2c0-1.8.8-3.6 2.3-5.2-1.5 1.6-2.3 3.4-2.3 5.2 0 5.3 6.2 10.1 15.9 13.4 7.9 2.7 17.1 4.2 26.4 4.2s18.5-1.5 26.4-4.2c9.7-3.3 15.9-8.2 15.9-13.4s-6.2-10.1-15.9-13.4c-7.9-2.7-17.1-4.2-26.4-4.2-4.3 0-8.5.3-12.4 1-1.5-1.8-2.4-3.7-2.4-5.6 0-5.3 6.2-10.1 15.9-13.4 7.9-2.7 17.1-4.2 26.4-4.2s18.5 1.5 26.4 4.2c9.7 3.3 15.9 8.2 15.9 13.4 0 1.8-.8 3.6-2.3 5.2 1.5-1.6 2.3-3.4 2.3-5.2 0-5.3-6.2-10.1-15.9-13.4C82.5 41.1 73.3 39.6 64 39.6z" transform="translate(1.4 -1.4) scale(1.06)" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const JavaScriptIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
      <path fill="#323330" d="M116.347 96.736c-6.554-4.121-10.453-9.987-15.05-17.79-1.5-2.55-5.5-9.5-5.5-9.5s-1.5 2.5-3.5 5.5c-5.5 8.5-11.5 11.5-19.5 11.5-10.5 0-18.5-8-18.5-19.5 0-16 11-26 26.5-35 5-3 10-6 10-11 0-4-2.5-6-7.5-6-6 0-12 3-17 8-2 2-4 3-4 4-1 1-1 2 0 3 1 1 2 2 3 1 1-1 2-2 3-2 2-1 4-2 6-2 3 0 4 1 4 3 0 3-3 5.5-7 8-9.5 6.5-18 12.5-18 24 0 8.5 6 15 14.5 15 8 0 13.5-4 17-10 1.5-2.5 3-6 3-6s1 3 2 4c5 9 10 13 17.5 13 5 0 9-1.5 12-4 .5-1 1-2 1-3 0-1 0-2-1-3z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">JavaScript</span>
  </div>
);

const TailwindIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path d="M64.004,25.184c-21.813,0-35.437,10.879-40.873,32.637c8.175-10.879,17.711-14.975,28.607-12.288c6.219,1.534,10.664,5.977,15.585,10.897c8.014,8.014,17.289,17.289,37.535,17.289c21.813,0,35.438-10.879,40.874-32.637c-8.175,10.879-17.711,14.975-28.608,12.288c-6.218-1.534-10.663-5.977-15.584-10.897c-8.014-8.014-17.289-17.289-37.536-17.289z" fill="#38b2ac"/>
      <path d="M23.13,64.351c-8.175,10.879-17.711,14.975-28.607,12.288c-6.219-1.534-10.664-5.977-15.585-10.897C-29.195,57.728-38.47,48.453-58.716,48.453c-21.813,0-35.437,10.879-40.873,32.637c8.175-10.879,17.711-14.975,28.607-12.288c6.219,1.534,10.664,5.977,15.585,10.897c8.014,8.014,17.289,17.289,37.536,17.289c21.813,0,35.438-10.879,40.874-32.637C34.989,55.181,25.424,51.085,23.13,64.351z" fill="#0f172a"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Tailwind</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
<img 
                  src={stackImage} 
                  alt="Simon Baler — React Frontend Developer, Web Developer & Software Engineering Student" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {aboutContent.quickStats.map((stat) => (
              <div key={stat.label} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-red-100 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

{/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-4">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaScriptIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TailwindIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
