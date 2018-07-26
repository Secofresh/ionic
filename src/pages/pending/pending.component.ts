import { Component } from '@angular/core';
import { WishesService } from '../../app/services/wishes.service';
import { NavController, AlertController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { ItemList } from '../../models/item-list.model';

@Component({
    selector: 'app-pending',
    templateUrl: 'pending.component.html',
})
export class PendingComponent {

    constructor(private service: WishesService, private nav:NavController, private alertCtrl:AlertController) {

    }

    AddList() {
        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista:',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Nombre de la lista'
                },
            ],
            buttons: [
                {
                    text:'Cancelar'
                },
                {
                    text:'Agregar',
                    handler: data => {
                        if(data.titulo.length === 0) {
                            return;
                        }
                        if(this.service.getListPosition(data.titulo) != -1) {
                            this.nav.push(AddComponent, {titulo: data.titulo, lista: this.service.getList(data.titulo)});
                        } else {
                            this.nav.push(AddComponent,{titulo: data.titulo});
                        }
                    }
                }
            ]
        });
        alerta.present();
    }

    itemSelected(list: ItemList){
        this.nav.push(AddComponent, {titulo: list.title, lista: list});
    }
}
