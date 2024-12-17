import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Brasiliansk = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Brasiliansk Vaxning</h1>
          <p className="massage-description">
            Brasiliansk vaxning ger en långvarig och slät känsla, idealisk för dem som söker ett noggrant resultat.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Brasiliansk Vaxning</h3>
            <p className="relax-treatment-description">
              Brasiliansk vaxning är en behandling där allt hår från intimområdet avlägsnas eller efterlämnar en liten remsa beroende på önskemål.
              Den här behandlingen är perfekt för dig som vill ha en långvarig hårfri känsla och en slät hud. Vår professionella terapeut ser till att
              behandlingen utförs med omsorg för att minimera obehag och ge ett noggrant resultat.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 15 min</li>
                <li><strong>Pris:</strong> 400 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, reducerad hårväxt, slät hud</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha en noggrant utförd intimvaxning med ett långvarigt resultat</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka brasiliansk vaxning
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
            Undvik tighta kläder, varma bad och fysisk aktivitet de första 24 timmarna efter behandlingen. Återfukta huden regelbundet för att hålla den mjuk.
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

export default Brasiliansk;
