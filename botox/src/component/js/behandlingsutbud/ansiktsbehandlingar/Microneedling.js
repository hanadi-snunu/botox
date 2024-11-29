import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import microneedlingImage from '../../../img/ansiktsbehandling4.jpg'; // Byt till rätt bild

const Microneedling = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={microneedlingImage}
      title="Microneedling"
      description="En behandling som stimulerar hudens kollagenproduktion och förbättrar hudens struktur."
      extraDescription={`Microneedling skapar mikrokanaler med små nålar i det översta hudlagret. 
Behandlingen stimulerar blodcirkulationen och bildandet av kollagen, vilket har en 
föryngrande effekt på hela hudens kvalitet och utseende. Behandlingen kan också 
användas för att slussa ner olika verksamma produkter, för en större effekt som 
jämnar ut och stärker hela hudytan.<br /><br />

      Behandlingen kan användas för att behandla en mängd olika hudproblem, bland 
annat dessa nedan:
 <ul>
          <li>Ärr</li>
          <li>Akne</li>
          <li>Pigmenteringar</li>
          <li>Rosacea</li>
          <li>Strier</li>
          <li>Lyster, fukt</li>
        </ul>
`}
      details={[
        { label: 'Behandlingstid', value: '60 min' },
        { label: 'Pris', value: '1500 kr' },
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
