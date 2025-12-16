# Peak Season 2025 - Lessons Learned

Una aplicación interactiva de presentación para documentar las lecciones aprendidas durante la temporada alta 2025 de PartRunner.

## 🚀 Características

### Navegación
- **Sidebar Desktop** - Navegación fija con scroll spy
- **Menú Mobile** - Drawer animado para dispositivos móviles
- **Deep Links** - URLs compartibles para cada sección (`#section-id`)
- **Progress Bar** - Indicador de progreso de lectura

### Interactividad
- **Keyboard Navigation** - Navega con flechas ↑↓, números 0-9, y espacio
- **Command Palette** - Búsqueda rápida con `⌘K` / `Ctrl+K`
- **Modo Presentación** - Pantalla completa con `⌘⇧P` / `Ctrl+Shift+P`
- **Export PDF** - Descarga la presentación como PDF

### Accesibilidad
- Skip links para navegación con teclado
- Atributos ARIA completos
- Focus states visibles
- Soporte completo de screen readers

### Bilingüe
- Contenido en inglés y español
- Toggle de idioma en la esquina superior derecha

### Animaciones
- Entrada animada de secciones al hacer scroll
- Tarjetas interactivas con modales expandibles
- Transiciones fluidas con Framer Motion

## 🛠️ Tech Stack

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Vite 6** - Build tool
- **Tailwind CSS 4** - Estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconografía
- **html2pdf.js** - Export PDF

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## ⌨️ Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `↑` `↓` | Navegar entre secciones |
| `←` `→` | Navegar entre secciones |
| `Space` | Siguiente sección |
| `0-9` | Ir a sección específica |
| `⌘K` / `Ctrl+K` | Abrir command palette |
| `⌘⇧P` / `Ctrl+Shift+P` | Modo presentación |
| `Esc` | Cerrar modales |

## 📁 Estructura del Proyecto

```
├── App.tsx                    # Componente principal
├── index.tsx                  # Entry point
├── index.html                 # HTML template
├── index.css                  # Estilos globales + Tailwind
├── constants.ts               # Contenido EN/ES
├── types.ts                   # TypeScript types
├── vite.config.ts             # Configuración Vite
├── postcss.config.js          # Configuración PostCSS
└── components/
    ├── Hero.tsx               # Sección hero
    ├── Sidebar.tsx            # Navegación desktop
    ├── MobileNav.tsx          # Navegación mobile
    ├── ProgressBar.tsx        # Barra de progreso
    ├── CommandPalette.tsx     # Paleta de comandos
    ├── PresentationMode.tsx   # Modo presentación
    ├── Section.tsx            # Wrapper de sección
    ├── ExecutiveSummary.tsx   # Resumen ejecutivo
    ├── ProductInsights.tsx    # Insights con modales
    ├── BeyondProduct.tsx      # Evidence packs
    ├── ThemesSection.tsx      # Diagnóstico estratégico
    ├── InitiativesSection.tsx # Grid de iniciativas
    └── RaciSection.tsx        # Matriz RACI
```

## 🎨 Paleta de Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `pr-black` | `#0f0f0f` | Background principal |
| `pr-dark` | `#1a1a1a` | Background secundario |
| `pr-gray` | `#2d2d2d` | Bordes y elementos |
| `pr-yellow` | `#f59e0b` | Acento principal |
| `pr-lightYellow` | `#fbbf24` | Acento hover |
| `pr-white` | `#f3f4f6` | Texto principal |

## 📄 Licencia

Privado - PartRunner 2025
