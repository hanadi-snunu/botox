import React from "react";
import PriceSection from "./PrisSection";
import "../../../css/behandlingsutbud.css";
import HeroImage from "../../../img/pic.jpg";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";

const VaxningPriser = () => {
    const treatments = [
        {
          title: "Vaxningsbehandlingar för kropp och ansikte",
          prices: [
            { name: "Armar", ordPris: 300, arskort: "-" },
            { name: "Armar män", ordPris: 400, arskort: "-" },
            { name: "Armhåla", ordPris: 250, arskort: "-" },
            { name: "Bikini", ordPris: 250, arskort: "-" },
            { name: "Brasiliansk", ordPris: 400, arskort: "-" },
            { name: "Bröst + mage", ordPris: 400, arskort: "-" },
            { name: "Halva ben", ordPris: 350, arskort: "-" },
            { name: "Halva ben + bikini", ordPris: 550, arskort: "-" },
            { name: "Hela ben", ordPris: 500, arskort: "-" },
            { name: "Hela ben + bikini", ordPris: 700, arskort: "-" },
            { name: "Helkropp vax", ordPris: 1800, arskort: "-" },
            { name: "Överläpp", ordPris: 50, arskort: "-" },
            { name: "Överläpp + haka", ordPris: 100, arskort: "-" },
            { name: "Rygg", ordPris: 400, arskort: "-" },
          ],
        },
      ];
      
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Trådlyftsbehandlingar</h1>
            <p className="hero-subtitle">
              Utforska våra trådlyftsbehandlingar med professionell expertis.
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

export default VaxningPriser;
