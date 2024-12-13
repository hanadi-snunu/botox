import React from 'react';
import monoOgongImage from '../../../img/threadlift3.jpg';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';

const MonoOgon = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={monoOgongImage}
      title="Mono | Ögon"
      description="Förbättra hudens elasticitet och lyft området kring ögonen."
      extraDescription="Trådlyft för kråksparkar är en effektiv behandling 
      för att minska fina linjer och rynkor runt ögonen, vilket ger en ungdomligare 
      och uppfriskad look. Behandlingen kan även förbättra hudens fasthet och elasticitet över tid.<br /><br />
      
      Med mono/PDO-trådar, som är biologiskt nedbrytbara och kollagenstimulerande, 
      stramas huden upp och lyfts utan kirurgiska ingrepp. PDO-materialet stimulerar 
      hudens naturliga produktion av kollagen och elastin, vilket resulterar i en 
      förbättrad hudstruktur och fasthet. Behandlingen passar mindre områden som ansikte 
      och hals och ger snabba resultat med minimal återhämtningstid. Resultaten varierar 
      beroende på ålder, hudens skick och antalet trådar som används.<br /><br />
      
      Trådlyft är inte lämpligt för personer med hudinfektioner, autoimmuna sjukdomar, 
      blödningsproblem eller gravida. Mild och tillfällig svullnad, blåmärken eller 
      obehag kan förekomma som biverkningar."
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris', value: '3200 kr' },
        { label: 'Fördelar', value: 'Minskade fina linjer, fastare hud, lyft effekt' },
        { label: 'Rekommenderat för', value: 'Personer med slapp hud eller fina linjer kring ögonen' },
      ]}
      beforeText="Undvik blodförtunnande mediciner och koffein 24 timmar innan behandlingen."
      afterText="Undvik starkt solljus eller höga temperaturer, samt ansträngande fysisk aktivitet eller tung lyftning. <br />
      För en framgångsrik återhämtning rekommenderar vi följande:<br />
      - Första veckan: Undvik träning helt.<br />
      - Andra veckan: Lättare träning kan återupptas.<br />
      - Tredje veckan: Återgå till normal aktivitet.<br />"
      bookLink="/Bokatid"
      bookButtonText="Boka Mono | Ögon"
    />
  );
};

export default MonoOgon;
