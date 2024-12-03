import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";
import { Casino } from "./Casino";
import { TragamonedaClasico } from "./TragamonedaClasico";

export class TragamonedaDiamante extends TragamonedaClasico implements JuegoCasino{
    protected minimoDeApuesta : number = 100;
    protected valorApuesta: number = this.minimoDeApuesta;
    private simbolos = ["💎", "👑", "🐉"];


    public mostrarMenuJuego(): void{
        console.log("            Bienvenidos a tragamonedas Diamante!!            ")
        console.log("-------------------------------------")
        console.log("1 -     Ingrese uno para jugar:      ")
        console.log("-------------------------------------")
        console.log("           Mucha suerte!!            ")
        console.log("-------------------------------------")
        console.log("4 - Cambiar valor de apuesta.")
        console.log("-------------------------------------")
        console.log("0 - Volver")
        console.log("-------------------------------------")
        console.log("Creditos: " + this.getSaldoJuego() + " --- Apuesta: " + this.getValorApuesta());

}
}