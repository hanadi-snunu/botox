import React from 'react';
import { Link } from "react-router-dom";
import '../../css/behandlingsutbud.css';

import Sektion1Bild from "../../img/pic.jpg";
import Sektion2Bild from "../../img/picc.png";


const Behandlingsutbud = () => {
  return (
    <div>
      {/* Sektion 1: Fullbredd bild med rubrik, text och knapp */}
      <div className="fullwidth-section" style={{ backgroundImage: `url(${Sektion1Bild})` }}>
        <div className="overlay">
          {/* Innehållsblock som håller rubrik, text och knapp */}
          <div className="content-block">
            <h1 className="section-titlee">Vårt behandlingsutbud</h1>
            <p className="section-subtitle">
              Vi har ett holistiskt skönhetsperspektiv med balans och harmoni som mål. Vårt behandlingsutbud vilar på två fundament, volymbehandlingar och hudbehandlingar.
            </p>
            <Link to="/Bokatid" className="section-button">
              Boka tid
            </Link>
          </div>
        </div>
      </div>

      {/* Övriga sektioner */}
      {/* Kommer senare, just nu fokus på första sektionen */}

      <div className="section-two">
  <div className="image-container">
    <img src={Sektion2Bild} alt="Behandlingar" className="section-image" />
  </div>
  <div className="text-container">
    <h2 className="section-title">Din hälsa och ditt välmående</h2>
    <p className="section-text">
      Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig.
      Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig. 
      Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig. 
      Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig. 
      Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig. 
      Vi erbjuder ett brett utbud av behandlingar som fokuserar på att förbättra din hälsa och ditt välmående. Vårt team av experter hjälper dig att hitta den rätta behandlingen för just dig.
    </p>
  </div>
</div>

    </div>
  );
};

export default Behandlingsutbud;