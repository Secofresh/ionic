import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

    listName:string;
    itemName:string;

    constructor() {  }

    ngOnInit() {}
}
