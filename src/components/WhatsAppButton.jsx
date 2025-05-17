import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
return (
    <a
    href="https://wa.me/3022179565?text=Hola%2C%20estoy%20interesado%20en%20los%20cursos%20del%20CENPS%20podrías%20darme%20más%20información%3F"
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chatea por WhatsApp"
    >
    <img
        src={require('../assets/WhatsApp_ico.png')}
        alt="WhatsApp"
        className="whatsapp-icon"
    />
    </a>
);
}

export default WhatsAppButton;
