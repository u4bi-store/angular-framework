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
        <h1>angular2.0_workspace dev2</h1>
        <h2>angular2.0 test u4bi</h2>
        <a href="https://github.com/u4bi/Angular2.0_workspace">깃허브드 앵귤러2 워크스페이스 브런치 dev2</a>
        </div>
        `
})

export class AppComponent {

}
/**
 * export class AppComponent{}는
 * 
 * AppComponent 클래스를 선언하고.
 * export 해서 다른 곳에서 또 사용할 수 있다는걸 의미함.
 */
