import { Component, Input } from '@angular/core';

import {Item} from "./item";
 
@Component({
    selector: 'my-item-detail',
    templateUrl: 'app/item-detail.component.html'
})
 
export class ItemDetailComponent {
   @Input()
   item: Item;
}