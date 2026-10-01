import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter';
import ErrorBoundary from './ErrorBoundary.jsx';
import App from './App.jsx';
import { getPathLanguage, getPreferredLanguage, languagePaths } from './hooks.js';
import './index.css';

const language = getPathLanguage(window.location.pathname);
const preferredLanguage = getPreferredLanguage();

if (language === 'en' && preferredLanguage === 'zh' && window.location.pathname === '/') {
  window.location.replace(`${languagePaths.zh}${window.location.hash}`);
} else {
  const root = document.getElementById('root');
  const app = (
    <React.StrictMode>
      <ErrorBoundary>
        <App language={language} />
      </ErrorBoundary>
    </React.StrictMode>
  );

  if (root.firstElementChild) {
    ReactDOM.hydrateRoot(root, app);
  } else {
    ReactDOM.createRoot(root).render(app);
  }
}
