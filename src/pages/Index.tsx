import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import { Reveal } from '@/components/motion/Reveal';

// --- Styles & Theme Constants ---
// We use arbitrary Tailwind values to match the CSS variables exactly.
// --bg-vellum: #E8E2D6
// --ink-navy: #1A365D
// --ink-navy-med: rgba(26, 54, 93, 0.6)
// --ink-navy-faint: rgba(26, 54, 93, 0.15)

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: '01 Overview' },
    { id: 'intelligence', label: '02 Intelligence' },
    { id: 'integration', label: '03 Integration' },
    { id: 'vision', label: '04 Vision' },
  ];

  return (
    <div className="min-h-screen bg-[#E8E2D6] text-[#1A365D] font-sans selection:bg-[#1A365D] selection:text-[#E8E2D6] overflow-x-hidden cursor-crosshair">
      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-tech { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen">
        
        {/* --- RAIL SIDEBAR --- */}
        <aside className="sticky top-0 z-50 flex flex-row lg:flex-col justify-between h-auto lg:h-screen p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#1A365D] bg-[#E8E2D6]">
          <div className="flex flex-col gap-16">
            <a href="#" className="font-tech font-bold text-xl tracking-tighter uppercase text-[#1A365D] no-underline">
              Structura
            </a>
            
            <nav className="hidden lg:block">
              <ul className="flex flex-col gap-4 list-none">
                {navItems.map((item) => (
                  <li key={item.id} className="group">
                    <a 
                      href={`#${item.id}`}
                      className={`
                        flex items-center text-sm uppercase tracking-wider transition-all duration-300 ease-in-out
                        ${activeSection === item.id ? 'text-[#1A365D] pl-2.5' : 'text-[#1A365D]/60 hover:text-[#1A365D] hover:pl-2.5'}
                      `}
                    >
                      <span className={`
                        h-[1px] bg-[#1A365D] transition-all duration-300 mr-0
                        ${activeSection === item.id ? 'w-[15px] mr-2.5' : 'w-0 group-hover:w-[15px] group-hover:mr-2.5'}
                      `}></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden lg:block pt-4 border-t border-[#1A365D]/15 text-[0.7rem] font-tech text-[#1A365D]/60">
            <p>STATUS: OPERATIONAL</p>
            <p>LAT: 40.7128° N</p>
            <p>EST 09:42 AM</p>
          </div>
        </aside>

        {/* --- MAIN CONTENT CANVAS --- */}
        <main className="relative w-full">
          
          {/* HERO SECTION */}
          <section id="overview" className="relative grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[50vh] lg:min-h-[90vh] items-end border-b border-[#1A365D] group">
            <div className="absolute top-6 left-6 text-[0.7rem] uppercase tracking-widest border border-[#1A365D] px-2 py-1 rounded-[2px] z-10">
              Fig 1.0 — Introduction
            </div>
            
            <div className="flex flex-col justify-end h-full p-6 pt-24 lg:p-10 lg:pt-24 border-r-0 lg:border-r border-[#1A365D]">
              <Reveal>
                <h1 className="font-display text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.95] mb-8 max-w-[90%]">
                  Intelligence, <br /><i className="font-normal">Architected.</i>
                </h1>
              </Reveal>
              
              <Reveal delay={0.1}>
                <p className="text-[1.1rem] max-w-[400px] mb-12 text-[#1A365D]/60">
                  B2B analytics shouldn't be a black box. Structura provides the blueprint for enterprise decision-making with absolute transparency.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mb-4 lg:mb-0">
                  <a href="#vision" className="text-[#1A365D] underline underline-offset-4 font-semibold hover:text-[#1A365D]/80 transition-colors">
                    Explore the System
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="relative h-[40vh] lg:h-full overflow-hidden bg-[#1A365D] border-t lg:border-t-0 border-b lg:border-b-0 border-[#1A365D]">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop" 
                alt="Architectural geometry" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
              />
            </div>
          </section>

          {/* GRID FEATURES */}
          <section id="intelligence" className="grid grid-cols-1 lg:grid-cols-3 min-h-[60vh] border-b border-[#1A365D]">
            {[ 
              { num: '01', title: 'Raw Ingestion', desc: 'Untethered data streams are captured, cleaned, and categorized in real-time. No signal is lost in the noise.' },
              { num: '02', title: 'Predictive Logic', desc: 'Our recursive algorithms identify market vectors before they emerge, allowing for proactive positioning.' },
              { num: '03', title: 'Output Synthesis', desc: 'Complex datasets are rendered into elegant, actionable directives. Clarity is the ultimate metric.' }
            ].map((item, index) => (
              <div 
                key={item.num} 
                className="relative flex flex-col justify-between p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#1A365D] last:border-r-0 hover:bg-[#1A365D]/5 transition-colors duration-400"
              >
                <Reveal delay={index * 0.1} className="h-full flex flex-col justify-between">
                  <div>
                    <span className="font-tech text-[0.8rem] mb-8 block opacity-50">{item.num}</span>
                    <h3 className="font-display text-[2rem] font-normal mb-4">{item.title}</h3>
                    <p className="text-[0.95rem] text-[#1A365D]/60 max-w-[90%]">{item.desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </section>

          {/* EDITORIAL SECTION */}
          <section id="integration" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b border-[#1A365D] group">
            <div className="relative flex flex-col justify-center p-12 lg:p-24">
              <div className="absolute top-6 left-6 text-[0.7rem] uppercase tracking-widest border border-[#1A365D] px-2 py-1 rounded-[2px]">
                Fig 2.0 — Case Study
              </div>
              
              <Reveal>
                <blockquote className="font-display text-[2.5rem] italic leading-[1.2] mb-8">
                  "It is not enough to have data. You must have structure. Without structure, there is only entropy."
                </blockquote>
              </Reveal>
              
              <Reveal delay={0.1}>
                <p className="text-[0.8rem] uppercase tracking-widest">
                  — Dr. Aris Thorne, CTO at Apex Industries
                </p>
              </Reveal>
            </div>

            <div className="relative h-[50vh] lg:h-auto overflow-hidden border-t lg:border-t-0 lg:border-l border-[#1A365D]">
              <img 
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop" 
                alt="Detailed plans and blueprints" 
                className="w-full h-full object-cover grayscale sepia-[.2] hue-rotate-180 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0"
              />
            </div>
          </section>

          {/* CTA SECTION */}
          <section id="vision" className="relative p-12 lg:p-32 text-left border-b border-[#1A365D]">
            <div className="absolute top-6 left-6 text-[0.7rem] uppercase tracking-widest border border-[#1A365D] px-2 py-1 rounded-[2px]">
              Fig 3.0 — Next Steps
            </div>
            
            <Reveal>
              <a 
                href="#" 
                className="group flex items-center justify-between w-full max-w-[600px] py-8 border-t border-b border-[#1A365D] font-display text-[2rem] lg:text-[3rem] text-[#1A365D] no-underline transition-all duration-400 ease-in-out hover:px-8 hover:bg-[#1A365D] hover:text-[#E8E2D6] cursor-pointer bg-transparent"
              >
                <span>Draft Your Vision</span>
                <span className="text-[1.5rem] font-tech opacity-0 -translate-x-5 transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
                  <LuArrowRight />
                </span>
              </a>
            </Reveal>
          </section>

          {/* FOOTER */}
          <footer className="p-6 flex justify-between border-t border-[#1A365D] text-[0.8rem] uppercase font-tech">
            <span> 2024 Structura Inc.</span>
            <span className="hidden sm:inline">Privacy Protocol</span>
            <span>System Status: Optimal</span>
          </footer>

        </main>
      </div>
    </div>
  );
};

export default Index;
