import {
  IonHeader,
  IonTitle,
  IonImg,
  IonToolbar,
  IonButtons,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./MessageContainer.css";

interface ContainerProps {}

const MessageContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center mt-5" id="userSelector">
        <div className="col-md-auto">
          <div style={{ height: "100%" }} className="card p-0">
            <div className="card-header">
              <b>Select name:</b>
            </div>
            <div style={{ overflowX: "hidden" }} className="card-body">
              <IonButton
                style={{ width: "100%" }}
                routerLink="/about/Marie"
              >
                Jerald
              </IonButton>
              <IonButton
                style={{ width: "100%" }}
                routerLink="/about/Jerald"
              >
                Marie
              </IonButton>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
