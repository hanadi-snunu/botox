import monoNasolabialaImage from '../../../img/threadlift2.jpg';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import React from 'react';

const MonoNasolabiala = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={monoNasolabialaImage}
      title="Mono | Nasolabiala"
      description="Reducerar synligheten av nasolabiala veck och förbättrar hudens elasticitet."
      extraDescription="PDO-trådar för 
      Nasolabialvecken är en effektiv behandling för att minska fina linjer och djupet av veck mellan näsvingen och mungipan.<br /><br />
      
      Behandlingen använder kollagenstimulerande monotrådar av polydioxanon (PDO), 
      ett biologiskt nedbrytbart material som gradvis löses upp i kroppen. PDO-trådarna 
      stimulerar kollagen- och elastinproduktionen, vilket resulterar i förbättrad hudelasticitet 
      och fasthet över tid. Metoden är icke-kirurgisk och används för att behandla områden som 
      ansikte, hals, marionettlinjer och nasolabiala veck, med minimal återhämtningstid och 
      snabba resultat. Behandlingen lyfter och stramar upp huden, vilket ger ett föryngrat 
      utseende. Resultaten varierar beroende på individens ålder, hudens skick och antalet 
      trådar som används.<br /><br />
      
      Viktigt att veta: Trådlyft rekommenderas inte för personer med hudinfektioner, 
      autoimmuna sjukdomar, blödningsproblem eller gravida kvinnor. Mildare biverkningar 
      som blåmärken, svullnad eller obehag kan förekomma, men dessa är vanligtvis tillfälliga.<br /><br />"
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris', value: '2500 kr' },
        { label: 'Fördelar', value: 'Minskade veck, förbättrad hudelasticitet, jämnare hudton' },
        { label: 'Rekommenderat för', value: 'Personer med framträdande nasolabiala veck' },
      ]}
      beforeText="Undvik blodförtunnande mediciner och alkohol minst 24 timmar före behandlingen."
      afterText="Undvik starkt solljus och intensiv fysisk aktivitet i 48 timmar efter behandlingen.<br />
För en optimal återhämtning rekommenderar vi följande:<br />
- Första veckan: Undvik träning helt.<br />
- Andra veckan: Lätt träning för gradvis återgång till din normala aktivitetsnivå.<br />
- Tredje veckan: Du kan återgå till dina vanliga aktiviteter.<br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Mono | Nasolabiala"
    />
  );
};

export default MonoNasolabiala;
