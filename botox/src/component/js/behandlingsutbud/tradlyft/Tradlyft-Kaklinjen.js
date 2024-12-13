import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import kaklinjenImage from '../../../img/threadlift4.jpg'; // Uppdatera med rätt bildfil

const TradlyftKaklinjen = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={kaklinjenImage}
      title="Trådlyft | Käklinjen"
      description="Lyft och strama upp huden för en definierad och ungdomlig käklinje."
      extraDescription="Trådlyft för käklinjen är en effektiv behandling för att lyfta och strama upp huden kring käklinjen och hakan. <br /><br />
      PDO-trådar stimulerar produktionen av kollagen och elastin, vilket bidrar till förbättrad hudelasticitet och fasthet. 
      Behandlingen är icke-kirurgisk och erbjuder en snabb återhämtning samtidigt som den skapar en naturligt föryngrande effekt. 
      Resultaten varierar beroende på hudens tillstånd, ålder och antalet trådar som används."
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '9500 kr' },
        { label: 'Fördelar', value: 'Definierad käklinje, förbättrad hudfasthet, lyft effekt' },
        { label: 'Rekommenderat för', value: 'Personer med slapp hud eller odefinierad käklinje' },
      ]}
      beforeText="Inför behandlingen bör du undvika blodförtunnande mediciner, koffein och alkohol minst 24 timmar innan för att minimera risken för blåmärken och svullnad. 
      Kom till behandlingen med ren hud utan smink."
      afterText="Efter behandlingen är det viktigt att undvika starkt solljus, höga temperaturer och ansträngande fysisk aktivitet för att säkerställa optimal läkning. 
      Vi rekommenderar följande återhämtningsprogram:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till din normala aktivitetsnivå."
      bookLink="/Bokatid"
      bookButtonText="Boka Trådlyft | Käklinjen"
    />
  );
};

export default TradlyftKaklinjen;
