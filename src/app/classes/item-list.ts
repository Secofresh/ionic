import { Item } from './item';

export class ItemList {
    name:string;
    completed:boolean;
    items: Item[];

    constructor(name:string) {
        this.name = name;
        this.completed = false;
    }
}
