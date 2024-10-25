import React from 'react';
import OmOss from '../img/omoss.jpg';
import HistoriaBild from '../img/omossss.jpg';
import '../css/omoss.css';
import Medarbetare from '../img/medarbetare.jpg';
import ConsultationImage from "../img/piccc.jpg";
import { Link } from "react-router-dom";
const Omoss = () => {
    
    return (
        <div>
            <div className="omoss-header-section" style={{ backgroundImage: `url(${OmOss})` }}>
                <div className="omoss-overlay">
                    <div className="omoss-content-block">
                        <h1 className="omoss-title">Om House of Aesthetics</h1>
                        <p className="omoss-subtitle">
                        House of Aesthetics är en skönhetsklinik där vi erbjuder en rad olika estetiska behandlingar. Vi strävar alltid efter högsta kvalitet och kundnöjdhet.
                        </p>
                    </div>
                </div>
            </div>

            <div className="omoss-history-section">
                <div className="omoss-history-content">
                   
                        <img src={HistoriaBild} alt="Vår historia" className="history-image"/>
                    </div>
                    <div className="history-text-container">
                        <h2 className="history-title">Vår historia</h2>
                        <p className="history-text">
    Vi på House of Aesthetics har en lång historia av att erbjuda estetiska behandlingar av högsta kvalitet. Vårt team består av certifierade experter som brinner för att hjälpa dig att uppnå dina skönhetsmål.<br /><br />
    Här utförs estetiska injektions- och skönhetsbehandlingar av en legitimerad sjuksköterska och certifierad hudterapeut. Kliniken ligger centralt i Malmö och är lättillgänglig med både buss och tåg. Alla behandlingar och produkter håller högsta kvalitet, med fokus på att ge dig som kund den bästa servicen och upplevelsen.<br /><br />
    Boka din tid genom att välja önskad behandling nedan. När du bokar accepterar du våra 24-timmars avbokningsvillkor, och avbokning sker endast via Bokadirekt med din avbokningskod.<br /><br />
    Enligt nya lagkrav måste en konsultation bokas minst 48 timmar innan behandlingen om du inte tidigare genomfört den aktuella behandlingen, eller om det gått mer än sex månader sedan senaste behandlingstillfället.
</p>
                    </div>
                </div>

              
              
                <div className="medarbetare-section">
            <h2 className="section-title">Våra medarbetare</h2>

            <div className="medarbetare-grid">
                {/* Medarbetare 1 */}
                <div className="medarbetare-card">
                    <img src={Medarbetare} alt="Medarbetare" />
                    <h3>Felicia Becker</h3>
                    <p>Leg. Specialist sjuksköterska</p>
                </div>

                {/* Medarbetare 2 */}
                <div className="medarbetare-card">
                    <img src={Medarbetare} alt="Medarbetare" />
                    <h3>Linda Falk</h3>
                    <p>Klinikchef & Leg. Sjuksköterska</p>
                </div>

                {/* Medarbetare 3 */}
                <div className="medarbetare-card">
                    <img src={Medarbetare} alt="Medarbetare" />
                    <h3>Sara Parvizinia</h3>
                    <p>Fransstylist</p>
                    
                </div>

                {/* Medarbetare 4 */}
                <div className="medarbetare-card">
                    <img src={Medarbetare} alt="Medarbetare" />
                    <h3>Zaenab Hamza</h3>
                    <p>Leg. Läkare</p>
                </div>
                
                {/* Medarbetare 5 */}
                <div className="medarbetare-card">
                    <img src={Medarbetare} alt="Medarbetare" />
                    <h3>NP Clinique</h3>
                    <p>Cert. Laserterapeut</p>
                </div>
                
                {/* Medarbetare 6 */}
                <div className="medarbetare-card">
                    <img src={Medarbetare} alt="Medarbetare" />
                    <h3>Sofie Huhtala</h3>
                    <p>Cert. Hudterapeut</p>
                </div>
               
            </div>
        </div>


         {/* Consultation Section */}
         <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria digitala konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor och hjälper dig att boka den tid som passar dig.
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

export default Omoss;


