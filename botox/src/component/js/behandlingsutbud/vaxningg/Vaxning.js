import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg';
import vaxning2 from '../../../img/vaxningb.jpg';

import ConsultationImage from '../../../img/piccc.jpg';
import '../../../css/Vaxning.css';

import { Link } from 'react-router-dom';

const Vaxning = () => {
  return (
    <div>
    <header className="vaxning-header" style={{ backgroundImage: `url(${vaxning2})` }}>
      <div className="vaxning-overlay">
        <h1 className="vaxning-title">Vaxning</h1>
        <p className="vaxning-description">
        Vaxning är en effektiv metod för att ta bort oönskat hår och ger en slät och mjuk hud som varar längre än vid rakning.        </p>
        
      </div>
    </header>

    {/* Andra sektionen med rubrik och text */}
    <section className="vaxning-info-section">
    <h2 className="vaxning-info-title">Vaxning</h2>
    <p className="vaxning-info-text">
    Vaxning är en populär hårborttagningsmetod där håret avlägsnas från roten, vilket resulterar i en len och hårfri hud i flera veckor. Till skillnad från rakning, som endast tar bort håret vid hudens yta, ger vaxning långvariga resultat och kan minska hårväxten över tid. Behandlingen är lämplig för olika delar av kroppen och passar både män och kvinnor som vill uppnå en silkeslen känsla utan daglig underhåll.    </p>
  </section>

  <div className="vaxning-treatments-section">
      
      <div className="vaxning-treatments-grid">
        
        {/* RelaxTime */}
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Helkropp" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Helkropp</h3>
            <p className="vaxning-treatment-description">
            Få en fullständig hårfri känsla med vår helkroppsvaxning.
            </p>
            <Link to="/Helkropp" className="vaxning-treatment-link">Läs mer om Helkropp</Link>
          </div>
        </div>

        {/* Ansiktsmassage */}
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Armar" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Armar</h3>
            <p className="vaxning-treatment-description">
            Vaxning av armarna ger dig mjuka och hårfria armar som varar länge.
            </p>
            <Link to="/Armar" className="vaxning-treatment-link">Läs mer om Armar</Link>
          </div>
        </div>

        {/* Klippkort X5 */}
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="ArmarMan" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Armar Män</h3>
            <p className="vaxning-treatment-description">
            Professionell vaxning för män som vill ha hårfria och släta armar.
            </p>
            <Link to="/ArmarMen" className="vaxning-treatment-link">Läs mer om Armar Män</Link>
          </div>
        </div>

        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Armhala" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Armhåla</h3>
            <p className="vaxning-treatment-description">
            Få lena och hårfria armhålor med vår vaxning.
            </p>
            <Link to="/Armhala" className="vaxning-treatment-link">Läs mer om Armhåla</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Bikini" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Bikini</h3>
            <p className="vaxning-treatment-description">
            Skapa en prydlig bikinilinje med vår bikini-vaxning.
            </p>
            <Link to="/Bikini" className="vaxning-treatment-link">Läs mer om Bikini</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Brasiliansk" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Brasiliansk</h3>
            <p className="vaxning-treatment-description">
            Upplev en silkeslen känsla med vår brasilianska vaxning.
            </p>
            <Link to="/Brasiliansk" className="vaxning-treatment-link">Läs mer om Brasiliansk</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Brost+Mage" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Bröst + Mage</h3>
            <p className="vaxning-treatment-description">
            Vaxning av bröst och mage för en slät och hårfri hud.
            </p>
            <Link to="/Brost+Mage" className="vaxning-treatment-link">Läs mer om Bröst + Mage</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Halvaben" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Halva ben</h3>
            <p className="vaxning-treatment-description">
            Få släta underben eller lår med vår vaxning av halva ben.
            </p>
            <Link to="/Halvaben" className="vaxning-treatment-link">Läs mer om Halvaben</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Halvaben+bikini" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Halva ben + Bikini</h3>
            <p className="vaxning-treatment-description">
            Kombinera vaxning av halva ben och bikinilinje för ett komplett resultat.
            </p>
            <Link to="/Halvaben+bikini" className="vaxning-treatment-link">Läs mer om Halvaben + Bikini</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Helaben" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Hela ben</h3>
            <p className="vaxning-treatment-description">
            Upplev känslan av hårfria ben med vår helbensvaxning.
            </p>
            <Link to="/Helaben" className="vaxning-treatment-link">Läs mer om Helaben</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Helaben+bikini" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Hela ben + Bikini</h3>
            <p className="vaxning-treatment-description">
            Fullständig vaxning av ben och bikinilinje för en silkeslen hud.
            </p>
            <Link to="/Helaben+bikini" className="vaxning-treatment-link">Läs mer om Helaben + Bikini</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Overlapp" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Överläpp</h3>
            <p className="vaxning-treatment-description">
            Diskret och effektiv vaxning av överläppen.
            </p>
            <Link to="/Overlapp" className="vaxning-treatment-link">Läs mer om Överläpp</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Overlapp+haka" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Överläpp + Haka</h3>
            <p className="vaxning-treatment-description">
            Avlägsna oönskat hår i ansiktet för en jämn och fin hud.
            </p>
            <Link to="/Overlapp+haka" className="vaxning-treatment-link">Läs mer om Överläpp + Haka</Link>
          </div>
        </div>
        <div className="vaxning-treatment-card">
          <img src={vaxning1} alt="Rygg" className="vaxning-treatment-image" />
          <div className="vaxning-treatment-content">
            <h3 className="vaxning-treatment-title">Rygg</h3>
            <p className="vaxning-treatment-description">
            Effektiv vaxning av ryggen för en hårfri känsla.
            </p>
            <Link to="/Rygg" className="vaxning-treatment-link">Läs mer om Rygg</Link>
          </div>
        </div>
       


      </div>
      <div className="vaxning-separator-line">
        <span className="vaxning-separator-dot">•</span>
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

export default Vaxning;
