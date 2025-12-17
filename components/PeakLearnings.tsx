import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';
import { DashboardContent } from '../types';

interface PeakLearningsProps {
  content: DashboardContent['peakLearnings'];
}

const PeakLearnings: React.FC<PeakLearningsProps> = ({ content }) => {
  const colorMap = {
    worked: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: 'text-green-500' },
    didnt: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: 'text-red-500' },
    truth: { bg: 'bg-pr-yellow/10', border: 'border-pr-yellow/30', icon: 'text-pr-yellow' },
  };

  return (
    <section id="peak-learnings" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
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
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`p-4 rounded-xl ${colorMap.worked.bg} border ${colorMap.worked.border}`}
              >
                <p className="text-white font-medium mb-2">{item.text}</p>
                {item.example && (
                  <p className="text-gray-400 text-sm italic">"{item.example}"</p>
                )}
              </motion.div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`p-4 rounded-xl ${colorMap.didnt.bg} border ${colorMap.didnt.border}`}
              >
                <p className="text-white font-medium mb-2">{item.text}</p>
                {item.example && (
                  <p className="text-gray-400 text-sm italic">"{item.example}"</p>
                )}
              </motion.div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`p-4 rounded-xl ${colorMap.truth.bg} border ${colorMap.truth.border}`}
              >
                <p className="text-white font-medium mb-2">{item.text}</p>
                {item.example && (
                  <p className="text-gray-400 text-sm italic">"{item.example}"</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PeakLearnings;
