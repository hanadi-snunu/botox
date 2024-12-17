import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import microneedlingImage from '../../../img/ansiktsbehandling4.jpg'; // Byt till rätt bild

const Microneedling = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={microneedlingImage}
      title="Microneedling"
      description="En behandling som stimulerar hudens kollagenproduktion och förbättrar hudens struktur."
      extraDescription={`Microneedling är en populär behandling som 
        stimulerar kollagenproduktionen och förbättrar hudens struktur 
        och kvalitet. Genom att skapa mikrokanaler i huden behandlas problem 
        som akneärr, fina linjer, förstorade porer och pigmentfläckar. 
        Behandlingen resulterar i en föryngrad hud med ökad elasticitet 
        och lyster. Näringsämnen kan också slussas in för att maximera effekten.<br /><br />

        Att tänka på:<br /><br />
        Behandlingen kan kännas något obehaglig trots bedövning, 
        och huden kan bli röd och känslig efteråt. SPF rekommenderas 
        för att skydda huden. Behandlingen är inte lämplig för gravida 
        eller personer med aktiv akne eller hudsjukdomar.<br /><br />

      Behandlingsområden:
 <ul>
          <li>Ansikte</li>
          <li>Hals</li>
          <li>Dekoltage</li>
         
        </ul>
`}
      details={[
        { label: 'Behandlingstid', value: 'Varierar' },
        { label: 'Pris', value: 'Varierar' },
        { label: 'Fördelar', value: 'Ökad kollagenproduktion, jämnare hudton, minskade ärr' },
        { label: 'Rekommenderat för', value: 'Alla hudtyper som vill förbättra hudens struktur' },
      ]}
      beforeText="Undvik direkt solljus och exfoliering i 24 timmar innan behandlingen."
      afterText="Återfukta huden och använd solskydd för att skydda och bevara resultaten."
      bookLink="/Bokatid"
      bookButtonText="Boka Microneedling"
    />
  );
};

export default Microneedling;
