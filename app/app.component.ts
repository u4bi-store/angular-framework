import { Component, OnInit} from '@angular/core';
import {Item} from "./item";

import {ItemService} from "./item.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers: [ItemService]
})

export class AppComponent implements OnInit{
    constructor(private itemService: ItemService){}
    ngOnInit() {
        this.getItems();
    }

    itemArray : Item[];
    putItem: Item;

    onSelect(item: Item): void { this.putItem = item; }

    getItems(): void {
        this.itemService.getItems().then(itemArray => this.itemArray = itemArray);
    }  
}