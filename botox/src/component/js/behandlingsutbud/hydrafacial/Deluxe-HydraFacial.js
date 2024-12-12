import React from 'react';
import beluxImage from '../../../img/hydrafacial2.jpg'; // Byt till korrekt bild
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';

const DeluxHydraFacial = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={beluxImage}
      title="Deluxe Hydra Facial"
      description="En lyxig Hydra Facial-behandling med extra boosters för maximal återfuktning och hudförbättring."
      extraDescription="Här riktar vi in oss lite djupare i din hud, önskar 
      du dig ett extra boost så är deluxe passande för dig. Det ingår såsom 
      rengöring, exfoliering, portömning och återfuktande egenskaper, allt är 
      anpassat direkt till din huds behov. Som tillägg i denna behandlingen får man
       avslutningsvis LED-ljus terapi som stimulerar huden egna kollagenproduktion 
       vilket lämnar dig med ett fantastiskt resultat framöver!"
      details={[
        { label: 'Behandlingstid', value: '60 min' },
        { label: 'Pris', value: '1500 kr' },
        { label: 'Fördelar', value: 'Reducerar fina linjer, förbättrad elasticitet, jämnare hudton' },
        { label: 'Rekommenderat för', value: 'Alla hudtyper som behöver extra vård och återfuktning' },
      ]}
      beforeText="Undvik starka produkter och exfoliering i 24 timmar innan behandlingen."
      afterText="Skydda huden med SPF och undvik direkt sol i 48 timmar efter behandlingen."
      bookLink="/Bokatid"
      bookButtonText="Boka Deluxe HydraFacial"
    />
  );
};

export default DeluxHydraFacial;
