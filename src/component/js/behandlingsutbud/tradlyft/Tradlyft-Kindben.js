import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import kindbenImage from '../../../img/threadlift4.jpg'; // Uppdatera med rätt bildfil

const TradlyftKindben = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={kindbenImage}
      title="Trådlyft | Kindben"
      description="Definiera och lyft kindbenen för ett ungdomligare utseende."
      extraDescription="Trådlyft för kindben använder tunna, biologiskt nedbrytbara trådar för att lyfta och strama upp huden runt kindbenen. 
      Behandlingen stimulerar även produktionen av kollagen och elastin, vilket förbättrar hudens fasthet och elasticitet. <br /><br />
      PDO-trådar är en icke-kirurgisk metod som erbjuder en snabb återhämtning och effektiva resultat, vilket skapar en naturlig föryngring av ansiktet. 
      Resultaten varierar beroende på hudens tillstånd, ålder och antalet trådar som används."
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '5700 kr' },
        { label: 'Fördelar', value: 'Förbättrad volym, fastare hud, lyft effekt' },
        { label: 'Rekommenderat för', value: 'Personer med slapp hud eller minskad volym kring kindbenen' },
      ]}
      beforeText="Undvik blodförtunnande mediciner, koffein och alkohol minst 24 timmar innan behandlingen. 
      Kom med ren hud utan smink för bästa resultat."
      afterText="Efter behandlingen bör du undvika starkt solljus, höga temperaturer och ansträngande fysisk aktivitet för att säkerställa optimal läkning. 
      Vi rekommenderar följande återhämtningsprogram:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till din normala aktivitetsnivå.<br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Trådlyft | Kindben"
    />
  );
};

export default TradlyftKindben;
