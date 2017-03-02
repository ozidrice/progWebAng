import { Component } from '@angular/core';
import { LanceDe } from './LanceDe';
import { Hero } from './Hero';
import { Action } from './Action';
import { Monstre } from './Monstre';

const HEROES: Hero[] = [
  new Hero('Damien',10, 2,20),
  new Hero('Lorenso',10, 2,20),
  new Hero('Yanis',10, 2,20)
];

@Component({
  selector: 'my-app',
  template:`
    <LanceDe>[Module lancé de dé]</LanceDe>
   
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
      <div><label>HP: </label>{{selectedHero.HP}}</div>
      <div><label>ATQ: </label>{{selectedHero.ATQ}}</div>
      <div><label>mana: </label>{{selectedHero.mana}}</div>
      <div><input id="bouton" type="submit" value="Aller au combat"></div>
    </div>
   
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
`
})

export class AppComponent {

  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}





/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
