import React from 'react';
import { Link } from "react-router-dom";
import "../css/Kontakt.css";
import KontaktBild from "../img/kontakt.jpg";

const Kontakt = () => {
     return (
    <div>
      {/* Sektion 1: Fullbredd bild med rubrik, text och knapp */}
      <div className="contact-header-section" style={{ backgroundImage: `url(${KontaktBild})` }}>
        <div className="contact-overlay">
          <div className="contact-content-block">
            <h1 className="contact-title">Kontakt</h1>
            <p className="contact-subtitle">
              Här hittar du adress och kontakt-information till alla våra kliniker. Tveka inte att höra av dig om du har några frågor. Vill du boka tid? Klicka på knappen nedan.
            </p>
            <Link to="/Bokatid" className="contact-button">
              Boka tid
            </Link>
          </div>
        </div>
      </div>

      {/* Sektion 2: Kontaktinformation */}
      <div className="contact-info-section">
      <div className="contact-info-wrapper">
        <h2 className="info-title">Välkommen att höra av dig!</h2>
        <p className="info-text">
          Primärt önskar vi att du väljer att kontakta oss via e-post. Skicka ett meddelande så kontaktar vi dig inom kort.
        </p>
        <p className="info-text">
          E-post: <a href="mailto:houseofaesthetics.se@hotmail.com">houseofaesthetics.se@hotmail.com</a><br />
          Instagram: <a href="https://www.instagram.com/_houseofaesthetics?igsh=ZG9mcHdxdTk0bWky" target="_blank" rel="noopener noreferrer">@houseofaesthetics</a><br />
          Telefon: <a href="tel:040 - 511101">040 - 511101</a>
        </p>
        <div className="contact-locations">
          <div className="locationK">
            <h4>Öppettider:</h4>
            <p>Mån – Fre: 10:00 – 18:00</p>
            <p>Lör: Varierande öppettider</p>
            <p>Sön: Varierande öppettider</p>
          </div>
         
          {/* Lägg till fler location-sektioner vid behov */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Kontakt;
