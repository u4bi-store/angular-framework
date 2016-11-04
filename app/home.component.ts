import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: 'app/home.component.html',
    styleUrls:['app/home.component.css'],    
})
export class HomeComponent implements OnInit {

    flag : boolean;

    constructor(private homeService: HomeService) {}
    ngOnInit(): void {
        this.fixFlag(false);
    }
    
    fixFlag(bool): void {
        this.flag = this.homeService.flag(bool);        
    }
}