/**
 * 🎨 THEME CONTEXT
 * 
 * Provides theme configuration throughout the application.
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, getTheme, darkTheme } from '../config/themes';

interface ThemeContextValue {
  theme: Theme;
  themeName: string;
  setTheme: (name: string) => void;
  colors: Theme['colors'];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  initialTheme?: string;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme = 'dark',
  children,
}) => {
  const [themeName, setThemeName] = useState(initialTheme);
  const [theme, setThemeValue] = useState<Theme>(getTheme(initialTheme));

  useEffect(() => {
    const newTheme = getTheme(themeName);
    setThemeValue(newTheme);
    
    // Apply CSS variables to document root
    const root = document.documentElement;
    const colors = newTheme.colors;
    
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-light', colors.primaryLight);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-bg-primary', colors.bgPrimary);
    root.style.setProperty('--color-bg-secondary', colors.bgSecondary);
    root.style.setProperty('--color-bg-tertiary', colors.bgTertiary);
    root.style.setProperty('--color-text-primary', colors.textPrimary);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-border-light', colors.borderLight);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-error', colors.error);
    root.style.setProperty('--color-info', colors.info);
    
    // Apply fonts
    root.style.setProperty('--font-heading', newTheme.fonts.heading);
    root.style.setProperty('--font-body', newTheme.fonts.body);
    root.style.setProperty('--font-mono', newTheme.fonts.mono);
  }, [themeName]);

  const setTheme = (name: string) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setTheme,
        colors: theme.colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return default values if not in provider
    return {
      theme: darkTheme,
      themeName: 'dark',
      setTheme: () => {},
      colors: darkTheme.colors,
    };
  }
  return context;
};

export default ThemeProvider;

