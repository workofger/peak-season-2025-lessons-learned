/**
 * 🎛️ TOP BAR COMPONENT
 * 
 * Top-right controls (language toggle, command palette, presentation mode).
 */

import React from 'react';
import { Globe, Presentation, Command } from 'lucide-react';
import { useTheme } from '../../context';

interface TopBarProps {
  lang: string;
  onToggleLang: () => void;
  onOpenCommandPalette: () => void;
  onOpenPresentationMode: () => void;
  showCommandPalette?: boolean;
  showPresentationMode?: boolean;
  showLanguageToggle?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onToggleLang,
  onOpenCommandPalette,
  onOpenPresentationMode,
  showCommandPalette = true,
  showPresentationMode = true,
  showLanguageToggle = true,
}) => {
  const { colors } = useTheme();
  
  const buttonBaseStyle = {
    backgroundColor: `${colors.bgPrimary}cc`,
    borderColor: colors.border,
    color: colors.textMuted,
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 no-print">
      {/* Command Palette Hint */}
      {showCommandPalette && (
        <button
          onClick={onOpenCommandPalette}
          className="hidden md:flex items-center gap-2 backdrop-blur-md border px-3 py-2 rounded-lg text-xs font-medium transition-all hover:border-[var(--color-primary)]"
          style={buttonBaseStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.textPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.textMuted;
          }}
          aria-label="Open command palette"
        >
          <Command size={14} />
          <span style={{ color: colors.textMuted }}>⌘K</span>
        </button>
      )}

      {/* Presentation Mode */}
      {showPresentationMode && (
        <button
          onClick={onOpenPresentationMode}
          className="hidden md:flex items-center gap-2 backdrop-blur-md border p-2 rounded-lg text-xs transition-all hover:border-[var(--color-primary)]"
          style={buttonBaseStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.textMuted;
          }}
          aria-label="Enter presentation mode"
          title="Presentation Mode (⌘⇧P)"
        >
          <Presentation size={16} />
        </button>
      )}

      {/* Language Toggle */}
      {showLanguageToggle && (
        <button
          onClick={onToggleLang}
          className="flex items-center gap-2 backdrop-blur-md border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:border-[var(--color-primary)]"
          style={buttonBaseStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.textPrimary;
          }}
          aria-label={`Switch language`}
        >
          <Globe size={14} />
          <span style={{ color: colors.textPrimary }}>
            {lang === 'en' ? 'ES' : 'EN'}
          </span>
        </button>
      )}
    </div>
  );
};

export default TopBar;

