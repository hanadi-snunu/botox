import React from 'react';
import monoSuramungiporImage from '../../../img/threadlift4.jpg';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';

const MonoSuramungipor = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={monoSuramungiporImage}
      title="Mono | Suramungipor"
      description="Lyft och reducera linjer för ett ungdomligare utseende."
      extraDescription="Behandlingen för sura mungipor minskar synligheten av fina linjer och lyfter huden för ett ungdomligare utseende.<br /><br />
      
      Sura mungipor behandlas med monotrådar som stimulerar kollagenproduktionen och 
      förbättrar hudens fasthet och elasticitet. PDO-trådar, som är biologiskt nedbrytbara, 
      sätts in under huden för att lyfta och strama upp huden. Behandlingen är icke-kirurgisk 
      och ger snabb förbättring utan lång återhämtningstid. Resultatet varierar beroende på hudens 
      tillstånd, ålder och antalet trådar som används.<br /><br />
      
      Trådlyft är inte lämpligt för personer med hudinfektioner, autoimmuna sjukdomar, blödningsproblem 
      eller för gravida. Biverkningar som svullnad, blåmärken eller lätt obehag är vanligtvis milda och tillfälliga."
      details={[
        { label: 'Behandlingstid', value: '15 min' },
        { label: 'Pris', value: '1000 kr' },
        { label: 'Fördelar', value: 'Reducerade linjer, förbättrad elasticitet, lyft effekt' },
        { label: 'Rekommenderat för', value: 'Personer med synliga linjer och slapp hud kring mungiporna' },
      ]}
      beforeText="Undvik blodförtunnande mediciner och alkohol minst 24 timmar innan behandlingen."
      afterText="Undvik starkt solljus eller höga temperaturer, samt ansträngande fysisk aktivitet eller tung lyftning. <br />
      För en framgångsrik återhämtning rekommenderar vi följande:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till normal aktivitet.<br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Mono | Suramungipor"
    />
  );
};

export default MonoSuramungipor;
