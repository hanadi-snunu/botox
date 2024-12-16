// InstantClean.js
import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import instantCleanImage from '../../../img/ansiktsbehandling2.jpg';

const InstantClean = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={instantCleanImage}
      title="Instant Clean"
      description="En djuprengörande behandling som ger huden en frisk känsla."
      extraDescription="Är du ute efter en snabb, djuprengörande behandling? Då är Instant Clean perfekt! 
Under denna behandling får du en effektiv rensning av bland annat porer, döda hudceller
och milijer. Detta är passande för dig som har problematik med djupa porer och även bra 
komplement emellan ansiktsbehandlingar för att underhålla huden så fin och ren som 
möjligt! "
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris', value: '550 kr' },
        { label: 'Fördelar', value: 'Renare hud, minskad oljighet, friskare utseende' },
        { label: 'Rekommenderat för', value: 'Personer med oljig och aknebenägen hud' },
      ]}
      beforeText="Kom gärna osminkad för bästa resultat."
      afterText="Undvik makeup och starka hudprodukter i 24 timmar."
      bookLink="/Bokatid"
      bookButtonText="Boka Instant-Clean" 
    />
  );
};

export default InstantClean;
