import React from 'react';
import Section from './Section';
import { DashboardContent } from '../types';
import { Link2 } from 'lucide-react';

interface RaciSectionProps {
  content: DashboardContent['raci'];
}

const RaciSection: React.FC<RaciSectionProps> = ({ content }) => {
  return (
    <Section id="raci" title={content.title} subtitle={content.subtitle}>
      
      {/* Contextual Link to Initiatives */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 rounded-r-lg">
          <div className="flex gap-4">
              <Link2 className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {content.description}
              </p>
          </div>
      </div>

      <div className="bg-pr-gray/20 rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-black/40 text-gray-400 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="p-4 w-20">{content.headers.type}</th>
                <th className="p-4 w-24">{content.headers.id}</th>
                <th className="p-4">{content.headers.item}</th>
                <th className="p-4 w-32 text-pr-yellow">{content.headers.r}</th>
                <th className="p-4 w-32 text-white">{content.headers.a}</th>
                <th className="p-4 w-32">{content.headers.c}</th>
                <th className="p-4 w-32">{content.headers.i}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {content.items.map((row) => (
                <tr key={row.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${row.type === 'Decision' ? 'bg-blue-900/30 text-blue-400' : 'bg-purple-900/30 text-purple-400'}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-gray-500">{row.id}</td>
                  <td className="p-4 text-white font-medium">{row.item}</td>
                  <td className="p-4 text-gray-300">{row.r}</td>
                  <td className="p-4 text-white font-bold">{row.a}</td>
                  <td className="p-4 text-gray-500 text-xs">{row.c}</td>
                  <td className="p-4 text-gray-500 text-xs">{row.i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500 justify-center">
        <span className="flex items-center gap-2"><strong className="text-pr-yellow">R</strong> {content.legend.r}</span>
        <span className="flex items-center gap-2"><strong className="text-white">A</strong> {content.legend.a}</span>
        <span className="flex items-center gap-2"><strong>C</strong> {content.legend.c}</span>
        <span className="flex items-center gap-2"><strong>I</strong> {content.legend.i}</span>
      </div>
    </Section>
  );
};

export default RaciSection;