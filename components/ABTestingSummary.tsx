import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, ArrowRight, Zap, Clock, Users2, TrendingUp } from 'lucide-react';
import { DashboardContent } from '../types';

interface ABTestingSummaryProps {
  content: DashboardContent['abTesting'];
}

const ABTestingSummary: React.FC<ABTestingSummaryProps> = ({ content }) => {
  const getWinnerStyle = (winner: 'ai' | 'human' | 'tie') => {
    if (winner === 'ai') return 'text-pr-yellow font-bold';
    if (winner === 'human') return 'text-blue-400 font-bold';
    return 'text-gray-400';
  };

  // KPI Cards data
  const kpiCards = [
    {
      icon: <Clock size={24} />,
      label: content.results[0]?.metric || 'Response Time',
      aiValue: '0.26',
      aiUnit: 'min',
      humanValue: '190',
      humanUnit: 'min',
      highlight: '99.9%',
      highlightLabel: 'faster',
      winner: 'ai' as const,
    },
    {
      icon: <Users2 size={24} />,
      label: 'Max Concurrent',
      aiValue: '215',
      aiUnit: '',
      humanValue: '~10',
      humanUnit: '/agent',
      highlight: '21x',
      highlightLabel: 'capacity',
      winner: 'ai' as const,
    },
    {
      icon: <TrendingUp size={24} />,
      label: 'Engagement Rate',
      aiValue: '73.7',
      aiUnit: '%',
      humanValue: '80.0',
      humanUnit: '%',
      highlight: '+6.3%',
      highlightLabel: 'human edge',
      winner: 'human' as const,
    },
  ];

  return (
    <section id="ab-testing" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center bg-gradient-to-b from-pr-black to-pr-dark">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400 text-lg">
            3,098 conversations • Maya: 2,175 • Humans: 923
          </p>
        </motion.div>

        {/* Big KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {kpiCards.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-6 border ${
                kpi.winner === 'ai' 
                  ? 'bg-gradient-to-br from-pr-yellow/10 to-transparent border-pr-yellow/30' 
                  : 'bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/30'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                kpi.winner === 'ai' ? 'bg-pr-yellow/20 text-pr-yellow' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {kpi.icon}
              </div>

              {/* Label */}
              <p className="text-gray-400 text-sm mb-4">{kpi.label}</p>

              {/* Values comparison */}
              <div className="flex items-end gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                    <Bot size={12} /> Maya
                  </div>
                  <span className={`text-3xl font-bold ${kpi.winner === 'ai' ? 'text-pr-yellow' : 'text-white'}`}>
                    {kpi.aiValue}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{kpi.aiUnit}</span>
                </div>
                <div className="text-gray-600 text-xl mb-1">vs</div>
                <div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                    <User size={12} /> Human
                  </div>
                  <span className={`text-3xl font-bold ${kpi.winner === 'human' ? 'text-blue-400' : 'text-white'}`}>
                    {kpi.humanValue}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{kpi.humanUnit}</span>
                </div>
              </div>

              {/* Highlight badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${
                kpi.winner === 'ai' 
                  ? 'bg-pr-yellow/20 text-pr-yellow' 
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {kpi.highlight} {kpi.highlightLabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What we tested / learned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Bot size={18} />
              </span>
              {content.whatWeTested.title}
            </h3>
            <ul className="space-y-3">
              {content.whatWeTested.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                <Zap size={18} />
              </span>
              {content.whatWeLearned.title}
            </h3>
            <ul className="space-y-3">
              {content.whatWeLearned.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Results table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-pr-black/50 rounded-2xl p-6 border border-gray-800 mb-8"
        >
          <div className="grid grid-cols-4 gap-4 text-center mb-4 pb-4 border-b border-gray-800">
            <div className="text-gray-500 text-sm font-medium">Metric</div>
            <div className="flex items-center justify-center gap-2 text-pr-yellow">
              <Bot size={16} />
              <span className="font-bold">Maya (AI)</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <User size={16} />
              <span className="font-bold">Human</span>
            </div>
            <div className="text-gray-500 text-sm font-medium">Winner</div>
          </div>

          {content.results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-4 gap-4 py-3 items-center text-center border-b border-gray-800/50 last:border-0"
            >
              <div className="text-gray-300 text-sm">{result.metric}</div>
              <div className={getWinnerStyle(result.winner === 'ai' ? 'ai' : 'human')}>
                {result.ai}
              </div>
              <div className={getWinnerStyle(result.winner === 'human' ? 'human' : 'ai')}>
                {result.human}
              </div>
              <div>
                {result.winner === 'ai' && (
                  <span className="px-3 py-1 rounded-full bg-pr-yellow/20 text-pr-yellow text-xs font-bold">
                    AI
                  </span>
                )}
                {result.winner === 'human' && (
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
                    Human
                  </span>
                )}
                {result.winner === 'tie' && (
                  <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-400 text-xs font-bold">
                    Tie
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Context note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          Note: Human team = 12 people • Maya = 1 AI agent (pilot version)
        </motion.div>

        {/* What It Means */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pr-yellow/10 to-transparent rounded-2xl p-6 border-l-4 border-pr-yellow"
        >
          <h3 className="text-lg font-bold text-pr-yellow mb-2 flex items-center gap-2">
            <ArrowRight size={18} />
            {content.whatsNext.title}
          </h3>
          <p className="text-white text-lg">
            {content.whatsNext.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ABTestingSummary;
