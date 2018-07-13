import { Injectable } from '@angular/core';
import { ItemList } from '../classes/item-list';

@Injectable()
export class WishesService {

    lists: ItemList[] = [];

    constructor() {

        let list1 = new ItemList("Name1");
        let list2 = new ItemList("Name2");
        let list3 = new ItemList("Name3");

        this.lists.push(list1);
        this.lists.push(list2);
        this.lists.push(list3);

        console.log("Init Service");

    }
}
