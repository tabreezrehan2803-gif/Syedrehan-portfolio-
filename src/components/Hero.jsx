import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Terminal, Shield, Sparkles, MapPin, Zap, Briefcase, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';

export default function Hero({ onOpenTerminal, onOpenRecruiter }) {
  const { profile } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const fullRole = profile.roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.slice(0, currentText.length + 1));
        if (currentText.length + 1 === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullRole.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % profile.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, profile.roles]);

  const scrollTo = (id) => {
    sound.playClick();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 scanline border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* HUD System Status Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 mb-8 md:mb-14">
          <div className="border-r border-white/10 py-3 md:py-4 px-3 md:px-4">
            <p className="mono-label mb-1 text-[11px] flex items-center gap-1.5 text-white/50">
              <MapPin className="w-3 h-3 text-[#FF3B30]" /> LOC
            </p>
            <p className="font-mono text-xs md:text-sm text-white font-medium">HYD · BLR · CHENNAI</p>
          </div>
          <div className="border-r-0 md:border-r border-white/10 py-3 md:py-4 px-3 md:px-4">
            <p className="mono-label mb-1 text-[11px] text-white/50">STATUS</p>
            <p className="font-mono text-xs md:text-sm text-[#32D74B] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#32D74B] animate-ping" />
              ONLINE · 2026
            </p>
          </div>
          <div className="border-r border-white/10 py-3 md:py-4 px-3 md:px-4 border-t md:border-t-0">
            <p className="mono-label mb-1 text-[11px] text-white/50">FOCUS</p>
            <p className="font-mono text-xs md:text-sm text-white font-medium">CYBER · AI · RAG</p>
          </div>
          <div className="py-3 md:py-4 px-3 md:px-4 border-t md:border-t-0">
            <p className="mono-label mb-1 text-[11px] text-white/50">YEAR / EDU</p>
            <p className="font-mono text-xs md:text-sm text-white font-medium">2026 / 3RD YR B.TECH</p>
          </div>
        </div>

        {/* System Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="mono-label text-[#FF3B30] font-semibold">// PORTFOLIO_v2.0 // ARCHITECTURE: SECURE</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="mono-label text-white/40 hidden sm:inline">VEL TECH R&D</span>
        </div>

        {/* Main Display Title */}
        <h1 className="font-display font-black text-white text-[14vw] md:text-[10vw] lg:text-[8.5vw] tracking-tighter leading-[0.9] select-none uppercase">
          SYED <span className="text-[#FF3B30] hover:text-white transition-colors duration-300">REHAN.</span>
        </h1>

        {/* Recruiter Fast-Action Bar */}
        <div
          onClick={() => {
            sound.playSuccess();
            if (onOpenRecruiter) onOpenRecruiter();
          }}
          className="mt-6 md:mt-8 p-3.5 md:p-4 bg-gradient-to-r from-[#FFD60A]/15 via-[#FF3B30]/10 to-transparent border-2 border-[#FFD60A]/40 hover:border-[#FFD60A] transition-all cursor-pointer flex flex-wrap items-center justify-between gap-3 group hud-corner shadow-[0_0_25px_rgba(255,214,10,0.15)]"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-1 bg-[#FFD60A] text-black font-mono font-black text-[11px] tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_10px_#FFD60A]">
              <span className="w-2 h-2 rounded-full bg-black animate-ping" />
              ⚡ FOR RECRUITERS & HIRING MANAGERS
            </span>
            <p className="font-mono text-xs md:text-sm text-white/90">
              <span className="text-[#32D74B] font-bold">8.5 CGPA</span> · 
              <span className="text-[#FFD60A] font-bold"> NPTEL Elite 90% Gold</span> · 
              <span className="text-white font-bold"> Oracle Agentic AI</span> · 
              <span className="text-[#FF3B30] font-bold"> Reliance 180h Cyber</span>
            </p>
          </div>
          <span className="mono-label text-xs text-[#FFD60A] group-hover:translate-x-1.5 transition-transform flex items-center gap-1.5 font-bold">
            <span>View Executive Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hero Content 3-Column Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Portrait Photo with High-Tech Frame */}
          <div className="col-span-12 md:col-span-4 order-2 md:order-1">
            <div className="relative border border-white/20 aspect-square overflow-hidden bg-[#0A0A0A] group hud-corner shadow-2xl">
              <img
                src={profile.photo}
                alt="Syed Rehan portrait"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Badges on photo */}
              <div className="absolute top-3 left-3 flex items-center gap-2 mono-label bg-[#050505]/85 backdrop-blur px-2.5 py-1 border border-white/20 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse" />
                <span>OPERATIVE // ONLINE</span>
              </div>
              <div className="absolute bottom-3 right-3 mono-label bg-[#050505]/85 backdrop-blur px-2.5 py-1 border border-white/20 text-[10px]">
                ID // SR-01
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-[10px] text-white/80">
                VEL TECH · 8.5 CGPA
              </div>
            </div>
          </div>

          {/* Typing Roles & Summary */}
          <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex flex-col justify-center">
            <div className="border border-white/10 p-5 md:p-6 bg-[#0B0B0B]/60 backdrop-blur">
              <p className="mono-label mb-2 text-[#FF3B30]">// ACTIVE_SPECIALIZATION</p>
              <div className="min-h-[2.5rem] flex items-center">
                <p className="font-mono text-xl md:text-2xl text-white font-bold blinking-cursor">
                  {currentText}
                </p>
              </div>
              
              <p className="mt-4 text-[#A1A1AA] font-mono text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4">
                {profile.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 bg-white/5 border border-white/15 text-white/80">
                  <Shield className="w-3 h-3 text-[#FF3B30]" /> Cyber Security
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 bg-white/5 border border-white/15 text-white/80">
                  <Sparkles className="w-3 h-3 text-[#32D74B]" /> Prompt Eng.
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 bg-white/5 border border-white/15 text-white/80">
                  <Terminal className="w-3 h-3 text-[#FFD60A]" /> Web Dev
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 bg-white/5 border border-white/15 text-white/80">
                  <Briefcase className="w-3 h-3 text-[#38BDF8]" /> Business Analyst
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 bg-white/5 border border-white/15 text-white/80">
                  <Layers className="w-3 h-3 text-[#A78BFA]" /> Product & PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="col-span-12 md:col-span-3 order-3 flex flex-col gap-3">
            <button
              onClick={() => {
                sound.playSuccess();
                if (onOpenRecruiter) onOpenRecruiter();
              }}
              className="btn-brutal w-full justify-between py-3.5 group border-2 border-[#FFD60A] bg-[#FFD60A]/15 text-[#FFD60A] hover:bg-[#FFD60A] hover:text-black shadow-[0_0_20px_rgba(255,214,10,0.25)]"
            >
              <span className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFD60A] group-hover:bg-black animate-ping" />
                ⚡ Recruiter TL;DR (8.5 CGPA)
              </span>
              <span className="text-xs font-mono font-bold">DOSSIER ↗</span>
            </button>

            <button
              onClick={() => scrollTo('projects')}
              className="btn-brutal btn-brutal-accent w-full justify-between py-3.5 group"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={profile.resumeUrl}
              download="syed-rehan-resume.pdf"
              onClick={() => sound.playSuccess()}
              className="btn-brutal w-full justify-between py-3.5 group"
            >
              <span>Download Resume</span>
              <ArrowDown className="w-4 h-4 text-[#FF3B30] group-hover:translate-y-1 transition-transform" />
            </a>

            <button
              onClick={() => {
                sound.playCyberOpen();
                onOpenTerminal();
              }}
              className="btn-brutal btn-brutal-green w-full justify-between py-3.5 group"
            >
              <span>Launch Terminal CLI</span>
              <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="btn-brutal w-full justify-between py-3 text-xs opacity-80 hover:opacity-100"
            >
              <span>Start a conversation</span>
              <span>↳</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
