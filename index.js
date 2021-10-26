import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div
style={{
  backgroundColor: 'blue',
  width: '100px',
  height: '100px'
}}
/>
  </React.StrictMode>,
  document.getElementById('root')
);
