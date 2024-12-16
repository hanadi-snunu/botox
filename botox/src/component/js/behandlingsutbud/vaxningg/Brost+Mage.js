import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const BrostMage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Bröst och Mage Vaxning</h1>
          <p className="massage-description">
            Få en slät och hårfri känsla på bröst och mage med vår skonsamma vaxning.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Bröst och Mage Vaxning</h3>
            <p className="relax-treatment-description">
              Bröst och mage vaxning är en behandling för att avlägsna oönskat hår på dessa områden, vilket ger en len och hårfri hud. 
              Denna behandling är perfekt för dig som söker ett långvarigt resultat utan att behöva raka dig regelbundet. Vår erfarna terapeut utför behandlingen med precision för att minimera obehag.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 400 kr</li>
                <li><strong>Fördelar:</strong> Slät hud, långvarigt resultat, minskar hårväxt över tid</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha en slät och hårfri hud på bröst och mage</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka Bröst och Mage Vaxning
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
            Kom med ren hud och undvik att använda lotion eller oljor på behandlingsområdet före vaxning. Håret bör vara minst 5 mm långt.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik att utsätta huden för sol eller svettiga aktiviteter i minst 24 timmar efter behandlingen för bästa resultat.
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

export default BrostMage;
