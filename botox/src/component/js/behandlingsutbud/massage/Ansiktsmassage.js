import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import massage3 from '../../../img/massage3.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';


const AnsiktsMassage = () => {
  return (
    <div>
    <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
      <div className="massage-overlay">
        <h1 className="massage-title">Ansikts Massage</h1>
        <p className="massage-description">
        Ansikts Massage...... .
        </p>
        
      </div>
    </header>
    <div>

    <div className="relax-treatment-card">
<img src={massage3} alt="Behandling" className="relax-treatment-image" />
<div className="relax-treatment-content">
    <h3 className="relax-treatment-title">Ansiktsmassage</h3>
    <p className="relax-treatment-description">
    Unna dig själv en lyxig stund med en av våra mest omtyckta behandlingar! En ansiktsmassage främjar cirkulationen och ger en härlig känsla av avkoppling. Vår skickliga hudterapeut kommer dessutom att förgylla din upplevelse med en avslappnande massage för halsen och dekolletaget.
    </p>
   
</div>
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
 )
}
    export default AnsiktsMassage;