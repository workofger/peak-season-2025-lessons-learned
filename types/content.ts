/**
 * 📄 CONTENT TYPES
 * 
 * TypeScript interfaces for presentation content.
 * These types define the structure of your content files.
 */

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════
export interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

export interface NavContent {
  title: string;
  items: NavItem[];
  footer?: {
    line1: string;
    line2?: string;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════════════════════
export interface HeroContent {
  badge?: string;
  title: string;
  subtitle?: string;
  period?: string;
  cta?: string;
  backgroundImage?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// PURPOSE / INTRO SECTION
// ═══════════════════════════════════════════════════════════════════════════
export interface PurposeContent {
  title: string;
  subtitle?: string;
  text: string;
  strikeText?: string;
  highlight?: string;
  tags?: string[];
}

// ═══════════════════════════════════════════════════════════════════════════
// LEARNING / INSIGHT ITEMS
// ═══════════════════════════════════════════════════════════════════════════
export type ItemType = 'success' | 'warning' | 'info' | 'neutral';

export interface LearningItem {
  type: ItemType;
  text: string;
  example?: string;
  implication?: string;
  actions?: string[];
}

export interface LearningSection {
  title: string;
  items: LearningItem[];
}

export interface LearningsContent {
  title: string;
  subtitle?: string;
  intro?: string;
  sections: Record<string, LearningSection>;
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPARISON / A-B TESTING
// ═══════════════════════════════════════════════════════════════════════════
export interface ComparisonResult {
  metric: string;
  valueA: string;
  valueB: string;
  winner: 'a' | 'b' | 'tie';
}

export interface ComparisonContent {
  title: string;
  subtitle?: string;
  labelA: string;
  labelB: string;
  summary?: string;
  description?: {
    title: string;
    items: string[];
  };
  findings?: {
    title: string;
    items: string[];
  };
  conclusion?: {
    title: string;
    text: string;
  };
  results: ComparisonResult[];
}

// ═══════════════════════════════════════════════════════════════════════════
// SURVEY / DATA SECTION
// ═══════════════════════════════════════════════════════════════════════════
export interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartData {
  title: string;
  data: DataPoint[];
}

export interface SurveyContent {
  title: string;
  subtitle?: string;
  sampleSize?: string;
  highlights?: string[];
  charts: ChartData[];
  insights?: {
    title: string;
    items: string[];
  };
  deepDive?: {
    headline: string;
    subtitle?: string;
    content: Record<string, unknown>;
  };
  labels?: Record<string, string>;
}

// ═══════════════════════════════════════════════════════════════════════════
// NEXT STEPS / ROADMAP
// ═══════════════════════════════════════════════════════════════════════════
export interface Pillar {
  id: string;
  title: string;
  items: string[];
  owner?: string;
  icon?: string;
  color?: string;
}

export interface Decision {
  id: string;
  title: string;
  description?: string;
  owner?: string;
  status?: 'approved' | 'pending' | 'rejected';
}

export interface Credit {
  name: string;
  role: string;
  avatar?: string;
}

export interface NextStepsContent {
  title: string;
  subtitle?: string;
  pillars?: Pillar[];
  decisions?: {
    title: string;
    items: Decision[];
  };
  timeline?: {
    title: string;
    items: { date: string; event: string }[];
  };
  credits?: {
    title: string;
    items: Credit[];
  };
  closing?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// GENERIC CONTENT SECTION
// ═══════════════════════════════════════════════════════════════════════════
export interface GenericSectionContent {
  title: string;
  subtitle?: string;
  body?: string;
  items?: { title: string; description: string }[];
  image?: string;
  cta?: { label: string; href: string };
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPLETE PRESENTATION CONTENT
// ═══════════════════════════════════════════════════════════════════════════
export interface PresentationContent {
  nav: NavContent;
  hero: HeroContent;
  purpose?: PurposeContent;
  learnings?: LearningsContent;
  comparison?: ComparisonContent;
  survey?: SurveyContent;
  nextSteps?: NextStepsContent;
  sections?: Record<string, GenericSectionContent>;
  
  // UI Labels
  ui?: {
    contents?: string;
    navigate?: string;
    select?: string;
    close?: string;
    search?: string;
    noResults?: string;
    pressEscToExit?: string;
  };
}


