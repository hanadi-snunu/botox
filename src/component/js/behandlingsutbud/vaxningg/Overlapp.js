import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Overlapp = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Överläpp Vaxning</h1>
          <p className="massage-description">
            Effektiv och skonsam vaxning av överläppen för att ge en slät och hårfri känsla.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Överläpp Vaxning</h3>
            <p className="relax-treatment-description">
              Vår överläppsvaxning är utformad för att vara både snabb och skonsam, och lämnar huden slät och hårfri. Perfekt för dig som vill ha ett
              rent och fräscht utseende utan daglig rakning. Behandlingen utförs av erfarna terapeuter för att minimera obehag och ge bästa resultat.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 15 min</li>
                <li><strong>Pris:</strong> 50 kr</li>
                <li><strong>Fördelar:</strong> Slät hud, snabb och effektiv behandling</li>
                <li><strong>Rekommenderat för:</strong> De som vill ha en hårfri och mjuk överläpp</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka överläpp vaxning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before and After Treatment Section */}
      <section className="relax-session-info">
        <div className="session-block">
          <h2 className="session-title">Före behandlingen</h2>
          <p className="session-text">
            Se till att huden är ren och torr innan behandlingen. Undvik att applicera produkter på området samma dag.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik smink och starka hudprodukter på området i minst 24 timmar för att låta huden återhämta sig.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att välja den bästa behandlingen för dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlapp;
