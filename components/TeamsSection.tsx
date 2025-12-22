/**
 * 👥 TEAMS SECTION COMPONENT
 * 
 * Displays presentations organized by team.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Palette, 
  Code, 
  Settings, 
  Crown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { DashboardContent, Presentation } from '../constants';

interface TeamsSectionProps {
  content: DashboardContent['teams'];
  presentations: Presentation[];
}

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Package,
  Palette,
  Code,
  Settings,
  Crown,
};

const TeamsSection: React.FC<TeamsSectionProps> = ({ content, presentations }) => {
  // Group presentations by team
  const presentationsByTeam = content.list.reduce((acc, team) => {
    acc[team.name] = presentations.filter(
      p => p.team.toLowerCase() === team.name.toLowerCase()
    );
    return acc;
  }, {} as Record<string, Presentation[]>);

  return (
    <section id="teams" className="min-h-screen py-20 px-8 lg:px-16 bg-gradient-to-b from-pr-black to-pr-dark">
      <div className="max-w-6xl mx-auto">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {content.title}
          </h2>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.list.map((team, index) => {
            const Icon = iconMap[team.icon] || Package;
            const teamPresentations = presentationsByTeam[team.name] || [];
            const livePresentations = teamPresentations.filter(p => p.status === 'live');

            return (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-pr-gray/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
              >
                {/* Team Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${team.color}20` }}
                  >
                    <Icon size={24} style={{ color: team.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{team.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {teamPresentations.length} presentation{teamPresentations.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Presentations List */}
                <div className="space-y-3">
                  {livePresentations.length > 0 ? (
                    livePresentations.slice(0, 3).map((presentation) => (
                      <a
                        key={presentation.id}
                        href={presentation.url !== '#' ? presentation.url : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-3 rounded-lg bg-gray-800/50 transition-all ${
                          presentation.url !== '#' 
                            ? 'hover:bg-gray-800 cursor-pointer' 
                            : 'cursor-default'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">
                            {presentation.title}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {new Date(presentation.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </p>
                        </div>
                        {presentation.url !== '#' && (
                          <ExternalLink size={14} className="text-gray-500 flex-shrink-0 ml-2" />
                        )}
                      </a>
                    ))
                  ) : (
                    <p className="text-gray-600 text-sm text-center py-4">
                      No live presentations yet
                    </p>
                  )}

                  {livePresentations.length > 3 && (
                    <button className="w-full flex items-center justify-center gap-1 text-pr-yellow text-sm font-medium py-2 hover:underline">
                      View all {livePresentations.length}
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;

