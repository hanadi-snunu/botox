import React from 'react';
import { Link } from "react-router-dom";
import '../css/Bokatid.css'; // Använd filvägen för din CSS-fil

import BookingHeaderImage from "../img/Bokatid.jpg"; // Lägg till rätt bild för första sektionen


const BokaTid = () => {
  return (
    <div>
      {/* Första sektionen - Bokning Hero */}
      <div className="booking-hero" style={{ backgroundImage: `url(${BookingHeaderImage})` }}>
        <div className="booking-hero-overlay">
          <div className="booking-hero-content">
            <h1 className="booking-hero-title">Boka tid</h1>
            <p className="booking-hero-subtitle">
              Här kan du boka tid till våra kliniker. Du kan både boka konsultation och behandlingar via länkarna nedan.
            </p>
           
          </div>
        </div>
      </div>

      {/* Andra sektionen - BokaDirekt */}
      <div className="booking-bokadirekt">
        <h2 className="booking-bokadirekt-title">Boka tid via BokaDirekt</h2>
        <p className="booking-bokadirekt-subtitle">
          Boka tid via BokaDirekt. Du hittar enkelt en tid som passar dig.
        </p>
        <a href="https://www.bokadirekt.se/places/house-of-aesthetics-34817" target="_blank" rel="noopener noreferrer" className="booking-bokadirekt-button">
          BokaDirekt
        </a>
      </div>

      {/* Tredje sektionen - Information */}
      <div className="booking-info">
        <div className="booking-info-column">
          <h3 className="booking-info-title">Konsultation</h3>
          <p className="booking-info-text">
            Alla våra konsultationer är kostnadsfria. Vi svarar på dina frågor och ger förslag på vilka behandlingar som kan passa för dig.
          </p>
        </div>
        <div className="booking-info-column">
          <h3 className="booking-info-title">Avboka</h3>
          <p className="booking-info-text">
            Avbokning kan göras kostnadsfritt senast 48 timmar före din inbokade tid. Om du avbokar senare än så, eller uteblir från ditt bokade besök, kommer en avbokningsavgift att debiteras via faktura.
          </p>
        </div>
        <div className="booking-info-column">
          <h3 className="booking-info-title">Betalning</h3>
          <p className="booking-info-text">
            Vi erbjuder betalning med Bankkort, Swish och Sveaekonomi (faktura eller avbetalning). Vi tar inte emot kontanter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BokaTid;
