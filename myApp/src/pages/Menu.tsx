import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonThumbnail,
  IonToolbar,
  IonList,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonIcon,
  IonLabel,
  IonBackButton
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import "./Menu.css";

export const Menu: React.FC = () => {
  const [listItems, setListItems] = useState<any>([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/items").then((response) => {
      response.json().then((res) => {
        setListItems(res);
      });
    });
  }, []);

  return (
    <IonPage>
      <IonToolbar className="ion-text-center" color="light">
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>

        <IonTitle>Menu </IonTitle>
      </IonToolbar>

      <IonContent>
        <IonList>
          {listItems.map((item: any, index: any) => {
            return (
              <IonItem key={index}>
                <IonThumbnail slot="start" id="itemPic">
                  <img src={item.imgUrl} />
                </IonThumbnail>

                <IonLabel>
                  <h2> {item.name} </h2>
                  <p>{item.desc}</p>
                  <p>{item.price} </p>
                </IonLabel>
                
                <IonIcon slot="end" icon={addOutline}></IonIcon>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
