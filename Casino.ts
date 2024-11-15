import * as readlineSync from "readline-sync";


import { Juego } from "./Juego";

export class Casino{
    //atributos
    private juegos : Juego[] = [];
    private creditos : number = 0;
    private minimoDeRetiro : number = 3000;
    private minimoDeCarga : number = 2000;

    //metodos
    public setCreditos(nuevosCreditos : number): void {
        this.creditos = nuevosCreditos;
    }
    public getCreditos(): number{
        return this.creditos
    }
    public getMinimoDeRetiro() : number {
        return this.minimoDeRetiro;
    }
    public getMinimoDeCarga(): number {
        return this.minimoDeCarga;
    }

    public mostrarMenu(){
        console.log("       Casino <nombre>")
        console.log("--------------------------")
        console.log("1 - Cargar creditos.");
        console.log("--------------------------")
        console.log("2 - Jugar Ruleta.")
        console.log("3 - Jugar Tragamonedas 1.");
        console.log("4 - Jugar Tragamonedas 2.");
        console.log("5 - Jugar Maquinax")
        console.log("--------------------------")
        console.log("6 - Retirar creditos.");
        console.log("--------------------------")
        console.log("0 - Salir")
        console.log("--------------------------")
        console.log("Creditos: " + this.getCreditos());
        console.log("--------------------------")
    }

    public seleccion(){
        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        switch (opcion) {
            case 1:
                this.realizarCarga();
                this.iniciar();
                break;
            //case 2: this.ejecutarJuego(juegos[0]) ruleta

            //case 3: this.ejecutarJuego(juegos[1]) tragamonedas1

            //case 4:this.ejecutarJuego(juegos[2]) tragamonedas 2

            //case 5:this.ejecutarJuego(juegos[3]) juegox

            case 6:
                this.realizarRetiro();
                break;

            case 0: 
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

    public ejecutarJuego(juego : Juego): void{
        juego.jugar();
    }

    public realizarRetiro(): void{
        if(this.getCreditos() < this.getMinimoDeRetiro()){
            console.log(`¡El retiro minimo es de $${this.getMinimoDeRetiro()}! Intenta nuevamente.`);//verificamos que disponga de creditos suficientes antes de ingresar a la seccion retirar
            this.iniciar();
        }

        let retiro : number = readlineSync.questionInt(`Ingrese el monto (minimo de retiro $${this.getMinimoDeRetiro()}): `);
        while(retiro > this.getCreditos() || retiro < this.getMinimoDeRetiro()){
            if(retiro > this.getCreditos()){
                console.log("¡Quieres retirar mas creditos de los que tienes! Vuelve a intentarlo.")
                retiro = readlineSync.questionInt(`Ingrese el monto (minimo de retiro $${this.getMinimoDeRetiro()}): `);
            } else if(retiro < 3000) {
                console.log(`¡El retiro minimo es de $${this.getMinimoDeRetiro()}! Intenta nuevamente.`)
                retiro = readlineSync.questionInt(`Ingrese el monto (minimo de retiro $${this.getMinimoDeRetiro()}): `);
            }
        }

        console.log("Retiro realizado con exito.")
        this.setCreditos(this.getCreditos() - retiro);  //si cumple las condiciones
        this.iniciar();
    }

    public realizarCarga(): void {
        let nuevosCreditos : number = readlineSync.questionInt(`Ingrese el monto (minimo de carga $${this.getMinimoDeCarga()}): `);
        while(nuevosCreditos < this.getMinimoDeCarga()){
            console.log(`El minimo de carga es de $${this.getMinimoDeCarga()}`);
            nuevosCreditos = readlineSync.questionInt(`Ingrese el monto (minimo de carga $${this.getMinimoDeCarga()}): `);
        }
        console.log("Carga realizada con exito.")
        this.setCreditos(this.getCreditos() + nuevosCreditos);
    }
}