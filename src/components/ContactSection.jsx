import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/soundFx';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const { profile } = portfolioData;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    sound.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ state: 'error', msg: 'All transmission parameters are mandatory.' });
      return;
    }

    sound.playCyberOpen();
    setStatus({ state: 'sending', msg: 'Establishing encrypted channel...' });

    setTimeout(() => {
      sound.playSuccess();
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#FF3B30', '#32D74B', '#FFD60A', '#FFFFFF']
        });
      } catch {}

      setStatus({
        state: 'success',
        msg: 'Signal received. Direct transmission successful — I will reply within 24–48h.'
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-x border-white/10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap pb-6 border-b border-white/10">
          <div className="flex items-end gap-4 md:gap-6">
            <span className="mono-label text-[#FF3B30] text-sm md:text-base font-bold">// 06</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight">
              Contact<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <span className="mono-label text-white/50 text-xs md:text-sm">/ open channel & transmission</span>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-12 border-t border-white/10 mt-10 md:mt-14">
          
          {/* Transmission Form */}
          <form
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10"
          >
            <p className="mono-label mb-6 text-[#FF3B30]">// TRANSMIT_MESSAGE</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="mono-label text-white/60 block mb-2">01 // YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-brutal"
                />
              </div>

              <div>
                <label className="mono-label text-white/60 block mb-2">02 // YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="ada@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-brutal"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mono-label text-white/60 block mb-2">03 // SUBJECT</label>
              <input
                type="text"
                required
                placeholder="Internship opportunity / project discussion"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="input-brutal"
              />
            </div>

            <div className="mt-6">
              <label className="mono-label text-white/60 block mb-2">04 // MESSAGE</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your team, challenge, or wild idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-brutal resize-none"
              />
            </div>

            {/* Submit & Status notification */}
            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <button
                type="submit"
                disabled={status.state === 'sending'}
                className="btn-brutal btn-brutal-accent text-xs py-3.5 px-6 flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status.state === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT SIGNAL →'}</span>
              </button>

              {status.state === 'success' && (
                <p className="font-mono text-xs text-[#32D74B] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>{status.msg}</span>
                </p>
              )}

              {status.state === 'error' && (
                <p className="font-mono text-xs text-[#FF3B30]">
                  ✕ {status.msg}
                </p>
              )}
            </div>
          </form>

          {/* Direct Channels & Availability Card */}
          <aside className="col-span-12 lg:col-span-5 p-6 md:p-10 flex flex-col justify-between gap-8 bg-[#080808]">
            <div>
              <p className="mono-label mb-6 text-white/50">// DIRECT_CHANNELS</p>

              <div className="space-y-4">
                {/* Email with copy */}
                <div className="border border-white/10 p-4 bg-white/[0.02] flex items-center justify-between group">
                  <div>
                    <span className="mono-label text-white/40 text-[10px] block mb-1">PRIMARY EMAIL</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-xs md:text-sm text-white hover:text-[#FF3B30] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.email, 'email')}
                    title="Copy email"
                    className="p-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all"
                  >
                    {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-[#32D74B]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="border border-white/10 p-4 bg-white/[0.02] flex items-center justify-between group">
                  <div>
                    <span className="mono-label text-white/40 text-[10px] block mb-1">PHONE NUMBER</span>
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, '')}`}
                      className="font-mono text-xs md:text-sm text-white hover:text-[#32D74B] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    title="Copy phone"
                    className="p-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all"
                  >
                    {copiedItem === 'phone' ? <Check className="w-3.5 h-3.5 text-[#32D74B]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn link */}
                <div className="border border-white/10 p-4 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="mono-label text-white/40 text-[10px] block mb-1">PROFESSIONAL NETWORK</span>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs md:text-sm text-white hover:text-[#FFD60A] transition-colors flex items-center gap-1.5"
                    >
                      <span>{profile.linkedinLabel}</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                  <div className="p-2 text-white/60">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                </div>

                {/* Location */}
                <div className="border border-white/10 p-4 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="mono-label text-white/40 text-[10px] block mb-1">GEOGRAPHIC LOCATION</span>
                    <p className="font-mono text-xs md:text-sm text-white">
                      {profile.location}
                    </p>
                  </div>
                  <div className="p-2 text-white/40">
                    <MapPin className="w-4 h-4 text-[#FF3B30]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="border border-white/15 p-5 bg-[#050505] hud-corner mt-4">
              <p className="mono-label mb-2 text-[#32D74B] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#32D74B] animate-pulse" />
                {profile.status}
              </p>
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed">
                {profile.statusDetail}
              </p>
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
