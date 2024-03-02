import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Landing } from './pages/Landing';
import { Header } from './components/Header';
import { Map } from './pages/Map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<Map />} />
        <Route path="/credit" element={<Landing />} />
        <Route path="*" element={<p>ahh</p>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
