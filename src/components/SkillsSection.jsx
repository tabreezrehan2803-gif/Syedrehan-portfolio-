import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, MapPin } from 'lucide-react';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap pb-6 border-b border-white/10">
          <div className="flex items-end gap-4 md:gap-6">
            <span className="mono-label text-[#FF3B30] text-sm md:text-base font-bold">// 04</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight">
              Skills<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <span className="mono-label text-white/50 text-xs md:text-sm">/ technical & business competencies</span>
        </div>

        {/* 6 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-12">
          {skillCategories.map((cat) => (
            <div
              key={cat.code}
              className="border border-white/10 bg-[#090909] p-6 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="mono-label text-[#FF3B30] font-bold">
                    // {cat.code}
                  </span>
                  <span className="font-mono text-xs text-white/40">
                    {cat.items.length} MODULES
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF3B30] transition-colors">
                  {cat.category}
                </h3>
                
                <p className="font-mono text-xs text-[#A1A1AA] mt-2 mb-5">
                  {cat.description}
                </p>

                {/* Skill Item Pills */}
                <div className="space-y-2.5">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between font-mono text-xs p-2 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors"
                    >
                      <span className="text-white/90">{item.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 border border-white/15 text-[#32D74B]">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Functional Value Delivery Banner */}
        <div className="border border-white/15 bg-[#090909] p-6 md:p-8 hud-corner flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="mono-label text-[#FF3B30] mb-2 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" /> // CROSS-FUNCTIONAL VALUE ARCHITECTURE
            </span>
            <h4 className="font-display font-bold text-xl md:text-2xl text-white">
              End-to-End Execution: From Business Need to Production System.
            </h4>
            <p className="font-mono text-xs md:text-sm text-[#A1A1AA] mt-2 leading-relaxed">
              Combining technical depth across Cyber Security and Web Development with Business Analysis, Agile Project Management, and Prompt Engineering to solve real problems and create measurable business value.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs px-3 py-1.5 border border-white/15 bg-white/5 text-white/90 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF3B30]" /> Hyderabad · Bangalore · Chennai
            </span>
            <span className="font-mono text-xs px-3 py-1.5 border border-[#32D74B]/30 bg-[#32D74B]/10 text-[#32D74B] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32D74B] animate-ping" /> Available for Roles
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
