import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Bikini = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Bikinivaxning</h1>
          <p className="massage-description">
            Skapa en ren och slät bikinilinje med vår bikinivaxning för en långvarigt hårfri känsla.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Bikinivaxning</h3>
            <p className="relax-treatment-description">
              Bikinivaxning är en behandling som avlägsnar oönskat hår runt bikinilinjen för en ren och slät hud. Denna behandling är perfekt för dig som vill ha en långvarigt hårfri känsla utan att behöva raka dig regelbundet. Vår erfarna terapeut ser till att vaxningen utförs skonsamt för att minimera obehag.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 250 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, minskad hårväxt, slät hud</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha en hårfri bikinilinje med långvariga resultat</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka bikinivaxning
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
            Se till att håret är minst 5 mm långt för bästa resultat. Undvik att applicera lotion eller olja på området innan behandlingen.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik strama kläder, varma bad och fysisk aktivitet de första 24 timmarna efter behandlingen. Återfukta området regelbundet för att hålla huden mjuk och len.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst och svara på dina frågor.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikini;
