import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
//import { Juego } from "./Juego";
import { Usuario } from "./Usuario"
//import { Ruleta } from "./Ruleta";
import { Tragamoneda1} from "./Tragamoneda1";
import { Raspadita } from "./Raspadita"
// main.ts

let casino = new Casino();
let usuario : Usuario = new Usuario()
let ruleta : Ruleta = new Ruleta()
let raspadita : Raspadita = new Raspadita()

casino.agregarUsuario(usuario);
casino.agregarJuego(ruleta);
casino.agregarJuego(raspadita);
casino.iniciar();

// let tragamoneda1 : Tragamoneda1 = new Tragamoneda1()
// casino.agregarJuego(tragamoneda1);