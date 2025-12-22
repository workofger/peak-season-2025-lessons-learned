/**
 * 🛠️ TEMPLATE SECTION COMPONENT
 * 
 * Shows how to create new presentations using the template.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Keyboard, 
  Command, 
  Presentation, 
  Globe, 
  Palette, 
  Smartphone,
  Github,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DashboardContent } from '../constants';

interface TemplateSectionProps {
  content: DashboardContent['template'];
}

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Keyboard,
  Command,
  Presentation,
  Globe,
  Palette,
  Smartphone,
};

const TemplateSection: React.FC<TemplateSectionProps> = ({ content }) => {
  return (
    <section id="template" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
            {content.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Use our professional template to create stunning interactive presentations in minutes.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-pr-gray/30 border border-gray-800 rounded-xl p-6 hover:border-pr-yellow/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-pr-yellow/10 flex items-center justify-center mb-4 group-hover:bg-pr-yellow/20 transition-colors">
                  <Icon size={24} className="text-pr-yellow" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pr-yellow/10 to-pr-yellow/5 border border-pr-yellow/30 rounded-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to create your presentation?
              </h3>
              <p className="text-gray-400">
                Clone the template and start building in minutes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={content.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-pr-yellow text-black font-bold px-6 py-3 rounded-lg hover:bg-pr-lightYellow transition-colors"
              >
                <Github size={20} />
                {content.cta.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={content.docs.url}
                className="flex items-center justify-center gap-2 bg-gray-800 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <BookOpen size={20} />
                {content.docs.label}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Start Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h4 className="text-lg font-bold text-white mb-4 text-center">Quick Start</h4>
          <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <div className="text-gray-500"># Clone the template</div>
            <div className="text-green-400">git clone https://github.com/workofger/peak-season-2025-lessons-learned.git my-presentation</div>
            <div className="text-gray-500 mt-4"># Install dependencies</div>
            <div className="text-green-400">cd my-presentation && npm install</div>
            <div className="text-gray-500 mt-4"># Start development server</div>
            <div className="text-green-400">npm run dev</div>
            <div className="text-gray-500 mt-4"># Deploy when ready</div>
            <div className="text-green-400">npm run deploy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplateSection;

