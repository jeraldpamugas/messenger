import { IonHeader, IonTitle, IonImg, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import './MyHeader.css';

const MyHeader: React.FC = () => {
    return (
      <IonHeader class="ion-no-border">
        <IonToolbar class="toolbarStyle">
          
          {/* <IonButtons slot="start">
            <IonButton routerLink='/about/Jerald'>About</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>Contact</IonButton>
          </IonButtons>
          <IonImg class='logImg' src='assets/image/JPlogo.png'/> */}
        </IonToolbar>
      </IonHeader>
    );
};

export default MyHeader;