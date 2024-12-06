import { TragamonedasPadre } from "./TragamonedasPadre";


export class TragamonedasDiamante extends TragamonedasPadre{

    //atributos
    protected minimoDeApuesta : number = 100;
    protected valorApuesta: number = this.minimoDeApuesta;
    protected simbolo = ["💎", "👑", "🐉"];

}