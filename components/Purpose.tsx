import React from 'react';
import { motion } from 'framer-motion';
import { DashboardContent } from '../types';

interface PurposeProps {
  content: DashboardContent['purpose'];
}

const Purpose: React.FC<PurposeProps> = ({ content }) => {
  return (
    <section id="purpose" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {content.title}
          </h2>
          <div className="h-1 w-20 bg-pr-yellow mt-6 rounded-full" />
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* The statement */}
          <div className="text-2xl lg:text-3xl leading-relaxed">
            <span className="text-gray-300">{content.text} </span>
            <span className="text-red-400 line-through decoration-2 decoration-red-500/70">
              {content.strikeText}
            </span>
          </div>

          {/* The positive framing */}
          <div className="pl-6 border-l-4 border-pr-yellow">
            <p className="text-2xl lg:text-3xl font-medium text-white leading-relaxed">
              {content.highlight}
            </p>
          </div>
          
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-6"
          >
            {content.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-pr-yellow/10 text-pr-yellow rounded-full border border-pr-yellow/30 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Purpose;
