// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles for the application
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in StrictMode for additional checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Function to measure performance in your app
// You can pass a function to log results, or send to an analytics endpoint
reportWebVitals();
