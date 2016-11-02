import { Injectable } from '@angular/core';

import { Item } from './item';
import { ITEM_ARRAY } from './mock-itemArray';

@Injectable()
export class ItemService {
    getItems(): Promise<Item[]>{
        return Promise.resolve(ITEM_ARRAY);
    }
}
/**
 * Promise.resolve(ITEM_ARRAY) : 약속을 결심함
 * 
 * ITEM_ARRAY를 리턴할거라는 약속
 */

/**
 * ajax와 같이 async하게 해주는 Promise 사용
 * 
 * Promise란 약속
 * 뭐에 대한 약속?
 * 
 * 어떠어떠한 것을 할거라는 야속
 * 약속을 해놨으니 언젠가는 무언가를 한다.
 * 
 * 사용자는 약속만 해놓고 다른 행위를 하다보면
 * 그 약속이 언젠가는 이뤄짐
 * 
 * 이것이 async하게 즉 비동기적으로 움직인다는거임.
 */

/**
 * 기본적으로 Service는 위 형태를 가짐
 * 
 * 기본적으로 Angular는 생성자 Injection을 지원함.
 *
 * 이제 이걸 app.component에서 사용
 */