import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Calendar } from 'lucide-react';
import { DashboardContent } from '../types';

interface HeroProps {
  content: DashboardContent['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pr-black via-pr-dark to-pr-black" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pr-yellow/5 skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pr-yellow/20 text-pr-yellow text-sm font-bold uppercase tracking-wider border border-pr-yellow/30">
            {content.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl lg:text-7xl font-bold text-white mb-4"
        >
          {content.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl lg:text-2xl text-pr-yellow font-medium mb-8"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-gray-400 mb-12"
        >
          <Calendar size={18} />
          <span>{content.period}</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => document.getElementById('peak-learnings')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-3 mx-auto text-white font-semibold hover:text-pr-yellow transition-colors"
        >
          {content.cta}
          <div className="p-2 rounded-full bg-pr-gray group-hover:bg-pr-yellow group-hover:text-black transition-colors">
            <ArrowDown size={20} />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
