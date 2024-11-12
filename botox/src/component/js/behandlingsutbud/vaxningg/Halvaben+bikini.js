import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const HalvabenBikini = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Halva Ben + Bikini Vaxning</h1>
          <p className="massage-description">
            Kombinera vaxning av halva ben och bikinilinje för ett fulländat resultat och len hud som varar.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Halva Ben + Bikini Vaxning</h3>
            <p className="relax-treatment-description">
              Vår kombinerade halva ben- och bikinivaxning är perfekt för dig som vill ha både benen och bikinilinjen hårfria och släta.
              Behandlingen ger en långvarig hårfri känsla och minskar behovet av att raka sig. Våra terapeuter använder skonsamma metoder
              för att ge dig ett bekvämt och effektivt resultat.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 45 min</li>
                <li><strong>Pris:</strong> 600 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, mjuk hud, bekvämt och effektivt</li>
                <li><strong>Rekommenderat för:</strong> De som önskar en kombinerad behandling för ben och bikinilinje</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka halva ben + bikini vaxning
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
            Se till att huden är ren och torr utan lotion eller oljor, och låt håret växa ut minst 5 mm för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik värme, såsom varma duschar och träning, i 24 timmar efter behandlingen. Återfukta huden för att hålla den mjuk.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att välja rätt behandling för dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalvabenBikini;
