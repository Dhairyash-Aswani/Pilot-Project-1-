import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <- make sure .jsx extension is used if App is a JSX file
import './assets/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
