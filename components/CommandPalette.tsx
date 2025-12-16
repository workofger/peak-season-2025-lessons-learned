import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Globe, 
  Download, 
  Presentation, 
  ArrowRight,
  Command
} from 'lucide-react';
import { NavItem } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  sections: NavItem[];
  onNavigate: (id: string) => void;
  onToggleLang: () => void;
  onExportPDF: () => void;
  onPresentationMode: () => void;
  lang: 'en' | 'es';
}

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'navigation' | 'action';
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  sections,
  onNavigate,
  onToggleLang,
  onExportPDF,
  onPresentationMode,
  lang,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build command list
  const commands: CommandItem[] = [
    // Navigation items
    ...sections.map((section) => ({
      id: section.id,
      label: `Go to ${section.label}`,
      icon: <FileText size={16} />,
      action: () => onNavigate(section.id),
      category: 'navigation' as const,
    })),
    // Action items
    {
      id: 'toggle-lang',
      label: lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés',
      icon: <Globe size={16} />,
      action: onToggleLang,
      category: 'action',
    },
    {
      id: 'export-pdf',
      label: lang === 'en' ? 'Export to PDF' : 'Exportar a PDF',
      icon: <Download size={16} />,
      action: onExportPDF,
      category: 'action',
    },
    {
      id: 'presentation',
      label: lang === 'en' ? 'Presentation Mode' : 'Modo Presentación',
      icon: <Presentation size={16} />,
      action: onPresentationMode,
      category: 'action',
    },
  ];

  // Filter commands based on query
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            onClose();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[201]"
          >
            <div className="bg-pr-dark border border-gray-800 rounded-2xl shadow-2xl overflow-hidden mx-4">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-800">
                <Search size={20} className="text-gray-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={lang === 'en' ? 'Search commands...' : 'Buscar comandos...'}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                />
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Command size={12} />
                  <span>K</span>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500">
                    {lang === 'en' ? 'No results found' : 'Sin resultados'}
                  </div>
                ) : (
                  <>
                    {/* Navigation Section */}
                    {filteredCommands.some((c) => c.category === 'navigation') && (
                      <div className="px-4 py-2">
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          {lang === 'en' ? 'Navigation' : 'Navegación'}
                        </span>
                      </div>
                    )}
                    {filteredCommands
                      .filter((c) => c.category === 'navigation')
                      .map((cmd, index) => {
                        const actualIndex = filteredCommands.indexOf(cmd);
                        return (
                          <button
                            key={cmd.id}
                            onClick={() => {
                              cmd.action();
                              onClose();
                            }}
                            onMouseEnter={() => setSelectedIndex(actualIndex)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                              selectedIndex === actualIndex
                                ? 'bg-pr-yellow/10 text-pr-yellow'
                                : 'text-gray-300 hover:bg-white/5'
                            }`}
                          >
                            <span className={selectedIndex === actualIndex ? 'text-pr-yellow' : 'text-gray-500'}>
                              {cmd.icon}
                            </span>
                            <span className="flex-1">{cmd.label}</span>
                            {selectedIndex === actualIndex && (
                              <ArrowRight size={14} className="text-pr-yellow" />
                            )}
                          </button>
                        );
                      })}

                    {/* Actions Section */}
                    {filteredCommands.some((c) => c.category === 'action') && (
                      <div className="px-4 py-2 mt-2">
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          {lang === 'en' ? 'Actions' : 'Acciones'}
                        </span>
                      </div>
                    )}
                    {filteredCommands
                      .filter((c) => c.category === 'action')
                      .map((cmd) => {
                        const actualIndex = filteredCommands.indexOf(cmd);
                        return (
                          <button
                            key={cmd.id}
                            onClick={() => {
                              cmd.action();
                              onClose();
                            }}
                            onMouseEnter={() => setSelectedIndex(actualIndex)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                              selectedIndex === actualIndex
                                ? 'bg-pr-yellow/10 text-pr-yellow'
                                : 'text-gray-300 hover:bg-white/5'
                            }`}
                          >
                            <span className={selectedIndex === actualIndex ? 'text-pr-yellow' : 'text-gray-500'}>
                              {cmd.icon}
                            </span>
                            <span className="flex-1">{cmd.label}</span>
                            {selectedIndex === actualIndex && (
                              <ArrowRight size={14} className="text-pr-yellow" />
                            )}
                          </button>
                        );
                      })}
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-gray-800 rounded">↑↓</span>
                    {lang === 'en' ? 'Navigate' : 'Navegar'}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-gray-800 rounded">↵</span>
                    {lang === 'en' ? 'Select' : 'Seleccionar'}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 bg-gray-800 rounded">Esc</span>
                  {lang === 'en' ? 'Close' : 'Cerrar'}
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

