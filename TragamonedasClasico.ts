import { TragamonedasPadre } from "./TragamonedasPadre";

export class TragamonedasClasico extends TragamonedasPadre{
    
     //atributos
     protected minimoDeApuesta : number = 50;
     protected valorApuesta: number = this.minimoDeApuesta;
     protected simbolo = ["🍒", "🍋", "🍉"];
   
}