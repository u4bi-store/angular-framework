import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  errorMessage: string = '';
  isLoading : boolean = true;

  selectedHero : Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }
  
  ngOnInit(): void{
    this.heroService.getHeroes()
      .subscribe(
        p => this.heroes = p,
        e => this.errorMessage = e,
        () => this.isLoading = false
      );
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  
  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);

  }

}
