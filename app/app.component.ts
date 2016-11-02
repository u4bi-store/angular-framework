import { Component } from '@angular/core';
/**
 * @angular/core에 있는 Component 모듈을 import 한다.
 * Component는 Angular에서 제공하는 모듈로
 * 앞으로 가장 많이 사용하게 됨.
 */

@Component({
    /**
     * selector는 HTML에서 해당 component가 들어갈
     * tag 이름으로 사용됨. <my-app></my-app>
     * 
     * template은 화면을 그리는데 사용됨.
     */
    selector: 'my-app',
    template: `
        <div>
            <div *ngIf="putItem">
                <h2>장착 아이템 : {{putItem.id}} {{putItem.name}} {{putItem.nation}}</h2>
            </div>
            <h2>내 아이템 목록</h2>
            <ul class="itemArray">
                <li *ngFor="let item of itemArray" (click)="onSelect(item)">
                    <p [class.choice]="item === putItem" >{{item.id}} {{item.name}} {{item.nation}}</p>
                </li>
            </ul>
        </div>
        `,
        styles:[`
            .choice {
              color: red;
            }
        `]
        /**
         * styles.css 와 동일 
         */

        /**
         * 포문
         * *ngFor="let 사용할 변수 of 클래스내 배열변수"
         * 
         * 이벤트 연결
         * (이벤트명)="함수명(변수)"
         * 
         * 여기서 () 괄호는 Event Binding이라함.
         */

        /**
         * putItem가 최초 undefined 선언됨.
         * 
         * 이를 해결하기 위한 방법은 2가지
         * 1. 하나는 선언과 동시에 값을 하나 지정
         * 2. 다른 하나는 *ngIf를 사용
         * 
         *      ngIf="putItem"란 속성추가
         *      만약 putItem가 있으면
         *      이 태그를 만들겠다
         *      
         *      만약 putItem가 없다? 그러면 <div> 태그가 없어지고
         *      그로 인해 <div> 태그 하위에 있는 것들도 없음
         *      
         *      따라서 putItem.name을 연산할 일이 없기때문에 오류가 안남
         * 
         *      *ngFor과 *ngIf는 구조적 프로그래밍에 사용되는 것들로
         *      structural directive라고 함
         *      
         *      Item에 style 추가
         *      [class.choice]="item === putItem"
         * 
         *      문법은 [class.클래스명]="조건문" 임     
         *      조건에 맞을 경우 스타일시트 클래스가 추가되는 형식
         */
})

export class AppComponent {
    itemArray = ITEM_ARRAY;
    /**
     *  변수 하나 선언후 위 배열 assign함
     */
    putItem: Item;
    onSelect(item: Item): void {
        this.putItem = item;
    }
    
}
/**
 * export class AppComponent{}는
 * 
 * AppComponent 클래스를 선언하고.
 * export 해서 다른 곳에서 또 사용할 수 있다는걸 의미함.
 */

export class Item {
    id : number;
    name : string;
    nation : string;
    /**
     * TypeScript에서는 이렇게 "변수명: 타입명;" 과 같이 선언함
     * TypeScript에서는 JavaScript에서 관리하지 않는 Type을 관리함
     */
}

const ITEM_ARRAY: Item[] = [
  { id: 11, name: '초급 몬스터볼', nation: 'USA'},
  { id: 12, name: '중급 몬스터볼', nation: 'USA'},
  { id: 13, name: '고급 몬스터볼', nation: 'USA'}
];

/**
 * TypeScript에서도 기본적인 JavaScript 문법은 동작함
 */