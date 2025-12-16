import React from 'react';
import Section from './Section';
import { DashboardContent } from '../types';
import { ShieldAlert, Users, FileText } from 'lucide-react';

interface BeyondProductProps {
  content: DashboardContent['beyondProduct'];
}

const BeyondProduct: React.FC<BeyondProductProps> = ({ content }) => {
  return (
    <Section id="beyond-product" title={content.title} subtitle={content.subtitle}>
      <div className="space-y-6">
        {content.items.map((pack) => (
          <div key={pack.id} className="bg-pr-gray/10 border border-gray-800 rounded-xl p-6 hover:bg-pr-gray/20 transition-colors">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-500 font-mono text-sm">{pack.id}</span>
                        <h3 className="text-lg font-bold text-white">{pack.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{pack.subtitle}</p>
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-gray-900 rounded border border-gray-800 text-xs text-gray-500">
                        {pack.status}
                    </div>
                </div>

                <div className="md:w-2/3 border-l border-gray-800 md:pl-6 pl-0">
                    <ul className="space-y-2 mb-4">
                         {pack.content.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-300 leading-relaxed">
                                • {item}
                            </li>
                         ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {pack.artifacts.map((a, i) => (
                            <div key={i} className="text-xs text-gray-500 flex items-center gap-1">
                                <FileText size={10} /> {a}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BeyondProduct;