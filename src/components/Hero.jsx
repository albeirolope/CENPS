import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../assets/rcp.jpg';
import img2 from '../assets/rescate.jpg';
import img3 from '../assets/simulacro.jpg';
import WhatsAppButton from './WhatsAppButton';

const images = [img1, img2, img3];

function Hero() {
const [index, setIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
    setIndex(prev => (prev + 1) % images.length);
}, 4000);

return () => clearInterval(interval);
}, []);

return (
<div className="hero-container">
    <img src={images[index]} alt="Slide" className="hero-image" />
    <div className="hero-overlay">
    <h1 className="hero-title">Formando héroes preparados para salvar vidas</h1>
    <p className="hero-subtitle">Capacitación profesional en primeros auxilios y salvamento acuático</p>
    <a href="https://wa.me/3022179565?text=Hola%2C%20estoy%20interesado%20en%20los%20cursos%20del%20CENPS%20podrías%20darme%20más%20información%3F" target="_blank" rel="noopener noreferrer" className="hero-cta">
        Contáctanos por WhatsApp
    </a>
    </div>

    <WhatsAppButton />
</div>
);
}

export default Hero;
