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


export default function Login() {

    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios.post('https://api.weasoft.com/login/', {
            username,
            password,
        })
            .then(function (response) {
                if (response.data.message) {
                    // redirect to home page
                    history.push('/home')
                }
                console.log(response.data);
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
                            <IonLabel position="floating">Username</IonLabel>
                            <IonInput type="text" required onIonChange={(e: any) => setUsername(e.target.value)}>
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
                        <p style={{fontSize: "small"}}>
                            By clicking Login you agree to our <a href="#">Policy</a>
                        </p>
                        <IonButton expand="block" onClick={() => {
                            // console.log({
                            //     username,
                            //     password
                            // })
                            login();
                        }}>
                            Login
                        </IonButton>
                        <p style={{fontSize: "medium"}}>
                            Don't have an account? <a href="/signup">Sign Up!</a>
                        </p>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};
