/**
 * 📚 PRESENTATION HUB - CONTENT
 * 
 * This is the content for the Presentation Repository/Hub.
 * A central place to access all company presentations.
 */

// ═══════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

export interface NavItem {
  id: string;
  label: string;
}

export interface Presentation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  team: string;
  category: 'quarterly' | 'project' | 'workshop' | 'strategy' | 'retrospective';
  status: 'live' | 'draft' | 'archived';
  url: string;
  thumbnail?: string;
  tags: string[];
  featured?: boolean;
}

export interface TeamInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
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
  presentations: {
    title: string;
    subtitle: string;
    intro: string;
    featured: Presentation[];
    all: Presentation[];
    categories: { id: string; label: string; icon: string }[];
  };
  teams: {
    title: string;
    subtitle: string;
    list: TeamInfo[];
  };
  template: {
    title: string;
    subtitle: string;
    features: { icon: string; title: string; description: string }[];
    cta: { label: string; url: string };
    docs: { label: string; url: string };
  };
  stats: {
    title: string;
    items: { value: string; label: string; trend?: string }[];
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// PRESENTATIONS DATA
// ═══════════════════════════════════════════════════════════════════════════

const PRESENTATIONS: Presentation[] = [
  {
    id: 'peak-season-2025',
    title: 'Peak Season 2025 Learnings',
    subtitle: 'Product team as Supply negotiator',
    description: 'First-person insights from the Product team embedded as negotiators during Peak Season. A/B testing results, fleet survey analysis, and actionable next steps.',
    date: '2025-12-15',
    team: 'Product',
    category: 'retrospective',
    status: 'live',
    url: 'https://products.partrunner.com/PeakSeason2025/',
    tags: ['Peak Season', 'Supply', 'AI', 'Maya', 'Fleet'],
    featured: true,
  },
  {
    id: 'q4-2025-review',
    title: 'Q4 2025 Product Review',
    subtitle: 'Quarterly achievements and roadmap',
    description: 'Comprehensive review of Q4 product initiatives, metrics, and planning for Q1 2026.',
    date: '2025-12-20',
    team: 'Product',
    category: 'quarterly',
    status: 'draft',
    url: '#',
    tags: ['Quarterly', 'Roadmap', 'OKRs'],
    featured: false,
  },
  {
    id: 'maya-ai-launch',
    title: 'Maya AI Launch',
    subtitle: 'Introducing our AI-powered assistant',
    description: 'Official launch presentation for Maya, our AI assistant for fleet onboarding and support.',
    date: '2025-11-01',
    team: 'Product',
    category: 'project',
    status: 'live',
    url: '#',
    tags: ['AI', 'Maya', 'Launch'],
    featured: true,
  },
  {
    id: 'fleet-app-workshop',
    title: 'Fleet App Workshop',
    subtitle: 'Design sprint results',
    description: 'Results from the 5-day design sprint for the new Fleet mobile application.',
    date: '2025-10-15',
    team: 'Design',
    category: 'workshop',
    status: 'live',
    url: '#',
    tags: ['Design', 'Mobile', 'Fleet App'],
    featured: false,
  },
  {
    id: 'strategy-2026',
    title: 'Strategy 2026',
    subtitle: 'Company direction and priorities',
    description: 'Strategic planning presentation outlining company goals and priorities for 2026.',
    date: '2025-12-01',
    team: 'Leadership',
    category: 'strategy',
    status: 'draft',
    url: '#',
    tags: ['Strategy', 'Planning', '2026'],
    featured: false,
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CONTENT
// ═══════════════════════════════════════════════════════════════════════════

export const CONTENT: { en: DashboardContent; es: DashboardContent } = {
  en: {
    nav: {
      title: 'Presentations',
      items: [
        { id: 'hero', label: 'Home' },
        { id: 'purpose', label: 'About' },
        { id: 'presentations', label: 'All Presentations' },
        { id: 'teams', label: 'By Team' },
        { id: 'template', label: 'Create New' },
      ],
      footer: {
        line1: 'PartRunner',
        line2: 'Presentation Hub',
      },
    },
    hero: {
      badge: 'Presentation Hub',
      title: 'Presentations',
      subtitle: 'Interactive repository for all company presentations',
      period: 'PartRunner Products',
      cta: 'Browse Presentations',
    },
    purpose: {
      title: 'About',
      subtitle: 'Why this exists',
      text: 'Company presentations should not be',
      strikeText: '"lost in Google Drive."',
      highlight: 'They should be accessible, interactive, and always up to date.',
      tags: ['Centralized', 'Interactive', 'Searchable'],
    },
    presentations: {
      title: 'All Presentations',
      subtitle: 'Browse our collection',
      intro: 'Access all company presentations in one place. Filter by team, category, or search by topic.',
      featured: PRESENTATIONS.filter(p => p.featured),
      all: PRESENTATIONS,
      categories: [
        { id: 'all', label: 'All', icon: 'Grid' },
        { id: 'quarterly', label: 'Quarterly Reviews', icon: 'Calendar' },
        { id: 'project', label: 'Project Launches', icon: 'Rocket' },
        { id: 'workshop', label: 'Workshops', icon: 'Users' },
        { id: 'strategy', label: 'Strategy', icon: 'Target' },
        { id: 'retrospective', label: 'Retrospectives', icon: 'RefreshCw' },
      ],
    },
    teams: {
      title: 'By Team',
      subtitle: 'Presentations organized by team',
      list: [
        { id: 'product', name: 'Product', icon: 'Package', color: '#f59e0b' },
        { id: 'design', name: 'Design', icon: 'Palette', color: '#8b5cf6' },
        { id: 'engineering', name: 'Engineering', icon: 'Code', color: '#3b82f6' },
        { id: 'operations', name: 'Operations', icon: 'Settings', color: '#22c55e' },
        { id: 'leadership', name: 'Leadership', icon: 'Crown', color: '#ef4444' },
      ],
    },
    template: {
      title: 'Create New',
      subtitle: 'Build your own presentation',
      features: [
        { icon: 'Keyboard', title: 'Keyboard Navigation', description: 'Arrow keys, numbers, and shortcuts' },
        { icon: 'Command', title: 'Command Palette', description: 'Quick search with ⌘K' },
        { icon: 'Presentation', title: 'Presentation Mode', description: 'Fullscreen slides with ⌘⇧P' },
        { icon: 'Globe', title: 'Multi-language', description: 'Built-in EN/ES support' },
        { icon: 'Palette', title: 'Themes', description: '4 built-in themes to choose from' },
        { icon: 'Smartphone', title: 'Responsive', description: 'Works on desktop and mobile' },
      ],
      cta: { label: 'Use Template', url: 'https://github.com/workofger/peak-season-2025-lessons-learned' },
      docs: { label: 'Documentation', url: '#' },
    },
    stats: {
      title: 'Overview',
      items: [
        { value: String(PRESENTATIONS.length), label: 'Total Presentations', trend: '+2 this month' },
        { value: String(PRESENTATIONS.filter(p => p.status === 'live').length), label: 'Live', trend: '' },
        { value: '5', label: 'Teams', trend: '' },
        { value: '4', label: 'Categories', trend: '' },
      ],
    },
  },
  es: {
    nav: {
      title: 'Presentaciones',
      items: [
        { id: 'hero', label: 'Inicio' },
        { id: 'purpose', label: 'Acerca de' },
        { id: 'presentations', label: 'Todas las Presentaciones' },
        { id: 'teams', label: 'Por Equipo' },
        { id: 'template', label: 'Crear Nueva' },
      ],
      footer: {
        line1: 'PartRunner',
        line2: 'Hub de Presentaciones',
      },
    },
    hero: {
      badge: 'Hub de Presentaciones',
      title: 'Presentaciones',
      subtitle: 'Repositorio interactivo de presentaciones de la empresa',
      period: 'PartRunner Products',
      cta: 'Ver Presentaciones',
    },
    purpose: {
      title: 'Acerca de',
      subtitle: 'Por qué existe esto',
      text: 'Las presentaciones de la empresa no deberían estar',
      strikeText: '"perdidas en Google Drive."',
      highlight: 'Deben ser accesibles, interactivas y siempre actualizadas.',
      tags: ['Centralizado', 'Interactivo', 'Buscable'],
    },
    presentations: {
      title: 'Todas las Presentaciones',
      subtitle: 'Explora nuestra colección',
      intro: 'Accede a todas las presentaciones de la empresa en un solo lugar. Filtra por equipo, categoría o busca por tema.',
      featured: PRESENTATIONS.filter(p => p.featured),
      all: PRESENTATIONS,
      categories: [
        { id: 'all', label: 'Todas', icon: 'Grid' },
        { id: 'quarterly', label: 'Revisiones Trimestrales', icon: 'Calendar' },
        { id: 'project', label: 'Lanzamientos', icon: 'Rocket' },
        { id: 'workshop', label: 'Workshops', icon: 'Users' },
        { id: 'strategy', label: 'Estrategia', icon: 'Target' },
        { id: 'retrospective', label: 'Retrospectivas', icon: 'RefreshCw' },
      ],
    },
    teams: {
      title: 'Por Equipo',
      subtitle: 'Presentaciones organizadas por equipo',
      list: [
        { id: 'product', name: 'Producto', icon: 'Package', color: '#f59e0b' },
        { id: 'design', name: 'Diseño', icon: 'Palette', color: '#8b5cf6' },
        { id: 'engineering', name: 'Ingeniería', icon: 'Code', color: '#3b82f6' },
        { id: 'operations', name: 'Operaciones', icon: 'Settings', color: '#22c55e' },
        { id: 'leadership', name: 'Liderazgo', icon: 'Crown', color: '#ef4444' },
      ],
    },
    template: {
      title: 'Crear Nueva',
      subtitle: 'Construye tu propia presentación',
      features: [
        { icon: 'Keyboard', title: 'Navegación por Teclado', description: 'Flechas, números y atajos' },
        { icon: 'Command', title: 'Paleta de Comandos', description: 'Búsqueda rápida con ⌘K' },
        { icon: 'Presentation', title: 'Modo Presentación', description: 'Pantalla completa con ⌘⇧P' },
        { icon: 'Globe', title: 'Multi-idioma', description: 'Soporte EN/ES incluido' },
        { icon: 'Palette', title: 'Temas', description: '4 temas incluidos para elegir' },
        { icon: 'Smartphone', title: 'Responsive', description: 'Funciona en desktop y móvil' },
      ],
      cta: { label: 'Usar Template', url: 'https://github.com/workofger/peak-season-2025-lessons-learned' },
      docs: { label: 'Documentación', url: '#' },
    },
    stats: {
      title: 'Resumen',
      items: [
        { value: String(PRESENTATIONS.length), label: 'Total Presentaciones', trend: '+2 este mes' },
        { value: String(PRESENTATIONS.filter(p => p.status === 'live').length), label: 'En Vivo', trend: '' },
        { value: '5', label: 'Equipos', trend: '' },
        { value: '4', label: 'Categorías', trend: '' },
      ],
    },
  },
};
