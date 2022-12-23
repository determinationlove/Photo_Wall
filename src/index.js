import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wall from './component/wall';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wall />
  </React.StrictMode>
);

reportWebVitals();
