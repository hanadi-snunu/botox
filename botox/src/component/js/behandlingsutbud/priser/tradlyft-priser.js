import React from "react";
import PriceSection from "./PrisSection";
import "../../../css/behandlingsutbud.css";
import HeroImage from "../../../img/pic.jpg";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";

const TradlyftPriser = () => {
    const treatments = [
        {
          title: "Trådlyftsbehandlingar för lyft och föryngring av ansikte och hals",
          prices: [
            { name: "Trådlyft | Midface", ordPris: 15300, arskort: "-" },
            { name: "Trådlyft | Käklinjen", ordPris: 9500, arskort: "-" },
            { name: "Trådlyft | Kindben", ordPris: 5700, arskort: "-" },
            { name: "Trådlyft | Halslyft", ordPris: 5700, arskort: "-" },
            { name: "Trådlyft | Dubbelhaka", ordPris: 7050, arskort: "-" },
            { name: "Mono | Kinder", ordPris: 4100, arskort: "-" },
            { name: "Mono | Marionettlinjer", ordPris: 3200, arskort: "-" },
            { name: "Mono | Nasolabiala", ordPris: 2500, arskort: "-" },
            { name: "Mono | Ögon", ordPris: 3200, arskort: "-" },
            { name: "Mono | Suramungipor", ordPris: 1000, arskort: "-" },
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

export default TradlyftPriser;
