import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';
import { ArrowUp, ShieldCheck, Film } from 'lucide-react';

export default function Footer({ onReplayIntro }) {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 md:py-16 bg-[#040404] text-white/70 border-t border-white/10 select-none">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* Top Tier */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#32D74B] animate-ping" />
            <span className="mono-label text-xs text-white font-bold">
              SYSTEM ONLINE // 2026
            </span>
            <span className="hidden sm:inline font-mono text-xs text-white/30">|</span>
            <span className="hidden sm:inline font-mono text-xs text-white/50">
              VEL TECH R&D · CHENNAI
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={() => {
                  sound.playClick();
                  onReplayIntro();
                }}
                className="mono-label hover:text-white flex items-center gap-1.5 border border-white/10 px-3 py-1.5 hover:border-white/30 transition-all text-xs"
              >
                <Film className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>REPLAY INTRO</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="mono-label hover:text-white flex items-center gap-1.5 border border-white/10 px-3 py-1.5 hover:border-white/30 transition-all text-xs"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF3B30]" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs">
          <div>
            <p className="text-white font-medium">
              SYED REHAN — CYBER SECURITY & AI ENGINEER
            </p>
            <p className="text-white/40 mt-1">
              Building intelligent, secure architectures from research to production.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors"
            >
              EMAIL ↗
            </a>
            <a
              href="/assets/syed-rehan-resume.pdf"
              download="syed-rehan-resume.pdf"
              className="text-[#FF3B30] hover:underline"
            >
              RESUME (.PDF) ↓
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-2 text-[11px] font-mono text-white/30">
          <span>© 2026 SYED REHAN · ALL RIGHTS RESERVED</span>
          <span>ARCHITECTED WITH SECURE REACT + TAILWIND + HUD ENGINE</span>
        </div>

      </div>
    </footer>
  );
}
