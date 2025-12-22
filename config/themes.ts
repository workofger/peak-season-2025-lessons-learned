/**
 * 🎨 THEME SYSTEM
 * 
 * Predefined themes for presentations.
 * You can also create custom themes.
 */

export interface ThemeColors {
  // Core colors
  primary: string;
  primaryLight: string;
  secondary: string;
  accent: string;
  
  // Background colors
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  
  // UI colors
  border: string;
  borderLight: string;
  
  // Status colors
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// 🌙 DARK THEME (Default)
// ═══════════════════════════════════════════════════════════════════════════
export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#f59e0b',      // Amber
    primaryLight: '#fbbf24',
    secondary: '#3b82f6',    // Blue
    accent: '#8b5cf6',       // Purple
    
    bgPrimary: '#0f0f0f',
    bgSecondary: '#1a1a1a',
    bgTertiary: '#2d2d2d',
    
    textPrimary: '#f3f4f6',
    textSecondary: '#9ca3af',
    textMuted: '#6b7280',
    
    border: '#374151',
    borderLight: '#4b5563',
    
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// ☀️ LIGHT THEME
// ═══════════════════════════════════════════════════════════════════════════
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#2563eb',      // Blue
    primaryLight: '#3b82f6',
    secondary: '#7c3aed',    // Purple
    accent: '#f59e0b',       // Amber
    
    bgPrimary: '#ffffff',
    bgSecondary: '#f9fafb',
    bgTertiary: '#f3f4f6',
    
    textPrimary: '#111827',
    textSecondary: '#4b5563',
    textMuted: '#9ca3af',
    
    border: '#e5e7eb',
    borderLight: '#d1d5db',
    
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 🏢 CORPORATE THEME
// ═══════════════════════════════════════════════════════════════════════════
export const corporateTheme: Theme = {
  name: 'corporate',
  colors: {
    primary: '#0f172a',      // Slate
    primaryLight: '#1e293b',
    secondary: '#0ea5e9',    // Sky
    accent: '#f97316',       // Orange
    
    bgPrimary: '#0f172a',
    bgSecondary: '#1e293b',
    bgTertiary: '#334155',
    
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#64748b',
    
    border: '#334155',
    borderLight: '#475569',
    
    success: '#10b981',
    warning: '#f59e0b',
    error: '#f43f5e',
    info: '#0ea5e9',
  },
  fonts: {
    heading: "'Plus Jakarta Sans', 'Inter', sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'IBM Plex Mono', monospace",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 🌿 NATURE THEME
// ═══════════════════════════════════════════════════════════════════════════
export const natureTheme: Theme = {
  name: 'nature',
  colors: {
    primary: '#22c55e',      // Green
    primaryLight: '#4ade80',
    secondary: '#14b8a6',    // Teal
    accent: '#eab308',       // Yellow
    
    bgPrimary: '#052e16',
    bgSecondary: '#14532d',
    bgTertiary: '#166534',
    
    textPrimary: '#f0fdf4',
    textSecondary: '#bbf7d0',
    textMuted: '#86efac',
    
    border: '#166534',
    borderLight: '#22c55e',
    
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#38bdf8',
  },
  fonts: {
    heading: "'Outfit', 'Inter', sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'Fira Code', monospace",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 🎭 THEME REGISTRY
// ═══════════════════════════════════════════════════════════════════════════
export const themes: Record<string, Theme> = {
  dark: darkTheme,
  light: lightTheme,
  corporate: corporateTheme,
  nature: natureTheme,
};

export const getTheme = (themeName: string): Theme => {
  return themes[themeName] || darkTheme;
};

export default themes;

