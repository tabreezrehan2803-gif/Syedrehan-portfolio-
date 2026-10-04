import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function StatsMarquee() {
  const { marqueeKeywords } = portfolioData;

  return (
    <div className="overflow-hidden border-b border-white/10 bg-[#080808] py-3.5 select-none relative">
      <div className="flex w-max animate-marquee">
        {/* Render 3 copies for continuous loop */}
        {[...Array(3)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center gap-12 mr-12 whitespace-nowrap">
            {marqueeKeywords.map((keyword, i) => (
              <div key={`${arrayIndex}-${i}`} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] shadow-[0_0_8px_#FF3B30]" />
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors">
                  {keyword}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
