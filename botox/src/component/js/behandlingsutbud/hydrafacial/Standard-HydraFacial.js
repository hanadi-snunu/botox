import React from 'react';


import standardImage from '../../../img/hydrafacial2.jpg'; // Byt till korrekt bild
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';

const StandardHydraFacial = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={standardImage}
      title="Standard HydraFacial"
      description="En klassisk HydraFacial-behandling som rengör, återfuktar och förbättrar hudens struktur."
      extraDescription="I vår fina standardbehandling får du 45 minuter 
      av rengöring, exfoliering, avlägsna orenheter och åter fuktar huden 
      med hjälp av Hydrafacials tekniker. I behandlingen ingår AHA/BHA och 
      peptider som passar just din hud! Detta är ett perfekt val för dig som 
      vill ha en snabb men effektiv behandling som ger dig allt från ren till 
      återfuktad hy!"
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '1195 kr' },
        { label: 'Fördelar', value: 'Rengöring, återfuktning, förbättrad hudstruktur' },
        { label: 'Rekommenderat för', value: 'Alla hudtyper som vill ha en snabb och effektiv behandling' },
      ]}
      beforeText="Tvätta ansiktet med en mild rengöring innan behandlingen."
      afterText="Undvik att använda makeup direkt efter behandlingen för bästa resultat."
      bookLink="/Bokatid"
      bookButtonText="Boka Standard HydraFacial"
    />
  );
};

export default StandardHydraFacial;
