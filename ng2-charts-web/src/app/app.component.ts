import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012'
    ];
    
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
  
    public barChartData:any[] = [
      {
        data:
          [65, 59, 80, 81, 56, 55, 40],
        label: '빨간'
      },
      {
        data:
          [28, 48, 40, 19, 86, 27, 90],
        label: '파란'
      }
    ];
  
    // 누름 이벤트
    public chartClicked(e:any):void {
      console.log('누름 이벤트');
      console.log(e);
      console.log(e.active[0]._index, e.active[0]._model.datasetLabel);
      console.log(e.active[1]._index, e.active[1]._model.datasetLabel);
    }
    
    // 마우스 올린 이벤트
    public chartHovered(e:any):void {
      console.log('마우스 올린 이벤트');
      console.log(e);
    }
  
    public randomize():void {
      /* 3값이 변경됨 */
      let data = [
        20,
        30,
        40,
        50,
        60,
        70,
        80
      ];

      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      clone[1].data = data;
      
      this.barChartData = clone;
    }
}
