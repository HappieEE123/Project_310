import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonProgressBar,
  IonTextarea,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  useIonActionSheet
} from '@ionic/react';
import { addOutline, camera, paperPlaneOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState } from 'react';
import axios from "axios";

setupIonicReact({
  mode: 'ios',
});

// var beforeChange: number;
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
  var file: File; //https://stackoverflow.com/questions/51722363/create-file-object-type-in-typescript
  const [isOpen, setIsOpen] = useState(false);
  const qID = Math.round(Math.random()) +1
  const [openQuestion, setopenQuestion] = useState(false);
  // handleResize();
  // window.addEventListener('resize', handleResize); //not posible for loop
  const [present] = useIonActionSheet();
  // const [result, setResult] = useState<OverlayEventDetail>();

  function onFileChanged(event: React.ChangeEvent<HTMLInputElement>) {
    file = event.target.files![0];
    const url = URL.createObjectURL(file);
    console.log(url);
    document.getElementById("UploadBtn")!.innerHTML = `<img src=${url} />`
  }

  async function popup() {
    // var url = 'https://raw.githubusercontent.com/Ionic/Ionic/master
    present({
      header: 'Upload An Image',
      // subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            document.getElementById("fileInputC")!.click();
          },
        },
        {
          text: 'Gallery',
          handler: () => {
            document.getElementById("fileInputG")!.click();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
      // onDidDismiss: ({ detail }) => setResult(detail),
    })
  }
  function checkAns(e: any)
  {
    console.log(e.target.id)
    axios({
      method: 'get',
      url: `https://api.weasoft.com/check?qID=${qID}&ans=${e.target.id}`,
    })
      .then(function (response) {
        alert(response.data)
      });

      axios.post('https://api.weasoft.com/sendSMS', {
        qID: qID,
        number: (document.getElementById("number") as HTMLInputElement).value
      })

  }

  function send() {

    // https://betterprogramming.pub/a-complete-guide-of-file-uploading-in-javascript-2c29c61336f5
    let formData = new FormData();
    formData.set('file', file!);

    //https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects

    formData.append("file", file);
    formData.append("description", (document.getElementById("description") as HTMLInputElement).value);
    const request = new XMLHttpRequest();
    request.open("POST", "https://api.weasoft.com/post");

    request.addEventListener("readystatechange", () => {
      console.log(request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        alert(`The happiness score is ${Math.round(JSON.parse(request.responseText).score * 1000) / 10}`);
        if (Math.round(JSON.parse(request.responseText).score * 1000) / 10 > 50) {
          alert("Looks like you are happy! And I am here to make you sad! Try to solve this ochem problem!")
          setopenQuestion(true);
          
        }
      } else if (request.readyState === 4) {
        console.log("could not fetch the data");
      }
    });

    request.send(formData);

  }
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
            <IonIcon icon={camera} onClick={() => setIsOpen(true)}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start" >
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
              <IonTitle>Upload A New Photo</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <form>
              <IonList>
                {/*
                <IonItem>
                  <IonInput placeholder="Title" id="title"></IonInput>
                </IonItem> */}

                <IonItem>
                  <IonTextarea autoGrow={true} spellcheck={true} placeholder="Description" id="description"></IonTextarea>
                </IonItem>

                <input type="file" accept="image/*" style={{ display: "none" }} id="fileInputC" capture name="Camera" onChange={onFileChanged}></input>
                <input type="file" accept="image/*" style={{ display: "none" }} id="fileInputG" name="Gallery" onChange={onFileChanged}></input>
                {/* style="display:none;" id=fileInputC capture="camera" #fileInputC name="Camera" (change)="onFileChanged($event)"> */}
                {/* <input type="file" accept="image/*"></input> */}
                {/* </input> style="display:none;" id=fileInputG name="Gallery" (change)="onFileChanged($event)"> */}
                <section>
                  <IonButton id="UploadBtn" style={{ height: "80px", width: "80px" }} color="light" onClick={popup}>
                    {/* (click)="presentActionSheet()" */}
                    <IonIcon icon={addOutline}></IonIcon>
                  </IonButton>
                  <p>Only jpeg and png allowed.</p>
                  <br />
                  <IonButton color="success" expand="block" id="send" onClick={send}>
                    {/* (click)="sendout();" */}
                    <IonIcon icon={paperPlaneOutline}></IonIcon>
                    Send Out
                  </IonButton>
                  <IonProgressBar type="indeterminate" style={{ visibility: "hidden" }} id="loading"></IonProgressBar>
                </section>

              </IonList>
            </form>
          </IonContent>
        </IonModal>

        <IonModal isOpen={openQuestion}>
          <IonContent>
          <p>Original Question Made by the same author as the app. (He thinks OChem is hard so he pass the pain to the users)</p>
          <img src={"https://api.weasoft.com/questions/"+qID}/>
          If you want a copy of this question, please put your number here
          <input type="number" id="number"></input>
      <IonButton shape="round" id="A" onClick={checkAns}>A</IonButton>
      <IonButton shape="round" id="B" onClick={checkAns}>B</IonButton>
      <IonButton shape="round" id="C" onClick={checkAns}>C</IonButton>
      <IonButton shape="round" id="D" onClick={checkAns}>D</IonButton>
      </IonContent> 
        </IonModal>
      </IonContent >
    </IonPage >

  );

};


