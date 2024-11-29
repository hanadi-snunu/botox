import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import instantGlowImage from '../../../img/ansiktsbehandling2.jpg';

const InstantGlow = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={instantGlowImage}
      title="Instant Glow"
      description="En behandling som ger huden omedelbar lyster och en strålande glöd."
      extraDescription="Denna behandling har vi tagit fram för att effektivisera och fokusera på att återfukta 
huden. Här jobbar man med aktiva ingredienser för att verkligen jobba på huden både 
från djupet men även ytligt för bästa resultat. Instant glow ger dig ett fantastisk fint lyster 
och glans som passar utmärkt för dig som ska ha snabbt resultat inför ett event eller 
bara saknar det där extra!"
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '500 kr' },
        { label: 'Fördelar', value: 'Omedelbar lyster, återfuktning, friskare hudton' },
        { label: 'Rekommenderat för', value: 'Alla som vill ha en snabb huduppfräschning' },
      ]}
      beforeText="Kom gärna osminkad och återfukta huden innan behandlingen."
      afterText="Använd milda hudprodukter och undvik direkt sol under 24 timmar."
      bookLink="/Bokatid"
      bookButtonText="Boka Instant-Glow" 
    />
  );
};

export default InstantGlow;
