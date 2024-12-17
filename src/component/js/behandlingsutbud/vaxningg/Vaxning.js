import React, { useState } from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import vaxning2 from '../../../img/vaxningb.jpg.png';
import ConsultationImage from '../../../img/piccc.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css'; // Använd samma CSS-fil som Massage för konsistens
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Vaxning = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
        image: vaxning1,
        title: "Helkropp",
        description: "Få en fullständig hårfri känsla med vår helkroppsvaxning.",
        link: "/Helkropp"
    },
    {
        image: vaxning1,
        title: "Armar",
        description: "Vaxning av armarna ger dig mjuka och hårfria armar som varar länge.",
        link: "/Armar"
    },
    {
        image: vaxning1,
        title: "Armar Män",
        description: "Professionell vaxning för män som vill ha hårfria och släta armar.",
        link: "/ArmarMen"
    },
    {
        image: vaxning1,
        title: "Armhåla",
        description: "Få lena och hårfria armhålor med vår vaxning.",
        link: "/Armhala"
    },
    {
        image: vaxning1,
        title: "Bikini",
        description: "Skapa en prydlig bikinilinje med vår bikini-vaxning.",
        link: "/Bikini"
    },
    {
        image: vaxning1,
        title: "Brasiliansk",
        description: "Upplev en silkeslen känsla med vår brasilianska vaxning.",
        link: "/Brasiliansk"
    },
    {
        image: vaxning1,
        title: "Bröst + Mage",
        description: "Vaxning av bröst och mage för en slät och hårfri hud.",
        link: "/Brost+Mage"
    },
    {
        image: vaxning1,
        title: "Halva ben",
        description: "Få släta underben eller lår med vår vaxning av halva ben.",
        link: "/Halvaben"
    },
    {
        image: vaxning1,
        title: "Halva ben + Bikini",
        description: "Kombinera vaxning av halva ben och bikinilinje för ett komplett resultat.",
        link: "/Halvaben+bikini"
    },
    {
        image: vaxning1,
        title: "Hela ben",
        description: "Upplev känslan av hårfria ben med vår helbensvaxning.",
        link: "/Helaben"
    },
    {
        image: vaxning1,
        title: "Hela ben + Bikini",
        description: "Fullständig vaxning av ben och bikinilinje för en silkeslen hud.",
        link: "/Helaben+bikini"
    },
    {
        image: vaxning1,
        title: "Överläpp",
        description: "Diskret och effektiv vaxning av överläppen.",
        link: "/Overlapp"
    },
    {
        image: vaxning1,
        title: "Överläpp + Haka",
        description: "Avlägsna oönskat hår i ansiktet för en jämn och fin hud.",
        link: "/Overlapp+haka"
    },
    {
        image: vaxning1,
        title: "Rygg",
        description: "Effektiv vaxning av ryggen för en hårfri känsla.",
        link: "/Rygg"
    }
];


  const settings = {
    dots: true,
    infinite: treatments.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, treatments.length),
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, dots: true }}]
  };

  const questions = [
    {
        question: 'Hur länge varar en vaxning?',
        answer: 'Vaxning ger vanligtvis en hårfri hud i flera veckor beroende på din hårväxt. För många kan resultatet hålla mellan 3-6 veckor.'
    },
    {
        question: 'Är vaxning smärtsamt?',
        answer: 'Vaxning kan kännas, speciellt om du är ny till behandlingen. Smärtan är dock oftast tillfällig, och många upplever att det blir lättare med tiden.'
    },
    {
        question: 'Hur förbereder jag mig för vaxning?',
        answer: 'För bästa resultat, se till att håret är minst 0,5 cm långt. Undvik lotion eller oljor på behandlingsområdet samma dag och exfoliera huden lätt några dagar innan för att minska risken för inåtväxande hårstrån.'
    },
    {
        question: 'Vad ska jag tänka på efter vaxning?',
        answer: 'Efter vaxning är det bra att undvika värme, såsom bastu och sol, i minst 24 timmar för att undvika irritation. Använd gärna en skonsam lotion för att hålla huden mjuk.'
    },
    {
        question: 'Kan alla kroppsdelar vaxas?',
        answer: 'Ja, de flesta kroppsdelar kan vaxas, men vissa områden kan vara mer känsliga än andra. Rådgör gärna med terapeuten om du har några specifika önskemål eller funderingar.'
    }
];


  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Vaxning</h1>
          <p className="massage-description">
            Vaxning är en effektiv metod för att ta bort oönskat hår och ger en slät och mjuk hud som varar längre än vid rakning.
          </p>
        </div>
      </header>

      {/* Information Sektion */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={vaxning1} alt="Vaxning" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Vaxning</h2>
            <p className="info-text">
              Vaxning är en populär hårborttagningsmetod där håret avlägsnas från roten, vilket ger en len och hårfri hud i flera veckor.
            </p>
          </div>
        </div>
      </section>

      {/* Behandlingsområden med Slider */}
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

      {/* FAQ Sektion */}
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

      {/* Konsultation Sektion */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria digitala konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaxning;
