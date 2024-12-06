
import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";
import { Casino } from "./Casino";
import { tragamonedaPadre } from "./TragamonedaPadre";

export class tragamonedaClasico extends tragamonedaPadre implements Juego{
     //atributos
     protected minimoDeApuesta : number = 50;
     protected valorApuesta: number = this.minimoDeApuesta;
     protected simbolo = ["🍒", "🍋", "🍉"];
   

// metodo para girar los carretes
public girarCarretes(): string[] {
    let carrete1 = this.simbolo[Math.floor(Math.random() * this.simbolo.length)];
    let carrete2 = this.simbolo[Math.floor(Math.random() * this.simbolo.length)];
    let carrete3 = this.simbolo[Math.floor(Math.random() * this.simbolo.length)];

    return [carrete1, carrete2, carrete3];
}

// menu principal
public mostrarMenuJuegoClasico(): void{
    console.log("            Bienvenidos a tragamonedas Clasico!!            ");
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

//metodo para seleccionar una opcion del menu
public seleccionarOpcion(): void {
    let opcion: number = readlineSync.questionInt("Elige una opcion: "); //pedimos que elijan una opcion
    if(opcion !== 0){
    switch (opcion) {
        case 1:
            this.jugarApuesta();
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            this.cambiarValorApuesta();
            break;
            default:
                console.error("--- Opcion no valida. Intenta de nuevo ---");
        }

        this.mostrarMenuJuegoClasico();
        this.seleccionarOpcion();
    }
    else {
        console.log("--- Volviendo al menu principal ---");
    }
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
        console.log(`--- ¡Ganaste! ---`);
        this.saldoJuego -= this.valorApuesta;
        this.saldoJuego += this.valorApuesta * multiplicador;
        } else {
            console.log(`--- Perdiste ---`);
            this.saldoJuego -= this.valorApuesta;
            }
}

// metodo principal para jugar al tragamonedas
public jugar(usuario : Usuario): void {
        this.saldoJuego = usuario.getCreditos(); //obtenemos saldo de usuario 
        this.mostrarMenuJuegoClasico();
        this.seleccionarOpcion();
        usuario.setCreditos(this.saldoJuego);  // al terminar la sesion, le cargamos al usuario el dinero que tenga
    }
}