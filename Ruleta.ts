import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";

export class Ruleta extends Juego implements JuegoCasino{
    //atributos
    protected minimoDeApuesta : number = 50
    protected valorApuesta: number = this.minimoDeApuesta;
    private numerosRojos : number[] = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    private numerosNegros : number[] = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

    //metodos

    //menu especifico al momento de jugar a un numero
    public jugarNumero(): void{
        console.log("        --- Jugando al NUMERO ---")
        console.log("-------------------------------------------")
        console.log("Ingrese el numero a jugar --- 0 al 36 ---")
        console.log("-------------------------------------------")
        console.log("Ingrese cualquier otro numero para volver.")
        console.log("-------------------------------------------")

        let numeroAJugar: number = readlineSync.questionInt("Elige un numero: ");

        if (this.saldoJuego < this.valorApuesta) {
            console.error("--- No tienes suficiente saldo para esta apuesta ---");
            return;
        }
        
        if(numeroAJugar >= 0 && numeroAJugar <= 36){
            this.realizarApuestaNumero(numeroAJugar);
        }
    }

    //metodo que da un numero aleatorio
    public obtenerNumeroAleatorio() : number {
        let resultado : number = Math.floor(Math.random() * 37)
        console.log("--- El numero es el " + resultado + " ---" )
        return resultado;
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

    //metodo especifico para apostar al numero
    public realizarApuestaNumero(numeroAJugar: number): void {
        let resultado = this.obtenerNumeroAleatorio();
        //let esGanador = this.determinarApuestaNumero(numeroAJugar, resultado);

        if(numeroAJugar === resultado){
            this.determinarGananciaPerdida(true, 35)
        } else {
            this.determinarGananciaPerdida(false, 0);
        }
    }
    
    //apuestas simples 
    public jugarRojo() : void {
        if (this.saldoJuego < this.valorApuesta) {
            console.error("--- No tienes suficiente saldo para esta apuesta ---");
            return;
        }
        let resultado : number = this.obtenerNumeroAleatorio();
        if (this.numerosRojos.includes(resultado)) {
            this.determinarGananciaPerdida(true, 2);
        } else {
            this.determinarGananciaPerdida(false,0); 
        }      
    }

    public jugarNegro(): void {
        if (this.saldoJuego < this.valorApuesta) {
            console.error("--- No tienes suficiente saldo para esta apuesta ---");
            return;
        }
        let resultado : number = this.obtenerNumeroAleatorio();
        if (this.numerosNegros.includes(resultado)) {
            this.determinarGananciaPerdida(true, 2);
        } else {
            this.determinarGananciaPerdida(false, 0); 
        }
    }

    public jugarPar(): void {
        if (this.saldoJuego < this.valorApuesta) {
            console.error("--- No tienes suficiente saldo para esta apuesta ---");
            return;
        }
        let resultado : number = this.obtenerNumeroAleatorio();
        if (resultado % 2 === 0) {
            this.determinarGananciaPerdida(true, 2);
        } else {
            this.determinarGananciaPerdida(false, 0)
        }  
    }

    public jugarImpar(): void {
        if (this.saldoJuego < this.valorApuesta) {
            console.error("--- No tienes suficiente saldo para esta apuesta ---");
            return;
        }
        let resultado : number = this.obtenerNumeroAleatorio();
        if (resultado % 2 !== 0) {
            this.determinarGananciaPerdida(true, 2)
        } else {
            this.determinarGananciaPerdida(false, 0);
        }
    }

    //menu principal de la ruleta
    public mostrarMenuJuego(): void{
        console.log("         Seccion RULETA ");
        console.log("-------------------------------------")
        console.log("1 - Jugar al NUMERO.")
        console.log("2 - Jugar al color ROJO")
        console.log("3 - Jugar al color NEGRO")
        console.log("4 - Jugar al PAR")
        console.log("5 - Jugar al IMPAR")
        console.log("-------------------------------------")
        console.log("6 - Cambiar valor de apuesta.")
        console.log("-------------------------------------")
        console.log("0 - Volver")
        console.log("-------------------------------------")
        console.log("Creditos: " + this.getSaldoJuego() + " --- Apuesta: " + this.getValorApuesta());
    }

    //metodo para seleccionar una opcion del menu
    public seleccionarOpcion(): void {

        let opcion: number = readlineSync.questionInt("Elige una opcion: "); //pedimos que elijan una opcion

        if(opcion !== 0){
            switch (opcion) {                   //determinamos la opcion y ejecutamos
                case 1:
                    this.jugarNumero();
                    break;
                case 2:
                    this.jugarRojo();
                    break;
                case 3:
                    this.jugarNegro();
                    break;
                case 4:
                    this.jugarPar();
                    break;
                case 5:
                    this.jugarImpar();
                    break;
                case 6:
                    this.cambiarValorApuesta();
                    break;
                default:
                    console.error("--- Opcion no valida. Intenta de nuevo ---");
            }
            readlineSync.question("\n\rPresione Enter para continuar...");
            // Limpiar consola antes de mostrar el menú nuevamente
            console.clear();
            this.mostrarMenuJuego();
            this.seleccionarOpcion();

        } else {
            console.log("--- Volviendo al menu principal ---");
        }

    }
    
    //metodo abstracto jugar
    public jugar(usuario : Usuario): void {

        this.saldoJuego = usuario.getCreditos(); // obtenemos el saldo del usuario
        this.mostrarMenuJuego();
        this.seleccionarOpcion();
        usuario.setCreditos(this.saldoJuego);  // al terminar la sesion, le cargamos al usuario el dinero que tenga
        
    }
}