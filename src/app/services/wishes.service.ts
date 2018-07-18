import { Injectable } from '@angular/core';
import { ItemList } from '../../models/item-list.model';

@Injectable()
export class WishesService {

    lists: ItemList[] = [];

    constructor() {

        const lista1 = new ItemList("Recolectar piedras del infinito");
        const lista2 = new ItemList("Buscar Heroe");

        this.lists.push( lista1, lista2);

        console.log("Init Service");
    }
}
