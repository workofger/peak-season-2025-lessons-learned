import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, ChevronDown, Wrench, Target } from 'lucide-react';
import { DashboardContent, LearningItem } from '../constants';

interface PeakLearningsProps {
  content: DashboardContent['peakLearnings'];
}

const LearningCard: React.FC<{
  item: LearningItem;
  colorScheme: { bg: string; border: string; icon: string; accent: string };
  delay: number;
}> = ({ item, colorScheme, delay }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = item.productImplication || (item.nextBuild && item.nextBuild.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`rounded-xl ${colorScheme.bg} border ${colorScheme.border} overflow-hidden`}
    >
      <div 
        className={`p-4 ${hasDetails ? 'cursor-pointer hover:bg-white/5 transition-colors' : ''}`}
        onClick={() => hasDetails && setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="text-white font-medium">{item.text}</p>
          {hasDetails && (
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="text-gray-500" size={18} />
            </motion.div>
          )}
        </div>
        {item.example && (
          <p className="text-gray-400 text-sm mt-2 italic">"{item.example}"</p>
        )}
      </div>
      
      <AnimatePresence>
        {expanded && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className={`px-4 pb-4 pt-2 border-t ${colorScheme.border} space-y-3`}>
              {item.productImplication && (
                <div className="flex items-start gap-2">
                  <Target className={`${colorScheme.icon} flex-shrink-0 mt-0.5`} size={14} />
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Product Implication</span>
                    <p className="text-gray-300 text-sm">{item.productImplication}</p>
                  </div>
                </div>
              )}
              {item.nextBuild && item.nextBuild.length > 0 && (
                <div className="flex items-start gap-2">
                  <Wrench className={`${colorScheme.icon} flex-shrink-0 mt-0.5`} size={14} />
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Next Build</span>
                    <ul className="space-y-1">
                      {item.nextBuild.map((action, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className={`${colorScheme.accent} mt-1.5 w-1 h-1 rounded-full flex-shrink-0`}></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PeakLearnings: React.FC<PeakLearningsProps> = ({ content }) => {
  const colorMap = {
    worked: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: 'text-green-500', accent: 'bg-green-500' },
    didnt: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: 'text-red-500', accent: 'bg-red-500' },
    truth: { bg: 'bg-pr-yellow/10', border: 'border-pr-yellow/30', icon: 'text-pr-yellow', accent: 'bg-pr-yellow' },
  };

  return (
    <section id="peak-learnings" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
            {content.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            {content.intro}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Click on any card to see product implications and next steps →
          </p>
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* What Worked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg ${colorMap.worked.bg} flex items-center justify-center`}>
                <CheckCircle2 className={colorMap.worked.icon} size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">{content.sections.worked.title}</h3>
            </div>
            {content.sections.worked.items.map((item, i) => (
              <LearningCard
                key={i}
                item={item}
                colorScheme={colorMap.worked}
                delay={0.2 + i * 0.1}
              />
            ))}
          </motion.div>

          {/* What Didn't Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg ${colorMap.didnt.bg} flex items-center justify-center`}>
                <XCircle className={colorMap.didnt.icon} size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">{content.sections.didnt.title}</h3>
            </div>
            {content.sections.didnt.items.map((item, i) => (
              <LearningCard
                key={i}
                item={item}
                colorScheme={colorMap.didnt}
                delay={0.3 + i * 0.1}
              />
            ))}
          </motion.div>

          {/* The 3 Truths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg ${colorMap.truth.bg} flex items-center justify-center`}>
                <Lightbulb className={colorMap.truth.icon} size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">{content.sections.truths.title}</h3>
            </div>
            {content.sections.truths.items.map((item, i) => (
              <LearningCard
                key={i}
                item={item}
                colorScheme={colorMap.truth}
                delay={0.4 + i * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PeakLearnings;
