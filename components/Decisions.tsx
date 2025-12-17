import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileQuestion } from 'lucide-react';
import { DashboardContent } from '../types';

interface DecisionsProps {
  content: DashboardContent['decisions'];
}

const Decisions: React.FC<DecisionsProps> = ({ content }) => {
  const decisions = content.items.filter(item => item.type === 'decision');
  const proposals = content.items.filter(item => item.type === 'proposal');

  return (
    <section id="decisions" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center bg-gradient-to-b from-pr-dark to-pr-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
            {content.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {content.title}
          </h2>
          <div className="h-1 w-20 bg-pr-yellow mt-6 rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg mb-10 max-w-3xl"
        >
          {content.description}
        </motion.p>

        {/* Decisions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">{content.decisionsTitle}</h3>
            <span className="text-green-400 text-sm bg-green-500/10 px-2 py-0.5 rounded-full">
              {decisions.length} {content.labels.committed}
            </span>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl border border-green-500/20 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-green-500/10 border-b border-green-500/20">
                  <th className="text-left py-3 px-4 text-green-400 font-semibold text-sm w-32">{content.labels.decision}</th>
                  <th className="text-left py-3 px-4 text-green-400 font-semibold text-sm">{content.labels.descriptionCol}</th>
                  <th className="text-left py-3 px-4 text-green-400 font-semibold text-sm w-28">{content.labels.owner}</th>
                </tr>
              </thead>
              <tbody>
                {decisions.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="border-b border-gray-800/50 last:border-b-0 hover:bg-green-500/5 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <span className="text-white font-medium text-sm">{item.title}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">{item.description}</td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{item.owner}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Proposals Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <FileQuestion className="text-purple-400" size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">{content.proposalsTitle}</h3>
            <span className="text-purple-400 text-sm bg-purple-500/10 px-2 py-0.5 rounded-full">
              {proposals.length} {content.labels.underReview}
            </span>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-500/10 border-b border-purple-500/20">
                  <th className="text-left py-3 px-4 text-purple-400 font-semibold text-sm w-32">{content.labels.proposal}</th>
                  <th className="text-left py-3 px-4 text-purple-400 font-semibold text-sm">{content.labels.descriptionCol}</th>
                  <th className="text-left py-3 px-4 text-purple-400 font-semibold text-sm w-28">{content.labels.owner}</th>
                </tr>
              </thead>
              <tbody>
                {proposals.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="border-b border-gray-800/50 last:border-b-0 hover:bg-purple-500/5 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <span className="text-white font-medium text-sm">{item.title}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">{item.description}</td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{item.owner}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Decisions;
