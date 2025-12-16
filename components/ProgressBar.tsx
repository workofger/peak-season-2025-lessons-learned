import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 bg-pr-gray/30 z-[100] no-print"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-pr-yellow to-pr-lightYellow"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Progress percentage tooltip - shows on hover */}
      <div className="absolute right-2 top-2 opacity-0 hover:opacity-100 transition-opacity">
        <span className="text-[10px] bg-pr-black/90 text-pr-yellow px-2 py-0.5 rounded font-mono">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

