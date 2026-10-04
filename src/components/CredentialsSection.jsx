import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';
import { Award, ShieldCheck, ArrowDownToLine, Eye, Calendar, Sparkles } from 'lucide-react';

export default function CredentialsSection({ onOpenCertificate }) {
  const { credentials } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'ALL CREDENTIALS' },
    { id: 'security', label: 'CYBERSECURITY' },
    { id: 'ai', label: 'AI & INTERNSHIPS' },
  ];

  const filteredCredentials = credentials.filter((c) => {
    if (activeFilter === 'ALL') return true;
    return c.category === activeFilter;
  });

  return (
    <section id="credentials" className="py-20 md:py-28 border-b border-white/10 bg-[#060606] relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap pb-6 border-b border-white/10">
          <div className="flex items-end gap-4 md:gap-6">
            <span className="mono-label text-[#FF3B30] text-sm md:text-base font-bold">// 05</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight">
              Credentials<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <span className="mono-label text-white/50 text-xs md:text-sm">/ verified certifications & awards</span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-8 pb-6 border-b border-white/10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sound.playClick();
                setActiveFilter(tab.id);
              }}
              className={`font-mono text-xs px-3.5 py-1.5 border transition-all ${
                activeFilter === tab.id
                  ? 'border-[#32D74B] bg-[#32D74B] text-black font-bold shadow-[0_0_15px_rgba(50,215,75,0.3)]'
                  : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {filteredCredentials.map((cred, idx) => {
            const hasVisual = Boolean(cred.image);

            return (
              <div
                key={cred.id}
                className="border border-white/10 bg-[#090909] p-6 hover:border-white/30 transition-all flex flex-col justify-between group hud-corner shadow-lg"
              >
                <div>
                  {/* Top line with code and verified badge */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="mono-label text-[#FF3B30] font-bold">
                      // CREDENTIAL [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="mono-label text-[#32D74B] text-[10px] flex items-center gap-1 border border-[#32D74B]/30 px-2 py-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  {/* Thumbnail Preview for verified docs */}
                  {hasVisual && (
                    <div
                      onClick={() => onOpenCertificate(cred)}
                      className="relative aspect-[16/10] mb-5 overflow-hidden border border-white/15 bg-black cursor-pointer group/img"
                    >
                      <img
                        src={cred.image}
                        alt={cred.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="btn-brutal text-xs py-2 px-3 bg-black/80">
                          <Eye className="w-3.5 h-3.5 text-[#32D74B]" />
                          <span>Inspect Full Certificate</span>
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[#32D74B] transition-colors">
                    {cred.name}
                  </h3>

                  <p className="font-mono text-xs text-[#32D74B] mt-1 font-medium">
                    {cred.issuer}
                  </p>

                  <div className="flex items-center gap-2 mt-3 font-mono text-[11px] text-white/50">
                    <Calendar className="w-3.5 h-3.5 text-[#FF3B30]" />
                    <span>{cred.date || cred.year}</span>
                    <span>·</span>
                    <span className="text-[#A1A1AA]">{cred.tag}</span>
                  </div>

                  {cred.description && (
                    <p className="font-mono text-xs text-[#A1A1AA] mt-3 leading-relaxed">
                      {cred.description}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                  {hasVisual ? (
                    <button
                      onClick={() => onOpenCertificate(cred)}
                      className="btn-brutal text-xs py-2 px-3 flex items-center gap-1.5 hover:border-[#32D74B] hover:text-[#32D74B]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential ↗</span>
                    </button>
                  ) : (
                    <span className="mono-label text-[10px] text-white/40">
                      ACADEMIC VERIFICATION
                    </span>
                  )}

                  {cred.pdfUrl && (
                    <a
                      href={cred.pdfUrl}
                      download
                      onClick={() => sound.playSuccess()}
                      className="mono-label text-xs text-white/70 hover:text-[#FF3B30] flex items-center gap-1 transition-colors"
                    >
                      <span>PDF DOC</span>
                      <ArrowDownToLine className="w-3.5 h-3.5 text-[#FF3B30]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Achievements Highlight Box */}
        <div className="mt-14 border border-white/15 p-6 md:p-10 bg-[#090909] flex items-center justify-between gap-6 flex-wrap hud-corner">
          <div className="max-w-2xl">
            <p className="mono-label text-[#FF3B30] mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" /> // VERIFIED_ACADEMIC_&_INDUSTRY_ACHIEVEMENTS
            </p>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-white">
              Official Industry & Government Authorized Skilling.
            </h3>
            <p className="font-mono text-xs md:text-sm text-[#A1A1AA] mt-3 leading-relaxed">
              Holder of NPTEL Elite Gold (90% score), Oracle Agentic AI Certified Foundations Associate, IBM AI, Reliance Foundation 180-hour Cyber Security, NASSCOM, and AICTE credentials.
            </p>
          </div>
          
          <span className="hidden md:block font-display text-7xl lg:text-9xl text-[#FF3B30] font-black select-none opacity-80 leading-none">
            *
          </span>
        </div>

      </div>
    </section>
  );
}
