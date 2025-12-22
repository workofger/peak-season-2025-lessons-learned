/**
 * 🚀 PRESENTATION TEMPLATE - ENTRY POINT
 * 
 * This is the application entry point.
 * It sets up the providers and renders the main App component.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, PresentationProvider } from './context';
import presentationConfig from './config/presentation.config';

// Import global styles
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider initialTheme={presentationConfig.theme}>
      <PresentationProvider config={presentationConfig}>
        <App />
      </PresentationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
