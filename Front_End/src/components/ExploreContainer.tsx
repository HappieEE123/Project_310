import './ExploreContainer.css';
import Card from "./Card"
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/bundle";
// https://codesandbox.io/s/10st98?file=/src/App.jsx:83-134
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, cellular } from 'ionicons/icons';
import { faker } from '@faker-js/faker';


interface ContainerProps { }

var vertical: Boolean = true;

const ExploreContainer: React.FC<ContainerProps> = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  // dummy data

  const user = [
    {
      firstName: 'Joe',
      lastName: 'Mama',
      avatar: 'image here'
    }
  ]

  const post = [
    {
      image: 'image here',
      description: 'caption here',
      emotion: 50,
      postDate: 'Oct 17, 2022, 11:43 AM'
    }
  ]

  return (

    <div className="container" style={{ height: "100%" }}>
      {/* <Swiper className="mySwiper" slidesPerView={1.01} centeredSlides={true}> */}
        {/* {numbers.map((myid) => <div id={myid.toString()} key={myid}>{vertical ? <Card key={myid}/> : <SwiperSlide key={myid}><Card /></SwiperSlide>}</div>)} */}
        {numbers.map((myid) => <div id={myid.toString()} key={myid}>{vertical ? <Card user={user} post={post} key={myid}/> : <p></p>}</div>)}
      {/* </Swiper> */}
    </div>

  );
};

export default ExploreContainer;
