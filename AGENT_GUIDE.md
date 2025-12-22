# 🤖 AGENT GUIDE - Presentation Template

> **For AI Agents**: This document explains how to use and configure this presentation template. Read this before making changes.

---

## 📋 QUICK REFERENCE

```
Template Type: Interactive Web Presentation
Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
Deploy: SFTP to products.partrunner.com
Languages: English (en), Spanish (es)
```

---

## 🏗️ ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│                        index.tsx                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              ThemeProvider (context/)                │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │        PresentationProvider (context/)       │    │    │
│  │  │  ┌─────────────────────────────────────┐    │    │    │
│  │  │  │              App.tsx                 │    │    │    │
│  │  │  │  ┌─────────┐ ┌─────────────────┐   │    │    │    │
│  │  │  │  │ Sidebar │ │ Main Content    │   │    │    │    │
│  │  │  │  │  (ui/)  │ │ (Section Comps) │   │    │    │    │
│  │  │  │  └─────────┘ └─────────────────┘   │    │    │    │
│  │  │  └─────────────────────────────────────┘    │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 FILE STRUCTURE & PURPOSE

### Configuration Files (MODIFY THESE FIRST)

| File | Purpose | When to Modify |
|------|---------|----------------|
| `config/presentation.config.ts` | Main config: branding, theme, sections, features | Every new presentation |
| `constants.ts` | All content (text, data, translations) | Every new presentation |
| `.env.local` | Deploy settings (SFTP path) | Change deploy target |

### Core Files (RARELY MODIFY)

| File | Purpose |
|------|---------|
| `App.tsx` | Main component, orchestrates sections |
| `index.tsx` | Entry point, sets up providers |
| `index.css` | Global styles, CSS variables |

### Folders

| Folder | Contains |
|--------|----------|
| `components/` | Section components (Hero, Purpose, etc.) |
| `components/ui/` | Reusable UI components (Sidebar, Card, Badge) |
| `config/` | Configuration files |
| `context/` | React Context providers (Theme, Presentation) |
| `hooks/` | Custom React hooks |
| `types/` | TypeScript interfaces |
| `content/` | Content templates (not used in current setup) |

---

## 🎯 HOW TO CREATE A NEW PRESENTATION

### Step 1: Clone or Copy the Template

```bash
# Option A: Clone repo
git clone https://github.com/workofger/peak-season-2025-lessons-learned.git my-presentation

# Option B: Copy existing
cp -r Presentacion_AI my-new-presentation
```

### Step 2: Configure `config/presentation.config.ts`

```typescript
export const presentationConfig: PresentationConfig = {
  // 1. UPDATE BRANDING
  branding: {
    name: 'Your Project Name',
    logo: './Logo.png',        // Put logo in public/
    icon: './Isotipo.png',     // Put icon in public/
  },

  // 2. CHOOSE THEME
  theme: 'dark',  // Options: 'dark' | 'light' | 'corporate' | 'nature'

  // 3. SET LANGUAGES
  i18n: {
    defaultLanguage: 'en',
    languages: ['en', 'es'],
  },

  // 4. DEFINE SECTIONS (must match section IDs in constants.ts)
  sections: [
    { id: 'hero', component: 'Hero', showInNav: false },
    { id: 'purpose', component: 'Purpose', showInNav: true },
    // Add more sections...
  ],

  // 5. TOGGLE FEATURES
  features: {
    commandPalette: true,      // ⌘K
    presentationMode: true,    // ⌘⇧P
    keyboardNavigation: true,  // Arrow keys
    progressBar: true,
    languageToggle: true,
    pdfExport: false,
    deepLinking: true,
    scrollSpy: true,
  },

  // 6. SET METADATA
  metadata: {
    title: 'Your Presentation Title',
    date: '2025-01-01',
    author: 'Your Team',
  },
};
```

### Step 3: Edit Content in `constants.ts`

The `CONTENT` object has two keys: `en` and `es`. Each contains:

```typescript
CONTENT = {
  en: {
    nav: { ... },           // Navigation items
    hero: { ... },          // Hero section content
    purpose: { ... },       // Purpose/intro section
    // ... more sections based on your needs
  },
  es: {
    // Same structure in Spanish
  }
}
```

**IMPORTANT**: The section IDs in `nav.items` MUST match the section IDs in `config.sections`.

### Step 4: Configure Deploy in `.env.local`

```bash
SFTP_HOST=sftp-products.partrunner.com
SFTP_USER=productsroot
SFTP_PEM_PATH=./assets/partrunner-products.pem
SFTP_REMOTE_PATH=/products.partrunner.com/YourProjectName  # ← CHANGE THIS
```

### Step 5: Deploy

```bash
npm run deploy
# or
./deploy.sh
```

---

## 🎨 THEME SYSTEM

### Available Themes

| Theme | Primary Color | Background | Best For |
|-------|--------------|------------|----------|
| `dark` | Amber (#f59e0b) | Black | Default, tech presentations |
| `light` | Blue (#2563eb) | White | Corporate, formal |
| `corporate` | Sky (#0ea5e9) | Slate | Business presentations |
| `nature` | Green (#22c55e) | Deep green | Sustainability, organic |

### CSS Variables (set by ThemeContext)

```css
--color-primary          /* Main accent color */
--color-primary-light    /* Lighter variant */
--color-secondary        /* Secondary accent */
--color-bg-primary       /* Main background */
--color-bg-secondary     /* Cards, sections */
--color-bg-tertiary      /* Hover states */
--color-text-primary     /* Main text */
--color-text-secondary   /* Subdued text */
--color-text-muted       /* Hints, labels */
--color-success          /* Green states */
--color-warning          /* Yellow/amber states */
--color-error            /* Red states */
--color-info             /* Blue states */
```

### Creating Custom Theme

Edit `config/themes.ts`:

```typescript
export const myTheme: Theme = {
  name: 'mytheme',
  colors: {
    primary: '#your-color',
    // ... all color properties
  },
  fonts: { ... }
};

// Add to registry
export const themes = {
  ...existingThemes,
  mytheme: myTheme,
};
```

---

## 🧩 COMPONENT PATTERNS

### Section Component Template

```typescript
// components/MySection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { DashboardContent } from '../constants';

interface MySectionProps {
  content: DashboardContent['mySection'];
}

const MySection: React.FC<MySectionProps> = ({ content }) => {
  return (
    <section 
      id="my-section"  // MUST match config section ID
      className="min-h-screen py-20 px-8 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white">
          {content.title}
        </h2>
        {/* Your content */}
      </motion.div>
    </section>
  );
};

export default MySection;
```

### Adding Section to App

1. Import in `App.tsx`:
```typescript
import MySection from './components/MySection';
```

2. Add to render:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <MySection content={content.mySection} />
</motion.div>
```

3. Add to config:
```typescript
sections: [
  // ...existing
  { id: 'my-section', component: 'MySection', showInNav: true },
]
```

4. Add content:
```typescript
// constants.ts
mySection: {
  title: 'My Section',
  // ...
}
```

---

## ⌨️ KEYBOARD SHORTCUTS

| Shortcut | Action |
|----------|--------|
| `↑` `↓` `←` `→` | Navigate between sections |
| `Space` | Next section |
| `0-9` | Jump to section by index |
| `⌘K` / `Ctrl+K` | Open command palette |
| `⌘⇧P` / `Ctrl+Shift+P` | Toggle presentation mode |
| `Esc` | Close modals |

---

## 📦 BUILD & DEPLOY

### Development

```bash
npm run dev     # Start dev server at localhost:3000
```

### Production Build

```bash
npm run build   # Creates dist/ folder
npm run preview # Preview production build
```

### Deploy to PartRunner

```bash
npm run deploy  # Builds and deploys via SFTP
```

**Deploy URL Pattern**: `https://products.partrunner.com/{SFTP_REMOTE_PATH}/`

---

## 🔧 COMMON MODIFICATIONS

### Change Language Toggle Behavior

Edit `context/PresentationContext.tsx`, `toggleLang` function.

### Add New Language

1. Add to `config/presentation.config.ts`:
```typescript
i18n: {
  languages: ['en', 'es', 'pt'],  // Add language code
}
```

2. Add translations in `constants.ts`:
```typescript
export const CONTENT = {
  en: { ... },
  es: { ... },
  pt: { ... },  // Add Portuguese content
};
```

### Disable Feature

Set to `false` in `config/presentation.config.ts`:
```typescript
features: {
  commandPalette: false,  // Disables ⌘K
}
```

### Change Sidebar Width

Edit `components/ui/Sidebar.tsx`:
```typescript
className="... w-64 ..."  // Change 64 to desired width (Tailwind units)
```

And update `App.tsx`:
```typescript
className="flex-1 lg:ml-64 ..."  // Match the width
```

---

## ⚠️ IMPORTANT NOTES

1. **Section IDs must be unique** and match between:
   - `config/presentation.config.ts` → `sections[].id`
   - `constants.ts` → `nav.items[].id`
   - Component → `<section id="...">`

2. **Images go in `/public`** folder and are referenced as `./filename.png`

3. **The PEM key** for deploy must be in `./assets/partrunner-products.pem`

4. **TypeScript types** are defined in:
   - `constants.ts` (content types like `DashboardContent`)
   - `types/config.ts` (configuration types)
   - `types/content.ts` (generic content types)

5. **Presentation Mode** renders slides defined in `components/PresentationMode.tsx`. If adding new sections, update the `slides` array there too.

---

## 📝 CHECKLIST FOR NEW PRESENTATION

```
□ Clone/copy template
□ Update branding in config/presentation.config.ts
□ Choose theme
□ Define sections in config
□ Edit content in constants.ts (both EN and ES)
□ Update SFTP_REMOTE_PATH in .env.local
□ Add any custom components needed
□ Test locally with npm run dev
□ Deploy with npm run deploy
□ Verify at https://products.partrunner.com/YourProject/
```

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Build fails | Run `npx tsc --noEmit` to check TypeScript errors |
| Styles not applying | Check CSS variable names match theme |
| Section not showing | Verify ID matches in config, constants, and component |
| Deploy fails | Check .pem permissions: `chmod 400 ./assets/*.pem` |
| Dev server won't start | Delete `.env.local` quarantine: `xattr -c .env.local` |

---

**Last Updated**: December 2025  
**Template Version**: 1.0.0  
**Maintained by**: Product Team

