import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <header className="header">
    <div className="header-container">
        <img src={logo} alt="Logo CENPS" className="header-logo" />

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#inicio">Inicio</a>
        <a href="Quienes Somos">Quienes somos?</a>
        <a href="#cursos">Cursos</a>
        <a href="#capacitaciones">Capacitaciones</a>
        <a href="#contacto">Contacto</a>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
        </button>
    </div>
    </header>
);
}

export default Header;
