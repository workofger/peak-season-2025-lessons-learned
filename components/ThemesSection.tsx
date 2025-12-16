import React from 'react';
import Section from './Section';
import { DashboardContent } from '../types';
import { Eye, Target, CheckCircle2, Zap, RefreshCw, Bot, ArrowRight, Activity } from 'lucide-react';

interface ThemesSectionProps {
  content: DashboardContent['themes'];
}

const ThemesSection: React.FC<ThemesSectionProps> = ({ content }) => {
  const icons = {
    eye: Eye,
    target: Target,
    check: CheckCircle2,
    zap: Zap,
    refresh: RefreshCw,
    bot: Bot
  };

  return (
    <Section id="themes" title={content.title} subtitle={content.subtitle}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((theme, i) => {
            const Icon = icons[theme.iconKey as keyof typeof icons] || Activity;
            return (
              <div key={i} className="group relative bg-[#151515] rounded-xl border border-gray-800 overflow-hidden hover:border-pr-yellow/40 transition-all duration-300">
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-pr-gray rounded-lg flex items-center justify-center text-gray-300 group-hover:text-pr-yellow group-hover:bg-pr-yellow/10 transition-colors">
                                <Icon size={20} />
                            </div>
                            <h4 className="font-bold text-lg text-white group-hover:text-pr-yellow transition-colors">{theme.title}</h4>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative pl-4 border-l-2 border-red-900/40">
                             <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">{content.labels.diagnosis}</p>
                             <p className="text-gray-400 text-sm leading-relaxed">{theme.diagnosis}</p>
                        </div>
                        
                        <div className="flex justify-center text-gray-700">
                            <ArrowRight size={16} className="rotate-90 md:rotate-0" />
                        </div>

                        <div className="relative pl-4 border-l-2 border-pr-yellow">
                             <p className="text-xs font-bold text-pr-yellow uppercase tracking-wider mb-1">{content.labels.action}</p>
                             <p className="text-white text-sm font-medium leading-relaxed">{theme.action}</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-3 bg-gray-900/50 border-t border-gray-800 flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-mono">{content.labels.linkedTo}</span>
                    <div className="flex gap-2">
                        {theme.relatedIds.map(id => (
                            <span key={id} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700 font-mono">
                                {id}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            );
          })}
       </div>
    </Section>
  );
};

export default ThemesSection;