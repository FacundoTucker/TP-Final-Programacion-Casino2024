export interface JuegoCasino {
    //a la interfaz debemos relacionarla al funcionamiento

    //todos los juegos deben tener un menu apartado
    mostrarMenuJuego(): void;

    //todos los juegos deberian determinar sus apuestas ganadas y perdidas
    determinarGananciaPerdida(gano: boolean, multiplicador : number): void;
}