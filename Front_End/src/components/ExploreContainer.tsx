import './ExploreContainer.css';
import Card from "./Card"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// https://codesandbox.io/s/10st98?file=/src/App.jsx:83-134
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, cellular } from 'ionicons/icons';
import { faker } from '@faker-js/faker';
;

interface ContainerProps { }


const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
      <div className="container" style={{ height: "100%" }}>
        <Swiper className="mySwiper" slidesPerView={1.01} centeredSlides={true}>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
      </div>

  );
};

export default ExploreContainer;
