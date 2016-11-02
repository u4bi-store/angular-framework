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
            <h2>내 아이템 목록</h2>
            <ul class="itemArray">
                <li *ngFor="let item of itemArray">
                    <p>{{item.id}} {{item.name}} {{item.nation}}</p>
                </li>
            </ul>
        </div>
        `
})

export class AppComponent {
    itemArray = ITEM_ARRAY;
    /**
     *  변수 하나 선언후 위 배열 assign함
     */
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