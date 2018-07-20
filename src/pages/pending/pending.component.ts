import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../app/services/wishes.service';
import { NavController, AlertController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { ItemList } from '../../models/item-list.model';

@Component({
    selector: 'app-pending',
    templateUrl: 'pending.component.html',
})
export class PendingComponent implements OnInit {

    constructor(private service: WishesService,
        private nav:NavController,
        private alertCtrl:AlertController) {

        }

        ngOnInit() {}

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
                            this.nav.push(AddComponent,{titulo: data.titulo});
                        }
                    }
                ]
            });

            alerta.present();
            //this.nav.push(AddComponent);
        }

        itemSelected(list: ItemList){
            console.log(list);
        }
    }
