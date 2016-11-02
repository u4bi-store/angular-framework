import { Component, Input } from '@angular/core';
/**
 * 코어 라이브러리에 있는 Input 임포트
 */
import {Item} from "./item";
 
@Component({
    selector: 'my-item-detail',
    templateUrl: 'app/item-detail.component.html'
    /**
     * selector는 해당 Component를 사용할 때
     * html 코드에 입력될 태그명 <my-item-detail></my-item-detail>
     */
})
 
export class ItemDetailComponent {
   @Input()
   item: Item;
   /**
    *  @Input()은 core Angular 라이브러리에 있음
    */
}

/**
 * 이렇게 빼내니 ItemDetailComponent에
 * Item 변수가 없음.
 * 
 * Angular2에서는 하위 Component가
 * 그냥 상위 Component의 변수를 같이 사용할 수 없음.
 * 
 * 그래서 Input이라는 것을 사용
 * 
 * 상위 컴포넌트에 하위 컴포넌트를 사용할 때
 * 
 * Input값으로 putItem을 넣어주게 되면
 * 하위 컴포넌트가 정상적으로 동작한다함.
 */