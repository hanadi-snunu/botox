import React, { useState } from 'react';
import massage1 from '../../../img/massage1.jpg';
import massage2 from '../../../img/massage2.jpg';
import massage3 from '../../../img/massage3.jpg';
import massage4 from '../../../img/massage4.jpg';
import ConsultationImage from '../../../img/piccc.jpg';
import '../../../css/Massage.css';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Massage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
};
const questions = [
  {
      question: 'Gör det ont?',
      answer: 'Massage är vanligtvis en behaglig och smärtfri upplevelse. Vissa tekniker kan innebära ett visst tryck, men våra massageterapeuter anpassar behandlingen efter dina behov för optimal komfort.'
  },
  {
      question: 'Hur lång är en massagebehandling?',
      answer: 'En massagebehandling kan variera från 30 minuter till 90 minuter beroende på vilken typ av massage du väljer.'
  },
  {
      question: 'Vilka typer av massage erbjuder ni?',
      answer: 'Vi erbjuder flera typer av massage inklusive avkopplingsmassage, ansiktsmassage och massagepaket som Klippkort X5.'
  }
];

  const treatments = [
    {
        image: massage2,
        title: "RelaxTime",
        description: "En avkopplande massage för att minska stress och öka välbefinnandet. Perfekt för en lugn stund.",
        link: "/RelaxingTime"
    },
    {
        image: massage3,
        title: "Ansiktsmassage",
        description: "En lyxig ansiktsmassage som förbättrar blodcirkulationen och ger en fräsch känsla.",
        link: "/Ansiktsmassage"
    },
    {
        image: massage4,
        title: "Klippkort X5",
        description: "För dig som vill ha regelbundna massagebehandlingar. Klippkortet ger dig fem behandlingar till ett rabatterat pris.",
        link: "/KlippkortX5"
    }
    
];

// Konfigurera inställningar dynamiskt baserat på antalet behandlingar
const settings = {
    dots: true,
    infinite: treatments.length > 3, // Endast "infinite" om det finns fler än 3 behandlingar
    speed: 500,
    slidesToShow: Math.min(3, treatments.length), // Visa max 3 eller färre om det finns färre än 3 behandlingar
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        }
    ]
};
  return (
    <div>
    <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
      <div className="massage-overlay">
        <h1 className="massage-title">Massage</h1>
        <p className="massage-description">
          Massage är en avkopplande och terapeutisk behandling som syftar till att minska spänningar i musklerna, öka blodcirkulationen och förbättra ditt välbefinnande. En perfekt paus för kropp och själ.
        </p>
        
      </div>
    </header>

    {/* Andra sektionen med rubrik och text */}
    <section className="massage-info-section">
    <h2 className="info-title">Massage</h2>
    <p className="info-text">
      Massage är en metod för att lindra stress, förbättra muskelåterhämtning och främja avslappning. Genom olika tekniker kan massage hjälpa till att lindra spänningar, förbättra cirkulationen och främja ett starkare välbefinnande. Vårt team av erfarna massageterapeuter ser till att du får en anpassad upplevelse baserad på dina behov.
    </p>
  </section>

  <div className="massage-prices-container">
      <h2 className="prices-title">Priser</h2>

      {/* Ansiktsmassage */}
      <div className="price-section">
        <div className="price-header" onClick={() => toggleSection('ansiktsmassage')}>
          <h3 className={`price-toggle ${activeSection === 'ansiktsmassage' ? 'open' : ''}`}>
            {activeSection === 'ansiktsmassage' ? '−' : '+'} Ansiktsmassage
          </h3>
        </div>
        {activeSection === 'ansiktsmassage' && (
          <div className="price-content">
            <table className="price-table">
              <tbody>
                <tr>
                  <td>Ansiktsmassage</td>
                  <td>500 kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Klippkort */}
      <div className="price-section">
        <div className="price-header" onClick={() => toggleSection('klippkort')}>
          <h3 className={`price-toggle ${activeSection === 'klippkort' ? 'open' : ''}`}>
            {activeSection === 'klippkort' ? '−' : '+'} Klippkort
          </h3>
        </div>
        {activeSection === 'klippkort' && (
          <div className="price-content">
            <table className="price-table">
              <tbody>
                <tr>
                  <td>Klippkort (5 behandlingar)</td>
                  <td>2000 kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* RelaxTime */}
      <div className="price-section">
        <div className="price-header" onClick={() => toggleSection('relaxtime')}>
          <h3 className={`price-toggle ${activeSection === 'relaxtime' ? 'open' : ''}`}>
            {activeSection === 'relaxtime' ? '−' : '+'} RelaxTime
          </h3>
        </div>
        {activeSection === 'relaxtime' && (
          <div className="price-content">
            <table className="price-table">
              <tbody>
                <tr>
                  <td>RelaxTime</td>
                  <td>700 kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>

   {/* Grid-sektion för behandlingar */}
   
   <div>
            <section className="massage-treatments-section">
                <h2 className="massage-section-title">Behandlingsområden</h2>
                <Slider {...settings}>
                    {treatments.map((treatment, index) => (
                        <div key={index} className="massage-treatment-card">
                            <img src={treatment.image} alt={treatment.title} className="massage-treatment-image" />
                            <div className="massage-treatment-content">
                                <h3 className="massage-treatment-title">{treatment.title}</h3>
                                <p className="massage-treatment-description">{treatment.description}</p>
                               
                                <Link to={treatment.link} className="massage-treatment-link">Läs mer</Link>
                               
                            </div>
                        </div>
                    ))}
                </Slider>



            </section>
      
       <div className="separator-line">
        <span className="separator-dot">•</span>
      </div>
      
      </div>

      <section className="massage-faq-section">
    <h2 className="massage-faq-title">Vanliga frågor</h2>
    <div className="massage-faq-list">
        {questions.map((item, index) => (
            <div key={index} className="massage-faq-item">
                <div className="massage-faq-question" onClick={() => toggleQuestion(index)}>
                    <span>{item.question}</span>
                    <span>{openQuestion === index ? '-' : '+'}</span>
                </div>
                {openQuestion === index && <p className="massage-faq-answer">{item.answer}</p>}
            </div>
        ))}
    </div>
</section>
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

export default Massage;
