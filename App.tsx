import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import PeakLearnings from './components/PeakLearnings';
import Decisions from './components/Decisions';
import ABTestingSummary from './components/ABTestingSummary';
import FleetSurvey from './components/FleetSurvey';
import NextSteps from './components/NextSteps';
import MobileNav from './components/MobileNav';
import ProgressBar from './components/ProgressBar';
import CommandPalette from './components/CommandPalette';
import PresentationMode from './components/PresentationMode';
import { Globe, Presentation, Command } from 'lucide-react';
import { CONTENT } from './constants';

const SECTION_IDS = ['hero', 'purpose', 'peak-learnings', 'decisions', 'ab-testing', 'fleet-survey', 'next-steps'];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const content = CONTENT[lang];

  // Sync URL hash with active section
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && SECTION_IDS.includes(hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  // Update URL hash when section changes
  useEffect(() => {
    if (activeSection !== 'hero') {
      window.history.replaceState(null, '', `#${activeSection}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeSection]);

  // Scroll Spy + Progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Navigation
  const navigateToSection = useCallback((direction: 'next' | 'prev') => {
    const currentIndex = SECTION_IDS.indexOf(activeSection);
    let newIndex: number;
    
    if (direction === 'next') {
      newIndex = Math.min(currentIndex + 1, SECTION_IDS.length - 1);
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }
    
    const targetId = SECTION_IDS[newIndex];
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (isCommandPaletteOpen || isPresentationMode) return;

      // Command Palette: Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
        return;
      }

      // Presentation Mode: Cmd+Shift+P / Ctrl+Shift+P
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'p') {
        e.preventDefault();
        setIsPresentationMode(true);
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault();
        navigateToSection('next');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        navigateToSection('prev');
      }

      const num = parseInt(e.key);
      if (!isNaN(num) && num >= 0 && num <= 6) {
        const targetId = SECTION_IDS[num];
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateToSection, isCommandPaletteOpen, isPresentationMode]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  // Sidebar component
  const Sidebar = () => (
    <nav className="fixed left-0 top-0 h-full w-64 bg-pr-black/95 backdrop-blur border-r border-pr-gray hidden lg:flex flex-col z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="./Isotipo.png" 
            alt="PartRunner" 
            className="w-10 h-10 rounded-lg"
          />
          <span className="font-bold text-xl text-white">{content.nav.title}</span>
        </div>
      </div>

      <div className="flex-1 px-4 space-y-1">
        {content.nav.items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
              activeSection === item.id
                ? 'bg-pr-yellow/10 text-pr-yellow'
                : 'text-gray-400 hover:bg-pr-gray hover:text-white'
            }`}
          >
            <span className="text-xs font-mono text-gray-600 w-4">{index}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-pr-gray text-xs text-gray-600 text-center">
        <p>{content.nav.footer.line1}</p>
        <p>{content.nav.footer.line2}</p>
      </div>
    </nav>
  );

  return (
    <div className="flex bg-pr-black min-h-screen text-white">
      <ProgressBar progress={scrollProgress} />
      
      <Sidebar />
      
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        activeSection={activeSection}
        content={{ 
          ...content.nav, 
          contents: 'Contents',
        }}
        onNavigate={(id) => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }}
      />

      {/* Top Right Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 no-print">
        {/* Command Palette Hint */}
        <button 
          onClick={() => setIsCommandPaletteOpen(true)}
          className="hidden md:flex items-center gap-2 bg-pr-black/80 backdrop-blur-md border border-pr-gray hover:border-pr-yellow px-3 py-2 rounded-lg text-xs font-medium transition-all text-gray-400 hover:text-white"
          aria-label="Open command palette"
        >
          <Command size={14} />
          <span className="text-gray-600">⌘K</span>
        </button>

        {/* Presentation Mode */}
        <button 
          onClick={() => setIsPresentationMode(true)}
          className="hidden md:flex items-center gap-2 bg-pr-black/80 backdrop-blur-md border border-pr-gray hover:border-pr-yellow p-2 rounded-lg text-xs transition-all text-gray-400 hover:text-pr-yellow"
          aria-label="Enter presentation mode"
          title="Presentation Mode (⌘⇧P)"
        >
          <Presentation size={16} />
        </button>

        {/* Language Toggle */}
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 bg-pr-black/80 backdrop-blur-md border border-pr-gray hover:border-pr-yellow px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-white hover:text-pr-yellow"
          aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
        >
          <Globe size={14} />
          <span>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>
      </div>

      <main 
        id="main-content"
        className="flex-1 lg:ml-64 w-full"
        role="main"
      >
        <Hero content={content.hero} />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Purpose content={content.purpose} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <PeakLearnings content={content.peakLearnings} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Decisions content={content.decisions} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ABTestingSummary content={content.abTesting} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FleetSurvey content={content.fleetSurvey} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <NextSteps content={content.nextSteps} />
        </motion.div>
      </main>

      {/* Keyboard hints */}
      <div className="hidden lg:block fixed bottom-4 right-4 z-40 text-xs text-gray-600 bg-pr-black/80 backdrop-blur px-3 py-2 rounded-lg border border-gray-800 no-print">
        <span className="text-gray-500">Navigate:</span>
        <span className="ml-2 px-1.5 py-0.5 bg-gray-800 rounded">↑↓</span>
        <span className="ml-1 text-gray-500">or</span>
        <span className="ml-1 px-1.5 py-0.5 bg-gray-800 rounded">0-6</span>
      </div>

      {/* Command Palette */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        sections={content.nav.items}
        onNavigate={(id) => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          setIsCommandPaletteOpen(false);
        }}
        onToggleLang={toggleLang}
        onExportPDF={() => {}}
        onPresentationMode={() => {
          setIsCommandPaletteOpen(false);
          setIsPresentationMode(true);
        }}
        lang={lang}
      />

      {/* Presentation Mode */}
      <PresentationMode 
        isOpen={isPresentationMode}
        onClose={() => setIsPresentationMode(false)}
        sections={SECTION_IDS}
        activeSection={activeSection}
        content={content}
      />
    </div>
  );
};

export default App;
