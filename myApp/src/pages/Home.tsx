import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCard,IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonIcon

} from "@ionic/react";
import "./Home.css"


export const Home: React.FC = () => {


  return (
    <IonPage>
    <IonCard className="ion-text-center main-Card ">

  <IonCardHeader>
 
    <IonCardTitle className="title">Pizza </IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <p>
    Simple app to apply task 
    </p>
    <IonItem >
      <IonButton routerLink="./menu" size="default" fill="solid" color="light" className="btn-start">Get Started</IonButton>
    </IonItem>
  </IonCardContent>
</IonCard>
    </IonPage>
  );
};

export default Home;
