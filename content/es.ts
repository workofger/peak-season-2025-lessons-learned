/**
 * 🇪🇸 SPANISH CONTENT
 * 
 * This file contains all the Spanish content for the presentation.
 * Edit this file to customize your presentation content.
 */

import { PresentationContent } from '../types';

export const esContent: PresentationContent = {
  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════
  nav: {
    title: 'Presentación',
    items: [
      { id: 'hero', label: 'Inicio' },
      { id: 'purpose', label: 'Propósito' },
      { id: 'learnings', label: '1. Aprendizajes' },
      { id: 'comparison', label: '2. Análisis' },
      { id: 'survey', label: '3. Encuesta' },
      { id: 'next-steps', label: '4. Siguientes Pasos' },
    ],
    footer: {
      line1: 'Q4 2025',
      line2: 'Equipo de Producto',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HERO SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  hero: {
    badge: 'Equipo de Producto',
    title: 'Título de la Presentación',
    subtitle: 'Un subtítulo convincente que captura la atención',
    period: 'Nov 15 – Dic 15, 2025',
    cta: 'Ver Contenido',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PURPOSE SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  purpose: {
    title: 'Propósito',
    subtitle: 'Por qué estamos aquí',
    text: 'Esta presentación busca',
    strikeText: '"solo informar."',
    highlight: 'Debe producir insights accionables, mejoras medibles y responsables claros.',
    tags: ['Accionable', 'Medible', 'Claro'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KEY LEARNINGS SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  learnings: {
    title: 'Aprendizajes Clave',
    subtitle: 'Lo que descubrimos',
    intro: 'Insights de primera mano del equipo durante el período de análisis.',
    sections: {
      success: {
        title: 'Lo Que Funcionó',
        items: [
          {
            type: 'success',
            text: 'Primer hallazgo exitoso',
            example: 'Ejemplo específico o evidencia que respalda este hallazgo.',
            implication: 'Qué significa esto para el producto/negocio.',
            actions: ['Acción 1', 'Acción 2'],
          },
          {
            type: 'success',
            text: 'Segundo hallazgo exitoso',
            example: 'Otro ejemplo específico.',
            implication: 'Implicación de negocio.',
            actions: ['Siguiente paso 1', 'Siguiente paso 2'],
          },
        ],
      },
      warning: {
        title: 'Lo Que No Funcionó',
        items: [
          {
            type: 'warning',
            text: 'Primer desafío identificado',
            example: 'Evidencia del problema.',
            implication: 'Impacto en el producto/negocio.',
            actions: ['Mitigación 1', 'Mitigación 2'],
          },
        ],
      },
      insights: {
        title: 'Insights Clave',
        items: [
          {
            type: 'info',
            text: 'Insight importante #1',
            example: 'Evidencia de soporte.',
            implication: 'Implicación estratégica.',
          },
          {
            type: 'info',
            text: 'Insight importante #2',
            example: 'Evidencia de soporte.',
            implication: 'Implicación estratégica.',
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPARISON SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  comparison: {
    title: 'Análisis Comparativo',
    subtitle: 'Opción A vs Opción B',
    labelA: 'Opción A',
    labelB: 'Opción B',
    description: {
      title: 'Qué Analizamos',
      items: [
        'Metodología de comparación',
        'Tamaño de muestra y período',
        'Métricas clave evaluadas',
      ],
    },
    findings: {
      title: 'Hallazgos Clave',
      items: [
        'Hallazgo 1 con datos cuantitativos',
        'Hallazgo 2 con porcentaje de mejora',
        'Hallazgo 3 con impacto de negocio',
      ],
    },
    conclusion: {
      title: 'Conclusión',
      text: 'Resumen del análisis y enfoque recomendado basado en los hallazgos.',
    },
    results: [
      { metric: 'Métrica 1', valueA: '100', valueB: '85', winner: 'a' },
      { metric: 'Métrica 2', valueA: '75%', valueB: '82%', winner: 'b' },
      { metric: 'Métrica 3', valueA: '4.5', valueB: '4.2', winner: 'a' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SURVEY SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  survey: {
    title: 'Resultados de Encuesta',
    subtitle: 'Voz del Cliente',
    sampleSize: 'n = 100 respuestas (65% engagement)',
    highlights: ['100 participantes encuestados', '25 comentarios abiertos'],
    charts: [
      {
        title: 'Plataforma Preferida',
        data: [
          { label: 'App Móvil', value: 45, color: '#f59e0b' },
          { label: 'Web', value: 35, color: '#3b82f6' },
          { label: 'Desktop', value: 20, color: '#6b7280' },
        ],
      },
      {
        title: 'Importancia de Funciones',
        data: [
          { label: 'Función A', value: 95, color: '#f59e0b' },
          { label: 'Función B', value: 88, color: '#f59e0b' },
          { label: 'Función C', value: 76, color: '#6b7280' },
          { label: 'Función D', value: 65, color: '#6b7280' },
        ],
      },
    ],
    insights: {
      title: 'Insights Clave',
      items: [
        'Insight de datos de encuesta #1',
        'Insight de datos de encuesta #2',
        'Oportunidad identificada del feedback',
      ],
    },
    labels: {
      topPriority: 'Prioridad #1',
      preferredPlatform: 'Plataforma Preferida',
      mainOpportunity: 'Oportunidad Principal',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEXT STEPS SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  nextSteps: {
    title: 'Siguientes Pasos',
    subtitle: 'Acciones y Roadmap',
    pillars: [
      {
        id: 'pillar-a',
        title: 'Pilar Estratégico A',
        items: [
          'Iniciativa 1',
          'Iniciativa 2',
          'Iniciativa 3',
        ],
        owner: 'Equipo A',
        color: 'primary',
      },
      {
        id: 'pillar-b',
        title: 'Pilar Estratégico B',
        items: [
          'Iniciativa 1',
          'Iniciativa 2',
          'Iniciativa 3',
        ],
        owner: 'Equipo B',
        color: 'secondary',
      },
      {
        id: 'pillar-c',
        title: 'Pilar Estratégico C',
        items: [
          'Iniciativa 1',
          'Iniciativa 2',
        ],
        owner: 'Equipo C',
        color: 'success',
      },
    ],
    decisions: {
      title: 'Decisiones Tomadas',
      items: [
        {
          id: 'DEC-1',
          title: 'Título de la Decisión',
          description: 'Breve descripción de la decisión y su justificación',
          owner: 'Nombre del Responsable',
          status: 'approved',
        },
      ],
    },
    credits: {
      title: 'Créditos',
      items: [
        { name: 'Persona 1', role: 'Descripción del Rol' },
        { name: 'Persona 2', role: 'Descripción del Rol' },
        { name: 'Persona 3', role: 'Descripción del Rol' },
      ],
    },
    closing: 'Mensaje final o llamado a la acción para la audiencia.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UI LABELS
  // ═══════════════════════════════════════════════════════════════════════════
  ui: {
    contents: 'Contenido',
    navigate: 'Navegar',
    select: 'Seleccionar',
    close: 'Cerrar',
    search: 'Buscar comandos...',
    noResults: 'Sin resultados',
    pressEscToExit: 'Presiona ESC para salir',
  },
};

export default esContent;


