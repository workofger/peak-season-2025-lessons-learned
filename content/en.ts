/**
 * 🇺🇸 ENGLISH CONTENT
 * 
 * This file contains all the English content for the presentation.
 * Edit this file to customize your presentation content.
 */

import { PresentationContent } from '../types';

export const enContent: PresentationContent = {
  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════
  nav: {
    title: 'Presentation',
    items: [
      { id: 'hero', label: 'Start' },
      { id: 'purpose', label: 'Purpose' },
      { id: 'learnings', label: '1. Key Learnings' },
      { id: 'comparison', label: '2. Analysis' },
      { id: 'survey', label: '3. Survey Results' },
      { id: 'next-steps', label: '4. Next Steps' },
    ],
    footer: {
      line1: 'Q4 2025',
      line2: 'Product Team',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HERO SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  hero: {
    badge: 'Product Team',
    title: 'Presentation Title',
    subtitle: 'A compelling subtitle that captures attention',
    period: 'Nov 15 – Dec 15, 2025',
    cta: 'View Content',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PURPOSE SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  purpose: {
    title: 'Purpose',
    subtitle: 'Why we are here',
    text: 'This presentation aims to',
    strikeText: '"just inform."',
    highlight: 'It should produce actionable insights, measurable improvements, and clear ownership.',
    tags: ['Actionable', 'Measurable', 'Clear'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KEY LEARNINGS SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  learnings: {
    title: 'Key Learnings',
    subtitle: 'What we discovered',
    intro: 'First-person insights from the team during the analysis period.',
    sections: {
      success: {
        title: 'What Worked',
        items: [
          {
            type: 'success',
            text: 'First successful finding',
            example: 'Specific example or evidence supporting this finding.',
            implication: 'What this means for the product/business.',
            actions: ['Action item 1', 'Action item 2'],
          },
          {
            type: 'success',
            text: 'Second successful finding',
            example: 'Another specific example.',
            implication: 'Business implication.',
            actions: ['Next step 1', 'Next step 2'],
          },
        ],
      },
      warning: {
        title: "What Didn't Work",
        items: [
          {
            type: 'warning',
            text: 'First challenge identified',
            example: 'Evidence of the problem.',
            implication: 'Impact on the product/business.',
            actions: ['Mitigation step 1', 'Mitigation step 2'],
          },
        ],
      },
      insights: {
        title: 'Key Insights',
        items: [
          {
            type: 'info',
            text: 'Important insight #1',
            example: 'Supporting evidence.',
            implication: 'Strategic implication.',
          },
          {
            type: 'info',
            text: 'Important insight #2',
            example: 'Supporting evidence.',
            implication: 'Strategic implication.',
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPARISON SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  comparison: {
    title: 'Comparative Analysis',
    subtitle: 'Option A vs Option B',
    labelA: 'Option A',
    labelB: 'Option B',
    description: {
      title: 'What We Analyzed',
      items: [
        'Comparison methodology',
        'Sample size and period',
        'Key metrics evaluated',
      ],
    },
    findings: {
      title: 'Key Findings',
      items: [
        'Finding 1 with quantitative data',
        'Finding 2 with percentage improvement',
        'Finding 3 with business impact',
      ],
    },
    conclusion: {
      title: 'Conclusion',
      text: 'Summary of the analysis and recommended approach based on findings.',
    },
    results: [
      { metric: 'Metric 1', valueA: '100', valueB: '85', winner: 'a' },
      { metric: 'Metric 2', valueA: '75%', valueB: '82%', winner: 'b' },
      { metric: 'Metric 3', valueA: '4.5', valueB: '4.2', winner: 'a' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SURVEY SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  survey: {
    title: 'Survey Results',
    subtitle: 'Voice of the Customer',
    sampleSize: 'n = 100 responses (65% engagement)',
    highlights: ['100 participants surveyed', '25 open comments received'],
    charts: [
      {
        title: 'Preferred Platform',
        data: [
          { label: 'Mobile App', value: 45, color: '#f59e0b' },
          { label: 'Web', value: 35, color: '#3b82f6' },
          { label: 'Desktop', value: 20, color: '#6b7280' },
        ],
      },
      {
        title: 'Feature Importance',
        data: [
          { label: 'Feature A', value: 95, color: '#f59e0b' },
          { label: 'Feature B', value: 88, color: '#f59e0b' },
          { label: 'Feature C', value: 76, color: '#6b7280' },
          { label: 'Feature D', value: 65, color: '#6b7280' },
        ],
      },
    ],
    insights: {
      title: 'Key Insights',
      items: [
        'Insight from survey data #1',
        'Insight from survey data #2',
        'Opportunity identified from feedback',
      ],
    },
    labels: {
      topPriority: 'Top Priority',
      preferredPlatform: 'Preferred Platform',
      mainOpportunity: 'Main Opportunity',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEXT STEPS SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  nextSteps: {
    title: 'Next Steps',
    subtitle: 'Actions & Roadmap',
    pillars: [
      {
        id: 'pillar-a',
        title: 'Strategic Pillar A',
        items: [
          'Initiative 1',
          'Initiative 2',
          'Initiative 3',
        ],
        owner: 'Team A',
        color: 'primary',
      },
      {
        id: 'pillar-b',
        title: 'Strategic Pillar B',
        items: [
          'Initiative 1',
          'Initiative 2',
          'Initiative 3',
        ],
        owner: 'Team B',
        color: 'secondary',
      },
      {
        id: 'pillar-c',
        title: 'Strategic Pillar C',
        items: [
          'Initiative 1',
          'Initiative 2',
        ],
        owner: 'Team C',
        color: 'success',
      },
    ],
    decisions: {
      title: 'Decisions Made',
      items: [
        {
          id: 'DEC-1',
          title: 'Decision Title',
          description: 'Brief description of the decision and its rationale',
          owner: 'Owner Name',
          status: 'approved',
        },
      ],
    },
    credits: {
      title: 'Credits',
      items: [
        { name: 'Person 1', role: 'Role Description' },
        { name: 'Person 2', role: 'Role Description' },
        { name: 'Person 3', role: 'Role Description' },
      ],
    },
    closing: 'Final message or call to action for the audience.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UI LABELS
  // ═══════════════════════════════════════════════════════════════════════════
  ui: {
    contents: 'Contents',
    navigate: 'Navigate',
    select: 'Select',
    close: 'Close',
    search: 'Search commands...',
    noResults: 'No results found',
    pressEscToExit: 'Press ESC to exit',
  },
};

export default enContent;


