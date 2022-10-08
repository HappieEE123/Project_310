import './Card.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, thumbsUpOutline, chatboxEllipsesOutline } from 'ionicons/icons';

import { faker } from '@faker-js/faker';
interface ContainerProps { }

const Card: React.FC<ContainerProps> = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{faker.commerce.productName()}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <img src={faker.image.abstract(1024, 1024, true)} />
                <IonCardSubtitle>{faker.name.firstName().slice(0, 5)}_{faker.name.lastName().slice(0, 5)}{Math.round(Math.random() * 100)}</IonCardSubtitle>
                {faker.lorem.lines(3)}.
                <br />
                <div className='likeContainer'><div className="Like"><IonIcon icon={thumbsUpOutline}></IonIcon>{Math.round(Math.random()*100)}</div></div>
                <div className='likeContainer'><div className="Comment"><IonIcon icon={chatboxEllipsesOutline}></IonIcon>{Math.round(Math.random()*10)}</div></div>

            </IonCardContent>
        </IonCard>
    );
};

export default Card;
