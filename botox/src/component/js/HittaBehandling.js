import React from 'react';
import "../css/behandlingsutbud.css";
import HeroImage from "../img/pic.jpg";
import ConsultationImage from "../img/piccc.jpg";
import { Link } from "react-router-dom";


const Hittabehandling = () => {
     return (
       <div>
         {/* Hero Section */}
         <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
           <div className="hero-overlay">
             <div className="hero-content">
               <h1 className="hero-title"> Hitta rätt behandling</h1>
               <p className="hero-subtitle">
                 Utforska våra behandlingar med professionell expertis.
               </p>
               <Link to="/Bokatid" className="hero-button">
                 Boka tid
               </Link>
             </div>
           </div>
         </div>
   
        
<div>
      <header>
          <h1>Pågående ..</h1>
        </header>
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
   }

export default Hittabehandling;
