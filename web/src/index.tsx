import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SyncProvider } from './context/SyncContext';

ReactDOM.render(
  <React.StrictMode>
    <SyncProvider>
      <App />
    </SyncProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
