/**
 * 🎯 PRESENTATION TEMPLATE - MAIN APP
 * 
 * This is the main application component.
 * It orchestrates all sections and features of the presentation.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Context & Hooks
import { usePresentation } from './context';
import { useKeyboardNavigation, useScrollSpy } from './hooks';

// UI Components
import { Sidebar, TopBar, ProgressBar, KeyboardHints } from './components/ui';
import MobileNav from './components/MobileNav';
import CommandPalette from './components/CommandPalette';
import PresentationMode from './components/PresentationMode';

// Section Components
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import PeakLearnings from './components/PeakLearnings';
import ABTestingSummary from './components/ABTestingSummary';
import FleetSurvey from './components/FleetSurvey';
import NextSteps from './components/NextSteps';

const App: React.FC = () => {
  const {
    state,
    content,
    config,
    setActiveSection,
    setScrollProgress,
    toggleLang,
    openCommandPalette,
    closeCommandPalette,
    openPresentationMode,
    closePresentationMode,
    toggleMobileMenu,
    closeMobileMenu,
    navigateToSection,
  } = usePresentation();

  // Get section IDs from config
  const sectionIds = config.sections.map(s => s.id);

  // Keyboard navigation
  useKeyboardNavigation({
    sectionIds,
    activeSection: state.activeSection,
    onNavigate: setActiveSection,
    onOpenCommandPalette: openCommandPalette,
    onOpenPresentationMode: openPresentationMode,
    isCommandPaletteOpen: state.isCommandPaletteOpen,
    isPresentationMode: state.isPresentationMode,
    enabled: config.features.keyboardNavigation,
  });

  // Scroll spy
  useScrollSpy({
    sectionIds,
    onSectionChange: setActiveSection,
    onProgressChange: setScrollProgress,
    enabled: config.features.scrollSpy,
  });

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
      {/* Progress Bar */}
      {config.features.progressBar && (
        <ProgressBar progress={state.scrollProgress} />
      )}

      {/* Desktop Sidebar */}
      <Sidebar
        title={content.nav.title}
        logo={config.branding.icon}
        items={content.nav.items}
        activeSection={state.activeSection}
        onNavigate={navigateToSection}
        footer={content.nav.footer}
      />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={state.isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        activeSection={state.activeSection}
        content={{
          ...content.nav,
          contents: 'Contents',
        }}
        onNavigate={(id) => {
          navigateToSection(id);
          closeMobileMenu();
        }}
      />

      {/* Top Right Controls */}
      <TopBar
        lang={state.lang}
        onToggleLang={toggleLang}
        onOpenCommandPalette={openCommandPalette}
        onOpenPresentationMode={openPresentationMode}
        showCommandPalette={config.features.commandPalette}
        showPresentationMode={config.features.presentationMode}
        showLanguageToggle={config.features.languageToggle}
      />

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 lg:ml-64 w-full"
        role="main"
      >
        {/* Hero Section */}
        <Hero content={content.hero} />

        {/* Purpose Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Purpose content={content.purpose} />
        </motion.div>

        {/* Peak Learnings Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <PeakLearnings content={content.peakLearnings} />
        </motion.div>

        {/* A/B Testing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ABTestingSummary content={content.abTesting} />
        </motion.div>

        {/* Fleet Survey Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FleetSurvey content={content.fleetSurvey} />
        </motion.div>

        {/* Next Steps Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <NextSteps content={content.nextSteps} />
        </motion.div>
      </main>

      {/* Keyboard Hints */}
      {config.features.keyboardNavigation && (
        <KeyboardHints maxSectionNumber={sectionIds.length - 1} />
      )}

      {/* Command Palette */}
      {config.features.commandPalette && (
        <CommandPalette
          isOpen={state.isCommandPaletteOpen}
          onClose={closeCommandPalette}
          sections={content.nav.items}
          onNavigate={(id) => {
            navigateToSection(id);
            closeCommandPalette();
          }}
          onToggleLang={toggleLang}
          onExportPDF={() => {}}
          onPresentationMode={() => {
            closeCommandPalette();
            openPresentationMode();
          }}
          lang={state.lang as 'en' | 'es'}
        />
      )}

      {/* Presentation Mode */}
      {config.features.presentationMode && (
        <PresentationMode
          isOpen={state.isPresentationMode}
          onClose={closePresentationMode}
          sections={sectionIds}
          activeSection={state.activeSection}
          content={content}
        />
      )}
    </div>
  );
};

export default App;
