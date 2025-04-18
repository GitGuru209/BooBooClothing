import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Import App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <Router>  
      <App /> 
    </Router>
  </React.StrictMode>
);
