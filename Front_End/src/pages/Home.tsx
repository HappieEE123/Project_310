import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

setupIonicReact({
  mode: 'ios',
});

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HappieEE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HappieEE</IonTitle>
          </IonToolbar> */}
        {/* </IonHeader> */}
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
