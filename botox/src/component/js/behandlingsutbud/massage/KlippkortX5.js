import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const KlippkortX5 = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Klippkort X5</h1>
          <p className="massage-description">
            Klippkort X5 är ett flexibelt alternativ för dig som vill få regelbundna behandlingar till ett rabatterat pris. Använd klippkortet när det passar dig!
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Klippkort X5</h3>
            <p className="relax-treatment-description">
              Med vårt Klippkort X5 får du fem behandlingar för ett rabatterat pris. Perfekt för dig som vill boka in kontinuerliga avkopplande massagebehandlingar.
              Använd dessa behandlingar för att regelbundet minska stress och främja välbefinnande.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Antal behandlingar:</strong> 5 behandlingar</li>
                <li><strong>Pris:</strong> 2700 kr (spara 300 kr)</li>
                <li><strong>Fördelar:</strong> Flexibilitet, rabatterat pris, regelbunden avkoppling</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha kontinuerlig stresshantering och välmående</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
    <Link to="/Bokatid" className="relax-treatment-button">
        Boka klippkort
    </Link>
</div>


            </div>
          </div>
        </div>
      </div>

      <section className="relax-session-info">
        <div className="session-block">
          <h2 className="session-title">Före behandlingen</h2>
          <p className="session-text">
            Förbered dig genom att ta det lugnt och dricka mycket vatten före din massage.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Efter behandlingen, ge kroppen tid att vila och återhämta sig.
          </p>
        </div>
      </section>

      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att välja rätt behandling.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KlippkortX5;
