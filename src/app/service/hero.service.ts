import { Hero } from './../model/hero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  protected cache: Array<Hero> = [];

  jsonUrl = 'http://localhost:6660/heroes';
  constructor(
    private http: HttpClient
  ) {

  }

  getAll(): Observable<Hero[]> {
    const output: Observable<Hero[]> = this.http.get<Hero[]>(this.jsonUrl);
    output.forEach(element => {
      element.forEach(element2 => {
        this.cache.push(element2);
      });
    });
    return output;
  }

  getOne(id: string | number): Observable<Hero> {
    return this.http.get<Hero>(`${this.jsonUrl}/${id}`);
  }

  myErrorHandler(error) {
    console.error('MYERROR', error);
  }

  isUserExists() {

  }

  add(hero: Hero): Observable<any> {
    const i = this.cache.includes(hero);
    if (i) {
      return this.getOne(hero.id);
    }

    return this.http
      .post<Observable<any>>(this.jsonUrl, hero)
      .pipe(
        catchError(console.log('MYERROR') as any)
      );
  }

  update(hero: Hero): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${hero.id}`, hero);

  }
  remove(hero: any): Observable<any> {
    hero = hero.id ? hero.id : hero;
    return this.http.delete(` ${this.jsonUrl}/${hero}`);
  }
}
