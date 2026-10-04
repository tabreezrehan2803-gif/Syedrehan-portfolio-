import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';
import {
  GraduationCap,
  Award,
  Compass,
  Globe,
  CheckCircle2,
  Zap,
  ArrowRight,
  ArrowDownToLine,
  ShieldCheck,
  Target,
  Layers,
  Cpu,
  BarChart3,
  Cog,
  Lock,
  Users,
  BookOpen,
  Quote
} from 'lucide-react';

export default function AboutSection({ onOpenRecruiter }) {
  const { profile, stats, competencies, candidateValue } = portfolioData;
  const { goal, whatIBring } = candidateValue || {};

  const pillarIcons = {
    "01": <ShieldCheck className="w-4 h-4 text-[#FF3B30]" />,
    "02": <Target className="w-4 h-4 text-[#FFD60A]" />,
    "03": <Cpu className="w-4 h-4 text-[#32D74B]" />,
    "04": <BarChart3 className="w-4 h-4 text-[#38BDF8]" />,
    "05": <Cog className="w-4 h-4 text-[#A78BFA]" />,
    "06": <Lock className="w-4 h-4 text-[#FF3B30]" />,
    "07": <Layers className="w-4 h-4 text-[#F472B6]" />,
    "08": <Zap className="w-4 h-4 text-[#FFD60A]" />,
    "09": <Users className="w-4 h-4 text-[#34D399]" />,
    "10": <BookOpen className="w-4 h-4 text-[#60A5FA]" />
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap pb-6 border-b border-white/10">
          <div className="flex items-end gap-4 md:gap-6">
            <span className="mono-label text-[#FF3B30] text-sm md:text-base font-bold">// 02</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight">
              About<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <span className="mono-label text-white/50 text-xs md:text-sm">/ background & intent</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-12 gap-0 border-t border-white/10 mt-10 md:mt-12">
          
          {/* Left Column: Big Philosophy & Bio */}
          <div className="col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10">
            <p className="mono-label mb-4 text-[#FF3B30]">// BIO_01 // THE MANIFESTO</p>
            
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-tight font-medium">
              I build <span className="text-[#FF3B30] font-bold">AI-powered</span> systems and <span className="italic underline decoration-[#32D74B] underline-offset-4">secure</span> software — from prompt-engineered conversational agents to predictive credit-risk engines.
            </p>

            <p className="mt-6 font-mono text-sm md:text-base text-[#A1A1AA] leading-relaxed">
              {profile.summary}
            </p>

            {/* Objective Banner */}
            <div className="mt-8 p-5 bg-[#0C0C0C] border-l-2 border-[#FF3B30] border-y border-r border-white/10">
              <p className="mono-label text-[#FF3B30] mb-2 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" /> // OBJECTIVE & AVAILABILITY
              </p>
              <p className="font-mono text-xs md:text-sm text-white/90 leading-relaxed">
                "{profile.objective}"
              </p>
            </div>

            {/* Educational & Academic Specs Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 border-t border-white/10">
              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <p className="mono-label mb-1 text-[11px] text-white/40 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FF3B30]" /> DEGREE & YEAR
                </p>
                <p className="font-mono text-sm text-white font-medium">{profile.degree}</p>
                <p className="font-mono text-xs text-[#A1A1AA] mt-0.5">{profile.year}</p>
              </div>

              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <p className="mono-label mb-1 text-[11px] text-white/40 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#32D74B]" /> INSTITUTION
                </p>
                <p className="font-mono text-sm text-white font-medium">{profile.university}</p>
                <p className="font-mono text-xs text-[#A1A1AA] mt-0.5">Chennai, Tamil Nadu</p>
              </div>

              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <p className="mono-label mb-1 text-[11px] text-white/40">CGPA</p>
                <p className="font-mono text-sm text-[#32D74B] font-bold">{profile.cgpa}</p>
                <p className="font-mono text-xs text-[#A1A1AA] mt-0.5">Graduating {profile.graduation}</p>
              </div>

              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <p className="mono-label mb-1 text-[11px] text-white/40 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#FFD60A]" /> LANGUAGES
                </p>
                <p className="font-mono text-sm text-white font-medium">{profile.languages.join(' · ')}</p>
                <p className="font-mono text-xs text-[#A1A1AA] mt-0.5">Multilingual Proficiency</p>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Competencies */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
            {/* 4 Big Numbers Grid */}
            <div className="grid grid-cols-2">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors ${
                    idx % 2 === 0 ? 'border-r' : ''
                  }`}
                >
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mono-label mt-2 text-[#FF3B30] font-semibold">{stat.label}</p>
                  <p className="font-mono text-xs text-[#A1A1AA] mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>

            {/* Core Competencies Matrix */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-[#090909]">
              <p className="mono-label mb-4 text-[#A1A1AA]">// CORE_COMPETENCIES</p>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp) => (
                  <span
                    key={comp}
                    onMouseEnter={() => sound.playClick()}
                    className="font-mono text-xs px-3 py-1.5 border border-white/15 bg-white/5 text-white hover:border-[#FF3B30] hover:text-[#FF3B30] hover:bg-[#FF3B30]/10 transition-all cursor-default flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#32D74B]" />
                    {comp}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Strategic Goal & Business Value Manifesto */}
        <div className="mt-12 border-2 border-white/15 bg-gradient-to-br from-[#121212] via-[#090909] to-[#050505] p-6 md:p-10 hud-corner relative overflow-hidden shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF3B30]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD60A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#32D74B] animate-pulse" />
                <span className="mono-label text-[#32D74B] text-xs font-bold tracking-widest uppercase">
                  // STRATEGIC VISION & CORE GOAL
                </span>
              </div>
              <span className="mono-label text-white/40 text-[11px]">
                BUSINESS IMPACT + ENGINEERING VALUE
              </span>
            </div>

            {/* Standout Manifesto Quote */}
            <blockquote className="my-6 md:my-8 pl-5 md:pl-7 border-l-4 border-[#FFD60A] bg-white/[0.015] py-4 pr-4">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#FFD60A] shrink-0 mt-1 opacity-80" />
                <p className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white leading-snug tracking-tight">
                  “I don’t want to simply be a candidate who knows technologies —{' '}
                  <span className="text-[#FFD60A] underline decoration-[#FFD60A]/40 underline-offset-4">
                    I want to be the candidate who understands the problem, builds the solution, and creates business value
                  </span>
                  .”
                </p>
              </div>
            </blockquote>

            {/* Two Goal Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 md:p-5 bg-white/[0.02] border border-white/10 flex items-start gap-3.5 hover:border-white/20 transition-colors">
                <span className="p-2 border border-[#FF3B30]/40 bg-[#FF3B30]/10 text-[#FF3B30] mt-0.5 shrink-0">
                  <Target className="w-4 h-4" />
                </span>
                <div>
                  <span className="mono-label text-[11px] text-[#FF3B30] font-bold block mb-1">
                    WHERE I DELIVER IMPACT
                  </span>
                  <p className="font-mono text-xs md:text-sm text-[#D4D4D8] leading-relaxed">
                    {goal?.opportunity}
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-5 bg-white/[0.02] border border-white/10 flex items-start gap-3.5 hover:border-white/20 transition-colors">
                <span className="p-2 border border-[#32D74B]/40 bg-[#32D74B]/10 text-[#32D74B] mt-0.5 shrink-0">
                  <Compass className="w-4 h-4" />
                </span>
                <div>
                  <span className="mono-label text-[11px] text-[#32D74B] font-bold block mb-1">
                    PROFESSIONAL TRAJECTORY
                  </span>
                  <p className="font-mono text-xs md:text-sm text-[#D4D4D8] leading-relaxed">
                    {goal?.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Bring // 10 Value Pillars */}
        <div className="mt-12 border border-white/10 bg-[#0A0A0A] p-6 md:p-8 hud-corner">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="mono-label text-[#FF3B30] text-xs font-bold block mb-1">
                // CAPABILITY ARCHITECTURE
              </span>
              <h3 className="font-display font-bold text-2xl md:text-4xl text-white">
                What I Bring<span className="text-[#FF3B30]">.</span>
              </h3>
            </div>
            <p className="font-mono text-xs text-[#A1A1AA] max-w-md">
              10 core attributes combining technical depth, defensive security instinct, and business-focused problem solving.
            </p>
          </div>

          {/* 10-Point Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {whatIBring?.map((item) => (
              <div
                key={item.num}
                onMouseEnter={() => sound.playClick()}
                className="border border-white/10 hover:border-white/30 bg-[#060606] hover:bg-[#0E0E0E] p-5 transition-all duration-200 group hud-corner flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="mono-label text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                        // {item.num}
                      </span>
                      <span className="mono-label text-[10px] px-2 py-0.5 border border-white/10 bg-white/5 text-white/70">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-1.5 border border-white/10 bg-white/[0.03]">
                      {pillarIcons[item.num]}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm md:text-base font-bold text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h4>

                  <p className="mt-2 font-mono text-xs md:text-sm text-[#A1A1AA] leading-relaxed">
                    — {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights // Engineering Manager & Recruiter Cheat Sheet */}
        <div className="mt-12 border-2 border-[#FFD60A]/40 bg-gradient-to-b from-[#101010] to-[#070707] p-6 md:p-8 hud-corner shadow-[0_0_30px_rgba(255,214,10,0.1)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="mono-label text-[#FFD60A] text-xs font-bold flex items-center gap-2 mb-1">
                <Zap className="w-3.5 h-3.5" /> // CANDIDATE HIGHLIGHTS & DIFFERENTIATORS
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                Technical Highlights <span className="text-[#FFD60A]">& Key Differentiators.</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  sound.playSuccess();
                  if (onOpenRecruiter) onOpenRecruiter();
                }}
                className="btn-brutal text-xs py-2 px-3.5 border-[#FFD60A] bg-[#FFD60A]/10 text-[#FFD60A] hover:bg-[#FFD60A] hover:text-black flex items-center gap-1.5 font-bold"
              >
                <span>⚡ Open Full Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={profile.resumeUrl}
                download="syed-rehan-resume.pdf"
                onClick={() => sound.playSuccess()}
                className="btn-brutal text-xs py-2 px-3.5 flex items-center gap-1.5"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>

          {/* 4 Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="border border-white/10 p-4 bg-white/[0.02] hover:border-[#32D74B]/50 transition-colors">
              <span className="mono-label text-[10px] text-[#32D74B] font-bold block mb-1">01 · ACADEMIC EXCELLENCE</span>
              <p className="font-mono text-base font-bold text-white mb-2">8.5 CGPA & NPTEL Gold</p>
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed">
                Ranked in the top 1% nationally with a 90% Elite Gold score in NPTEL HCI (IIT Madras & IIIT Delhi) alongside consistent high-distinction grades at Vel Tech.
              </p>
            </div>

            <div className="border border-white/10 p-4 bg-white/[0.02] hover:border-[#FFD60A]/50 transition-colors">
              <span className="mono-label text-[10px] text-[#FFD60A] font-bold block mb-1">02 · ENTERPRISE AI CERTIFIED</span>
              <p className="font-mono text-base font-bold text-white mb-2">Oracle & IBM Credentials</p>
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed">
                Certified Oracle Agentic AI Foundations Associate and IBM Artificial Intelligence graduate, equipped for modern agentic pipelines and structured schema enforcement.
              </p>
            </div>

            <div className="border border-white/10 p-4 bg-white/[0.02] hover:border-[#FF3B30]/50 transition-colors">
              <span className="mono-label text-[10px] text-[#FF3B30] font-bold block mb-1">03 · DEFENSE-IN-DEPTH</span>
              <p className="font-mono text-base font-bold text-white mb-2">180h Reliance Cyber Skilling</p>
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed">
                Built-in security instinct. Designs software with OWASP Top 10 mitigation, sanitized inputs, and sandboxed prompt delimiter isolation to stop prompt injection jailbreaks.
              </p>
            </div>

            <div className="border border-white/10 p-4 bg-white/[0.02] hover:border-white/40 transition-colors">
              <span className="mono-label text-[10px] text-white/60 font-bold block mb-1">04 · PROVEN VELOCITY</span>
              <p className="font-mono text-base font-bold text-white mb-2">5 Shipped Applications</p>
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed">
                High engineering velocity: built real-time fintech credit risk scoring, conversational travel planning, and multilingual crop triage from concept to deployment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
