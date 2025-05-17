// src/components/IntroSection.jsx
import React from 'react';
import './IntroSection.css';
import { FaHandsHelping, FaHeartbeat, FaChalkboardTeacher } from 'react-icons/fa';

function IntroSection() {
return (
<section className="intro-section">
    <h2 className="intro-title">Comprometidos con salvar vidas</h2>
    <div className="intro-cards">
    <div className="card">
        <FaHandsHelping className="card-icon" />   {/* Icono de manos ayudando  */}
        <h3>Vocación de Servicio</h3>
        <p>Formamos personas con pasión y entrega para actuar en emergencias reales.</p>
    </div>
    <div className="card">
        <FaHeartbeat className="card-icon" />  {/* Icono de corazón  */}
        <h3>Preparación Real</h3>
        <p>Entrenamientos prácticos con simulaciones reales para actuar con confianza.</p>
    </div>
    <div className="card">
        <FaChalkboardTeacher className="card-icon" /> {/* Icono de profesor  */}
        <h3>Instructores Expertos</h3>
        <p>Nuestros formadores son profesionales certificados con experiencia en campo.</p>
    </div>
    </div>

    <div className="intro-cta-container">
    <a href="#capacitaciones" className="intro-cta-btn">
        Ver Capacitaciones
    </a>
    </div>
</section>
);
}

export default IntroSection;
