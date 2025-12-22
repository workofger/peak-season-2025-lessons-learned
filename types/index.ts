/**
 * 📦 TYPE EXPORTS
 * 
 * Central export file for all types.
 */

// Configuration types
export * from './config';

// Content types
export * from './content';

// Re-export commonly used types for convenience
export type {
  PresentationConfig,
  SectionConfig,
  FeaturesConfig,
} from './config';

export type {
  PresentationContent,
  NavItem,
  HeroContent,
  LearningItem,
  ComparisonResult,
  DataPoint,
  Pillar,
  Decision,
} from './content';


