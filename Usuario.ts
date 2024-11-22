export class Usuario{
    //atributos
    private creditos : number = 0;

    //getter
    public getCreditos(): number{
        return this.creditos;
    }

    //setter
    public setCreditos(nuevoCredito): void{
        this.creditos = nuevoCredito;
    }
}