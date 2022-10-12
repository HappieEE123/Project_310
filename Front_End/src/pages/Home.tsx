import { IonContent, IonFab, IonFabButton, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { camera} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState } from 'react';

setupIonicReact({
  mode: 'ios',
});

var beforeChange: number;
export default function Home() {
  // const [text, setData] = useState(window.innerWidth);//not error just 0 makes it disapear
  // function handleResize(){
  //   if(window.innerWidth/window.innerHeight > 10/16)
  //   {
  //     var tmp:number = text;
  //     tmp = window.innerHeight*9/16;
  //     console.log("tmp",tmp)
  //     setData(tmp)  
  //   }
  // }

  // handleResize();
  // window.addEventListener('resize', handleResize); //not posible for loop 
  return (

    <IonPage style={{
      width: Math.min(window.innerHeight * 9 / 16, window.innerWidth), position: 'absolute', left: '50%',
      transform: 'translate(-50%, 0)'
    }}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HappieEE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HappieEE</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* {mywidth} */}
        <ExploreContainer />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerDirection="forward">
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage >

  );

};


