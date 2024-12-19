import { JuegoCasino } from "./JuegoCasino";
import { TragamonedasPadre } from "./TragamonedasPadre";


export class TragamonedasDiamante extends TragamonedasPadre implements JuegoCasino{

    //atributos
    protected minimoDeApuesta : number = 100;
    protected valorApuesta: number = this.minimoDeApuesta;
    protected simbolo = ["💎", "👑", "🐉", "🍉"];

    public determinarApuesta(carrete: string[]): boolean {
        return carrete[0] === carrete[1] || carrete[1] === carrete[2] || carrete[0] === carrete[2];
    }

    public jugarApuesta() : void {
        if (this.saldoJuego < this.valorApuesta) {
            console.error("--- No tienes suficiente saldo para esta apuesta ---");
            return;
        }
        let carrete = this.girarCarretes();
        console.log(`Carrete 1: ${carrete[0]} | Carrete 2: ${carrete[1]} | Carrete 3: ${carrete[2]}`);
        if (this.determinarApuesta(carrete)) {
            this.determinarGananciaPerdida(true, 2);
        } else {
            this.determinarGananciaPerdida(false,0); 
        }      
    }

    //metodo que retorna si ganaste o perdiste y procesa las ganancias/perdidas
    public determinarGananciaPerdida(ganoOPerdio: boolean, multiplicador : number): void {
        if (ganoOPerdio === true) {
            console.log(`--- ¡Ganaste! Has sacado al menos 2 carretes iguales! ---`);
            this.saldoJuego -= this.valorApuesta;
            this.saldoJuego += this.valorApuesta * multiplicador;
       } else {
           console.log(`--- Lo siento, Perdiste!  ---`);
           this.saldoJuego -= this.valorApuesta;
        }
    }
}