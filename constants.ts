import { DashboardContent } from './types';

export const CONTENT: { en: DashboardContent; es: DashboardContent } = {
  en: {
    nav: {
      title: 'PartRunner',
      items: [
        { id: 'hero', label: 'Start' },
        { id: 'purpose', label: 'Purpose' },
        { id: 'peak-learnings', label: '1. Peak Learnings' },
        { id: 'decisions', label: '2. Decisions' },
        { id: 'ab-testing', label: '3. A/B Testing' },
        { id: 'fleet-survey', label: '4. Fleet Survey' },
        { id: 'next-steps', label: '5. Next Steps' },
      ],
      footer: {
        line1: 'Peak Season 2025',
        line2: 'Product Team',
      },
    },
    hero: {
      badge: 'Product Team',
      title: 'Peak Season Learnings',
      subtitle: 'Product team as Supply negotiator',
      period: 'Nov 15 – Dec 15, 2025',
      cta: 'View Learnings',
    },
    purpose: {
      title: 'Purpose',
      subtitle: 'Why we are here',
      text: 'Peak Season should not be remembered as',
      strikeText: '"survive mode."',
      highlight: 'It should produce repeatable knowledge, measurable improvements, and clear owners.',
      tags: ['Consumable', 'Auditable', 'Actionable'],
    },
    peakLearnings: {
      title: 'Peak Learnings',
      subtitle: 'Product team as Supply negotiator',
      intro: 'First-person insights from Julio & Gerry embedded as negotiators during Peak Season 2025.',
      sections: {
        worked: {
        title: 'What Worked',
          items: [
            { 
              type: 'worked', 
              text: 'Drivers decide with stable criteria',
              example: 'When pitch aligns to pay + proximity + frequency + hours, "yes" probability rises.',
              productImplication: 'Matching + pitch + ranking should optimize these 4 features explicitly.',
              nextBuild: ['Add decision drivers to Matching: payment, distance-to-CEDIS, hours/day, frequency', 'Rank suggestions by these factors']
            },
            { 
              type: 'worked', 
              text: 'Weekly payments = competitive advantage',
              example: 'Increases trust, reduces cash-flow friction, strengthens reliability perception.',
              productImplication: 'Productize this differentiator: visible, verifiable, and traceable.',
              nextBuild: ['Payment breakdown + deposit status tracking + receipt', 'Surface "weekly payments" as value prop']
            },
            { 
              type: 'worked', 
              text: 'Speed wins in real operations',
              example: 'LiveOps achieves continuity by assigning/replacing directly, especially in emergencies.',
              productImplication: 'System must support the fast path without losing traceability.',
              nextBuild: ['One-click replacement logging (who/why/when)', 'Simple reason codes for replacement']
            },
            { 
              type: 'worked', 
              text: 'Relationship-based negotiation closes deals',
              example: 'Supply↔Fleet loyalty (favors, trust, continuity) influences close rate strongly.',
              productImplication: 'CRM/History and relationship ownership must exist as product primitives.',
              nextBuild: ['Negotiation history + relationship owner field', 'Fleet notes + commitments + outcomes']
            },
          ]
        },
        didnt: {
          title: "What Didn't Work",
          items: [
            { 
              type: 'didnt', 
              text: 'Matching is not a placement tool today',
              example: '70-80% of suggestions already contacted → almost none placed.',
              productImplication: 'Matching operates as "black box" because it doesn\'t capture real decisions or reasons.',
              nextBuild: ['Mandatory rejection reasons (structured)', 'Expose "discarded by LiveOps" with reason', 'Instrument outcomes: suggested→contacted→placed']
            },
            { 
              type: 'didnt', 
              text: 'Urgent replacements bypass system',
              example: 'LiveOps doesn\'t use Matching for urgency; assigns directly or creates requests to cancel and "mark".',
              productImplication: 'Without logging, product loses visibility and doesn\'t learn from peak.',
              nextBuild: ['Fast replacement workflow inside Admin', 'Auto-capture from WhatsApp/RespondIO']
            },
            { 
              type: 'didnt', 
              text: 'Zero traceability in Admin',
              example: 'No documentation on rejections, negotiation history, or substitutions/placements.',
              productImplication: 'Without traceability: no accountability, no continuous improvement, Matching disconnected from reality.',
              nextBuild: ['Audit log: rejection reasons + substitutions + outcomes', 'Minimum required fields for operational decisions']
            },
            { 
              type: 'didnt', 
              text: 'Instability & penalties trigger churn',
              example: 'Sudden capacity changes (Amazon) and penalties create distrust and churn.',
              productImplication: 'Need stability/predictability/explanation mechanisms for retention.',
              nextBuild: ['Capacity change alerts + planning view for fleets', 'Penalty transparency + risk-adjusted recommendations']
            },
          ]
        },
        truths: {
          title: 'The 3 Truths',
          items: [
            { 
              type: 'truth', 
              text: 'Driver YES is predictable',
              example: 'Pay + distance to CEDIS + frequency + hours/day = consistent acceptance formula.',
              productImplication: 'Matching should explicitly optimize for these 4 variables.'
            },
            { 
              type: 'truth', 
              text: 'Driver NO → churn spiral',
              example: 'Capacity volatility + penalties + ugly routes = perceived "unfair game".',
              productImplication: 'Retention requires transparency and predictability tools.'
            },
            { 
              type: 'truth', 
              text: 'Relationship > Algorithm (today)',
              example: '70% stay with their negotiator; Matching is bypassed for speed.',
              productImplication: 'Until we capture why, algorithms can\'t compete with human relationships.'
            },
          ]
        }
      },
    },
    decisions: {
      title: 'Decisions & Proposals',
      subtitle: 'Action Items',
      description: 'Based on our Peak Season experience, these are the concrete actions we are committing to and the proposals under evaluation.',
      decisionsTitle: 'Decisions Taken',
      proposalsTitle: 'Proposals',
      items: [
        { id: 'DEC-1', title: 'AI-first approach for onboarding', description: 'Use Maya to guide new fleets through documentation and activation', owner: 'Product', type: 'decision' },
        { id: 'DEC-2', title: 'Mandatory LiveOps rejection reasons', description: 'Capture why drivers are discarded to improve Matching algorithm', owner: 'Product', type: 'decision' },
        { id: 'DEC-3', title: 'Matching "marking" action', description: 'Allow LiveOps to mark candidates as in-progress to avoid duplicates', owner: 'Product', type: 'decision' },
        { id: 'PROP-1', title: 'Peak cadence + escalation protocol', description: 'Structured communication rhythm during high-volume periods', owner: 'LiveOps', type: 'proposal' },
        { id: 'PROP-2', title: 'Standard offer template', description: 'Consistent negotiation format to reduce variability', owner: 'Supply', type: 'proposal' },
        { id: 'PROP-3', title: 'Daily Peak digest for leadership', description: 'Summary of key metrics and blockers sent daily', owner: 'Operations', type: 'proposal' },
      ],
      labels: {
        committed: 'committed',
        underReview: 'under review',
        decision: 'Decision',
        proposal: 'Proposal',
        descriptionCol: 'Description',
        owner: 'Owner'
      }
    },
    abTesting: {
      title: 'A/B Testing',
      subtitle: 'Maya (AI) vs Human Agents',
      whatWeTested: {
        title: 'What We Tested',
        items: [
          'Maya (AI) vs 12-person human team',
          '3,098 total conversations analyzed',
          'Maya: 2,175 conversations • Humans: 923 conversations'
        ]
      },
      whatWeLearned: {
        title: 'Key Findings',
        items: [
          '99.9% faster response time (0.26 min vs 190 min)',
          '2x+ simultaneous capacity (215 max vs 100)',
          'Engagement rate: 73.7% AI vs 80% Human',
          'Consistent performance with 0.10 min median response'
        ]
      },
      whatsNext: {
        title: 'What It Means',
        text: 'Maya (AI) handles 2x the volume with near-instant responses. Human team still edges out on conversion rate—hybrid model recommended.'
      },
      results: [
        { metric: 'Response Time', ai: '0.26 min', human: '190 min', winner: 'ai' },
        { metric: 'Max Concurrent', ai: '215', human: '100', winner: 'ai' },
        { metric: 'Avg Concurrent', ai: '55.9', human: '43.8', winner: 'ai' },
        { metric: 'Engagement Rate', ai: '73.7%', human: '80.0%', winner: 'human' },
      ]
    },
    fleetSurvey: {
      title: 'Fleet Survey Results',
      subtitle: 'Voice of Supply',
      sampleSize: 'n = 63 / 134 responses (47% engagement)',
      highlights: [
        '134 fleets surveyed, 63 responded',
        '33 open comments received'
      ],
      preferredExperience: {
        title: 'Preferred Platform',
        data: [
          { label: 'Mobile App', value: 43.7, color: '#f59e0b' },
          { label: 'WhatsApp', value: 35.4, color: '#6b7280' },
          { label: 'Web', value: 20.9, color: '#374151' },
        ]
      },
      preferredRadius: {
        title: 'Function Importance (avg /5)',
        data: [
          { label: 'Payments', value: 99, color: '#f59e0b' },
          { label: 'Preferences', value: 96, color: '#f59e0b' },
          { label: 'Availability', value: 92, color: '#6b7280' },
          { label: 'Routes', value: 92, color: '#6b7280' },
        ]
      },
      topPriorities: {
        title: 'Feature Importance',
        items: [
          { label: 'Payments', percent: 99 },
          { label: 'Preferences', percent: 96 },
          { label: 'Availability', percent: 92 },
          { label: 'Routes', percent: 92 },
          { label: 'Registration', percent: 91 },
          { label: 'Referrals', percent: 81 },
        ]
      },
      painPoints: {
        title: 'Key Insights',
        items: [
          'Payments (4.94/5) is the #1 priority',
          'Mobile App preferred over WhatsApp',
          'Referrals has lowest importance (4.06)',
          'Opportunity: Optimize app for payments & preferences'
        ]
      },
      paymentsInsights: {
        headline: 'Payments = Transparency + Reconciliation',
        subtitle: 'Deep dive into the #1 priority',
        chartData: {
          breakdown: { count: 44, percent: 69.8 },
          total: { count: 10, percent: 15.9 }
        },
        keyNeeds: [
          'Associated trips per payment',
          'Verifiable deposit status',
          'Drilldown "view more" option'
        ],
        friction: 'Perceived slowness + lack of clarity → tickets + distrust',
        fleetComments: [
          'Specify the trips',
          'Deposit status',
          'Payment clarifications',
          'Daily rate breakdown, since rates change by project'
        ],
        productInsights: [
          {
            id: 'reconciliation',
            title: 'Payment Reconciliation',
            description: 'Map payments to trips with line items and subtotals'
          },
          {
            id: 'deposit_status',
            title: 'Deposit Status Tracking',
            description: 'Timeline: Generated → Scheduled → Sent → Deposited'
          },
          {
            id: 'rate_transparency',
            title: 'Rate Transparency',
            description: 'Show which rate rule was applied per trip/project'
          },
          {
            id: 'view_more',
            title: '"View More" Drilldown',
            description: 'Expandable detail with trips, components, adjustments'
          },
          {
            id: 'support_in_product',
            title: 'In-Product Support',
            description: 'CTA to report issues with pre-filled context'
          }
        ]
      },
      labels: {
        openComments: 'open comments',
        topPriority: 'Top Priority',
        preferredPlatform: 'Preferred Platform',
        mainOpportunity: 'Main Opportunity',
        optimizeApp: 'Optimize App',
        forPayments: 'for payments & preferences',
        featureImportance: 'Feature Importance (avg score /5)',
        platformPreference: 'Platform Preference',
        whatFleetsWant: 'What Fleets Want',
        breakdownDetail: 'Breakdown Detail',
        justTotal: 'Just Total',
        topNeeds: 'Top Needs',
        currentFriction: 'Current Friction',
        fleetVerbatim: 'Fleet Verbatim',
        productOpportunities: 'Product Opportunities Identified'
      }
    },
    nextSteps: {
      title: 'Next Steps',
      subtitle: 'Three pillars for improvement',
      pillars: [
        {
          id: 'A',
          title: 'AI-First Approach',
      items: [
            'AI-guided onboarding flow',
            'Automated document collection',
            'End-to-end negotiation support',
            'Fleet App (MVP) for self-serve'
          ],
          owner: 'Product'
        },
        {
          id: 'B',
          title: 'Matching Improvements',
      items: [
            'Mandatory rejection reasons',
            'Tag discarded vs active candidates',
            '"Mark" action for in-progress contacts',
            'Reduce redundant suggestions'
          ],
          owner: 'Product'
        },
        {
          id: 'C',
          title: 'LiveOps Feedback Loop',
          items: [
            'New operating model for Peak',
            'Daily digest for leadership',
            'Incident tracking discipline'
          ],
          owner: 'Product'
        }
      ],
      credits: {
        title: 'Credits',
      items: [
          { name: 'Julio', role: 'Documentation & Insights' },
          { name: 'Nicole', role: 'Survey Design' },
          { name: 'Gerardo', role: 'Product Lead' }
        ]
      },
      closing: 'Ensure these learnings translate into OKRs'
    }
  },
  es: {
    nav: {
      title: 'PartRunner',
      items: [
        { id: 'hero', label: 'Inicio' },
        { id: 'purpose', label: 'Propósito' },
        { id: 'peak-learnings', label: '1. Aprendizajes Peak' },
        { id: 'decisions', label: '2. Decisiones' },
        { id: 'ab-testing', label: '3. Pruebas A/B' },
        { id: 'fleet-survey', label: '4. Encuesta Flotas' },
        { id: 'next-steps', label: '5. Siguientes Pasos' },
      ],
      footer: {
        line1: 'Peak Season 2025',
        line2: 'Equipo de Producto',
      },
    },
    hero: {
      badge: 'Equipo de Producto',
      title: 'Aprendizajes Peak Season',
      subtitle: 'Producto como negociador de Supply',
      period: 'Nov 15 – Dic 15, 2025',
      cta: 'Ver Aprendizajes',
    },
    purpose: {
      title: 'Propósito',
      subtitle: 'Por qué estamos aquí',
      text: 'La temporada alta no debe recordarse como',
      strikeText: '"modo supervivencia."',
      highlight: 'Debe generar conocimiento replicable, mejoras medibles y responsables claros.',
      tags: ['Consumible', 'Auditable', 'Accionable'],
    },
    peakLearnings: {
      title: 'Aprendizajes Peak',
      subtitle: 'Producto como negociador de Supply',
      intro: 'Insights de primera mano de Julio y Gerry como negociadores durante Peak Season 2025.',
      sections: {
        worked: {
          title: 'Lo Que Funcionó',
          items: [
            { 
              type: 'worked', 
              text: 'Los conductores deciden con criterios estables',
              example: 'Cuando el pitch se alinea con pago + cercanía + frecuencia + horas, sube la probabilidad de "sí".',
              productImplication: 'Matching + pitch + ranking deben optimizar estos 4 factores explícitamente.',
              nextBuild: ['Agregar drivers de decisión a Matching: pago, distancia-CEDIS, horas/día, frecuencia', 'Rankear sugerencias por estos factores']
            },
            { 
              type: 'worked', 
              text: 'Pagos semanales = ventaja competitiva',
              example: 'Aumenta confianza, reduce fricción de cashflow, fortalece percepción de seriedad.',
              productImplication: 'Productizar este diferenciador: visible, verificable y trazable.',
              nextBuild: ['Desglose de pago + status de depósito + comprobante', 'Mostrar "pagos semanales" como propuesta de valor']
            },
            { 
              type: 'worked', 
              text: 'La velocidad gana en operación real',
              example: 'LiveOps logra continuidad asignando/reemplazando directo, especialmente en urgencias.',
              productImplication: 'El sistema debe soportar el "camino rápido" sin perder trazabilidad.',
              nextBuild: ['Logging de reemplazo en un clic (quién/por qué/cuándo)', 'Códigos de razón simples para reemplazo']
            },
            { 
              type: 'worked', 
              text: 'Negociación basada en relación cierra tratos',
              example: 'Lealtad Supply↔Fleet (favores, confianza, continuidad) influye fuertemente en el cierre.',
              productImplication: 'CRM/Historial y ownership de relación deben existir como primitivas de producto.',
              nextBuild: ['Historial de negociación + campo de dueño de relación', 'Notas de fleet + compromisos + resultados']
            },
          ]
        },
        didnt: {
          title: 'Lo Que No Funcionó',
          items: [
            { 
              type: 'didnt', 
              text: 'Matching no es herramienta de placement hoy',
              example: '70-80% de sugerencias ya contactadas → casi ninguna colocada.',
              productImplication: 'Matching opera como "caja negra" porque no captura decisiones reales ni razones.',
              nextBuild: ['Razones de rechazo obligatorias (estructuradas)', 'Exponer "descartado por LiveOps" con razón', 'Instrumentar outcomes: sugerido→contactado→colocado']
            },
            { 
              type: 'didnt', 
              text: 'Reemplazos urgentes omiten el sistema',
              example: 'LiveOps no usa Matching para urgencias; asigna directo o crea requests para cancelar y "marcar".',
              productImplication: 'Sin registro, producto pierde visibilidad y no aprende del peak.',
              nextBuild: ['Flujo de reemplazo rápido dentro de Admin', 'Auto-captura desde WhatsApp/RespondIO']
            },
            { 
              type: 'didnt', 
              text: 'Cero trazabilidad en Admin',
              example: 'Sin documentación de rechazos, historial de negociación, ni sustituciones/colocaciones.',
              productImplication: 'Sin trazabilidad: sin accountability, sin mejora continua, Matching desconectado de la realidad.',
              nextBuild: ['Audit log: razones de rechazo + sustituciones + outcomes', 'Campos mínimos requeridos para decisiones operativas']
            },
            { 
              type: 'didnt', 
              text: 'Inestabilidad y penalizaciones disparan churn',
              example: 'Cambios súbitos de capacidad (Amazon) y penalizaciones crean desconfianza y churn.',
              productImplication: 'Se necesitan mecanismos de estabilidad/previsibilidad/explicación para retención.',
              nextBuild: ['Alertas de cambio de capacidad + vista de planificación para fleets', 'Transparencia de penalizaciones + recomendaciones ajustadas a riesgo']
            },
          ]
        },
        truths: {
          title: 'Las 3 Verdades',
          items: [
            { 
              type: 'truth', 
              text: 'El SÍ del conductor es predecible',
              example: 'Pago + distancia a CEDIS + frecuencia + horas/día = fórmula consistente de aceptación.',
              productImplication: 'Matching debería optimizar explícitamente por estas 4 variables.'
            },
            { 
              type: 'truth', 
              text: 'El NO del conductor → espiral de churn',
              example: 'Volatilidad de capacidad + penalizaciones + rutas feas = percepción de "juego injusto".',
              productImplication: 'La retención requiere herramientas de transparencia y previsibilidad.'
            },
            { 
              type: 'truth', 
              text: 'Relación > Algoritmo (hoy)',
              example: '70% se quedan con su negociador; Matching se omite por velocidad.',
              productImplication: 'Hasta que capturemos el por qué, los algoritmos no pueden competir con relaciones humanas.'
            },
          ]
        }
      },
    },
    decisions: {
      title: 'Decisiones y Propuestas',
      subtitle: 'Acciones Concretas',
      description: 'Basándonos en nuestra experiencia de Peak Season, estas son las acciones concretas a las que nos comprometemos y las propuestas en evaluación.',
      decisionsTitle: 'Decisiones Tomadas',
      proposalsTitle: 'Propuestas',
      items: [
        { id: 'DEC-1', title: 'Onboarding AI-First', description: 'Usar Maya para guiar a nuevas flotas en documentación y activación', owner: 'Producto', type: 'decision' },
        { id: 'DEC-2', title: 'Razones de rechazo obligatorias (LiveOps)', description: 'Capturar por qué se descartan conductores para mejorar Matching', owner: 'Producto', type: 'decision' },
        { id: 'DEC-3', title: 'Acción "Marcar" en Matching', description: 'Permitir a LiveOps marcar candidatos en progreso para evitar duplicados', owner: 'Producto', type: 'decision' },
        { id: 'PROP-1', title: 'Cadencia Peak + protocolo escalación', description: 'Ritmo de comunicación estructurado durante periodos de alto volumen', owner: 'LiveOps', type: 'proposal' },
        { id: 'PROP-2', title: 'Plantilla de oferta estándar', description: 'Formato de negociación consistente para reducir variabilidad', owner: 'Supply', type: 'proposal' },
        { id: 'PROP-3', title: 'Resumen diario Peak para liderazgo', description: 'Resumen de métricas clave y bloqueadores enviado diariamente', owner: 'Operaciones', type: 'proposal' },
      ],
      labels: {
        committed: 'comprometidas',
        underReview: 'en revisión',
        decision: 'Decisión',
        proposal: 'Propuesta',
        descriptionCol: 'Descripción',
        owner: 'Responsable'
      }
    },
    abTesting: {
      title: 'Pruebas A/B',
      subtitle: 'Maya (IA) vs Agentes Humanos',
      whatWeTested: {
        title: 'Qué Probamos',
        items: [
          'Maya (IA) vs equipo de 12 humanos',
          '3,098 conversaciones totales analizadas',
          'Maya: 2,175 conversaciones • Humanos: 923 conversaciones'
        ]
      },
      whatWeLearned: {
        title: 'Hallazgos Clave',
        items: [
          '99.9% más rápido (0.26 min vs 190 min)',
          '2x+ capacidad simultánea (215 máx vs 100)',
          'Tasa engagement: 73.7% IA vs 80% Humano',
          'Rendimiento consistente con 0.10 min mediana'
        ]
      },
      whatsNext: {
        title: 'Qué Significa',
        text: 'Maya (IA) maneja 2x el volumen con respuestas casi instantáneas. El equipo humano gana en conversión—se recomienda modelo híbrido.'
      },
      results: [
        { metric: 'Tiempo Respuesta', ai: '0.26 min', human: '190 min', winner: 'ai' },
        { metric: 'Máx Concurrente', ai: '215', human: '100', winner: 'ai' },
        { metric: 'Prom Concurrente', ai: '55.9', human: '43.8', winner: 'ai' },
        { metric: 'Tasa Engagement', ai: '73.7%', human: '80.0%', winner: 'human' },
      ]
    },
    fleetSurvey: {
      title: 'Resultados Encuesta Flotas',
      subtitle: 'Voz de Supply',
      sampleSize: 'n = 63 / 134 respuestas (47% engagement)',
      highlights: [
        '134 flotas encuestadas, 63 respondieron',
        '33 comentarios abiertos recibidos'
      ],
      preferredExperience: {
        title: 'Plataforma Preferida',
        data: [
          { label: 'App Móvil', value: 43.7, color: '#f59e0b' },
          { label: 'WhatsApp', value: 35.4, color: '#6b7280' },
          { label: 'Web', value: 20.9, color: '#374151' },
        ]
      },
      preferredRadius: {
        title: 'Importancia de Función (prom /5)',
        data: [
          { label: 'Pagos', value: 99, color: '#f59e0b' },
          { label: 'Preferencias', value: 96, color: '#f59e0b' },
          { label: 'Disponibilidad', value: 92, color: '#6b7280' },
          { label: 'Rutas', value: 92, color: '#6b7280' },
        ]
      },
      topPriorities: {
        title: 'Importancia de Funciones',
        items: [
          { label: 'Pagos', percent: 99 },
          { label: 'Preferencias', percent: 96 },
          { label: 'Disponibilidad', percent: 92 },
          { label: 'Rutas', percent: 92 },
          { label: 'Registro', percent: 91 },
          { label: 'Referidos', percent: 81 },
        ]
      },
      painPoints: {
        title: 'Insights Clave',
        items: [
          'Pagos (4.94/5) es la prioridad #1',
          'App Móvil preferida sobre WhatsApp',
          'Referidos tiene menor importancia (4.06)',
          'Oportunidad: Optimizar app para pagos y preferencias'
        ]
      },
      paymentsInsights: {
        headline: 'Pagos = Transparencia + Reconciliación',
        subtitle: 'Análisis profundo de la prioridad #1',
        chartData: {
          breakdown: { count: 44, percent: 69.8 },
          total: { count: 10, percent: 15.9 }
        },
        keyNeeds: [
          'Viajes asociados por pago',
          'Estado verificable del depósito',
          'Opción de "ver más" expandible'
        ],
        friction: 'Lentitud percibida + falta de claridad → tickets + desconfianza',
        fleetComments: [
          'Especificar los viajes',
          'El estado del depósito',
          'Aclaraciones de pagos',
          'Desglose diario de la tarifa, ya que cambia por proyecto'
        ],
        productInsights: [
          {
            id: 'reconciliation',
            title: 'Reconciliación de Pagos',
            description: 'Mapear pagos a viajes con líneas de detalle y subtotales'
          },
          {
            id: 'deposit_status',
            title: 'Seguimiento de Estado de Depósito',
            description: 'Flujo: Generado → Programado → Enviado → Depositado'
          },
          {
            id: 'rate_transparency',
            title: 'Transparencia de Tarifas',
            description: 'Mostrar qué regla de tarifa se aplicó por viaje/proyecto'
          },
          {
            id: 'view_more',
            title: 'Detalle Expandible',
            description: 'Vista expandible con viajes, componentes, ajustes'
          },
          {
            id: 'support_in_product',
            title: 'Soporte en Producto',
            description: 'Botón para reportar con contexto pre-llenado'
          }
        ]
      },
      labels: {
        openComments: 'comentarios abiertos',
        topPriority: 'Prioridad #1',
        preferredPlatform: 'Plataforma Preferida',
        mainOpportunity: 'Oportunidad Principal',
        optimizeApp: 'Optimizar App',
        forPayments: 'para pagos y preferencias',
        featureImportance: 'Importancia de Funciones (prom /5)',
        platformPreference: 'Preferencia de Plataforma',
        whatFleetsWant: 'Qué Quieren las Flotas',
        breakdownDetail: 'Desglose Detallado',
        justTotal: 'Solo Total',
        topNeeds: 'Necesidades Principales',
        currentFriction: 'Fricción Actual',
        fleetVerbatim: 'Comentarios Textuales',
        productOpportunities: 'Oportunidades de Producto Identificadas'
      }
    },
    nextSteps: {
      title: 'Siguientes Pasos',
      subtitle: 'Tres pilares de mejora',
      pillars: [
        {
          id: 'A',
          title: 'Enfoque IA-First',
      items: [
            'Flujo de onboarding guiado por IA',
            'Recolección automática de documentos',
            'Soporte de negociación de inicio a fin',
            'App de Flotas (MVP) para autoservicio'
          ],
          owner: 'Producto'
        },
        {
          id: 'B',
          title: 'Mejoras de Matching',
      items: [
            'Razones de rechazo obligatorias',
            'Etiquetar candidatos descartados vs activos',
            'Acción "Marcar" para contactos en progreso',
            'Reducir sugerencias redundantes'
          ],
          owner: 'Producto'
        },
        {
          id: 'C',
          title: 'Ciclo de Retroalimentación LiveOps',
          items: [
            'Nuevo modelo operativo para Peak',
            'Resumen diario para liderazgo',
            'Disciplina de seguimiento de incidentes'
          ],
          owner: 'Producto'
        }
      ],
      credits: {
        title: 'Créditos',
      items: [
          { name: 'Julio', role: 'Documentación e Insights' },
          { name: 'Nicole', role: 'Diseño de Encuesta' },
          { name: 'Gerardo', role: 'Líder de Producto' }
        ]
      },
      closing: 'Asegurar que estos aprendizajes se traduzcan en OKRs'
    }
  }
};
