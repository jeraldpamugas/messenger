import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader';
import MessageContainer from "../components/messageContainer";
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent fullscreen>
        <MessageContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
