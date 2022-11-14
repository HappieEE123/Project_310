import {
    IonContent,
    IonRow,
    IonCol,
    IonLabel,
    IonModal,
    IonButtons,
    useIonActionSheet,
    IonProgressBar,
    IonButton,
    IonItem,
    IonInput,
    IonList,
    IonBackButton,
    IonTextarea,
    IonFab,
    IonFabButton,
    IonIcon,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    setupIonicReact
} from '@ionic/react';
import {camera, addOutline, paperPlaneOutline, personCircle} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, {useState} from 'react';
import type {OverlayEventDetail} from '@ionic/core';


setupIonicReact({
    mode: 'ios',
});


export default function Login() {

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


      <IonRow>
        <IonCol>
          <IonIcon
          style={{ fontSize: "100px", color: "#0040ff" }}
          icon={personCircle}
        />
        </IonCol>
      </IonRow>


      <IonRow>
        <IonCol>
          <IonItem>
           <IonLabel position="floating"> Email</IonLabel>
           <IonInput
             type="email"


         >
           </IonInput>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonItem>
           <IonLabel position="floating"> Password</IonLabel>
           <IonInput


         >
           </IonInput>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow>
  <IonCol>
    <p style={{ fontSize: "small" }}>
      By clicking LOGIN you agree to our <a href="#">Policy</a>
    </p>
    <IonButton expand="block" onClick={() => alert('login')}>
      Login
    </IonButton>
    <p style={{ fontSize: "medium" }}>
      Don't have an account? <a href="#">Sign up!</a>
    </p>
  </IonCol>
</IonRow>

      </IonContent >
    </IonPage >

    );
};