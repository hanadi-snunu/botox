import React, { useState } from "react";
import threadLift1 from "../../../img/threadlift1.jpg"; // Byt ut till rätt bild
import threadLift2 from "../../../img/threadlift2.jpg"; // Byt ut till rätt bild
import threadLift3 from "../../../img/threadlift3.jpg"; // Byt ut till rätt bild
import ConsultationImage from "../../../img/piccc.jpg"; // Konsultationsbild
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThreadLift = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
      image: threadLift1,
      title: "Trådlyft | Midface",
      description: "Förbättra kindens form och struktur med trådlyft.",
      link: "/Tradlyft-Midface",
    },
    {
      image: threadLift2,
      title: "Trådlyft | Käklinjen",
      description: "Skulptera och förstärk käklinjen för ett ungdomligt utseende.",
      link: "/Tradlyft-Kaklinjen",
    },
    {
      image: threadLift3,
      title: "Trådlyft | Kindben",
      description: "Lyft och definiera kindbenen för en fräsch look.",
      link: "/Tradlyft-Kindben",
    },
    {
      image: threadLift1,
      title: "Trådlyft | Halslyft",
      description: "Få en stramare och mer definierad halskontur.",
      link: "/Tradlyft-Halslyft",
    },
    {
      image: threadLift2,
      title: "Trådlyft | Dubbelhaka",
      description: "Minska dubbelhaka med en lyftande effekt.",
      link: "/Tradlyft-Dubbelhaka",
    },
    {
      image: threadLift3,
      title: "Mono | Ögon",
      description: "Förbättra ögonområdets elasticitet och utseende.",
      link: "/Mono-Ogon",
    },
    {
      image: threadLift1,
      title: "Mono | Marionettlinjer",
      description: "Minska djupa linjer och förbättra hudens elasticitet.",
      link: "/Mono-Marionettlinjer",
    },
    {
      image: threadLift2,
      title: "Mono | Nasolabiala",
      description: "Minska linjer runt näsan och munnen för ett slätare utseende.",
      link: "/Mono-Nasolabiala",
    },
    {
      image: threadLift3,
      title: "Mono | Suramungipor",
      description: "Lyft mungiporna och förbättra hudens struktur.",
      link: "/Mono-Suramungipor",
    },
    {
      image: threadLift1,
      title: "Mono | Kinder",
      description: "Få fylligare och mer definierade kinder.",
      link: "/Mono-Kinder",
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
      question: "Vad är trådlyft?",
      answer: "Trådlyft är en minimalt invasiv behandling för att lyfta och föryngra huden.",
    },
    {
      question: "Hur länge varar resultaten av trådlyft?",
      answer: "Resultaten kan hålla i 1-2 år beroende på din hud och livsstil.",
    },
    {
      question: "Är behandlingen smärtsam?",
      answer: "Trådlyft är vanligtvis inte smärtsamt, men du kan känna ett lätt tryck eller obehag.",
    },
    {
      question: "Kan jag kombinera trådlyft med andra behandlingar?",
      answer: "Ja, trådlyft kan kombineras med fillers eller andra behandlingar för att maximera resultaten.",
    },
    {
      question: "Finns det någon återhämtningstid?",
      answer: "Du kan uppleva lätt svullnad eller blåmärken, men de försvinner oftast inom några dagar.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${threadLift2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Trådlyft</h1>
          <p className="massage-description">
            Lyft och föryngra ditt utseende med våra professionella trådlyftsbehandlingar.
          </p>
        </div>
      </header>

      {/* Information Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={threadLift1} alt="Trådlyft" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Trådlyft Behandlingar</h2>
            <p className="info-text">
              Våra trådlyftsbehandlingar är perfekta för dig som vill ha en naturlig lyftning och föryngring utan kirurgi.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Trådlyftsbehandlingar</h2>
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

export default ThreadLift;
