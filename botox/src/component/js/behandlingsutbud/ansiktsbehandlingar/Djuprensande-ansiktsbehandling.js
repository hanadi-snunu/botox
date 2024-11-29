import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import djuprensandeImage from '../../../img/ansiktsbehandling3.jpg'; // Byt ut till rätt bildfil

const DjuprensandeAnsiktsbehandling = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={djuprensandeImage}
      title="Djuprensande Ansiktsbehandling"
      description="En djupverkande behandling som tar bort orenheter och ger huden en fräsch känsla."
      extraDescription={`Har du en problematisk hy? Som du känner att du inte får bukt på? Här är 
        en perfekt behandling för dig som hjälper dig att få en mer balanserad och återställd hy!<br /><br />
      I denna behandling får du allt och lite till. Vår hudterapeut kommer erbjuda dig en 
      genomgående hudanalys som kommer hjälpa dig i din vardag att behålla en frisk hy. Därefter 
      ingår produkter som är anpassade efter din hudtyp och dina besvär. Utöver att man aktivt genomför 
      en behandling som är inriktad speciellt efter dina behov får du även en avkopplande massage och ansiktsmask!`}
      details={[
        { label: 'Behandlingstid', value: '75 min' },
        { label: 'Pris', value: '850 kr' },
        { label: 'Fördelar', value: 'Rengöring på djupet, reducerade porer, förbättrad hudstruktur' },
        { label: 'Rekommenderat för', value: 'Fet, blandad eller acnebenägen hud' },
      ]}
      beforeText="Undvik makeup och exfoliering minst 24 timmar innan behandlingen."
      afterText="Återfukta huden och undvik stark sol i minst 48 timmar efter behandlingen."
      bookLink="/Bokatid"
      bookButtonText="Boka Djuprensande Ansiktsbehandling"
    />
  );
};

export default DjuprensandeAnsiktsbehandling;

