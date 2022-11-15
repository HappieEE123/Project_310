import React from 'react';
import {IonItem, IonList, IonSelect, IonSelectOption} from '@ionic/react';

function popup() {
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder="Select A Source">
          <IonSelectOption value="Camera">Oranges</IonSelectOption>
          <IonSelectOption value="Gallery">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default popup;
