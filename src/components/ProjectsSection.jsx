import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';
import { CreditRiskSimulator, FarmerAssistantSimulator } from './ProjectPlaygrounds';
import { ExternalLink, BookOpen, Sparkles, Sliders } from 'lucide-react';

export default function ProjectsSection({ onOpenCaseStudy }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeSimulator, setActiveSimulator] = useState(null); // 'credit' | 'farmer' | null

  const filterCategories = [
    { id: 'ALL', label: 'ALL WORK (05)' },
    { id: 'AI', label: 'AI & PROMPT ENG (02)' },
    { id: 'DATA', label: 'FINTECH & ML (01)' },
    { id: 'CIVIC', label: 'FULLSTACK & CIVIC (02)' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI') return p.category === 'AI';
    if (activeFilter === 'DATA') return p.category === 'DATA';
    if (activeFilter === 'CIVIC') return p.category === 'CIVIC' || p.category === 'FULLSTACK';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap pb-6 border-b border-white/10">
          <div className="flex items-end gap-4 md:gap-6">
            <span className="mono-label text-[#FF3B30] text-sm md:text-base font-bold">// 03</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight">
              Projects<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <span className="mono-label text-white/50 text-xs md:text-sm">/ selected systems & software</span>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 pt-8 pb-6 border-b border-white/10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setActiveFilter(cat.id);
              }}
              className={`font-mono text-xs px-3.5 py-1.5 border transition-all ${
                activeFilter === cat.id
                  ? 'border-[#FF3B30] bg-[#FF3B30] text-black font-bold shadow-[0_0_15px_rgba(255,59,48,0.3)]'
                  : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div className="divide-y divide-white/10">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="group py-12 md:py-16 grid grid-cols-12 gap-8 items-center hover:bg-white/[0.015] transition-colors px-2 md:px-4"
              >
                {/* Visual Image Block */}
                <div
                  className={`col-span-12 lg:col-span-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border border-white/20 bg-[#0A0A0A] hud-corner shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Corner Tag */}
                    <div className="absolute top-3 left-3 mono-label bg-[#050505]/85 backdrop-blur px-2.5 py-1 border border-white/20 text-[10px]">
                      // {project.tone}
                    </div>

                    <div className="absolute bottom-3 right-3 mono-label bg-[#050505]/85 backdrop-blur px-2.5 py-1 border border-white/20 text-[10px] text-white">
                      YEAR {project.year}
                    </div>
                  </div>
                </div>

                {/* Information Block */}
                <div
                  className={`col-span-12 lg:col-span-7 flex flex-col justify-between gap-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="mono-label text-[#FF3B30] font-bold">
                        [{project.index}]
                      </span>
                      <span className="mono-label text-white/50">
                        / {project.tagline.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 font-mono text-xs md:text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] md:text-xs px-2.5 py-1 border border-white/15 bg-white/5 text-white uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="btn-brutal btn-brutal-accent text-xs py-2.5 px-4 flex items-center gap-2 group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Case Study</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                    </button>

                    {/* Interactive simulator toggle if available */}
                    {project.hasPlayground && (
                      <button
                        onClick={() => {
                          sound.playCyberOpen();
                          setActiveSimulator(
                            activeSimulator === project.hasPlayground ? null : project.hasPlayground
                          );
                        }}
                        className="btn-brutal btn-brutal-green text-xs py-2.5 px-4 flex items-center gap-2"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>
                          {activeSimulator === project.hasPlayground ? 'Hide Simulator' : 'Test Live Simulator ⚡'}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Inline Simulator Viewer */}
                  {activeSimulator === project.hasPlayground && (
                    <div className="mt-4 animate-fadeIn">
                      {project.hasPlayground === 'credit' && <CreditRiskSimulator />}
                      {project.hasPlayground === 'farmer' && <FarmerAssistantSimulator />}
                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
