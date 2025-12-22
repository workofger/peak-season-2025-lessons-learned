/**
 * 📊 PROGRESS BAR COMPONENT
 * 
 * Top progress indicator showing scroll position.
 */

import React from 'react';
import { useTheme } from '../../context';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const { colors } = useTheme();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[100]"
      style={{ backgroundColor: colors.bgSecondary }}
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{ 
          width: `${progress}%`,
          backgroundColor: colors.primary,
        }}
      />
    </div>
  );
};

export default ProgressBar;


