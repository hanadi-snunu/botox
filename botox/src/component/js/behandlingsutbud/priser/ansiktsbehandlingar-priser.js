import React from "react";
import PriceSection from "./PrisSection";
import "../../../css/behandlingsutbud.css";
import HeroImage from "../../../img/pic.jpg";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";

const AnsiktsbehandlingarPriser = () => {
    const treatments = [
        {
            title: "Ansiktsbehandlingar för en strålande och frisk hud",
            prices: [
              { name: "Dermaplaning", ordPris: 850, arskort: "-" },
              { name: "Djuprensande Ansiktsbehandling", ordPris: 949, arskort: "-" },
              { name: "Instant Clean", ordPris: 550, arskort: "-" },
              { name: "Instant Glow", ordPris: 450, arskort: "-" },
              { name: "Klassisk Ansiktsbehandling", ordPris: 749, arskort: "-" },
              { name: "Lyx Ansiktsbehandling", ordPris: 1049, arskort: "-" },
            
            ],
        },
        {
            title: "Avancerad Hudvård",
            prices: [
              { name: "PRX-T33 Ansikte", ordPris: 1895, arskort: "-" },
              { name: "PRX T-33 | Kur x4", ordPris: 5400, arskort: "-" },
              { name: "PRX T-33 Ansikte+Hals", ordPris: 2300, arskort: "-" },
              { name: "PRX T-33 Ansikte+Hals+Dekolletage", ordPris: 2800, arskort: "-" },
              { name: "Microneedling Ansikte", ordPris: 1895, arskort: "-" },
              { name: "Microneedling Ansikte + Hals", ordPris: 2195, arskort: "-" },
              { name: "Microneedling | Hals + Dekolletage", ordPris: 2195, arskort: "-" },
              { name: "Microneedling Ansikte + Hals + Dekolletage", ordPris: 2595, arskort: "-" },
              { name: "Microneedling Ansikte | Kur x3", ordPris: 4500, arskort: "-" },
              { name: "Microneedling Ansikte + Hals + Dekolletage | Kur x3", ordPris: 6495, arskort: "-" },
              { name: "Microneedling + PRX T33", ordPris: 2895, arskort: "-" },
              { name: "Microneedling + PRX T33 | Kur x3", ordPris: 7500, arskort: "-" },
              { name: "Botoxfacial/Microbotox | 1 behandling", ordPris: 2200, arskort: "-" },
              { name: "Botoxfacial/Microbotox | 3 behandlingar", ordPris: 5250, arskort: "-" },
              { name: "Milkpeel+Microneedling", ordPris: 2800, arskort: "-" },
              { name: "Milk peel + microneedling kur", ordPris: 6000, arskort: "-" },
              { name: "LED Ljusterapi", ordPris: 650, arskort: "-" },
              { name: "LED Ljusterapi (Tillägg till behandling)", ordPris: 300, arskort: "-" },
            ],
        },
        {
            title: "Kemisk Peel",
            prices: [
              { name: "BioReepel", ordPris: 1495, arskort: "-" },
              { name: "BioReepel Kur x3", ordPris: 3795, arskort: "-" },
              { name: "BioReepel Body | 4ml", ordPris: 1495, arskort: "-" },
              { name: "Crystal Peel", ordPris: 1895, arskort: "-" },
              { name: "Mask Peel", ordPris: 995, arskort: "-" },
              { name: "Milk Peel", ordPris: 1295, arskort: "-" },
             
            ],
        },
      ];
      
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title"> Ansiktsbehandlingar</h1>
            <p className="hero-subtitle">
              Utforska våra ansiktsbehandlingar med professionell expertis.
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

export default AnsiktsbehandlingarPriser;
