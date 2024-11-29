import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import kemiskPeelImage from '../../../img/ansiktsbehandling2.jpg';

const KemiskPeel = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={kemiskPeelImage}
      title="Kemisk Peeling"
      description="En behandling som förnyar huden genom att exfoliera och förbättra hudens textur och lyster."
      extraDescription="Kemisk peeling är idealisk för att reducera fina linjer, akneärr och ojämn hudton."
      details={[
        { label: 'Behandlingstid', value: '60 min' },
        { label: 'Pris', value: '700 kr' },
        { label: 'Fördelar', value: 'Jämnare hudton, reducerade ärr, föryngring' },
        { label: 'Rekommenderat för', value: 'Alla som vill förbättra hudens textur och lyster' },
      ]}
      beforeText="Undvik starka produkter och direkt sol några dagar före behandlingen."
      afterText="Använd solskydd och återfuktande produkter för att skydda huden efter behandlingen."
      bookLink="/Bokatid"
      bookButtonText="Boka Kemisk Peeling" 
    />
  );
};

export default KemiskPeel;
