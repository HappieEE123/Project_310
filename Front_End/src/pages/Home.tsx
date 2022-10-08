import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState } from 'react';

setupIonicReact({
  mode: 'ios',
});

var beforeChange: number;
export default function Home() {
  const [mywidth, setData] = useState(window.innerWidth);//not error just 0 makes it disapear
  // function handleResize(){
  //   if(window.innerWidth/window.innerHeight > 10/16)
  //   {
  //     var tmp:number = mywidth;
  //     tmp = window.innerHeight*9/16;
  //     console.log("tmp",tmp)
  //     setData(tmp)  //https://github.com/ReactJS-Concepts/ReactJS-Concepts/blob/main/reactjs-concepts/src/Code/Concepts/DataBinding/OneWayDataBinding.jsx
  //     //find the error too many rendering self call kinda
  //   }
  //   else{
  //     // mywidth = window.innerWidth;
  //     // setData(mywidth)
  //   }

  // }

  // handleResize();
  // window.addEventListener('resize', handleResize); //not posible for loop 
  return (
      <IonPage style={{ width: Math.min(window.innerHeight * 9 / 16, window.innerWidth) }}>
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
          {/* {mywidth} */}
          <ExploreContainer />
        </IonContent>
      </IonPage>
  );

};


