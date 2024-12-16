import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Helaben = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Hela Ben Vaxning</h1>
          <p className="massage-description">
            Upplev känslan av helt släta ben med vår vaxning av hela benen, vilket ger ett långvarigt och silkeslent resultat.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Hela Ben Vaxning</h3>
            <p className="relax-treatment-description">
              Vår hela ben-vaxning tar bort oönskat hår från både lår och underben, vilket ger dig en långvarig känsla av mjuka och släta ben.
              Perfekt för dig som vill ha ett mer hållbart resultat än rakning kan ge. Vår erfarna terapeut ser till att behandlingen
              utförs på ett skonsamt och effektivt sätt.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 500 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, jämn hud, minskar hårväxt över tid</li>
                <li><strong>Rekommenderat för:</strong> De som önskar släta och hårfria ben under en längre tid</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka hela ben vaxning
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
            Se till att huden är ren och torr utan lotion eller oljor innan din behandling. Låt håret växa ut minst 5 mm för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik varma duschar, solbad och träning i 24 timmar efter behandlingen. Återfukta huden för att hålla den mjuk och len.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helaben;
