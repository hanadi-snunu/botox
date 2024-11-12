import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Halvaben = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Halva Ben Vaxning</h1>
          <p className="massage-description">
            Perfekt för en silkeslen känsla på underbenen eller låren med vår halva ben-vaxning.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Halva Ben Vaxning</h3>
            <p className="relax-treatment-description">
              Halva ben-vaxning är en effektiv metod för att avlägsna oönskat hår från antingen underbenen eller låren. Behandlingen ger en slät och mjuk hud som varar länge,
              så att du kan njuta av hårfria ben utan att behöva raka dig ofta. Våra erfarna terapeuter använder noggranna metoder för att minimera obehag och maximera resultatet.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 400 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, mjuk och jämn hud, reducerad hårväxt över tid</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha ett långvarigt hårfritt resultat på halva benen</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka halva ben vaxning
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
            Se till att huden är ren och fri från lotion eller oljor innan din behandling, och låt håret växa ut minst 5 mm.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik varma duschar, solbad och fysisk träning i 24 timmar efter behandlingen för att hålla huden lugn.
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

export default Halvaben;
