import { Component } from '@angular/core';
/**
 * Created by OzidricePC on 01/03/2017.
 */
import { Personnage } from './Personnage';


/**
 * Created by Shenggy on 01/03/2017.
 */

export class Hero extends Personnage{
  private _mana;

  constructor(name: string, HP: number, ATQ: number, mana:number){
    super(name, HP, ATQ);
    this._mana=mana;
  }
  public depenserMana (nb:number){
    if(this._mana-nb)
      throw new ManaInsuffisant;
    this._mana -= nb;
  }

  get mana() {
    return this._mana;
  }
}



class ManaInsuffisant extends Error {

}
