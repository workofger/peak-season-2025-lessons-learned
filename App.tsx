/**
 * 📚 PRESENTATION HUB - MAIN APP
 * 
 * Interactive repository for all company presentations.
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

// Section Components
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import PresentationGallery from './components/PresentationGallery';
import TeamsSection from './components/TeamsSection';
import TemplateSection from './components/TemplateSection';
import StatsSection from './components/StatsSection';

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
          contents: 'Menu',
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
        showPresentationMode={false}
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

        {/* Stats Overview */}
        {content.stats && (
          <StatsSection content={content.stats} />
        )}

        {/* Purpose Section */}
        {content.purpose && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Purpose content={content.purpose} />
          </motion.div>
        )}

        {/* Presentations Gallery */}
        {content.presentations && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <PresentationGallery content={content.presentations} />
          </motion.div>
        )}

        {/* Teams Section */}
        {content.teams && content.presentations && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <TeamsSection 
              content={content.teams} 
              presentations={content.presentations.all}
            />
          </motion.div>
        )}

        {/* Template Section */}
        {content.template && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <TemplateSection content={content.template} />
          </motion.div>
        )}

        {/* Footer */}
        <footer className="py-12 px-8 text-center border-t border-gray-800">
          <img 
            src="./Logo.png" 
            alt="PartRunner" 
            className="h-8 mx-auto mb-4 opacity-50"
          />
          <p className="text-gray-600 text-sm">
            PartRunner Products · Presentation Hub
          </p>
        </footer>
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
          onPresentationMode={() => {}}
          lang={state.lang as 'en' | 'es'}
        />
      )}
    </div>
  );
};

export default App;
