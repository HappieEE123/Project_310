import { IonContent, IonModal, IonButtons, useIonActionSheet, IonProgressBar, IonButton, IonItem, IonInput, IonList, IonBackButton, IonTextarea, IonFab, IonFabButton, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { camera, addOutline, paperPlaneOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState } from 'react';
import type { OverlayEventDetail } from '@ionic/core';

setupIonicReact({
  mode: 'ios',
});


export default function Home() {

  return (
    <IonPage style={{
      width: Math.min(window.innerHeight * 9 / 16, window.innerWidth), position: 'absolute', left: '50%',
      transform: 'translate(-50%, 0)'
    }}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


      </IonContent >
    </IonPage >

  );

};
