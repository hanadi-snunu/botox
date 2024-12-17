import React, { useState } from "react";
import injection1 from "../../../img/injection.png"; // Byt ut till rätt bild
import injection2 from "../../../img/injection.png"; // Byt ut till rätt bild
import injection3 from "../../../img/injection.png"; // Byt ut till rätt bild
import ConsultationImage from "../../../img/piccc.jpg"; // Konsultationsbild
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Injektion = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
      image: injection1,
      title: "Fillers | Läppar",
      description: "Få naturligt fylliga läppar med våra filler-behandlingar.",
      link: "/Fillers-Lappar",
    },
    {
      image: injection2,
      title: "Fillers | Kindben",
      description: "Definiera och lyft dina kindben för en mer konturerad look.",
      link: "/Fillers-Kindben",
    },
    {
      image: injection3,
      title: "Botox | Panna",
      description: "Släta ut rynkor i pannan för ett ungdomligare utseende.",
      link: "/Botox-Panna",
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
    { question: "Vad är fillers?", answer: "Fillers är injektioner som används för att fylla ut rynkor och ge volym." },
    { question: "Hur länge varar resultatet?", answer: "Resultaten håller i cirka 6-12 månader beroende på område." },
    { question: "Är behandlingen smärtsam?", answer: "Behandlingen är oftast smärtfri med minimal obehagskänsla." },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${injection2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Injektionsbehandlingar</h1>
          <p className="massage-description">Förbättra ditt utseende med våra säkra och professionella injektionsbehandlingar.</p>
        </div>
      </header>

      {/* Information Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={injection1} alt="Injektion" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Injektionsbehandlingar</h2>
            <p className="info-text">
              Våra injektionsbehandlingar är säkra, effektiva och utförs av erfarna specialister för att ge dig naturliga resultat.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Populära injektionsbehandlingar</h2>
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
                  Ta första steget mot din drömlook med en konsultation hos våra injektionsexperter.
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

export default Injektion;
