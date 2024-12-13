import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import doubleChinImage from '../../../img/threadlift2.jpg'; // Uppdatera med rätt bildfil

const TradlyftDubbelhaka = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={doubleChinImage}
      title="Trådlyft | Dubbelhaka"
      description="Lyft och definiera hakan med en effektiv trådlyftsbehandling."
      extraDescription="Trådlyft för dubbelhaka är en icke-kirurgisk metod som lyfter huden och minskar synligheten av dubbelhaka. 
      Behandlingen använder kollagenstimulerande PDO-trådar som också förbättrar hudens elasticitet och fasthet på lång sikt. <br /><br />
      PDO-trådar är biologiskt nedbrytbara och sätts in under huden för att ge stöd och lyft, vilket resulterar i ett naturligt och ungdomligt utseende. 
      Metoden är snabb och kräver ingen lång återhämtningstid, vilket gör den idealisk för mindre områden som ansikte och hals. 
      Resultaten varierar beroende på ålder, hudens skick och antalet trådar som används."
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '7050 kr' },
        { label: 'Fördelar', value: 'Minskad dubbelhaka, förbättrad hudelasticitet, lyft och definierad haka' },
        { label: 'Rekommenderat för', value: 'Personer med framträdande dubbelhaka eller slapp hud under hakan' },
      ]}
      beforeText="Inför behandlingen bör du undvika blodförtunnande mediciner, koffein och alkohol 24 timmar innan för att minimera risken för blåmärken och svullnad. 
      Kom till behandlingen med ren hud utan smink."
      afterText="Efter behandlingen är det viktigt att undvika starkt solljus, höga temperaturer och ansträngande fysisk aktivitet för att säkerställa optimal läkning. 
      Vi rekommenderar följande återhämtningsprogram:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till din normala aktivitetsnivå."
      bookLink="/Bokatid"
      bookButtonText="Boka Trådlyft | Dubbelhaka"
    />
  );
};

export default TradlyftDubbelhaka;
