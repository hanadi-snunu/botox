import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import prxImage from '../../../img/ansiktsbehandling3.jpg'; // Byt till rätt bild

const PRXT33 = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={prxImage}
      title="PRX T-33"
      description="En effektiv behandling som kombinerar peeling och biostimulering för att föryngra huden."
      extraDescription={`Här har vi den berömda ansiktsbehandlingen som gör underverk! Denna behandling ger dig spänst, bättre hudton och lyster, och passar alla hudtyper. Du får resultat direkt efter behandlingen, och det fina med PRX-T33 är att den kan utföras året om eftersom den inte är ljuskänslig. Behandlingen är även långtidsverkande och rekommenderas som en kur på 4 behandlingar under 6 månader med 1 veckas intervall för bästa resultat.
<br /><br />
      Behandlingen inleds med noggrann rengöring och applicering av PRX-T33 i 3–5 lager, där varje lager masseras in manuellt för maximal effekt. Behandlingen avslutas med en återfuktande eftervårdskräm för att stärka hudens naturliga barriär.
<br /><br />
      För det absolut ultimata resultatet rekommenderas även kombination behandlingar. 
Såsom microneedling och profhilo, om du är intresserad av dessa tilläggen erbjuder 
vi det till ett kombinations pris, microneedling för 1000:- tillägg och profhilo 2000:-
tillägg. Detta är för dig som vill maximera både i hudens yta och djup för att få det 
bästa möjliga resultatet! `}
      details={[
        { label: 'Behandlingstid', value: 'Varierar' },
        { label: 'Pris', value: 'Varierar' },
        { label: 'Fördelar', value: 'Reducerar fina linjer, förbättrad elasticitet, naturlig lyster' },
        { label: 'Rekommenderat för', value: 'Trött, åldrande eller skadad hud' },
      ]}
      beforeText="Inför behandlingen behöver du pausa retinol 2 veckor innan och undvika sol 48h 
innan och efter behandlingen. Om du är gravid eller ammande kan du inte utföra 
denna behandling.
"
      afterText="Undvik sol och exfoliering i minst 48 timmar för att skydda huden."
      bookLink="/Bokatid"
      bookButtonText="Boka PRX T-33"
    />
  );
};

export default PRXT33;
