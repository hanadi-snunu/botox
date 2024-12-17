import monoMarionettlinjerImage from '../../../img/threadlift1.jpg';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import React from 'react';


const MonoMarionettlinjer = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={monoMarionettlinjerImage}
      title="Mono | Marionettlinjer"
      description="Minska djupa linjer och förbättra hudens elasticitet."
      extraDescription="Behandlingen är utmärkt för att minska 
      synligheten av marionettlinjer, linjer som sträcker sig från mungipan ner längs käklinjen.<br /><br />
      Marionettlinjer behandlas med kollagenstimulerande 
      monotrådar som hjälper till att lyfta huden och reducera fina linjer. 
      PDO (polydioxanon) är ett lösligt material som gradvis bryts ner av kroppen 
      och stimulerar kollagen- och elastinproduktionen. Detta bidrar till förbättrad 
      hudelasticitet och fasthet. Behandlingen är icke-kirurgisk och passar mindre områden 
      som ansikte, hals och marionettlinjer. Den ger snabba resultat utan lång återhämtningstid 
      och kan förbättra hudens utseende, vilket ger ett mer ungdomligt uttryck. Resultaten varierar 
      beroende på ålder, hudens tillstånd och antalet trådar som används.<br /><br />

Trådlyft rekommenderas inte för personer med hudinfektioner, autoimmuna sjukdomar, 
blödningsproblem eller gravida kvinnor. Biverkningar, såsom blåmärken, svullnad eller lätt 
obehag, är vanligtvis milda och tillfälliga."
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris', value: '3200 kr' },
        { label: 'Fördelar', value: 'Minskade linjer, jämnare hudstruktur, föryngrad look' },
        { label: 'Rekommenderat för', value: 'Personer med framträdande linjer kring mungiporna' },
      ]}
      beforeText="Undvik blodförtunnande mediciner och koffein 24 timmar innan behandlingen."
      afterText="Undvik starkt solljus eller höga temperaturer, samt undvika ansträngande fysisk aktivitet eller tung lyftning. <br />
För att säkerställa en framgångsrik återhämtning föreslår vi följande träningsprogram:<br />
- Första veckan: rekommenderar vi att du undviker träning helt.<br />
- Andra veckan: rekommenderar vi lättare träning för att gradvis återgå till din normala aktivitetsnivå.<br />
- Tredje veckan: kan du återgå till din normala aktivitet.<br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Mono | Marionettlinjer"
    />
  );
};

export default MonoMarionettlinjer;
