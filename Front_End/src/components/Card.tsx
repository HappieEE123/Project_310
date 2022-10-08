import './ExploreContainer.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { faker } from '@faker-js/faker';
interface ContainerProps { }

const Card: React.FC<ContainerProps> = () => {
  return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{faker.commerce.productName()}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <img src={faker.image.abstract(1024,1024,true)} />
          <IonCardSubtitle>{faker.name.firstName().slice(0, 5)}_{faker.name.lastName().slice(0, 5)}{Math.round(Math.random() * 100)}</IonCardSubtitle>
          {faker.lorem.lines(3)}.
        </IonCardContent>
      </IonCard>
  );
};

export default Card;
