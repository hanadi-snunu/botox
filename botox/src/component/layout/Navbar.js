import React from "react";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return(
        <header className="header-container">
      <div className="navbar-top">
        <div className="logo">
          <h1>House</h1> {/* Tillfällig logga */}
        </div>
        <div className="contact-info">
          <span>tel: 010 - 20 40 998</span>
          <button className="book-btn">Boka tid</button>
        </div>
      </div>
      <nav className="navbar-bottom">
        <ul className="nav-links">
          <li><Link to="/behandlingar">Behandlingsutbud</Link></li>
          <li><Link to="/priser">Priser</Link></li>
          <li><Link to="/om-oss">Om</Link></li>
          <li><Link to="/arskortet">Årskortet</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
          <li><Link to="/hitta-behandling">Hitta rätt behandling</Link></li>
        </ul>
      </nav>
    </header>
    );
}

export default Navbar;