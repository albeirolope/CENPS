import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaEye, FaHandsHelping } from 'react-icons/fa';
import equipo1 from '../assets/hero.jpg';
import equipo2 from '../assets/rcp.jpg';
import actividad1 from '../assets/rescate.jpg';

function AboutUs() {
const galleryItems = [
{
    img: equipo1,
    alt: 'Entrenamiento en playa',
    desc: 'Entrenamiento práctico en la playa con instructores certificados.',
},
{
    img: equipo2,
    alt: 'Capacitación en RCP',
    desc: 'Sesión de capacitación en reanimación cardiopulmonar (RCP).',
},
{
    img: actividad1,
    alt: 'Simulacro de rescate',
    desc: 'Simulacro de rescate acuático en condiciones reales.',
},
];

return (
<section className="about-section" id="quienes-somos">
    <div className="about-container">
    <motion.h2 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        ¿Quiénes somos?
    </motion.h2>

    <motion.div
        className="about-history"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
    >
        <p>
        El Centro de Entrenamiento en Primeros Auxilios y Salvamento Acuático (CENPS) nació con la misión de
        brindar conocimientos vitales a la comunidad. Con años de experiencia, formamos héroes preparados para
        responder ante emergencias acuáticas y de primeros auxilios.
        </p>
    </motion.div>

    <div className="about-mvv">
        <motion.div
        className="mvv-card"
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 200 }} 
        >
        <FaHeartbeat className="mvv-icon" />
        <h3>Misión</h3>
        <p>Capacitar personas con conocimientos técnicos y humanos en primeros auxilios y salvamento acuático.</p>
        </motion.div>

        <motion.div
        className="mvv-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
        >
        <FaEye className="mvv-icon" />
        <h3>Visión</h3>
        <p>Ser líderes a nivel regional en formación integral para la atención de emergencias y rescate.</p>
        </motion.div>

        <motion.div
        className="mvv-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
        >
        <FaHandsHelping className="mvv-icon" />
        <h3>Valores</h3>
        <ul className="lista-valores">
            <li>🤝 Compromiso</li>
            <li>🤗 Solidaridad</li>
            <li>🎯 Disciplina</li>
            <li>🛡 Responsabilidad</li>
            <li>❤️ Empatía</li>
        </ul>
        </motion.div>
    </div>

    <div className="about-gallery">
        <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        >
        Nuestro equipo y actividades
        </motion.h3>
        <div className="gallery-grid">
        {galleryItems.map((item, index) => (
            <motion.div
            className="gallery-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            >
            <img src={item.img} alt={item.alt} />
            <p className="image-caption">{item.desc}</p>
            </motion.div>
        ))}
        </div>
    </div>
    </div>
</section>
);
}

export default AboutUs;
