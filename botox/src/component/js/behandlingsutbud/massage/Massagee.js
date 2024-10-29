import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import massage2 from '../../../img/massage2.jpg';
import massage3 from '../../../img/massage3.jpg';
import massage4 from '../../../img/massage4.jpg';
import ConsultationImage from '../../../img/piccc.jpg';
import '../../../css/Massage.css';

import { Link } from 'react-router-dom';

const Massage = () => {
  return (
    <div>
    <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
      <div className="massage-overlay">
        <h1 className="massage-title">Massage</h1>
        <p className="massage-description">
          Massage är en avkopplande och terapeutisk behandling som syftar till att minska spänningar i musklerna, öka blodcirkulationen och förbättra ditt välbefinnande. En perfekt paus för kropp och själ.
        </p>
        
      </div>
    </header>

    {/* Andra sektionen med rubrik och text */}
    <section className="massage-info-section">
    <h2 className="info-title">Massage</h2>
    <p className="info-text">
      Massage är en metod för att lindra stress, förbättra muskelåterhämtning och främja avslappning. Genom olika tekniker kan massage hjälpa till att lindra spänningar, förbättra cirkulationen och främja ett starkare välbefinnande. Vårt team av erfarna massageterapeuter ser till att du får en anpassad upplevelse baserad på dina behov.
    </p>
  </section>

  <div className="massage-treatments-section">
      
      <div className="massage-treatments-grid">
        
        {/* RelaxTime */}
        <div className="massage-treatment-card">
          <img src={massage2} alt="RelaxTime" className="massage-treatment-image" />
          <div className="massage-treatment-content">
            <h3 className="massage-treatment-title">RelaxTime</h3>
            <p className="massage-treatment-description">
              En avkopplande massage för att minska stress och öka välbefinnandet. Perfekt för en lugn stund.
            </p>
            <Link to="/RelaxingTime" className="massage-treatment-link">Läs mer om RelaxTime</Link>
          </div>
        </div>

        {/* Ansiktsmassage */}
        <div className="massage-treatment-card">
          <img src={massage3} alt="Ansiktsmassage" className="massage-treatment-image" />
          <div className="massage-treatment-content">
            <h3 className="massage-treatment-title">Ansiktsmassage</h3>
            <p className="massage-treatment-description">
              En lyxig ansiktsmassage som förbättrar blodcirkulationen och ger en fräsch känsla.
            </p>
            <Link to="/Ansiktsmassage" className="massage-treatment-link">Läs mer om Ansiktsmassage</Link>
          </div>
        </div>

        {/* Klippkort X5 */}
        <div className="massage-treatment-card">
          <img src={massage4} alt="KlippkortX5" className="massage-treatment-image" />
          <div className="massage-treatment-content">
            <h3 className="massage-treatment-title">Klippkort X5</h3>
            <p className="massage-treatment-description">
              För dig som vill ha regelbundna massagebehandlingar. Klippkortet ger dig fem behandlingar till ett rabatterat pris.
            </p>
            <Link to="/KlippkortX5" className="massage-treatment-link">Läs mer om Klippkort X5</Link>
          </div>
        </div>
      </div>
      <div className="separator-line">
        <span className="separator-dot">•</span>
      </div>

      </div>
      {/* Consultation Section */}
<div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria digitala konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor och hjälper dig att boka den tid som passar dig.
            </p>
            <Link to="/Bokatid" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>
</div>
  );
};

export default Massage;
