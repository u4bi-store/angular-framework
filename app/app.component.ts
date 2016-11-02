import { Component } from '@angular/core';
import {Item} from "./item";
import {ITEM_ARRAY} from "./mock-itemArray";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
    /**
     *  template 대신 templateUrl을 사용
     *  styles 대신 styleUrls를 사용
     */
})

export class AppComponent {
    itemArray = ITEM_ARRAY;
    putItem: Item;

    onSelect(item: Item): void {
        this.putItem = item;
    }   
}