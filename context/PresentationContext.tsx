/**
 * 📊 PRESENTATION CONTEXT
 * 
 * Provides presentation state and content throughout the application.
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { PresentationConfig } from '../types';
import { CONTENT, type DashboardContent } from '../constants';
import presentationConfig from '../config/presentation.config';

interface PresentationState {
  activeSection: string;
  scrollProgress: number;
  lang: string;
  isCommandPaletteOpen: boolean;
  isPresentationMode: boolean;
  isMobileMenuOpen: boolean;
}

interface PresentationContextValue {
  // State
  state: PresentationState;
  
  // Content - using DashboardContent type from constants
  content: DashboardContent;
  config: PresentationConfig;
  
  // Actions
  setActiveSection: (section: string) => void;
  setScrollProgress: (progress: number) => void;
  setLang: (lang: string) => void;
  toggleLang: () => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  openPresentationMode: () => void;
  closePresentationMode: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  navigateToSection: (sectionId: string) => void;
}

const PresentationContext = createContext<PresentationContextValue | undefined>(undefined);

interface PresentationProviderProps {
  children: React.ReactNode;
  config?: PresentationConfig;
}

export const PresentationProvider: React.FC<PresentationProviderProps> = ({
  children,
  config = presentationConfig,
}) => {
  const [state, setState] = useState<PresentationState>({
    activeSection: config.sections[0]?.id || 'hero',
    scrollProgress: 0,
    lang: config.i18n.defaultLanguage,
    isCommandPaletteOpen: false,
    isPresentationMode: false,
    isMobileMenuOpen: false,
  });

  const [content, setContent] = useState<DashboardContent>(
    CONTENT[config.i18n.defaultLanguage as keyof typeof CONTENT]
  );

  // Update content when language changes
  useEffect(() => {
    setContent(CONTENT[state.lang as keyof typeof CONTENT] || CONTENT.en);
  }, [state.lang]);

  // Deep linking - sync URL hash with active section
  useEffect(() => {
    if (config.features.deepLinking) {
      const hash = window.location.hash.slice(1);
      const sectionIds = config.sections.map(s => s.id);
      
      if (hash && sectionIds.includes(hash)) {
        setState(prev => ({ ...prev, activeSection: hash }));
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [config.features.deepLinking, config.sections]);

  // Update URL hash when section changes
  useEffect(() => {
    if (config.features.deepLinking) {
      if (state.activeSection !== config.sections[0]?.id) {
        window.history.replaceState(null, '', `#${state.activeSection}`);
      } else {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [state.activeSection, config.features.deepLinking, config.sections]);

  // Actions
  const setActiveSection = useCallback((section: string) => {
    setState(prev => ({ ...prev, activeSection: section }));
  }, []);

  const setScrollProgress = useCallback((progress: number) => {
    setState(prev => ({ ...prev, scrollProgress: progress }));
  }, []);

  const setLang = useCallback((lang: string) => {
    setState(prev => ({ ...prev, lang }));
  }, []);

  const toggleLang = useCallback(() => {
    setState(prev => {
      const currentIndex = config.i18n.languages.indexOf(prev.lang);
      const nextIndex = (currentIndex + 1) % config.i18n.languages.length;
      return { ...prev, lang: config.i18n.languages[nextIndex] };
    });
  }, [config.i18n.languages]);

  const openCommandPalette = useCallback(() => {
    setState(prev => ({ ...prev, isCommandPaletteOpen: true }));
  }, []);

  const closeCommandPalette = useCallback(() => {
    setState(prev => ({ ...prev, isCommandPaletteOpen: false }));
  }, []);

  const openPresentationMode = useCallback(() => {
    setState(prev => ({ ...prev, isPresentationMode: true }));
  }, []);

  const closePresentationMode = useCallback(() => {
    setState(prev => ({ ...prev, isPresentationMode: false }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenuOpen: false }));
  }, []);

  const navigateToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setState(prev => ({ ...prev, isMobileMenuOpen: false }));
  }, []);

  return (
    <PresentationContext.Provider
      value={{
        state,
        content,
        config,
        setActiveSection,
        setScrollProgress,
        setLang,
        toggleLang,
        openCommandPalette,
        closeCommandPalette,
        openPresentationMode,
        closePresentationMode,
        toggleMobileMenu,
        closeMobileMenu,
        navigateToSection,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = (): PresentationContextValue => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};

export default PresentationProvider;
