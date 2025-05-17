import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

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
        <Link to="/">Inicio</Link>
        <Link to="/quienes-somos">¿Quiénes somos?</Link>
        <Link to="/cursos">Cursos</Link>
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
