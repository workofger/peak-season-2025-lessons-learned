import React from 'react';
import { motion } from 'framer-motion';
import { Users, Smartphone, MessageSquare, Star, Lightbulb, CreditCard, MessageCircle, ChevronRight, AlertTriangle } from 'lucide-react';
import { DashboardContent } from '../constants';

interface FleetSurveyProps {
  content: DashboardContent['fleetSurvey'];
}

const FleetSurvey: React.FC<FleetSurveyProps> = ({ content }) => {
  // Use data from content for feature importance
  const functionImportance = content.topPriorities.items;

  // Platform preference data from content
  const platformData = content.preferredExperience.data;

  return (
    <section id="fleet-survey" className="min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center">
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
          <div className="flex items-center justify-center gap-6 text-gray-400">
            <span className="flex items-center gap-2">
              <Users size={18} className="text-pr-yellow" />
              <strong className="text-white">{content.sampleSize}</strong>
            </span>
            <span className="hidden md:flex items-center gap-2">
              <MessageSquare size={18} className="text-pr-yellow" />
              <span>33 {content.labels.openComments}</span>
            </span>
          </div>
        </motion.div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pr-yellow/20 to-pr-yellow/5 rounded-2xl p-6 border border-pr-yellow/30 text-center"
          >
            <Star className="text-pr-yellow mx-auto mb-3" size={28} />
            <p className="text-gray-400 text-sm mb-1">{content.labels.topPriority}</p>
            <p className="text-3xl font-bold text-white">{functionImportance[0]?.label}</p>
            <p className="text-pr-yellow font-bold text-lg">4.94 / 5</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-pr-yellow/20 to-pr-yellow/5 rounded-2xl p-6 border border-pr-yellow/30 text-center"
          >
            <Smartphone className="text-pr-yellow mx-auto mb-3" size={28} />
            <p className="text-gray-400 text-sm mb-1">{content.labels.preferredPlatform}</p>
            <p className="text-3xl font-bold text-white">{platformData[0]?.label}</p>
            <p className="text-pr-yellow font-bold text-lg">{platformData[0]?.value}%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border border-blue-500/30 text-center"
          >
            <Lightbulb className="text-blue-400 mx-auto mb-3" size={28} />
            <p className="text-gray-400 text-sm mb-1">{content.labels.mainOpportunity}</p>
            <p className="text-xl font-bold text-white">{content.labels.optimizeApp}</p>
            <p className="text-blue-400 text-sm">{content.labels.forPayments}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Function Importance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
          >
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Star size={18} className="text-pr-yellow" />
              {content.labels.featureImportance}
            </h4>
            <div className="space-y-4">
              {functionImportance.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="space-y-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-pr-yellow font-bold">{(item.percent / 20).toFixed(2)}</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className={`h-full rounded-full ${i < 2 ? 'bg-pr-yellow' : 'bg-gray-600'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platform Preference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
          >
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Smartphone size={18} className="text-pr-yellow" />
              {content.labels.platformPreference}
            </h4>
            
            {/* Donut-like visualization */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <svg viewBox="0 0 120 120" className="w-40 h-40">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#374151" strokeWidth="16" />
                  <motion.circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="16"
                    strokeDasharray={`${43.7 * 3.14} ${100 * 3.14}`}
                    strokeDashoffset="0"
                    transform="rotate(-90 60 60)"
                    initial={{ strokeDasharray: "0 314" }}
                    whileInView={{ strokeDasharray: `${43.7 * 3.14} ${100 * 3.14}` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <motion.circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="#25D366"
                    strokeWidth="16"
                    strokeDasharray={`${35.4 * 3.14} ${100 * 3.14}`}
                    strokeDashoffset={`${-43.7 * 3.14}`}
                    transform="rotate(-90 60 60)"
                    initial={{ strokeDasharray: "0 314" }}
                    whileInView={{ strokeDasharray: `${35.4 * 3.14} ${100 * 3.14}` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Smartphone className="text-pr-yellow mb-1" size={24} />
                  <span className="text-2xl font-bold text-white">43.7%</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {platformData.map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: platform.color }}
                    />
                    <span className="text-gray-300">{platform.label}</span>
                  </div>
                  <span className="text-white font-bold">{platform.value}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-gradient-to-r from-pr-yellow/10 to-transparent rounded-2xl p-6 border-l-4 border-pr-yellow"
        >
          <h4 className="text-pr-yellow font-bold mb-4 flex items-center gap-2">
            <Lightbulb size={18} />
            {content.painPoints.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.painPoints.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="w-1.5 h-1.5 bg-pr-yellow rounded-full mt-2 flex-shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payments Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <CreditCard className="text-green-400" size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{content.paymentsInsights.headline}</h3>
              <p className="text-gray-400 text-sm">{content.paymentsInsights.subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart: What fleets want */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
            >
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">{content.labels.whatFleetsWant}</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{content.labels.breakdownDetail}</span>
                    <span className="text-green-400 font-bold">{content.paymentsInsights.chartData.breakdown.count}</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${content.paymentsInsights.chartData.breakdown.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-green-500"
                    />
                  </div>
                  <p className="text-green-400 text-xs mt-1">{content.paymentsInsights.chartData.breakdown.percent}%</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{content.labels.justTotal}</span>
                    <span className="text-gray-500 font-bold">{content.paymentsInsights.chartData.total.count}</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${content.paymentsInsights.chartData.total.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-gray-600"
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{content.paymentsInsights.chartData.total.percent}%</p>
                </div>
              </div>
            </motion.div>

            {/* Key Needs + Friction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
            >
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">{content.labels.topNeeds}</h4>
              <div className="space-y-3 mb-6">
                {content.paymentsInsights.keyNeeds.map((need, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <ChevronRight size={14} className="text-green-400 flex-shrink-0" />
                    <span>{need}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-400 text-xs font-bold uppercase mb-1">{content.labels.currentFriction}</p>
                    <p className="text-gray-400 text-sm">{content.paymentsInsights.friction}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fleet Verbatim Comments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-pr-gray/20 rounded-2xl p-6 border border-gray-800"
            >
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <MessageCircle size={16} className="text-blue-400" />
                {content.labels.fleetVerbatim}
              </h4>
              <div className="space-y-3">
                {content.paymentsInsights.fleetComments.map((comment, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
                  >
                    <p className="text-gray-300 text-sm italic">"{comment}"</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Insights Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 bg-green-500/5 rounded-2xl border border-green-500/20 overflow-hidden"
          >
            <div className="bg-green-500/10 px-6 py-3 border-b border-green-500/20">
              <h4 className="text-green-400 font-bold text-sm uppercase tracking-wide">
                {content.labels.productOpportunities}
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-green-500/10">
              {content.paymentsInsights.productInsights.map((insight, i) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="p-4 hover:bg-green-500/5 transition-colors"
                >
                  <h5 className="text-white font-medium text-sm mb-1">{insight.title}</h5>
                  <p className="text-gray-500 text-xs">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSurvey;
