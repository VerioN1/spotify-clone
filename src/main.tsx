import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';
import './App/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
