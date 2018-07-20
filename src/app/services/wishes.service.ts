import { Injectable } from '@angular/core';
import { ItemList } from '../../models/item-list.model';
import { Item } from '../../models/item.model';

@Injectable()
export class WishesService {

    lists: ItemList[] = [];

    constructor() {

        const lista1 = new ItemList("Recolectar piedras del infinito");
        const lista2 = new ItemList("Buscar Heroe");

        this.saveList(lista1);
        this.saveList(lista2);

        console.log("Init Service");
    }


    getList(namelist:string) {
        for (let i = 0; i < this.lists.length; i++) {
            if(this.lists[i].title === namelist) {
                return this.lists[i];
            }
        }
        return [];
    }

    addItem(nameList:string, itemName:string) {
        for (let i = 0; i < this.lists.length; i++) {
            if(this.lists[i].title === nameList) {
                this.lists[i].items.push(new Item(itemName));
                return true;
            }
        }
    }

    saveList(list: ItemList) {
        for (let i = 0; i < this.lists.length; i++) {
            if(this.lists[i].title === list.title) {
                this.lists[i].items.concat(list.items);
                return true;
            }
        }
        this.lists.push(list);
        return true;
    }

}
