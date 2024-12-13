import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import halslyftImage from '../../../img/threadlift3.jpg'; // Uppdatera med rätt bildfil

const TradlyftHalslyft = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={halslyftImage}
      title="Trådlyft | Halslyft"
      description="Lyft och förbättra hudens elasticitet på halsen för en ungdomlig look."
      extraDescription="Trådlyft för halsen är en icke-kirurgisk metod som lyfter huden och minskar synliga rynkor och fina linjer. 
      Behandlingen använder PDO-trådar som stimulerar produktionen av kollagen och elastin för att förbättra hudens fasthet och elasticitet. <br /><br />
      PDO-trådar är biologiskt nedbrytbara och fungerar som stöd för huden, vilket ger en naturligt föryngrande effekt. 
      Behandlingen är snabb, effektiv och kräver minimal återhämtningstid. Resultaten varierar beroende på hudens tillstånd, ålder och antalet trådar som används."
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '5700 kr' },
        { label: 'Fördelar', value: 'Reducerade rynkor, förbättrad elasticitet, lyft halskontur' },
        { label: 'Rekommenderat för', value: 'Personer med slapp hud eller rynkor på halsen' },
      ]}
      beforeText="Inför behandlingen bör du undvika blodförtunnande mediciner, koffein och alkohol 24 timmar innan för att minimera risken för blåmärken och svullnad. 
      Kom till behandlingen med ren hud utan smink."
      afterText="Efter behandlingen är det viktigt att undvika starkt solljus, höga temperaturer och ansträngande fysisk aktivitet för att säkerställa optimal läkning. 
      Vi rekommenderar följande återhämtningsprogram:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till din normala aktivitetsnivå."
      bookLink="/Bokatid"
      bookButtonText="Boka Trådlyft | Halslyft"
    />
  );
};

export default TradlyftHalslyft;
