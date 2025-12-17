import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Home,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Bot,
  Target,
  RefreshCw,
  ArrowRight
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
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-3xl text-pr-yellow font-medium mb-8"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400"
          >
            {content.hero.period}
          </motion.p>
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
            className="text-xl lg:text-2xl text-center leading-relaxed"
          >
            <span className="text-gray-300">{content.purpose.text} </span>
            <span className="text-red-400 line-through">{content.purpose.strikeText}</span>
            <br />
            <span className="text-white font-medium">{content.purpose.highlight}</span>
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
    // Slide 2: Peak Learnings - What Worked
    {
      id: 'worked',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white">{content.peakLearnings.sections.worked.title}</h2>
          </motion.div>
          <div className="space-y-4 w-full">
            {content.peakLearnings.sections.worked.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="bg-green-900/10 border border-green-900/30 p-5 rounded-xl"
              >
                <p className="text-white font-medium text-lg">{item.text}</p>
                {item.example && (
                  <p className="text-gray-400 text-sm mt-2 italic">"{item.example}"</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 3: Peak Learnings - What Didn't Work
    {
      id: 'didnt',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <XCircle className="text-red-500" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white">{content.peakLearnings.sections.didnt.title}</h2>
          </motion.div>
          <div className="space-y-4 w-full">
            {content.peakLearnings.sections.didnt.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="bg-red-900/10 border border-red-900/30 p-5 rounded-xl"
              >
                <p className="text-white font-medium text-lg">{item.text}</p>
                {item.example && (
                  <p className="text-gray-400 text-sm mt-2 italic">"{item.example}"</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 4: The 3 Truths
    {
      id: 'truths',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <Lightbulb className="text-pr-yellow" size={32} />
            <h2 className="text-3xl font-bold text-white">{content.peakLearnings.sections.truths.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {content.peakLearnings.sections.truths.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="bg-pr-yellow/5 border-l-4 border-pr-yellow p-6 rounded-r-xl"
              >
                <span className="text-4xl font-bold text-pr-yellow block mb-3">0{i + 1}</span>
                <p className="text-white font-medium mb-2">{item.text}</p>
                {item.example && (
                  <p className="text-gray-400 text-sm italic">"{item.example}"</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 5: A/B Testing
    {
      id: 'ab-testing',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {content.abTesting.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            3,098 conversations • Maya: 2,175 • Humans: 923
          </motion.p>
          
          {/* Big metrics */}
          <div className="grid grid-cols-3 gap-6 w-full mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-pr-yellow/10 border border-pr-yellow/30 p-5 rounded-xl text-center"
            >
              <p className="text-gray-400 text-sm mb-2">Response Time</p>
              <p className="text-4xl font-bold text-pr-yellow">0.26</p>
              <p className="text-gray-500 text-sm">min (vs 190 min human)</p>
              <p className="text-pr-yellow text-xs mt-2 font-bold">99.9% faster</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-pr-yellow/10 border border-pr-yellow/30 p-5 rounded-xl text-center"
            >
              <p className="text-gray-400 text-sm mb-2">Max Concurrent</p>
              <p className="text-4xl font-bold text-pr-yellow">215</p>
              <p className="text-gray-500 text-sm">conversations (vs 100)</p>
              <p className="text-pr-yellow text-xs mt-2 font-bold">2x+ capacity</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-xl text-center"
            >
              <p className="text-gray-400 text-sm mb-2">Engagement Rate</p>
              <p className="text-4xl font-bold text-blue-400">80%</p>
              <p className="text-gray-500 text-sm">human (vs 73.7% AI)</p>
              <p className="text-blue-400 text-xs mt-2 font-bold">Human edge</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-pr-yellow/10 border-l-4 border-pr-yellow p-5 rounded-r-xl w-full text-center"
          >
            <p className="text-white font-medium">{content.abTesting.whatsNext.text}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-xs mt-4"
          >
            Human team = 12 people • Maya = 1 AI agent (pilot)
          </motion.p>
        </div>
      ),
    },
    // Slide 6: Fleet Survey
    {
      id: 'fleet-survey',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {content.fleetSurvey.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            {content.fleetSurvey.sampleSize} • 33 open comments
          </motion.p>

          {/* Top KPIs */}
          <div className="grid grid-cols-3 gap-6 w-full mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-pr-yellow/10 border border-pr-yellow/30 p-5 rounded-xl text-center"
            >
              <p className="text-gray-400 text-sm mb-2">Top Priority</p>
              <p className="text-3xl font-bold text-white">Payments</p>
              <p className="text-pr-yellow font-bold">4.94 / 5</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-pr-yellow/10 border border-pr-yellow/30 p-5 rounded-xl text-center"
            >
              <p className="text-gray-400 text-sm mb-2">Preferred Platform</p>
              <p className="text-3xl font-bold text-white">Mobile App</p>
              <p className="text-pr-yellow font-bold">43.7%</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-xl text-center"
            >
              <p className="text-gray-400 text-sm mb-2">Opportunity</p>
              <p className="text-xl font-bold text-white">Optimize App</p>
              <p className="text-blue-400 text-sm">for payments</p>
            </motion.div>
          </div>

          {/* Feature importance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full bg-pr-gray/20 border border-gray-800 p-5 rounded-xl"
          >
            <h4 className="text-white font-bold mb-4">Feature Importance (avg /5)</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Payments', score: 4.94 },
                { label: 'Preferences', score: 4.79 },
                { label: 'Availability', score: 4.62 },
                { label: 'Routes', score: 4.60 },
                { label: 'Registration', score: 4.54 },
                { label: 'Referrals', score: 4.06 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className={`font-bold ${i < 2 ? 'text-pr-yellow' : 'text-gray-400'}`}>{item.score}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    // Slide 7: Next Steps (with Decisions)
    {
      id: 'next-steps',
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-6"
          >
            {content.nextSteps.title}
          </motion.h2>

          {/* Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="text-green-500" size={16} />
              <h3 className="text-sm font-bold text-white">{content.nextSteps.decisions.title}</h3>
              <span className="text-green-400 text-xs bg-green-500/20 px-2 py-0.5 rounded-full">{content.nextSteps.decisions.items.length}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {content.nextSteps.decisions.items.map((decision, i) => (
                <motion.div
                  key={decision.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="bg-green-500/5 border border-green-500/20 p-3 rounded-lg"
                >
                  <p className="text-white text-xs font-medium">{decision.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{decision.owner}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Pillars */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {content.nextSteps.pillars.map((pillar, i) => {
              const icons = { A: Bot, B: Target, C: RefreshCw };
              const colors = { 
                A: 'text-pr-yellow border-pr-yellow/30 bg-pr-yellow/10', 
                B: 'text-blue-400 border-blue-500/30 bg-blue-500/10', 
                C: 'text-green-400 border-green-500/30 bg-green-500/10' 
              };
              const Icon = icons[pillar.id];
              
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`p-4 rounded-xl border ${colors[pillar.id]}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={20} />
                    <span className="font-bold text-white text-sm">{pillar.title}</span>
                  </div>
                  <ul className="space-y-1">
                    {pillar.items.slice(0, 3).map((item, j) => (
                      <li key={j} className="text-gray-400 text-xs flex items-start gap-1">
                        <ArrowRight size={10} className="mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">{pillar.owner}</p>
                </motion.div>
              );
            })}
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
              src="./Logo.png" 
              alt="PartRunner" 
              className="h-16 mx-auto"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 italic mb-8"
          >
            "{content.nextSteps.closing}"
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {content.nextSteps.credits.items.map((credit, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-pr-yellow/20 flex items-center justify-center text-pr-yellow font-bold text-sm">
                  {credit.name.charAt(0)}
                </div>
                <span className="text-gray-400 text-sm">{credit.name}</span>
              </div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-sm mt-8"
          >
            Press ESC to exit
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

  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
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
            >
              <Home size={20} />
            </button>
            <span className="text-sm text-gray-500 font-mono">
              {currentSlide + 1} / {totalSlides}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900">
            <motion.div
              className="h-full bg-pr-yellow"
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

          {/* Navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full transition-all ${
                currentSlide === 0 ? 'text-gray-700' : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? 'bg-pr-yellow w-6' : 'bg-gray-700 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-3 rounded-full transition-all ${
                currentSlide === totalSlides - 1 ? 'text-gray-700' : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PresentationMode;
