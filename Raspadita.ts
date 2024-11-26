import * as readlineSync from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Juego } from "./Juego";
import { Usuario } from "./Usuario";

export class Raspadita extends Juego implements JuegoCasino{

    protected minimoDeApuesta : number = 50
    protected valorApuesta: number = this.minimoDeApuesta;
    
    //menu principal
    public mostrarMenuJuego(): void{
        console.log("         Seccion RASPADITA ");
        console.log("-------------------------------------")
        console.log("1 - Jugar  ♠	Picas.")
        console.log("2 - Jugar 	♥	Corazones.")
        console.log("3 - Jugar ♦	Diamantes. ")
        console.log("4 - Jugar ♣	Tréboles")
        console.log("-------------------------------------")
        console.log("5 - Cambiar valor de apuesta.")
        console.log("-------------------------------------")
        console.log("0 - Volver")
        console.log("-------------------------------------")
        console.log("Creditos: " + this.getSaldoJuego() + " --- Apuesta: " + this.getValorApuesta());
    }     

    //metodo que retorna si ganas
    public determinarApuestaPalos(contador : number): boolean{
        if(contador > 4){
            return true;
        } else {
            return false;
        }
    }
    public contarCaracteres(cadena: string, caracterBuscado: string): void {
        let contador = 0;

        cadena.split('').forEach(function(caracter) {
            if (caracter === caracterBuscado) {
                contador++;
            }
        console.log(contador)
        this.determinarApuestaPalos(contador)
        });
    }
    public cadenaAleatoria(caracteresPermitidos: string): void {
        let resultado = '';
        for (let i = 0; i < 8 ; i++) {
            let indice = Math.floor(Math.random() * caracteresPermitidos.length);
            resultado += caracteresPermitidos[indice];
        }
        console.log('█ █ █ █ █ █ █ █')
        console.log(resultado)
        console.log (this.contarCaracteres(resultado,caracteresPermitidos))
        }

    //metodo que retorna si ganaste o perdiste y procesa las ganancias/perdidas
    public determinarGananciaPerdida(ganoOPerdio: boolean, multiplicador : number): void {
        if (ganoOPerdio === true) {
            console.log(`--- ¡Ganaste! --- `);
            this.saldoJuego -= this.valorApuesta;
            this.saldoJuego += this.valorApuesta * multiplicador;
        } else {
            console.log(`--- Perdiste ---`);
            this.saldoJuego -= this.valorApuesta;
        }
    }
    
    //metodo para seleccionar una opcion del menu
    public seleccionarOpcion(): void {

        let opcion: number = readlineSync.questionInt("Elige una opcion: ");
        if(opcion !== 0){
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
                case 4:
                    caracteres = '♣';
                    this.cadenaAleatoria(caracteres);                
                case 5:
                    this.cambiarValorApuesta();
                    break;
                default:
                    console.error("--- Opcion no valida. Intenta de nuevo ---");
            }

            this.mostrarMenuJuego();
            this.seleccionarOpcion();

        } else {
            console.log("--- Volviendo al menu principal ---");
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

