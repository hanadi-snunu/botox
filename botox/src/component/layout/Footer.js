import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

const Footer = () => {
  
  
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/" className="footer-logo-link">
            Houseofaesthetics
          </Link>
        <div className="footer-links">
          <Link to="/Bokatid">BOKA TID</Link>
          <Link to="/Kontakt">KONTAKT</Link>
        </div>
        
        </div>
        <div className="footer-locations">
          <div className="location">
            <h4>House Of Aesthetics</h4>
            <p>Djäknegatan 4 <br />211 35 Malmö</p>
            <p><a href="tel:0102040998">073-666 74 32</a></p>
            <p><a href="mailto:houseofaesthetics.se@hotmail.com">houseofaesthetics.se@hotmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          {/* Sociala ikoner */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <Link to="/integritetspolicy">Integritetspolicy</Link>
        <p>Copyright © Houseofaesthetics 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
