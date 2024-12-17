

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from '../img/logga.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Hanterar mobilmenyn
    const [dropdownOpen, setDropdownOpen] = useState(null); // Hanterar dropdown för desktop
    const [subDropdownOpen, setSubDropdownOpen] = useState(null); // Hanterar sub-dropdown för desktop
    const [subMenu, setSubMenu] = useState(null); // Hanterar vilken submenu som visas
    const [previousMenu, setPreviousMenu] = useState(null); // Håller reda på föregående meny

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSubMenu(null); // Stäng submenyn när huvudmenyn stängs
    };

    const openSubMenu = (menu) => {
        setSubMenu(menu);
        setPreviousMenu(subMenu); // Spara den föregående menyn
    };

    const closeSubMenu = () => {
      if (previousMenu) {
        setSubMenu(previousMenu); // Gå tillbaka till föregående meny
        setPreviousMenu(null);    // Rensa föregående meny efter användning
      } else {
        setSubMenu(null);         // Stäng menyn helt
      }
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
      <Link to="/Behandlingsutbud">BEHANDLINGSUTBUD <FontAwesomeIcon icon={faChevronDown} /></Link>
      {dropdownOpen === "behandlingsutbud" && (
        <div className="full-width-dropdown">
          <ul className="dropdown-grid">
            <li>
              <Link to="/Injektionsbehandlingar">INJEKTIONSBEHANDLINGAR</Link>
            </li>
            <li>
              <Link to="/Trådlyft">TRÅDLYFT</Link>
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
              <Link to="/Laserbehandlingar">LASERBEHANDLINGAR</Link>
            </li>
            <li>
              <Link to="/Ansiktsbehandlingar">ANSIKTSBEHANDLINGAR</Link>
              <ul>
              <li>
                  <Link to="/Dermaplaning">Dermaplaning</Link>
                </li>
                <li>
                  <Link to="/Djuprensande-ansiktsbehandling">Djuprensande Ansiktsbehandling</Link>
                </li>
                <li>
                  <Link to="/Instant-clean">Instant Clean</Link>
                </li>
                <li>
                  <Link to="/Instant-glow">Instant Glow</Link>
                </li>
                <li>
                  <Link to="/Kemisk-peel">Kemisk Peel</Link>
                </li>
                <li>
                  <Link to="/Klassisk-ansiktsbehandling">Klassisk Ansiktsbehandling</Link>
                </li>
                <li>
                  <Link to="/LED-Ljusterapi">LED Ljusterapi</Link>
                </li>
                <li>
                  <Link to="/Lyx-ansiktsbehandling">Lyx Ansiktsbehandling</Link>
                </li>
                <li>
                  <Link to="/Microneedling">Microneedling</Link>
                </li>
                <li>
                  <Link to="/PRXT-33">PRX T-33</Link>
                </li>


              </ul>
            </li>
            <li>
              <Link to="/HydraFacial">HYDRA FACIAL</Link>
              <ul>
              <li>
                  <Link to="/Deluxe-HydraFacial">Hydra Facial | Deluxe</Link>
                </li>
                <li>
                  <Link to="/HydraFacial-Gravida">Hydra Facial | För gravida</Link>
                </li>
                <li>
                  <Link to="/Platinum-HydraFacial">Hydra Facial | Platinum</Link>
                </li>
                <li>
                  <Link to="/Standard-HydraFacial">Hydra Facial | Standard</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Massagee">MASSAGE</Link>
              <ul>
              <li>
                  <Link to="/KlippkortX5">Klippkort x5</Link>
                </li>
                <li>
                  <Link to="/Ansiktsmassage">Ansiktsmassage</Link>
                </li>
                <li>
                  <Link to="/RelaxingTime">Relaxing Time</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Vaxning">VAXNING</Link>
              <ul>
              <li>
                  <Link to="/Armar">Armar</Link>
                </li>
                <li>
                  <Link to="/ArmarMen">Armar män</Link>
                </li>
                <li>
                  <Link to="/Armhala">Armhåla</Link>
                </li>
                <li>
                  <Link to="/Bikini">Bikini</Link>
                </li>
                <li>
                  <Link to="/Brasiliansk">Braziliansk</Link>
                </li>
                <li>
                  <Link to="/Brost+Mage">Bröst + mage</Link>
                </li>
                <li>
                  <Link to="/Halvaben">Halva ben</Link>
                </li>
                <li>
                  <Link to="/Halvaben+bikini">Halva ben + bikini</Link>
                </li>
                <li>
                  <Link to="/Helaben">Hela ben</Link>
                </li>
                <li>
                  <Link to="/Helaben+bikini">Hela ben + bikini</Link>
                </li>
                <li>
                  <Link to="/Helkropp">Helkropp vax</Link>
                </li>
                <li>
                  <Link to="/Overlapp">Överläpp</Link>
                </li>
                <li>
                  <Link to="/Overlapp+haka">Överläpp + haka</Link>
                </li>
                <li>
                  <Link to="/Rygg">Rygg</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </li>
    
    <li
      onMouseEnter={() => handleDropdown("priser")}
      onMouseLeave={() => handleDropdown(null)}
      className="dropdown-container"
    >
       <Link to="/Priser">PRISER <FontAwesomeIcon icon={faChevronDown} /></Link>
      {dropdownOpen === "priser" && (
        <div className="full-width-dropdown">
          <ul className="dropdown-grid">
            <li>
              <Link to="/injektionsbehandlingar-priser">INJEKTIONSBEHANDLINGAR</Link>
            </li>
            <li>
              <Link to="/tradlyft-priser">TRÅDLYFT</Link>
            </li>
            <li>
              <Link to="/laserbehandlingar-priser">LASERBEHANDLINGAR</Link>
            </li>
            <li>
              <Link to="/ansiktsbehandlingar-priser">ANSIKTSBEHANDLINGAR</Link>
              
            </li>
            <li>
              <Link to="/hydra-facial-priser">HYDRA FACIAL</Link>
            </li>
            <li>
              <Link to="/massage-priser">MASSAGE</Link>
            </li>
            <li>
              <Link to="/vaxning-priser">VAXNING</Link>
            </li>
          </ul>
        </div>
      )}
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
  {/* Ny Header med "MENY" */}
  <div className="mobile-menu-header">
    <span className="menu-title">MENY</span>
    <span className="close-icon" onClick={toggleMenu}>&times;</span>
  </div>

  {/* Tillbaka-knappen */}
  {subMenu && (
    <div className="mobile-back">
      <span className="back-icon" onClick={closeSubMenu}><FontAwesomeIcon icon={faChevronLeft} /> Tillbaka</span>
    </div>
  )}

  {subMenu === null ? (
    <ul className="mobile-menu-links">
      <li>
        <div className="submenu-trigger">
          <Link to="/Behandlingsutbud" onClick={toggleMenu}>BEHANDLINGSUTBUD</Link>
          <span className="arrow" onClick={() => openSubMenu("behandlingsutbud")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Priser" onClick={toggleMenu}>PRISER</Link>
          <span className="arrow" onClick={() => openSubMenu("priser")}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </li>
      <li><Link to="/Omoss" onClick={toggleMenu}>OM OSS</Link></li>
      <li><Link to="/Utbildningar" onClick={toggleMenu}>UTBILDNINGAR</Link></li>
      <li><Link to="/Kontakt" onClick={toggleMenu}>KONTAKT</Link></li>
      <li><Link to="/HittaBehandling" onClick={toggleMenu}>HITTA RÄTT BEHANDLING</Link></li>
    </ul>

  ) : subMenu === "behandlingsutbud" ? (
    <ul className="mobile-submenu">
      <li><Link to="/Injektionsbehandlingar" onClick={toggleMenu}>INJEKTIONSBEHANDLINGAR</Link></li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Trådlyft" onClick={toggleMenu}>TRÅDLYFT</Link>
          <span className="arrow" onClick={() => openSubMenu("trådlyft")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li><Link to="/Laserbehandlingar" onClick={toggleMenu}>LASERBEHANDLINGAR</Link></li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Ansiktsbehandlingar" onClick={toggleMenu}>ANSIKTSBEHANDLINGAR</Link>
          <span className="arrow" onClick={() => openSubMenu("ansiktsbehandlingar")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/HydraFacial" onClick={toggleMenu}>HYDRA FACIAL</Link>
          <span className="arrow" onClick={() => openSubMenu("hydrafacial")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Massagee" onClick={toggleMenu}>MASSAGE</Link>
          <span className="arrow" onClick={() => openSubMenu("massage")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Vaxning" onClick={toggleMenu}>VAXNING</Link>
          <span className="arrow" onClick={() => openSubMenu("vaxning")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
    </ul>
  ) : subMenu === "ansiktsbehandlingar" ? (
    <ul className="mobile-submenu">
      <li><Link to="/Dermaplaning" onClick={toggleMenu}>Dermaplaning</Link></li>
      <li><Link to="/Djuprensande-ansiktsbehandling" onClick={toggleMenu}>Djuprensande Ansiktsbehandling</Link></li>
      <li><Link to="/Instant-clean" onClick={toggleMenu}>Instant Clean</Link></li>
      <li><Link to="/Instant-glow" onClick={toggleMenu}>Instant Glow</Link></li>
      <li><Link to="/Kemisk-peel" onClick={toggleMenu}>Kemisk Peel</Link></li>
      <li><Link to="/Klassisk-ansiktsbehandling" onClick={toggleMenu}>Klassisk Ansiktsbehandling</Link></li>
      <li><Link to="/LED-Ljusterapi" onClick={toggleMenu}>LED Ljusterapi</Link></li>
      <li><Link to="/Lyx-ansiktsbehandling" onClick={toggleMenu}>Lyx Ansiktsbehandling</Link></li>
      <li><Link to="/Microneedling" onClick={toggleMenu}>Microneedling</Link></li>
      <li><Link to="/PRXT-33" onClick={toggleMenu}>PRX T-33</Link></li>
    </ul>
  ) : subMenu === "hydrafacial" ? (
    <ul className="mobile-submenu">
      <li><Link to="/Deluxe-HydraFacial" onClick={toggleMenu}>Hydra Facial | Deluxe</Link></li>
      <li><Link to="/HydraFacial-Gravida" onClick={toggleMenu}>Hydra Facial | För gravida</Link></li>
      <li><Link to="/Platinum-HydraFacial" onClick={toggleMenu}>Hydra Facial | Platinum</Link></li>
      <li><Link to="/Standard-HydraFacial" onClick={toggleMenu}>Hydra Facial | Standard</Link></li>
    </ul>
  ) : subMenu === "massage" ? (
    <ul className="mobile-submenu">
      <li><Link to="/KlippkortX5" onClick={toggleMenu}>Klippkort x5</Link></li>
      <li><Link to="/Ansiktsmassage" onClick={toggleMenu}>Ansiktsmassage</Link></li>
      <li><Link to="/RelaxingTime" onClick={toggleMenu}>Relaxing Time</Link></li>
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

  ) : subMenu === "vaxning" ? (
    <ul className="mobile-submenu">
      <li><Link to="/Armar" onClick={toggleMenu}>Armar</Link></li>
      <li><Link to="/ArmarMen" onClick={toggleMenu}>Armar män</Link></li>
      <li><Link to="/Armhala" onClick={toggleMenu}>Armhåla</Link></li>
      <li><Link to="/Bikini" onClick={toggleMenu}>Bikini</Link></li>
      <li><Link to="/Brasiliansk" onClick={toggleMenu}>Brasiliansk</Link></li>
      <li><Link to="/Brost+Mage" onClick={toggleMenu}>Bröst + mage</Link></li>
      <li><Link to="/Halvaben" onClick={toggleMenu}>Halva ben</Link></li>
      <li><Link to="/Halvaben+bikini" onClick={toggleMenu}>Halva ben + bikini</Link></li>
      <li><Link to="/Helaben" onClick={toggleMenu}>Hela ben</Link></li>
      <li><Link to="/Helaben+bikini" onClick={toggleMenu}>Hela ben + bikini</Link></li>
      <li><Link to="/Helkropp" onClick={toggleMenu}>Helkropp vax</Link></li>
      <li><Link to="/Overlapp" onClick={toggleMenu}>Överläpp</Link></li>
      <li><Link to="/Overlapp+haka" onClick={toggleMenu}>Överläpp + haka</Link></li>
      <li><Link to="/Rygg" onClick={toggleMenu}>Rygg</Link></li>
    </ul>

) : subMenu === "priser" ? (
  <ul className="mobile-submenu">
    <li><Link to="/injektionsbehandlingar-priser" onClick={toggleMenu}>INJEKTIONSBEHANDLINGAR</Link></li>
    <li><Link to="/tradlyft-priser" onClick={toggleMenu}>TRÅDLYFT</Link></li>
    <li><Link to="/laserbehandlingar-priser" onClick={toggleMenu}>LASERBEHANDLINGAR</Link></li>
    <li><Link to="/ansiktsbehandlingar-priser" onClick={toggleMenu}>ANSIKTSBEHANDLINGAR</Link></li>
    <li><Link to="/hydra-facial-priser" onClick={toggleMenu}>HYDRA FACIAL</Link></li>
    <li><Link to="/massage-priser" onClick={toggleMenu}>MASSAGE</Link></li>
    <li><Link to="/vaxning-priser" onClick={toggleMenu}>VAXNING</Link></li>
  </ul>
  ) : null}
  
</div>

        </header>
  );
};

export default Navbar;





