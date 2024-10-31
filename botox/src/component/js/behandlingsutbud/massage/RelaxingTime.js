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
 <img src={massage2} alt="Behandling" className="relax-treatment-image" />
 <div className="relax-treatment-content">
     <h3 className="relax-treatment-title">Relaxing Time</h3>
     <p className="relax-treatment-description">
     Känner du spänningarna byggas upp i nacke och axlar? Då är det dags att ta en paus och unna dig själv en avkopplande massage.

Våra erfarna massageterapeuter är redo att hjälpa dig lösa upp muskelspänningar och få dig att slappna av med en kort men effektiv massage som fokuserar på problemområdena. Dessutom kommer du även unna dig en avslappnande skalpmassage för att ytterligare öka ditt välbefinnande. 

Boka din behandling redan idag och upplev ren njutning!
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
    export default RelaxTime;