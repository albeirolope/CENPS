import React from 'react';
import './AboutUs.css';
import equipo1 from '../assets/equipo1.jpg';
import equipo2 from '../assets/equipo2.jpg';
import actividad1 from '../assets/actividad1.jpg';

function AboutUs() {
return (
<section className="about-section" id="quienes-somos">
    <div className="about-container">
    <h2>¿Quiénes somos?</h2>

    <div className="about-history">
        <p>
        El Centro de Entrenamiento en Primeros Auxilios y Salvamento Acuático (CENPS) nació con la misión de
        brindar conocimientos vitales a la comunidad. Con años de experiencia, formamos héroes preparados para
        responder ante emergencias acuáticas y de primeros auxilios.
        </p>
    </div>

    <div className="about-mvv">
        <div>
        <h3>Misión</h3>
        <p>Capacitar personas con conocimientos técnicos y humanos en primeros auxilios y salvamento acuático.</p>
        </div>
        <div>
        <h3>Visión</h3>
        <p>Ser líderes a nivel regional en formación integral para la atención de emergencias y rescate.</p>
        </div>
        <div>
        <h3>Valores</h3>
        <ul>
            <li>Compromiso</li>
            <li>Solidaridad</li>
            <li>Disciplina</li>
            <li>Responsabilidad</li>
            <li>Empatía</li>
        </ul>
        </div>
    </div>

    <div className="about-gallery">
        <h3>Nuestro equipo y actividades</h3>
        <div className="gallery-grid">
        <img src={equipo1} alt="Equipo CENPS 1" />
        <img src={equipo2} alt="Equipo CENPS 2" />
        <img src={actividad1} alt="Simulacro" />
        </div>
    </div>
    </div>
</section>
);
}

export default AboutUs;
