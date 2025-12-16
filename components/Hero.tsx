import React from 'react';
import { ArrowDown, Users, Calendar, ShieldCheck } from 'lucide-react';
import { DashboardContent } from '../types';

interface HeroProps {
  content: DashboardContent['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 lg:px-16 bg-gradient-to-br from-pr-black to-pr-gray relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pr-yellow/5 skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pr-yellow/20 text-pr-yellow text-xs font-bold uppercase tracking-wider mb-6 border border-pr-yellow/20">
          {content.badge}
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
          {content.titleLine1} <br />
          <span className="text-pr-yellow">{content.titleLine2}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <Users className="text-pr-yellow" size={20} />
              <span>{content.ownerLabel}: <strong className="text-white">Gerardo Sánchez Galván</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-pr-yellow" size={20} />
              <span>{content.periodLabel}: <strong className="text-white">Nov 15 – Dec 15, 2025</strong></span>
            </div>
          </div>
          <div className="space-y-4 text-gray-400">
             <div className="flex items-center gap-3">
              <ShieldCheck className="text-pr-yellow" size={20} />
              <span>{content.statusLabel}: <strong className="text-white bg-green-900/40 text-green-400 px-2 py-0.5 rounded text-sm">{content.statusValue}</strong></span>
            </div>
            <p className="text-sm italic border-l-2 border-gray-600 pl-3">
              {content.evidenceNote}
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => document.getElementById('purpose')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-3 text-pr-white font-semibold transition-all hover:text-pr-yellow"
        >
          {content.cta}
          <div className="p-2 rounded-full bg-pr-gray group-hover:bg-pr-yellow group-hover:text-black transition-colors">
            <ArrowDown size={20} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;