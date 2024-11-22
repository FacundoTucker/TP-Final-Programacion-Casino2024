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

    //metodo abstracto

    abstract jugar(usuario : Usuario): void;
}