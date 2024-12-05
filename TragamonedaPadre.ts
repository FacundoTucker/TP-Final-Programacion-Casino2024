import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";
import { Casino } from "./Casino";
import { tragamonedaClasico } from "./TragamonedaClasico";

export class tragamonedaPadre extends Juego implements JuegoCasino{
    protected minimoDeApuesta : number = 50;
    protected valorApuesta: number = this.minimoDeApuesta;
    protected simbolo:string[];


    public mostrarMenuJuego(): void{
        console.log("           Tragamonedas!!            ")
        console.log("-------------------------------------")
        console.log(" Elige un jugo:                      ")
        console.log("-------------------------------------")
        console.log("1 - TragamonedaClasico               ")
        console.log("2 - TragamonedaDiamante              ")
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
            //this.ejecutarJuego() 
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

        this.mostrarMenuJuego();
        this.seleccionarOpcion();
    }
    else {
        console.log("--- Volviendo al menu principal ---");
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

// metodo principal para jugar entrar al tragamoneda 
public jugar(usuario : Usuario): void {
    this.saldoJuego = usuario.getCreditos(); //obtenemos saldo de usuario 
    this.mostrarMenuJuego();
    this.seleccionarOpcion();
    usuario.setCreditos(this.saldoJuego);  // al terminar la sesion, le cargamos al usuario el dinero que tenga
}
}
