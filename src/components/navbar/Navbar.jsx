import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/png/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" onClick={() => window.location.href="/"} className="logo">
                <img src={logo} alt="main Toroto logo"/>
            </Link>
            <ul className="nav-options">
                <li className="nav-item"><Link to="/proyectos">Proyectos</Link></li>
                <li className="nav-item"><a href="https://www.toroto.mx/es">Sobre Toroto</a></li>
                <li className="nav-item"><a href="https://www.toroto.mx/es/blog">Blog</a></li>
                <li className="nav-item"><a>Meta registro</a></li>
                <li className="nav-item"><a>Contacto</a></li>    
            </ul>
        </div>
    )
}

export default Navbar
