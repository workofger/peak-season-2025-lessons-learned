# 🎯 Presentation Template

**Professional Interactive Presentation System**

A modern, customizable presentation template built with React, TypeScript, and Tailwind CSS. Perfect for corporate presentations, product reviews, quarterly reports, and team retrospectives.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Theme System** | Multiple built-in themes (dark, light, corporate, nature) |
| 🌐 **i18n Support** | Multi-language support (EN/ES out of the box) |
| ⌨️ **Keyboard Navigation** | Arrow keys, number shortcuts (0-5), spacebar |
| 🔍 **Command Palette** | Quick navigation with ⌘K (like VS Code/Spotlight) |
| 🎬 **Presentation Mode** | Fullscreen slides with ⌘⇧P |
| 📱 **Responsive** | Desktop sidebar + mobile hamburger menu |
| 🔗 **Deep Linking** | Shareable URLs with #section-id |
| 📊 **Progress Bar** | Visual scroll progress indicator |
| ♿ **Accessible** | Keyboard nav, focus states, skip links |

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

```
http://localhost:3000
```

---

## 📁 Project Structure

```
├── config/
│   ├── presentation.config.ts   # 🎯 Main configuration file
│   └── themes.ts                # 🎨 Theme definitions
│
├── content/
│   ├── en.ts                    # 🇺🇸 English content
│   ├── es.ts                    # 🇪🇸 Spanish content
│   └── index.ts                 # Content exports
│
├── context/
│   ├── ThemeContext.tsx         # Theme provider
│   └── PresentationContext.tsx  # App state provider
│
├── hooks/
│   ├── useKeyboardNavigation.ts # Keyboard shortcuts
│   └── useScrollSpy.ts          # Section tracking
│
├── components/
│   ├── ui/                      # 🧱 Reusable UI components
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── ...
│   │
│   ├── Hero.tsx                 # Section components
│   ├── Purpose.tsx
│   ├── CommandPalette.tsx
│   ├── PresentationMode.tsx
│   └── ...
│
├── types/
│   ├── config.ts                # Configuration types
│   ├── content.ts               # Content types
│   └── index.ts
│
├── App.tsx                      # Main app component
├── index.tsx                    # Entry point
└── index.css                    # Global styles
```

---

## ⚙️ Configuration

### `config/presentation.config.ts`

This is the main configuration file. Customize it to create your presentation:

```typescript
export const presentationConfig: PresentationConfig = {
  // 🏢 Your branding
  branding: {
    name: 'Your Company',
    logo: './your-logo.png',
    icon: './your-icon.png',
  },

  // 🎨 Choose a theme: 'dark' | 'light' | 'corporate' | 'nature'
  theme: 'dark',

  // 🌐 Languages
  i18n: {
    defaultLanguage: 'en',
    languages: ['en', 'es'],
  },

  // 📑 Your sections
  sections: [
    { id: 'hero', component: 'Hero', showInNav: false },
    { id: 'intro', component: 'Purpose', showInNav: true },
    { id: 'content', component: 'Content', showInNav: true },
    { id: 'summary', component: 'NextSteps', showInNav: true },
  ],

  // ⚙️ Features
  features: {
    commandPalette: true,
    presentationMode: true,
    keyboardNavigation: true,
    progressBar: true,
    languageToggle: true,
    pdfExport: false,
    deepLinking: true,
    scrollSpy: true,
  },

  // 📊 Metadata
  metadata: {
    title: 'Your Presentation Title',
    subtitle: 'Subtitle',
    date: '2025-01-01',
    author: 'Your Team',
  },
};
```

---

## 📝 Creating Content

### Step 1: Edit Content Files

Edit `content/en.ts` and `content/es.ts`:

```typescript
export const enContent: PresentationContent = {
  nav: {
    title: 'Your Title',
    items: [
      { id: 'hero', label: 'Start' },
      { id: 'intro', label: 'Introduction' },
      // ... more sections
    ],
  },
  hero: {
    badge: 'Your Team',
    title: 'Main Title',
    subtitle: 'Compelling subtitle',
    cta: 'Get Started',
  },
  // ... more content
};
```

### Step 2: Match Section IDs

Ensure your content `nav.items` IDs match your `config.sections` IDs:

```typescript
// config/presentation.config.ts
sections: [
  { id: 'hero', ... },      // ✅ Matches
  { id: 'intro', ... },     // ✅ Matches
]

// content/en.ts
nav: {
  items: [
    { id: 'hero', ... },    // ✅ Same ID
    { id: 'intro', ... },   // ✅ Same ID
  ]
}
```

---

## 🎨 Themes

### Available Themes

| Theme | Description |
|-------|-------------|
| `dark` | Dark background with amber accent (default) |
| `light` | Light background with blue accent |
| `corporate` | Professional slate with sky blue |
| `nature` | Deep green with organic feel |

### Switching Themes

```typescript
// config/presentation.config.ts
theme: 'corporate', // Change theme here
```

### Creating Custom Themes

Edit `config/themes.ts`:

```typescript
export const myCustomTheme: Theme = {
  name: 'custom',
  colors: {
    primary: '#your-color',
    bgPrimary: '#background',
    // ... all color properties
  },
  fonts: {
    heading: "'Your Font', sans-serif",
    body: "'Your Font', sans-serif",
    mono: "'Your Mono Font', monospace",
  },
};

// Add to themes registry
export const themes = {
  // ... existing themes
  custom: myCustomTheme,
};
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `↑` `↓` or `←` `→` | Navigate sections |
| `Space` | Next section |
| `0-5` | Jump to section by number |
| `⌘K` / `Ctrl+K` | Open command palette |
| `⌘⇧P` / `Ctrl+Shift+P` | Enter presentation mode |
| `Esc` | Close modals / exit presentation |

---

## 🏗️ Creating New Section Types

### 1. Create Component

```typescript
// components/MySection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface MySectionProps {
  content: {
    title: string;
    items: string[];
  };
}

export const MySection: React.FC<MySectionProps> = ({ content }) => {
  return (
    <section id="my-section" className="min-h-screen py-20 px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        {content.title}
      </motion.h2>
      {/* Your content */}
    </section>
  );
};
```

### 2. Add Types

```typescript
// types/content.ts
export interface MySectionContent {
  title: string;
  items: string[];
}
```

### 3. Add to Config

```typescript
// config/presentation.config.ts
sections: [
  // ... existing
  { id: 'my-section', component: 'MySection', showInNav: true },
]
```

### 4. Add Content

```typescript
// content/en.ts
mySection: {
  title: 'My New Section',
  items: ['Item 1', 'Item 2'],
}
```

---

## 📦 Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` folder.

---

## 🚢 Deployment

### Static Hosting (Recommended)

Works with any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

```bash
npm run build
# Deploy contents of dist/ folder
```

### Custom Base Path

If deploying to a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  // ...
});
```

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 6** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

---

## 📄 License

MIT License - Feel free to use for any project.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Made with ❤️ by the Product Team**
