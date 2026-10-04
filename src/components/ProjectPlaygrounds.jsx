import React, { useState } from 'react';
import { Sliders, RefreshCw, CheckCircle, AlertTriangle, ArrowRight, Languages, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundFx';

// Interactive Credit Risk Engine Simulator
export function CreditRiskSimulator() {
  const [repaymentRatio, setRepaymentRatio] = useState(85);
  const [txVelocity, setTxVelocity] = useState(12);
  const [categoryDrift, setCategoryDrift] = useState(15);

  // Compute simulated risk score: 0 to 100 (higher = safer, lower = danger)
  const penalty = (100 - repaymentRatio) * 0.7 + (txVelocity > 25 ? (txVelocity - 25) * 1.5 : 0) + categoryDrift * 0.5;
  const score = Math.max(10, Math.min(99, Math.round(100 - penalty)));

  let riskTier = 'LOW RISK';
  let badgeColor = 'text-[#32D74B] border-[#32D74B]/40 bg-[#32D74B]/10';
  if (score < 55) {
    riskTier = 'CRITICAL ALERT';
    badgeColor = 'text-[#FF3B30] border-[#FF3B30]/40 bg-[#FF3B30]/10';
  } else if (score < 75) {
    riskTier = 'MODERATE DRIFT';
    badgeColor = 'text-[#FFD60A] border-[#FFD60A]/40 bg-[#FFD60A]/10';
  }

  return (
    <div className="border border-white/15 bg-[#0A0A0A] p-5 md:p-7">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div>
          <span className="mono-label text-[#FFD60A] flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> // INTERACTIVE SIMULATOR // PROJECT #03
          </span>
          <h4 className="font-display font-bold text-lg md:text-xl text-white mt-1">
            Dynamic Credit Risk Engine
          </h4>
        </div>
        <div className={`mono-label px-3 py-1 border text-xs font-bold ${badgeColor}`}>
          {riskTier}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between font-mono text-xs text-white/80 mb-1">
              <span>Rolling Repayment Ratio</span>
              <span className="text-[#FF3B30] font-bold">{repaymentRatio}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={repaymentRatio}
              onChange={(e) => {
                setRepaymentRatio(Number(e.target.value));
                sound.playClick();
              }}
              className="w-full accent-[#FF3B30] cursor-pointer bg-white/10 h-1.5"
            />
          </div>

          <div>
            <div className="flex justify-between font-mono text-xs text-white/80 mb-1">
              <span>Transaction Velocity (Monthly txns)</span>
              <span className="text-[#FFD60A] font-bold">{txVelocity} tx/mo</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={txVelocity}
              onChange={(e) => {
                setTxVelocity(Number(e.target.value));
                sound.playClick();
              }}
              className="w-full accent-[#FFD60A] cursor-pointer bg-white/10 h-1.5"
            />
          </div>

          <div>
            <div className="flex justify-between font-mono text-xs text-white/80 mb-1">
              <span>Category Drift Variance</span>
              <span className="text-[#32D74B] font-bold">{categoryDrift}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              value={categoryDrift}
              onChange={(e) => {
                setCategoryDrift(Number(e.target.value));
                sound.playClick();
              }}
              className="w-full accent-[#32D74B] cursor-pointer bg-white/10 h-1.5"
            />
          </div>
        </div>

        {/* Live Score & Explainability Output */}
        <div className="border border-white/10 p-5 bg-[#050505] flex flex-col justify-between">
          <div className="flex items-baseline justify-between mb-3">
            <span className="mono-label text-white/50 text-[10px]">PREDICTIVE SCORE</span>
            <span className="font-mono text-[10px] text-white/40">LATENCY: 8ms</span>
          </div>

          <div className="flex items-center gap-4 my-2">
            <div className="font-display font-black text-5xl md:text-6xl text-white">
              {score}
              <span className="text-sm font-mono text-white/40">/100</span>
            </div>
            <div className="text-xs font-mono text-[#A1A1AA]">
              {score >= 75 ? (
                <span className="text-[#32D74B] flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> High credit stability
                </span>
              ) : (
                <span className="text-[#FF3B30] flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Anomaly detected
                </span>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 pt-3 mt-3 font-mono text-xs text-white/70">
            <span className="text-[#FFD60A] font-bold">Model Explanation: </span>
            {repaymentRatio < 70
              ? 'Repayment velocity declined by >30% over 30d window; triggers tier-1 risk review.'
              : categoryDrift > 35
              ? 'High sudden category drift across merchant codes; possible liquidity stress.'
              : 'Consistent repayment schedule with nominal transaction volatility.'}
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Multilingual Farmer Assistant Simulator
export function FarmerAssistantSimulator() {
  const [language, setLanguage] = useState('hi');
  const [topic, setTopic] = useState('irrigation');

  const content = {
    hi: {
      langName: 'हिन्दी (Hindi)',
      topics: {
        irrigation: {
          q: 'धान की फसल में पानी कब देना चाहिए?',
          a: 'रोपाई के शुरुआती 25 दिनों तक खेत में 2-3 सेमी पानी बनाए रखें। कल्ले फूटते समय पानी की कमी न होने दें।',
          why: 'यह जड़ों को मजबूत करता है और खरपतवार की वृद्धि रोकता है।'
        },
        fertilizer: {
          q: 'गेहूं के लिए यूरिया की पहली खुराक कब डालें?',
          a: 'पहली सिंचाई (CRI अवस्था, 21 दिन) के तुरंत बाद 50 किग्रा यूरिया प्रति एकड़ डालें।',
          why: 'यह शुरुआती टिलरिंग और पौधे की पत्तियों के विकास में 35% तेजी लाता है।'
        }
      }
    },
    te: {
      langName: 'తెలుగు (Telugu)',
      topics: {
        irrigation: {
          q: 'వరి పంటలో నీటి యాజమాన్యం ఎలా ఉండాలి?',
          a: 'నాటిన మొదటి 25 రోజులు పొలంలో 2-3 సెం.మీ నీరు ఉండేలా చూడండి.',
          why: 'ఇది పిలకల పెరుగుదలకు మరియు కలుపు నివారణకు తోడ్పడుతుంది.'
        },
        fertilizer: {
          q: 'వరి పంటకు యూరియా ఎప్పుడు వేయాలి?',
          a: 'నాటిన 20-25 రోజుల తర్వాత మొదటి మోతాదు యూరియా అందించండి.',
          why: 'నత్రజని నేరుగా మొక్కల ఎదుగుదలకు తోడ్పడుతుంది.'
        }
      }
    },
    ur: {
      langName: 'اردو (Urdu)',
      topics: {
        irrigation: {
          q: 'دھان کی فصل کو پانی کب دینا چاہیے؟',
          a: 'شروع کے 25 دنوں تک کھیت میں 2 سے 3 سینٹی میٹر پانی قائم رکھیں۔',
          why: 'اس سے جڑیں مضبوط ہوتی ہیں اور گھاس کی نشوونما رکتی ہے۔'
        },
        fertilizer: {
          q: 'گندم کے لیے کھاد کا صحیح وقت کیا ہے؟',
          a: 'پہلے پانی کے بعد یوریا کی پہلی خوراک فی ایکڑ شامل کریں۔',
          why: 'یہ پودوں کے پتوں کو ابتدائی طاقت فراہم کرتا ہے۔'
        }
      }
    },
    en: {
      langName: 'English',
      topics: {
        irrigation: {
          q: 'When should I irrigate paddy crops?',
          a: 'Maintain 2-3 cm water depth for the first 20-25 days after transplantation.',
          why: 'Prevents weed growth and supports optimal tillering phase.'
        },
        fertilizer: {
          q: 'When is the first fertilizer dose for wheat?',
          a: 'Apply 50 kg Urea per acre immediately following the first irrigation (CRI stage at 21 days).',
          why: 'Accelerates leaf canopy expansion and tiller survival by 35%.'
        }
      }
    }
  };

  const current = content[language];
  const activeData = current.topics[topic];

  return (
    <div className="border border-white/15 bg-[#0A0A0A] p-5 md:p-7">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div>
          <span className="mono-label text-[#32D74B] flex items-center gap-1.5">
            <Languages className="w-3.5 h-3.5" /> // INTERACTIVE SIMULATOR // PROJECT #02
          </span>
          <h4 className="font-display font-bold text-lg md:text-xl text-white mt-1">
            Multilingual Agri-AI Assistant
          </h4>
        </div>
        <div className="font-mono text-[11px] text-[#32D74B] border border-[#32D74B]/30 px-2.5 py-1">
          4 LANGUAGES GROUNDED
        </div>
      </div>

      {/* Language Switcher */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(content).map(([code, info]) => (
          <button
            key={code}
            onClick={() => {
              setLanguage(code);
              sound.playClick();
            }}
            className={`font-mono text-xs px-3 py-1.5 border transition-all ${
              language === code
                ? 'border-[#32D74B] bg-[#32D74B]/15 text-[#32D74B] font-bold'
                : 'border-white/15 text-white/70 hover:border-white/40'
            }`}
          >
            {info.langName}
          </button>
        ))}
      </div>

      {/* Topic Switcher */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => {
            setTopic('irrigation');
            sound.playClick();
          }}
          className={`font-mono text-xs px-3 py-1 border transition-all ${
            topic === 'irrigation'
              ? 'border-white bg-white text-black font-semibold'
              : 'border-white/10 text-white/60 hover:text-white'
          }`}
        >
          💧 Irrigation Guidance
        </button>
        <button
          onClick={() => {
            setTopic('fertilizer');
            sound.playClick();
          }}
          className={`font-mono text-xs px-3 py-1 border transition-all ${
            topic === 'fertilizer'
              ? 'border-white bg-white text-black font-semibold'
              : 'border-white/10 text-white/60 hover:text-white'
          }`}
        >
          🌾 Fertilizer Application
        </button>
      </div>

      {/* Live Chat bubble preview */}
      <div className="space-y-3 font-mono text-xs md:text-sm">
        <div className="bg-white/5 border border-white/10 p-3.5 text-white/90">
          <span className="mono-label text-white/40 text-[10px] block mb-1">USER QUERY:</span>
          {activeData.q}
        </div>
        
        <div className="bg-[#050505] border border-[#32D74B]/40 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="mono-label text-[#32D74B] text-[10px] flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AGRI-AI RESPONSE // LOW-BANDWIDTH OPTIMIZED
            </span>
            <span className="font-mono text-[10px] text-white/40">LATENCY: 1.1s</span>
          </div>
          <p className="font-medium text-white text-sm md:text-base leading-relaxed">
            {activeData.a}
          </p>
          <div className="mt-3 border-t border-white/10 pt-2 text-xs text-[#A1A1AA]">
            <span className="text-[#32D74B] font-semibold">Rationale: </span>
            {activeData.why}
          </div>
        </div>
      </div>
    </div>
  );
}
