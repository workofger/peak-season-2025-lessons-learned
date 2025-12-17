import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import ProgressBar from './components/ProgressBar';
import Hero from './components/Hero';
import Section from './components/Section';
import ExecutiveSummary from './components/ExecutiveSummary';
import ProductInsights from './components/ProductInsights'; 
import BeyondProduct from './components/BeyondProduct'; 
import ThemesSection from './components/ThemesSection';
import InitiativesSection from './components/InitiativesSection';
import RaciSection from './components/RaciSection';
import CommandPalette from './components/CommandPalette';
import PresentationMode from './components/PresentationMode';
import { Globe, Presentation, Download, Command } from 'lucide-react';
import { CONTENT } from './constants';

const SECTION_IDS = [
  'hero', 'purpose', 'summary', 'overview', 
  'product-insights', 'beyond-product', 'themes', 
  'initiatives', 'raci', 'open-items'
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const content = CONTENT[lang];

  // Sync URL hash with active section (Deep Links)
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

  // Scroll Spy logic + Progress tracking
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

      // Calculate scroll progress
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

  const navigateToIndex = useCallback((index: number) => {
    if (index >= 0 && index < SECTION_IDS.length) {
      const targetId = SECTION_IDS[index];
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input or if modals are open
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

      // Arrow navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault();
        navigateToSection('next');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        navigateToSection('prev');
      }

      // Number keys 0-9 for quick section access
      const num = parseInt(e.key);
      if (!isNaN(num)) {
        navigateToIndex(num);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateToSection, navigateToIndex, isCommandPaletteOpen, isPresentationMode]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const handleExportPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('main-content');
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: `peak-season-2025-lessons-${lang}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="flex bg-pr-black min-h-screen text-white">
      {/* Progress Bar */}
      <ProgressBar progress={scrollProgress} />

      {/* Desktop Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        content={content.nav} 
        onNavigate={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        activeSection={activeSection}
        content={content.nav}
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

        {/* Export PDF */}
        <button 
          onClick={handleExportPDF}
          className="hidden md:flex items-center gap-2 bg-pr-black/80 backdrop-blur-md border border-pr-gray hover:border-pr-yellow p-2 rounded-lg text-xs transition-all text-gray-400 hover:text-pr-yellow"
          aria-label="Export to PDF"
          title="Export PDF"
        >
          <Download size={16} />
        </button>

        {/* Language Toggle */}
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 bg-pr-black/80 backdrop-blur-md border border-pr-gray hover:border-pr-yellow px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-white hover:text-pr-yellow"
          aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
        >
          <Globe size={14} />
          <span>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>
      </div>

      {/* Main Content */}
      <main 
        id="main-content" 
        ref={mainRef}
        className="flex-1 lg:ml-64 w-full relative"
        role="main"
        aria-label="Main content"
      >
        <Hero content={content.hero} />

        {/* 0. Purpose */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Section id="purpose" title={content.purpose.title} subtitle={content.purpose.subtitle}>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 lg:p-12 rounded-2xl border-l-4 border-pr-yellow shadow-2xl">
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-200 mb-6">
                {content.purpose.text}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {content.purpose.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400 bg-black/30 px-3 py-1 rounded-full border border-gray-700">
                    <span className="w-2 h-2 bg-pr-yellow rounded-full"></span> {tag}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <ExecutiveSummary content={content.summary} />
        </motion.div>

        {/* 2. Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Section id="overview" title={content.overview.title} subtitle={content.overview.subtitle}>
            <div className="relative border-l border-gray-800 ml-4 space-y-12 my-12">
              {content.overview.timeline.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="relative pl-8 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-pr-black ${item.isError ? 'bg-red-500' : 'bg-pr-yellow'}`}></span>
                  <span className="text-xs font-mono text-gray-500 uppercase mb-1 block">{item.date}</span>
                  <h3 className={`text-xl font-bold ${item.isError ? 'text-red-400' : 'text-white'}`}>{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* 3. Product Insights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <ProductInsights content={content.productInsights} />
        </motion.div>

        {/* 4. Beyond Product */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <BeyondProduct content={content.beyondProduct} />
        </motion.div>

        {/* 5. Themes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <ThemesSection content={content.themes} />
        </motion.div>

        {/* 6. Initiatives */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <InitiativesSection content={content.initiatives} />
        </motion.div>

        {/* 7. RACI */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <RaciSection content={content.raci} />
        </motion.div>

        {/* 8. Decisions & Next Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Section id="open-items" title={content.openItems.title} subtitle={content.openItems.subtitle}>
            {/* Decisions Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-pr-yellow rounded-full"></span>
                {content.openItems.decisionsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.openItems.decisions.map((decision, i) => (
                  <motion.div
                    key={decision.id}
                    className="bg-pr-gray/30 p-5 rounded-xl border border-gray-800 hover:border-pr-yellow/40 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-pr-yellow font-mono text-sm font-bold">{decision.id}</span>
                        <h4 className="text-white font-medium mt-1">{decision.title}</h4>
                      </div>
                      <span className="text-gray-500 text-sm whitespace-nowrap">{decision.owner}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Next Steps Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {content.openItems.nextStepsTitle}
              </h3>
              <div className="bg-pr-gray/20 p-8 rounded-xl border border-gray-800">
                <ul className="space-y-4">
                  {content.openItems.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-xs text-gray-500 mt-0.5">{i+1}</div>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20 text-center text-gray-600 text-sm pb-10">
              {content.openItems.footer}
            </div>
          </Section>
        </motion.div>

        {/* Keyboard hints footer */}
        <div className="hidden lg:block fixed bottom-4 right-4 z-40 text-xs text-gray-600 bg-pr-black/80 backdrop-blur px-3 py-2 rounded-lg border border-gray-800 no-print">
          <span className="text-gray-500">Navigate:</span>
          <span className="ml-2 px-1 bg-gray-800 rounded">↑↓</span>
          <span className="ml-1 text-gray-500">or</span>
          <span className="ml-1 px-1 bg-gray-800 rounded">0-9</span>
        </div>
      </main>

      {/* Command Palette Modal */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        sections={content.nav.items}
        onNavigate={(id) => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          setIsCommandPaletteOpen(false);
        }}
        onToggleLang={toggleLang}
        onExportPDF={handleExportPDF}
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
