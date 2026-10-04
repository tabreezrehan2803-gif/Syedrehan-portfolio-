import React, { useState, useEffect, useRef } from 'react';
import { sound } from '../utils/soundFx';
import { Shield, Sparkles, Volume2, VolumeX, FastForward, Terminal } from 'lucide-react';

export default function CinematicIntro({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: Decrypt, 1: Roles, 2: Climax Title, 3: Shutter Wipe Out
  const [percent, setPercent] = useState(0);
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [isDismissing, setIsDismissing] = useState(false);
  const hasFinishedRef = useRef(false);

  const finishIntro = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsDismissing(true);
    sound.playClick();
    setTimeout(() => {
      onComplete();
    }, 650);
  };

  useEffect(() => {
    // Attempt cinematic sound
    sound.playCinematicRiser();

    // Progress counter (0 to 100 in ~3.2 seconds)
    const startTime = Date.now();
    const duration = 3200;

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(pct);

      if (pct >= 100) {
        clearInterval(progressTimer);
      }
    }, 30);

    // Staged choreography
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 950);

    const timer2 = setTimeout(() => {
      setStage(2);
      sound.playCinematicBoom();
    }, 2050);

    const timer3 = setTimeout(() => {
      setStage(3);
      finishIntro();
    }, 3350);

    // Keyboard controls (Escape, Space, Enter to skip)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSoundToggle = (e) => {
    e.stopPropagation();
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playCinematicBoom();
    }
  };

  return (
    <div
      onClick={finishIntro}
      className={`fixed inset-0 z-[150] bg-[#050505] text-white select-none cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        isDismissing ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. TOP CINEMATIC LETTERBOX BAR */}
      <div
        className={`absolute top-0 left-0 right-0 h-12 md:h-16 bg-black/95 border-b border-white/10 z-30 flex items-center justify-between px-4 md:px-8 transition-transform duration-700 ease-in-out ${
          isDismissing ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-ping" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/80">
            [REC ● 23.976 FPS]
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-white/40 border-l border-white/15 pl-3">
            ASPECT: 2.39:1 CINEMASCOPE
          </span>
        </div>

        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleSoundToggle}
            className="flex items-center gap-1.5 font-mono text-[11px] text-white/60 hover:text-white px-2.5 py-1 border border-white/15 hover:border-white/30 transition-colors"
            title="Toggle procedural audio"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#32D74B]" />}
            <span className="hidden xs:inline">{isMuted ? 'UNMUTE' : 'AUDIO ON'}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              finishIntro();
            }}
            className="flex items-center gap-1.5 font-mono text-[11px] text-[#FF3B30] hover:text-white px-3 py-1 border border-[#FF3B30]/40 hover:border-white transition-colors bg-[#FF3B30]/10"
          >
            <span>SKIP INTRO</span>
            <FastForward className="w-3 h-3" />
            <span className="hidden sm:inline text-white/40 text-[10px]">[ESC]</span>
          </button>
        </div>
      </div>

      {/* 2. BOTTOM CINEMATIC LETTERBOX BAR */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-black/95 border-t border-white/10 z-30 flex items-center justify-between px-4 md:px-8 transition-transform duration-700 ease-in-out ${
          isDismissing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-white/60">
          <Terminal className="w-3.5 h-3.5 text-[#FF3B30]" />
          <span>OPERATIVE: SYED MOHMMED TABREEZ REHAN</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline text-white/50">VEL TECH · 8.5 CGPA</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] md:text-xs text-white/50 hidden sm:inline">
            LOC: HYD · BLR · CHENNAI
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#FF3B30] font-bold">
              {String(percent).padStart(3, '0')}%
            </span>
            <div className="w-20 md:w-28 h-1 bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#FF3B30] transition-all duration-75 shadow-[0_0_8px_#FF3B30]"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. ATMOSPHERIC VISUALS & RETICLES */}
      {/* Dynamic scanlines & radial glow */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 59, 48, 0.12) 0%, rgba(3, 105, 161, 0.08) 45%, rgba(0, 0, 0, 0.95) 80%)'
        }}
      />

      {/* Central Anamorphic Flare Line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF3B30]/70 to-transparent pointer-events-none opacity-80" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] bg-gradient-to-r from-transparent via-[#FF3B30]/20 to-transparent blur-sm pointer-events-none" />

      {/* Reticle Crosshairs */}
      <div className="absolute top-20 left-8 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">+ [13.0827° N, 80.2707° E]</div>
      <div className="absolute top-20 right-8 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">SYS_SEC_V2 +</div>
      <div className="absolute bottom-20 left-8 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">+ 4K UHD RAW</div>
      <div className="absolute bottom-20 right-8 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">SHUTTER: 180° +</div>

      {/* 4. MAIN CINEMATIC CHOREOGRAPHY STAGE */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        
        {/* STAGE 0: DECRYPTION TELEMETRY */}
        {stage === 0 && (
          <div className="animate-fadeIn max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 mono-label text-xs text-white/70">
              <Shield className="w-3.5 h-3.5 text-[#32D74B]" />
              <span>SECURITY PROTOCOL INITIALIZED</span>
            </div>
            <p className="font-mono text-xs md:text-sm text-white/60 tracking-wider">
              [ ACCESS GRANTED // CANDIDATE CLEARANCE VERIFIED ]
            </p>
            <div className="h-[2px] w-24 bg-[#FF3B30] mx-auto animate-pulse" />
          </div>
        )}

        {/* STAGE 1: MULTI-DISCIPLINARY ARCHITECTURE */}
        {stage === 1 && (
          <div className="animate-fadeIn max-w-4xl mx-auto space-y-5">
            <p className="mono-label text-[#FF3B30] tracking-[0.3em] uppercase text-xs md:text-sm">
              // ARCHITECTING INTELLIGENT SYSTEMS & DEFENSE
            </p>
            
            <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white tracking-wider uppercase leading-tight">
              SYED MOHMMED TABREEZ REHAN
            </h2>

            {/* 5 Core Pillars Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-2">
              <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/20 text-white">
                Cyber Security
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/20 text-white">
                AI &amp; Prompt Eng
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/20 text-white">
                Web Developer
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-[#FF3B30]/15 border border-[#FF3B30]/50 text-[#FF3B30] font-bold">
                Business Analyst
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-[#32D74B]/15 border border-[#32D74B]/50 text-[#32D74B] font-bold">
                Product &amp; PM
              </span>
            </div>
          </div>
        )}

        {/* STAGE 2: THE GRAND TITLE DROP */}
        {stage >= 2 && (
          <div className="animate-scaleIn max-w-5xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 mono-label text-xs text-[#FF3B30] tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO v2.0 // OFFICIAL RELEASE</span>
            </div>

            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.9] drop-shadow-[0_0_35px_rgba(255,59,48,0.35)]">
              SYED <span className="text-[#FF3B30]">REHAN.</span>
            </h1>

            <p className="font-mono text-xs md:text-sm text-white/80 tracking-[0.25em] uppercase pt-2">
              SECURING SYSTEMS · BUILDING INTELLIGENCE · DELIVERING MEASURABLE VALUE
            </p>

            <div className="pt-4 flex items-center justify-center gap-3 text-[11px] font-mono text-white/50">
              <span>CLICK ANYWHERE OR PRESS ESC TO ENTER</span>
              <span className="blinking-cursor" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
