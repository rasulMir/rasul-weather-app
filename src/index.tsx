import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Weather from './components/Weather';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
			<CssBaseline />
      <Weather />
    </Provider>
  </React.StrictMode>
);