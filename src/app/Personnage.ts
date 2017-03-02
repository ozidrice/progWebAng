import {hasProperties} from "codelyzer/util/astQuery";
/**
 * Created by OzidricePC on 01/03/2017.
 */
export class Personnage {
  private _name: string;
  private _HP : number;
  private _ATQ : number;

  constructor(name: string, HP: number, ATQ: number){
    this._name=name;
    this._HP=HP;
    this._ATQ=ATQ;
  }
  public prendreDegats(nbDegat:number){
    this._HP -= nbDegat;
  }

  get name(): string {
    return this._name;
  }

  get HP(): number {
    return this._HP;
  }

  get ATQ(): number {
    return this._ATQ;
  }
}
