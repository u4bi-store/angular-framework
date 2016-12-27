import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
 
  private baseUrl: string = 'http://swapi.co/api';
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .toPromise()
      .then(mapHeroes)
      .catch(handleError);
  }
  
  getHero(id: number): Promise<Hero>{
    return this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .toPromise()
      .then(mapHero)
      .catch(handleError);
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
  return Promise.reject(errorMsg);
}
