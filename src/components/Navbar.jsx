import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Command, Menu, X, ArrowDownToLine, Film } from 'lucide-react';
import { sound } from '../utils/soundFx';

export default function Navbar({ onOpenTerminal, onOpenCommandPalette, onOpenRecruiter, onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSoundToggle = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20 border-x border-white/10">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            sound.playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <span className="w-3 h-3 bg-[#FF3B30] block group-hover:rotate-45 transition-transform duration-300 shadow-[0_0_10px_#FF3B30]" />
          <span className="font-mono text-xs md:text-sm tracking-[0.24em] uppercase text-white font-bold">
            S.<span className="text-[#FF3B30]">R</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#A1A1AA] border border-white/10 px-2 py-0.5 ml-1">
            CYBER // AI
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="mono-label hover:text-white transition-colors group flex items-center"
            >
              <span className="text-[#52525B] mr-1 group-hover:text-[#FF3B30] transition-colors">/</span>
              {item.label}
            </button>
          ))}

          {/* Resume link */}
          <a
            href="/assets/syed-rehan-resume.pdf"
            download="syed-rehan-resume.pdf"
            onClick={() => sound.playClick()}
            className="mono-label hover:text-white transition-colors flex items-center gap-1 group text-white/80"
          >
            <span className="text-[#52525B] mr-1 group-hover:text-[#FF3B30] transition-colors">/</span>
            Resume
            <ArrowDownToLine className="w-3 h-3 text-[#FF3B30] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </nav>

        {/* Quick Utilities: Sound, Command Palette, Terminal, Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={isMuted ? 'Unmute procedural sound FX' : 'Mute sound FX'}
            className="p-2 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#A1A1AA]" /> : <Volume2 className="w-4 h-4 text-[#32D74B]" />}
          </button>

          {/* Replay Cinematic Intro */}
          {onReplayIntro && (
            <button
              onClick={() => {
                sound.playClick();
                onReplayIntro();
              }}
              title="Replay Cinematic Intro"
              className="p-2 border border-white/10 text-white/70 hover:text-[#FF3B30] hover:border-white/30 transition-colors hidden md:block"
            >
              <Film className="w-4 h-4" />
            </button>
          )}

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandPalette();
            }}
            title="Open Command Palette (Ctrl+K)"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 border border-white/15 text-white/80 hover:border-white/40 hover:text-white transition-all text-xs font-mono"
          >
            <Command className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span className="text-[11px] text-[#A1A1AA]">Ctrl+K</span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              sound.playCyberOpen();
              onOpenTerminal();
            }}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#32D74B]/40 text-[#32D74B] hover:bg-[#32D74B] hover:text-black transition-all text-xs font-mono font-medium"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>

          {/* Recruiter Fast-Track Dossier Button */}
          <button
            onClick={() => {
              sound.playSuccess();
              if (onOpenRecruiter) onOpenRecruiter();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[#FFD60A] bg-[#FFD60A]/10 text-[#FFD60A] hover:bg-[#FFD60A] hover:text-black transition-all text-xs font-mono font-bold shadow-[0_0_15px_rgba(255,214,10,0.15)] group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] group-hover:bg-black animate-ping" />
            <span>⚡ RECRUITER TL;DR</span>
          </button>

          {/* Contact Direct CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hidden md:inline-flex btn-brutal btn-brutal-accent text-xs py-2 px-3.5"
          >
            Get in touch
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-white/80 hover:text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF3B30]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 transition-all">
          <div className="flex flex-col p-6 gap-4 border-x border-white/10 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="mono-label text-left text-sm py-2 hover:text-[#FF3B30] flex items-center justify-between border-b border-white/5"
              >
                <span>// {item.label.toUpperCase()}</span>
                <span className="text-white/40">→</span>
              </button>
            ))}
            {onReplayIntro && (
              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="mono-label text-left text-sm py-2 hover:text-[#FF3B30] flex items-center justify-between border-b border-white/5 w-full text-white/80"
              >
                <span>// 🎬 REPLAY CINEMATIC INTRO</span>
                <Film className="w-4 h-4 text-[#FF3B30]" />
              </button>
            )}
            <a
              href="/assets/syed-rehan-resume.pdf"
              download="syed-rehan-resume.pdf"
              onClick={() => sound.playClick()}
              className="mono-label text-left text-sm py-2 hover:text-[#FF3B30] flex items-center justify-between border-b border-white/5"
            >
              <span>// DOWNLOAD RESUME</span>
              <ArrowDownToLine className="w-4 h-4 text-[#FF3B30]" />
            </a>

            {/* Recruiter Mobile Trigger */}
            <button
              onClick={() => {
                sound.playSuccess();
                setMobileMenuOpen(false);
                if (onOpenRecruiter) onOpenRecruiter();
              }}
              className="mono-label text-left text-sm py-2.5 px-3 border border-[#FFD60A] bg-[#FFD60A]/10 text-[#FFD60A] flex items-center justify-between font-bold"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD60A] animate-ping" />
                // ⚡ RECRUITER TL;DR (8.5 CGPA)
              </span>
              <span>→</span>
            </button>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex-1 btn-brutal text-xs py-2.5"
              >
                Command Palette
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 btn-brutal btn-brutal-green text-xs py-2.5"
              >
                Launch CLI
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
