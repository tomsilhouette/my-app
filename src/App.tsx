import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} /> */ All link enteries that are not registered lead to 404 page /*
    </Routes>
  );
}

export default App;
