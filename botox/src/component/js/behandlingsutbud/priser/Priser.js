import React from 'react';
import { Link } from "react-router-dom";
import '../../../css/behandlingsutbud.css';

import HeroImage from "../../../img/pic.jpg";
import ConsultationImage from "../../../img/piccc.jpg";

const Priser = () => {
  return (
    <div>
      {/* Hero Section: Full-width image with title, text, and button */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Våra priser</h1>
            <p className="hero-subtitle">
              Upptäck våra konkurrenskraftiga priser för alla våra behandlingar. Här kan du se alla våra behandlingar och deras priser för att hitta det som passar just dig.
            </p>
            <Link to="/Bokatid" className="hero-button">
              Boka tid
            </Link>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="treatments-section">
        <div className="treatments-button-container">
          <Link to="/injektionsbehandlingar-priser" className="treatments-button">
            Injektionsbehandlingar
          </Link>
          <Link to="/tradlyft-priser" className="treatments-button">
            Trådlyft
          </Link>
          <Link to="/laserbehandlingar-priser" className="treatments-button">
            Laserbehandlingar
          </Link>
          <Link to="/ansiktsbehandlingar-priser" className="treatments-button">
            Ansiktsbehandlingar
          </Link>
          <Link to="/hydra-facial-priser" className="treatments-button">
            Hydra Facial
          </Link>
          <Link to="/massage-priser" className="treatments-button">
            Massage
          </Link>
          <Link to="/vaxning-priser" className="treatments-button">
            Vaxning
          </Link>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria digitala konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor och hjälper dig att boka den tid som passar dig.
            </p>
            <Link to="/Bokatid" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priser;
