import { Component } from '@angular/core';
import { Hero } from './hero';
import { Monstre } from './monstre';

@Component({
  selector: 'app-root',
  templateUrl: './TestDAttaque.html',
  styleUrls: ['./app.component.css']
})

export class TestDAttaque {
  title = 'Action hero';
  selectedHero: Hero;
  /*hero: Hero = {
   nom: 'Damien',
   hp: 20,
   atk: 8
   };
   monstre: Monstre = {
   nom: 'Araignée',
   hp: 10,
   atk: 3
   };*/

  heros:Array<Hero> = [
    new Hero('Damien',10, 2,20),
    new Hero('Lorenso',10, 2,20),
    new Hero('Yanis',10, 2,20)
  ];

  monstres:Array<Monstre> = [
    new Monstre('Araignée',10,2),
    new Monstre('Dragon',50,12),
    new Monstre('Ghoul',20,4)
 ];

  onClickAttaque(perso1, perso2) {
    perso2.hp -= perso1.atk;
  }
  onSelect(hero) {
    this.selectedHero = hero;
  }


}
