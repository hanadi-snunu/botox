import React, { useState } from "react";
import ansikte1 from "../../../img/ansiktsbehandling.jpg"; 
import ansikte2 from "../../../img/ansiktsbehandling1.jpg"; 
import ansikte3 from "../../../img/ansiktsbehandling2.jpg"; 
import ansikte4 from "../../../img/ansiktsbehandling3.jpg"; 
import ansikte5 from "../../../img/ansiktsbehandling4.jpg"; 



import ConsultationImage from "../../../img/piccc.jpg"; 
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ansikte = () => {
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
      image: ansikte1,
      title: "Dermaplaning",
      description: "En behandling som avlägsnar döda hudceller och små fjun för en jämnare hudton.",
      link: "/Dermaplaning",
    },
    {
      image: ansikte3,
      title: "Djuprengörande Ansiktsbehandling",
      description: "Rengör huden på djupet och återfuktar för en fräsch känsla.",
      link: "/Djuprensande-ansiktsbehandling",
    },
    {
      image: ansikte4,
      title: "HydraFacial",
      description: "En avancerad behandling som rengör, återfuktar och förbättrar hudens struktur.",
      link: "/Hydra-facial",
    },
    {
      image: ansikte5,
      title: "Instant Clean",
      description: "Snabb och effektiv rengöring för en klarare hud.",
      link: "/Instant-clean",
    },
    {
      image: ansikte1,
      title: "Instant Glow",
      description: "En behandling som ger huden en direkt och naturlig lyster.",
      link: "/Instant-glow",
    },
    {
      image: ansikte3,
      title: "Kemisk Peeling",
      description: "Exfolierar huden och förbättrar dess struktur och ton.",
      link: "/Kemisk-peel",
    },
    {
      image: ansikte4,
      title: "Klassisk Ansiktsbehandling",
      description: "En tidlös behandling som rengör, återfuktar och fräschar upp huden.",
      link: "/Klassisk-ansiktsbehandling",
    },
    {
      image: ansikte5,
      title: "LED Ljusterapi",
      description: "Stimulerar hudens läkningsprocess och förbättrar hudens kvalitet.",
      link: "/LED-Ljusterapi",
    },
    {
      image: ansikte1,
      title: "Lyx Ansiktsbehandling",
      description: "En exklusiv behandling för maximal återhämtning och hudförbättring.",
      link: "/Lyx-ansiktsbehandling",
    },
    {
      image: ansikte3,
      title: "Microneedling",
      description: "Stimulerar kollagenproduktionen och förbättrar hudens elasticitet.",
      link: "/Microneedling",
    },
    {
      image: ansikte4,
      title: "PRXT-33",
      description: "En avancerad behandling som förnyar huden utan att orsaka fjällning.",
      link: "/PRXT-33",
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
    {
      question: "Vilken ansiktsbehandling passar mig?",
      answer: "Det beror på din hudtyp och dina behov. Vi erbjuder gratis konsultationer för att hjälpa dig välja.",
    },
    {
      question: "Hur ofta ska jag göra ansiktsbehandlingar?",
      answer: "För bästa resultat rekommenderas en ansiktsbehandling var 4-6 vecka.",
    },
    {
      question: "Är behandlingarna smärtsamma?",
      answer: "De flesta behandlingar är smärtfria, men vissa som microneedling kan kännas lite.",
    },
    {
      question: "Kan jag kombinera behandlingar?",
      answer: "Ja, det går bra att kombinera olika behandlingar för att maximera resultaten.",
    },
    {
      question: "Finns det några bieffekter?",
      answer: "Milda rodnader kan uppstå efter vissa behandlingar men försvinner vanligtvis inom ett par timmar.",
    },
  ];

  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${ansikte2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Ansiktsbehandlingar</h1>
          <p className="massage-description">
            Våra ansiktsbehandlingar är anpassade för att ge dig en fräsch och strålande hud.
          </p>
        </div>
      </header>

      {/* Information Sektion */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={ansikte1} alt="Ansiktsbehandling" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Ansiktsbehandlingar</h2>
            <p className="info-text">
              Våra ansiktsbehandlingar är skräddarsydda för att möta dina hudbehov. Från återfuktning till anti-age,
              vi hjälper dig att uppnå din bästa hud.
            </p>
          </div>
        </div>
      </section>

      {/* Behandlingsområden med Slider */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Behandlingar</h2>
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

      {/* FAQ Sektion */}
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

      {/* Konsultation Sektion */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst.
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

export default Ansikte;
