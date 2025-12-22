/**
 * ⌨️ KEYBOARD HINTS COMPONENT
 * 
 * Shows keyboard shortcuts at the bottom of the screen.
 */

import React from 'react';
import { useTheme } from '../../context';

interface KeyboardHintsProps {
  maxSectionNumber?: number;
}

export const KeyboardHints: React.FC<KeyboardHintsProps> = ({
  maxSectionNumber = 5,
}) => {
  const { colors } = useTheme();

  return (
    <div 
      className="hidden lg:block fixed bottom-4 right-4 z-40 text-xs backdrop-blur px-3 py-2 rounded-lg border no-print"
      style={{ 
        backgroundColor: `${colors.bgPrimary}cc`,
        borderColor: colors.border,
        color: colors.textMuted,
      }}
    >
      <span style={{ color: colors.textMuted }}>Navigate:</span>
      <span 
        className="ml-2 px-1.5 py-0.5 rounded"
        style={{ backgroundColor: colors.bgTertiary }}
      >
        ↑↓
      </span>
      <span className="ml-1" style={{ color: colors.textMuted }}>or</span>
      <span 
        className="ml-1 px-1.5 py-0.5 rounded"
        style={{ backgroundColor: colors.bgTertiary }}
      >
        0-{maxSectionNumber}
      </span>
    </div>
  );
};

export default KeyboardHints;

