import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <section id="contacto" className="contacto-modern">
            <div className="container">
                <div className="card-contacto animate">
                    <h2>¡Hablemos!</h2>
                    <p>Estamos aquí para responder tus dudas y ayudarte a salvar vidas.</p>

                    <div className="info-grid">
                        <div className="info-box">
                            <h3>📞 Teléfono</h3>
                            <p><a href="tel:+573022179565">+57 302 217 9565</a></p>
                            <h3>📧 Correo</h3>
                            <p><a href="mailto:info@cenps.com">info@cenps.com</a></p>
                        </div>

                        <div className="redes-box">
                            <h3>🌐 Redes Sociales</h3>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/cenpssantamarta?igsh=MWxjdDQzYnEzMzVvMA%3D%3D" target="_blank" rel="noreferrer" title="Instagram">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" />
                                </a>
                                <a href="https://facebook.com/cenps" target="_blank" rel="noreferrer" title="Facebook">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
                                </a>
                                <a href="https://tiktok.com/@cenps" target="_blank" rel="noreferrer" title="TikTok">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg" alt="TikTok" />
                                </a>
                            </div>

                            <a
                                href="https://wa.me/3022179565?text=Hola%2C%20estoy%20interesado%20en%20los%20cursos%20del%20CENPS%20podrías%20darme%20más%20información%3F"
                                className="whatsapp-pulse"
                                target="_blank"
                                rel="noreferrer"
                            >
                                💬 Escríbenos por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;