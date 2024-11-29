import React from 'react';
import dermaplaningImage from '../../../img/ansiktsbehandling2.jpg';
import CommonTreatmentPage from './CommonTreatmentPage';


const Dermaplaning = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={dermaplaningImage}
      title="Dermaplaning"
      description="En avancerad behandling som avlägsnar döda hudceller och fina hårstrån för en slätare och klarare hud."
      extraDescription="Vill du också bli av med fjun och oönskat hår i ansiktet? Då passar denna behandling 
dig, här expolierar man ansiktet hår och hudceller för att få igång cellförnyelsen. Detta 
gör man via ett skalpellblad som sedan i sin tur ger dig en fantastisk fin hudbas samt 
lyster!
Rekommenderat antalet behandlingar är var 3-5 veckor för att bibehålla samma resultat.
"
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '600 kr' },
        { label: 'Fördelar', value: 'Slät hud, förbättrad textur, ökad lyster' },
        { label: 'Rekommenderat för', value: 'Alla som vill ha en jämnare och klarare hud' },
      ]}
      beforeText="Undvik exfolierande produkter och direkt sol före behandlingen."
      afterText="Undvik aktiva ingredienser (AHA, BHA, Retinol) i en vecka efter behandling. Undvik sol, 
intensiv träning, bastu och hög värme i 48h efter behandling. Huden kan vara röd och 
knottrig efter behandling, använd då mild rengöring, en återfuktande kräm samt undvik 
röra huden närmsta timmarna."
      bookLink="/Bokatid"
      bookButtonText="Boka Dermaplaning" 
    />
  );
};

export default Dermaplaning;

