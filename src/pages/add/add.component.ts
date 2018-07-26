import { Component } from '@angular/core';
import { WishesService } from '../../app/services/wishes.service';
import { NavParams } from 'ionic-angular';
import { ItemList, Item } from '../../models';


@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html',
})
export class AddComponent {

    listName:string;
    itemName:string = '';

    lista: ItemList;

    constructor(private service: WishesService, private navParams: NavParams) {
        const titulo:string = navParams.get('titulo');

        if(this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
            console.log(this.lista);
        } else {
            this.lista = new ItemList(titulo);
        }

        this.service.saveList(this.lista);
    }

    agregarItem() {
        //If you have enter a list
        if(this.itemName.length === 0) {
        return;
        }
        //Check if item is in list
        for (let i = 0; i < this.lista.items.length; i++) {
            if( this.lista.items[i].desc === this.itemName ) {
                this.itemName = '';
                return;
            }
        }
        //Add element to list
        this.lista.items.push(new Item(this.itemName));
        this.service.saveStorage();
        //Restore default html element
        this.itemName = '';
    }

    updateTask(item: Item) {
        //Mark item as completed
        item.completed = !item.completed;

        //Check pending tasks
        const pendingTasks = this.lista.items.filter(item => !item.completed).length;

        if(pendingTasks == 0) {
            this.lista.finished = true;
            this.lista.finishedOn = new Date();
        } else {
            this.lista.finished = false;
            this.lista.finishedOn = null;
        }

        //Save data
        this.service.saveStorage();
    }

    deleteTask(i:number) {
        this.lista.items.splice(i, 1);
        this.service.saveStorage();
    }

}
