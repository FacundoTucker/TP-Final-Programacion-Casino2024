import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";

export class TragamonedasPadre extends Juego implements JuegoCasino{
//atributos
    protected simbolo:string[];

//menu
    public mostrarMenuJuego(): void{
        readlineSync.question("\n\rPresione Enter para continuar...");
        // Limpiar consola antes de mostrar el menú nuevamente
        console.clear();
        console.log("          Seccion Tragamonedas     ");
        console.log("-------------------------------------")
        console.log("1 - Jugar  ");
        console.log("-------------------------------------")
        console.log("4 - Cambiar valor de apuesta.")
        console.log("-------------------------------------")
        console.log("0 - Volver")
        console.log("-------------------------------------")
        console.log("Creditos: " + this.getSaldoJuego() + " --- Apuesta: " + this.getValorApuesta());
    } 

//metodo para seleccionar una opcion del menu
public seleccionarOpcion(): void {
    let opcion: number = readlineSync.questionInt("Elige una opcion: "); //pedimos que elijan una opcion
    if(opcion !== 0){
    switch (opcion) {
        case 1:
            this.jugarApuesta() 
            break;
        case 4:
            this.cambiarValorApuesta();
            break;
            default:
                console.error("--- Opcion no valida. Intenta de nuevo ---");
        }
       
        this.mostrarMenuJuego();
        this.seleccionarOpcion();
    }
    else {
        console.log("--- Volviendo al menu principal ---");
    }
}

//Metodo para girar los carretes 
public girarCarretes(): string[] {
    let carrete1 = this.simbolo[Math.floor(Math.random() * this.simbolo.length)];
    let carrete2 = this.simbolo[Math.floor(Math.random() * this.simbolo.length)];
    let carrete3 = this.simbolo[Math.floor(Math.random() * this.simbolo.length)];

    return [carrete1, carrete2, carrete3];
}

// Función para verificar si hay una combinación ganadora
public determinarApuesta(carrete: string[]): boolean {
    return carrete[0] === carrete[1] && carrete[1] === carrete[2];
}

// metodo apuesta  
public jugarApuesta() : void {
    if (this.saldoJuego < this.valorApuesta) {
        console.error("--- No tienes suficiente saldo para esta apuesta ---");
        return;
    }
    let carrete = this.girarCarretes();
    console.log(`Carrete 1: ${carrete[0]} | Carrete 2: ${carrete[1]} | Carrete 3: ${carrete[2]}`);
    if (this.determinarApuesta(carrete)) {
        this.determinarGananciaPerdida(true, 10);
    } else {
        this.determinarGananciaPerdida(false,0); 
    }      
}

//metodo que retorna si ganaste o perdiste y procesa las ganancias/perdidas
public determinarGananciaPerdida(ganoOPerdio: boolean, multiplicador : number): void {
    if (ganoOPerdio === true) {
       console.log(`--- ¡Ganaste! Has sacado 3 carretes iguales! ---`);
       this.saldoJuego -= this.valorApuesta;
       this.saldoJuego += this.valorApuesta * multiplicador;
       } else {
           console.log(`--- Lo siento, Perdiste!  ---`);
           this.saldoJuego -= this.valorApuesta;
           }
}

// metodo principal para jugar entrar al tragamoneda 
public jugar(usuario : Usuario): void {
    console.log("Entrando a tragamonedas...")
    this.saldoJuego = usuario.getCreditos(); //obtenemos saldo de usuario 
    this.mostrarMenuJuego();
    this.seleccionarOpcion();
    usuario.setCreditos(this.saldoJuego);  // al terminar la sesion, le cargamos al usuario el dinero que tenga
}
}
