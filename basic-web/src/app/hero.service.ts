import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Hero } from './hero';

@Injectable()
export class HeroService {
 
  private baseUrl: string = 'http://swapi.co/api';
  constructor(private http: Http) { }
  
  getHeroes(): Observable<Hero[]> {
    let heroes$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapHeroes);
      return heroes$;
  }
  
  getHero(id: number): Observable<Hero>{
    let hero$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapHero)
      .catch(handleError);
      return hero$;
  }
 
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
 
}

function mapHeroes(response:Response): Hero[]{
 return response.json().results.map(toHero)
}

function mapHero(response:Response): Hero{
  return toHero(response.json());
}

function toHero(r:any): Hero{
  let hero = <Hero>({
    id: extractId(r),
    url: r.url,
    name: r.name,
  });
  console.log('hero :', hero);
  return hero;
}

function extractId(heroData:any){
  let extractedId = heroData.url.replace('http://swapi.co/api/people/','').replace('/','');
 return parseInt(extractedId);
}

function handleError (error: any) {
  let errorMsg = error.message || `error handle msg`
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
