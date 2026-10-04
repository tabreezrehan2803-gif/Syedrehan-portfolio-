import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { X, ArrowDownToLine, Mail, Phone, CheckCircle2, ShieldCheck, Award, Zap, Copy, Check, Calendar, MapPin, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';

export default function RecruiterModal({ isOpen, onClose }) {
  const { profile, candidateValue } = portfolioData;
  const { goal, whatIBring } = candidateValue || {};
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showPillars, setShowPillars] = useState(false);

  useEffect(() => {
    if (isOpen) {
      sound.playCyberOpen();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.3 },
          colors: ['#FF3B30', '#32D74B', '#FFD60A', '#FFFFFF']
        });
      } catch {}
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text, type) => {
    sound.playSuccess();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl bg-[#090909] border-2 border-[#FFD60A] shadow-[0_0_40px_rgba(255,214,10,0.25)] text-white my-8 overflow-hidden hud-corner font-mono">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4 md:p-5 bg-[#111111]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD60A] animate-ping" />
            <span className="mono-label text-[#FFD60A] text-xs md:text-sm font-bold tracking-wider">
              EXECUTIVE CANDIDATE DOSSIER // RECRUITER TL;DR
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 border border-white/15 text-white/70 hover:text-[#FF3B30] hover:border-[#FF3B30] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Quick Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="mono-label text-[#32D74B] text-[11px] flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> AVAILABLE FOR INTERNSHIPS & CONTRACTS
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-white">
                Syed Mohmmed Tabreez Rehan
              </h2>
              <p className="font-mono text-xs text-[#A1A1AA] mt-1">
                B.Tech Cyber Security (3rd Year) · Vel Tech University · Chennai, India
              </p>
            </div>

            <a
              href="/assets/syed-rehan-resume.pdf"
              download="syed-rehan-resume.pdf"
              onClick={() => sound.playSuccess()}
              className="btn-brutal btn-brutal-accent text-xs py-2.5 px-4 flex items-center gap-2 whitespace-nowrap shadow-[0_0_15px_rgba(255,59,48,0.3)]"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>
          </div>

          {/* Candidate Philosophy Quote */}
          <div className="p-3.5 bg-gradient-to-r from-[#FFD60A]/15 via-[#FF3B30]/10 to-transparent border-l-4 border-[#FFD60A] text-white">
            <span className="mono-label text-[10px] text-[#FFD60A] font-bold block mb-1">
              // VALUE-CREATION MINDSET
            </span>
            <p className="font-mono text-xs text-white/95 italic leading-relaxed">
              “I don’t want to simply be a candidate who knows technologies —{' '}
              <span className="text-[#FFD60A] font-bold not-italic">
                I want to be the candidate who understands the problem, builds the solution, and creates business value
              </span>
              .”
            </p>
          </div>

          {/* Key Recruiter Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="border border-white/10 bg-white/[0.02] p-3">
              <span className="mono-label text-[10px] text-white/50 block mb-0.5">ACADEMIC CGPA</span>
              <span className="font-display font-bold text-2xl text-[#32D74B]">8.5 / 10</span>
              <span className="font-mono text-[10px] text-[#A1A1AA] block mt-0.5">Vel Tech R&D</span>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-3">
              <span className="mono-label text-[10px] text-white/50 block mb-0.5">NPTEL ELITE GOLD</span>
              <span className="font-display font-bold text-2xl text-[#FFD60A]">90%</span>
              <span className="font-mono text-[10px] text-[#A1A1AA] block mt-0.5">Top of 23,139</span>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-3">
              <span className="mono-label text-[10px] text-white/50 block mb-0.5">CYBER SKILLING</span>
              <span className="font-display font-bold text-2xl text-white">180h+</span>
              <span className="font-mono text-[10px] text-[#A1A1AA] block mt-0.5">Reliance Academy</span>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-3">
              <span className="mono-label text-[10px] text-white/50 block mb-0.5">AI APPS SHIPPED</span>
              <span className="font-display font-bold text-2xl text-[#FF3B30]">05+</span>
              <span className="font-mono text-[10px] text-[#A1A1AA] block mt-0.5">Production Grade</span>
            </div>
          </div>

          {/* 3 Core Value Props for Engineering Managers */}
          <div className="space-y-3 pt-2">
            <h4 className="mono-label text-[#FFD60A] text-xs flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> CORE STRENGTHS // ENGINEERING VALUE PROPOSITIONS
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="border border-white/10 p-3.5 bg-[#0C0C0C]">
                <span className="text-[#32D74B] font-bold block mb-1">01 · Security-First Engineering</span>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Focuses on OWASP Top 10 defenses, parameterized sanitization, and prompt delimiter sandboxing to prevent real-world exploits and LLM jailbreaks.
                </p>
              </div>

              <div className="border border-white/10 p-3.5 bg-[#0C0C0C]">
                <span className="text-[#FFD60A] font-bold block mb-1">02 · Enterprise AI Certified</span>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Certified by Oracle in Agentic AI Foundations, IBM in Artificial Intelligence, and AICTE 1-month intensive generative AI internship.
                </p>
              </div>

              <div className="border border-white/10 p-3.5 bg-[#0C0C0C]">
                <span className="text-[#FF3B30] font-bold block mb-1">03 · Proven Delivery Track Record</span>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Shipped 5 web and AI apps with tangible engineering outcomes (e.g., 40% conversational turn reduction and explainable credit risk scores).
                </p>
              </div>
            </div>
          </div>

          {/* What I Bring (10 Core Pillars) Expander */}
          <div className="border border-white/10 bg-[#0C0C0C] p-4">
            <button
              onClick={() => {
                sound.playClick();
                setShowPillars(!showPillars);
              }}
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-2">
                <span className="mono-label text-[#32D74B] text-xs font-bold">
                  // WHAT I BRING
                </span>
                <span className="text-white text-xs font-bold group-hover:text-[#32D74B] transition-colors">
                  10 Core Attributes & Capabilities
                </span>
              </div>
              <span className="mono-label text-xs text-white/50 flex items-center gap-1 group-hover:text-white">
                {showPillars ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                <span>{showPillars ? 'Hide Details' : 'Expand All 10'}</span>
              </span>
            </button>

            {showPillars && (
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5 animate-fadeIn">
                {whatIBring?.map((item) => (
                  <div key={item.num} className="p-2.5 bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="mono-label text-[#FF3B30] text-[10px] font-bold">{item.num}</span>
                      <span className="text-white font-bold">{item.title}</span>
                      <span className="mono-label text-[9px] px-1.5 py-0.5 border border-white/10 text-white/40 ml-auto">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[#A1A1AA] text-[11px] leading-relaxed">
                      — {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hiring Logistics */}
          <div className="border border-white/10 p-4 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="mono-label text-white/50 text-[10px] block mb-0.5">TARGET ROLES</span>
              <span className="text-white font-medium">
                Cyber Security · AI &amp; Prompt Eng · Web Developer · Business Analyst · Product &amp; Project Management
              </span>
            </div>

            <div>
              <span className="mono-label text-white/50 text-[10px] block mb-0.5">LOCATION PREFERENCE</span>
              <span className="text-white font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF3B30]" /> Hyderabad · Bangalore · Chennai (Open to Remote / Relocation)
              </span>
            </div>

            <div>
              <span className="mono-label text-white/50 text-[10px] block mb-0.5">START DATE</span>
              <span className="text-[#32D74B] font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Immediate / Summer 2026
              </span>
            </div>
          </div>

          {/* Direct 1-Click Contact Channels */}
          <div className="border-t border-white/10 pt-5">
            <span className="mono-label text-white/50 text-xs block mb-3">// FAST-TRACK CONTACT</span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Email */}
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="border border-white/15 p-3 text-left hover:border-white/40 bg-white/5 transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="mono-label text-[10px] text-white/40 block">EMAIL DIRECTLY</span>
                  <span className="font-mono text-xs text-white group-hover:text-[#FF3B30] truncate block">
                    {profile.email}
                  </span>
                </div>
                {copiedEmail ? <Check className="w-4 h-4 text-[#32D74B]" /> : <Copy className="w-4 h-4 text-white/40" />}
              </button>

              {/* Phone */}
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="border border-white/15 p-3 text-left hover:border-white/40 bg-white/5 transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="mono-label text-[10px] text-white/40 block">PHONE / WHATSAPP</span>
                  <span className="font-mono text-xs text-white group-hover:text-[#32D74B] truncate block">
                    {profile.phone}
                  </span>
                </div>
                {copiedPhone ? <Check className="w-4 h-4 text-[#32D74B]" /> : <Phone className="w-4 h-4 text-white/40" />}
              </button>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 p-3 text-left hover:border-white/40 bg-white/5 transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="mono-label text-[10px] text-white/40 block">LINKEDIN PROFILE</span>
                  <span className="font-mono text-xs text-white group-hover:text-[#FFD60A] truncate block">
                    www.linkedin.com/in/syed-rehan-85b25a377 ↗
                  </span>
                </div>
                <svg className="w-4 h-4 text-white/40 group-hover:text-[#FFD60A] transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
