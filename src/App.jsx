import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import CertificateModal from './components/CertificateModal';
import TerminalDrawer from './components/TerminalDrawer';
import CommandPalette from './components/CommandPalette';
import CinematicIntro from './components/CinematicIntro';
import MatrixCanvas from './components/MatrixCanvas';
import FloatingChatbot from './components/FloatingChatbot';
import RecruiterModal from './components/RecruiterModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [showBootIntro, setShowBootIntro] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(true);

  // Global Key listeners for ~ (Terminal) and Ctrl+K (Command Palette)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle CLI with `~` or backtick (when not typing in an input)
      if (
        (e.key === '`' || e.key === '~') &&
        !['INPUT', 'TEXTAREA'].includes(e.target.tagName)
      ) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }

      // Toggle Command Palette with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F4F6] relative font-sans selection:bg-[#FF3B30] selection:text-white">
      {/* Interactive Background Grid */}
      <MatrixCanvas active={matrixActive} />

      {/* Cinematic Intro Sequence */}
      {showBootIntro && (
        <CinematicIntro onComplete={() => setShowBootIntro(false)} />
      )}

      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        onReplayIntro={() => setShowBootIntro(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        />
        <StatsMarquee />
        <AboutSection onOpenRecruiter={() => setIsRecruiterModalOpen(true)} />
        <ProjectsSection onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <SkillsSection />
        <CredentialsSection onOpenCertificate={(cert) => setSelectedCertificate(cert)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onReplayIntro={() => setShowBootIntro(true)} />

      {/* Modals & Overlays */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />

      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          allProjects={portfolioData.projects}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectProject={(p) => setSelectedCaseStudy(p)}
        />
      )}

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          allCerts={portfolioData.credentials}
          onClose={() => setSelectedCertificate(null)}
          onSelectCert={(c) => setSelectedCertificate(c)}
        />
      )}

      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleMatrix={() => setMatrixActive((prev) => !prev)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        onOpenCertificate={(cert) => setSelectedCertificate(cert)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        onReplayIntro={() => setShowBootIntro(true)}
      />

      {/* Floating Interactive AI Chatbot */}
      <FloatingChatbot />
    </div>
  );
}
