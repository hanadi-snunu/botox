import React, { useState } from "react";
import laser1 from "../../../img/laser.png"; // Byt ut till rätt bild
import laser2 from "../../../img/laser.png"; // Byt ut till rätt bild
import laser3 from "../../../img/laser.png"; // Byt ut till rätt bild
import ConsultationImage from "../../../img/piccc.jpg"; // Konsultationsbild
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Laser = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
      image: laser1,
      title: "Laser | Permanent Hårborttagning",
      description: "Effektiv hårborttagning med långvariga resultat.",
      link: "/Laser-Harborttagning",
    },
    {
      image: laser2,
      title: "Laser | Hudföryngring",
      description: "Förbättra hudens struktur och minska ålderstecken.",
      link: "/Laser-Hudforyngring",
    },
    {
      image: laser3,
      title: "Laser | Pigmentfläckar",
      description: "Bli av med oönskade pigmentfläckar effektivt och skonsamt.",
      link: "/Laser-Pigmentflackar",
    },
    {
      image: laser1,
      title: "Laser | Kärlbristningar",
      description: "Ta bort synliga kärlbristningar för en jämn hudton.",
      link: "/Laser-Karlbristningar",
    },
    {
      image: laser2,
      title: "Laser | Acneärr",
      description: "Minska synligheten av acneärr med modern laserteknik.",
      link: "/Laser-Acnearr",
    },
  ];

  const settings = {
    dots: true,
    infinite: treatments.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, treatments.length),
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, dots: true } },
    ],
  };

  const questions = [
    { question: "Hur fungerar laserbehandling?", answer: "Laser använder ljusenergi för att behandla specifika hudproblem och hår." },
    { question: "Gör behandlingen ont?", answer: "Laserbehandling kan orsaka lätt obehag, men är oftast smärtfri." },
    { question: "Hur många behandlingar behövs?", answer: "Antalet behandlingar beror på området och typen av laser." },
    { question: "Finns det någon återhämtningstid?", answer: "Återhämtningen är oftast minimal och du kan återgå till dina dagliga aktiviteter snabbt." },
    { question: "Är laserbehandling säkert?", answer: "Ja, våra behandlingar utförs av certifierade specialister med säker utrustning." },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${laser2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Laserbehandlingar</h1>
          <p className="massage-description">
            Upptäck våra effektiva laserbehandlingar för hårborttagning, hudförbättring och mycket mer.
          </p>
        </div>
      </header>

      {/* Information Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={laser1} alt="Laserbehandling" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Varför välja laserbehandling?</h2>
            <p className="info-text">
              Laserbehandlingar är skonsamma, effektiva och ger långvariga resultat. Våra experter använder den senaste tekniken för att uppnå dina skönhetsmål.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Våra laserbehandlingar</h2>
        <Slider {...settings}>
          {treatments.map((treatment, index) => (
            <div key={index} className="massage-treatment-card">
              <img src={treatment.image} alt={treatment.title} className="massage-treatment-image" />
              <div className="massage-treatment-content">
                <h3 className="massage-treatment-title">{treatment.title}</h3>
                <p className="massage-treatment-description">{treatment.description}</p>
                <Link to={treatment.link} className="massage-treatment-link">
                  Läs mer
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <div className="separator-line">
        <span className="separator-dot">•</span>
      </div>

      {/* FAQ Section */}
      <section className="massage-faq-section">
        <h2 className="massage-faq-title">Vanliga frågor</h2>
        <div className="massage-faq-list">
          {questions.map((item, index) => (
            <div key={index} className="massage-faq-item">
              <div className="massage-faq-question" onClick={() => toggleQuestion(index)}>
                <span>{item.question}</span>
                <span>{openQuestion === index ? "-" : "+"}</span>
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
              Ta första steget mot din drömlook med en konsultation hos våra laserexperter.
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

export default Laser;
