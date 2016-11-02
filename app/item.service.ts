import { Injectable } from '@angular/core';

import { Item } from './item';
import { ITEM_ARRAY } from './mock-itemArray';

@Injectable()
export class ItemService {
    getItems(): Promise<Item[]>{
        return Promise.resolve(ITEM_ARRAY);
    }
}