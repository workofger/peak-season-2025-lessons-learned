/**
 * ⌨️ KEYBOARD NAVIGATION HOOK
 * 
 * Handles keyboard shortcuts for the presentation.
 */

import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationOptions {
  sectionIds: string[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
  onOpenPresentationMode: () => void;
  isCommandPaletteOpen: boolean;
  isPresentationMode: boolean;
  enabled?: boolean;
}

export const useKeyboardNavigation = ({
  sectionIds,
  activeSection,
  onNavigate,
  onOpenCommandPalette,
  onOpenPresentationMode,
  isCommandPaletteOpen,
  isPresentationMode,
  enabled = true,
}: UseKeyboardNavigationOptions) => {
  const navigateToSection = useCallback(
    (direction: 'next' | 'prev') => {
      const currentIndex = sectionIds.indexOf(activeSection);
      let newIndex: number;

      if (direction === 'next') {
        newIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }

      const targetId = sectionIds[newIndex];
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        onNavigate(targetId);
      }
    },
    [activeSection, sectionIds, onNavigate]
  );

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Ignore if modals are open
      if (isCommandPaletteOpen || isPresentationMode) return;

      // Command Palette: Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenCommandPalette();
        return;
      }

      // Presentation Mode: Cmd+Shift+P / Ctrl+Shift+P
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'p') {
        e.preventDefault();
        onOpenPresentationMode();
        return;
      }

      // Arrow navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault();
        navigateToSection('next');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        navigateToSection('prev');
      }

      // Number navigation (0-9)
      const num = parseInt(e.key);
      if (!isNaN(num) && num >= 0 && num <= sectionIds.length) {
        const targetId = sectionIds[num];
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
          onNavigate(targetId);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    enabled,
    navigateToSection,
    isCommandPaletteOpen,
    isPresentationMode,
    onOpenCommandPalette,
    onOpenPresentationMode,
    sectionIds,
    onNavigate,
  ]);

  return { navigateToSection };
};

export default useKeyboardNavigation;


