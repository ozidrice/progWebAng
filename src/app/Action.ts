/**
 * Created by OzidricePC on 01/03/2017.
 */
import { Hero } from './Hero';

export abstract class Action{

  public static attaquer(attanquant:Hero, manaCost:number, cible:Hero) {
    attanquant.depenserMana(manaCost);
    //Si pas assez de mana Throw ManaInsuffisant
    cible.prendreDegats(attanquant.ATQ);
  }

}

