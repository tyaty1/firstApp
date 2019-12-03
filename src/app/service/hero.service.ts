import { Hero } from './../model/hero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  jsonUrl = 'http://localhost:666/heroes';
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.jsonUrl);
  }
  getOne(id: string | number): Observable<Hero> {
    return this.http.get<Hero>(`${this.jsonUrl}/${id}`);
  }
  add(hero: Hero): Observable<any> {
    let  a;
    try{
       a = this.http.post<Observable<any>>(this.jsonUrl, hero);
       return a;
    }
    catch(error){
      console.error('A HIBA:', error.message);
    }

    return a;
  }
  update(hero: Hero): Observable<any> {
    return   this.http.put(`${this.jsonUrl}/${hero.id}`, hero);

  }
  remove(hero: any ): Observable<any> {
    hero = hero.id ? hero.id : hero;
    return this.http.delete(` ${this.jsonUrl}/${hero}`);
  }
}
