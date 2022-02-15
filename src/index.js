import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './components/App/App';
import AboutMe from './components/AboutMe/AboutMe';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <h1>Welkom</h1>
      <nav className="navbar">
        <Link to="/">Songsaver</Link> | {''}
        <Link to="/aboutme">About me</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
