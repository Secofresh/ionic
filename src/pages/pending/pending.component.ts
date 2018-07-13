import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../app/services/wishes.service';

@Component({
    selector: 'app-pending',
    templateUrl: 'pending.component.html',
})
export class PendingComponent implements OnInit {

    constructor(private service: WishesService) {

    }

    ngOnInit() {}
}
