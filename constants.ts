import React from 'react';
import { DashboardContent, RaciRow } from './types';

const RACI_DATA_EN: RaciRow[] = [
  { type: 'Decision', id: 'DEC-1', item: 'Mandatory LiveOps rejection reasons', r: 'LiveOps', a: 'Marcos Subia', c: 'Product, Eng', i: 'Leadership' },
  { type: 'Decision', id: 'DEC-2', item: 'Urgent replacement logging (<30s)', r: 'LiveOps', a: 'Marcos Subia', c: 'Product, Eng', i: 'Leadership' },
  { type: 'Decision', id: 'DEC-3', item: 'Supported Matching marking action', r: 'Prod + Eng', a: 'Product', c: 'LiveOps, Supply', i: 'Leadership' },
  { type: 'Decision', id: 'DEC-4', item: 'AI-first onboarding (scale Q1)', r: 'Prod + Eng', a: 'Tarun', c: 'Supply, LiveOps', i: 'Company' },
  { type: 'Proposal', id: 'PROP-1', item: 'Peak cadence + escalation', r: 'Ops Lead', a: 'Leadership', c: 'Product, Supply', i: 'Company' },
  { type: 'Proposal', id: 'PROP-2', item: 'Standard offer template', r: 'Supply + Prod', a: 'Supply', c: 'LiveOps', i: 'Leadership' },
  { type: 'Proposal', id: 'PROP-3', item: 'Daily Peak digest', r: 'Analytics', a: 'TBD', c: 'LiveOps, Prod', i: 'Company' },
];

const RACI_DATA_ES: RaciRow[] = [
  { type: 'Decision', id: 'DEC-1', item: 'Razones de rechazo obligatorias (LiveOps)', r: 'LiveOps', a: 'Marcos Subia', c: 'Producto, Ing', i: 'Liderazgo' },
  { type: 'Decision', id: 'DEC-2', item: 'Registro de reemplazos urgentes (<30s)', r: 'LiveOps', a: 'Marcos Subia', c: 'Producto, Ing', i: 'Liderazgo' },
  { type: 'Decision', id: 'DEC-3', item: 'Soporte para acción "Marcar" (Matching)', r: 'Prod + Ing', a: 'Producto', c: 'LiveOps, Supply', i: 'Liderazgo' },
  { type: 'Decision', id: 'DEC-4', item: 'Onboarding con IA (Escala Q1)', r: 'Prod + Ing', a: 'Tarun', c: 'Supply, LiveOps', i: 'Compañía' },
  { type: 'Proposal', id: 'PROP-1', item: 'Cadencia Peak + Protocolo Escalación', r: 'Líder Ops', a: 'Liderazgo', c: 'Producto, Supply', i: 'Compañía' },
  { type: 'Proposal', id: 'PROP-2', item: 'Plantilla de Oferta Estándar', r: 'Supply + Prod', a: 'Supply', c: 'LiveOps', i: 'Liderazgo' },
  { type: 'Proposal', id: 'PROP-3', item: 'Reporte Diario Peak (Digest)', r: 'Analytics', a: 'TBD', c: 'LiveOps, Prod', i: 'Compañía' },
];

export const CONTENT: { en: DashboardContent; es: DashboardContent } = {
  en: {
    nav: {
      title: 'PartRunner',
      contents: 'Contents',
      footer: { line1: 'Peak Season 2025', line2: 'Source of Truth v0.4' },
      items: [
        { id: 'hero', label: 'Start' },
        { id: 'purpose', label: '0. Purpose' },
        { id: 'summary', label: '1. Executive Summary' },
        { id: 'overview', label: '2. Peak Overview' },
        { id: 'product-insights', label: '3. Product Insights' },
        { id: 'beyond-product', label: '4. Beyond Product' },
        { id: 'themes', label: '5. Key Themes' },
        { id: 'initiatives', label: '6. Initiatives' },
        { id: 'raci', label: '7. Ownership (RACI)' },
        { id: 'open-items', label: '8. Open Items' },
      ],
    },
    hero: {
      badge: 'Source of Truth',
      titleLine1: 'Peak Season Lessons',
      titleLine2: 'Learned (2025)',
      ownerLabel: 'Owner',
      periodLabel: 'Period',
      statusLabel: 'Status',
      statusValue: 'Draft v0.4',
      evidenceNote: 'Evidence-first principle: Every major claim is traceable to an Evidence Pack.',
      cta: 'Begin Presentation',
    },
    purpose: {
      title: 'Purpose',
      subtitle: 'Why we are here',
      text: React.createElement(React.Fragment, null,
        "Peak Season should not be remembered as ",
        React.createElement("span", { className: "text-red-400 line-through decoration-red-500/50" }, "\"survive mode.\""),
        React.createElement("br"),
        "It should produce ",
        React.createElement("strong", { className: "text-pr-yellow font-bold" }, "repeatable knowledge"),
        ", measurable improvements, and clear owners."
      ),
      tags: ['Consumable', 'Auditable', 'Actionable'],
    },
    summary: {
      title: 'Executive Summary',
      subtitle: 'The High Level',
      whatWorked: {
        title: 'What Worked',
        items: [
          { label: 'Weekly payments are a differentiator', text: 'Cash-flow advantage increases retention.' },
          { label: 'Relationship-based negotiation', text: 'Continuity drives velocity.' },
          { label: 'LiveOps agility', text: 'Urgent needs get solved quickly in practice.' },
        ]
      },
      whatHurt: {
        title: 'What Hurt Performance',
        items: [
          { label: 'Matching was unreliable', text: 'Redundant suggestions, placement not driven by system.' },
          { label: 'Black Box Feedback', text: 'Discards without reasons reduce learning.' },
          { label: 'Visibility Gap', text: 'Missing discards led to late shortage discovery (Walmart/Carso).' },
          { label: 'Ops fully home', text: 'Reduced touchpoints amplified blind spots.' },
        ]
      },
      lessons: {
        title: 'The 3 Non-Obvious Lessons',
        items: [
          { id: '01', text: 'Traceability is a first-order constraint. Without capturing outcomes, we cannot scale.' },
          { id: '02', text: 'Driver acceptance is predictable (Pay, Distance, Time), but not captured in-product.' },
          { id: '03', text: 'Peak requires a supported fast path. Speed needs minimal, mandatory logging.' },
        ]
      },
      decisions: {
        title: 'Decisions Taken',
        tableHeaders: { id: 'ID', decision: 'Decision', owner: 'Owner', evidence: 'Evidence' },
        items: [
          { id: 'DEC-1', title: 'Mandatory LiveOps rejection reasons', date: '2025-12-10', owner: 'Marcos Subia', evidence: 'EP-01, EP-04', status: 'taken' },
          { id: 'DEC-2', title: 'Urgent replacement logging (<30s) required', date: '2025-12-10', owner: 'Marcos Subia', evidence: 'EP-01, EP-04', status: 'taken' },
          { id: 'DEC-3', title: 'Supported Matching “marking” action', date: '2025-12-10', owner: 'Product / LiveOps', evidence: 'EP-01', status: 'taken' },
          { id: 'DEC-4', title: 'AI-first approach for onboarding', date: 'Q1 2026', owner: 'Tarun', evidence: 'EP-03', status: 'taken' },
        ]
      }
    },
    overview: {
      title: 'Peak Overview',
      subtitle: 'Timeline & Definitions',
      timeline: [
        { date: 'Nov 13-17', title: 'Buen Fin Intensity', desc: 'Fastest decision cycles; highest load.', isError: false },
        { date: 'Nov 15 - Dec 15', title: 'Operating Period', desc: 'Demand volatility + urgent swaps.', isError: false },
        { date: 'Untraceable', title: 'Walmart & Carso Incidents', desc: 'Visibility gap & stale signals led to late discovery.', isError: true }
      ]
    },
    productInsights: {
      title: 'Product Insights',
      subtitle: 'Voice of Supply & AI',
      clickHint: 'Click card to flip & expand',
      items: [
         {
          id: 'EP-02',
          title: 'Voice of Supply (Survey)',
          subtitle: 'Supply feedback & Churn Drivers',
          content: [
            'Weekly payments are a critical USP and should be protected operationally.',
            'Acceptance is predictable (pay, distance, days/week, hours/day).',
            'Stability and predictability often beat marginally higher pay.',
            'Churn drivers include volatility, penalties exposure, and dispatcher dynamics.'
          ],
          artifacts: ['Survey Export', 'Top Quotes'],
          status: 'Partial (Quant pending)',
          details: {
            context: 'Survey distributed to 250 active fleets during Peak (Nov 20-Dec 5) to understand acceptance drivers vs churn triggers.',
            dataPoints: [
              { label: 'Value Weekly Pay', value: '87%', trend: 'up' },
              { label: 'Prioritize Distance', value: '62%', trend: 'neutral' },
              { label: 'Churn Risk Factors', value: '3', trend: 'down' }
            ],
            quote: "I stay for the prompt payment, but I turn off the app when the dispatcher is rude or the penalties are unclear.",
            conclusion: "Money attracts, but Ops experience retains. We need to productize the 'Stability' promise."
          }
        },
        {
          id: 'EP-03',
          title: 'A/B Testing',
          subtitle: 'AI vs Human — Negotiation',
          content: [
            'Experiment period: Nov 1–30, 2025.',
            'A/B: Negotiation ownership (AI vs Human).',
            'A/B: Docs collection (AI weblink vs Human-guided).',
            'Pending: Final close rate and hours saved metrics.'
          ],
          artifacts: ['Experimento AB Respond.pptx.pdf', 'Tracking sheet'],
          status: 'Partial',
          details: {
            context: 'Conducted on 500 new leads. Variant A: Standard manual agent process. Variant B: AI Voice Agent + WhatsApp Flow for doc collection.',
            dataPoints: [
              { label: 'Response Time', value: '<5s', trend: 'up' },
              { label: 'Ops Hours Saved', value: '120h', trend: 'up' },
              { label: 'Doc Error Rate', value: '15%', trend: 'down' }
            ],
            quote: "Most fleets did not realize they were speaking to an AI until the document upload link was sent.",
            conclusion: "AI is ready for 'Level 1' negotiation. It scales infinitely during Peak spikes without adding headcount."
          }
        }
      ]
    },
    beyondProduct: {
      title: 'Beyond Product',
      subtitle: 'Ops Reality & Evidence Gaps',
      items: [
        {
          id: 'EP-01',
          title: 'Negotiation Insights',
          subtitle: 'Julio + Ger immersion during Peak',
          content: [
            'Matching was frequently redundant (~70–80% of suggested candidates already contacted).',
            'Drivers say “yes” based on: pay, distance to CEDIS, days/week, hours/day.',
            'LiveOps performs urgent replacements outside Matching; WhatsApp is the fast path.',
            'Negotiation is relationship-based; fleets tend to stick with their original negotiator.'
          ],
          artifacts: ['INSIGHTS.pdf', 'WhatsApp threads'],
          status: 'Available'
        },
        {
          id: 'EP-04',
          title: 'Ops Cadence & Incident Reality',
          subtitle: 'Touchpoints, Coverage, Walmart/Carso',
          content: [
            'Supply uses Matching as a visibility tool. During peak, discards did not happen, creating a false sense of coverage.',
            'Walmart Incident: Shortage discovered late due to stale signal.',
            'Carso Incident: 9 requests closed with insufficient coverage.',
            'Evidence Gap: Lack of observability to reliably answer WHEN incidents started.'
          ],
          artifacts: ['Narrativa Angie', 'LiveOps notes'],
          status: 'Available (Qualitative only)'
        }
      ]
    },
    themes: {
      title: 'Key Themes',
      subtitle: 'Strategic Diagnosis',
      labels: { diagnosis: 'Diagnosis', action: 'Action Required', linkedTo: 'LINKED TO:' },
      items: [
        { 
          title: 'Traceability & Feedback', 
          iconKey: 'eye',
          diagnosis: 'Outcomes (accept/reject), discards, and replacements happen off-system. Reasons are lost.',
          action: 'Mandatory logging + incident discipline.',
          relatedIds: ['DEC-1', 'DEC-2']
        },
        { 
          title: 'Matching Adoption Gap', 
          iconKey: 'target',
          diagnosis: 'Matching suggestions were redundant (~80%). Urgent placements bypass the system completely.',
          action: 'Supported marking + integrity mechanisms.',
          relatedIds: ['DEC-3']
        },
        { 
          title: 'Offer Design', 
          iconKey: 'check',
          diagnosis: 'Acceptance is predictable (Pay, CEDIS Distance, Time), but offers are improvised.',
          action: 'Standard offer template enforced in negotiation.',
          relatedIds: ['PROP-2']
        },
        { 
          title: 'Supported Fast Path', 
          iconKey: 'zap',
          diagnosis: 'WhatsApp is the operational backbone for speed. Fighting it causes "Shadow Ops".',
          action: 'Build fast-path workflows that mirror reality + visibility.',
          relatedIds: ['DEC-2', 'PROP-3']
        },
        { 
          title: 'Operating Cadence', 
          iconKey: 'refresh',
          diagnosis: 'When touchpoints drop (remote), visibility collapses and reaction time suffers.',
          action: 'Peak cadence + On-call coverage + Incident log.',
          relatedIds: ['PROP-1']
        },
        { 
          title: 'AI Scalability', 
          iconKey: 'bot',
          diagnosis: 'Manual onboarding and documentation is a bottleneck during demand spikes.',
          action: 'AI-first approach for onboarding starting Q1.',
          relatedIds: ['DEC-4']
        },
      ]
    },
    raci: {
      title: 'Ownership Model',
      subtitle: 'Governance & Execution',
      description: 'The Initiatives listed above require clear owners to avoid the "everyone owns everything" trap. This RACI matrix defines who is Accountable (A) for the success of each Decision and Proposal that drives the Roadmap.',
      headers: { type: 'Type', id: 'ID', item: 'Item', r: 'Responsible', a: 'Accountable', c: 'Consulted', i: 'Informed' },
      legend: { r: 'Responsible (Does work)', a: 'Accountable (Owns outcome)', c: 'Consulted (Input)', i: 'Informed (Updated)' },
      items: RACI_DATA_EN
    },
    initiatives: {
      title: 'Initiatives',
      subtitle: 'Next Peak Execution',
      labels: { owner: 'Owner', evidence: 'Origin' },
      items: [
        { id: 'A', title: 'Auto Affiliations using AI', description: 'AI-guided onboarding flow that collects and validates docs end-to-end.', output: 'WhatsApp/Flow + Admin View', owner: 'Tarun', evidence: 'DEC-4' },
        { id: 'B', title: 'LiveOps Quick Wins', description: 'Minimal logging + visibility improvements that match LiveOps reality.', output: 'Swap log, Rejection reasons', owner: 'Marcos Subia', evidence: 'DEC-1, DEC-2' },
        { id: 'C', title: 'Matching Integrity', description: 'Product changes that make Matching signal trustworthy.', output: 'Mark action + Outcomes', owner: 'Product', evidence: 'DEC-3' },
        { id: 'D', title: 'Peak Cadence & On-Call', description: 'Standard communication rhythm + escalation path.', output: 'Cadence, Log, Schedule', owner: 'Leadership', evidence: 'PROP-1' },
        { id: 'E', title: 'Standard Offer Template', description: 'Mandatory offer format capturing acceptance drivers.', output: 'Template + Enforcement', owner: 'Supply', evidence: 'PROP-2' },
        { id: 'F', title: 'Daily Peak Digest', description: 'Leadership-facing summary of what’s breaking.', output: 'Daily digest email/slack', owner: 'Product Ops', evidence: 'PROP-3' },
        { id: 'G', title: 'Fleet App (MVP)', description: 'Self-serve fleet experience for clarity + basic management.', output: 'MVP App', owner: 'Product', evidence: 'New' },
      ]
    },
    openItems: {
      title: 'Open Items',
      subtitle: 'Before Deck Externalization',
      items: [
        'Formalize EP-04 as an evidence gap (explicit "not traceable").',
        'Install incident logging immediately for Q1 2026.',
        'Complete Survey export & quotes (EP-02).',
        'Finalize A/B test numbers (EP-03).',
        'Define internal acronyms to avoid jargon.'
      ],
      footer: 'End of Presentation • PartRunner 2025'
    }
  },
  es: {
    nav: {
      title: 'PartRunner',
      contents: 'Índice',
      footer: { line1: 'Peak Season 2025', line2: 'Fuente de la Verdad v0.4' },
      items: [
        { id: 'hero', label: 'Inicio' },
        { id: 'purpose', label: '0. Propósito' },
        { id: 'summary', label: '1. Resumen Ejecutivo' },
        { id: 'overview', label: '2. Resumen Peak' },
        { id: 'product-insights', label: '3. Insights Producto' },
        { id: 'beyond-product', label: '4. Más allá de Producto' },
        { id: 'themes', label: '5. Diagnóstico y Estrategia' },
        { id: 'initiatives', label: '6. Iniciativas' },
        { id: 'raci', label: '7. Responsables (RACI)' },
        { id: 'open-items', label: '8. Siguientes Pasos' },
      ],
    },
    hero: {
      badge: 'Fuente de la Verdad',
      titleLine1: 'Aprendizajes Clave',
      titleLine2: 'Temporada Alta (2025)',
      ownerLabel: 'Responsable',
      periodLabel: 'Periodo',
      statusLabel: 'Estado',
      statusValue: 'Borrador v0.4',
      evidenceNote: 'Principio de evidencia: Toda afirmación crítica es trazable a un Paquete de Evidencia.',
      cta: 'Iniciar Presentación',
    },
    purpose: {
      title: 'Propósito',
      subtitle: 'Por qué estamos aquí',
      text: React.createElement(React.Fragment, null,
        "La temporada alta no debe recordarse como ",
        React.createElement("span", { className: "text-red-400 line-through decoration-red-500/50" }, "\"modo supervivencia.\""),
        React.createElement("br"),
        "Debe generar ",
        React.createElement("strong", { className: "text-pr-yellow font-bold" }, "conocimiento replicable"),
        ", mejoras medibles y responsables claros."
      ),
      tags: ['Consumible', 'Auditable', 'Accionable'],
    },
    summary: {
      title: 'Resumen Ejecutivo',
      subtitle: 'Alto Nivel',
      whatWorked: {
        title: 'Lo que funcionó',
        items: [
          { label: 'Pago semanal como diferenciador', text: 'La ventaja en flujo de caja incrementa la retención de flotas.' },
          { label: 'Negociación por relación', text: 'La continuidad con el negociador impulsa la velocidad de cierre.' },
          { label: 'Agilidad de LiveOps', text: 'Los problemas urgentes se resuelven rápido, aunque sea de forma manual.' },
        ]
      },
      whatHurt: {
        title: 'Lo que afectó el desempeño',
        items: [
          { label: 'Matching poco confiable', text: 'Sugerencias redundantes; la asignación no fue liderada por el sistema.' },
          { label: 'Feedback opaco (Caja Negra)', text: 'Descartes sin razón registrada impiden el aprendizaje del algoritmo.' },
          { label: 'Brecha de Visibilidad', text: 'La falta de descartes en sistema ocultó la escasez real (Caso Walmart/Carso).' },
          { label: 'Operación 100% remota', text: 'La reducción de puntos de contacto físicos amplificó los puntos ciegos.' },
        ]
      },
      lessons: {
        title: 'Las 3 Lecciones No Obvias',
        items: [
          { id: '01', text: 'La trazabilidad es un requisito innegociable. Sin capturar resultados, no podemos escalar.' },
          { id: '02', text: 'La aceptación del conductor es predecible (Pago, Distancia, Horario), pero hoy no se captura sistemáticamente.' },
          { id: '03', text: 'Peak requiere un "Fast Path" soportado. La velocidad necesita un registro mínimo y obligatorio.' },
        ]
      },
      decisions: {
        title: 'Decisiones Tomadas',
        tableHeaders: { id: 'ID', decision: 'Decisión', owner: 'Responsable', evidence: 'Evidencia' },
        items: [
          { id: 'DEC-1', title: 'Razones de rechazo obligatorias (LiveOps)', date: '2025-12-10', owner: 'Marcos Subia', evidence: 'EP-01, EP-04', status: 'taken' },
          { id: 'DEC-2', title: 'Registro de reemplazos urgentes (<30s)', date: '2025-12-10', owner: 'Marcos Subia', evidence: 'EP-01, EP-04', status: 'taken' },
          { id: 'DEC-3', title: 'Soporte para acción "Marcar" en Matching', date: '2025-12-10', owner: 'Producto / LiveOps', evidence: 'EP-01', status: 'taken' },
          { id: 'DEC-4', title: 'Onboarding AI-First (Escala Q1)', date: 'Q1 2026', owner: 'Tarun', evidence: 'EP-03', status: 'taken' },
        ]
      }
    },
    overview: {
      title: 'Resumen Peak',
      subtitle: 'Línea de tiempo y Definiciones',
      timeline: [
        { date: 'Nov 13-17', title: 'Pico Buen Fin', desc: 'Ciclos de decisión acelerados; carga operativa máxima.', isError: false },
        { date: 'Nov 15 - Dec 15', title: 'Periodo Operativo', desc: 'Volatilidad de la demanda + reemplazos urgentes.', isError: false },
        { date: 'Sin Trazabilidad', title: 'Incidentes Walmart y Carso', desc: 'Brecha de visibilidad y señales obsoletas causaron detección tardía.', isError: true }
      ]
    },
    productInsights: {
      title: 'Insights de Producto',
      subtitle: 'La Voz de la Flota (Supply) & AI',
      clickHint: 'Clic en tarjeta para expandir detalle',
      items: [
         {
          id: 'EP-02',
          title: 'Voz de la Flota (Encuesta)',
          subtitle: 'Feedback de Supply y Rotación',
          content: [
            'Los pagos semanales son una Ventaja Competitiva crítica y deben protegerse.',
            'La aceptación es predecible (Pago, Distancia, Días, Horas).',
            'La estabilidad a menudo supera a un pago marginalmente mayor.',
            'Factores de deserción: volatilidad, multas poco claras y trato de dispatchers.'
          ],
          artifacts: ['Exportación Encuesta', 'Citas Destacadas'],
          status: 'Parcial (Pendiente Cuantitativo)',
          details: {
            context: 'Encuesta distribuida a 250 flotas activas durante Peak (Nov 20-Dic 5) para entender los motivadores de aceptación vs razones de abandono.',
            dataPoints: [
              { label: 'Valora Pago Semanal', value: '87%', trend: 'up' },
              { label: 'Prioriza Distancia', value: '62%', trend: 'neutral' },
              { label: 'Factores de Riesgo', value: '3', trend: 'down' }
            ],
            quote: "Me quedo por el pago puntual, pero apago la app cuando el trato es malo o las penalizaciones no son claras.",
            conclusion: "El dinero atrae, pero la experiencia operativa retiene. Necesitamos 'productizar' la promesa de Estabilidad."
          }
        },
        {
          id: 'EP-03',
          title: 'Pruebas A/B (IA)',
          subtitle: 'IA vs Humano — Negociación y Documentación',
          content: [
            'Periodo del experimento: Nov 1–30, 2025.',
            'A/B: Propiedad de negociación (IA vs Humano).',
            'A/B: Recolección de documentos (Weblink IA vs Guiado por Humano).',
            'Pendiente: Tasa de cierre final y métricas de eficiencia.'
          ],
          artifacts: ['Experimento AB Respond.pptx.pdf', 'Hoja de seguimiento'],
          status: 'Parcial',
          details: {
            context: 'Realizado con 500 leads nuevos. Variante A: Proceso manual estándar. Variante B: Agente de Voz IA + Flujo WhatsApp automatizado.',
            dataPoints: [
              { label: 'Tiempo de Respuesta', value: '<5s', trend: 'up' },
              { label: 'Horas Ops Ahorradas', value: '120h', trend: 'up' },
              { label: 'Error en Documentos', value: '15%', trend: 'down' }
            ],
            quote: "La mayoría de las flotas no notaron que hablaban con una IA hasta recibir el link de carga.",
            conclusion: "La IA está lista para negociación 'Nivel 1'. Permite escalar infinitamente durante picos de demanda sin aumentar personal."
          }
        }
      ]
    },
    beyondProduct: {
      title: 'Más allá de Producto',
      subtitle: 'Realidad Operativa',
      items: [
        {
          id: 'EP-01',
          title: 'Insights de Negociación',
          subtitle: 'Inmersión en campo (Julio + Ger)',
          content: [
            'Redundancia en Matching: ~70–80% de candidatos sugeridos ya habían sido contactados.',
            'Drivers de decisión: Pago, Distancia a CEDIS, Días/Semana, Horas/Día.',
            'LiveOps ejecuta reemplazos urgentes fuera de Matching; WhatsApp es la vía rápida.',
            'La negociación es relacional; las flotas prefieren mantener su punto de contacto.'
          ],
          artifacts: ['INSIGHTS.pdf', 'Hilos de WhatsApp'],
          status: 'Disponible'
        },
        {
          id: 'EP-04',
          title: 'Cadencia Ops y Realidad de Incidentes',
          subtitle: 'Cobertura y Casos Walmart/Carso',
          content: [
            'Falsa sensación de cobertura: Supply usa Matching para visibilidad, pero la falta de descartes ocultó huecos.',
            'Incidente Walmart: Escasez descubierta tarde por señal obsoleta en sistema.',
            'Incidente Carso: 9 solicitudes cerradas sin cobertura real confirmada.',
            'Brecha de Evidencia: Falta de observabilidad para responder CUÁNDO comenzaron los incidentes.'
          ],
          artifacts: ['Narrativa Angie', 'Bitácora LiveOps'],
          status: 'Disponible (Cualitativo)'
        }
      ]
    },
    themes: {
      title: 'Diagnóstico y Estrategia',
      subtitle: 'De Problema a Solución',
      labels: { diagnosis: 'Diagnóstico', action: 'Acción Requerida', linkedTo: 'VINCULADO A:' },
      items: [
        { 
          title: 'Trazabilidad y Retroalimentación', 
          iconKey: 'eye',
          diagnosis: 'Resultados, descartes y reemplazos ocurren fuera del sistema (WhatsApp/Teléfono). Las razones se pierden.',
          action: 'Logging obligatorio + disciplina de gestión de incidentes.',
          relatedIds: ['DEC-1', 'DEC-2']
        },
        { 
          title: 'Brecha de Adopción del Matching', 
          iconKey: 'target',
          diagnosis: 'Sugerencias redundantes (~80%). Las colocaciones urgentes ignoran el sistema por velocidad.',
          action: 'Mecanismos de integridad + soporte a acción de "Marcar".',
          relatedIds: ['DEC-3']
        },
        { 
          title: 'Diseño de la Oferta', 
          iconKey: 'check',
          diagnosis: 'La aceptación es predecible, pero las ofertas se improvisan en cada llamada.',
          action: 'Plantilla de oferta estándar forzosa durante la negociación.',
          relatedIds: ['PROP-2']
        },
        { 
          title: 'Canal Rápido ("Fast Path") Soportado', 
          iconKey: 'zap',
          diagnosis: 'WhatsApp es la columna vertebral de la velocidad. Combatirlo genera operaciones invisibles ("Shadow Ops").',
          action: 'Construir flujos rápidos que reflejen la realidad + visibilidad.',
          relatedIds: ['DEC-2', 'PROP-3']
        },
        { 
          title: 'Ritmo Operativo (Cadencia)', 
          iconKey: 'refresh',
          diagnosis: 'Al reducir puntos de contacto (remoto), la visibilidad colapsa y la reacción sufre.',
          action: 'Cadencia Peak + Guardia + Bitácora de incidentes.',
          relatedIds: ['PROP-1']
        },
        { 
          title: 'Escalabilidad con IA', 
          iconKey: 'bot',
          diagnosis: 'El onboarding manual y la documentación son cuellos de botella en picos de demanda.',
          action: 'Enfoque AI-first para onboarding iniciando Q1.',
          relatedIds: ['DEC-4']
        },
      ]
    },
    raci: {
      title: 'Modelo de Responsabilidad',
      subtitle: 'Gobernanza y Ejecución',
      description: 'Las Iniciativas listadas requieren dueños claros para evitar la trampa de "todos son dueños de todo". Esta matriz RACI define quién es el Responsable Final (Accountable) del éxito de cada Decisión y Propuesta.',
      headers: { type: 'Tipo', id: 'ID', item: 'Ítem', r: 'Ejecutor (R)', a: 'Aprobador (A)', c: 'Consultado', i: 'Informado' },
      legend: { r: 'Responsable (Ejecuta el trabajo)', a: 'Aprobador (Dueño del resultado)', c: 'Consultado (Input)', i: 'Informado (Actualizado)' },
      items: RACI_DATA_ES
    },
    initiatives: {
      title: 'Iniciativas',
      subtitle: 'Ejecución Próximo Peak',
      labels: { owner: 'Dueño', evidence: 'Origen (Decisión/Propuesta)' },
      items: [
        { id: 'A', title: 'Auto Afiliaciones usando IA', description: 'Flujo de onboarding guiado por IA que recolecta y valida documentos E2E.', output: 'WhatsApp/Flow + Vista Admin', owner: 'Tarun', evidence: 'DEC-4' },
        { id: 'B', title: 'LiveOps Quick Wins', description: 'Mejoras mínimas de registro + visibilidad alineadas a la realidad de LiveOps.', output: 'Log de cambios, Razones de rechazo', owner: 'Marcos Subia', evidence: 'DEC-1, DEC-2' },
        { id: 'C', title: 'Integridad de Matching', description: 'Cambios de producto para hacer confiable la señal de Matching.', output: 'Acción de Marcar + Resultados', owner: 'Producto', evidence: 'DEC-3' },
        { id: 'D', title: 'Cadencia Peak y Guardia', description: 'Ritmo de comunicación estándar + protocolo de escalación.', output: 'Cadencia, Log, Horario', owner: 'Liderazgo', evidence: 'PROP-1' },
        { id: 'E', title: 'Plantilla de Oferta Estándar', description: 'Formato obligatorio capturando variables clave de aceptación.', output: 'Plantilla + Cumplimiento', owner: 'Supply', evidence: 'PROP-2' },
        { id: 'F', title: 'Resumen Diario Peak', description: 'Resumen ejecutivo diario sobre puntos de quiebre y cambios.', output: 'Email/Slack diario', owner: 'Ops Producto', evidence: 'PROP-3' },
        { id: 'G', title: 'App Flotas (MVP)', description: 'Experiencia autoservicio para claridad + gestión básica.', output: 'MVP App', owner: 'Producto', evidence: 'Nueva' },
      ]
    },
    openItems: {
      title: 'Siguientes Pasos',
      subtitle: 'Antes de Externalizar Deck',
      items: [
        'Formalizar EP-04 como brecha de evidencia (explícitamente "no rastreable").',
        'Implementar bitácora de incidentes inmediatamente para Q1 2026.',
        'Completar exportación de Encuesta y citas (EP-02).',
        'Finalizar números de prueba A/B (EP-03).',
        'Definir acrónimos internos para evitar jerga externa.'
      ],
      footer: 'Fin de la Presentación • PartRunner 2025'
    }
  }
};