import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/item.model';

@Injectable()
export class ItemsService {
    items: Item[] = [  {
        name: "Pepperoni",
        desc:"Pepproni and mozzarela cheese",
        price: "20SAR",
        imgUrl: "https://i.ibb.co/FVCyDhk/Pepperoni.jpg"
      
      },
      {
        name: "Buffalo Chicken",
        desc:"Chicken, red onions,fire roasted red peppers and mozzarela cheese",
        price: "25SAR",
        imgUrl: "https://i.ibb.co/L543QDg/Buffalo-Chicken.jpg"
      
      },
      {
        name: "Margherita",
        desc:"Chicken, red onions and mozzarela cheese",
        price: "20SAR",
        imgUrl: "https://i.ibb.co/F37B5G4/Margherita.jpg"
      
      }
    ];

      async getItems(): Promise<Item[]> {
        return this.items;
      }
}
