import React from 'react';
import { Link } from "react-router-dom";
import '../../css/behandlingsutbud.css';

import HeroImage from "../../img/pic.jpg";
import HealthImage from "../../img/picc.png";
import ConsultationImage from "../../img/piccc.jpg";

const Behandlingsutbud = () => {
  return (
    <div>
      {/* Hero Section: Full-width image with title, text, and button */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Vårt behandlingsutbud</h1>
            <p className="hero-subtitle">
              Vi har ett holistiskt skönhetsperspektiv med balans och harmoni som mål. Vårt behandlingsutbud vilar på två fundament, volymbehandlingar och hudbehandlingar.
            </p>
            <Link to="/Bokatid" className="hero-button">
              Boka tid
            </Link>
          </div>
        </div>
      </div>

      {/* Health Section */}
      <div className="health-section">
        <div className="health-image-container">
          <img src={HealthImage} alt="Behandlingar" className="health-image" />
        </div>
        <div className="health-text-container">
          <h2 className="health-title">Din hälsa och ditt välmående</h2>
          <p className="health-description">
            Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig.
            Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig.
            Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig.
          </p>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="treatments-section">
        <div className="treatments-button-container">
          <Link to="/Injektionsbehandlingar" className="treatments-button">
            Injektionsbehandlingar
          </Link>
          <Link to="/Laserbehandlingar" className="treatments-button">
            Laserbehandlingar
          </Link>
          <Link to="/Ansiktsbehandlingar" className="treatments-button">
            Ansiktsbehandlingar
          </Link>
          <Link to="/Utbildningar" className="treatments-button">
            Utbildningar
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

export default Behandlingsutbud;
