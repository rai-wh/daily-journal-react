import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Journal } from "./components/Journal";
import reportWebVitals from './reportWebVitals';
import { NoteForm } from './components/notes/NoteForm';

ReactDOM.render(
  <React.StrictMode>
    <NoteForm />
    <Journal />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();