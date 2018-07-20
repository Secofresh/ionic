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

    constructor(private service: WishesService,
        private navParams: NavParams) {

        console.log(navParams.get('titulo'));
        const titulo:string = navParams.get('titulo');
        this.lista = new ItemList(titulo);
    }

    agregarItem() {
        if(this.itemName.length === 0) {
            return;
        }
        for (let i = 0; i < this.lista.items.length; i++) {
            if( this.lista.items[i].desc === this.itemName ) {
                this.itemName = '';
                return;
            }
        }
        const item = new Item(this.itemName);
        this.lista.items.push(item);
        this.itemName = '';
    }

    save(listName, itemName) {
        console.log("Guardar lista: " + listName);
        console.log("Guardar elemento: " + itemName);
    }
}
