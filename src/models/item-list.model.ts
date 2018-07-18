import { Item } from './item.model';

export class ItemList {
    id: number;
    title: string;
    createdOn: Date;
    finishedOn: Date;
    finished: boolean;
    items: Item[];

    constructor(title:string) {
        this.title = title;
        this.finished = false;
        this.createdOn = new Date();
        this.items = [];

        this.id = new Date().getTime();

    }
}
