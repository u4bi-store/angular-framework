import { Component, OnInit} from '@angular/core';
import {Item} from "./item";

import {ItemService} from "./item.service";
/**
 * 아이템서비스 임포트
*/

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers: [ItemService]
    /**
     * 아이템 서비스를 배열로 넣어줌
     */
})

/**
 * ngOnInit은 OnInit 인터페이스를 구현해 사용
 */
export class AppComponent implements OnInit{
    constructor(private itemService: ItemService){}
    /**
     * ts에선 클래스마다 constructor라는 생성사 가질 수 있음
     * 생성자에 파라미터로 서비스를 인젝션 할 수 있음
     * 
     * 이와 같이 new를 통해 서비스 생성안하고
     * 의존성 주입 통해 서비스를 이용가능함
     * 
     * Component 선언부에 providers를 만들고
     * 해당 서비스를 배열로 넣어줌.
     */
    ngOnInit() {
        this.getItems();
        /**
         * itemService의 getItems() 함수를 호출함.
         * 
         * ngOnInit()에 이 함수를 호출하면 이 Component가 만들어지자마자 호출
         */
    }

    itemArray : Item[];
    putItem: Item;

    onSelect(item: Item): void { this.putItem = item; }

    getItems(): void {
        //this.itemArray = this.itemService.getItems(); sync 동기

        this.itemService.getItems().then(itemArray => this.itemArray = itemArray);
        //async 비동기
        /**
         * getItems() 부분이 변경됨
         * 
         * this.ItemService.getItems() 를 통해
         * 리턴된 프로미스값 ITEM_ARRAY를 받아옴.
         * 
         * then(그러면) . 무엇을 할지를 then()파라미터로 넣어줌
         * 
         * itemArray => this.itemArray = itemArray는 람다식
         * 
         * function(itemArray) {
         *     this.itemArray = itemArray;
         * }
         * 
         * 와 의미적으로는 동일 하지만 scope가 달라짐
         * 
         * 자바스크립트에서 함수를 선언하게 되면
         * 함수안의 scope가 달라짐
         * 
         * 하지만 람다식을 사용하면 동일 scope가 됨.
         * 
         * 따라 function으로 정의하면 this.itemArray
         * 사용할 수 없다고함.
         * 
         */
    }  
}