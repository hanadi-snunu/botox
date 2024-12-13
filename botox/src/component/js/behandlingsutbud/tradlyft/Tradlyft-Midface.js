import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import midfaceImage from '../../../img/threadlift2.jpg'; // Uppdatera med rätt bildfil

const TradlyftMidface = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={midfaceImage}
      title="Trådlyft | Midface"
      description="Föryngra och förbättra konturerna i ansiktets mittparti."
      extraDescription="Trådlyft för midface är en effektiv behandling som reducerar nasolabiala veck och lyfter kindområdet för att ge en mer ungdomlig framtoning. <br /><br />
      Genom att använda biologiskt nedbrytbara trådar stimuleras kollagen- och elastinproduktionen, vilket förbättrar hudens fasthet och elasticitet. 
      Behandlingen är icke-kirurgisk och passar för att minimera jowls, återställa ansiktskonturer och ge en jämnare hudstruktur. 
      Resultaten kan variera beroende på hudens tillstånd, ålder och antalet trådar som används."
      details={[
        { label: 'Behandlingstid', value: '60 min' },
        { label: 'Pris', value: '15 300 kr' },
        { label: 'Fördelar', value: 'Reducerade veck, fastare hud, förbättrade konturer' },
        { label: 'Rekommenderat för', value: 'Personer med nasolabiala veck eller slapp hud i kindområdet' },
      ]}
      beforeText="Undvik blodförtunnande mediciner, koffein och alkohol minst 24 timmar innan behandlingen. 
      Kom med ren hud utan smink för bästa resultat."
      afterText="Efter behandlingen bör du undvika starkt solljus, höga temperaturer och ansträngande fysisk aktivitet för att säkerställa optimal läkning. 
      Vi rekommenderar följande återhämtningsprogram:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till din normala aktivitetsnivå.<br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Trådlyft | Midface"
    />
  );
};

export default TradlyftMidface;
