import * as readlineSync from "readline-sync";
//import { Tragamoneda1} from "./Tragamoneda1";
import { JuegoCasino } from "./JuegoCasino";
import { Usuario } from "./Usuario";

export abstract class Juego { 
    //atributos
    protected minimoDeApuesta: number;
    protected saldoJuego : number;
    protected valorApuesta : number;

    //setters

    public setSaldoJuego(saldo : number): void{
        this.saldoJuego = saldo;
    }
    public setValorApuesta(nuevoValorApuesta : number): void{
        this.valorApuesta = nuevoValorApuesta;
    }

    //getters

    public getSaldoJuego(): number {
        return this.saldoJuego;
    }
    public getValorApuesta() : number {
        return this.valorApuesta;
    }

    //metodo para cambiar el valor de la apuesta
    public cambiarValorApuesta(): void {
        let nuevoValorApuesta : number = readlineSync.questionInt("Ingrese el valor de su apuesta: ");
        if(nuevoValorApuesta >= this.minimoDeApuesta && nuevoValorApuesta <= this.saldoJuego){
            this.valorApuesta = nuevoValorApuesta;
        } else {
            console.error("--- Valor invalido. El minimo de apuesta es de " + this.minimoDeApuesta + " y tu saldo disponible es " + this.saldoJuego + " ---");
        }
    }

    //metodo abstracto

    abstract jugar(usuario : Usuario): void;
}