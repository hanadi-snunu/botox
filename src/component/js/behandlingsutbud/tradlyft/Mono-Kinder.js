import React from 'react';

import monoKinderImage from '../../../img/threadlift1.jpg';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
const MonoKinder = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={monoKinderImage}
      title="Mono | Kinder"
      description="Lyft och definiera kinderna med Mono-trådar."
      extraDescription="Monotrådar, tillverkade av det kollagenstimulerande 
      materialet PDO (polydioxanon), används för att lyfta och strama upp huden 
      utan kirurgi. Trådarna sätts in under huden och bryts gradvis ner av kroppen, 
      vilket stimulerar produktionen av kollagen och elastin. Detta bidrar till förbättrad 
      hudelasticitet och fasthet på längre sikt. Behandlingen passar för mindre områden som 
      kinder, hals och marionettlinjer och ger snabb och effektiv förbättring utan lång återhämtningstid.<br /><br />
      Trådlyft rekommenderas inte för personer med hudinfektioner, autoimmuna sjukdomar, blödningsproblem eller gravida kvinnor. 
      Biverkningar, som infektioner, blåmärken, svullnad eller obehag, är vanligtvis milda och tillfälliga."
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris', value: '4100 kr' },
        { label: 'Fördelar', value: 'Ökad fyllighet, förbättrad elasticitet, lyft effekt' },
        { label: 'Rekommenderat för', value: 'Personer med slapp hud eller minskad volym i kindområdet' },
      ]}
      beforeText="Undvik blodförtunnande mediciner och alkohol 24 timmar innan behandlingen."
      afterText="Undvika starkt solljus eller höga temperaturer, samt undvika ansträngande fysisk aktivitet eller tung lyftning. 
För att säkerställa en framgångsrik återhämtning föreslår vi följande träningsprogram: <br />
Första veckan: rekommenderar vi att du undviker träning helt. <br />
Andra veckan: rekommenderar vi lättare träning för att gradvis återgå till din normala aktivitetsnivå. <br />
Tredje veckan: kan du återgå till din normala aktivitet. <br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Mono | Kinder"
    />
  );
};

export default MonoKinder;
