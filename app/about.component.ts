import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about-home',
    templateUrl: 'app/about-home.component.html',
})
export class AboutHomeComponent { }

@Component({
    selector: 'about-item',
    templateUrl: 'app/about-item.component.html',
})
export class AboutItemComponent {
    id: any;
    paramsSub: any;

    constructor(private ActivatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.paramsSub = this.ActivatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
    }
    
    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }    
}

@Component({
    selector: 'app-about',
    templateUrl: 'app/about.component.html',
})
export class AboutComponent { }