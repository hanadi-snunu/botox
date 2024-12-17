import React from "react";
import PriceSection from "./PrisSection";
import "../../../css/behandlingsutbud.css";
import HeroImage from "../../../img/pic.jpg";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";

const HydraFacialPriser = () => {
    const treatments = [
        {
            title: "Hydra Facial-behandlingar för djupgående rengöring och föryngring",
            prices: [
              { name: "Hydra Facial | Deluxe", ordPris: 1495, arskort: "-" },
              { name: "Hydra Facial | För gravida", ordPris: 1195, arskort: "-" },
              { name: "Hydra Facial | Platinum", ordPris: 1795, arskort: "-" },
              { name: "Hydra Facial | Standard", ordPris: 1195, arskort: "-" },
             
            ],
          },
        ];
      
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Hydra Facial behandlingar</h1>
            <p className="hero-subtitle">
              Utforska våra hydra facial behandlingar med professionell expertis.
            </p>
            <Link to="/Bokatid" className="hero-button">
              Boka tid
            </Link>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div>
      
      {treatments.map((treatment, index) => (
        <PriceSection key={index} title={treatment.title} prices={treatment.prices} />
      ))}
    </div>

      {/* Consultation Section */}
      <div
        className="consultation-section"
        style={{ backgroundImage: `url(${ConsultationImage})` }}
      >
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">
              Boka en kostnadsfri digital konsultation
            </h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå
              vilken behandling som passar dig bäst.
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

export default HydraFacialPriser;
