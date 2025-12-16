import React from 'react';
import { ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';
import Section from './Section';
import { DashboardContent } from '../types';

interface ExecutiveSummaryProps {
  content: DashboardContent['summary'];
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ content }) => {
  return (
    <Section id="summary" title={content.title} subtitle={content.subtitle}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* What Worked */}
        <div className="bg-pr-gray/30 p-8 rounded-xl border border-green-900/30 hover:border-green-700/50 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <ThumbsUp className="text-green-500" />
            <h3 className="text-2xl font-bold text-white">{content.whatWorked.title}</h3>
          </div>
          <ul className="space-y-4">
            {content.whatWorked.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What Hurt */}
        <div className="bg-pr-gray/30 p-8 rounded-xl border border-red-900/30 hover:border-red-700/50 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <ThumbsDown className="text-red-500" />
            <h3 className="text-2xl font-bold text-white">{content.whatHurt.title}</h3>
          </div>
          <ul className="space-y-4">
            {content.whatHurt.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-pr-yellow/5 border-l-4 border-pr-yellow p-6 mb-16">
        <h4 className="text-pr-yellow font-bold text-lg mb-4 flex items-center gap-2">
          <AlertTriangle size={20}/> {content.lessons.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.lessons.items.map((lesson) => (
            <div key={lesson.id} className="bg-pr-black/50 p-4 rounded">
              <span className="text-2xl font-bold text-white block mb-2">{lesson.id}</span>
              <p className="text-gray-300 text-sm">{lesson.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">{content.decisions.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-pr-gray text-white uppercase font-bold text-xs">
                <tr>
                  <th className="p-3 rounded-tl-lg">{content.decisions.tableHeaders.id}</th>
                  <th className="p-3">{content.decisions.tableHeaders.decision}</th>
                  <th className="p-3">{content.decisions.tableHeaders.owner}</th>
                  <th className="p-3 rounded-tr-lg">{content.decisions.tableHeaders.evidence}</th>
                </tr>
              </thead>
              <tbody>
                {content.decisions.items.map((d, i) => (
                  <tr key={d.id} className={`border-b border-gray-800 hover:bg-white/5 transition-colors ${i === content.decisions.items.length - 1 ? 'border-0' : ''}`}>
                    <td className="p-3 font-mono text-pr-yellow">{d.id}</td>
                    <td className="p-3 text-white font-medium">{d.title}</td>
                    <td className="p-3">{d.owner}</td>
                    <td className="p-3 text-xs">{d.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default ExecutiveSummary;