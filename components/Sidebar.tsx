import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { DashboardContent } from '../types';

interface SidebarProps {
  activeSection: string;
  content: DashboardContent['nav'];
  onNavigate: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, content, onNavigate }) => {
  return (
    <nav 
      className="fixed left-0 top-0 h-full w-64 bg-pr-black border-r border-pr-gray hidden lg:flex flex-col z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="p-8 pb-4">
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="https://media.licdn.com/dms/image/v2/C4E0BAQG0Qe2-6i5mOQ/company-logo_200_200/company-logo_200_200/0/1630646797207?e=2147483647&v=beta&t=7y2k2Q_498-8f8X_949494949" 
            alt="PartRunner Logo" 
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="font-bold text-xl tracking-tight text-white">{content.title}</span>
        </div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">{content.contents}</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-1 scrollbar-hide">
        {content.items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-pr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-pr-black ${
              activeSection === item.id
                ? 'bg-pr-yellow/10 text-pr-yellow border-l-2 border-pr-yellow'
                : 'text-gray-400 hover:bg-pr-gray hover:text-white'
            }`}
            aria-current={activeSection === item.id ? 'page' : undefined}
            tabIndex={0}
          >
            <span className="flex items-center gap-2">
              <span className="text-gray-600 text-xs font-mono w-4">{index}</span>
              {item.label}
            </span>
            {activeSection === item.id && <ChevronsRight size={14} />}
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-pr-gray">
        <div className="text-xs text-gray-500">
          <p>{content.footer.line1}</p>
          <p>{content.footer.line2}</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
