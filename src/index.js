import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextUser } from './context/user';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/reset.css';
import './css/font.css';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextUser>
        <App />
      </ContextUser>
    </Router>
  </React.StrictMode>
);
