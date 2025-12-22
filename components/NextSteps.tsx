import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Target, RefreshCw, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DashboardContent } from '../constants';

interface NextStepsProps {
  content: DashboardContent['nextSteps'];
}

const NextSteps: React.FC<NextStepsProps> = ({ content }) => {
  const pillarIcons = {
    A: Bot,
    B: Target,
    C: RefreshCw,
  };

  const pillarColors = {
    A: { bg: 'bg-pr-yellow/10', border: 'border-pr-yellow/30', text: 'text-pr-yellow', badge: 'bg-pr-yellow text-black' },
    B: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', badge: 'bg-blue-500 text-white' },
    C: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', badge: 'bg-green-500 text-white' },
  };

  return (
    <section id="next-steps" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center bg-gradient-to-b from-pr-dark to-pr-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
            {content.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {content.title}
          </h2>
        </motion.div>

        {/* Decisions Taken */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">{content.decisions.title}</h3>
            <span className="text-green-400 text-sm bg-green-500/10 px-2 py-0.5 rounded-full">
              {content.decisions.items.length} committed
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.decisions.items.map((decision, i) => (
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 hover:bg-green-500/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-white font-medium text-sm">{decision.title}</span>
                  <span className="text-green-400 text-xs font-mono bg-green-500/10 px-1.5 py-0.5 rounded">{decision.id}</span>
                </div>
                <p className="text-gray-400 text-xs mb-3">{decision.description}</p>
                <div className="text-xs text-gray-500">
                  Owner: <span className="text-green-400">{decision.owner}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {content.pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.id];
            const colors = pillarColors[pillar.id];
            
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-2xl p-6 ${colors.bg} border ${colors.border} relative overflow-hidden`}
              >
                {/* Pillar badge */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full ${colors.badge} flex items-center justify-center font-bold text-sm`}>
                  {pillar.id}
                </div>

                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white pr-8">{pillar.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-2 mb-4">
                  {pillar.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.05 }}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <ArrowRight size={14} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Owner */}
                <div className="pt-4 border-t border-gray-800/50">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Owner</span>
                  <p className={`font-medium ${colors.text}`}>{pillar.owner}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-pr-gray/20 rounded-xl p-6 border border-gray-800 mb-8"
        >
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Users size={18} className="text-pr-yellow" />
            {content.credits.title}
          </h4>
          <div className="flex flex-wrap gap-6">
            {content.credits.items.map((credit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pr-yellow/20 flex items-center justify-center text-pr-yellow font-bold">
                  {credit.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{credit.name}</p>
                  <p className="text-gray-500 text-sm">{credit.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 italic text-lg">
            "{content.closing}"
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img 
              src="./Isotipo.png" 
              alt="PartRunner" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-gray-600 text-sm">PartRunner • Peak Season 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSteps;

