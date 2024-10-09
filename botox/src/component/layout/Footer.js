import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          {/* Länk till startsidan */}
          <Link to="/" className="footer-logo-link">
            Houseofaesthetics
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/boka-tid">BOKA TID</Link>
          <Link to="/kontakt">KONTAKT</Link>
        </div>
        <div className="footer-locations">
          <div className="location">
            <h4>Svenska Hudkliniker Stockholm</h4>
            <p>Humlegårdsgatan 13<br />114 46 Stockholm</p>
            <p><a href="tel:0102040998">010 - 20 40 998</a></p>
            <p><a href="mailto:info@svenskahudkliniker.se">info@svenskahudkliniker.se</a></p>
          </div>
          <div className="location">
            <h4>Svenska Hudkliniker Karlstad</h4>
            <p>Järnvägsgatan 10<br />652 25 Karlstad</p>
            <p><a href="tel:0102040998">010 - 20 40 998</a></p>
            <p><a href="mailto:info@svenskahudkliniker.se">info@svenskahudkliniker.se</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          {/* Sociala ikoner */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <Link to="/integritetspolicy">Integritetspolicy</Link>
        <p>Copyright © Houseofaesthetics 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
