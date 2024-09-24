import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from 'app/App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
