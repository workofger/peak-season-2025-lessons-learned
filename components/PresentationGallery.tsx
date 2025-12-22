/**
 * 📚 PRESENTATION GALLERY COMPONENT
 * 
 * Displays all presentations with filtering and search.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  Tag,
  Grid,
  Rocket,
  Target,
  RefreshCw,
  Star,
  Clock,
  FileText
} from 'lucide-react';
import { DashboardContent, Presentation } from '../constants';

interface PresentationGalleryProps {
  content: DashboardContent['presentations'];
}

const iconMap: Record<string, React.ReactNode> = {
  Grid: <Grid size={16} />,
  Calendar: <Calendar size={16} />,
  Rocket: <Rocket size={16} />,
  Users: <Users size={16} />,
  Target: <Target size={16} />,
  RefreshCw: <RefreshCw size={16} />,
};

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  live: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Live' },
  draft: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Draft' },
  archived: { bg: 'bg-gray-500/20', text: 'text-gray-400', label: 'Archived' },
};

const PresentationCard: React.FC<{ presentation: Presentation; index: number }> = ({ 
  presentation, 
  index 
}) => {
  const status = statusColors[presentation.status];
  const isClickable = presentation.status === 'live' && presentation.url !== '#';

  return (
    <motion.a
      href={isClickable ? presentation.url : undefined}
      target={isClickable ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`block bg-pr-gray/30 border border-gray-800 rounded-xl p-6 transition-all ${
        isClickable 
          ? 'hover:border-pr-yellow hover:bg-pr-gray/50 cursor-pointer' 
          : 'opacity-70 cursor-default'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {presentation.featured && (
            <Star size={16} className="text-pr-yellow fill-pr-yellow" />
          )}
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
            {status.label}
          </span>
        </div>
        {isClickable && (
          <ExternalLink size={16} className="text-gray-500" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">
        {presentation.title}
      </h3>
      <p className="text-pr-yellow text-sm font-medium mb-3">
        {presentation.subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {presentation.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(presentation.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </span>
        <span className="flex items-center gap-1">
          <Users size={12} />
          {presentation.team}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {presentation.tags.slice(0, 3).map((tag, i) => (
          <span 
            key={i}
            className="px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-400"
          >
            {tag}
          </span>
        ))}
        {presentation.tags.length > 3 && (
          <span className="text-xs text-gray-500">
            +{presentation.tags.length - 3}
          </span>
        )}
      </div>
    </motion.a>
  );
};

const PresentationGallery: React.FC<PresentationGalleryProps> = ({ content }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredPresentations = activeCategory === 'all'
    ? content.all
    : content.all.filter(p => p.category === activeCategory);

  return (
    <section id="presentations" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
            {content.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            {content.intro}
          </p>
        </motion.div>

        {/* Featured Section */}
        {content.featured.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star size={18} className="text-pr-yellow" />
              Featured
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.featured.map((presentation, i) => (
                <PresentationCard 
                  key={presentation.id} 
                  presentation={presentation} 
                  index={i} 
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {content.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-pr-yellow text-black'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {iconMap[category.icon]}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* All Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPresentations.map((presentation, i) => (
            <PresentationCard 
              key={presentation.id} 
              presentation={presentation} 
              index={i} 
            />
          ))}
        </div>

        {filteredPresentations.length === 0 && (
          <div className="text-center py-12">
            <FileText size={48} className="text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500">No presentations in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PresentationGallery;

