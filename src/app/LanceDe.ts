import { Component } from '@angular/core';

export class Des {
  value: number; //Dès 100, dès 10, dès 6...
  max: number; //Jet sur 70, jet sur 50...
  jet: number;
}

@Component({
  selector: 'lanceDe',
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
      <div *ngIf="des.max - des.jet >= 0" style="color: green">
        <div *ngIf="des.jet < 5" style="color: green; font-weight: bold;">
          <p> Réussite critique ! </p>
        </div>
        <div *ngIf="des.jet >= 5" style="color: green;">
          <p> Jet réussi ! </p>
        </div>
      </div>
    </div>
`
})

export class LanceDe {
  title = 'Lancer un dé';
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

}

