import './Card.css';
import { IonAvatar, IonChip, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, thumbsUpOutline, chatboxEllipsesOutline, bookmarkOutline } from 'ionicons/icons';

import { faker } from '@faker-js/faker';
interface ContainerProps { }

const Card: React.FC<ContainerProps> = (user, post) => {
    // use props.user.avatar, props.post.image, etc.


    return (
        <IonCard>
            <IonCardContent>
                <IonItem class="no_border">
                    <IonAvatar slot="start">
                        <img id="avatar" src={props.user.avatar}></img>
                    </IonAvatar>
                    <IonLabel>
                        <IonCardSubtitle>{props.user.firstName}_{props.user.lastName}{Math.round(Math.random() * 100)}</IonCardSubtitle>
                        <p>{props.post.postDate}</p>
                    </IonLabel>
                    {/* <div className="chip">
                        <div className='filledChip'> */}
                    <div className="chip" style={{backgroundImage:"url('/assets/a.jpg')", backgroundSize:"100% 100%"}}>
                        <IonLabel color="primary" style={{ fontSize: "small" }}><b>{props.post.emotion + "% Happy"}</b></IonLabel>
                    </div>
                    {/* </div>
                    </div> */}
                </IonItem>

                <img src={props.post.image.abstract(1024, 1024, true)} />
                {/* <div style={{backgroundColor:"red"}}>................</div> */}
                <div>
                    {/* <img id="avatar" src={faker.image.avatar()}/> */}
                </div>
                <br />
                {props.post.description}.
                <br />
                <br />
                {/* <div className='likeContainer'><div className="Like"><IonIcon icon={thumbsUpOutline}></IonIcon>{Math.round(Math.random() * 100)}</div></div>
                <div className='likeContainer'><div className="Comment"><IonIcon icon={chatboxEllipsesOutline}></IonIcon>{Math.round(Math.random() * 10)}</div></div> */}
                {/* <IonCardContent style="font-size:18px;font-weight:bold;" id="mycard"> */}
                <IonIcon icon={thumbsUpOutline}></IonIcon> {Math.round(Math.random() * 50)} &nbsp;
                <IonIcon icon={chatboxEllipsesOutline}></IonIcon> {Math.round(Math.random() * 50)} &nbsp;
                {/* <IonIcon icon={bookmarkOutline}></IonIcon> {Math.round(Math.random()*50)} &nbsp; */}
                <span style={{ float: "right", fontSize: "20px" }}>
                    <IonIcon name="paper-plane-outline"></IonIcon>
                </span>
            </IonCardContent>
            {/* </IonCardContent> */}
        </IonCard >
    );
};

export default Card;
