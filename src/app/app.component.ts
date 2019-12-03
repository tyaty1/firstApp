import { Hero } from './model/hero';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'firstApp';
  myHero: Hero = {
    name: 'Skitter',
    address: 'Brockton Bay',
    superpower: 'bug control'
  };

  listObervable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService
  ) {
    this.hService.getAll().forEach(element => {
      console.log('All Hero ', element);
    });

    this.hService.getOne(1).forEach(element => {
      console.log('Fisrs hero', element);
    });



    this.hService.add({ id: 7, name: 'NotVista', address: 'Brockton Bay', superpower: 'Spatial  manipulation ' }).forEach(element => {
      console.log('First hero', element);
    });

    this.hService.update({ id: 7, name: 'Vista', address: 'Brockton Bay', superpower: 'Spatial  manipulation ' }).forEach(element => {
      console.log('First hero', element);
    });

    this.hService.remove(2).forEach(element => {
      console.log('D hero', element);
    });

  }
}
