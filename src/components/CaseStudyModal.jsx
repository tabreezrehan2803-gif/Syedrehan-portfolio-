import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle, AlertCircle, Lightbulb, Wrench } from 'lucide-react';
import { sound } from '../utils/soundFx';

export default function CaseStudyModal({ project, onClose, onSelectProject, allProjects }) {
  useEffect(() => {
    sound.playCyberOpen();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#080808] border border-white/20 shadow-2xl text-white my-8 overflow-hidden hud-corner">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 p-4 md:p-6 bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <span className="mono-label text-[#FF3B30] font-bold text-xs md:text-sm">
              // CASE_STUDY // PROJECT [{project.index}]
            </span>
            <span className="hidden sm:inline font-mono text-xs text-white/40">|</span>
            <span className="hidden sm:inline font-mono text-xs text-white/70">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="btn-brutal text-xs py-1.5 px-3 hover:border-[#FF3B30] hover:text-[#FF3B30]"
          >
            [ CLOSE ESC ]
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 max-h-[75vh] overflow-y-auto space-y-10">
          
          {/* Hero Banner inside modal */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10 py-3 mb-6 font-mono text-xs">
              <div className="border-r border-white/10 pr-4">
                <span className="mono-label text-white/40 block">ROLE</span>
                <span className="text-white font-medium">{project.role}</span>
              </div>
              <div className="border-r-0 md:border-r border-white/10 px-4">
                <span className="mono-label text-white/40 block">DURATION</span>
                <span className="text-white font-medium">{project.duration}</span>
              </div>
              <div className="border-r border-white/10 px-4 border-t md:border-t-0 pt-2 md:pt-0">
                <span className="mono-label text-white/40 block">YEAR</span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
              <div className="pl-4 border-t md:border-t-0 pt-2 md:pt-0">
                <span className="mono-label text-white/40 block">TONE</span>
                <span className="text-[#FF3B30] font-bold">{project.tone}</span>
              </div>
            </div>

            <h2 className="font-display font-black text-3xl md:text-5xl text-white">
              {project.title}
            </h2>
            <p className="font-mono text-base text-[#A1A1AA] mt-2">
              {project.tagline}
            </p>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2.5 py-1 border border-white/15 bg-white/5 text-white uppercase tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="border-l-2 border-[#FF3B30] pl-5 py-1">
            <h4 className="mono-label text-[#FF3B30] mb-2">// 01 · OVERVIEW</h4>
            <p className="font-mono text-sm md:text-base text-white/90 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
            
            {/* The Problem */}
            <div className="space-y-4">
              <h4 className="mono-label text-[#FF3B30] flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> // 02 · PROBLEM STATEMENT
              </h4>
              <ul className="space-y-3 font-mono text-xs md:text-sm text-[#A1A1AA]">
                {project.problem.map((prob, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-white/[0.02] p-3 border border-white/5">
                    <span className="text-[#FF3B30] font-bold">✕</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Engineering Approach */}
            <div className="space-y-4">
              <h4 className="mono-label text-[#32D74B] flex items-center gap-2">
                <Wrench className="w-4 h-4" /> // 03 · TECHNICAL APPROACH
              </h4>
              <ul className="space-y-3 font-mono text-xs md:text-sm text-white/80">
                {project.approach.map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-white/[0.02] p-3 border border-white/5">
                    <span className="text-[#32D74B] font-bold">✓</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Outcomes & Metrics */}
          <div className="border-t border-white/10 pt-8">
            <h4 className="mono-label text-[#FFD60A] mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> // 04 · IMPACT & RESULTS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.outcome.map((out, idx) => (
                <div key={idx} className="border border-white/10 p-4 bg-[#050505]">
                  <span className="mono-label text-[#FFD60A] text-[10px] block mb-2">
                    SIGNAL {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="font-mono text-xs md:text-sm text-white/90 leading-relaxed">
                    {out}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings Quote */}
          <div className="bg-[#050505] border border-white/15 p-6 md:p-8 relative">
            <div className="flex items-center gap-2 mono-label text-[#FF3B30] mb-3">
              <Lightbulb className="w-4 h-4" /> // 05 · ENGINEERING TAKEAWAY
            </div>
            <blockquote className="font-display text-lg md:text-2xl text-white font-medium leading-relaxed italic">
              "{project.learnings}"
            </blockquote>
          </div>

        </div>

        {/* Bottom Switcher */}
        <div className="flex items-center justify-between border-t border-white/10 p-4 md:p-6 bg-[#0E0E0E]">
          <button
            onClick={() => {
              sound.playClick();
              onSelectProject(prevProject);
            }}
            className="mono-label text-xs hover:text-[#FF3B30] flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PREV: {prevProject.title}</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onSelectProject(nextProject);
            }}
            className="mono-label text-xs hover:text-[#FF3B30] flex items-center gap-2"
          >
            <span>NEXT: {nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
