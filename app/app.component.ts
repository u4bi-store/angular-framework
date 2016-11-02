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
            <p>
                {{name}}
                <br>
                {{item.id}}
                <br>
                {{item.name}}
                <br>
                {{item.nation}}
                <br>
                <input value="{{item.name}}" placeholder="name"/>
                <br>
                <input [(ngModel)]="item.name" placeholder="name">
            </p>
        </div>
        `
        /**
         * [(ngModel)]="변수명" 으로 할 경우 two-way binding 됨
         * 
         * 이 경우 뷰단 인풋값을 바꾸면 그 즉시 클래스의 값도 변경
         */
})

export class AppComponent {
    name = 'u4bi';
    item : Item = {
        id : 1,
        name : '몬스터볼',
        nation : 'USA'
    };
    /**
     * 클래스 안에 name과 item 변수를 선언해줌.
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