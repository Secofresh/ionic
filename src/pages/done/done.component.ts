import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../app/services/wishes.service';
import { ItemList } from '../../models/item-list.model';

@Component({
    selector: 'app-done',
    templateUrl: 'done.component.html',
})
export class DoneComponent implements OnInit {

    constructor(private service: WishesService) {  }

    ngOnInit() {}

}
