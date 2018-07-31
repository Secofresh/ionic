import { Injectable } from '@angular/core';
import { ItemList } from '../../models/item-list.model';
import { Item } from '../../models/item.model';

@Injectable()
export class WishesService {

    lists: ItemList[] = [];

    constructor() {
        this.pushStorage();
    }

    getListPosition(title:string) {
        for (let i = 0; i < this.lists.length; i++) {
            if(this.lists[i].title === title) {
                return i;
            }
        }
        return -1;
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

    saveList(newList: ItemList) {
        for (let i = 0; i < this.lists.length; i++) {
            if(this.lists[i].title === newList.title) {
                this.lists[i].items = this.lists[i].items.concat(newList.items.filter((item) => this.lists[i].items.indexOf(item) < 0 ));
                this.saveStorage();
                return true;
            }
        }
        this.lists.push(newList);
        this.saveStorage();
        return true;
    }

    deleteList(list: ItemList) {
        this.lists = this.lists.filter(item => item.id !== list.id);
        this.saveStorage();
    }

    saveStorage() {
        localStorage.setItem('data', JSON.stringify(this.lists));
    }

    pushStorage() {
        if(localStorage.getItem('data')) {
            this.lists = JSON.parse(localStorage.getItem('data'));
        } else {
            this.lists = [];
        }
    }

}
