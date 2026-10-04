import React, { useEffect } from 'react';
import { X, ArrowDownToLine, ShieldCheck, ExternalLink, Calendar, UserCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { sound } from '../utils/soundFx';

export default function CertificateModal({ certificate, onClose, onSelectCert, allCerts }) {
  useEffect(() => {
    sound.playCyberOpen();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!certificate) return null;

  const validCerts = allCerts.filter((c) => c.image || c.pdfUrl);
  const currentIndex = validCerts.findIndex((c) => c.id === certificate.id);
  const nextCert = validCerts[(currentIndex + 1) % validCerts.length];
  const prevCert = validCerts[(currentIndex - 1 + validCerts.length) % validCerts.length];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl bg-[#090909] border-2 border-white/20 shadow-2xl text-white my-8 overflow-hidden hud-corner font-mono">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4 md:p-5 bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#32D74B] animate-pulse" />
            <span className="mono-label text-white/90 text-xs md:text-sm font-bold">
              VERIFIED CREDENTIAL // {certificate.tag.toUpperCase()}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 border border-white/15 text-white/70 hover:text-white hover:border-[#FF3B30] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 md:p-8 max-h-[78vh] overflow-y-auto space-y-6">
          
          {/* Certificate Image Preview */}
          {certificate.image ? (
            <div className="border border-white/20 bg-black overflow-hidden shadow-2xl relative group">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-auto max-h-[500px] object-contain mx-auto"
              />
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur border border-white/20 px-3 py-1 font-mono text-[10px] text-[#32D74B] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL VERIFICATION MATCH</span>
              </div>
            </div>
          ) : (
            <div className="p-12 border border-white/10 bg-white/[0.02] text-center">
              <ShieldCheck className="w-12 h-12 text-[#32D74B] mx-auto mb-3" />
              <h3 className="font-display font-bold text-xl text-white">
                {certificate.name}
              </h3>
              <p className="font-mono text-xs text-[#A1A1AA] mt-1">
                Verified Academic Training Certificate
              </p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div className="space-y-3">
              <div>
                <span className="mono-label text-white/40 text-[10px] block mb-1">CREDENTIAL TITLE</span>
                <h3 className="font-display font-bold text-xl text-white">
                  {certificate.name}
                </h3>
              </div>

              <div>
                <span className="mono-label text-white/40 text-[10px] block mb-1">ISSUING AUTHORITY</span>
                <p className="font-mono text-sm text-[#32D74B] font-medium">
                  {certificate.issuer}
                </p>
              </div>

              {certificate.signatory && (
                <div>
                  <span className="mono-label text-white/40 text-[10px] block mb-1">SIGNATORIES / OVERSIGHT</span>
                  <p className="font-mono text-xs text-white/80">
                    {certificate.signatory}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-3 md:border-l md:border-white/10 md:pl-6">
              <div>
                <span className="mono-label text-white/40 text-[10px] block mb-1">ISSUE DATE / VALIDITY</span>
                <p className="font-mono text-xs text-white flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF3B30]" />
                  <span>{certificate.date || certificate.year}</span>
                </p>
              </div>

              <div>
                <span className="mono-label text-white/40 text-[10px] block mb-1">SUMMARY / SCOPE</span>
                <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed">
                  {certificate.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                {certificate.pdfUrl && (
                  <a
                    href={certificate.pdfUrl}
                    download
                    onClick={() => sound.playSuccess()}
                    className="btn-brutal btn-brutal-accent text-xs py-2 px-4 flex items-center gap-2"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    <span>Download PDF Certificate</span>
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Switcher */}
        {validCerts.length > 1 && (
          <div className="flex items-center justify-between border-t border-white/10 p-3 md:p-4 bg-[#0E0E0E] text-xs">
            <button
              onClick={() => {
                sound.playClick();
                onSelectCert(prevCert);
              }}
              className="mono-label hover:text-[#FF3B30] flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREV: {prevCert.name.slice(0, 20)}...</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onSelectCert(nextCert);
              }}
              className="mono-label hover:text-[#FF3B30] flex items-center gap-2"
            >
              <span>NEXT: {nextCert.name.slice(0, 20)}...</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
