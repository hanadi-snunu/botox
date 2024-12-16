import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const HelabenBikini = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Hela Ben + Bikini Vaxning</h1>
          <p className="massage-description">
            En komplett behandling för släta ben och en prydlig bikinilinje, perfekt för en långvarigt hårfri känsla.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Hela Ben + Bikini Vaxning</h3>
            <p className="relax-treatment-description">
              Denna behandling kombinerar vaxning av hela benen och bikinilinjen, vilket ger dig en slät och silkeslen hud som varar länge. 
              Idealisk för dig som vill ha ett mer hållbart resultat än rakning kan erbjuda, utförd av en erfaren terapeut som säkerställer en skonsam och effektiv behandling.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 60 min</li>
                <li><strong>Pris:</strong> 550 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, slät hud, minskar hårväxt över tid</li>
                <li><strong>Rekommenderat för:</strong> De som önskar släta ben och en välvårdad bikinilinje utan dagligt underhåll</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka hela ben + bikini vaxning
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
            Se till att huden är ren och fri från lotion eller oljor. Låt håret växa ut minst 5 mm för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik varma duschar, solbad och träning i 24 timmar efter behandlingen. Återfukta huden regelbundet för att hålla den mjuk och len.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att välja den behandling som bäst passar dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelabenBikini;
