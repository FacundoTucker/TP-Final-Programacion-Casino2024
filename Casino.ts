import * as readlineSync from "readline-sync"; 

import { Juego } from "./Juego";
import { Ruleta } from "./Ruleta";
import { Usuario } from "./Usuario";
//import { tragamonedaClasico } from "./TragamonedaClasico";
import { tragamonedaPadre} from "./TragamonedaPadre";
import { Raspadita } from "./Raspadita";

export class Casino {

    //atributos
    private juegos: Juego[] = [];
    private usuario : Usuario[] = [];
    private minimoDeRetiro: number = 3000;
    private minimoDeCarga: number = 2000;

    //getters

    public getMinimoDeRetiro(): number {
        return this.minimoDeRetiro;
    }
    public getMinimoDeCarga(): number {
        return this.minimoDeCarga;
    }
    public agregarUsuario(usuario : Usuario): void {
        this.usuario.push(usuario)
    }
    public agregarJuego(juego : Juego): void {
        this.juegos.push(juego);
    }

    //metodos

    //iniciar casino(consola)
    public iniciar() {
        this.mostrarMenuPrincipal();
        this.seleccion();
    }

    //ejecucion de los juegos deseados
    public ejecutarJuego(juego: Juego, usuario : Usuario): void {
        juego.jugar(usuario);
    }

    //retiros de creditos

    public realizarRetiro(): void {
        if (this.usuario[0].getCreditos() < this.getMinimoDeRetiro()) {
            console.error(`--- No dispones creditos minimos para retirar. El retiro mínimo es de $${this.getMinimoDeRetiro()} ---`);
        } else {
            let retiro: number = readlineSync.questionInt(`Ingrese el monto (minimo de retiro $${this.getMinimoDeRetiro()}): `);
            while (retiro > this.usuario[0].getCreditos() || retiro < this.getMinimoDeRetiro()) {
                if (retiro > this.usuario[0].getCreditos()) {
                    console.error("--- ¡Quieres retirar mas creditos de los que tienes! Vuelve a intentarlo ---");
                    retiro = readlineSync.questionInt(`Ingrese el monto (minimo de retiro $${this.getMinimoDeRetiro()}): `);
                } else if (retiro < this.getMinimoDeRetiro()) {
                    console.error(`--- ¡El retiro mínimo es de $${this.getMinimoDeRetiro()}! Intenta nuevamente ---`);
                    retiro = readlineSync.questionInt(`Ingrese el monto (minimo de retiro $${this.getMinimoDeRetiro()}): `);
                }
            }

            console.log("--- Retiro realizado con exito ---");
            this.usuario[0].setCreditos(this.usuario[0].getCreditos() - retiro);

        }
    }

    //cargas de creditos

    public realizarCarga(): void {
        let nuevosCreditos: number = readlineSync.questionInt(`Ingrese el monto (minimo de carga $${this.getMinimoDeCarga()}): `);
        while (nuevosCreditos < this.getMinimoDeCarga()) {
            console.error(`--- El minimo de carga es de $${this.getMinimoDeCarga()} ---`);
            nuevosCreditos = readlineSync.questionInt(`Ingrese el monto (minimo de carga $${this.getMinimoDeCarga()}): `);
        }
        console.log("--- Carga realizada con exito ---");
        this.usuario[0].setCreditos(this.usuario[0].getCreditos() + nuevosCreditos);
    }

    //muestra del menu por consola

    public mostrarMenuPrincipal() {
        console.log("       Casino <nombre>");
        console.log("--------------------------");
        console.log("1 - Cargar créditos.");
        console.log("2 - Jugar Ruleta.");
        console.log("3 - Jugar Tragamonedas");
       // console.log("4 - Jugar Tragamonedas Diamantes.");
        console.log("5 - Jugar Raspadita");
        console.log("--------------------------");
        console.log("6 - Retirar créditos.");
        console.log("--------------------------");
        console.log("0 - Salir");
        console.log("--------------------------");
        console.log("Créditos: " + this.usuario[0].getCreditos());
        console.log("--------------------------");
    }

    //seleccion de una opcion del menu por consola

    public seleccion() {
        let opcion: number = readlineSync.questionInt("Ingrese una opcion: ");
        if(opcion !== 0){
            switch (opcion) {
                case 1:
                    this.realizarCarga();
                    break;
                case 2:
                    this.juegos[0].setSaldoJuego(this.usuario[0].getCreditos())
                    this.ejecutarJuego(this.juegos[0], this.usuario[0]);
                    break;
                case 3:
                    this.ejecutarJuego(this.juegos[2], this.usuario[0]);
                    break;
                case 4:
                    this.ejecutarJuego(this.juegos[3], this.usuario[0]);
                    break;
                case 5:
                    this.ejecutarJuego(this.juegos[1], this.usuario[0])
                    break;
                case 6:
                    this.realizarRetiro();
                    break;
                default:
                    console.error("Ingrese una opción valida.");
                    break;
            }
            this.iniciar();
        } else {
            console.log("¡Gracias por confiar en nosotros!"); //al ingresar 0
        }
    }
}