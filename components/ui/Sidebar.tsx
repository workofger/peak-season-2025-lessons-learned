/**
 * 📑 SIDEBAR COMPONENT
 * 
 * Navigation sidebar for desktop view.
 */

import React from 'react';
import { NavItem } from '../../types';
import { useTheme } from '../../context';

interface SidebarProps {
  title: string;
  logo?: string;
  items: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
  footer?: {
    line1: string;
    line2?: string;
  };
}

export const Sidebar: React.FC<SidebarProps> = ({
  title,
  logo,
  items,
  activeSection,
  onNavigate,
  footer,
}) => {
  const { colors } = useTheme();

  return (
    <nav 
      className="fixed left-0 top-0 h-full w-64 backdrop-blur border-r hidden lg:flex flex-col z-50"
      style={{ 
        backgroundColor: `${colors.bgPrimary}f2`,
        borderColor: colors.border,
      }}
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          {logo && (
            <img
              src={logo}
              alt={title}
              className="w-10 h-10 rounded-lg"
            />
          )}
          <span 
            className="font-bold text-xl"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 px-4 space-y-1 overflow-y-auto">
        {items.map((item, index) => {
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3"
              style={{
                backgroundColor: isActive ? `${colors.primary}15` : 'transparent',
                color: isActive ? colors.primary : colors.textMuted,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = colors.bgTertiary;
                  e.currentTarget.style.color = colors.textPrimary;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.textMuted;
                }
              }}
            >
              <span 
                className="text-xs font-mono w-4"
                style={{ color: colors.textMuted }}
              >
                {index}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      {footer && (
        <div 
          className="p-4 border-t text-xs text-center"
          style={{ 
            borderColor: colors.border,
            color: colors.textMuted,
          }}
        >
          <p>{footer.line1}</p>
          {footer.line2 && <p>{footer.line2}</p>}
        </div>
      )}
    </nav>
  );
};

export default Sidebar;

