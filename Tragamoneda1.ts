
import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";

export class Tragamoneda1 extends Juego implements JuegoCasino{
     //atributos
    protected minimoDeApuesta : number = 200
    protected valorApuesta: number = this.minimoDeApuesta;
    private simbolo: string [] = ["🍒", "🍋", "🍊", "🍉", "🍇"];


  
}

    // Función para girar los carretes
function girarCarretes(): void {
    // Obtener símbolos aleatorios
    const simbolo1 = simbolo[Math.floor(Math.random() * simbolo.length)];
    const simbolo2 = simbolo[Math.floor(Math.random() * simbolo.length)];
    const simbolo3 = simbolo[Math.floor(Math.random() * simbolo.length)];

    // Mostrar los resultados en los carretes
    carrete1.textContent = simbolo1;
    carrete2.textContent = simbolo2;
    carrete3.textContent = simbolo3;



}





/* // maquina.ts
export class tragamonedas1{
    constructor(public apuestaMinima: number, public pozoAcumulativo: number) {}

    public apostar(): void {
        // Lógica de apuesta
    }
}

// tragamonedas.ts
import { Maquina } from "./";

export class Tragamonedas extends Maquina {
    public nombreMaquina: string;

    constructor(nombreMaquina: string, apuestaMinima: number, pozoAcumulativo: number) {
        super(apuestaMinima, pozoAcumulativo);
        this.nombreMaquina = nombreMaquina;
    }

    public getNombreMaquina(): string {
        return this.nombreMaquina;
    }

    public setNombreMaquina(nombreMaquina: string): void {
        this.nombreMaquina = nombreMaquina;
    }

    public apostar(): void {
        // Lógica específica para la máquina tragamonedas
    }
}
*/