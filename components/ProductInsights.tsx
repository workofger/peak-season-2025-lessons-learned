import React, { useState } from 'react';
import Section from './Section';
import { DashboardContent, EvidencePack } from '../types';
import { BrainCircuit, MessageSquareQuote, FileText, ArrowRight, X, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductInsightsProps {
  content: DashboardContent['productInsights'];
}

const ProductInsights: React.FC<ProductInsightsProps> = ({ content }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = content.items.find(item => item.id === selectedId);

  const TrendIcon = ({ trend }: { trend?: 'up' | 'down' | 'neutral' }) => {
    if (trend === 'up') return <TrendingUp size={16} className="text-green-400" />;
    if (trend === 'down') return <TrendingDown size={16} className="text-red-400" />;
    return <Minus size={16} className="text-gray-400" />;
  };

  return (
    <Section id="product-insights" title={content.title} subtitle={content.subtitle}>
      <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
        <ArrowRight size={14} className="text-pr-yellow" /> {content.clickHint}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {content.items.map((pack) => (
          <motion.div
            layoutId={`card-${pack.id}`}
            key={pack.id}
            onClick={() => setSelectedId(pack.id)}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer relative bg-gradient-to-br from-pr-gray/50 to-gray-900/50 p-8 rounded-2xl border border-pr-yellow/20 hover:border-pr-yellow/60 transition-colors duration-300 group overflow-hidden"
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-pr-yellow/10 text-pr-yellow text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl border-l border-b border-pr-yellow/20">
              {pack.id}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                layoutId={`icon-${pack.id}`}
                className="w-12 h-12 rounded-full bg-pr-yellow/20 flex items-center justify-center text-pr-yellow shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                {pack.id === 'EP-02' ? <MessageSquareQuote size={24} /> : <BrainCircuit size={24} />}
              </motion.div>
              <div>
                <motion.h3 layoutId={`title-${pack.id}`} className="text-xl font-bold text-white group-hover:text-pr-yellow transition-colors">{pack.title}</motion.h3>
                <motion.p layoutId={`subtitle-${pack.id}`} className="text-gray-400 text-sm">{pack.subtitle}</motion.p>
              </div>
            </div>

            <div className="mb-6">
                <ul className="space-y-3">
                    {pack.content.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                             <span className="w-1.5 h-1.5 bg-pr-yellow rounded-full mt-1.5 flex-shrink-0" />
                            <span className="line-clamp-2">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
             <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                    {pack.artifacts.slice(0, 1).map((artifact, i) => (
                        <span key={i} className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-gray-700 text-xs text-gray-400">
                            <FileText size={12} /> {artifact}
                        </span>
                    ))}
                    {pack.artifacts.length > 1 && <span className="text-xs text-gray-500 py-1.5">+more</span>}
                </div>
                <div className="text-pr-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              className="w-full max-w-4xl bg-[#151515] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-full"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side: Summary (Similar to card) */}
                <div className="md:w-1/3 bg-gray-900/50 p-8 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col">
                   <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        layoutId={`icon-${selectedId}`}
                        className="w-14 h-14 rounded-full bg-pr-yellow/20 flex items-center justify-center text-pr-yellow shadow-[0_0_15px_rgba(245,158,11,0.2)] flex-shrink-0"
                      >
                        {selectedId === 'EP-02' ? <MessageSquareQuote size={28} /> : <BrainCircuit size={28} />}
                      </motion.div>
                      <div>
                        <motion.h3 layoutId={`title-${selectedId}`} className="text-2xl font-bold text-white leading-tight">{selectedItem.title}</motion.h3>
                        <motion.p layoutId={`subtitle-${selectedId}`} className="text-pr-yellow text-sm font-medium mt-1">{selectedItem.subtitle}</motion.p>
                      </div>
                    </div>

                    <div className="space-y-6 flex-1 overflow-y-auto">
                         <div>
                            <h5 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-3">Key Points</h5>
                            <ul className="space-y-3">
                                {selectedItem.content.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-pr-yellow rounded-full mt-1.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                         </div>
                         
                         <div>
                             <h5 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-3">Artifacts</h5>
                             <div className="flex flex-wrap gap-2">
                                {selectedItem.artifacts.map((artifact, i) => (
                                    <span key={i} className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-gray-700 text-xs text-gray-400">
                                        <FileText size={12} /> {artifact}
                                    </span>
                                ))}
                            </div>
                         </div>
                    </div>
                </div>

                {/* Right Side: Deep Dive Details (New Animation Entry) */}
                <div className="md:w-2/3 p-8 bg-[#151515] overflow-y-auto">
                    {selectedItem.details && (
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-pr-yellow rounded-full"></span>
                                    Context
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {selectedItem.details.context}
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {selectedItem.details.dataPoints.map((dp, idx) => (
                                    <div key={idx} className="bg-gray-800/30 border border-gray-800 p-4 rounded-xl text-center">
                                        <div className="flex justify-center mb-2">
                                            <TrendIcon trend={dp.trend} />
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">{dp.value}</div>
                                        <div className="text-xs text-gray-500 font-medium uppercase">{dp.label}</div>
                                    </div>
                                ))}
                            </div>

                            {selectedItem.details.quote && (
                                <blockquote className="relative p-6 bg-gradient-to-r from-pr-yellow/10 to-transparent rounded-r-xl border-l-4 border-pr-yellow italic text-gray-300">
                                    <span className="absolute top-2 left-2 text-pr-yellow opacity-30 text-4xl">"</span>
                                    {selectedItem.details.quote}
                                </blockquote>
                            )}

                            <div className="p-5 bg-green-900/10 border border-green-900/30 rounded-xl">
                                <h4 className="text-green-400 font-bold mb-2 text-sm uppercase tracking-wide">Conclusion</h4>
                                <p className="text-gray-300 font-medium">
                                    {selectedItem.details.conclusion}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default ProductInsights;