import './Card.css';
import { IonAvatar, IonChip, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, thumbsUpOutline, chatboxEllipsesOutline, bookmarkOutline } from 'ionicons/icons';

import { faker } from '@faker-js/faker';
interface ContainerProps { }

const Card: React.FC<ContainerProps> = () => {
    return (
        <IonCard>
            <IonCardContent>
                <IonItem class="no_border">
                    <IonAvatar slot="start">
                        <img id="avatar" src={faker.image.avatar()}></img>
                    </IonAvatar>
                    <IonLabel>
                        <IonCardSubtitle>{faker.name.firstName().slice(0, 5)}_{faker.name.lastName().slice(0, 5)}{Math.round(Math.random() * 100)}</IonCardSubtitle>

                        <p>6 Days Ago</p>
                    </IonLabel>
                    <IonChip color="primary">
                        <IonLabel color="primary" style={{ fontSize: "small" }}>From <b>Happy</b></IonLabel>
                    </IonChip>
                </IonItem>

                <img src={faker.image.abstract(1024, 1024, true)} />
                {/* <div style={{backgroundColor:"red"}}>................</div> */}
                <div>
                    {/* <img id="avatar" src={faker.image.avatar()}/> */}
                </div>
                <br />
                {faker.lorem.lines(3)}.
                <br />
                <br />
                {/* <div className='likeContainer'><div className="Like"><IonIcon icon={thumbsUpOutline}></IonIcon>{Math.round(Math.random() * 100)}</div></div>
                <div className='likeContainer'><div className="Comment"><IonIcon icon={chatboxEllipsesOutline}></IonIcon>{Math.round(Math.random() * 10)}</div></div> */}
                {/* <IonCardContent style="font-size:18px;font-weight:bold;" id="mycard"> */}
                    <IonIcon icon={thumbsUpOutline}></IonIcon> {Math.round(Math.random()*50)} &nbsp;
                    <IonIcon icon={chatboxEllipsesOutline}></IonIcon> {Math.round(Math.random()*50)} &nbsp;
                    <IonIcon icon={bookmarkOutline}></IonIcon> {Math.round(Math.random()*50)} &nbsp;
                    <span style={{float:"right",fontSize:"20px"}}>
                        <IonIcon name="paper-plane-outline"></IonIcon>
                    </span>
                </IonCardContent>
            {/* </IonCardContent> */}
        </IonCard >
    );
};

export default Card;
