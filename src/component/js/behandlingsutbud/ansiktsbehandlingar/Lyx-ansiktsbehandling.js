import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import lyxAnsikteImage from '../../../img/ansiktsbehandling4.jpg';

const LyxAnsiktsbehandling = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={lyxAnsikteImage}
      title="Lyx Ansiktsbehandling"
      description="En exklusiv behandling som ger din hud lyx och förnyelse."
      extraDescription={`Vill du skämma bort ditt ansikte med hela 75 minuter där vår hudterapeut kan gå igenom 
varje steg grundligt. Garanterat att du får skinande hud efter denna resultat inriktade 
behandling.<br /><br />
I vårat lyx paket kan hudterapeuten använda sig av våra produkter gränslöst och ge din 
hud all kärlek den behöver. Alla steg kan därför maximeras under denna lyxiga 
behandling samt de lite extra fina produkterna för att ge dig bästa möjliga upplevelsen. 
Lyxigare än detta blir det inte!`}
      details={[
        { label: 'Behandlingstid', value: '75 min' },
        { label: 'Pris', value: '1049 kr' },
        { label: 'Fördelar', value: 'Förbättrad hudelasticitet, lyster, avslappning' },
        { label: 'Rekommenderat för', value: 'Alla som vill unna sig en lyxig behandling' },
      ]}
      beforeText="Kom med ren hud och undvik smink för att maximera behandlingen."
      afterText="Återfukta huden och använd solskydd för att bevara resultaten."
      bookLink="/Bokatid"
      bookButtonText="Boka Lyx Ansiktsbehandling"
    />
  );
};

export default LyxAnsiktsbehandling;
