import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/**
 * 브라우저에서 템플릿을 컴파일 하기 위한 부트스트랩 메소드를 제공함.
 * 
 * 부트스트랩 [bootstrap] 컴퓨터인터넷IT용어대사전 기술/공학 > 컴퓨터/통신/IT
그 자체의 동작에 의해서 어떤 소정의 상태로 이행하도록 설정되어 있는 방법.
예를 들면, 최초의 수 개의 명령에 의해서 그것에 계속해서 모든 명령을 입력 장치에서
컴퓨터 내에 인출(fetch)할 수

 */
import { AppModule } from './app.module';
/**
 * 앞서 만든 app.module 파일에서 export했던 AppModule를 임포트함.
 * 
 * from절에서 확장자 ts는 생략이 가능
*/
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
