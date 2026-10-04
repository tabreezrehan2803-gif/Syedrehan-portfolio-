import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Terminal as TerminalIcon, X, Send, Sparkles, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';
import { generateAIResponse } from '../utils/aiEngine';

export default function TerminalDrawer({ isOpen, onClose, onToggleMatrix }) {
  const { terminalResponses, aiFAQ, profile } = portfolioData;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '> initializing portfolio.exe [v2.0]' },
    { type: 'system', text: '> mounting projects/ ........ [ok]' },
    { type: 'system', text: '> establishing secure channel [ok]' },
    { type: 'system', text: '> booting SYED_REHAN v2.0 .... [ready]' },
    { type: 'output', text: 'Welcome to SYED_OS. Type "help" or ask SYED·AI a question below.' },
  ]);

  const [isThinking, setIsThinking] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      sound.playCyberOpen();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isThinking]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const raw = cmd.trim();
    if (!raw) return;

    sound.playClick();
    const clean = raw.toLowerCase();

    // Append user input to history
    const newHistory = [...history, { type: 'input', text: raw }];

    if (clean === 'clear' || clean === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (clean === 'matrix') {
      onToggleMatrix();
      newHistory.push({ type: 'output', text: 'Matrix visual mode toggled.' });
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    if (clean === 'sound') {
      const muted = sound.toggleMute();
      newHistory.push({ type: 'output', text: `Sound FX: ${muted ? 'MUTED' : 'ENABLED'}` });
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    if (clean === 'sudo hire' || clean === 'hire') {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF3B30', '#32D74B', '#FFD60A']
        });
      } catch {}
      sound.playSuccess();
      newHistory.push({
        type: 'output',
        text: `[SYSTEM_ALERT] HIRING INITIATIVE ENGAGED!
Syed Rehan is actively available for Cyber Security & AI internships.
Direct email: ${profile.email} | Phone: ${profile.phone}
Transmission channel confirmed.`
      });
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    // Direct terminal commands
    if (terminalResponses[clean]) {
      newHistory.push({ type: 'output', text: terminalResponses[clean] });
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    // AI Intent matching
    setIsThinking(true);
    setHistory(newHistory);
    setInputVal('');

    setTimeout(() => {
      sound.playBeep(900, 0.08);
      setIsThinking(false);

      const reply = generateAIResponse(raw, 'portfolio');
      setHistory((prev) => [...prev, { type: 'ai', text: reply }]);
    }, 350);
  };

  const handlePresetQuestion = (q) => {
    handleCommand(q);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 animate-fadeIn">
      {/* Terminal Window Box */}
      <div className="relative w-full max-w-4xl h-[88vh] sm:h-[80vh] bg-[#070707] border border-white/20 shadow-2xl flex flex-col overflow-hidden hud-corner font-mono text-xs md:text-sm">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-pulse" />
            <span className="mono-label text-white/90 font-bold">
              SYED_OS // CLI & AI_ASSISTANT v2.0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="mono-label text-[#32D74B] text-[10px] hidden sm:inline">
              ENCRYPTED CHANNEL
            </span>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1 border border-white/15 text-white/70 hover:text-white hover:border-[#FF3B30] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick AI Prompt Pills */}
        <div className="border-b border-white/10 px-4 py-2.5 bg-white/[0.02] flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <span className="mono-label text-white/40 text-[10px] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#FF3B30]" /> ASK AI:
          </span>
          {aiFAQ.map((faq, i) => (
            <button
              key={i}
              onClick={() => handlePresetQuestion(faq.q)}
              className="font-mono text-[11px] px-2.5 py-1 border border-white/10 text-white/75 hover:border-[#32D74B] hover:text-[#32D74B] transition-colors"
            >
              {faq.q}
            </button>
          ))}
        </div>

        {/* Terminal Console Output Scroll Area */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-3 font-mono leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.type === 'input' && (
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="text-[#FF3B30]">syed@terminal:~$</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === 'system' && (
                <div className="text-[#A1A1AA] text-xs">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-white/90 whitespace-pre-wrap pl-3 border-l-2 border-white/20 py-1 bg-white/[0.01]">
                  {item.text}
                </div>
              )}
              {item.type === 'ai' && (
                <div className="text-[#32D74B] whitespace-pre-wrap pl-3 border-l-2 border-[#32D74B] py-1 bg-[#32D74B]/5">
                  <span className="mono-label text-[#32D74B] text-[10px] block mb-1">
                    SYED · AI INTELLIGENCE:
                  </span>
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {isThinking && (
            <div className="text-[#32D74B] flex items-center gap-2">
              <span className="mono-label text-[11px]">AI IS PROCESSING</span>
              <span className="blinking-cursor" />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="border-t border-white/10 p-3 bg-[#0A0A0A] flex items-center gap-3"
        >
          <span className="text-[#32D74B] font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or ask anything about Syed's projects & skills..."
            className="flex-1 bg-transparent font-mono text-xs md:text-sm text-white placeholder-white/30 outline-none"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="mono-label px-3 py-1.5 border border-[#FF3B30] text-[#FF3B30] hover:bg-[#FF3B30] hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#FF3B30]"
          >
            EXEC ↵
          </button>
        </form>

      </div>
    </div>
  );
}
