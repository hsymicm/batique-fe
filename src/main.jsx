import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from '@/contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import App from '@/pages/App.jsx';
import ScrollTop from '@/components/ScrollTop';
import '@/assets/style/index.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <ScrollTop />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
