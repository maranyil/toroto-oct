import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/png/logo.png';
import external from '../../assets/png/external-link.png';
import hamburger from '../../assets/png/hamburguer_menu_icon.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div id="top" className="navbar">
      <Link
        to="/"
        onClick={() => (window.location.href = '/#')}
        className="logo"
      >
        <img src={logo} alt="main Toroto logo" />
      </Link>
      <nav>
        {(toggleMenu || screenWidth > 376) && (
          <ul className="nav-options">
            <li className="nav-item">
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li className="nav-item">
              <a href="https://www.toroto.mx/es">Sobre Toroto</a>
            </li>
            <li className="nav-item">
              <a href="https://www.toroto.mx/es/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a href="https://www.toroto.mx/es">
                <img src={external} alt="external" />
                Meta registro
              </a>
            </li>
            <li className="nav-item">
              <a href="https://toroto.mx/es/the-team">Contacto</a>
            </li>
          </ul>
        )}

        <button className="nabtn" onClick={toggleNav}>
          <img src={hamburger} alt="hamburguesa" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
