import React from 'react';
import Section from './Section';
import { DashboardContent } from '../types';
import { Rocket, Zap, Search, ShieldAlert, FileCheck, BarChart, Smartphone } from 'lucide-react';

interface InitiativesSectionProps {
  content: DashboardContent['initiatives'];
}

const InitiativesSection: React.FC<InitiativesSectionProps> = ({ content }) => {
  const icons = [Rocket, Zap, Search, ShieldAlert, FileCheck, BarChart, Smartphone];

  return (
    <Section id="initiatives" title={content.title} subtitle={content.subtitle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.items.map((init, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={init.id} className="group relative bg-pr-gray/20 border border-gray-800 p-6 rounded-xl hover:bg-pr-gray/40 hover:border-pr-yellow/40 transition-all duration-300">
              <div className="absolute top-4 right-4 text-gray-700 font-mono text-xs opacity-50 group-hover:text-pr-yellow group-hover:opacity-100">
                INIT-{init.id}
              </div>
              
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-gray-400 group-hover:text-white group-hover:bg-pr-yellow/10 transition-colors">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pr-yellow transition-colors">{init.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed h-16 line-clamp-3">
                {init.description}
              </p>

              <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-xs">
                <div>
                  <span className="block text-gray-600 mb-1">{content.labels.owner}</span>
                  <span className="text-gray-300">{init.owner}</span>
                </div>
                <div className="text-right">
                  <span className="block text-gray-600 mb-1">{content.labels.evidence}</span>
                  <span className="text-pr-yellow bg-pr-yellow/10 px-2 py-0.5 rounded">{init.evidence}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default InitiativesSection;