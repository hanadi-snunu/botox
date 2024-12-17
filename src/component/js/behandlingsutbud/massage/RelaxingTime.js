import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import massage2 from '../../../img/massage2.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';


const RelaxTime = () => {
  return (
    <div>
    <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
      <div className="massage-overlay">
        <h1 className="massage-title">Relax Time</h1>
        <p className="massage-description">
          Relax massage är en avkopplande och terapeutisk behandling som syftar till att minska spänningar i musklerna, öka blodcirkulationen och förbättra ditt välbefinnande. En perfekt paus för kropp och själ.
        </p>
        
      </div>
    </header>
      
 
 <div>

 <div className="relax-treatment-card">
  <div className="relax-treatment-content">
    <h3 className="relax-treatment-title">Relaxing Time</h3>
    <p className="relax-treatment-description">
    Känner du spänningarna byggas upp i nacke och axlar? Då är det dags att ta en paus och unna dig själv en avkopplande massage. Våra erfarna massageterapeuter är redo att hjälpa dig lösa upp muskelspänningar och få dig att slappna av med en kort men effektiv massage som fokuserar på problemområdena. Dessutom kommer du även unna dig en avslappnande skalpmassage för att ytterligare öka ditt välbefinnande. Boka din behandling redan idag och upplev ren njutning!
    </p>
  </div>
  <div className="relax-treatment-details-container">
    <div className="relax-treatment-details">
      <ul>
        <li><strong>Behandlingstid:</strong> 30 min</li>
        <li><strong>Pris:</strong> 450 kr</li>
        <li><strong>Typ av massage:</strong> Avkopplande helkroppsmassage, skalpmassage</li>
        <li><strong>Fördelar:</strong> Minskad stress, förbättrad blodcirkulation, avslappning</li>
        <li><strong>Rekommenderat för:</strong> Alla som behöver minska spänningar och stress</li>
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
            Innan du kommer för en relax-behandling, är det viktigt att förbereda sig genom att ta det lugnt och undvika intensiv fysisk aktivitet. Vi rekommenderar också att dricka mycket vatten för att hålla kroppen hydrerad.
        </p>
        <p className="session-text">
            För att få den bästa upplevelsen, se till att du kommer i tid och att du är redo för en avkopplande stund där du kan koppla av och släppa stressen.
        </p>
    </div>
    <div className="session-block">
        <h2 className="session-title">Efter behandlingen</h2>
        <p className="session-text">
            Efter behandlingen är det viktigt att vila och låta kroppen absorbera de positiva effekterna av massagen. Undvik tung fysisk aktivitet och försök att hålla kroppen varm.
        </p>
        <p className="session-text">
            Fortsätt att dricka vatten för att hjälpa till att spola ut eventuella gifter som frigjorts under behandlingen. Ge din kropp tid att återhämta sig och njut av känslan av lugn och välbefinnande.
        </p>
    </div>
</section>

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
    export default RelaxTime;