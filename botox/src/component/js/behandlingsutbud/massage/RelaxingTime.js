import React from 'react';
import massage1 from '../../../img/massage1.jpg';

import '../../../css/Massage.css';


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
    </div>
 )
}
    export default RelaxTime;