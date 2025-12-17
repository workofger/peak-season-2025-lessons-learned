import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Home,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Target,
  Zap,
  Users,
  FileText
} from 'lucide-react';
import { DashboardContent } from '../types';

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  sections: string[];
  activeSection: string;
  content: DashboardContent;
}

const PresentationMode: React.FC<PresentationModeProps> = ({
  isOpen,
  onClose,
  sections,
  content,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Title
    {
      id: 'title',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pr-yellow/20 text-pr-yellow text-sm font-bold uppercase tracking-wider border border-pr-yellow/30">
              {content.hero.badge}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
          >
            {content.hero.titleLine1}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-6xl font-bold text-pr-yellow mb-12"
          >
            {content.hero.titleLine2}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-8 text-gray-400"
          >
            <span><strong className="text-white">Gerardo Sánchez Galván</strong></span>
            <span>Nov 15 – Dec 15, 2025</span>
          </motion.div>
        </div>
      ),
    },
    // Slide 1: Purpose
    {
      id: 'purpose',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-4"
          >
            {content.purpose.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center"
          >
            {content.purpose.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 text-center leading-relaxed"
          >
            {content.purpose.text}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-12"
          >
            {content.purpose.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-pr-yellow/10 text-pr-yellow rounded-full border border-pr-yellow/30">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      ),
    },
    // Slide 2: What Worked
    {
      id: 'what-worked',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <ThumbsUp className="text-green-500" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white">{content.summary.whatWorked.title}</h2>
          </motion.div>
          <div className="space-y-6 w-full">
            {content.summary.whatWorked.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-4 bg-green-900/10 border border-green-900/30 p-6 rounded-xl"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white text-lg">{item.label}</strong>
                  <p className="text-gray-400 mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 3: What Hurt
    {
      id: 'what-hurt',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <ThumbsDown className="text-red-500" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white">{content.summary.whatHurt.title}</h2>
          </motion.div>
          <div className="space-y-4 w-full">
            {content.summary.whatHurt.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 bg-red-900/10 border border-red-900/30 p-5 rounded-xl"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white">{item.label}</strong>
                  <p className="text-gray-400 text-sm mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 4: 3 Lessons
    {
      id: 'lessons',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <AlertTriangle className="text-pr-yellow" size={32} />
            <h2 className="text-3xl font-bold text-white">{content.summary.lessons.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {content.summary.lessons.items.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="bg-pr-yellow/5 border-l-4 border-pr-yellow p-6 rounded-r-xl"
              >
                <span className="text-5xl font-bold text-pr-yellow block mb-4">{lesson.id}</span>
                <p className="text-gray-300 leading-relaxed">{lesson.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 5: Decisions & Next Steps (Combined)
    {
      id: 'decisions-next-steps',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-6"
          >
            {content.openItems.title}
          </motion.h2>
          
          {/* Decisions */}
          <div className="w-full mb-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-pr-yellow uppercase tracking-wider mb-3 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-pr-yellow rounded-full"></span>
              {content.openItems.decisionsTitle}
            </motion.h3>
            <div className="grid grid-cols-2 gap-2">
              {content.openItems.decisions.map((d, i) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-3 bg-pr-gray/30 p-3 rounded-lg border border-gray-800"
                >
                  <span className="text-pr-yellow font-mono text-xs font-bold">{d.id}</span>
                  <span className="flex-1 text-white text-sm">{d.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="w-full">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {content.openItems.nextStepsTitle}
            </motion.h3>
            <div className="grid grid-cols-1 gap-2">
              {content.openItems.items.slice(0, 4).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 bg-blue-900/10 border border-blue-900/30 p-3 rounded-lg"
                >
                  <span className="w-5 h-5 rounded-full border border-blue-500/50 flex items-center justify-center text-xs text-blue-400">{i+1}</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // Slide 6: Key Themes (Summary)
    {
      id: 'themes',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {content.themes.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-pr-yellow mb-8"
          >
            {content.themes.subtitle}
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {content.themes.items.map((theme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-pr-gray/20 border border-gray-800 p-5 rounded-xl text-center hover:border-pr-yellow/40 transition-colors"
              >
                <h4 className="text-white font-semibold mb-2">{theme.title}</h4>
                <p className="text-gray-500 text-xs line-clamp-2">{theme.action}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 7: Initiatives
    {
      id: 'initiatives',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-8"
          >
            {content.initiatives.title}
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {content.initiatives.items.slice(0, 7).map((init, i) => (
              <motion.div
                key={init.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="bg-pr-gray/20 border border-gray-800 p-4 rounded-xl"
              >
                <span className="text-pr-yellow text-xs font-mono">INIT-{init.id}</span>
                <h4 className="text-white font-semibold text-sm mt-2 mb-1">{init.title}</h4>
                <p className="text-gray-500 text-xs">{init.owner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 8: End
    {
      id: 'end',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/C4E0BAQG0Qe2-6i5mOQ/company-logo_200_200/company-logo_200_200/0/1630646797207?e=2147483647&v=beta&t=7y2k2Q_498-8f8X_949494949" 
              alt="PartRunner" 
              className="w-24 h-24 rounded-2xl mx-auto"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {content.openItems.footer}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500"
          >
            Press ESC to exit presentation mode
          </motion.p>
        </div>
      ),
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(totalSlides - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose, totalSlides]);

  // Reset slide when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-pr-black z-[300] flex flex-col"
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
            <button
              onClick={() => setCurrentSlide(0)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Go to first slide"
            >
              <Home size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-mono">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Exit presentation mode"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900">
            <motion.div
              className="h-full bg-pr-yellow"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>

          {/* Slide Content */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {slides[currentSlide].render()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full transition-all ${
                currentSlide === 0
                  ? 'text-gray-700 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Slide Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide
                      ? 'bg-pr-yellow w-6'
                      : 'bg-gray-700 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-3 rounded-full transition-all ${
                currentSlide === totalSlides - 1
                  ? 'text-gray-700 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Keyboard Hints */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-700">
            <span className="px-2 py-1 bg-gray-900 rounded mr-1">←→</span>
            <span className="px-2 py-1 bg-gray-900 rounded mr-1">Space</span>
            <span className="px-2 py-1 bg-gray-900 rounded">Esc</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PresentationMode;

