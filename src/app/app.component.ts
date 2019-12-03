import { Hero } from './model/hero';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballService } from './service/football.service';

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
    private fService: FootballService
  ) {



  }
}
