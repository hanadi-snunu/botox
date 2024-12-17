import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Armhala = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Armhålevaxning</h1>
          <p className="massage-description">
            Effektiv vaxning av armhålorna för en långvarigt mjuk och hårfri hud.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Armhålevaxning</h3>
            <p className="relax-treatment-description">
              Armhålevaxning är en snabb och effektiv behandling för att ta bort hår i armhålorna, vilket ger dig en slät och ren känsla. Perfekt för dig som vill undvika irritation från rakning och njuta av en långvarigt hårfri hud. Vår terapeut använder skonsamma tekniker för att minimera obehag.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 15 min</li>
                <li><strong>Pris:</strong> 250 kr</li>
                <li><strong>Fördelar:</strong> Reducerar hårväxt, mjuk och len hud, mindre irritation</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha en hårfri och ren känsla i armhålorna</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka armhålevaxning
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
            Se till att huden är ren och fri från deodorant eller lotion innan din behandling för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik att använda deodorant eller att träna under de första 24 timmarna efter behandlingen. Håll området återfuktat för att minska risken för irritation.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att välja rätt behandling och svara på dina frågor.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Armhala;
