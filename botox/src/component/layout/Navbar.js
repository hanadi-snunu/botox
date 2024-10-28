

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Hanterar mobilmenyn
    const [dropdownOpen, setDropdownOpen] = useState(null); // Hanterar dropdown för desktop
    const [subMenu, setSubMenu] = useState(null); // Hanterar vilken submenu som visas
  
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSubMenu(null); // Stäng submenyn när huvudmenyn stängs
    };

    const openSubMenu = (menu) => {
        setSubMenu(menu);
    };

    const closeSubMenu = () => {
        setSubMenu(null);
    };

    const handleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

  return (
    <header className="header-container">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/">
            <h1>Houseofaesthetics</h1>
          </Link>
        </div>
        <div className="contact-info">
          <span>tel: 073 - 66 67 432</span>
          <Link to="/Bokatid">
  <button className="book-btn">Boka tid</button>
</Link>
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
      {/* Desktop Navigation */}
      <nav className={`navbar-bottom ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li onMouseEnter={() => handleDropdown("behandlingsutbud")} onMouseLeave={() => handleDropdown(null)}>
            <Link to="/Behandlingsutbud">BEHANDLINGSUTBUD</Link>
            {dropdownOpen === "behandlingsutbud" && (
              <ul className="dropdown">
                <li><Link to="/Injektionsbehandlingar">Injektionsbehandlingar</Link></li>
                <li><Link to="/Ansiktsbehandlingar">Ansiktsbehandlingar</Link></li>
                <li><Link to="/Laserbehandlingar">Laserbehandlingar</Link></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => handleDropdown("priser")} onMouseLeave={() => handleDropdown(null)}>
            <Link to="/Priser">PRISER</Link>
            {dropdownOpen === "priser" && (
              <ul className="dropdown">
                <li><Link to="/PrisInjektionsbehandlingar">Injektionsbehandlingar</Link></li>
                <li><Link to="/PrisAnsiktsbehandlingar">Ansiktsbehandlingar</Link></li>
                <li><Link to="/PrisLaserbehandlingar">Laserbehandlingar</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/Omoss">OM OSS</Link></li>
          <li><Link to="/Utbildningar">UTBILDNINGAR</Link></li>
          <li><Link to="/Kontakt">KONTAKT</Link></li>
          <li><Link to="/HittaBehandling">HITTA RÄTT BEHANDLING</Link></li>
        </ul>
      </nav>

       {/* Mobil Navigation */}
       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="mobile-menu-header">
                    {subMenu ? (
                        <span className="back-icon" onClick={closeSubMenu}>← Tillbaka</span>
                    ) : (
                        <span className="close-icon" onClick={toggleMenu}>&times;</span>
                    )}
                    <span className="menu-title">MENY</span>
                </div>
                {subMenu === null ? (
                    <ul className="mobile-menu-links">
                        <li onClick={() => openSubMenu("behandlingsutbud")}>
                            BEHANDLINGSUTBUD <span className="arrow">›</span>
                        </li>
                        <li onClick={() => openSubMenu("priser")}>
                            PRISER <span className="arrow">›</span>
                        </li>
                        <li><Link to="/Omoss" onClick={toggleMenu}>OM OSS</Link></li>
                        <li><Link to="/Utbildningar" onClick={toggleMenu}>UTBILDNINGAR</Link></li>
                        <li><Link to="/Kontakt" onClick={toggleMenu}>KONTAKT</Link></li>
                        <li><Link to="/HittaBehandling" onClick={toggleMenu}>HITTA RÄTT BEHANDLING</Link></li>
                    </ul>
                ) : subMenu === "behandlingsutbud" ? (
                    <ul className="mobile-submenu">
                        <li><Link to="/Injektionsbehandlingar" onClick={toggleMenu}>Injektionsbehandlingar</Link></li>
                        <li><Link to="/Ansiktsbehandlingar" onClick={toggleMenu}>Ansiktsbehandlingar</Link></li>
                        <li><Link to="/Laserbehandlingar" onClick={toggleMenu}>Laserbehandlingar</Link></li>
                    </ul>
                ) : subMenu === "priser" ? (
                    <ul className="mobile-submenu">
                        <li><Link to="/PrisInjektionsbehandlingar" onClick={toggleMenu}>Injektionsbehandlingar</Link></li>
                        <li><Link to="/PrisAnsiktsbehandlingar" onClick={toggleMenu}>Ansiktsbehandlingar</Link></li>
                        <li><Link to="/PrisLaserbehandlingar" onClick={toggleMenu}>Laserbehandlingar</Link></li>
                    </ul>
                ) : null}
            </div>
        </header>
  );
};

export default Navbar;

