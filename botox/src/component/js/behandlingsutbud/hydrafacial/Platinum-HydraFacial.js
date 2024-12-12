import React from 'react';


import platinumImage from '../../../img/hydrafacial3.jpg'; // Byt till korrekt bild
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';

const PlatinumHydraFacial = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={platinumImage}
      title="Platinum Hydra Facial"
      description="Den mest avancerade HydraFacial-upplevelsen som inkluderar lymfdränage och intensiva behandlingar."
      extraDescription="I vårt otroliga platinum paket erbjuder vi 
      maximerat av allt som Hydrafacial kan uppnå, vill du äntligen 
      satsa på din hy så är detta ett utmärkt val! <br /><br />Det som ingår i denna 
      behandling som gör den extra bra utöver våra andra paket är den 
      fantastiska lymfdränagemassage, den sätter igång hudens lymfsystem 
      samt att man får en mycket mer djupgående, grundlig och resultatinriktad 
      behandling. Här skräddarsyr vi efter din hudtyp och behov genom att förse 
      med näringsämnen, peptider, hyaluronsyra och antioidanter!"
      details={[
        { label: 'Behandlingstid', value: '75 min' },
        { label: 'Pris', value: '2000 kr' },
        { label: 'Fördelar', value: 'Ökad cirkulation, reducerad svullnad, intensiv återfuktning' },
        { label: 'Rekommenderat för', value: 'De som söker en avancerad och fullständig behandling' },
      ]}
      beforeText="Undvik alkohol och exfolierande produkter innan behandlingen."
      afterText="Använd milda hudvårdsprodukter och återfuktande krämer efter behandlingen."
      bookLink="/Bokatid"
      bookButtonText="Boka Platinum Hydra Facial"
    />
  );
};

export default PlatinumHydraFacial;
