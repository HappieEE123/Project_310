import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    setupIonicReact
} from '@ionic/react';
import {personCircle} from 'ionicons/icons';
import './Home.css';
import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom'


setupIonicReact({
    mode: 'ios',
});


export default function Signup() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = () => {
        axios.post('https://api.weasoft.com/signup/', {
            username,
            password,
            'phone_email': email
        })
            .then(function (response) {
                if (response.status == 200) {
                    // redirect to home page
                    history.push('/home')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <IonPage style={{
            width: Math.min(window.innerHeight * 9 / 16, window.innerWidth), position: 'absolute', left: '50%',
            transform: 'translate(-50%, 0)'
        }}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
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
                            
                            <IonLabel position="floating">First Name</IonLabel>
                            <IonInput type="text" required onIonChange={(e: any) => setFirstName(e.target.value)}>
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Last Name</IonLabel>
                            <IonInput type="text" required onIonChange={(e: any) => setLastName(e.target.value)}>
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Username</IonLabel>
                            <IonInput type="text" required onIonChange={(e: any) => setUserName(e.target.value)}>
                            </IonInput>
                        </IonItem>
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
                </IonRow>

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
                            By clicking Sign Up you agree to our <a href="#">Policy</a>
                        </p>
                        <IonButton expand="block" onClick={() => {
                            // console.log({
                            //     firstName,
                            //     lastName,
                            //     username,
                            //     email,
                            //     password
                            // })
                            signup();
                        }}>
                            Sign Up
                        </IonButton>
                        <p style={{fontSize: "medium"}}>
                            Already have an account? <a href="/login">Login!</a>
                        </p>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>

    );
};
