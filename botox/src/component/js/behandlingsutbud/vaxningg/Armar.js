import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Armar = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Armvaxning</h1>
          <p className="massage-description">
            Armvaxning är ett effektivt sätt att få silkeslena och hårfria armar som varar länge.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Armvaxning</h3>
            <p className="relax-treatment-description">
              Armvaxning är perfekt för dig som vill ha mjuka och hårfria armar utan att behöva raka dem regelbundet. 
              Vår behandling avlägsnar hårstrån från rötterna, vilket resulterar i en långvarigt slät hud och kan hjälpa till att minska hårväxten över tid.
              Behandlingen är snabb och utförs med skonsamma produkter för bästa resultat.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 300 kr</li>
                <li><strong>Fördelar:</strong> Silkeslen hud, minskad hårväxt, långvarigt resultat</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha hårfria och mjuka armar</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka armvaxning
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
            Kom med rena armar fria från lotion eller oljor. Låt håret växa ut till minst 5 mm för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik solbad och varma duschar i 24 timmar efter behandlingen. Återfukta armarna för att hålla huden mjuk.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Armar;
