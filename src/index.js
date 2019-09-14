import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Store'
import App from './App';

ReactDOM.render(
  <App store={Store} />,
  document.getElementById('root'),
);