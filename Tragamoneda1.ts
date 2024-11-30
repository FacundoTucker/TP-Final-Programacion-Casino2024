
import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";
import { Casino } from "./Casino";

export class tragamoneda1 extends Juego implements JuegoCasino{
     //atributos
     protected minimoDeApuesta : number = 50
     protected valorApuesta: number = this.minimoDeApuesta;
     private simbolo = ["🍒", "🍋", "🍉"];
    

// Función para girar los carretes
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

//apuestas 
public jugarUno() : void {
    if (this.saldoJuego < this.valorApuesta) {
        console.error("--- No tienes suficiente saldo para esta apuesta ---");
        return;
    }
    if (this.determinarApuesta) {
        this.determinarGananciaPerdida(true, 50);
    } else {
        this.determinarGananciaPerdida(false,0); 
    }      
}

public jugarDos() : void {
    if (this.saldoJuego < this.valorApuesta) {
        console.error("--- No tienes suficiente saldo para esta apuesta ---");
        return;
    }
    if (this.determinarApuesta) {
        this.determinarGananciaPerdida(true, 100);
    } else {
        this.determinarGananciaPerdida(false,0); 
    }      
}

public jugarTres() : void {
    if (this.saldoJuego < this.valorApuesta) {
        console.error("--- No tienes suficiente saldo para esta apuesta ---");
        return;
    }
    if (this.determinarApuesta) {
        this.determinarGananciaPerdida(true, 200);
    } else {
        this.determinarGananciaPerdida(false,0); 
    }      
}

// menu
public mostrarMenuJuego(): void{
    console.log("         Bienvenidos!     ");
    console.log("-------------------------------------")
    console.log("1 - Jugar  $50  ")
    console.log("2 - Jugar 	$100  ")
    console.log("3 - Jugar  $200  ")
    console.log("-------------------------------------")
    console.log("4 - Cambiar valor de apuesta.")
    console.log("-------------------------------------")
    console.log("0 - Volver")
    console.log("-------------------------------------")
    console.log("Creditos: " + this.getSaldoJuego() + " --- Apuesta: " + this.getValorApuesta());
}     

public seleccionarOpcion(): void {
    let opcion: number = readlineSync.questionInt("Elige una opcion: "); //pedimos que elijan una opcion
    if(opcion !== 0){
    switch (opcion) {
        case 1:
            this.jugarUno();
            break;
        case 2:
            this.jugarDos();
            break;
        case 3:
            this.jugarTres();
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

/*
//Función para calcular las ganancias dependiendo de la apuesta
public calcularGanancia(apuesta: number, carrete: string[]): number {
    if (this.determinarApuesta(carrete)) {
        return apuesta * 2;   // Por ejemplo, si se obtiene una combinación ganadora, se duplica la apuesta
                // El jugador recibe el doble de su apuesta
    }
    return 0; // No hay ganancia si no hay combinación ganadora
}*/

public determinarGananciaPerdida(ganoOPerdio: boolean, multiplicador : number): void {
     if (ganoOPerdio === true) {
        console.log(`--- ¡Ganaste! ---`);
        this.saldoJuego -= this.valorApuesta;
        this.saldoJuego += this.valorApuesta * multiplicador;
        } else {
            console.log(`--- Perdiste ---`);
            this.saldoJuego -= this.valorApuesta;
            }
}

// Función principal para jugar al tragamonedas
public jugar(usuario : Usuario): void {
    console.log("¡Girando los carretes...");
    let carrete = this.girarCarretes();
    console.log(`Carrete 1: ${carrete[0]} | Carrete 2: ${carrete[1]} | Carrete 3: ${carrete[2]}`);

    if (this.determinarApuesta(carrete)) {
        console.log("¡Felicidades, ganaste!");
    } else {
        console.log("No ha habido suerte. Intenta nuevamente.");
    }

        this.saldoJuego = usuario.getCreditos(); // obtenemos el saldo del usuario
        this.mostrarMenuJuego();
        this.seleccionarOpcion();
        usuario.setCreditos(this.saldoJuego);  // al terminar la sesion, le cargamos al usuario el dinero que tenga
        
    }
}