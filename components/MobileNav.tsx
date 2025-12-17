import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronsRight } from 'lucide-react';
import { DashboardContent } from '../types';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  content: DashboardContent['nav'];
  onNavigate: (id: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isOpen, 
  onToggle, 
  activeSection, 
  content, 
  onNavigate 
}) => {
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-[60] lg:hidden flex items-center justify-center w-12 h-12 bg-pr-black/90 backdrop-blur-md border border-pr-gray rounded-xl text-white hover:text-pr-yellow hover:border-pr-yellow transition-all"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] lg:hidden"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 h-full w-72 bg-pr-black border-r border-pr-gray z-[56] lg:hidden flex flex-col"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {/* Header */}
              <div className="p-6 pt-20 border-b border-pr-gray">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="./Isotipo.png" 
                    alt="PartRunner Logo" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <span className="font-bold text-xl tracking-tight text-white">{content.title}</span>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{content.contents}</p>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4 px-3">
                {content.items.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between mb-1 ${
                      activeSection === item.id
                        ? 'bg-pr-yellow/10 text-pr-yellow border-l-2 border-pr-yellow'
                        : 'text-gray-400 hover:bg-pr-gray hover:text-white'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                    {activeSection === item.id && <ChevronsRight size={14} />}
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-pr-gray">
                <div className="text-xs text-gray-500 text-center">
                  <p>{content.footer.line1}</p>
                  <p>{content.footer.line2}</p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

