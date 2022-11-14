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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                            style={{fontSize: "100px", color: "#0040ff"}}
                            icon={personCircle}
                        />
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput type="email" required onIonChange={(e: any) => setEmail(e.target.value)}>
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>g

                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput type="password" required onIonChange={(e: any) => setPassword(e.target.value)}>
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <p style={{fontSize: "small"}}>
                            By clicking Login you agree to our <a href="#">Policy</a>
                        </p>
                        <IonButton expand="block" onClick={() => {
                            console.log({
                                email,
                                password
                            })
                        }}>
                            Login
                        </IonButton>
                        <p style={{fontSize: "medium"}}>
                            Don't have an account? <a href="/workspace/Project_310/Front_End/src/pages/Signup.tsx">Sign Up!</a>
                        </p>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>

    );
};