import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const OverlappHaka = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Överläpp + Haka Vaxning</h1>
          <p className="massage-description">
            Effektiv och diskret vaxning för överläpp och haka, vilket ger en slät och hårfri hy som varar länge.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Överläpp + Haka Vaxning</h3>
            <p className="relax-treatment-description">
              Överläpp och haka är områden där oönskat hår kan vara särskilt synligt. Den här behandlingen är perfekt för att ge ett rent och 
              mjukt utseende utan att behöva raka eller använda hårborttagningskrämer ofta.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 20 min</li>
                <li><strong>Pris:</strong> 250 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, skonsam för känslig hud, effektiv och snabb behandling</li>
                <li><strong>Rekommenderat för:</strong> De som vill ha en ren och hårfri hud på överläpp och haka</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="/Bokatid" className="relax-treatment-button">
                  Boka överläpp + haka vaxning
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
            Se till att huden är ren och fri från lotion eller oljor. Undvik att använda hårborttagningskrämer några dagar innan behandlingen.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik sol och starka hudprodukter i minst 24 timmar efter behandlingen. Återfukta huden för att hålla den mjuk och len.
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

export default OverlappHaka;
