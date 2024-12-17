import React from 'react';
import gravidaImage from '../../../img/hydrafacial2.jpg'; // Byt till korrekt bild
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';

const GravidaHydraFacial = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={gravidaImage}
      title="HydraFacial för Gravida"
      description="En säker och mild HydraFacial-behandling anpassad för gravida kvinnor."
      extraDescription="Hydrafacial funkar även för er blivande mammor! 
      Det är mycket man inte får göra under graviditet men vi har tagit fram en 
      helt egen anpassad behandling för även ta hand om gravidas hy! I denna 
      skräddarsydda behandlingen har vi tagit fram endast de skonsamma teknikerna 
      för att kunna överträffa ett resultat även för dig! <br /><br /> Det som ingår är 
      rengöringsmetoden med hydrafacials teknik och även diamantslipning och 
      portömning vilket rengör din hud noggrant och rensar döda hudceller för 
      verkligen komma åt djupet av din hudbarriär. Sedan får vi in med mask och 
      krämer som även där är valt med omtanke som passar för gravida kvinnor, 
      under denna tiden för att toppa med lite extra lys erbjuds det hårbottensmassage! "
      details={[
        { label: 'Behandlingstid', value: '45 min' },
        { label: 'Pris', value: '1195 kr' },
        { label: 'Fördelar', value: 'Mild återfuktning, reducerad svullnad, lugnande effekt' },
        { label: 'Rekommenderat för', value: 'Gravida som vill ha en skonsam ansiktsbehandling' },
      ]}
      beforeText="Informera din terapeut om din graviditet för en skräddarsydd behandling."
      afterText="Använd SPF och milda hudvårdsprodukter efter behandlingen."
      bookLink="/Bokatid"
      bookButtonText="Boka HydraFacial för Gravida"
    />
  );
};

export default GravidaHydraFacial;
