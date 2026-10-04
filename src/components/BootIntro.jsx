import React, { useState, useEffect } from 'react';
import { sound } from '../utils/soundFx';

const bootLogs = [
  "> initializing portfolio.exe [v2.0]",
  "> loading security modules ... [ok]",
  "> mounting projects/ ........ [ok]",
  "> establishing secure channel [ok]",
  "> booting SYED_REHAN v2.0 .... [ready]"
];

export default function BootIntro({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    sound.playBeep(440, 0.05);

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowTitle(true);
          sound.playSuccess();
          setTimeout(() => {
            handleFinish();
          }, 1400);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    const logTimers = bootLogs.map((_, i) =>
      setTimeout(() => {
        setLogIndex(i + 1);
        sound.playClick();
      }, 200 + i * 280)
    );

    return () => {
      clearInterval(interval);
      logTimers.forEach(clearTimeout);
    };
  }, []);

  const handleFinish = () => {
    setIsDismissing(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050505] text-white overflow-hidden scanline transition-all duration-700 ${
        isDismissing ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(255,59,48,0.15), transparent 45%), radial-gradient(circle at 80% 90%, rgba(50,215,75,0.08), transparent 40%)'
        }}
      />

      {/* Outer Tech Frame Border */}
      <div className="absolute inset-4 md:inset-8 border border-white/10 pointer-events-none" />

      {/* Top Controls */}
      <div className="absolute top-6 md:top-10 left-6 md:left-10 flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-ping" />
        <span className="mono-label text-xs">SYSTEM BOOTING · 2026</span>
      </div>

      <button
        onClick={() => {
          sound.playClick();
          handleFinish();
        }}
        className="absolute top-6 md:top-10 right-6 md:right-10 mono-label text-xs text-white/60 hover:text-[#FF3B30] transition-colors z-20"
      >
        [ SKIP INTRO → ]
      </button>

      {/* Center Reveal */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center select-none">
          {showTitle ? (
            <div className="animate-fadeIn">
              <p className="mono-label text-[#FF3B30] mb-3 text-xs md:text-sm">
                // WELCOME_OPERATIVE
              </p>
              <h1 className="font-display font-black text-white text-[10vw] md:text-[7vw] leading-none uppercase">
                SYED REHAN'S
              </h1>
              <h2 className="font-display font-black text-[#FF3B30] text-[12vw] md:text-[8.5vw] leading-none uppercase mt-1">
                PORTFOLIO.
              </h2>
              <p className="mono-label text-white/70 mt-4 text-xs md:text-sm">
                cybersecurity · ai & prompt engineering · web development
              </p>
            </div>
          ) : (
            <p className="mono-label text-[#FF3B30] text-sm md:text-base flex items-center justify-center gap-2">
              <span>// COMPILING_EXPERIENCE</span>
              <span className="blinking-cursor" />
            </p>
          )}
        </div>
      </div>

      {/* Bottom Left Boot Logs */}
      <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 max-w-xs md:max-w-md space-y-1 font-mono text-[11px] md:text-xs text-[#A1A1AA] hidden sm:block">
        {bootLogs.slice(0, logIndex).map((log, idx) => (
          <div key={idx}>{log}</div>
        ))}
      </div>

      {/* Bottom Right Loading Progress */}
      <div className="absolute right-6 md:right-10 bottom-6 md:bottom-10 w-[200px] md:w-[260px]">
        <div className="flex items-center justify-between mono-label mb-2 text-xs">
          <span>LOADING</span>
          <span className="text-[#FF3B30] font-bold">
            {String(percent).padStart(3, '0')}%
          </span>
        </div>
        <div className="h-[2px] w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#FF3B30] transition-all duration-75 shadow-[0_0_8px_#FF3B30]"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
