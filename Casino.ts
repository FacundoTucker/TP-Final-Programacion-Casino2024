import * as readlineSync from "readline-sync";


import { Juego } from "./Juego";

export class Casino{
    //atributo
    private juegos : Juego[] = [];
    private saldo : number = 0;

    //metodos
    public setSaldo(nuevoSaldo : number): void {
        this.saldo = nuevoSaldo;
    }

    public mostrarMenu(){
        console.log("Bienvenidos")
        console.log("0 - Ingresar dinero.");
        console.log("1 - Jugar Ruleta.")
        console.log("2 - Jugar Tragamonedas 1.");
        console.log("3 - Jugar Tragamonedas 2.");
        console.log("4 - Retirar dinero.");
        console.log("5 - Salir")
        console.log("Saldo disponible: " + this.saldo);
    }

    public seleccion(){
        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        switch (opcion) {
            case 0:
                let nuevoSaldo : number = readlineSync.questionInt("Ingrese el monto(minimo de carga 2000): ");
                this.setSaldo(nuevoSaldo);
                this.iniciar();
                break;
            case 1: this.iniciarJuego(juegos[0])

            case 2: this.iniciarJuego(juegos[1])

            case 3:this.iniciarJuego(juegos[2])

            case 4:

            case 5:
                let retiro : number = readlineSync.questionInt("Ingrese el monto(minimo de retiro 2500): ");
                this.setSaldo(this.saldo - retiro);
                this.iniciar();
                break;

            case 6: 
                console.log("¡Gracias por confiar en nosotros!(todo al rojo)");
                break;

            default:
                console.log("Ingrese una opcion valida.");
                this.iniciar();
                break;
        }
    }

    public iniciar(){
        this.mostrarMenu();
        this.seleccion();
    }

    public iniciarJuego(juego : Juego): void{
        juego.jugar();
    }



}