/**
 * 👁️ SCROLL SPY HOOK
 * 
 * Tracks the current visible section and scroll progress.
 */

import { useEffect, useCallback } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  onSectionChange: (sectionId: string) => void;
  onProgressChange: (progress: number) => void;
  offset?: number;
  enabled?: boolean;
}

export const useScrollSpy = ({
  sectionIds,
  onSectionChange,
  onProgressChange,
  offset = 200,
  enabled = true,
}: UseScrollSpyOptions) => {
  const handleScroll = useCallback(() => {
    // Find current section
    const sections = document.querySelectorAll('section');
    let current = sectionIds[0] || 'hero';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - offset) {
        current = section.getAttribute('id') || current;
      }
    });

    onSectionChange(current);

    // Calculate scroll progress
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    onProgressChange(progress);
  }, [sectionIds, offset, onSectionChange, onProgressChange]);

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, handleScroll]);
};

export default useScrollSpy;


