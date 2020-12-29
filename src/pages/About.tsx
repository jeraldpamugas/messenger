import {
  IonContent,
  IonHeader,
  IonButtons,
  IonPage,
  IonBackButton,
  IonTitle,
  IonToolbar,
  IonImg,
  IonFooter,
} from "@ionic/react";
import React from "react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border border-bottom">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle class="ion-text-center">Message</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <div id="messagesDiv" className="chat">
          <div className="chat-message me">
            <p className="chat-text">hi</p>
          </div>
          <div className="chat-message">
            <p className="chat-text">hi</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">hello</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">hey</p>
          </div>
          <div className="chat-message">
            <p className="chat-text">asdasds</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">aasd</p>
          </div>
          <div className="chat-message">
            <p className="chat-text">ads</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">hi</p>
          </div>
          <div className="chat-message">
            <p className="chat-text">hi</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">hello</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">hey</p>
          </div>
          <div className="chat-message">
            <p className="chat-text">asdasds</p>
          </div>
          <div className="chat-message me">
            <p className="chat-text">aasd</p>
          </div>
          <div className="chat-message">
            <p className="chat-text">ads</p>
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle class="ion-text-center ion-no-padding">
            <div className="input-group pt-2">
              <div style={{ height: "45px" }} className="input-group-prepend">
                {/* <label id="customFileLabel" for="customFile"> */}
                <label id="customFileLabel">+</label>
              </div>
              <input
                type="text"
                id="messageInput"
                className="form-control ml-1 mr-1"
                placeholder="message here..."
                style={{ borderRadius: "10px", width: "80px" }}
              />
              <div style={{ height: "38px" }} className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Send
                </button>
              </div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default About;
