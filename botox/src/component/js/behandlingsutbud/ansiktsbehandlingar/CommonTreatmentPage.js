// CommonTreatmentPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ConsultationImage from '../../../img/piccc.jpg';
import '../../../css/Massage.css';

const CommonTreatmentPage = ({ backgroundImage, title, description, extraDescription, details, beforeText, afterText, bookLink, bookButtonText }) => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">{title}</h1>
          <p className="massage-description">{description}</p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">{title}</h3>
            {extraDescription ? (
              <p
                className="relax-treatment-description"
                dangerouslySetInnerHTML={{ __html: extraDescription }}
              />
            ) : (
              <p className="relax-treatment-description">{description}</p>
            )}
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                {details.map((detail, index) => (
                  <li key={index}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
              <div className="relax-treatment-button-wrapper">
                {/* Ändra texten dynamiskt */}
                <Link to={bookLink} className="relax-treatment-button">
                  {bookButtonText || "Boka nu"} {/* Standardtext är "Boka nu" om ingen text skickas */}
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
          <p className="session-text">{beforeText}</p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">{afterText}</p>
        </div>
      </section>

      {/* Consultation Section */}
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

export default CommonTreatmentPage;
