import React from 'react';
import './CapacitacionesSimulacros.css';
import cap1 from '../assets/simulacro.jpg';
import cap2 from '../assets/simulacro.jpg';
import cap3 from '../assets/simulacro.jpg';

function CapacitacionesSimulacros() {
return (
<section className="capacitaciones-section" id="capacitaciones">
    <div className="capacitaciones-container">
    <h2>Capacitaciones y Simulacros</h2>

    <div className="capacitaciones-info">
        <p>
        Ofrecemos servicios especializados para empresas, instituciones educativas y organizaciones que buscan
        fortalecer sus protocolos de emergencia y preparar a su personal ante cualquier eventualidad. Nuestros servicios incluyen:
        </p>
        <ul>
        <li><strong>Capacitaciones presenciales o en línea</strong> en primeros auxilios y salvamento acuático.</li>
        <li><strong>Simulacros de incendio y evacuación</strong> adaptados a cada entorno institucional.</li>
        <li><strong>Planificación de emergencias</strong> personalizada según el riesgo y las necesidades del cliente.</li>
        </ul>
    </div>

    <div className="capacitaciones-gallery">
        <h3>Galería de actividades</h3>
        <div className="gallery-grid">
        <div className="gallery-item">
            <img src={cap1} alt="Capacitación en primeros auxilios" />
            <p>Sesión práctica de primeros auxilios con estudiantes universitarios.</p>
        </div>
        <div className="gallery-item">
            <img src={cap2} alt="Simulacro de evacuación" />
            <p>Simulacro de evacuación en una institución educativa local.</p>
        </div>
        <div className="gallery-item">
            <img src={cap3} alt="Planificación de emergencias" />
            <p>Capacitación a personal administrativo sobre planes de emergencia.</p>
        </div>
        </div>
    </div>

    <div className="testimonios">
        <h3>Testimonios</h3>
        <blockquote>
        “Gracias a CENPS, nuestro colegio está ahora mejor preparado para afrontar emergencias. La capacitación fue dinámica y muy útil.”
        <span>- Coordinador Académico, Colegio Santa Marta</span>
        </blockquote>
        <blockquote>
        “El simulacro fue una experiencia reveladora para todos los empleados. Excelente organización y ejecución.”
        <span>- Jefe de Seguridad, Empresa XYZ</span>
        </blockquote>
    </div>
    </div>
</section>
);
}

export default CapacitacionesSimulacros;
