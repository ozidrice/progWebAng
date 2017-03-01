import { Component } from '@angular/core';

export class Des {
  value: number; //Dès 100, dès 10, dès 6...
  max: number; //Jet sur 70, jet sur 50...
  jet: number;
}

export class Hero {
  id: number;
  name: string;
  HP : number;
  ATQ : number;
  mana : number ;
  cout_mana : number;
}

export class Action {
  cout_mana: number;
  atq: number;

}


const HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice', HP: 20, ATQ: 8, mana: 20, cout_mana: 4 },
  { id: 2, name: 'Narco', HP: 15, ATQ: 12, mana: 16, cout_mana: 4  },
  { id: 3, name: 'Bombasto', HP: 25, ATQ: 10, mana: 16, cout_mana: 4 },
  { id: 4, name: 'Celeritas', HP: 10, ATQ: 18, mana: 12, cout_mana: 4},
  { id: 5, name: 'Magneta', HP: 30, ATQ: 5, mana: 32, cout_mana: 4 },
  { id: 6, name: 'RubberMan', HP: 22, ATQ: 11, mana: 16, cout_mana: 4 },
  { id: 7, name: 'Dynama', HP: 3, ATQ: 30, mana: 8, cout_mana: 4 },
  { id: 8, name: 'Dr IQ', HP: 40, ATQ: 2, mana: 80, cout_mana: 4 },
  // { id: 9, name: 'Magma', HP: 20, ATQ: 8 },
  // { id: 10, name: 'Tornado', HP: 20, ATQ: 8 }
];




@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <button (click)="jetDes()">Lancer</button>
    <div *ngIf="des.jet != null">
      <h2>Mon jet : {{des.jet}} {{des.reussi}}</h2>
      <div *ngIf="des.max - des.jet < 0" style="color: red">
        <div *ngIf="des.jet > 95" style="color: red; font-weight: bold;">
          <p> Echec critique ! </p>
        </div>
        <div *ngIf="des.jet <= 95" style="color: red;">
          <p> Jet raté ! </p>
        </div>
      </div>
      <div *ngIf="des.max - des.jet >= 0" style="color: greeen">
        <div *ngIf="des.jet < 5" style="color: green; font-weight: bold;">
          <p> Réussite critique ! </p>
        </div>
        <div *ngIf="des.jet >= 5" style="color: green;">
          <p> Jet réussi ! </p>
        </div>
      </div>
    </div>
   

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
      <div><label>cout_mana: </label>{{selectedHero.cout_mana}}</div>
      <div><input id=bouton type="submit" value="Aller au combat"></div>
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
  title = 'Lancé de dès';
  des: Des = {
    value: null,
    max: null,
    jet: null

  };

  jetDes() {
    this.des = {
      value: 100,
      max: 50,
      jet: this.getRandomInt(1, 100)
    };
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
