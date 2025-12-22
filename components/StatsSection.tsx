/**
 * 📊 STATS SECTION COMPONENT
 * 
 * Displays overview statistics for the presentation hub.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { DashboardContent } from '../constants';

interface StatsSectionProps {
  content: DashboardContent['stats'];
}

const StatsSection: React.FC<StatsSectionProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 px-8 lg:px-16 bg-pr-dark/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.items.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mb-1">
                {stat.label}
              </div>
              {stat.trend && (
                <div className="flex items-center justify-center gap-1 text-green-400 text-xs">
                  <TrendingUp size={12} />
                  {stat.trend}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;

