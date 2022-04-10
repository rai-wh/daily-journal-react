import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Journal } from "./components/Journal";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Journal />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();