import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Rygg = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Ryggvaxning</h1>
          <p className="massage-description">
            Upplev en slät och hårfri rygg med vår professionella ryggvaxning, perfekt för långvarig hårborttagning.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Ryggvaxning</h3>
            <p className="relax-treatment-description">
              Ryggvaxning är en behandling som tar bort oönskat hår från hela ryggen för ett rent och jämnt utseende.
              Perfekt för dem som vill undvika att raka ryggen regelbundet och få en långvarig hårfri känsla.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 400 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, slät hud, minskar hårväxt över tid</li>
                <li><strong>Rekommenderat för:</strong> Personer som vill ha en hårfri och slät rygg</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka ryggvaxning
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
            Se till att huden är ren och fri från lotion eller oljor innan behandlingen. Låt håret växa ut till minst 5 mm för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik träning, sol, och varma duschar i 24 timmar efter behandlingen. Återfukta huden för att hålla den mjuk och len.
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

export default Rygg;
