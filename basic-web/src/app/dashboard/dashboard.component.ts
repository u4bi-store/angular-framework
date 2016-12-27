import { Component, OnInit } from '@angular/core';

import{ Hero } from '../hero';
import{ HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private heroService: HeroService) { }

  ngOnInit() : void {
    this.heroService.getHeroes()
      .subscribe(
        p => this.heroes = p,
        e => this.errorMessage = e,
        () => this.isLoading = false
      );
  }

}
