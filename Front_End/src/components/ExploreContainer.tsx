import './ExploreContainer.css';
import Card from "./Card"
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/bundle";
// https://codesandbox.io/s/10st98?file=/src/App.jsx:83-134
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton
} from '@ionic/react';
import {pin, wifi, wine, warning, walk, cellular} from 'ionicons/icons';
import {faker} from '@faker-js/faker';
import axios from 'axios';
import {useEffect, useState} from "react";

let vertical: Boolean = true;

const user: Object[] = [
    {
        firstName: 'Joe',
        lastName: 'Mama',
        avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
    }
];


const ExploreContainer = () => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            await axios.get('https://api.weasoft.com/feed/')
                .then((res) => {
                    setPostData(res.data);
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                })
        }
        fetchData();
    }, [])
    return (
        <div className="container" style={{height: "100%"}}>
            {/* <Swiper className="mySwiper" slidesPerView={1.01} centeredSlides={true}> */}
            {/* {numbers.map((myid) => <div id={myid.toString()} key={myid}>{vertical ? <Card key={myid}/> : <SwiperSlide key={myid}><Card /></SwiperSlide>}</div>)} */}
            {postData.map((data, myid) => {
                console.log('WTFF›‹')
                return <div key={myid}>{vertical ?
                    <Card postData={data} key={myid}/> : <p></p>}</div>
            })}
            {/*})}*/}
            {/* </Swiper> */}
        </div>
    );
};

export default ExploreContainer;
