// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; // Import the root component

// Render the App component into the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
