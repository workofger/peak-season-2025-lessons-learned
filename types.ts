import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface Decision {
  id: string;
  title: string;
  date: string;
  owner: string;
  evidence: string;
  status: 'taken' | 'proposed';
}

export interface EvidenceDetail {
  context: string;
  dataPoints: { label: string; value: string; trend?: 'up' | 'down' | 'neutral' }[];
  quote?: string;
  conclusion: string;
}

export interface EvidencePack {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  artifacts: string[];
  status: string;
  details?: EvidenceDetail; // Added for expanded view
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  output: string;
  owner: string;
  evidence: string;
}

export interface RaciRow {
  type: 'Decision' | 'Proposal';
  id: string;
  item: string;
  r: string;
  a: string;
  c: string;
  i: string;
}

export interface ThemeItem {
  title: string;
  iconKey: string;
  diagnosis: string;
  action: string;
  relatedIds: string[];
}

export interface DashboardContent {
  nav: {
    title: string;
    contents: string;
    footer: {
      line1: string;
      line2: string;
    };
    items: NavItem[];
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    ownerLabel: string;
    periodLabel: string;
    statusLabel: string;
    statusValue: string;
    evidenceNote: string;
    cta: string;
  };
  purpose: {
    title: string;
    subtitle: string;
    text: React.ReactNode;
    tags: string[];
  };
  summary: {
    title: string;
    subtitle: string;
    whatWorked: {
      title: string;
      items: { label: string; text: string }[];
    };
    whatHurt: {
      title: string;
      items: { label: string; text: string }[];
    };
    lessons: {
      title: string;
      items: { id: string; text: string }[];
    };
    decisions: {
      title: string;
      tableHeaders: {
        id: string;
        decision: string;
        owner: string;
        evidence: string;
      };
      items: Decision[];
    };
  };
  overview: {
    title: string;
    subtitle: string;
    timeline: {
      date: string;
      title: string;
      desc: string;
      isError?: boolean;
    }[];
  };
  productInsights: {
    title: string;
    subtitle: string;
    clickHint: string;
    items: EvidencePack[];
  };
  beyondProduct: {
    title: string;
    subtitle: string;
    items: EvidencePack[];
  };
  themes: {
    title: string;
    subtitle: string;
    labels: {
      diagnosis: string;
      action: string;
      linkedTo: string;
    };
    items: ThemeItem[];
  };
  raci: {
    title: string;
    subtitle: string;
    description: string;
    headers: {
      type: string;
      id: string;
      item: string;
      r: string;
      a: string;
      c: string;
      i: string;
    };
    legend: {
      r: string;
      a: string;
      c: string;
      i: string;
    };
    items: RaciRow[];
  };
  initiatives: {
    title: string;
    subtitle: string;
    labels: {
      owner: string;
      evidence: string;
    };
    items: Initiative[];
  };
  openItems: {
    title: string;
    subtitle: string;
    items: string[];
    footer: string;
  };
}