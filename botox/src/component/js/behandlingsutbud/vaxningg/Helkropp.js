import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Helkropp = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Helkroppsvaxning</h1>
          <p className="massage-description">
            Få en fullständig hårfri känsla med vår helkroppsvaxning, vilket ger en mjuk och len hud som varar länge.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Helkroppsvaxning</h3>
            <p className="relax-treatment-description">
              Helkroppsvaxning är en behandling där hela kroppen vaxas för att ta bort oönskat hår och ge dig en slät och mjuk hud. 
              Den här behandlingen är perfekt för dig som vill ha en långvarig hårfri känsla utan att behöva raka dig regelbundet. 
              Vår professionella terapeut ser till att behandlingen utförs med omsorg för att minimera obehag.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 90 min</li>
                <li><strong>Pris:</strong> 1200 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, jämn hud, minskar hårväxt över tid</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha en slät och hårfri hud på hela kroppen</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka helkroppsvaxning
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
            Se till att huden är ren och fri från lotion eller oljor innan din behandling. Låt håret växa ut minst 5 mm för bästa resultat.
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
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helkropp;
