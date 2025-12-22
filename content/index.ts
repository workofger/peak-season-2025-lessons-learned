/**
 * 📚 CONTENT EXPORTS
 * 
 * Central export file for all content.
 * 
 * For this template, we're using the existing CONTENT from constants.ts
 * which already has the Peak Season content.
 * 
 * For new presentations, create new content files following the
 * structure in en.ts and es.ts templates.
 */

import { CONTENT } from '../constants';

// Use existing content for backward compatibility
export const content = CONTENT;

// Helper functions
export const getContent = (lang: string) => {
  return content[lang as keyof typeof content] || content.en;
};

export const getAvailableLanguages = (): string[] => {
  return Object.keys(content);
};

export default content;
