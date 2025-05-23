import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; 
import AboutUs from './components/AboutUs'; 
import Courses from './components/Cursos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/cursos" element={<Courses />} />

        <Route path="/capacitaciones" element={<div>Capacitaciones</div>} />
      </Routes>
    </Router>
  );
}


export default App;
