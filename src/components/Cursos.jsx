import React, { useState } from 'react';
import { CalendarClock, Video, Users } from 'lucide-react';
import './Cursos.css';
import WhatsAppButton from './WhatsAppButton';


const courses = [
{
title: 'Curso de Salvamento Acuático',
duration: '40 horas',
modality: 'Presencial',
description: 'Formación intensiva en rescate acuático y técnicas de salvamento.',
details: 'Incluye técnicas de nado, rescate con cuerdas, primeros auxilios acuáticos y simulacros en piscina.',
},
{
title: 'Curso de Primeros Auxilios Básicos',
duration: '20 horas',
modality: 'Presencial / Virtual',
description: 'Aprende a actuar ante emergencias comunes y salvar vidas.',
details: 'Incluye control de hemorragias, quemaduras, fracturas, manejo de heridas y soporte básico de vida.',
},
{
title: 'Curso de RCP y DEA',
duration: '10 horas',
modality: 'Presencial',
description: 'Entrenamiento práctico en reanimación cardiopulmonar y uso de desfibriladores.',
details: 'Prácticas con maniquíes, protocolos actualizados de RCP en adultos y niños, uso correcto del DEA.',
},
{
title: 'Curso para Brigadas de Emergencia',
duration: '30 horas',
modality: 'Presencial / Semipresencial',
description: 'Capacitación integral para equipos de respuesta a emergencias.',
details: 'Evacuación, simulacros, primeros auxilios, prevención de riesgos, y coordinación con entidades de emergencia.',
},
];

function Courses() {
const [selectedCourse, setSelectedCourse] = useState(null);

const openModal = (course) => {
setSelectedCourse(course);
};

const closeModal = () => {
setSelectedCourse(null);
};

return (
<section className="courses-section" id="cursos">
    <div className="courses-container">
    <h2>Nuestros Cursos</h2>
    <div className="courses-list">
        {courses.map((course, index) => (
        <div className="course-card" key={index}>
            <div className="course-content">
            <h3>{course.title}</h3>
            <p className="course-info">
                <CalendarClock size={16} style={{ marginRight: '10px', color: 'red' }} />
                <strong>Duración:</strong> {course.duration}
            </p>
            <p className="course-info">
                {course.modality.includes('Virtual') ? <Video size={16} style={{ marginRight: '8px',  color: 'red' }} /> : <Users size={16} style={{ marginRight: '8px',  color: 'red' }} />}
                <strong>Modalidad:</strong> {course.modality}
            </p>
            <p>{course.description}</p>
            </div>
            <button className="see-more-btn" onClick={() => openModal(course)}>Ver más</button>
        </div>
        ))}
    </div>
    </div>

    {selectedCourse && (
    <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{selectedCourse.title}</h3>
        <p><strong>Duración:</strong> {selectedCourse.duration}</p>
        <p><strong>Modalidad:</strong> {selectedCourse.modality}</p>
        <p>{selectedCourse.details}</p>
        <button className="close-btn" onClick={closeModal}>Cerrar</button>
        </div>
        
    </div>
    )}
    <div className="whatsapp-button">
        <WhatsAppButton />
    </div>

    <div className="footer">
        <p>© 2023 Todos los derechos reservados.</p>
        <p>Desarrollado por <a href="https://www.linkedin.com/in/López/" target="_blank" rel="noopener noreferrer">LópezA</a></p>
    </div>
</section>
);
}

export default Courses;
