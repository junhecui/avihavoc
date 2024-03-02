import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Landing } from './pages/Landing';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Landing />
  </React.StrictMode>
);
