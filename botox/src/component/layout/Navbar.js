

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from '../img/logga.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Hanterar mobilmenyn
    const [dropdownOpen, setDropdownOpen] = useState(null); // Hanterar dropdown för desktop
    const [subDropdownOpen, setSubDropdownOpen] = useState(null); // Hanterar sub-dropdown för desktop
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
        setSubDropdownOpen(null); // Reset sub-dropdown
    };
    const handleSubDropdown = (submenu) => {
      setSubDropdownOpen(subDropdownOpen === submenu ? null : submenu);
  };

  return (
    <header className="header-container">
      <div className="navbar-top">
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="House of Aesthetics Logo" className="logo-image" />
        </Link>
        </div>
        <div className="contact-info">
          <span>tel: 040 - 51 11 01</span>
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
{/* Desktop Navigation */}
<nav className={`navbar-bottom ${menuOpen ? "active" : ""}`}>
  <ul className="nav-links">
    <li
      onMouseEnter={() => handleDropdown("behandlingsutbud")}
      onMouseLeave={() => handleDropdown(null)}
      className="dropdown-container"
    >
      <Link to="/Behandlingsutbud">BEHANDLINGSUTBUD</Link>
      {dropdownOpen === "behandlingsutbud" && (
        <div className="full-width-dropdown">
          <ul className="dropdown-grid">
            <li>
              <Link to="/Injektionsbehandlingar">Injektionsbehandlingar</Link>
            </li>
            <li>
              <Link to="/Trådlyft">Trådlyft</Link>
              <ul>
                <li>
                  <Link to="/Tradlyft-Midface">Trådlyft | Midface</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Kaklinjen">Trådlyft | Käklinjen</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Kindben">Trådlyft | Kindben</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Halslyft">Trådlyft | Halslyft</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Dubbelhaka">Trådlyft | Dubbelhaka</Link>
                </li>
                <li>
                  <Link to="/Mono-Kinder">Mono | Kinder</Link>
                </li>
                <li>
                  <Link to="/Mono-Marionettlinjer">Mono | Marionettlinjer</Link>
                </li>
                <li>
                  <Link to="/Mono-Nasolabiala">Mono | Nasolabiala</Link>
                </li>
                <li>
                  <Link to="/Mono-Ogon">Mono | Ögon</Link>
                </li>
                <li>
                  <Link to="/Mono-Suramungipor">Mono | Suramungipor</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Laserbehandlingar">Laserbehandlingar</Link>
            </li>
            <li>
              <Link to="/Ansiktsbehandlingar">Ansiktsbehandlingar</Link>
            </li>
            <li>
              <Link to="/HydraFacial">Hydra Facial</Link>
            </li>
            <li>
              <Link to="/Massagee">Massage</Link>
            </li>
            <li>
              <Link to="/Vaxning">Vaxning</Link>
            </li>
          </ul>
        </div>
      )}
    </li>
    <li>
      <Link to="/Priser">PRISER</Link>
    </li>
    <li>
      <Link to="/Omoss">OM OSS</Link>
    </li>
    <li>
      <Link to="/Utbildningar">UTBILDNINGAR</Link>
    </li>
    <li>
      <Link to="/Kontakt">KONTAKT</Link>
    </li>
    <li>
      <Link to="/HittaBehandling">HITTA RÄTT BEHANDLING</Link>
    </li>
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
                        <li onClick={() => openSubMenu("trådlyft")}>
                            Trådlyft <span className="arrow">›</span>
                        </li>
                        <li><Link to="/Laserbehandlingar" onClick={toggleMenu}>Laserbehandlingar</Link></li>
                        <li><Link to="/Ansiktsbehandlingar" onClick={toggleMenu}>Ansiktsbehandlingar</Link></li>
                        <li><Link to="/HydraFacial" onClick={toggleMenu}>Hydra Facial</Link></li>
                        <li><Link to="/Massagee" onClick={toggleMenu}>Massage</Link></li>
                        <li><Link to="/Vaxning" onClick={toggleMenu}>Vaxning</Link></li>
                    </ul>

) : subMenu === "trådlyft" ? (
  <ul className="mobile-submenu">
      <li><Link to="/Tradlyft-Midface" onClick={toggleMenu}>Trådlyft | Midface</Link></li>
      <li><Link to="/Tradlyft-Kaklinjen" onClick={toggleMenu}>Trådlyft | Käklinjen</Link></li>
      <li><Link to="/Tradlyft-Kindben" onClick={toggleMenu}>Trådlyft | Kindben</Link></li>
      <li><Link to="/Tradlyft-Halslyft" onClick={toggleMenu}>Trådlyft | Halslyft</Link></li>
      <li><Link to="/Tradlyft-Dubbelhaka" onClick={toggleMenu}>Trådlyft | Dubbelhaka</Link></li>


      <li><Link to="/Mono-Kinder" onClick={toggleMenu}>Mono | Kinder</Link></li>
      <li><Link to="/Mono-Marionettlinjer" onClick={toggleMenu}>Mono | Marionettlinjer</Link></li>
      <li><Link to="/Mono-Nasolabiala" onClick={toggleMenu}>Mono | Nasolabiala</Link></li>
      <li><Link to="/Mono-Ogon" onClick={toggleMenu}>Mono | Ögon</Link></li>
      <li><Link to="/Mono-Suramungipor" onClick={toggleMenu}>Mono | Suramungipor</Link></li>




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

