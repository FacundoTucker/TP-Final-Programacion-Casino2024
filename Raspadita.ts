import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";

export class Raspadita extends Juego implements JuegoCasino{

    protected minimoDeApuesta : number = 50;
    protected valorApuesta : number = this.minimoDeApuesta;
    
    //menu principal
    public mostrarMenuJuego(): void{
        console.log("         Seccion RASPADITA ");
        console.log("-------------------------------------")
        console.log("1 - Jugar ♠    Picas.")
        console.log("2 - Jugar ♥    Corazones.")
        console.log("3 - Jugar ♦    Diamantes.")
        console.log("4 - Jugar ♣    Tréboles.")
        console.log("-------------------------------------")
        console.log("5 - Cambiar valor de apuesta.")
        console.log("-------------------------------------")
        console.log("0 - Volver")
        console.log("-------------------------------------")
        console.log("Creditos: " + this.getSaldoJuego() + " --- Apuesta: " + this.getValorApuesta());
    }     

    //metodo que retorna si ganas
    public determinarApuestaPalos(contador : number): boolean{
        if(contador > 3){
            return true;
        } else {
            return false;
        }
    }
    public contarCaracteres(cadena: string, caracterBuscado: string): void {
         let contador = 0;         
    for (const caracter of cadena) {
        if (caracter === caracterBuscado) {
            contador++;
        }
    }
    console.log("      Ud ha acertado "+contador+" veces \n\r\n\r")
    this.determinarGananciaPerdida(this.determinarApuestaPalos(contador),contador);
    }
    public cadenaAleatoria(caracterBuscado: string): void {
        let caracteresPermitidos:string="♠♥♦♣"
        let resultado = '';
        for (let i = 0; i < 8 ; i++) {
            let indice = Math.floor(Math.random() * caracteresPermitidos.length);
            resultado += caracteresPermitidos[indice];
        }
        console.log("\n\r\n\r          █ █ █ █ █ █ █ █ ")
        // let opcion:string=" ";
        let opcion:string=readlineSync.question("\n\r\n\rPresione cualquier tecla para raspar \n\r\n\r");
        console.log("      ¡Esta es su raspadita!\n\r\n\r           ",resultado)
        this.contarCaracteres(resultado,caracterBuscado);
        
    }

    //metodo que retorna si ganaste o perdiste y procesa las ganancias/perdidas
    public determinarGananciaPerdida(ganoOPerdio: boolean, multiplicador : number): void {
        if (ganoOPerdio === true) {
            console.log(`\n\r\n\r--- ¡Ganaste! --- \n\r\n\r`);
            this.saldoJuego -= this.valorApuesta;
            this.saldoJuego += this.valorApuesta * multiplicador;
        } else {
            console.log(`\n\r\n\r          --- Perdiste ---\n\r\n\r`);
            this.saldoJuego -= this.valorApuesta;
        }
    }
    
    //metodo para seleccionar una opcion del menu
    public seleccionarOpcion(): void {
        if (this.saldoJuego < this.minimoDeApuesta) {
            console.error("\n\r\n\r--- No tienes suficiente saldo para esta Raspadita \n\r           Volviendo al menu principal ---\n\r\n\r");
            return;
        }
        let opcion: number = readlineSync.questionInt("\n\r\n\r Elige una opcion: \n\r\n\r");
        if(opcion !== 0 && this.saldoJuego >= this.valorApuesta){
            let caracteres:string='';
            switch (opcion) {                  
                case 1:
                    caracteres = '♠';
                    this.cadenaAleatoria(caracteres);
                    break;
                case 2:
                    caracteres = '♥';
                    this.cadenaAleatoria(caracteres);
                    break;
                case 3:
                    caracteres = '♦';
                    this.cadenaAleatoria(caracteres);
                    break;
                case 4:
                    caracteres = '♣';
                    this.cadenaAleatoria(caracteres);     
                    break;           
                case 5:
                    this.cambiarValorApuesta();
                    break;
                default:
                    console.error("--- Opcion no valida. Intenta de nuevo ---");
            }

            this.mostrarMenuJuego();
            this.seleccionarOpcion();

        } else if (opcion !== 0 && this.saldoJuego < this.valorApuesta) {
            console.log("--- Para seguir jugando raspadita deberia o cargar mas credito \n\r o cambiar el valor de la apuesta (su credito es menor al valor de la apuesta)\n\r volviendo al menu principal ---");
        } else {
            console.log("Volviendo al menu principal")
        }
        
    }
    //atributos
    public jugar(usuario : Usuario): void {

        this.saldoJuego = usuario.getCreditos(); // obtenemos el saldo del usuario
        this.mostrarMenuJuego();
        this.seleccionarOpcion();
        usuario.setCreditos(this.saldoJuego);  // al terminar la sesion, le cargamos al usuario el dinero que tenga
        
    }
       
}

