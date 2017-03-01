import { Component } from '@angular/core';
import { LanceDe } from './LanceDe';
import { Hero } from './Hero';
import { Action } from './Action';
import {Monstre} from './Monstre';

const HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice', HP: 20, ATQ: 8, mana: 20},
  { id: 2, name: 'Narco', HP: 15, ATQ: 12, mana: 16},
  { id: 3, name: 'Bombasto', HP: 25, ATQ: 10, mana: 16},
  { id: 4, name: 'Celeritas', HP: 10, ATQ: 18, mana: 12},
  { id: 5, name: 'Magneta', HP: 30, ATQ: 5, mana: 32},
  { id: 6, name: 'RubberMan', HP: 22, ATQ: 11, mana: 16},
  { id: 7, name: 'Dynama', HP: 3, ATQ: 30, mana: 8},
  { id: 8, name: 'Dr IQ', HP: 40, ATQ: 2, mana: 80}
];

@Component({
  selector: 'my-app',
  template:`
    <lanceDe></lanceDe>
   
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
