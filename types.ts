export interface NavItem {
  id: string;
  label: string;
}

export interface LearningItem {
  type: 'worked' | 'didnt' | 'truth';
  text: string;
  example?: string;
}

export interface ABTestResult {
  metric: string;
  ai: string;
  human: string;
  winner: 'ai' | 'human' | 'tie';
}

export interface SurveyDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface NextStepPillar {
  id: 'A' | 'B' | 'C';
  title: string;
  items: string[];
  owner: string;
}

export interface Decision {
  id: string;
  title: string;
  description: string;
  owner: string;
  type: 'decision' | 'proposal';
}

export interface DashboardContent {
  nav: {
    title: string;
    items: NavItem[];
    footer: {
      line1: string;
      line2: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    period: string;
    cta: string;
  };
  purpose: {
    title: string;
    subtitle: string;
    text: string;
    strikeText: string;
    highlight: string;
    tags: string[];
  };
  peakLearnings: {
    title: string;
    subtitle: string;
    intro: string;
    sections: {
      worked: { title: string; items: LearningItem[] };
      didnt: { title: string; items: LearningItem[] };
      truths: { title: string; items: LearningItem[] };
    };
  };
  decisions: {
    title: string;
    subtitle: string;
    description: string;
    decisionsTitle: string;
    proposalsTitle: string;
    items: Decision[];
    labels: {
      committed: string;
      underReview: string;
      decision: string;
      proposal: string;
      descriptionCol: string;
      owner: string;
    };
  };
  abTesting: {
    title: string;
    subtitle: string;
    whatWeTested: {
      title: string;
      items: string[];
    };
    whatWeLearned: {
      title: string;
      items: string[];
    };
    whatsNext: {
      title: string;
      text: string;
    };
    results: ABTestResult[];
    speakerNotes?: string[];
  };
  fleetSurvey: {
    title: string;
    subtitle: string;
    sampleSize: string;
    highlights: string[];
    preferredExperience: {
      title: string;
      data: SurveyDataPoint[];
    };
    preferredRadius: {
      title: string;
      data: SurveyDataPoint[];
    };
    topPriorities: {
      title: string;
      items: { label: string; percent: number }[];
    };
    painPoints: {
      title: string;
      items: string[];
    };
    paymentsInsights: {
      headline: string;
      subtitle: string;
      chartData: {
        breakdown: { count: number; percent: number };
        total: { count: number; percent: number };
      };
      keyNeeds: string[];
      friction: string;
      fleetComments: string[];
      productInsights: {
        id: string;
        title: string;
        description: string;
      }[];
    };
    labels: {
      openComments: string;
      topPriority: string;
      preferredPlatform: string;
      mainOpportunity: string;
      optimizeApp: string;
      forPayments: string;
      featureImportance: string;
      platformPreference: string;
      whatFleetsWant: string;
      breakdownDetail: string;
      justTotal: string;
      topNeeds: string;
      currentFriction: string;
      fleetVerbatim: string;
      productOpportunities: string;
    };
  };
  nextSteps: {
    title: string;
    subtitle: string;
    pillars: NextStepPillar[];
    credits: {
      title: string;
      items: { name: string; role: string }[];
    };
    closing: string;
  };
}
