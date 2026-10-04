import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, ArrowRight, ArrowDownToLine, BookOpen, Volume2, Shield, Mail, Zap, Film } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, onOpenCaseStudy, onOpenCertificate, onOpenRecruiter, onReplayIntro }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      sound.playClick();
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'act-recruiter',
      label: '⚡ Executive Candidate Dossier (8.5 CGPA · Recruiter Brief)',
      category: 'Recruiter',
      icon: <Zap className="w-4 h-4 text-[#FFD60A]" />,
      action: () => {
        onClose();
        if (onOpenRecruiter) onOpenRecruiter();
      }
    },
    {
      id: 'sec-about',
      label: 'Jump to About Section',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4 text-[#FF3B30]" />,
      action: () => {
        onClose();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-projects',
      label: 'Browse Shipped Projects',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4 text-[#FF3B30]" />,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-skills',
      label: 'Inspect Skills & Security Lab',
      category: 'Navigation',
      icon: <Shield className="w-4 h-4 text-[#32D74B]" />,
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-contact',
      label: 'Open Contact & Direct Channels',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-[#FFD60A]" />,
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'act-cli',
      label: 'Launch Terminal OS & AI Assistant',
      category: 'Tools',
      icon: <Terminal className="w-4 h-4 text-[#32D74B]" />,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'act-intro',
      label: '🎬 Replay Cinematic Intro Sequence',
      category: 'Experience',
      icon: <Film className="w-4 h-4 text-[#FF3B30]" />,
      action: () => {
        onClose();
        if (onReplayIntro) onReplayIntro();
      }
    },
    {
      id: 'act-resume',
      label: 'Download Resume (.pdf)',
      category: 'Documents',
      icon: <ArrowDownToLine className="w-4 h-4 text-[#FF3B30]" />,
      action: () => {
        onClose();
        sound.playSuccess();
        const a = document.createElement('a');
        a.href = '/assets/syed-rehan-resume.pdf';
        a.download = 'syed-rehan-resume.pdf';
        a.click();
      }
    },
    // Projects direct entries
    ...portfolioData.projects.map((proj) => ({
      id: `proj-${proj.id}`,
      label: `Case Study: ${proj.title} (${proj.tagline})`,
      category: 'Projects',
      icon: <BookOpen className="w-4 h-4 text-white/70" />,
      action: () => {
        onClose();
        onOpenCaseStudy(proj);
      }
    })),
    // Certificates direct entries
    ...portfolioData.credentials.map((cred) => ({
      id: `cred-${cred.id}`,
      label: `Certificate: ${cred.name} (${cred.issuer})`,
      category: 'Certifications',
      icon: <Shield className="w-4 h-4 text-[#32D74B]" />,
      action: () => {
        onClose();
        if (onOpenCertificate) onOpenCertificate(cred);
        else document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' });
      }
    }))
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-fadeIn"
    >
      <div className="w-full max-w-2xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden hud-corner">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-[#0E0E0E]">
          <Search className="w-5 h-5 text-[#FF3B30]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section to navigate..."
            className="flex-1 bg-transparent font-mono text-sm text-white placeholder-white/40 outline-none"
          />
          <span className="mono-label text-[10px] text-white/40 border border-white/10 px-2 py-0.5">
            ESC TO EXIT
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-white/5 p-2">
          {filtered.length === 0 ? (
            <div className="p-6 text-center font-mono text-xs text-white/40">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  item.action();
                }}
                className="w-full flex items-center justify-between p-3 hover:bg-white/5 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="p-1.5 border border-white/10 bg-white/5">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-mono text-xs md:text-sm text-white group-hover:text-[#FF3B30] transition-colors">
                      {item.label}
                    </p>
                    <span className="mono-label text-[10px] text-white/40">
                      {item.category}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/30 group-hover:text-white transition-colors">
                  ↵
                </span>
              </button>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
