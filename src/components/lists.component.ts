import { Component, Input } from "@angular/core";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { WishesService } from "../app/services/wishes.service";
import { ItemList } from "../models/item-list.model";
import { AddComponent } from "../pages/add/add.component";


@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html',
})
export class ListsComponent {

    @Input() completed: boolean = false;


    constructor(private service: WishesService, private nav:NavController, private alert: AlertController ) {

    }

    deleteList(list: ItemList) {
        this.service.deleteList(list);
    }

    itemSelected(list: ItemList){
        this.nav.push(AddComponent, {titulo: list.title, lista: list});
    }

    editList(list: ItemList, slidingItem: ItemSliding) {
        slidingItem.close();
        const alerta = this.alert.create({
            title: 'Editar nombre',
            message: 'Editar nombre de la lista:',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Nombre de la lista',
                    value: list.title
                },
            ],
            buttons: [
                {
                    text:'Cancelar'
                },
                {
                    text:'Guardar',
                    handler: data =>
                    {
                        if(data.titulo.length === 0) {
                            return;
                        }

                        list.title = data.titulo;
                        this.service.saveStorage();
                    }
                }
            ]
        });
        alerta.present();
    }
}
