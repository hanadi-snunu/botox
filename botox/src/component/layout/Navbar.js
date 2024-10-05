/*import React from "react";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return(
        <header className="header-container">
      <div className="navbar-top">
        <div className="logo">
        <Link to="/">
            <h1>House</h1>
          </Link>
        </div>
        <div className="contact-info">
          <span>tel: 070 - 20 40 998</span>
          <button className="book-btn">Boka tid</button>
        </div>
      </div>
      <nav className="navbar-bottom">
        <ul className="nav-links">
          <li><Link to="/Behandlingsutbud">BEHANDLINGSUTBUD</Link></li>
          <li><Link to="/Priser">PRISER</Link></li>
          <li><Link to="/Omoss">OM OSS</Link></li>
          <li><Link to="/Utbildningar">UTBILDNINGAR</Link></li>
          <li><Link to="/Kontakt">KONTAKT</Link></li>
          <li><Link to="/HittaBehandling">HITTA RÄTT BEHANDLING</Link></li>
        </ul>
      </nav>
    </header>
    );
}

export default Navbar;*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State för att hantera menyn

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/">
            <h1>House</h1>
          </Link>
        </div>
        <div className="contact-info">
          <span>tel: 070 - 20 40 998</span>
          <button className="book-btn">Boka tid</button>
        </div>
        {/* Hamburgermeny för mobila enheter */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="close-icon">&times;</span> // Close (×) ikon
          ) : (
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>
      <nav className={`navbar-bottom ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/Behandlingsutbud">BEHANDLINGSUTBUD</Link></li>
          <li><Link to="/Priser">PRISER</Link></li>
          <li><Link to="/Omoss">OM OSS</Link></li>
          <li><Link to="/Utbildningar">UTBILDNINGAR</Link></li>
          <li><Link to="/Kontakt">KONTAKT</Link></li>
          <li><Link to="/HittaBehandling">HITTA RÄTT BEHANDLING</Link></li>
        </ul>
      </nav>
      {/* Sidomeny för mobila enheter */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="close-icon" onClick={toggleMenu}>&times;</span>
          <span className="menu-title">MENY</span>
        </div>
        <ul className="mobile-menu-links">
          <li><Link to="/Behandlingsutbud" onClick={toggleMenu}>BEHANDLINGSUTBUD</Link></li>
          <li><Link to="/Priser" onClick={toggleMenu}>PRISER</Link></li>
          <li><Link to="/Omoss" onClick={toggleMenu}>OM OSS</Link></li>
          <li><Link to="/Utbildningar" onClick={toggleMenu}>UTBILDNINGAR</Link></li>
          <li><Link to="/Kontakt" onClick={toggleMenu}>KONTAKT</Link></li>
          <li><Link to="/HittaBehandling" onClick={toggleMenu}>HITTA RÄTT BEHANDLING</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
