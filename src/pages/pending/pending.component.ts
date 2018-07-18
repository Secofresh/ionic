import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../app/services/wishes.service';
import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { ItemList } from '../../models/item-list.model';

@Component({
    selector: 'app-pending',
    templateUrl: 'pending.component.html',
})
export class PendingComponent implements OnInit {

    constructor(private service: WishesService,
        private nav:NavController) {

        }

        ngOnInit() {}

        AddList() {
            this.nav.push(AddComponent);
        }

        itemSelected(list: ItemList){
            console.log(list);
        }
    }
