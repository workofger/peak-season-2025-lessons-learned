/**
 * 🎯 PRESENTATION TEMPLATE - MAIN CONFIGURATION
 * 
 * This is the central configuration file for your presentation.
 * Customize this file to create a new presentation.
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * 📋 QUICK START:
 * 1. Update branding (name, logo)
 * 2. Choose a theme ('dark', 'light', 'corporate', 'nature')
 * 3. Define your sections
 * 4. Edit content files in /content folder
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { PresentationConfig } from '../types/config';

export const presentationConfig: PresentationConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 🏢 BRANDING
  // Replace with your company/project branding
  // ═══════════════════════════════════════════════════════════════════════════
  branding: {
    name: 'PartRunner',
    logo: './Logo.png',
    icon: './Isotipo.png',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎨 THEME
  // Options: 'dark' | 'light' | 'corporate' | 'nature'
  // ═══════════════════════════════════════════════════════════════════════════
  theme: 'dark',

  // ═══════════════════════════════════════════════════════════════════════════
  // 🌐 INTERNATIONALIZATION
  // ═══════════════════════════════════════════════════════════════════════════
  i18n: {
    defaultLanguage: 'en',
    languages: ['en', 'es'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📑 SECTIONS
  // Define the sections/slides of your presentation
  // The 'id' must match section IDs in your content files
  // ═══════════════════════════════════════════════════════════════════════════
  sections: [
    { id: 'hero', component: 'Hero', showInNav: false },
    { id: 'purpose', component: 'Purpose', showInNav: true },
    { id: 'peak-learnings', component: 'PeakLearnings', showInNav: true },
    { id: 'ab-testing', component: 'ABTestingSummary', showInNav: true },
    { id: 'fleet-survey', component: 'FleetSurvey', showInNav: true },
    { id: 'next-steps', component: 'NextSteps', showInNav: true },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ⚙️ FEATURES
  // Toggle features on/off for this presentation
  // ═══════════════════════════════════════════════════════════════════════════
  features: {
    commandPalette: true,      // ⌘K quick search
    presentationMode: true,    // ⌘⇧P fullscreen slides
    keyboardNavigation: true,  // Arrow keys, numbers 0-5
    progressBar: true,         // Top scroll progress indicator
    languageToggle: true,      // EN/ES language switch
    pdfExport: false,          // Export to PDF (requires html2pdf)
    deepLinking: true,         // URL hash navigation (#section-id)
    scrollSpy: true,           // Auto-highlight current section in nav
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📊 METADATA
  // Information about the presentation
  // ═══════════════════════════════════════════════════════════════════════════
  metadata: {
    title: 'Peak Season 2025 Learnings',
    subtitle: 'Product Team Lessons Learned',
    date: '2025-12-15',
    version: '1.0.0',
    author: 'Product Team',
    description: 'Interactive presentation for Peak Season 2025 Lessons Learned',
  },
};

export default presentationConfig;
