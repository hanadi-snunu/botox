import React, { useState } from "react";
import hydraFacial1 from "../../../img/hydrafacial1.jpg"; // Byt ut till korrekt bild
import hydraFacial2 from "../../../img/hydrafacial2.jpg"; // Byt ut till korrekt bild
import hydraFacial3 from "../../../img/hydrafacial3.jpg"; // Byt ut till korrekt bild
import ConsultationImage from "../../../img/piccc.jpg"; // Konsultationsbild
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HydraFacial = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
      image: hydraFacial1,
      title: "Standard HydraFacial",
      description: "En klassisk HydraFacial-behandling för ren och återfuktad hud.",
      link: "/Standard-HydraFacial",
    },
    {
      image: hydraFacial2,
      title: "Deluxe HydraFacial",
      description: "En mer avancerad HydraFacial med extra boosters och fördelar.",
      link: "/Deluxe-HydraFacial",
    },
    {
      image: hydraFacial3,
      title: "Platinum HydraFacial",
      description: "Den ultimata HydraFacial-upplevelsen med lymfdränage och intensiv vård.",
      link: "/Platinum-HydraFacial",
    },
    {
      image: hydraFacial1,
      title: "HydraFacial för Gravida",
      description: "En säker och mild HydraFacial anpassad för gravida kvinnor.",
      link: "/HydraFacial-Gravida",
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
      question: "Vad är HydraFacial?",
      answer: "HydraFacial är en behandling som rengör, återfuktar och förbättrar hudens struktur.",
    },
    {
      question: "Passar HydraFacial alla hudtyper?",
      answer: "Ja, HydraFacial är skonsam och kan anpassas för alla hudtyper, även känslig hud.",
    },
    {
      question: "Hur ofta bör jag göra en HydraFacial?",
      answer: "För bästa resultat rekommenderas en behandling var 4-6 vecka.",
    },
    {
      question: "Kan jag göra HydraFacial om jag är gravid?",
      answer: "Ja, vi erbjuder en anpassad HydraFacial-behandling som är säker för gravida.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${hydraFacial2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Hydra Facial</h1>
          <p className="massage-description">
            Upplev en avancerad behandling som rengör, återfuktar och föryngrar huden. Som du kanske redan vet är Hydra facial en revolutionerande behandlig som vi har satsat på att ta in just för dig! <br /><br /> Denna ansiktsbehandlingen ger ett omedelbart syligt och kännbara resultat. Ingen går besviken härifrån efter denna magiska behandlingen, tack vare den icke-invasiv behandlings teckningen som dränerar, djupgör, peelar, återfuktar och slussar in serum på djupet. Som du själv förstår denna behandlingen gör verkligen all jobb åt en för att få det fantastiske ansikts lystert som aldrig förr! 
          </p>
        </div>
      </header>

      {/* Information Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={hydraFacial1} alt="HydraFacial" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Hydra Facial Behandlingar</h2>
            <p className="hydrafacial-info-text">
            I behandlingen utförs olika steg som vi ovan nämnde, men en del av behandlingen är det som kallas för hydradermaraison. 
            Så vad är det? Det är en våt slipning som innebär att man slipar och stimulerar 
            huden med hjälp av vatten, tack vare denna tekniken är därför denna behandlingen 
            mycket skonsam och behaglig som också är anpassningsbar efter alla hud typer och behov! 
            <br /><br />Genom Hydrafacials unika vakuumteknologi lyfter man alla orenheter som talg, porer och döda hudceller. Det häftiga med detta är att du kan se efter behandling allt maskinen har samlat i en behållare med vatten vilket ger en upplevelse om vad den faktiskt har rensat.             
            </p>
             {/* Nytt innehåll från bilden */}

      <h2 className="hydrafacial-info-title">Vad HydraFacial kan göra för dig</h2>
      <ul className="hydrafacial-info-list">
        <li>Jobba på fina linjer och rynkor</li>
        <li>Förbättrar elasticitet och fasthet</li>
        <li>Ger lyster</li>
        <li>Jämnar ut hudton</li>
        <li>Hög talgproduktion och acnebesvärad hy rengörs</li>
        <li>Återställer fuktbalans</li>
        <li>Förminskar förstorade porer</li>
      </ul>

      <h2 className="hydrafacial-info-title">När kan man göra en HydraFacial?</h2>
      <p className="hydrafacial-info-text">
        Det är helt upp till vilket resultat man strävar efter! 
        Är du ute efter att piffa upp din hud inför ett event eller liknande passar det 
        utmärkt just för det omedelbara resultatet i lyster och fukt.<br /><br /> Men HydraFacial är 
        rekommenderat för den som har en problematisk hy att utföra en kur för sedan underhålla 
        som ett tillägg i din hudvårdsrutin för att underhålla det optimala och långvarigt resultatet.
      </p>

      <h2 className="hydrafacial-info-title">Behandlingsplan</h2>
      <ul className="hydrafacial-info-list">
        <li>
          <strong>Steg 1:</strong> Rengöring och exfoliering – Här öppnar man porerna och avlägsnar döda hudceller.
        </li>
        <li>
          <strong>Steg 2:</strong> Kemisk peeling – För att lösa upp smuts använder man sig av glykol och salicylsyra.
        </li>
        <li>
          <strong>Steg 3:</strong> Djuprengöring – Med hjälp av Hydrafacials vakuumteknologi.
        </li>
        <li>
          <strong>Steg 4:</strong> Återfuktning – Slussar in fukt till huden med antioxidanter och hyaluronsyra.
        </li>
      </ul>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">HydraFacial Behandlingar</h2>
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

export default HydraFacial;
