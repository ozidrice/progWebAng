/**
 * Created by OzidricePC on 01/03/2017.
 */
import { Personnage } from './Personnage';


export class Monstre extends Personnage{
  constructor(name: string, HP: number, ATQ: number){
    super(name, HP, ATQ)
  }
}

